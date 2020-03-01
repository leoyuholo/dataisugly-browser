import React from 'react'
import PropTypes from 'prop-types'
import { makeStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'

import ImageCard from './ImageCard'

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  container: {
    justifyContent: 'center'
    // "&::after": {
    //   content: "\'\'",
    //   flex: 'auto'
    // }
  }
}))

const Gallery = props => {
  const { images } = props
  const classes = useStyles()

  return (
    <Grid container className={classes.root} spacing={2}>
      <Grid item container className={classes.container} xs={12} spacing={1}>
        {(images || []).map(image => (
          <Grid key={image.id} item>
            <ImageCard image={image}/>
          </Grid>
        ))}
      </Grid>
    </Grid>
  )
}

Gallery.propTypes = {
  images: PropTypes.Object
}

export default Gallery
