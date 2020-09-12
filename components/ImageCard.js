import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardMedia from '@material-ui/core/CardMedia'
import { makeStyles } from '@material-ui/core/styles'
import PropTypes from 'prop-types'
import React from 'react'
import config from '../src/config'

const useStyles = makeStyles({
  root: {
    width: config.thumbnails.size.width
  }
})

const ImageCard = props => {
  const { image } = props
  const classes = useStyles()

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          component='img'
          width={config.thumbnails.size.width}
          height={config.thumbnails.size.height}
          image={`${config.images.thumbnails.url}/${image.thumbnail_path}`}
          loading='lazy'
        />
      </CardActionArea>
    </Card>
  )
}

ImageCard.propTypes = {
  image: PropTypes.shape({
    image_name: PropTypes.string.isRequired,
    thumbnail_path: PropTypes.string.isRequired
  })
}

export default ImageCard
