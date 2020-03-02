import React from 'react'
import PropTypes from 'prop-types'
import Dialog from '@material-ui/core/Dialog'
import { useRouter } from 'next/router'

import ImageDetail from '../../components/ImageDetail'
import Loading from '../../components/Loading'

const Image = props => {
  const { image } = props
  const router = useRouter()

  if (!image) { return (<Loading />) }

  const handleClose = () => {
    router.push('/')
  }

  return (
    <Dialog fullScreen open={true} onClose={handleClose}>
      <ImageDetail image={image} handleClose={handleClose} />
    </Dialog>
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
