import { Grow } from '@material-ui/core'
import AppBar from '@material-ui/core/AppBar'
import Dialog from '@material-ui/core/Dialog'
import Grid from '@material-ui/core/Grid'
import IconButton from '@material-ui/core/IconButton'
import { makeStyles, ThemeProvider } from '@material-ui/core/styles'
import Toolbar from '@material-ui/core/Toolbar'
import CloseIcon from '@material-ui/icons/Close'
import PropTypes from 'prop-types'
import React from 'react'
import { darkTheme } from '../src/theme'
import CaptionGrid from './LightBox/CaptionGrid'
import ImageGrid from './LightBox/ImageGrid'

const useStyles = makeStyles(theme => ({
  dialog: {
    backgroundColor: 'transparent'
  },
  paper: {
    margin: 0,
    padding: 0,
    width: '100%',
    maxHeight: '100%',
    maxWidth: '100%'
  },
  root: {
    minHeight: '100vh',
    backgroundColor: 'transparent'
  },
  appBar: {
    position: 'fixed',
    backgroundColor: 'rgba(0, 0, 0, 0)'
  },
  imageDetail: {
    flexGrow: 1,
    minHeight: '100vh'
  },
  imageGrid: {
    [theme.breakpoints.down('sm')]: {
      minHeight: '0',
      minWidth: '100%'
    },
    [theme.breakpoints.up('md')]: {
      minHeight: '100vh'
    }
  },
  captionGrid: {
    [theme.breakpoints.down('sm')]: {
      minWidth: '100%'
    },
    [theme.breakpoints.up('md')]: {
      minHeight: '100vh'
    }
  }
}))

const Transition = React.forwardRef(function Transition (props, ref) {
  return <Grow direction="up" ref={ref} {...props} />
})

const ImageDetail = props => {
  const { image, handleClose } = props
  const classes = useStyles()

  if (!props.open) { return null }

  return (
    <ThemeProvider theme={darkTheme}>
      <Dialog
        className={classes.dialog}
        open={true}
        maxWidth={false}
        fullWidth={true}
        PaperProps={{ className: classes.paper }}
        TransitionComponent={Transition}
        onClose={handleClose}
      >
        <div className={classes.root}>
          <AppBar className={classes.appBar} elevation={0}>
            <Toolbar disableGutters variant="dense">
              <IconButton color="inherit" onClick={handleClose} aria-label="close">
                <CloseIcon />
              </IconButton>
            </Toolbar>
          </AppBar>
          <Grid className={classes.imageDetail} container>
            <ImageGrid className={classes.imageGrid} item sm={12} md={8} onClick={handleClose} src={`/${image.image_path}`} />
            <CaptionGrid className={classes.captionGrid} item sm={12} md={4} image={image} />
          </Grid>
        </div>
      </Dialog>
    </ThemeProvider>
  )
}

ImageDetail.propTypes = {
  image: PropTypes.object,
  open: PropTypes.bool,
  handleClose: PropTypes.func
}

export default ImageDetail
