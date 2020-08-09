import { makeStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import { PropTypes } from 'prop-types'
import React from 'react'
import TagTray from './TagTray'

const useStyles = makeStyles(theme => ({
  dividerInset: {
    margin: `0px 0 0 ${theme.spacing(1)}px`
  }
}))

const GroupedTagTray = (props) => {
  const { subcategories } = props
  const classes = useStyles()

  return (
    <div>
      {subcategories.map(subcategory => (
        <div key={subcategory.subcategory}>
          <li>
            <Typography
              className={classes.dividerInset}
              color='textSecondary'
              display='block'
              variant='caption'
            >
              {subcategory.name}
            </Typography>
          </li>
          <TagTray {...props} tags={subcategory.tags} />
        </div>
      ))}
    </div>
  )
}

GroupedTagTray.propTypes = {
  subcategories: PropTypes.arrayOf(PropTypes.shape({
    category: PropTypes.string,
    subcategories: PropTypes.string,
    name: PropTypes.string,
    description: PropTypes.string,
    tags: PropTypes.array
  }))
}

export default GroupedTagTray
