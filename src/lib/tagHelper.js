import flatMap from 'lodash/flatMap'
import includes from 'lodash/includes'
import keyBy from 'lodash/keyBy'
import startsWith from 'lodash/startsWith'
import union from 'lodash/union'

const categoryTagPrefix = 'cat'
const subcategoryTagPrefix = 'subcat'
const groupTagPrefix = 'group'

export const makeCategoryTag = category => `${categoryTagPrefix}:${category}`
export const makeSubcategoryTag = (category, subcategory) => `${subcategoryTagPrefix}:${category}:${subcategory}`
export const makeGroupTag = (category, group) => `${groupTagPrefix}:${category}:${group}`

export const isCategoryTag = tag => startsWith(tag, categoryTagPrefix)
export const isSubcategoryTag = tag => startsWith(tag, subcategoryTagPrefix)
export const isGroupTag = tag => startsWith(tag, groupTagPrefix)

export const makeCatelog = labelTags => {
  const tags = labelTags.tags.map(t => ({ ...t, count: t.images.length }))
  const tagsBytag = keyBy(tags, 'tag')

  const subcategories = labelTags.subcategories.map(s => {
    const includeTags = tags.filter(t => t.category === s.category && (t.subcategory === s.subcategory || includes(t.subcategories, s.subcategory)))
    const images = union(...includeTags.map(t => t.images))
    return {
      ...s,
      images,
      tags: includeTags,
      count: images.length,
      tag: makeSubcategoryTag(s.category, s.subcategory)
    }
  })
  const subcategoriesByTag = keyBy(subcategories, 'tag')

  const groups = labelTags.groups.map(g => {
    const includeSubcategories = subcategories.filter(s => s.category === g.category && s.group === g.group)
    const includeTags = flatMap(includeSubcategories, 'tags')
    const images = union(...includeTags.map(t => t.images))
    return {
      ...g,
      images,
      tags: includeTags,
      subcategories: includeSubcategories,
      count: images.length,
      tag: makeGroupTag(g.category, g.group)
    }
  })
  const groupsByTag = keyBy(groups, 'tag')

  const categories = labelTags.categories.map(c => {
    const includeTags = tags.filter(t => t.category === c.category)
    const images = union(...includeTags.map(t => t.images))
    return {
      ...c,
      images,
      tags: includeTags,
      subcategories: subcategories.filter(s => s.category === c.category),
      groups: groups.filter(g => g.category === c.category),
      count: images.length,
      tag: makeCategoryTag(c.category)
    }
  })
  const categoriesByTag = keyBy(categories, 'tag')

  return {
    all: {
      ...tagsBytag,
      ...groupsByTag,
      ...subcategoriesByTag,
      ...categoriesByTag
    },
    categories,
    groups,
    subcategories,
    tags
  }
}
