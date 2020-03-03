import React from 'react'
import PropTypes from 'prop-types'
import { useRouter } from 'next/router'
import fetch from 'isomorphic-unfetch'

import ImageDetail from '../../components/ImageDetail'
import Loading from '../../components/Loading'

const Image = props => {
  if (!props.image) { return (<Loading />) }

  const { image } = props
  const router = useRouter()

  const handleClose = () => {
    router.push('/')
  }

  return (
    <ImageDetail open={true} image={image} handleClose={handleClose} />
  )
}

Image.propTypes = {
  image: PropTypes.object.isRequired
}

Image.getInitialProps = async ctx => {
  const hostname = 'http://localhost:3000'
  const res = await fetch(`${hostname}/gallery/meta/${ctx.query.imageId.slice(-1)[0]}.json`)
  const json = await res.json()
  return { image: json }
}

export default Image
