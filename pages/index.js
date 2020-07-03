import fetch from 'isomorphic-unfetch'
import { useRouter } from 'next/router'
import PropTypes from 'prop-types'
import React from 'react'
import Browser from '../components/Browser'
import Image from '../components/Image'
import Loading from '../components/Loading'
import config from '../src/config'

const Index = props => {
  const { imageList, labelOptions } = props
  const router = useRouter()
  const hasImageInQuery = router.asPath.indexOf('image=') !== -1
  const imageId = router.query?.image
  const image = imageId ? imageList.images.find(i => i.image_name === imageId) : null

  return !hasImageInQuery ?
    (<Browser imageList={imageList} labelOptions={labelOptions} />) :
    !imageId ?
      (<Loading />) :
      (<Image imageId={imageId} image={image} labelOptions={labelOptions} />)
}

Index.propTypes = {
  imageList: PropTypes.shape({
    images: PropTypes.array,
    next: PropTypes.string
  }).isRequired,
  labelOptions: PropTypes.array.isRequired
}

export default Index

export const getStaticProps = async () => {
  try {
    const [imageList, labelOptions] = await Promise.all([
      fetch(config.imageLists.page[0].url).then(r => r.json()),
      fetch(config.labelOptions.url).then(r => r.json())
    ])

    return { props: { imageList, labelOptions } }
  } catch (error) {
    console.log('getStaticProps error: ', error)
    return { props: { error: error.message } }
  }
}
