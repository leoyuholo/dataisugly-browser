import { makeStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import groupBy from 'lodash/groupBy'
import { PropTypes } from 'prop-types'
import React from 'react'
import TagTray from './TagTray'

const useStyles = makeStyles(theme => ({
  dividerInset: {
    margin: `0px 0 0 ${theme.spacing(1)}px`,
  }
}))

const GroupedTagTray = (props) => {
  const { tags, subcategories } = props
  const classes = useStyles()

  const tagsBySubcat = groupBy(tags, 'subcategory')

  return (
    <div>
      {subcategories.map(subcategory => (
        <div key={subcategory.tag}>
          <li>
            <Typography
              className={classes.dividerInset}
              color="textSecondary"
              display="block"
              variant="caption"
            >
              {subcategory.name}
            </Typography>
          </li>
          <TagTray {...props} tags={tagsBySubcat[subcategory.subcategory]} />
        </div>
      ))}
    </div>
  )
}

GroupedTagTray.propTypes = {
  tags: PropTypes.arrayOf(PropTypes.shape({
    tag: PropTypes.string,
    subcategory: PropTypes.string,
    name: PropTypes.string,
    description: PropTypes.string,
    count: PropTypes.number,
  })),
  subcategories: PropTypes.arrayOf(PropTypes.shape({
    category: PropTypes.string,
    subcategories: PropTypes.string,
    name: PropTypes.string,
    description: PropTypes.string,
  }))
}

export default GroupedTagTray
