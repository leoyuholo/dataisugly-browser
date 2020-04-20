import Chip from '@material-ui/core/Chip'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import { makeStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import clsx from 'clsx'
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

const CaptionGrid = props => {
  const { image, ...rootProps } = props
  const classes = useStyles()

  return (
    <Grid {...rootProps} className={clsx(rootProps.className, classes.root)}>
      <Paper className={classes.paper} elevation={0}>
        <Grid className={classes.labels} container>
          <Grid className={classes.chips} item>
            <Typography>
              Source:
            </Typography>
            <Chip
              label={image.source_platform}
              component="a"
              href={image.source_url}
              clickable
              color="primary"
              target="_blank"
            />
            <Chip
              label={`${image.source}/comments/${image.id}`}
              component="a"
              href={image.url}
              clickable
              color="secondary"
              target="_blank"
            />
          </Grid>
          <Grid className={classes.chips} item>
            <Typography>
              Data Type:
            </Typography>
            <Chip
              label="Categorical"
            />
            <Chip
              label="Quantitative"
            />
          </Grid>
          <Grid className={classes.chips} item>
            <Typography>
              Chart Type:
            </Typography>
            <Chip
              label="Bar Chart"
            />
          </Grid>
          <Grid className={classes.chips} item>
            <Typography>
              Other:
            </Typography>
            <Chip
              label="Metaphor"
            />
          </Grid>
          <Grid className={classes.chips} item>
            <Typography>
              Issues:
            </Typography>
            <Chip
              label="Truncated Axis"
            />
            <Chip
              label="Misleading Area Encoding"
            />
          </Grid>
        </Grid>
      </Paper>
    </Grid>
  )
}

CaptionGrid.propTypes = {
  image: PropTypes.object.isRequired
}

export default CaptionGrid
