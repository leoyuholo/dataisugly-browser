import Grid from '@material-ui/core/Grid'
import { makeStyles } from '@material-ui/core/styles'
import PropTypes from 'prop-types'
import React, { useState } from 'react'
import config from '../src/config'
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
  const { imageList, labelTags } = props
  const classes = useStyles()

  const [open, setOpen] = useState(false)
  const [imageIdx, setImageIdx] = useState(-1)
  const handleClickOpen = (index) => (event) => {
    const image = imageList[index]
    const href = `${config.rootPath}/?image=${image.image_name}`
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

  return (
    <Grid className={classes.root} container>
      <Grid className={classes.container} item container xs={12} spacing={1}>
        {imageList.map((image, index) => (
          <Grid key={image.image_name} item onClick={handleClickOpen(index)}>
            <ImageCard image={image} />
          </Grid>
        ))}
        <ImageDetail open={open} labelTags={labelTags} image={imageList[imageIdx]} handleClose={handleClose} />
      </Grid>
    </Grid>
  )
}

Gallery.propTypes = {
  imageList: PropTypes.array.isRequired,
  labelTags: PropTypes.object
}

export default Gallery
