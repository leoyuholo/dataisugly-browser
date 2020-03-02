import React from 'react'
import PropTypes from 'prop-types'
import { makeStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import Dialog from '@material-ui/core/Dialog'
import Slide from '@material-ui/core/Slide'
import { useRouter } from 'next/router'
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

const Transition = React.forwardRef(function Transition (props, ref) {
  return <Slide direction="up" ref={ref} {...props} />
})

const Gallery = props => {
  const { images } = props
  const router = useRouter()
  const classes = useStyles()
  const [open, setOpen] = React.useState(false)
  const [imageIdx, setImageIdx] = React.useState(-1)

  const handleClickOpen = index => {
    const image = images[index]
    const href = `/image/${image.image_name}`
    router.push('/image/[...imageId]', href, { shallow: true })
    setImageIdx(index)
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
    setImageIdx(-1)
    const href = '/'
    router.push(href, href, { shallow: true })
  }

  return (
    <Grid className={classes.root} container spacing={2}>
      <Grid className={classes.container} item container xs={12} spacing={1}>
        {(images || []).map((image, index) => (
          <Grid key={index} item onClick={partial(handleClickOpen, index)}>
            <ImageCard image={images[index]} />
          </Grid>
        ))}
        <Dialog fullScreen open={open} onClose={handleClose} TransitionComponent={Transition}>
          <ImageDetail image={images[imageIdx]} handleClose={handleClose} />
        </Dialog>
      </Grid>
    </Grid>
  )
}

Gallery.propTypes = {
  images: PropTypes.array.isRequired
}

export default Gallery
