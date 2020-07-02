import Chip from '@material-ui/core/Chip'
import { makeStyles } from '@material-ui/core/styles'
import { compact, flatMap } from 'lodash'
import { PropTypes } from 'prop-types'
import React from 'react'

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    // justifyContent: 'center',
    flexWrap: 'wrap',
    '& > *': {
      margin: theme.spacing(0.5)
    }
  }
}))

const SelectedTagTray = (props) => {
  const { tagState, onDelete } = props
  const classes = useStyles()

  const selectedTags = compact(flatMap(tagState, (tags, category) => flatMap(tags, (value, tag) => value && { category, tag })))

  const handleDelete = (tag) => (event) => {
    onDelete(tag.category, tag.tag)
  }

  return (
    <div className={classes.root}>
      {selectedTags.map(tag => (
        <Chip
          key={`${tag.category}:${tag.tag}`}
          // color={tagState[tag] ? 'primary' : undefined}
          // variant={tagState[tag] ? undefined : 'outlined'}
          size='small'
          label={tag.tag}
          onDelete={handleDelete(tag)}
        />
      ))}
    </div>
  )
}

SelectedTagTray.propTypes = {
  tagState: PropTypes.object,
  onDelete: PropTypes.func
}

export default SelectedTagTray
