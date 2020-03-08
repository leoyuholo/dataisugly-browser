import CircularProgress from '@material-ui/core/CircularProgress'
import { makeStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import React from 'react'

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column'
  }
}))

const Loading = () => {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <CircularProgress />
      <Typography>
        Loading...
      </Typography>
    </div>
  )
}

export default Loading
