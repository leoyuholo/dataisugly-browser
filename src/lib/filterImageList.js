import includes from 'lodash/includes'
import intersection from 'lodash/intersection'
import keyBy from 'lodash/keyBy'
import keys from 'lodash/keys'
import mapValues from 'lodash/mapValues'
import pickBy from 'lodash/pickBy'
import union from 'lodash/union'
import { isSubcategoryTag } from './tagHelper'

export const filterImages = (filter, labelTags) => {
  return intersection(...filter.map(tags => union(...tags.map(tag => labelTags.all[tag].images))))
}

export const countFilteredImages = (imageList, labelTags) => ({
  ...mapValues(keyBy(labelTags.tags, 'tag'), tag => intersection(tag.images, imageList).length),
  ...mapValues(keyBy(labelTags.subcategories, 'tag'), tag => intersection(tag.images, imageList).length),
  ...mapValues(keyBy(labelTags.groups, 'tag'), tag => intersection(tag.images, imageList).length),
  ...mapValues(keyBy(labelTags.categories, 'tag'), tag => intersection(tag.images, imageList).length)
})

export const expandFilterTags = (imageListFilter, labelTags) => {
  const tags = keys(pickBy(imageListFilter))
  const expandedTags = tags.map(t =>
    !isSubcategoryTag(t)
      ? [t]
      : intersection(labelTags.all[t].tags.map(t => t.tag), tags).length === 0
        ? labelTags.all[t].tags.map(t => t.tag)
        : []
  )

  return expandedTags.filter(a => a.length)
}

const filterImageList = (imageList, imageListFilter, labelTags) => {
  const filter = expandFilterTags(imageListFilter, labelTags)

  if (filter.length === 0) {
    return {
      imageList,
      imageCounts: mapValues(labelTags.all, t => t.count)
    }
  }

  const filteredImageList = filterImages(filter, labelTags)

  // console.log('filterImageList', filter, imageListFilter, expandedTags)

  return {
    imageList: imageList.filter(i => includes(filteredImageList, i.image_name)),
    imageCounts: countFilteredImages(filteredImageList, labelTags)
  }
}

export default filterImageList
