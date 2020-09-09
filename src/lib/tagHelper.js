import includes from 'lodash/includes'
import keyBy from 'lodash/keyBy'
import startsWith from 'lodash/startsWith'
import sumBy from 'lodash/sumBy'
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
      tags: includeTags,
      images,
      count: images.length,
      tag: makeSubcategoryTag(s.category, s.subcategory)
    }
  })
  const subcategoriesByTag = keyBy(subcategories, 'tag')

  const groups = labelTags.groups.map(g => ({
    ...g,
    subcategories: subcategories.filter(s => s.category === g.category && s.group === g.group),
    tag: makeGroupTag(g.category, g.group)
  }))
  const groupsByTag = keyBy(groups, 'tag')

  const categories = labelTags.categories.map(c => ({
    ...c,
    tags: tags.filter(t => t.category === c.category),
    count: sumBy(tags.filter(t => includes(t.category, c.category)), 'count'),
    groups: groups.filter(g => g.category === c.category),
    subcategories: subcategories.filter(s => s.category === c.category),
    tag: makeCategoryTag(c.category)
  }))
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

// export const makeCatelog = labelTags => {
//   const tags = labelTags.tags.map(t => ({ ...t }))
//   const subcategories = labelTags.subcategories.map(s => ({
//     ...s,
//     tags: [],
//     tag: makeSubcategoryTag(s.category, s.subcategory)
//   }))
//   const categories = labelTags.categories.map(c => ({
//     ...c,
//     tags: [],
//     subcategories: [],
//     tag: makeCategoryTag(c.category)
//   }))

//   const all = {
//     ...keyBy(tags, 'tag'),
//     ...keyBy(subcategories, 'tag'),
//     ...keyBy(categories, 'tag')
//   }

//   subcategories.forEach(s => all[makeCategoryTag(s.category)].subcategories.push(s))

//   tags.forEach(t => {
//     all[makeCategoryTag(t.category)].tags.push(t)
//     const subcats = t.subcategories || (t.subcategory ? [t.subcategory] : [])
//     subcats.forEach(s => {
//       all[makeSubcategoryTag(t.category, s)].tags.push(t)
//     })
//   })

//   return {
//     all,
//     categories,
//     subcategories,
//     tags
//   }
// }
