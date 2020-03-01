import React from 'react'
import PropTypes from 'prop-types'
import { makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardMedia from '@material-ui/core/CardMedia'

const useStyles = makeStyles({
  root: {
    minWidth: 140,
    maxWidth: 345
  }
})

const ImageCard = props => {
  const { image } = props
  const classes = useStyles()

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          width="140"
          image={image.thumbnail_path}
        />
      </CardActionArea>
    </Card>
  )
}

ImageCard.propTypes = {
  image: {
    thumbnail_path: PropTypes.string
  }
}

export default ImageCard
