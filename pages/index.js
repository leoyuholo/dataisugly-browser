import fetch from 'isomorphic-unfetch'
import keyBy from 'lodash/keyBy'
import { useRouter } from 'next/router'
import PropTypes from 'prop-types'
import React from 'react'
import Browser from '../components/Browser'
import Image from '../components/Image'
import Loading from '../components/Loading'
import config from '../src/config'

const Index = props => {
  const { imageList, labelTags } = props
  const router = useRouter()
  const hasImageInQuery = router.asPath.indexOf('image=') !== -1
  const imageId = router.query?.image
  const image = imageId ? imageList.images.find(i => i.image_name === imageId) : null

  // if (!config.isServer) console.log('Index', labelTags, hasImageInQuery, imageId, image)

  return !hasImageInQuery
    ? (<Browser imageList={imageList} labelTags={labelTags} />)
    : !imageId
      ? (<Loading />)
      : (<Image imageId={imageId} image={image} labelTags={labelTags} />)
}

Index.propTypes = {
  imageList: PropTypes.shape({
    images: PropTypes.array,
    next: PropTypes.string
  }).isRequired,
  labelTags: PropTypes.object
}

export default Index

export const getStaticProps = async () => {
  try {
    const [imageList, labelTags] = await Promise.all([
      fetch(config.imageLists.page[0].url).then(r => r.json()),
      fetch(config.labelTags.url)
        .then(r => r.json())
        .then(labelTags => {
          const tags = keyBy(labelTags.tags, 'tag')
          const subcategories = labelTags.subcategories.map(s => ({
            ...s,
            tags: labelTags.tags.filter(t => t.category === s.category && t.subcategory === s.subcategory)
          }))
          const categories = labelTags.categories.map(c => ({
            ...c,
            subcategories: subcategories.filter(s => s.category === c.category),
            tags: labelTags.tags.filter(t => t.category === c.category)
          }))
          return {
            ...labelTags,
            categories,
            subcategories,
            tags
          }
        })
    ])

    return { props: { imageList, labelTags } }
  } catch (error) {
    console.log('getStaticProps error: ', error)
    return { props: { error: error.message } }
  }
}
