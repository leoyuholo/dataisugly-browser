import fetch from 'isomorphic-unfetch'
import Head from 'next/head'
import { useRouter as nextUseRouter } from 'next/router'
import PropTypes from 'prop-types'
import React from 'react'
import ImageDetail from '../../components/ImageDetail'
import Loading from '../../components/Loading'
import config from '../../src/config'

const Image = props => {
  const { image, labelOptions } = props
  const router = nextUseRouter()

  const handleClose = () => {
    router.push(`${config.rootPath}/`)
  }

  return !image ? (<Loading />) : (
    <div>
      <Head>
        <title>Bad Vis Browser</title>
      </Head>
      <ImageDetail open image={image} labelOptions={labelOptions} handleClose={handleClose} />
    </div>
  )
}

Image.propTypes = {
  image: PropTypes.object.isRequired,
  labelOptions: PropTypes.array
}

export default Image

export const getStaticProps = async ({ params }) => {
  try {
    const [image, labelOptions] = await Promise.all([
      fetch(`${config.imageMeta.baseUrl}/${params.imageId}.json`).then(r => r.json()),
      fetch(config.labelOptions.url).then(r => r.json())
    ])

    return { props: { image, labelOptions } }
  } catch (error) {
    console.log('getStaticProps error: ', error)
    return { props: { error: error.message } }
  }
}

export const getStaticPaths = async () => {
  return {
    paths: [
      { params: { imageId: '1yb04c_0' } }
    ],
    fallback: true,
  }
}
