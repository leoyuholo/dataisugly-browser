import React from 'react'
import PropTypes from 'prop-types'
import { makeStyles, createMuiTheme, ThemeProvider } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import IconButton from '@material-ui/core/IconButton'
import CloseIcon from '@material-ui/icons/Close'
import Typography from '@material-ui/core/Typography'
import FormLabel from '@material-ui/core/FormLabel';
import Link from '@material-ui/core/Link'
import Chip from '@material-ui/core/Chip';
import { blue, pink } from '@material-ui/core/colors'

import Loading from './Loading'

const useStyles = makeStyles(theme => ({
  root: {
    minHeight: '100vh'
  },
  appBar: {
    position: 'absolute',
    backgroundColor: 'rgba(0, 0, 0, 0)'
  },
  closeIcon: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)'
  },
  imageDetail: {
    flexGrow: 1,
    alignContent: 'center'
  },
  imageGrid: {
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
    maxHeight: '100vh',
    display: 'flex',
    textAlign: 'center',
    alignContent: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    [theme.breakpoints.down('sm')]: {
      minHeight: '0'
    },
    [theme.breakpoints.up('md')]: {
      minHeight: '100vh'
    }
  },
  img: {
    backgroundColor: 'white',
    maxWidth: '100%',
    maxHeight: '99vh',
    objectFit: 'contain'
  },
  descriptionGrid: {
    backgroundColor: theme.palette.grey['900'],
    [theme.breakpoints.down('sm')]: {
      minWidth: '100%'
    },
    [theme.breakpoints.up('md')]: {
      minHeight: '100vh'
    }
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

const ImageDetail = props => {
  const { image, handleClose } = props
  const darkTheme = createMuiTheme({
    palette: {
      // primary: {
      //   main: blue['200']
      // },
      // secondary: {
      //   main: pink['200']
      // },
      type: 'dark'
    }
  })
  const classes = useStyles()

  if (!image) {
    return (<Loading />)
  }

  return (
    <ThemeProvider theme={darkTheme}>
      <div className={classes.root}>
        <AppBar className={classes.appBar} elevation={0}>
          <Toolbar disableGutters variant="dense">
            <IconButton className={classes.closeIcon} color="inherit" onClick={handleClose} aria-label="close">
              <CloseIcon />
            </IconButton>
          </Toolbar>
        </AppBar>
        <div className={classes.imageDetail}>
          <Grid container>
            <Grid className={classes.imageGrid} item sm={12} md={8}>
              <Grid>
                <img className={classes.img} alt="complex" src={`/${image.image_path}`} />
              </Grid>
            </Grid>
            <Grid className={classes.descriptionGrid} item sm={12} md={4}>
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
                      label={image.source}
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
          </Grid>
        </div>
      </div>
    </ThemeProvider>
  )
}

ImageDetail.propTypes = {
  image: PropTypes.shape({
    url: PropTypes.string.isRequired,
    image_path: PropTypes.string.isRequired
  }),
  handleClose: PropTypes.func
}

export default ImageDetail
