import {
  makeCategoryTag,
  makeCatelog,
  makeSubcategoryTag
} from './tagHelper'

export const labelTags = {
  categories: [{
    category: 'fault',
    name: 'Issues',
    hierarchical: true
  }, {
    category: 'form',
    name: 'Chart Types',
    group_subcat_threshold: 10
  }, {
    category: 'data',
    name: 'Data Types'
  }],
  subcategories: [{
    category: 'fault',
    group: 'grammar',
    subcategory: 'color',
    name: 'Color',
    description: 'Issues in the use of colors'
  }, {
    category: 'fault',
    group: 'pipeline',
    subcategory: 'design',
    name: 'Design Choices',
    description: 'Issues in visual design choices'
  }, {
    category: 'form',
    subcategory: 'bar',
    name: 'Bar'
  }, {
    category: 'data',
    subcategory: 'time',
    name: 'Time',
    description: 'Time related data'
  }],
  groups: [{
    category: 'fault',
    group: 'grammar',
    name: 'Grammar of Graphics',
    description: 'Issues grouped by different components of a graph'
  }, {
    category: 'fault',
    group: 'pipeline',
    name: 'Visual Analytics Pipeline',
    description: 'Issues grouped by different stages of visual analytics'
  }],
  tags: [{
    tag: 'fault:colorscale',
    subcategories: ['design', 'color'],
    name: 'Ineffective Color Scheme',
    description: 'Ineffective color scheme, e.g., categorical colors for continuous variable.',
    category: 'fault',
    images: ['h11ynf_0', '9u4i8v_0']
  }, {
    tag: 'fault:colormess',
    subcategories: ['visual', 'color'],
    name: 'Undistinguishable Colors',
    description: 'Categorical colors are undistinguishable with each other.',
    category: 'fault',
    images: ['fmfxxq_0', '705oer_0', 'h11ynf_0', 'ekmqhs_0', '9u4i8v_0']
  }, {
    tag: 'form:barchart',
    subcategory: 'bar',
    name: 'Bar Chart',
    category: 'form',
    images: ['ccvzbi_0', 'b7fsls_0', '2zjfyt_0', 'gcpu1n_0', 'ekmqhs_0', '21uju6_0', '7v6ul8_0']
  }, {
    tag: 'form:stackedbarchart',
    subcategory: 'bar',
    name: 'Stacked Bar Chart',
    category: 'form',
    images: ['705oer_0']
  }, {
    tag: 'data:timeseries',
    subcategory: 'time',
    name: 'Time Series',
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
        name: 'Ineffective Color Scheme',
        description: 'Ineffective color scheme, e.g., categorical colors for continuous variable.',
        category: 'fault',
        images: ['h11ynf_0', '9u4i8v_0'],
        count: 2
      },
      'fault:colormess': {
        tag: 'fault:colormess',
        subcategories: ['visual', 'color'],
        name: 'Undistinguishable Colors',
        description: 'Categorical colors are undistinguishable with each other.',
        category: 'fault',
        images: ['fmfxxq_0', '705oer_0', 'h11ynf_0', 'ekmqhs_0', '9u4i8v_0'],
        count: 5
      },
      'form:barchart': {
        tag: 'form:barchart',
        subcategory: 'bar',
        name: 'Bar Chart',
        category: 'form',
        images: ['ccvzbi_0', 'b7fsls_0', '2zjfyt_0', 'gcpu1n_0', 'ekmqhs_0', '21uju6_0', '7v6ul8_0'],
        count: 7
      },
      'form:stackedbarchart': {
        tag: 'form:stackedbarchart',
        subcategory: 'bar',
        name: 'Stacked Bar Chart',
        category: 'form',
        images: ['705oer_0'],
        count: 1
      },
      'data:timeseries': {
        tag: 'data:timeseries',
        subcategory: 'time',
        name: 'Time Series',
        category: 'data',
        images: ['ccvzbi_0', 'fmfxxq_0', 'b7fsls_0', 'gcpu1n_0', 'ekmqhs_0', '7v6ul8_0'],
        count: 6
      },
      'group:fault:grammar': {
        category: 'fault',
        group: 'grammar',
        name: 'Grammar of Graphics',
        description: 'Issues grouped by different components of a graph',
        subcategories: [{
          category: 'fault',
          group: 'grammar',
          subcategory: 'color',
          name: 'Color',
          description: 'Issues in the use of colors',
          tags: [{
            tag: 'fault:colorscale',
            subcategories: ['design', 'color'],
            name: 'Ineffective Color Scheme',
            description: 'Ineffective color scheme, e.g., categorical colors for continuous variable.',
            category: 'fault',
            images: ['h11ynf_0', '9u4i8v_0'],
            count: 2
          }, {
            tag: 'fault:colormess',
            subcategories: ['visual', 'color'],
            name: 'Undistinguishable Colors',
            description: 'Categorical colors are undistinguishable with each other.',
            category: 'fault',
            images: ['fmfxxq_0', '705oer_0', 'h11ynf_0', 'ekmqhs_0', '9u4i8v_0'],
            count: 5
          }],
          images: ['h11ynf_0', '9u4i8v_0', 'fmfxxq_0', '705oer_0', 'ekmqhs_0'],
          count: 5,
          tag: 'subcat:fault:color'
        }],
        tag: 'group:fault:grammar'
      },
      'group:fault:pipeline': {
        category: 'fault',
        group: 'pipeline',
        name: 'Visual Analytics Pipeline',
        description: 'Issues grouped by different stages of visual analytics',
        subcategories: [{
          category: 'fault',
          group: 'pipeline',
          subcategory: 'design',
          name: 'Design Choices',
          description: 'Issues in visual design choices',
          tags: [{
            tag: 'fault:colorscale',
            subcategories: ['design', 'color'],
            name: 'Ineffective Color Scheme',
            description: 'Ineffective color scheme, e.g., categorical colors for continuous variable.',
            category: 'fault',
            images: ['h11ynf_0', '9u4i8v_0'],
            count: 2
          }],
          images: ['h11ynf_0', '9u4i8v_0'],
          count: 2,
          tag: 'subcat:fault:design'
        }],
        tag: 'group:fault:pipeline'
      },
      'subcat:fault:color': {
        category: 'fault',
        group: 'grammar',
        subcategory: 'color',
        name: 'Color',
        description: 'Issues in the use of colors',
        tags: [{
          tag: 'fault:colorscale',
          subcategories: ['design', 'color'],
          name: 'Ineffective Color Scheme',
          description: 'Ineffective color scheme, e.g., categorical colors for continuous variable.',
          category: 'fault',
          images: ['h11ynf_0', '9u4i8v_0'],
          count: 2
        }, {
          tag: 'fault:colormess',
          subcategories: ['visual', 'color'],
          name: 'Undistinguishable Colors',
          description: 'Categorical colors are undistinguishable with each other.',
          category: 'fault',
          images: ['fmfxxq_0', '705oer_0', 'h11ynf_0', 'ekmqhs_0', '9u4i8v_0'],
          count: 5
        }],
        images: ['h11ynf_0', '9u4i8v_0', 'fmfxxq_0', '705oer_0', 'ekmqhs_0'],
        count: 5,
        tag: 'subcat:fault:color'
      },
      'subcat:fault:design': {
        category: 'fault',
        group: 'pipeline',
        subcategory: 'design',
        name: 'Design Choices',
        description: 'Issues in visual design choices',
        tags: [{
          tag: 'fault:colorscale',
          subcategories: ['design', 'color'],
          name: 'Ineffective Color Scheme',
          description: 'Ineffective color scheme, e.g., categorical colors for continuous variable.',
          category: 'fault',
          images: ['h11ynf_0', '9u4i8v_0'],
          count: 2
        }],
        images: ['h11ynf_0', '9u4i8v_0'],
        count: 2,
        tag: 'subcat:fault:design'
      },
      'subcat:form:bar': {
        category: 'form',
        subcategory: 'bar',
        name: 'Bar',
        tags: [{
          tag: 'form:barchart',
          subcategory: 'bar',
          name: 'Bar Chart',
          category: 'form',
          images: ['ccvzbi_0', 'b7fsls_0', '2zjfyt_0', 'gcpu1n_0', 'ekmqhs_0', '21uju6_0', '7v6ul8_0'],
          count: 7
        }, {
          tag: 'form:stackedbarchart',
          subcategory: 'bar',
          name: 'Stacked Bar Chart',
          category: 'form',
          images: ['705oer_0'],
          count: 1
        }],
        images: ['ccvzbi_0', 'b7fsls_0', '2zjfyt_0', 'gcpu1n_0', 'ekmqhs_0', '21uju6_0', '7v6ul8_0', '705oer_0'],
        count: 8,
        tag: 'subcat:form:bar'
      },
      'subcat:data:time': {
        category: 'data',
        subcategory: 'time',
        name: 'Time',
        description: 'Time related data',
        tags: [{
          tag: 'data:timeseries',
          subcategory: 'time',
          name: 'Time Series',
          category: 'data',
          images: ['ccvzbi_0', 'fmfxxq_0', 'b7fsls_0', 'gcpu1n_0', 'ekmqhs_0', '7v6ul8_0'],
          count: 6
        }],
        images: ['ccvzbi_0', 'fmfxxq_0', 'b7fsls_0', 'gcpu1n_0', 'ekmqhs_0', '7v6ul8_0'],
        count: 6,
        tag: 'subcat:data:time'
      },
      'cat:fault': {
        category: 'fault',
        name: 'Issues',
        hierarchical: true,
        tags: [{
          tag: 'fault:colorscale',
          subcategories: ['design', 'color'],
          name: 'Ineffective Color Scheme',
          description: 'Ineffective color scheme, e.g., categorical colors for continuous variable.',
          category: 'fault',
          images: ['h11ynf_0', '9u4i8v_0'],
          count: 2
        }, {
          tag: 'fault:colormess',
          subcategories: ['visual', 'color'],
          name: 'Undistinguishable Colors',
          description: 'Categorical colors are undistinguishable with each other.',
          category: 'fault',
          images: ['fmfxxq_0', '705oer_0', 'h11ynf_0', 'ekmqhs_0', '9u4i8v_0'],
          count: 5
        }],
        count: 7,
        groups: [{
          category: 'fault',
          group: 'grammar',
          name: 'Grammar of Graphics',
          description: 'Issues grouped by different components of a graph',
          subcategories: [{
            category: 'fault',
            group: 'grammar',
            subcategory: 'color',
            name: 'Color',
            description: 'Issues in the use of colors',
            tags: [{
              tag: 'fault:colorscale',
              subcategories: ['design', 'color'],
              name: 'Ineffective Color Scheme',
              description: 'Ineffective color scheme, e.g., categorical colors for continuous variable.',
              category: 'fault',
              images: ['h11ynf_0', '9u4i8v_0'],
              count: 2
            }, {
              tag: 'fault:colormess',
              subcategories: ['visual', 'color'],
              name: 'Undistinguishable Colors',
              description: 'Categorical colors are undistinguishable with each other.',
              category: 'fault',
              images: ['fmfxxq_0', '705oer_0', 'h11ynf_0', 'ekmqhs_0', '9u4i8v_0'],
              count: 5
            }],
            images: ['h11ynf_0', '9u4i8v_0', 'fmfxxq_0', '705oer_0', 'ekmqhs_0'],
            count: 5,
            tag: 'subcat:fault:color'
          }],
          tag: 'group:fault:grammar'
        }, {
          category: 'fault',
          group: 'pipeline',
          name: 'Visual Analytics Pipeline',
          description: 'Issues grouped by different stages of visual analytics',
          subcategories: [{
            category: 'fault',
            group: 'pipeline',
            subcategory: 'design',
            name: 'Design Choices',
            description: 'Issues in visual design choices',
            tags: [{
              tag: 'fault:colorscale',
              subcategories: ['design', 'color'],
              name: 'Ineffective Color Scheme',
              description: 'Ineffective color scheme, e.g., categorical colors for continuous variable.',
              category: 'fault',
              images: ['h11ynf_0', '9u4i8v_0'],
              count: 2
            }],
            images: ['h11ynf_0', '9u4i8v_0'],
            count: 2,
            tag: 'subcat:fault:design'
          }],
          tag: 'group:fault:pipeline'
        }],
        subcategories: [{
          category: 'fault',
          group: 'grammar',
          subcategory: 'color',
          name: 'Color',
          description: 'Issues in the use of colors',
          tags: [{
            tag: 'fault:colorscale',
            subcategories: ['design', 'color'],
            name: 'Ineffective Color Scheme',
            description: 'Ineffective color scheme, e.g., categorical colors for continuous variable.',
            category: 'fault',
            images: ['h11ynf_0', '9u4i8v_0'],
            count: 2
          }, {
            tag: 'fault:colormess',
            subcategories: ['visual', 'color'],
            name: 'Undistinguishable Colors',
            description: 'Categorical colors are undistinguishable with each other.',
            category: 'fault',
            images: ['fmfxxq_0', '705oer_0', 'h11ynf_0', 'ekmqhs_0', '9u4i8v_0'],
            count: 5
          }],
          images: ['h11ynf_0', '9u4i8v_0', 'fmfxxq_0', '705oer_0', 'ekmqhs_0'],
          count: 5,
          tag: 'subcat:fault:color'
        }, {
          category: 'fault',
          group: 'pipeline',
          subcategory: 'design',
          name: 'Design Choices',
          description: 'Issues in visual design choices',
          tags: [{
            tag: 'fault:colorscale',
            subcategories: ['design', 'color'],
            name: 'Ineffective Color Scheme',
            description: 'Ineffective color scheme, e.g., categorical colors for continuous variable.',
            category: 'fault',
            images: ['h11ynf_0', '9u4i8v_0'],
            count: 2
          }],
          images: ['h11ynf_0', '9u4i8v_0'],
          count: 2,
          tag: 'subcat:fault:design'
        }],
        tag: 'cat:fault'
      },
      'cat:form': {
        category: 'form',
        name: 'Chart Types',
        group_subcat_threshold: 10,
        tags: [{
          tag: 'form:barchart',
          subcategory: 'bar',
          name: 'Bar Chart',
          category: 'form',
          images: ['ccvzbi_0', 'b7fsls_0', '2zjfyt_0', 'gcpu1n_0', 'ekmqhs_0', '21uju6_0', '7v6ul8_0'],
          count: 7
        }, {
          tag: 'form:stackedbarchart',
          subcategory: 'bar',
          name: 'Stacked Bar Chart',
          category: 'form',
          images: ['705oer_0'],
          count: 1
        }],
        count: 8,
        groups: [],
        subcategories: [{
          category: 'form',
          subcategory: 'bar',
          name: 'Bar',
          tags: [{
            tag: 'form:barchart',
            subcategory: 'bar',
            name: 'Bar Chart',
            category: 'form',
            images: ['ccvzbi_0', 'b7fsls_0', '2zjfyt_0', 'gcpu1n_0', 'ekmqhs_0', '21uju6_0', '7v6ul8_0'],
            count: 7
          }, {
            tag: 'form:stackedbarchart',
            subcategory: 'bar',
            name: 'Stacked Bar Chart',
            category: 'form',
            images: ['705oer_0'],
            count: 1
          }],
          images: ['ccvzbi_0', 'b7fsls_0', '2zjfyt_0', 'gcpu1n_0', 'ekmqhs_0', '21uju6_0', '7v6ul8_0', '705oer_0'],
          count: 8,
          tag: 'subcat:form:bar'
        }],
        tag: 'cat:form'
      },
      'cat:data': {
        category: 'data',
        name: 'Data Types',
        tags: [{
          tag: 'data:timeseries',
          subcategory: 'time',
          name: 'Time Series',
          category: 'data',
          images: ['ccvzbi_0', 'fmfxxq_0', 'b7fsls_0', 'gcpu1n_0', 'ekmqhs_0', '7v6ul8_0'],
          count: 6
        }],
        count: 6,
        groups: [],
        subcategories: [{
          category: 'data',
          subcategory: 'time',
          name: 'Time',
          description: 'Time related data',
          tags: [{
            tag: 'data:timeseries',
            subcategory: 'time',
            name: 'Time Series',
            category: 'data',
            images: ['ccvzbi_0', 'fmfxxq_0', 'b7fsls_0', 'gcpu1n_0', 'ekmqhs_0', '7v6ul8_0'],
            count: 6
          }],
          images: ['ccvzbi_0', 'fmfxxq_0', 'b7fsls_0', 'gcpu1n_0', 'ekmqhs_0', '7v6ul8_0'],
          count: 6,
          tag: 'subcat:data:time'
        }],
        tag: 'cat:data'
      }
    },
    categories: [{
      category: 'fault',
      name: 'Issues',
      hierarchical: true,
      tags: [{
        tag: 'fault:colorscale',
        subcategories: ['design', 'color'],
        name: 'Ineffective Color Scheme',
        description: 'Ineffective color scheme, e.g., categorical colors for continuous variable.',
        category: 'fault',
        images: ['h11ynf_0', '9u4i8v_0'],
        count: 2
      }, {
        tag: 'fault:colormess',
        subcategories: ['visual', 'color'],
        name: 'Undistinguishable Colors',
        description: 'Categorical colors are undistinguishable with each other.',
        category: 'fault',
        images: ['fmfxxq_0', '705oer_0', 'h11ynf_0', 'ekmqhs_0', '9u4i8v_0'],
        count: 5
      }],
      count: 7,
      groups: [{
        category: 'fault',
        group: 'grammar',
        name: 'Grammar of Graphics',
        description: 'Issues grouped by different components of a graph',
        subcategories: [{
          category: 'fault',
          group: 'grammar',
          subcategory: 'color',
          name: 'Color',
          description: 'Issues in the use of colors',
          tags: [{
            tag: 'fault:colorscale',
            subcategories: ['design', 'color'],
            name: 'Ineffective Color Scheme',
            description: 'Ineffective color scheme, e.g., categorical colors for continuous variable.',
            category: 'fault',
            images: ['h11ynf_0', '9u4i8v_0'],
            count: 2
          }, {
            tag: 'fault:colormess',
            subcategories: ['visual', 'color'],
            name: 'Undistinguishable Colors',
            description: 'Categorical colors are undistinguishable with each other.',
            category: 'fault',
            images: ['fmfxxq_0', '705oer_0', 'h11ynf_0', 'ekmqhs_0', '9u4i8v_0'],
            count: 5
          }],
          images: ['h11ynf_0', '9u4i8v_0', 'fmfxxq_0', '705oer_0', 'ekmqhs_0'],
          count: 5,
          tag: 'subcat:fault:color'
        }],
        tag: 'group:fault:grammar'
      }, {
        category: 'fault',
        group: 'pipeline',
        name: 'Visual Analytics Pipeline',
        description: 'Issues grouped by different stages of visual analytics',
        subcategories: [{
          category: 'fault',
          group: 'pipeline',
          subcategory: 'design',
          name: 'Design Choices',
          description: 'Issues in visual design choices',
          tags: [{
            tag: 'fault:colorscale',
            subcategories: ['design', 'color'],
            name: 'Ineffective Color Scheme',
            description: 'Ineffective color scheme, e.g., categorical colors for continuous variable.',
            category: 'fault',
            images: ['h11ynf_0', '9u4i8v_0'],
            count: 2
          }],
          images: ['h11ynf_0', '9u4i8v_0'],
          count: 2,
          tag: 'subcat:fault:design'
        }],
        tag: 'group:fault:pipeline'
      }],
      subcategories: [{
        category: 'fault',
        group: 'grammar',
        subcategory: 'color',
        name: 'Color',
        description: 'Issues in the use of colors',
        tags: [{
          tag: 'fault:colorscale',
          subcategories: ['design', 'color'],
          name: 'Ineffective Color Scheme',
          description: 'Ineffective color scheme, e.g., categorical colors for continuous variable.',
          category: 'fault',
          images: ['h11ynf_0', '9u4i8v_0'],
          count: 2
        }, {
          tag: 'fault:colormess',
          subcategories: ['visual', 'color'],
          name: 'Undistinguishable Colors',
          description: 'Categorical colors are undistinguishable with each other.',
          category: 'fault',
          images: ['fmfxxq_0', '705oer_0', 'h11ynf_0', 'ekmqhs_0', '9u4i8v_0'],
          count: 5
        }],
        images: ['h11ynf_0', '9u4i8v_0', 'fmfxxq_0', '705oer_0', 'ekmqhs_0'],
        count: 5,
        tag: 'subcat:fault:color'
      }, {
        category: 'fault',
        group: 'pipeline',
        subcategory: 'design',
        name: 'Design Choices',
        description: 'Issues in visual design choices',
        tags: [{
          tag: 'fault:colorscale',
          subcategories: ['design', 'color'],
          name: 'Ineffective Color Scheme',
          description: 'Ineffective color scheme, e.g., categorical colors for continuous variable.',
          category: 'fault',
          images: ['h11ynf_0', '9u4i8v_0'],
          count: 2
        }],
        images: ['h11ynf_0', '9u4i8v_0'],
        count: 2,
        tag: 'subcat:fault:design'
      }],
      tag: 'cat:fault'
    }, {
      category: 'form',
      name: 'Chart Types',
      group_subcat_threshold: 10,
      tags: [{
        tag: 'form:barchart',
        subcategory: 'bar',
        name: 'Bar Chart',
        category: 'form',
        images: ['ccvzbi_0', 'b7fsls_0', '2zjfyt_0', 'gcpu1n_0', 'ekmqhs_0', '21uju6_0', '7v6ul8_0'],
        count: 7
      }, {
        tag: 'form:stackedbarchart',
        subcategory: 'bar',
        name: 'Stacked Bar Chart',
        category: 'form',
        images: ['705oer_0'],
        count: 1
      }],
      count: 8,
      groups: [],
      subcategories: [{
        category: 'form',
        subcategory: 'bar',
        name: 'Bar',
        tags: [{
          tag: 'form:barchart',
          subcategory: 'bar',
          name: 'Bar Chart',
          category: 'form',
          images: ['ccvzbi_0', 'b7fsls_0', '2zjfyt_0', 'gcpu1n_0', 'ekmqhs_0', '21uju6_0', '7v6ul8_0'],
          count: 7
        }, {
          tag: 'form:stackedbarchart',
          subcategory: 'bar',
          name: 'Stacked Bar Chart',
          category: 'form',
          images: ['705oer_0'],
          count: 1
        }],
        images: ['ccvzbi_0', 'b7fsls_0', '2zjfyt_0', 'gcpu1n_0', 'ekmqhs_0', '21uju6_0', '7v6ul8_0', '705oer_0'],
        count: 8,
        tag: 'subcat:form:bar'
      }],
      tag: 'cat:form'
    }, {
      category: 'data',
      name: 'Data Types',
      tags: [{
        tag: 'data:timeseries',
        subcategory: 'time',
        name: 'Time Series',
        category: 'data',
        images: ['ccvzbi_0', 'fmfxxq_0', 'b7fsls_0', 'gcpu1n_0', 'ekmqhs_0', '7v6ul8_0'],
        count: 6
      }],
      count: 6,
      groups: [],
      subcategories: [{
        category: 'data',
        subcategory: 'time',
        name: 'Time',
        description: 'Time related data',
        tags: [{
          tag: 'data:timeseries',
          subcategory: 'time',
          name: 'Time Series',
          category: 'data',
          images: ['ccvzbi_0', 'fmfxxq_0', 'b7fsls_0', 'gcpu1n_0', 'ekmqhs_0', '7v6ul8_0'],
          count: 6
        }],
        images: ['ccvzbi_0', 'fmfxxq_0', 'b7fsls_0', 'gcpu1n_0', 'ekmqhs_0', '7v6ul8_0'],
        count: 6,
        tag: 'subcat:data:time'
      }],
      tag: 'cat:data'
    }],
    groups: [{
      category: 'fault',
      group: 'grammar',
      name: 'Grammar of Graphics',
      description: 'Issues grouped by different components of a graph',
      subcategories: [{
        category: 'fault',
        group: 'grammar',
        subcategory: 'color',
        name: 'Color',
        description: 'Issues in the use of colors',
        tags: [{
          tag: 'fault:colorscale',
          subcategories: ['design', 'color'],
          name: 'Ineffective Color Scheme',
          description: 'Ineffective color scheme, e.g., categorical colors for continuous variable.',
          category: 'fault',
          images: ['h11ynf_0', '9u4i8v_0'],
          count: 2
        }, {
          tag: 'fault:colormess',
          subcategories: ['visual', 'color'],
          name: 'Undistinguishable Colors',
          description: 'Categorical colors are undistinguishable with each other.',
          category: 'fault',
          images: ['fmfxxq_0', '705oer_0', 'h11ynf_0', 'ekmqhs_0', '9u4i8v_0'],
          count: 5
        }],
        images: ['h11ynf_0', '9u4i8v_0', 'fmfxxq_0', '705oer_0', 'ekmqhs_0'],
        count: 5,
        tag: 'subcat:fault:color'
      }],
      tag: 'group:fault:grammar'
    }, {
      category: 'fault',
      group: 'pipeline',
      name: 'Visual Analytics Pipeline',
      description: 'Issues grouped by different stages of visual analytics',
      subcategories: [{
        category: 'fault',
        group: 'pipeline',
        subcategory: 'design',
        name: 'Design Choices',
        description: 'Issues in visual design choices',
        tags: [{
          tag: 'fault:colorscale',
          subcategories: ['design', 'color'],
          name: 'Ineffective Color Scheme',
          description: 'Ineffective color scheme, e.g., categorical colors for continuous variable.',
          category: 'fault',
          images: ['h11ynf_0', '9u4i8v_0'],
          count: 2
        }],
        images: ['h11ynf_0', '9u4i8v_0'],
        count: 2,
        tag: 'subcat:fault:design'
      }],
      tag: 'group:fault:pipeline'
    }],
    subcategories: [{
      category: 'fault',
      group: 'grammar',
      subcategory: 'color',
      name: 'Color',
      description: 'Issues in the use of colors',
      tags: [{
        tag: 'fault:colorscale',
        subcategories: ['design', 'color'],
        name: 'Ineffective Color Scheme',
        description: 'Ineffective color scheme, e.g., categorical colors for continuous variable.',
        category: 'fault',
        images: ['h11ynf_0', '9u4i8v_0'],
        count: 2
      }, {
        tag: 'fault:colormess',
        subcategories: ['visual', 'color'],
        name: 'Undistinguishable Colors',
        description: 'Categorical colors are undistinguishable with each other.',
        category: 'fault',
        images: ['fmfxxq_0', '705oer_0', 'h11ynf_0', 'ekmqhs_0', '9u4i8v_0'],
        count: 5
      }],
      images: ['h11ynf_0', '9u4i8v_0', 'fmfxxq_0', '705oer_0', 'ekmqhs_0'],
      count: 5,
      tag: 'subcat:fault:color'
    }, {
      category: 'fault',
      group: 'pipeline',
      subcategory: 'design',
      name: 'Design Choices',
      description: 'Issues in visual design choices',
      tags: [{
        tag: 'fault:colorscale',
        subcategories: ['design', 'color'],
        name: 'Ineffective Color Scheme',
        description: 'Ineffective color scheme, e.g., categorical colors for continuous variable.',
        category: 'fault',
        images: ['h11ynf_0', '9u4i8v_0'],
        count: 2
      }],
      images: ['h11ynf_0', '9u4i8v_0'],
      count: 2,
      tag: 'subcat:fault:design'
    }, {
      category: 'form',
      subcategory: 'bar',
      name: 'Bar',
      tags: [{
        tag: 'form:barchart',
        subcategory: 'bar',
        name: 'Bar Chart',
        category: 'form',
        images: ['ccvzbi_0', 'b7fsls_0', '2zjfyt_0', 'gcpu1n_0', 'ekmqhs_0', '21uju6_0', '7v6ul8_0'],
        count: 7
      }, {
        tag: 'form:stackedbarchart',
        subcategory: 'bar',
        name: 'Stacked Bar Chart',
        category: 'form',
        images: ['705oer_0'],
        count: 1
      }],
      images: ['ccvzbi_0', 'b7fsls_0', '2zjfyt_0', 'gcpu1n_0', 'ekmqhs_0', '21uju6_0', '7v6ul8_0', '705oer_0'],
      count: 8,
      tag: 'subcat:form:bar'
    }, {
      category: 'data',
      subcategory: 'time',
      name: 'Time',
      description: 'Time related data',
      tags: [{
        tag: 'data:timeseries',
        subcategory: 'time',
        name: 'Time Series',
        category: 'data',
        images: ['ccvzbi_0', 'fmfxxq_0', 'b7fsls_0', 'gcpu1n_0', 'ekmqhs_0', '7v6ul8_0'],
        count: 6
      }],
      images: ['ccvzbi_0', 'fmfxxq_0', 'b7fsls_0', 'gcpu1n_0', 'ekmqhs_0', '7v6ul8_0'],
      count: 6,
      tag: 'subcat:data:time'
    }],
    tags: [{
      tag: 'fault:colorscale',
      subcategories: ['design', 'color'],
      name: 'Ineffective Color Scheme',
      description: 'Ineffective color scheme, e.g., categorical colors for continuous variable.',
      category: 'fault',
      images: ['h11ynf_0', '9u4i8v_0'],
      count: 2
    }, {
      tag: 'fault:colormess',
      subcategories: ['visual', 'color'],
      name: 'Undistinguishable Colors',
      description: 'Categorical colors are undistinguishable with each other.',
      category: 'fault',
      images: ['fmfxxq_0', '705oer_0', 'h11ynf_0', 'ekmqhs_0', '9u4i8v_0'],
      count: 5
    }, {
      tag: 'form:barchart',
      subcategory: 'bar',
      name: 'Bar Chart',
      category: 'form',
      images: ['ccvzbi_0', 'b7fsls_0', '2zjfyt_0', 'gcpu1n_0', 'ekmqhs_0', '21uju6_0', '7v6ul8_0'],
      count: 7
    }, {
      tag: 'form:stackedbarchart',
      subcategory: 'bar',
      name: 'Stacked Bar Chart',
      category: 'form',
      images: ['705oer_0'],
      count: 1
    }, {
      tag: 'data:timeseries',
      subcategory: 'time',
      name: 'Time Series',
      category: 'data',
      images: ['ccvzbi_0', 'fmfxxq_0', 'b7fsls_0', 'gcpu1n_0', 'ekmqhs_0', '7v6ul8_0'],
      count: 6
    }]
  }

  // console.log(JSON.stringify(makeCatelog(labelTags)))

  expect(makeCatelog(labelTags)).toEqual(catelog)
})
