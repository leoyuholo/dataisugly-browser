import { AppBar, Grid, IconButton, Link, Toolbar, Typography } from '@material-ui/core'
import Slide from '@material-ui/core/Slide'
import { makeStyles } from '@material-ui/core/styles'
import muiUseScrollTrigger from '@material-ui/core/useScrollTrigger'
import withWidth from '@material-ui/core/withWidth'
import MenuIcon from '@material-ui/icons/Menu'
import PropTypes from 'prop-types'
import React from 'react'
import ConditionalWrapper from './ConditionalWrapper'

const useStyles = makeStyles(theme => ({
  appBar: {
    // backgroundColor: '#90caf9'
    zIndex: theme.zIndex.drawer + 1
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    flexGrow: 1
  },
  signature: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-end'
  }
}))

function HideOnScroll (props) {
  const { children } = props
  const trigger = muiUseScrollTrigger()

  return (
    <Slide appear={false} direction='down' in={!trigger}>
      {children}
    </Slide>
  )
}

HideOnScroll.propTypes = {
  children: PropTypes.element.isRequired
}

const TitleBar = props => {
  const { isWide, toggleMenu, appBarProps } = props
  const classes = useStyles()

  return (
    <ConditionalWrapper condition={!isWide} wrapper={children => <HideOnScroll>{children}</HideOnScroll>}>
      <AppBar position='fixed' className={classes.appBar} {...appBarProps}>
        <Toolbar>
          {!isWide &&
            <IconButton edge='start' className={classes.menuButton} color='inherit' size='medium' onClick={toggleMenu}>
              <MenuIcon />
            </IconButton>}
          <Typography variant='h6' className={classes.title}>
            BAD VIS BROWSER
          </Typography>
          {isWide &&
            <Grid className={classes.signature}>
              <Typography variant='body2'>
                A community effort of <Link href='https://www.reddit.com/r/dataisugly/' target='_blank' color='secondary'>r/dataisugly</Link>
              </Typography>
              <Typography variant='body2'>
                Curated by <Link href='https://leoyuholo.com/' target='_blank' color='inherit'>Leo Yu-Ho Lo</Link>@<Link href='http://hkustvis.org/' target='_blank' color='inherit'>HKUST VisLab</Link>
              </Typography>
            </Grid>}
        </Toolbar>
      </AppBar>
    </ConditionalWrapper>
  )
}

TitleBar.propTypes = {
  width: PropTypes.string,
  toggleMenu: PropTypes.func,
  appBarProps: PropTypes.object
}

export default withWidth()(TitleBar)
