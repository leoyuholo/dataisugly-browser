import { compact, intersection, map } from 'lodash'

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

const filterImageList = (imageList, imageListFilter) => {
  const filter = {
    tags: map(imageListFilter.tags, (tags, category) => compact(map(tags, (value, tag) => value ? `${category}:${tag}` : false))),
    startDate: +imageListFilter.startDate / 1000,
    endDate: +imageListFilter.endDate / 1000
  }
  // console.log('filterImageList', filter, imageListFilter)
  return imageList.filter(image => keepImage(image, filter))
}

export default filterImageList
