import {
  makeCategoryTag,
  makeCatelog,
  makeSubcategoryTag
} from './tagHelper'

export const labelTags = {
  categories: [{
    category: 'fault',
    hierarchical: true
  }, {
    category: 'form',
    group_subcat_threshold: 10
  }, {
    category: 'data'
  }],
  subcategories: [{
    category: 'fault',
    group: 'grammar',
    subcategory: 'color'
  }, {
    category: 'fault',
    group: 'pipeline',
    subcategory: 'design'
  }, {
    category: 'fault',
    group: 'pipeline',
    subcategory: 'visual'
  }, {
    category: 'form',
    subcategory: 'bar'
  }, {
    category: 'data',
    subcategory: 'time'
  }],
  groups: [{
    category: 'fault',
    group: 'grammar'
  }, {
    category: 'fault',
    group: 'pipeline'
  }],
  tags: [{
    tag: 'fault:colorscale',
    subcategories: ['design', 'color'],
    category: 'fault',
    images: ['h11ynf_0', '9u4i8v_0']
  }, {
    tag: 'fault:colormess',
    subcategories: ['visual', 'color'],
    category: 'fault',
    images: ['fmfxxq_0', '705oer_0', 'h11ynf_0', 'ekmqhs_0', '9u4i8v_0']
  }, {
    tag: 'form:barchart',
    subcategory: 'bar',
    category: 'form',
    images: ['ccvzbi_0', 'b7fsls_0', '2zjfyt_0', 'gcpu1n_0', 'ekmqhs_0', '21uju6_0', '7v6ul8_0']
  }, {
    tag: 'form:stackedbarchart',
    subcategory: 'bar',
    category: 'form',
    images: ['705oer_0']
  }, {
    tag: 'data:timeseries',
    subcategory: 'time',
    category: 'data',
    images: ['ccvzbi_0', 'fmfxxq_0', 'b7fsls_0', 'gcpu1n_0', 'ekmqhs_0', '7v6ul8_0']
  }]
}

test('makeCategoryTag', () => {
  const category = 'fault'
  const categoryTag = 'cat:fault'

  expect(makeCategoryTag(category)).toBe(categoryTag)
})

test('makeCategoryTag', () => {
  const category = 'fault'
  const subcategory = 'derive'
  const subcategoryTag = 'subcat:fault:derive'

  expect(makeSubcategoryTag(category, subcategory)).toBe(subcategoryTag)
})

test('makeCatelog', () => {
  const catelog = makeCatelog(labelTags)

  expect(catelog.all['form:barchart']).toMatchObject(labelTags.tags[2])
  expect(catelog.all['subcat:fault:color']).toMatchObject(labelTags.subcategories[0])
  expect(catelog.categories[0]).toMatchObject(labelTags.categories[0])
  expect(catelog.categories[0].groups[0]).toMatchObject(labelTags.groups[0])
  expect(catelog.categories[0].subcategories[0]).toMatchObject(labelTags.subcategories[0])
  expect(catelog.categories[0].subcategories[0].tags[0]).toMatchObject(labelTags.tags[0])
})

test('makeCatelog match', () => {
  const catelog = {
    all: {
      'fault:colorscale': {
        tag: 'fault:colorscale',
        subcategories: ['design', 'color'],
        category: 'fault',
        images: ['h11ynf_0', '9u4i8v_0'],
        count: 2
      },
      'fault:colormess': {
        tag: 'fault:colormess',
        subcategories: ['visual', 'color'],
        category: 'fault',
        images: ['fmfxxq_0', '705oer_0', 'h11ynf_0', 'ekmqhs_0', '9u4i8v_0'],
        count: 5
      },
      'form:barchart': {
        tag: 'form:barchart',
        subcategory: 'bar',
        category: 'form',
        images: ['ccvzbi_0', 'b7fsls_0', '2zjfyt_0', 'gcpu1n_0', 'ekmqhs_0', '21uju6_0', '7v6ul8_0'],
        count: 7
      },
      'form:stackedbarchart': {
        tag: 'form:stackedbarchart',
        subcategory: 'bar',
        category: 'form',
        images: ['705oer_0'],
        count: 1
      },
      'data:timeseries': {
        tag: 'data:timeseries',
        subcategory: 'time',
        category: 'data',
        images: ['ccvzbi_0', 'fmfxxq_0', 'b7fsls_0', 'gcpu1n_0', 'ekmqhs_0', '7v6ul8_0'],
        count: 6
      },
      'group:fault:grammar': {
        category: 'fault',
        group: 'grammar',
        images: ['h11ynf_0', '9u4i8v_0', 'fmfxxq_0', '705oer_0', 'ekmqhs_0'],
        tags: [{
          tag: 'fault:colorscale',
          subcategories: ['design', 'color'],
          category: 'fault',
          images: ['h11ynf_0', '9u4i8v_0'],
          count: 2
        }, {
          tag: 'fault:colormess',
          subcategories: ['visual', 'color'],
          category: 'fault',
          images: ['fmfxxq_0', '705oer_0', 'h11ynf_0', 'ekmqhs_0', '9u4i8v_0'],
          count: 5
        }],
        subcategories: [{
          category: 'fault',
          group: 'grammar',
          subcategory: 'color',
          images: ['h11ynf_0', '9u4i8v_0', 'fmfxxq_0', '705oer_0', 'ekmqhs_0'],
          tags: [{
            tag: 'fault:colorscale',
            subcategories: ['design', 'color'],
            category: 'fault',
            images: ['h11ynf_0', '9u4i8v_0'],
            count: 2
          }, {
            tag: 'fault:colormess',
            subcategories: ['visual', 'color'],
            category: 'fault',
            images: ['fmfxxq_0', '705oer_0', 'h11ynf_0', 'ekmqhs_0', '9u4i8v_0'],
            count: 5
          }],
          count: 5,
          tag: 'subcat:fault:color'
        }],
        count: 5,
        tag: 'group:fault:grammar'
      },
      'group:fault:pipeline': {
        category: 'fault',
        group: 'pipeline',
        images: ['h11ynf_0', '9u4i8v_0', 'fmfxxq_0', '705oer_0', 'ekmqhs_0'],
        tags: [{
          tag: 'fault:colorscale',
          subcategories: ['design', 'color'],
          category: 'fault',
          images: ['h11ynf_0', '9u4i8v_0'],
          count: 2
        }, {
          tag: 'fault:colormess',
          subcategories: ['visual', 'color'],
          category: 'fault',
          images: ['fmfxxq_0', '705oer_0', 'h11ynf_0', 'ekmqhs_0', '9u4i8v_0'],
          count: 5
        }],
        subcategories: [{
          category: 'fault',
          group: 'pipeline',
          subcategory: 'design',
          images: ['h11ynf_0', '9u4i8v_0'],
          tags: [{
            tag: 'fault:colorscale',
            subcategories: ['design', 'color'],
            category: 'fault',
            images: ['h11ynf_0', '9u4i8v_0'],
            count: 2
          }],
          count: 2,
          tag: 'subcat:fault:design'
        }, {
          category: 'fault',
          group: 'pipeline',
          subcategory: 'visual',
          images: ['fmfxxq_0', '705oer_0', 'h11ynf_0', 'ekmqhs_0', '9u4i8v_0'],
          tags: [{
            tag: 'fault:colormess',
            subcategories: ['visual', 'color'],
            category: 'fault',
            images: ['fmfxxq_0', '705oer_0', 'h11ynf_0', 'ekmqhs_0', '9u4i8v_0'],
            count: 5
          }],
          count: 5,
          tag: 'subcat:fault:visual'
        }],
        count: 5,
        tag: 'group:fault:pipeline'
      },
      'subcat:fault:color': {
        category: 'fault',
        group: 'grammar',
        subcategory: 'color',
        images: ['h11ynf_0', '9u4i8v_0', 'fmfxxq_0', '705oer_0', 'ekmqhs_0'],
        tags: [{
          tag: 'fault:colorscale',
          subcategories: ['design', 'color'],
          category: 'fault',
          images: ['h11ynf_0', '9u4i8v_0'],
          count: 2
        }, {
          tag: 'fault:colormess',
          subcategories: ['visual', 'color'],
          category: 'fault',
          images: ['fmfxxq_0', '705oer_0', 'h11ynf_0', 'ekmqhs_0', '9u4i8v_0'],
          count: 5
        }],
        count: 5,
        tag: 'subcat:fault:color'
      },
      'subcat:fault:design': {
        category: 'fault',
        group: 'pipeline',
        subcategory: 'design',
        images: ['h11ynf_0', '9u4i8v_0'],
        tags: [{
          tag: 'fault:colorscale',
          subcategories: ['design', 'color'],
          category: 'fault',
          images: ['h11ynf_0', '9u4i8v_0'],
          count: 2
        }],
        count: 2,
        tag: 'subcat:fault:design'
      },
      'subcat:fault:visual': {
        category: 'fault',
        group: 'pipeline',
        subcategory: 'visual',
        images: ['fmfxxq_0', '705oer_0', 'h11ynf_0', 'ekmqhs_0', '9u4i8v_0'],
        tags: [{
          tag: 'fault:colormess',
          subcategories: ['visual', 'color'],
          category: 'fault',
          images: ['fmfxxq_0', '705oer_0', 'h11ynf_0', 'ekmqhs_0', '9u4i8v_0'],
          count: 5
        }],
        count: 5,
        tag: 'subcat:fault:visual'
      },
      'subcat:form:bar': {
        category: 'form',
        subcategory: 'bar',
        images: ['ccvzbi_0', 'b7fsls_0', '2zjfyt_0', 'gcpu1n_0', 'ekmqhs_0', '21uju6_0', '7v6ul8_0', '705oer_0'],
        tags: [{
          tag: 'form:barchart',
          subcategory: 'bar',
          category: 'form',
          images: ['ccvzbi_0', 'b7fsls_0', '2zjfyt_0', 'gcpu1n_0', 'ekmqhs_0', '21uju6_0', '7v6ul8_0'],
          count: 7
        }, {
          tag: 'form:stackedbarchart',
          subcategory: 'bar',
          category: 'form',
          images: ['705oer_0'],
          count: 1
        }],
        count: 8,
        tag: 'subcat:form:bar'
      },
      'subcat:data:time': {
        category: 'data',
        subcategory: 'time',
        images: ['ccvzbi_0', 'fmfxxq_0', 'b7fsls_0', 'gcpu1n_0', 'ekmqhs_0', '7v6ul8_0'],
        tags: [{
          tag: 'data:timeseries',
          subcategory: 'time',
          category: 'data',
          images: ['ccvzbi_0', 'fmfxxq_0', 'b7fsls_0', 'gcpu1n_0', 'ekmqhs_0', '7v6ul8_0'],
          count: 6
        }],
        count: 6,
        tag: 'subcat:data:time'
      },
      'cat:fault': {
        category: 'fault',
        hierarchical: true,
        images: ['h11ynf_0', '9u4i8v_0', 'fmfxxq_0', '705oer_0', 'ekmqhs_0'],
        tags: [{
          tag: 'fault:colorscale',
          subcategories: ['design', 'color'],
          category: 'fault',
          images: ['h11ynf_0', '9u4i8v_0'],
          count: 2
        }, {
          tag: 'fault:colormess',
          subcategories: ['visual', 'color'],
          category: 'fault',
          images: ['fmfxxq_0', '705oer_0', 'h11ynf_0', 'ekmqhs_0', '9u4i8v_0'],
          count: 5
        }],
        subcategories: [{
          category: 'fault',
          group: 'grammar',
          subcategory: 'color',
          images: ['h11ynf_0', '9u4i8v_0', 'fmfxxq_0', '705oer_0', 'ekmqhs_0'],
          tags: [{
            tag: 'fault:colorscale',
            subcategories: ['design', 'color'],
            category: 'fault',
            images: ['h11ynf_0', '9u4i8v_0'],
            count: 2
          }, {
            tag: 'fault:colormess',
            subcategories: ['visual', 'color'],
            category: 'fault',
            images: ['fmfxxq_0', '705oer_0', 'h11ynf_0', 'ekmqhs_0', '9u4i8v_0'],
            count: 5
          }],
          count: 5,
          tag: 'subcat:fault:color'
        }, {
          category: 'fault',
          group: 'pipeline',
          subcategory: 'design',
          images: ['h11ynf_0', '9u4i8v_0'],
          tags: [{
            tag: 'fault:colorscale',
            subcategories: ['design', 'color'],
            category: 'fault',
            images: ['h11ynf_0', '9u4i8v_0'],
            count: 2
          }],
          count: 2,
          tag: 'subcat:fault:design'
        }, {
          category: 'fault',
          group: 'pipeline',
          subcategory: 'visual',
          images: ['fmfxxq_0', '705oer_0', 'h11ynf_0', 'ekmqhs_0', '9u4i8v_0'],
          tags: [{
            tag: 'fault:colormess',
            subcategories: ['visual', 'color'],
            category: 'fault',
            images: ['fmfxxq_0', '705oer_0', 'h11ynf_0', 'ekmqhs_0', '9u4i8v_0'],
            count: 5
          }],
          count: 5,
          tag: 'subcat:fault:visual'
        }],
        groups: [{
          category: 'fault',
          group: 'grammar',
          images: ['h11ynf_0', '9u4i8v_0', 'fmfxxq_0', '705oer_0', 'ekmqhs_0'],
          tags: [{
            tag: 'fault:colorscale',
            subcategories: ['design', 'color'],
            category: 'fault',
            images: ['h11ynf_0', '9u4i8v_0'],
            count: 2
          }, {
            tag: 'fault:colormess',
            subcategories: ['visual', 'color'],
            category: 'fault',
            images: ['fmfxxq_0', '705oer_0', 'h11ynf_0', 'ekmqhs_0', '9u4i8v_0'],
            count: 5
          }],
          subcategories: [{
            category: 'fault',
            group: 'grammar',
            subcategory: 'color',
            images: ['h11ynf_0', '9u4i8v_0', 'fmfxxq_0', '705oer_0', 'ekmqhs_0'],
            tags: [{
              tag: 'fault:colorscale',
              subcategories: ['design', 'color'],
              category: 'fault',
              images: ['h11ynf_0', '9u4i8v_0'],
              count: 2
            }, {
              tag: 'fault:colormess',
              subcategories: ['visual', 'color'],
              category: 'fault',
              images: ['fmfxxq_0', '705oer_0', 'h11ynf_0', 'ekmqhs_0', '9u4i8v_0'],
              count: 5
            }],
            count: 5,
            tag: 'subcat:fault:color'
          }],
          count: 5,
          tag: 'group:fault:grammar'
        }, {
          category: 'fault',
          group: 'pipeline',
          images: ['h11ynf_0', '9u4i8v_0', 'fmfxxq_0', '705oer_0', 'ekmqhs_0'],
          tags: [{
            tag: 'fault:colorscale',
            subcategories: ['design', 'color'],
            category: 'fault',
            images: ['h11ynf_0', '9u4i8v_0'],
            count: 2
          }, {
            tag: 'fault:colormess',
            subcategories: ['visual', 'color'],
            category: 'fault',
            images: ['fmfxxq_0', '705oer_0', 'h11ynf_0', 'ekmqhs_0', '9u4i8v_0'],
            count: 5
          }],
          subcategories: [{
            category: 'fault',
            group: 'pipeline',
            subcategory: 'design',
            images: ['h11ynf_0', '9u4i8v_0'],
            tags: [{
              tag: 'fault:colorscale',
              subcategories: ['design', 'color'],
              category: 'fault',
              images: ['h11ynf_0', '9u4i8v_0'],
              count: 2
            }],
            count: 2,
            tag: 'subcat:fault:design'
          }, {
            category: 'fault',
            group: 'pipeline',
            subcategory: 'visual',
            images: ['fmfxxq_0', '705oer_0', 'h11ynf_0', 'ekmqhs_0', '9u4i8v_0'],
            tags: [{
              tag: 'fault:colormess',
              subcategories: ['visual', 'color'],
              category: 'fault',
              images: ['fmfxxq_0', '705oer_0', 'h11ynf_0', 'ekmqhs_0', '9u4i8v_0'],
              count: 5
            }],
            count: 5,
            tag: 'subcat:fault:visual'
          }],
          count: 5,
          tag: 'group:fault:pipeline'
        }],
        count: 5,
        tag: 'cat:fault'
      },
      'cat:form': {
        category: 'form',
        group_subcat_threshold: 10,
        images: ['ccvzbi_0', 'b7fsls_0', '2zjfyt_0', 'gcpu1n_0', 'ekmqhs_0', '21uju6_0', '7v6ul8_0', '705oer_0'],
        tags: [{
          tag: 'form:barchart',
          subcategory: 'bar',
          category: 'form',
          images: ['ccvzbi_0', 'b7fsls_0', '2zjfyt_0', 'gcpu1n_0', 'ekmqhs_0', '21uju6_0', '7v6ul8_0'],
          count: 7
        }, {
          tag: 'form:stackedbarchart',
          subcategory: 'bar',
          category: 'form',
          images: ['705oer_0'],
          count: 1
        }],
        subcategories: [{
          category: 'form',
          subcategory: 'bar',
          images: ['ccvzbi_0', 'b7fsls_0', '2zjfyt_0', 'gcpu1n_0', 'ekmqhs_0', '21uju6_0', '7v6ul8_0', '705oer_0'],
          tags: [{
            tag: 'form:barchart',
            subcategory: 'bar',
            category: 'form',
            images: ['ccvzbi_0', 'b7fsls_0', '2zjfyt_0', 'gcpu1n_0', 'ekmqhs_0', '21uju6_0', '7v6ul8_0'],
            count: 7
          }, {
            tag: 'form:stackedbarchart',
            subcategory: 'bar',
            category: 'form',
            images: ['705oer_0'],
            count: 1
          }],
          count: 8,
          tag: 'subcat:form:bar'
        }],
        groups: [],
        count: 8,
        tag: 'cat:form'
      },
      'cat:data': {
        category: 'data',
        images: ['ccvzbi_0', 'fmfxxq_0', 'b7fsls_0', 'gcpu1n_0', 'ekmqhs_0', '7v6ul8_0'],
        tags: [{
          tag: 'data:timeseries',
          subcategory: 'time',
          category: 'data',
          images: ['ccvzbi_0', 'fmfxxq_0', 'b7fsls_0', 'gcpu1n_0', 'ekmqhs_0', '7v6ul8_0'],
          count: 6
        }],
        subcategories: [{
          category: 'data',
          subcategory: 'time',
          images: ['ccvzbi_0', 'fmfxxq_0', 'b7fsls_0', 'gcpu1n_0', 'ekmqhs_0', '7v6ul8_0'],
          tags: [{
            tag: 'data:timeseries',
            subcategory: 'time',
            category: 'data',
            images: ['ccvzbi_0', 'fmfxxq_0', 'b7fsls_0', 'gcpu1n_0', 'ekmqhs_0', '7v6ul8_0'],
            count: 6
          }],
          count: 6,
          tag: 'subcat:data:time'
        }],
        groups: [],
        count: 6,
        tag: 'cat:data'
      }
    },
    categories: [{
      category: 'fault',
      hierarchical: true,
      images: ['h11ynf_0', '9u4i8v_0', 'fmfxxq_0', '705oer_0', 'ekmqhs_0'],
      tags: [{
        tag: 'fault:colorscale',
        subcategories: ['design', 'color'],
        category: 'fault',
        images: ['h11ynf_0', '9u4i8v_0'],
        count: 2
      }, {
        tag: 'fault:colormess',
        subcategories: ['visual', 'color'],
        category: 'fault',
        images: ['fmfxxq_0', '705oer_0', 'h11ynf_0', 'ekmqhs_0', '9u4i8v_0'],
        count: 5
      }],
      subcategories: [{
        category: 'fault',
        group: 'grammar',
        subcategory: 'color',
        images: ['h11ynf_0', '9u4i8v_0', 'fmfxxq_0', '705oer_0', 'ekmqhs_0'],
        tags: [{
          tag: 'fault:colorscale',
          subcategories: ['design', 'color'],
          category: 'fault',
          images: ['h11ynf_0', '9u4i8v_0'],
          count: 2
        }, {
          tag: 'fault:colormess',
          subcategories: ['visual', 'color'],
          category: 'fault',
          images: ['fmfxxq_0', '705oer_0', 'h11ynf_0', 'ekmqhs_0', '9u4i8v_0'],
          count: 5
        }],
        count: 5,
        tag: 'subcat:fault:color'
      }, {
        category: 'fault',
        group: 'pipeline',
        subcategory: 'design',
        images: ['h11ynf_0', '9u4i8v_0'],
        tags: [{
          tag: 'fault:colorscale',
          subcategories: ['design', 'color'],
          category: 'fault',
          images: ['h11ynf_0', '9u4i8v_0'],
          count: 2
        }],
        count: 2,
        tag: 'subcat:fault:design'
      }, {
        category: 'fault',
        group: 'pipeline',
        subcategory: 'visual',
        images: ['fmfxxq_0', '705oer_0', 'h11ynf_0', 'ekmqhs_0', '9u4i8v_0'],
        tags: [{
          tag: 'fault:colormess',
          subcategories: ['visual', 'color'],
          category: 'fault',
          images: ['fmfxxq_0', '705oer_0', 'h11ynf_0', 'ekmqhs_0', '9u4i8v_0'],
          count: 5
        }],
        count: 5,
        tag: 'subcat:fault:visual'
      }],
      groups: [{
        category: 'fault',
        group: 'grammar',
        images: ['h11ynf_0', '9u4i8v_0', 'fmfxxq_0', '705oer_0', 'ekmqhs_0'],
        tags: [{
          tag: 'fault:colorscale',
          subcategories: ['design', 'color'],
          category: 'fault',
          images: ['h11ynf_0', '9u4i8v_0'],
          count: 2
        }, {
          tag: 'fault:colormess',
          subcategories: ['visual', 'color'],
          category: 'fault',
          images: ['fmfxxq_0', '705oer_0', 'h11ynf_0', 'ekmqhs_0', '9u4i8v_0'],
          count: 5
        }],
        subcategories: [{
          category: 'fault',
          group: 'grammar',
          subcategory: 'color',
          images: ['h11ynf_0', '9u4i8v_0', 'fmfxxq_0', '705oer_0', 'ekmqhs_0'],
          tags: [{
            tag: 'fault:colorscale',
            subcategories: ['design', 'color'],
            category: 'fault',
            images: ['h11ynf_0', '9u4i8v_0'],
            count: 2
          }, {
            tag: 'fault:colormess',
            subcategories: ['visual', 'color'],
            category: 'fault',
            images: ['fmfxxq_0', '705oer_0', 'h11ynf_0', 'ekmqhs_0', '9u4i8v_0'],
            count: 5
          }],
          count: 5,
          tag: 'subcat:fault:color'
        }],
        count: 5,
        tag: 'group:fault:grammar'
      }, {
        category: 'fault',
        group: 'pipeline',
        images: ['h11ynf_0', '9u4i8v_0', 'fmfxxq_0', '705oer_0', 'ekmqhs_0'],
        tags: [{
          tag: 'fault:colorscale',
          subcategories: ['design', 'color'],
          category: 'fault',
          images: ['h11ynf_0', '9u4i8v_0'],
          count: 2
        }, {
          tag: 'fault:colormess',
          subcategories: ['visual', 'color'],
          category: 'fault',
          images: ['fmfxxq_0', '705oer_0', 'h11ynf_0', 'ekmqhs_0', '9u4i8v_0'],
          count: 5
        }],
        subcategories: [{
          category: 'fault',
          group: 'pipeline',
          subcategory: 'design',
          images: ['h11ynf_0', '9u4i8v_0'],
          tags: [{
            tag: 'fault:colorscale',
            subcategories: ['design', 'color'],
            category: 'fault',
            images: ['h11ynf_0', '9u4i8v_0'],
            count: 2
          }],
          count: 2,
          tag: 'subcat:fault:design'
        }, {
          category: 'fault',
          group: 'pipeline',
          subcategory: 'visual',
          images: ['fmfxxq_0', '705oer_0', 'h11ynf_0', 'ekmqhs_0', '9u4i8v_0'],
          tags: [{
            tag: 'fault:colormess',
            subcategories: ['visual', 'color'],
            category: 'fault',
            images: ['fmfxxq_0', '705oer_0', 'h11ynf_0', 'ekmqhs_0', '9u4i8v_0'],
            count: 5
          }],
          count: 5,
          tag: 'subcat:fault:visual'
        }],
        count: 5,
        tag: 'group:fault:pipeline'
      }],
      count: 5,
      tag: 'cat:fault'
    }, {
      category: 'form',
      group_subcat_threshold: 10,
      images: ['ccvzbi_0', 'b7fsls_0', '2zjfyt_0', 'gcpu1n_0', 'ekmqhs_0', '21uju6_0', '7v6ul8_0', '705oer_0'],
      tags: [{
        tag: 'form:barchart',
        subcategory: 'bar',
        category: 'form',
        images: ['ccvzbi_0', 'b7fsls_0', '2zjfyt_0', 'gcpu1n_0', 'ekmqhs_0', '21uju6_0', '7v6ul8_0'],
        count: 7
      }, {
        tag: 'form:stackedbarchart',
        subcategory: 'bar',
        category: 'form',
        images: ['705oer_0'],
        count: 1
      }],
      subcategories: [{
        category: 'form',
        subcategory: 'bar',
        images: ['ccvzbi_0', 'b7fsls_0', '2zjfyt_0', 'gcpu1n_0', 'ekmqhs_0', '21uju6_0', '7v6ul8_0', '705oer_0'],
        tags: [{
          tag: 'form:barchart',
          subcategory: 'bar',
          category: 'form',
          images: ['ccvzbi_0', 'b7fsls_0', '2zjfyt_0', 'gcpu1n_0', 'ekmqhs_0', '21uju6_0', '7v6ul8_0'],
          count: 7
        }, {
          tag: 'form:stackedbarchart',
          subcategory: 'bar',
          category: 'form',
          images: ['705oer_0'],
          count: 1
        }],
        count: 8,
        tag: 'subcat:form:bar'
      }],
      groups: [],
      count: 8,
      tag: 'cat:form'
    }, {
      category: 'data',
      images: ['ccvzbi_0', 'fmfxxq_0', 'b7fsls_0', 'gcpu1n_0', 'ekmqhs_0', '7v6ul8_0'],
      tags: [{
        tag: 'data:timeseries',
        subcategory: 'time',
        category: 'data',
        images: ['ccvzbi_0', 'fmfxxq_0', 'b7fsls_0', 'gcpu1n_0', 'ekmqhs_0', '7v6ul8_0'],
        count: 6
      }],
      subcategories: [{
        category: 'data',
        subcategory: 'time',
        images: ['ccvzbi_0', 'fmfxxq_0', 'b7fsls_0', 'gcpu1n_0', 'ekmqhs_0', '7v6ul8_0'],
        tags: [{
          tag: 'data:timeseries',
          subcategory: 'time',
          category: 'data',
          images: ['ccvzbi_0', 'fmfxxq_0', 'b7fsls_0', 'gcpu1n_0', 'ekmqhs_0', '7v6ul8_0'],
          count: 6
        }],
        count: 6,
        tag: 'subcat:data:time'
      }],
      groups: [],
      count: 6,
      tag: 'cat:data'
    }],
    groups: [{
      category: 'fault',
      group: 'grammar',
      images: ['h11ynf_0', '9u4i8v_0', 'fmfxxq_0', '705oer_0', 'ekmqhs_0'],
      tags: [{
        tag: 'fault:colorscale',
        subcategories: ['design', 'color'],
        category: 'fault',
        images: ['h11ynf_0', '9u4i8v_0'],
        count: 2
      }, {
        tag: 'fault:colormess',
        subcategories: ['visual', 'color'],
        category: 'fault',
        images: ['fmfxxq_0', '705oer_0', 'h11ynf_0', 'ekmqhs_0', '9u4i8v_0'],
        count: 5
      }],
      subcategories: [{
        category: 'fault',
        group: 'grammar',
        subcategory: 'color',
        images: ['h11ynf_0', '9u4i8v_0', 'fmfxxq_0', '705oer_0', 'ekmqhs_0'],
        tags: [{
          tag: 'fault:colorscale',
          subcategories: ['design', 'color'],
          category: 'fault',
          images: ['h11ynf_0', '9u4i8v_0'],
          count: 2
        }, {
          tag: 'fault:colormess',
          subcategories: ['visual', 'color'],
          category: 'fault',
          images: ['fmfxxq_0', '705oer_0', 'h11ynf_0', 'ekmqhs_0', '9u4i8v_0'],
          count: 5
        }],
        count: 5,
        tag: 'subcat:fault:color'
      }],
      count: 5,
      tag: 'group:fault:grammar'
    }, {
      category: 'fault',
      group: 'pipeline',
      images: ['h11ynf_0', '9u4i8v_0', 'fmfxxq_0', '705oer_0', 'ekmqhs_0'],
      tags: [{
        tag: 'fault:colorscale',
        subcategories: ['design', 'color'],
        category: 'fault',
        images: ['h11ynf_0', '9u4i8v_0'],
        count: 2
      }, {
        tag: 'fault:colormess',
        subcategories: ['visual', 'color'],
        category: 'fault',
        images: ['fmfxxq_0', '705oer_0', 'h11ynf_0', 'ekmqhs_0', '9u4i8v_0'],
        count: 5
      }],
      subcategories: [{
        category: 'fault',
        group: 'pipeline',
        subcategory: 'design',
        images: ['h11ynf_0', '9u4i8v_0'],
        tags: [{
          tag: 'fault:colorscale',
          subcategories: ['design', 'color'],
          category: 'fault',
          images: ['h11ynf_0', '9u4i8v_0'],
          count: 2
        }],
        count: 2,
        tag: 'subcat:fault:design'
      }, {
        category: 'fault',
        group: 'pipeline',
        subcategory: 'visual',
        images: ['fmfxxq_0', '705oer_0', 'h11ynf_0', 'ekmqhs_0', '9u4i8v_0'],
        tags: [{
          tag: 'fault:colormess',
          subcategories: ['visual', 'color'],
          category: 'fault',
          images: ['fmfxxq_0', '705oer_0', 'h11ynf_0', 'ekmqhs_0', '9u4i8v_0'],
          count: 5
        }],
        count: 5,
        tag: 'subcat:fault:visual'
      }],
      count: 5,
      tag: 'group:fault:pipeline'
    }],
    subcategories: [{
      category: 'fault',
      group: 'grammar',
      subcategory: 'color',
      images: ['h11ynf_0', '9u4i8v_0', 'fmfxxq_0', '705oer_0', 'ekmqhs_0'],
      tags: [{
        tag: 'fault:colorscale',
        subcategories: ['design', 'color'],
        category: 'fault',
        images: ['h11ynf_0', '9u4i8v_0'],
        count: 2
      }, {
        tag: 'fault:colormess',
        subcategories: ['visual', 'color'],
        category: 'fault',
        images: ['fmfxxq_0', '705oer_0', 'h11ynf_0', 'ekmqhs_0', '9u4i8v_0'],
        count: 5
      }],
      count: 5,
      tag: 'subcat:fault:color'
    }, {
      category: 'fault',
      group: 'pipeline',
      subcategory: 'design',
      images: ['h11ynf_0', '9u4i8v_0'],
      tags: [{
        tag: 'fault:colorscale',
        subcategories: ['design', 'color'],
        category: 'fault',
        images: ['h11ynf_0', '9u4i8v_0'],
        count: 2
      }],
      count: 2,
      tag: 'subcat:fault:design'
    }, {
      category: 'fault',
      group: 'pipeline',
      subcategory: 'visual',
      images: ['fmfxxq_0', '705oer_0', 'h11ynf_0', 'ekmqhs_0', '9u4i8v_0'],
      tags: [{
        tag: 'fault:colormess',
        subcategories: ['visual', 'color'],
        category: 'fault',
        images: ['fmfxxq_0', '705oer_0', 'h11ynf_0', 'ekmqhs_0', '9u4i8v_0'],
        count: 5
      }],
      count: 5,
      tag: 'subcat:fault:visual'
    }, {
      category: 'form',
      subcategory: 'bar',
      images: ['ccvzbi_0', 'b7fsls_0', '2zjfyt_0', 'gcpu1n_0', 'ekmqhs_0', '21uju6_0', '7v6ul8_0', '705oer_0'],
      tags: [{
        tag: 'form:barchart',
        subcategory: 'bar',
        category: 'form',
        images: ['ccvzbi_0', 'b7fsls_0', '2zjfyt_0', 'gcpu1n_0', 'ekmqhs_0', '21uju6_0', '7v6ul8_0'],
        count: 7
      }, {
        tag: 'form:stackedbarchart',
        subcategory: 'bar',
        category: 'form',
        images: ['705oer_0'],
        count: 1
      }],
      count: 8,
      tag: 'subcat:form:bar'
    }, {
      category: 'data',
      subcategory: 'time',
      images: ['ccvzbi_0', 'fmfxxq_0', 'b7fsls_0', 'gcpu1n_0', 'ekmqhs_0', '7v6ul8_0'],
      tags: [{
        tag: 'data:timeseries',
        subcategory: 'time',
        category: 'data',
        images: ['ccvzbi_0', 'fmfxxq_0', 'b7fsls_0', 'gcpu1n_0', 'ekmqhs_0', '7v6ul8_0'],
        count: 6
      }],
      count: 6,
      tag: 'subcat:data:time'
    }],
    tags: [{
      tag: 'fault:colorscale',
      subcategories: ['design', 'color'],
      category: 'fault',
      images: ['h11ynf_0', '9u4i8v_0'],
      count: 2
    }, {
      tag: 'fault:colormess',
      subcategories: ['visual', 'color'],
      category: 'fault',
      images: ['fmfxxq_0', '705oer_0', 'h11ynf_0', 'ekmqhs_0', '9u4i8v_0'],
      count: 5
    }, {
      tag: 'form:barchart',
      subcategory: 'bar',
      category: 'form',
      images: ['ccvzbi_0', 'b7fsls_0', '2zjfyt_0', 'gcpu1n_0', 'ekmqhs_0', '21uju6_0', '7v6ul8_0'],
      count: 7
    }, {
      tag: 'form:stackedbarchart',
      subcategory: 'bar',
      category: 'form',
      images: ['705oer_0'],
      count: 1
    }, {
      tag: 'data:timeseries',
      subcategory: 'time',
      category: 'data',
      images: ['ccvzbi_0', 'fmfxxq_0', 'b7fsls_0', 'gcpu1n_0', 'ekmqhs_0', '7v6ul8_0'],
      count: 6
    }]
  }

  // console.log(JSON.stringify(makeCatelog(labelTags)))

  expect(makeCatelog(labelTags)).toEqual(catelog)
})
