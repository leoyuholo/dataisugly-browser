import fetch from 'isomorphic-unfetch'
import { useRouter } from 'next/router'
import PropTypes from 'prop-types'
import React from 'react'
import Browser from '../components/Browser'
import Image from '../components/Image'
import Loading from '../components/Loading'
import config from '../src/config'
import { makeCatelog } from '../src/lib/tagHelper'

const Index = props => {
  const { imageList } = props
  const router = useRouter()
  const hasImageInQuery = router.asPath.indexOf('image=') !== -1
  const imageId = router.query?.image

  const labelTags = makeCatelog(props.labelTags)

  if (!config.isServer) {
    console.log('Index', labelTags)
    // console.log('Index', hasImageInQuery, imageId)
  }

  return !hasImageInQuery
    ? (<Browser imageList={imageList} labelTags={labelTags} />)
    : !imageId
      ? (<Loading />)
      : (<Image imageId={imageId} labelTags={labelTags} />)
}

Index.propTypes = {
  imageList: PropTypes.shape({
    images: PropTypes.array
  }).isRequired,
  labelTags: PropTypes.object
}

export default Index

export const getStaticProps = async () => {
  try {
    const [imageList, labelTags] = await Promise.all([
      fetch(config.imageLists.dir.url).then(r => r.json()),
      fetch(config.labelTags.url)
        .then(r => r.json())
    ])

    return { props: { imageList, labelTags } }
  } catch (error) {
    console.log('getStaticProps error:', error)
    return { props: { error: error.message } }
  }
}
