import React from 'react'
import PropTypes from 'prop-types'
import fetch from 'isomorphic-unfetch'

import Gallery from '../components/Gallery'
import Loading from '../components/Loading'

const Index = props => {
  const { images } = props

  if (!images) {
    return (<Loading />)
  }

  return (
    <div>
      <Gallery images={images} />
    </div>
  )
}

Index.propTypes = {
  images: PropTypes.array
}

Index.getInitialProps = async ctx => {
  const hostname = 'http://localhost:3000'
  const res = await fetch(`${hostname}/gallery/images_top255.json`)
  const json = await res.json()
  return { images: json }
}

export default Index
