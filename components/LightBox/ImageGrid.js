import React from 'react'
import PropTypes from 'prop-types'
import { makeStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import classNames from 'classnames'

const useStyles = makeStyles(theme => ({
  root: {
    // backgroundColor: 'transparent',
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    maxHeight: '100vh',
    display: 'flex',
    textAlign: 'center',
    alignContent: 'center',
    justifyContent: 'center',
    flexDirection: 'column'
  },
  img: {
    backgroundColor: 'white',
    maxWidth: '100%',
    maxHeight: '99vh',
    objectFit: 'contain'
  }
}))

const ImageGrid = props => {
  const { src, ...rootProps } = props
  const classes = useStyles()

  return (
    <Grid {...rootProps} className={classNames(rootProps.className, classes.root)}>
      <Grid>
        <img className={classes.img} alt="Missing Image." src={src} onClick={e => e.stopPropagation()} />
      </Grid>
    </Grid>
  )
}

ImageGrid.propTypes = {
  src: PropTypes.string.isRequired
}

export default ImageGrid
