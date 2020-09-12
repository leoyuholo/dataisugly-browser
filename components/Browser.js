import CssBaseline from '@material-ui/core/CssBaseline'
import { makeStyles, ThemeProvider } from '@material-ui/core/styles'
import withWidth, { isWidthUp } from '@material-ui/core/withWidth'
import debounce from 'lodash/debounce'
import mapValues from 'lodash/mapValues'
import Head from 'next/head'
import PropTypes from 'prop-types'
import React, { useState } from 'react'
import filterImageList from '../src/lib/filterImageList'
import { theme } from '../src/theme'
import FilterMenu from './FilterMenu'
import Gallery from './Gallery'
import Loading from './Loading'
import TitleBar from './TitleBar'

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexGrow: 1,
    paddingTop: theme.spacing(1)
  },
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    padding: theme.spacing(3)
  }
}))

const Index = props => {
  const { imageList: { images }, labelTags } = props
  const classes = useStyles()
  const isWide = isWidthUp('sm', props.width)

  const [filteredImageList, setFilteredImageList] = useState(images)
  const [filteredImageCounts, setFilteredImageCounts] = useState(mapValues(labelTags.all, t => t.count))
  const handleImageFilter = debounce((newFilter) => {
    const { imageList: newFilteredImageList, imageCounts: newFilteredImageCounts } = filterImageList(images, newFilter, labelTags)

    setFilteredImageCounts(newFilteredImageCounts)
    setFilteredImageList(newFilteredImageList)
  }, 1000)

  const [menuState, setMenuState] = React.useState(false)
  const toggleMenu = (state) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return
    }

    setMenuState(state)
  }

  return !images ? (<Loading />) : (
    <ThemeProvider theme={theme}>
      <div className={classes.root}>
        <CssBaseline />
        <Head>
          <title>Bad Vis Browser</title>
        </Head>
        <TitleBar isWide={isWide} toggleMenu={toggleMenu(true)} />
        <FilterMenu isWide={isWide} open={menuState} labelTags={labelTags} filteredImageCounts={filteredImageCounts} onClose={toggleMenu(false)} onFilter={handleImageFilter} />
        <main className={classes.content}>
          <div className={classes.toolbar} />
          <Gallery imageList={filteredImageList} labelTags={labelTags} />
        </main>
      </div>
    </ThemeProvider>
  )
}

Index.propTypes = {
  imageList: PropTypes.shape({
    images: PropTypes.arrayOf(PropTypes.shape({
      image_name: PropTypes.string,
      thumbnail_path: PropTypes.string,
      labels: PropTypes.arrayOf(PropTypes.string)
    }))
  }).isRequired,
  labelTags: PropTypes.object.isRequired
}

export default withWidth()(Index)
