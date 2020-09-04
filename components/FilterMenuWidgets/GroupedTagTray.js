import { makeStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import InfoIcon from '@material-ui/icons/Info'
import zip from 'lodash/zip'
import { PropTypes } from 'prop-types'
import React from 'react'
import SimpleTagTray from './SimpleTagTray'

const useStyles = makeStyles(theme => ({
  dividerInset: {
    margin: `0px 0 0 ${theme.spacing(1)}px`,
    display: 'flex',
    alignItems: 'center'
  },
  icon: {
    fontSize: '1rem',
    color: 'rgba(0, 0, 0, 0.26)'
  }
}))

const GroupedTagTray = (props) => {
  const { groups, tags, onTagMouseEnter, onTagMouseLeave } = props
  const classes = useStyles()

  const handleTagMouseEnter = (group) => (event) => {
    onTagMouseEnter && onTagMouseEnter(event, group)
  }

  const handleTagMouseLeave = (group) => (event) => {
    onTagMouseLeave && onTagMouseLeave(event, group)
  }

  return (
    <div>
      {zip(groups, tags).map(([group, tags]) => (
        <div key={group.tag}>
          <li>
            <Typography
              className={classes.dividerInset}
              color='textSecondary'
              display='block'
              variant='caption'
            >
              {group.name}
              {!group.description ? undefined : (
                <InfoIcon
                  className={classes.icon}
                  onMouseEnter={handleTagMouseEnter(group)}
                  onMouseLeave={handleTagMouseLeave(group)}
                />)}
            </Typography>
          </li>
          <SimpleTagTray {...props} tags={tags} />
        </div>
      ))}
    </div>
  )
}

GroupedTagTray.propTypes = {
  groups: PropTypes.array,
  tags: PropTypes.array,
  onTagMouseEnter: PropTypes.func,
  onTagMouseLeave: PropTypes.func
}

export default GroupedTagTray
