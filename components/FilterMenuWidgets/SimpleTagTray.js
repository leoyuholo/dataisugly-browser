import Chip from '@material-ui/core/Chip'
import { makeStyles } from '@material-ui/core/styles'
import InfoIcon from '@material-ui/icons/Info'
import noop from 'lodash/noop'
import sortBy from 'lodash/sortBy'
import { PropTypes } from 'prop-types'
import React from 'react'

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    // justifyContent: 'center',
    flexWrap: 'wrap',
    '& > *': {
      margin: theme.spacing(0.4)
    }
  }
}))

const SimpleTagTray = (props) => {
  const { tags, sorted, tagsState, filteredImageCounts, onClick, onTagMouseEnter, onTagMouseLeave } = props
  const classes = useStyles()

  const handleClick = (tag) => (event) => {
    onClick && onClick(tag)
  }

  const handleTagMouseEnter = (tag) => (event) => {
    onTagMouseEnter && onTagMouseEnter(event, tag)
  }

  const handleTagMouseLeave = (tag) => (event) => {
    onTagMouseLeave && onTagMouseLeave(event, tag)
  }

  return (
    <div className={classes.root}>
      {(sorted ? tags : sortBy(tags, 'count').reverse()).map(tag => (
        // {(sorted ? tags : sortBy(tags.filter(t => filteredImageCounts[t.tag] !== 0), 'count').reverse()).map(tag => (
        <Chip
          key={tag.tag}
          disabled={filteredImageCounts[tag.tag] === 0}
          variant={tagsState[tag.tag] ? undefined : 'outlined'}
          size='small'
          label={`${tag.name} (${filteredImageCounts[tag.tag]})`}
          onDelete={!tag.description ? undefined : noop} // use deleteIcon as infoIcon
          deleteIcon={!tag.description
            ? undefined
            : (
              <InfoIcon
                fontSize='small'
                onMouseEnter={handleTagMouseEnter(tag)}
                onMouseLeave={handleTagMouseLeave(tag)}
              />)}
          onClick={handleClick(tag)}
        />
      ))}
    </div>
  )
}

SimpleTagTray.propTypes = {
  tags: PropTypes.arrayOf(PropTypes.shape({
    tag: PropTypes.string,
    name: PropTypes.string,
    description: PropTypes.string,
    count: PropTypes.number
  })),
  sorted: PropTypes.bool,
  tagsState: PropTypes.object,
  filteredImageCounts: PropTypes.objectOf(PropTypes.number),
  onClick: PropTypes.func,
  onTagMouseEnter: PropTypes.func,
  onTagMouseLeave: PropTypes.func
}

export default SimpleTagTray
