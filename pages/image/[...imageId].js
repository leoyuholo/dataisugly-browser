import fetch from 'isomorphic-unfetch'
import Head from 'next/head'
import { useRouter as nextUseRouter } from 'next/router'
import PropTypes from 'prop-types'
import React from 'react'
import ImageDetail from '../../components/ImageDetail'
import Loading from '../../components/Loading'
import config from '../../src/config'

const Image = props => {
  if (!props.image) { return (<Loading />) }

  const { image } = props
  const router = nextUseRouter()

  const handleClose = () => {
    router.push(`${config.rootPath}/`)
  }

  return (
    <div>
      <Head>
        <title>Bad Vis Browser</title>
      </Head>
      <ImageDetail open={true} image={image} handleClose={handleClose} />
    </div>
  )
}

Image.propTypes = {
  image: PropTypes.object.isRequired
}

Image.getInitialProps = async ctx => {
  const res = await fetch(`${config.imageMeta.baseUrl}/${ctx.query.imageId.slice(-1)[0]}.json`)
  const json = await res.json()
  return { image: json }
}

export default Image
