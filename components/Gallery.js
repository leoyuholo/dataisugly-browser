import React from 'react'
import PropTypes from 'prop-types'
import { makeStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import { partial } from 'lodash'

import ImageCard from './ImageCard'
import ImageDetail from './ImageDetail'

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  container: {
    justifyContent: 'center'
  }
}))

const Gallery = props => {
  const { images } = props
  const classes = useStyles()
  const [open, setOpen] = React.useState(false)
  const [imageIdx, setImageIdx] = React.useState(-1)

  const handleClickOpen = index => {
    const image = images[index]
    const href = `/image/${image.image_name}`
    window.history.pushState(null, '', href)
    setImageIdx(index)
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
    setImageIdx(-1)
    const href = '/'
    window.history.pushState(null, '', href)
  }

  return (
    <Grid className={classes.root} container spacing={2}>
      <Grid className={classes.container} item container xs={12} spacing={1}>
        {(images || []).map((image, index) => (
          <Grid key={index} item onClick={partial(handleClickOpen, index)}>
            <ImageCard image={images[index]} />
          </Grid>
        ))}
        <ImageDetail open={open} image={images[imageIdx]} handleClose={handleClose} />
      </Grid>
    </Grid>
  )
}

Gallery.propTypes = {
  images: PropTypes.array.isRequired
}

export default Gallery
