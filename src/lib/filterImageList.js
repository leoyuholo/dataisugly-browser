
const keepImage = (image, filter) => {
  let result = true

  if (filter.startDate && (image.datetime - filter.startDate) < 0) result = false
  if (filter.endDate && (image.datetime - filter.endDate) > 0) result = false

  return result
}

const filterImageList = (imageList, imageListFilter) => {
  const filter = {
    ...imageListFilter,
    startDate: +imageListFilter.startDate / 1000,
    endDate: +imageListFilter.endDate / 1000
  }
  return imageList.filter(image => keepImage(image, filter))
}

export default filterImageList
