import intersection from 'lodash/intersection'
import union from 'lodash/union'
import filterImageList, { filterImages } from './filterImageList'
import { makeCatelog } from './tagHelper'
import { labelTags } from './tagHelper.test'

const catelog = makeCatelog(labelTags)

const imageList = [{
  id: '9qdt28',
  datetime: 1540214810,
  labels: ['data:timeseries', 'fault:colorscale']
}, {
  id: 'f0zcvd',
  datetime: 1581202953,
  labels: ['fault:colorscale', 'form:barchart']
}, {
  id: 'emaz2t',
  datetime: 1578582966,
  labels: ['data:timeseries', 'form:barchart']
}, {
  id: 'agz8vp',
  datetime: 1547741162,
  labels: ['fault:colormess', 'form:barchart']
}]

test('filterImageList should filter images by a single tag', () => {
  const imageListFilter = {
    startDate: new Date(1980, 0, 1),
    endDate: new Date(2021, 0, 1),
    tags: {
      'fault:colorscale': true
    }
  }
  const filteredImageList = [imageList[0], imageList[1]]

  expect(filterImageList(imageList, imageListFilter, catelog).imageList).toEqual(filteredImageList)
})

test('filterImageList should filter images by a subcategory', () => {
  const imageListFilter = {
    startDate: new Date(1980, 0, 1),
    endDate: new Date(2021, 0, 1),
    tags: {
      'subcat:fault:color': true
    }
  }
  const filteredImageList = [imageList[0], imageList[1], imageList[3]]

  expect(filterImageList(imageList, imageListFilter, catelog).imageList).toEqual(filteredImageList)
})

test('filterImageList should ignore subcategory if its tag is in the filter', () => {
  const imageListFilter = {
    startDate: new Date(1980, 0, 1),
    endDate: new Date(2021, 0, 1),
    tags: {
      'subcat:fault:color': true,
      'fault:colorscale': true
    }
  }
  const filteredImageList = [imageList[0], imageList[1]]

  expect(filterImageList(imageList, imageListFilter, catelog).imageList).toEqual(filteredImageList)
})

test('filterImages should collect a list of filtered images', () => {
  const filter = [
    ['fault:colorscale']
  ]
  const filteredImages = catelog.all[filter[0][0]].images

  expect(filterImages(filter, catelog)).toEqual(filteredImages)
})

test('filterImages should union images from two tags', () => {
  const filter = [
    ['fault:colorscale', 'fault:colormess']
  ]
  const filteredImages = union(catelog.all[filter[0][0]].images, catelog.all[filter[0][1]].images)

  expect(filterImages(filter, catelog)).toEqual(filteredImages)
})

test('filterImages should intersect images from two tags', () => {
  const filter = [
    ['fault:colorscale'],
    ['form:barchart']
  ]
  const filteredImages = intersection(catelog.all[filter[0][0]].images, catelog.all[filter[1][0]].images)

  expect(filterImages(filter, catelog)).toEqual(filteredImages)
})
