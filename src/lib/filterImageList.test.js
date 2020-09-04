import filterImageList from './filterImageList'
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

test('filterImageList single tag', () => {
  const imageListFilter = {
    startDate: new Date(1980, 0, 1),
    endDate: new Date(2021, 0, 1),
    tags: {
      'fault:colorscale': true
    }
  }
  const filteredImageList = [imageList[0], imageList[1]]

  expect(filterImageList(imageList, imageListFilter, catelog)).toEqual(filteredImageList)
})

test('filterImageList subcategory', () => {
  const imageListFilter = {
    startDate: new Date(1980, 0, 1),
    endDate: new Date(2021, 0, 1),
    tags: {
      'subcat:fault:color': true
    }
  }
  const filteredImageList = [imageList[0], imageList[1], imageList[3]]

  expect(filterImageList(imageList, imageListFilter, catelog)).toEqual(filteredImageList)
})

test('filterImageList disabled subcategory', () => {
  const imageListFilter = {
    startDate: new Date(1980, 0, 1),
    endDate: new Date(2021, 0, 1),
    tags: {
      'subcat:fault:color': true,
      'fault:colorscale': true
    }
  }
  const filteredImageList = [imageList[0], imageList[1]]

  expect(filterImageList(imageList, imageListFilter, catelog)).toEqual(filteredImageList)
})
