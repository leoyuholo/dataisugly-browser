import intersection from 'lodash/intersection'
import keys from 'lodash/keys'
import pickBy from 'lodash/pickBy'
import union from 'lodash/union'
import { isSubcategoryTag } from './tagHelper'

const keepImage = (image, filter) => {
  let result = true

  if (filter.startDate && (image.datetime - filter.startDate) < 0) result = false
  if (filter.endDate && (image.datetime - filter.endDate) > 0) result = false

  filter.tags.forEach(tags => {
    if (tags.length > 0 && intersection(image.labels, tags).length === 0) {
      result = false
    }
  })

  return result
}

export const filterImages = (filter, labelTags) => {
  return intersection(...filter.map(tags => union(...tags.map(tag => labelTags.all[tag].images))))
}

const filterImageList = (imageList, imageListFilter, labelTags) => {
  const tags = keys(pickBy(imageListFilter.tags))
  const expandedTags = tags.map(t =>
    !isSubcategoryTag(t)
      ? [t]
      : intersection(labelTags.all[t].tags.map(t => t.tag), tags).length === 0
        ? labelTags.all[t].tags.map(t => t.tag)
        : []
  )

  const filter = {
    startDate: +imageListFilter.startDate / 1000,
    endDate: +imageListFilter.endDate / 1000,
    tags: expandedTags.filter(a => a.length)
    // tags: values(groupBy(expandedTags, t => labelTags.all[t].category))
  }

  // console.log('filterImageList', filter, imageListFilter, expandedTags)

  return {
    imageList: imageList.filter(image => keepImage(image, filter)),
    images: filterImages(filter.tags, labelTags)
  }
}

export default filterImageList
