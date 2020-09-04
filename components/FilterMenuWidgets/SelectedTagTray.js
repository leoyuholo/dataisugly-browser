import Chip from '@material-ui/core/Chip'
import { makeStyles } from '@material-ui/core/styles'
import compact from 'lodash/compact'
import map from 'lodash/map'
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
  const { tagsState, labelTags, onDelete } = props
  const classes = useStyles()

  const selectedTags = compact(map(tagsState, (value, tag) => value && tag))

  const handleDelete = (tag) => (event) => {
    onDelete(tag)
  }

  return (
    <div className={classes.root}>
      {selectedTags.map(tag => (
        <Chip
          key={tag}
          // color={tagsState[tag] ? 'primary' : undefined}
          // variant={tagsState[tag] ? undefined : 'outlined'}
          size='small'
          label={labelTags.all[tag].name}
          onDelete={handleDelete(labelTags.all[tag])}
        />
      ))}
    </div>
  )
}

SelectedTagTray.propTypes = {
  tagsState: PropTypes.objectOf(PropTypes.bool).isRequired,
  labelTags: PropTypes.shape({
    all: PropTypes.objectOf(PropTypes.shape({
      name: PropTypes.string
    }))
  }).isRequired,
  onDelete: PropTypes.func
}

export default SelectedTagTray
