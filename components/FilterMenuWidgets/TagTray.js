import { PropTypes } from 'prop-types'
import React from 'react'
import GroupedTagTray from './GroupedTagTray'
import SimpleTagTray from './SimpleTagTray'

const TagTray = (props) => {
  const { groups, subcategories, hierarchical, grouped } = props

  if (hierarchical && grouped) {
    return (
      <GroupedTagTray
        {...props}
        groups={groups}
        tags={groups.map(g => g.subcategories)}
      />)
  }

  if (subcategories?.length > 0) {
    return (
      <GroupedTagTray
        {...props}
        groups={subcategories}
        tags={subcategories.map(s => s.tags)}
      />)
  }

  return (
    <SimpleTagTray {...props} />
  )
}

TagTray.propTypes = {
  tags: PropTypes.array,
  subcategories: PropTypes.array,
  hierarchical: PropTypes.bool,
  grouped: PropTypes.bool
}

export default TagTray
