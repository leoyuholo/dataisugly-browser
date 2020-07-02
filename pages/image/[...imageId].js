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

Image.getInitialProps = async ctx => {
  try {
    const [image, labelOptions] = await Promise.all([
      fetch(`${config.imageMeta.baseUrl}/${ctx.query.imageId.slice(-1)[0]}.json`).then(r => r.json()),
      fetch(config.labelOptions.url).then(r => r.json())
    ])

    return { image, labelOptions }
  } catch (error) {
    console.log('getInitialProps error: ', error)
    return { error }
  }
}

export default Image
