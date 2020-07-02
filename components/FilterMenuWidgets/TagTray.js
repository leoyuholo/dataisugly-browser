import Chip from '@material-ui/core/Chip'
import { makeStyles } from '@material-ui/core/styles'
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

const TagTray = (props) => {
  const { tags, tagState, onClick } = props
  const classes = useStyles()

  const handleClick = (tag) => (event) => {
    onClick(tag)
  }

  return (
    <div className={classes.root}>
      {tags.map(tag => (
        <Chip
          key={tag}
          // color={tagState[tag] ? 'primary' : undefined}
          variant={tagState[tag] ? undefined : 'outlined'}
          size='small'
          label={tag}
          onClick={handleClick(tag)}
        />
      ))}
    </div>
  )
}

TagTray.propTypes = {
  tags: PropTypes.array,
  tagState: PropTypes.object,
  onClick: PropTypes.func
}

export default TagTray
