import CssBaseline from '@material-ui/core/CssBaseline'
import { makeStyles, ThemeProvider } from '@material-ui/core/styles'
import withWidth, { isWidthUp } from '@material-ui/core/withWidth'
import fetch from 'isomorphic-unfetch'
import Head from 'next/head'
import PropTypes from 'prop-types'
import React, { useEffect, useState } from 'react'
import FilterMenu from '../components/FilterMenu'
import Gallery from '../components/Gallery'
import Loading from '../components/Loading'
import TitleBar from '../components/TitleBar'
import config from '../src/config'
import filterImageList from '../src/lib/filterImageList'
import { theme } from '../src/theme'

const drawerWidth = 240

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
  const { imageList: { images, next } } = props
  // const { imageList: { images, next }, labels } = props
  const classes = useStyles()
  const isWide = isWidthUp('sm', props.width)

  const [imageList, setImageList] = useState(images)
  const [imageListFilter, setImageListFilter] = useState({})
  const [filteredImageList, setFilteredImageList] = useState(images)
  const [nextUrl, setNextUrl] = useState(`${config.imageLists.root.url}/${next}`)
  const [toFetch, setToFetch] = useState(0)
  const [isFetching, setIsFetching] = useState(false)
  useEffect(() => {
    async function fetchImages () {
      setIsFetching(true)

      const res = await fetch(nextUrl)
      const json = await res.json()

      setImageList(nextUrl === config.imageLists.all.url ? json.images : imageList.concat(json.images))
      filterImages(imageListFilter)
      setNextUrl(json.next ? `${config.imageLists.root.url}/${json.next}` : null)

      setToFetch(false)
      setIsFetching(false)
    }

    if (toFetch && !isFetching && nextUrl) {
      fetchImages()
    }
  }, [toFetch, isFetching, nextUrl, imageList])

  const handleFetchMore = (imageLength) => {
    if (filteredImageList.length === imageLength) {
      setToFetch(true)
    }
  }

  const filterImages = (filter) => {
    const filtered = filterImageList(imageList, filter)
    if (nextUrl && nextUrl !== config.imageLists.all.url && (filtered.length / imageList.length) < 0.2) {
      setNextUrl(config.imageLists.all.url)
    }
    setFilteredImageList(filtered)
  }

  const handleImageFilter = (filter) => {
    setImageListFilter(filter)
    filterImages(filter)
  }

  const [menuState, setMenuState] = React.useState(false)
  const toggleMenu = (state) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return
    }

    setMenuState(state)
  }

  return !imageList ? (<Loading />) : (
    <ThemeProvider theme={theme}>
      <div className={classes.root}>
        <CssBaseline />
        <Head>
          <title>Bad Vis Browser</title>
        </Head>
        <TitleBar isWide={isWide} toggleMenu={toggleMenu(true)} />
        <FilterMenu isWide={isWide} open={menuState} onClose={toggleMenu(false)} onFilter={handleImageFilter} />
        <main className={classes.content}>
          <div className={classes.toolbar} />
          <Gallery imageList={filteredImageList} hasMoreImages={!!nextUrl} isFetching={isFetching} handleFetchMore={handleFetchMore} />
          {/* <Gallery images={imageList} labels={labels} hasMoreImages={!!nextUrl} isFetching={isFetching} handleFetchMore={handleFetchMore} /> */}
        </main>
      </div>
    </ThemeProvider>
  )
}

Index.propTypes = {
  imageList: PropTypes.shape({
    images: PropTypes.array,
    next: PropTypes.string
  })
  // labels: PropTypes.array
}

Index.getInitialProps = async ctx => {
  try {
    const [imageList, labels] = await Promise.all([
      fetch(config.imageLists.page[0].url).then(r => r.json())
      // fetch(config.labels.url).then(r => r.json())
    ])

    return { imageList, labels }
  } catch (error) {
    console.log('getInitialProps error: ', error)
    return { error }
  }
}

export default withWidth()(Index)
