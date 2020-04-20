import { CircularProgress, Typography } from '@material-ui/core'
import Grid from '@material-ui/core/Grid'
import { makeStyles } from '@material-ui/core/styles'
import { partial } from 'lodash'
import PropTypes from 'prop-types'
import React, { useEffect, useRef, useState } from 'react'
import { useIntersection } from 'react-use'
import config from '../src/config'
import ImageCard from './ImageCard'
import ImageDetail from './ImageDetail'

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  container: {
    justifyContent: 'center'
  },
  sentinel: {
    width: config.thumbnails.size.width,
    height: config.thumbnails.size.height,
    display: 'grid',
    alignItems: 'center',
    justifyContent: 'center'
  }
}))

const Gallery = props => {
  const { images, hasMoreImages = false, isFetching = false, handleFetchMore = () => {} } = props
  const classes = useStyles()

  const [open, setOpen] = useState(false)
  const [imageIdx, setImageIdx] = useState(-1)
  const handleClickOpen = index => {
    const image = images[index]
    const href = `${config.rootPath}/image/${image.image_name}`
    window.history.pushState(null, '', href)
    setImageIdx(index)
    setOpen(true)
  }
  const handleClose = () => {
    setOpen(false)
    setImageIdx(-1)
    const href = `${config.rootPath}/`
    window.history.pushState(null, '', href)
  }

  const intersectionRef = useRef(null)
  const intersection = useIntersection(intersectionRef, {
    root: null,
    rootMargin: '0px',
    threshold: 0.8
  })
  const [imageLength, setImageLength] = useState(images.length)
  useEffect(() => {
    if (intersection?.isIntersecting) {
      handleFetchMore(imageLength)
    } else {
      setImageLength(images.length)
    }
  }, [intersection, handleFetchMore, imageLength, images])

  return (
    <Grid className={classes.root} container>
      <Grid className={classes.container} item container xs={12} spacing={1}>
        {(images || []).map((image, index) => (
          <Grid key={index} item onClick={partial(handleClickOpen, index)}>
            <ImageCard image={images[index]} />
          </Grid>
        ))}
        {hasMoreImages &&
          <Grid item ref={intersectionRef}>
            <Grid className={classes.sentinel}>
              {isFetching ? <CircularProgress color="secondary" /> : <Typography>More Vis</Typography>}
            </Grid>
          </Grid>
        }
        <ImageDetail open={open} image={images[imageIdx]} handleClose={handleClose} />
      </Grid>
    </Grid>
  )
}

Gallery.propTypes = {
  images: PropTypes.array.isRequired,
  hasMoreImages: PropTypes.bool,
  isFetching: PropTypes.bool,
  handleFetchMore: PropTypes.func
}

export default Gallery
