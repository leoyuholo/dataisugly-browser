import { Link } from '@material-ui/core'
import Chip from '@material-ui/core/Chip'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import Popover from '@material-ui/core/Popover'
import { makeStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import InfoIcon from '@material-ui/icons/Info'
import clsx from 'clsx'
import groupBy from 'lodash/groupBy'
import noop from 'lodash/noop'
import truncate from 'lodash/truncate'
import PropTypes from 'prop-types'
import React, { useState } from 'react'

const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: theme.palette.grey['900']
  },
  paper: {
    backgroundColor: 'transparent',
    padding: theme.spacing(4),
    margin: theme.spacing(4)
  },
  labels: {
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'row'
    },
    [theme.breakpoints.up('md')]: {
      flexDirection: 'column'
    }
  },
  chips: {
    '& > *': {
      margin: theme.spacing(0.5)
    }
  },
  popover: {
    pointerEvents: 'none'
  },
  popoverPaper: {
    padding: theme.spacing(1)
  },
  remarks: {
    marginLeft: theme.spacing(1)
  }
}))

const CaptionGrid = props => {
  const { image, labelTags, showMoreThreshold = 5, ...rootProps } = props
  const classes = useStyles()

  const labels = image.labels.map(t => labelTags.all[t])
  const labelsByCategory = groupBy(labels, 'category')
  const sources = [image, ...image.duplicated_posts]

  const [showMore, setShowMore] = useState(false)
  const handleShowMoreClick = (event) => {
    setShowMore(!showMore)
  }

  const [anchorEl, setAnchorEl] = React.useState(null)
  const [popoverContent, setPopoverContent] = React.useState('')
  const handleTagMouseEnter = (tag) => (event) => {
    setAnchorEl(event.currentTarget)
    setPopoverContent(tag.description || 'No description for ' + tag.name)
  }
  const handlePopoverClose = (event) => {
    setAnchorEl(null)
    setPopoverContent('')
  }

  const popoverOpen = Boolean(anchorEl)

  return (
    <Grid {...rootProps} className={clsx(rootProps.className, classes.root)}>
      <Paper className={classes.paper} elevation={0}>
        <Grid className={classes.labels} container>
          <Grid className={classes.chips} item>
            <Typography>
              {sources.length > 1 ? 'Sources:' : 'Source:'}
            </Typography>
            {(showMore ? sources : sources.slice(0, showMoreThreshold)).map(({ title, url }) => (
              <Typography key={url}>
                <Link href={url} target='_blank'>
                  {truncate(title)}
                </Link>
              </Typography>
            ))}
            {showMore || sources.length <= showMoreThreshold ? undefined : (
              <Link component='button' variant='caption' onClick={handleShowMoreClick}>
                And {sources.length - showMoreThreshold} more...
              </Link>
            )}
          </Grid>
          {labelTags.categories.map(({ category, name }) => (
            !labelsByCategory[category] ? undefined : (
              <Grid key={category} className={classes.chips} item>
                <Typography color='textSecondary'>{name}</Typography>
                {labelsByCategory[category].map(label => (
                  <Chip
                    key={label.tag}
                    label={label.name}
                    onClick={noop}
                    onDelete={!label.description ? undefined : noop} // use deleteIcon as infoIcon
                    deleteIcon={!label.description
                      ? undefined
                      : (
                        <InfoIcon
                          fontSize='small'
                          onMouseEnter={handleTagMouseEnter(label)}
                          onMouseLeave={handlePopoverClose}
                        />)}
                  />
                ))}
              </Grid>
            )
          ))}
          {!image.remarks ? undefined : (
            <Grid>
              <Typography color='textSecondary'>Remarks</Typography>
              <Typography style={{ whiteSpace: 'pre-line' }} className={classes.remarks}>{image.remarks}</Typography>
            </Grid>
          )}
        </Grid>
      </Paper>
      <Popover
        id='caption-grid-popover'
        className={classes.popover}
        classes={{ paper: classes.popoverPaper }}
        open={popoverOpen}
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left'
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left'
        }}
        onClose={handlePopoverClose}
        transitionDuration={0}
        disableRestoreFocus
      >
        <Typography>{popoverContent}</Typography>
      </Popover>
    </Grid>
  )
}

CaptionGrid.propTypes = {
  image: PropTypes.object.isRequired,
  labelTags: PropTypes.shape({
    categories: PropTypes.array,
    all: PropTypes.object
  }).isRequired
}

export default CaptionGrid
