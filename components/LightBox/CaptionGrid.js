import Chip from '@material-ui/core/Chip'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import { makeStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import clsx from 'clsx'
import { groupBy, truncate } from 'lodash'
import PropTypes from 'prop-types'
import React from 'react'

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
  }
}))

// const categories = [{
//   tag: 'fault',
//   name: 'Issues'
// }, {
//   tag: 'data',
//   name: 'Data Type'
// }, {
//   tag: 'form',
//   name: 'Chart Type'
// }, {
//   tag: 'media',
//   name: 'Media'
// }, {
//   tag: 'layout',
//   name: 'Layout'
// }, {
//   tag: 'metaphor',
//   name: 'Metaphor'
// }]

const CaptionGrid = props => {
  const { image, labelOptions, ...rootProps } = props
  const classes = useStyles()

  const labelsByCategory = groupBy(image.labels, l => l.split(':')[0])

  return (
    <Grid {...rootProps} className={clsx(rootProps.className, classes.root)}>
      <Paper className={classes.paper} elevation={0}>
        <Grid className={classes.labels} container>
          <Grid className={classes.chips} item>
            <Typography>
              Source:
            </Typography>
            <Chip
              label={`${image.source_platform}/${image.source}`}
              component='a'
              href={image.source_url}
              clickable
              color='primary'
              target='_blank'
            />
            <Chip
              label={truncate(image.title)}
              component='a'
              href={image.url}
              clickable
              color='secondary'
              target='_blank'
            />
          </Grid>
          {labelOptions.map(({ tag, name }) => (
            !labelsByCategory[tag] ? undefined : (
              <Grid key={tag} className={classes.chips} item>
                <Typography>{name}</Typography>
                {labelsByCategory[tag].map(label => (
                  <Chip key={label} label={label.substr(tag.length + 1)} />
                ))}
              </Grid>
            )
          ))}
          {!image.remarks ? undefined : (
            <Grid>
              <Typography>Remarks</Typography>
              <Typography>{image.remarks}</Typography>
            </Grid>
          )}
        </Grid>
      </Paper>
    </Grid>
  )
}

CaptionGrid.propTypes = {
  image: PropTypes.object.isRequired,
  labelOptions: PropTypes.array
}

export default CaptionGrid
