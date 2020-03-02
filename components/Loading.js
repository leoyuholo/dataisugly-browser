import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column'
  },
}));

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
