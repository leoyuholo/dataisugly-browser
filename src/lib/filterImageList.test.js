import intersection from 'lodash/intersection'
import union from 'lodash/union'
import filterImageList, { countFilteredImages, expandFilterTags, filterImages } from './filterImageList'
import { makeCatelog } from './tagHelper'
import { labelTags } from './tagHelper.test'

const catelog = makeCatelog(labelTags)

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
    ['fault:colormess'],
    ['form:barchart']
  ]
  const filteredImages = intersection(catelog.all[filter[0][0]].images, catelog.all[filter[1][0]].images)

  expect(filterImages(filter, catelog)).toEqual(filteredImages)
})

test('filteredImageCount should count filtered images of each tag', () => {
  const filter = [
    ['fault:colorscale']
  ]
  const filteredImageCounts = {
    'cat:data': 0,
    'cat:fault': 2,
    'cat:form': 0,
    'data:timeseries': 0,
    'fault:colormess': 2,
    'fault:colorscale': 2,
    'form:barchart': 0,
    'form:stackedbarchart': 0,
    'group:fault:grammar': 2,
    'group:fault:pipeline': 2,
    'subcat:data:time': 0,
    'subcat:fault:color': 2,
    'subcat:fault:design': 2,
    'subcat:fault:visual': 2,
    'subcat:form:bar': 0
  }

  const filteredImages = filterImages(filter, catelog)

  expect(countFilteredImages(filteredImages, catelog)).toEqual(filteredImageCounts)
})

test('filteredImageCount should count filtered images by multiple tags', () => {
  const filter = [
    ['fault:colorscale', 'fault:colormess']
  ]
  const filteredImageCounts = {
    'fault:colorscale': 2,
    'fault:colormess': 5,
    'form:barchart': 1,
    'form:stackedbarchart': 1,
    'data:timeseries': 2,
    'subcat:fault:color': 5,
    'subcat:fault:design': 2,
    'subcat:fault:visual': 5,
    'subcat:form:bar': 2,
    'subcat:data:time': 2,
    'group:fault:grammar': 5,
    'group:fault:pipeline': 5,
    'cat:fault': 5,
    'cat:form': 2,
    'cat:data': 2
  }

  const filteredImages = filterImages(filter, catelog)

  expect(countFilteredImages(filteredImages, catelog)).toEqual(filteredImageCounts)
})

test('filteredImageCount should count filtered images by multiple tags', () => {
  const filter = [
    ['fault:colormess'],
    ['form:barchart']
  ]
  const filteredImageCounts = {
    'fault:colorscale': 0,
    'fault:colormess': 1,
    'form:barchart': 1,
    'form:stackedbarchart': 0,
    'data:timeseries': 1,
    'subcat:fault:color': 1,
    'subcat:fault:design': 0,
    'subcat:fault:visual': 1,
    'subcat:form:bar': 1,
    'subcat:data:time': 1,
    'group:fault:grammar': 1,
    'group:fault:pipeline': 1,
    'cat:fault': 1,
    'cat:form': 1,
    'cat:data': 1
  }

  const filteredImages = filterImages(filter, catelog)

  // console.log(countFilteredImages(filteredImages, catelog))

  expect(countFilteredImages(filteredImages, catelog)).toEqual(filteredImageCounts)
})

test('expandFilterTags should keep a single tag', () => {
  const filter = {
    'fault:colormess': true
  }
  const expandedTags = [
    ['fault:colormess']
  ]

  expect(expandFilterTags(filter, catelog)).toEqual(expandedTags)
})

test('expandFilterTags should keep a both tag', () => {
  const filter = {
    'fault:colormess': true,
    'form:barchart': true
  }
  const expandedTags = [
    ['fault:colormess'],
    ['form:barchart']
  ]

  expect(expandFilterTags(filter, catelog)).toEqual(expandedTags)
})

test('expandFilterTags should expand a subcategory', () => {
  const filter = {
    'subcat:fault:color': true
  }
  const expandedTags = [
    ['fault:colorscale', 'fault:colormess']
  ]

  expect(expandFilterTags(filter, catelog)).toEqual(expandedTags)
})

const imageList = [{
  image_name: '9u4i8v_0',
  labels: ['fault:colorscale', 'fault:colormess']
}, {
  image_name: 'ekmqhs_0',
  labels: ['data:timeseries', 'fault:colormess', 'form:barchart']
}, {
  image_name: 'gcpu1n_0',
  labels: ['data:timeseries', 'form:barchart']
}, {
  image_name: '705oer_0',
  labels: ['fault:colormess', 'form:stackedbarchart']
}]

test('filterImageList should filter images by a single tag', () => {
  const imageListFilter = {
    'fault:colorscale': true
  }
  const filteredImageList = [imageList[0]]

  expect(filterImageList(imageList, imageListFilter, catelog).imageList).toEqual(filteredImageList)
})

test('filterImageList should filter images by a subcategory', () => {
  const imageListFilter = {
    'subcat:fault:color': true
  }
  const filteredImageList = [imageList[0], imageList[1], imageList[3]]

  expect(filterImageList(imageList, imageListFilter, catelog).imageList).toEqual(filteredImageList)
})

test('filterImageList should ignore subcategory if its tag is in the filter', () => {
  const imageListFilter = {
    'subcat:fault:color': true,
    'fault:colorscale': true
  }
  const filteredImageList = [imageList[0]]

  expect(filterImageList(imageList, imageListFilter, catelog).imageList).toEqual(filteredImageList)
})
