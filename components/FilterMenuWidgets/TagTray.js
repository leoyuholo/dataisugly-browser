import Chip from '@material-ui/core/Chip'
import { makeStyles } from '@material-ui/core/styles'
import sortBy from 'lodash/sortBy'
import { PropTypes } from 'prop-types'
import React from 'react'

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    // justifyContent: 'center',
    flexWrap: 'wrap',
    '& > *': {
      margin: theme.spacing(0.5)
    }
  }
}))

const TagTray = (props) => {
  const { tags, tagState, onClick } = props
  const classes = useStyles()

  const handleClick = (tag) => (event) => {
    onClick(tag.tag)
  }

  return (
    <div className={classes.root}>
      {sortBy(tags, 'count').reverse().map(tag => (
        <Chip
          key={tag.tag}
          // color={tagState[tag.tag] ? 'primary' : undefined}
          variant={tagState[tag.tag] ? undefined : 'outlined'}
          size='small'
          label={tag.name}
          onClick={handleClick(tag)}
        />
      ))}
    </div>
  )
}

TagTray.propTypes = {
  tags: PropTypes.arrayOf(PropTypes.shape({
    tag: PropTypes.string,
    subcategory: PropTypes.string,
    name: PropTypes.string,
    description: PropTypes.string,
    count: PropTypes.number,
  })),
  tagState: PropTypes.object,
  onClick: PropTypes.func
}

export default TagTray
