import compact from 'lodash/compact'
import groupBy from 'lodash/groupBy'
import intersection from 'lodash/intersection'
import map from 'lodash/map'
import values from 'lodash/values'

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

const filterImageList = (imageList, imageListFilter, labelTags) => {
  const filter = {
    startDate: +imageListFilter.startDate / 1000,
    endDate: +imageListFilter.endDate / 1000,
    tags: values(groupBy(compact(map(imageListFilter.tags, (value, tag) => value && tag)), t => labelTags.tags[t].category))
  }
  // console.log('filterImageList', filter, imageListFilter)
  return imageList.filter(image => keepImage(image, filter))
}

export default filterImageList
