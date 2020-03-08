import { makeStyles, ThemeProvider } from '@material-ui/core/styles'
import fetch from 'isomorphic-unfetch'
import Head from 'next/head'
import PropTypes from 'prop-types'
import React, { useEffect, useState } from 'react'
import Gallery from '../components/Gallery'
import Loading from '../components/Loading'
import TitleBar from '../components/TitleBar'
import config from '../src/config'
import { theme } from '../src/theme'

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    paddingTop: theme.spacing(1)
  },
  toolbar: theme.mixins.toolbar
}))

const Index = props => {
  const { images, next } = props
  const classes = useStyles()

  const [imageList, setImageList] = useState(images)
  const [nextUrl, setNextUrl] = useState(`${config.imageLists.root.url}/${next}`)
  const [toFetch, setToFetch] = useState(0)
  const [isFetching, setIsFetching] = useState(false)
  useEffect(() => {
    async function fetchImages () {
      setIsFetching(true)

      const res = await fetch(nextUrl)
      const json = await res.json()

      setImageList(imageList.concat(json.images))
      setNextUrl(`${config.imageLists.root.url}/${json.next}`)

      setToFetch(false)
      setIsFetching(false)
    }

    if (toFetch && !isFetching && nextUrl) {
      fetchImages()
    }
  }, [toFetch, isFetching, nextUrl, imageList])

  const handleFetchMore = (imageLength) => {
    if (imageList.length === imageLength) {
      setToFetch(true)
    }
  }

  return !imageList ? (<Loading />) : (
    <ThemeProvider theme={theme}>
      <div className={classes.root}>
        <Head>
          <title>Bad Vis Browser</title>
        </Head>
        <TitleBar />
        <div className={classes.toolbar} />
        <Gallery images={imageList} hasMoreImages={!!nextUrl} isFetching={isFetching} handleFetchMore={handleFetchMore} />
      </div>
    </ThemeProvider>
  )
}

Index.propTypes = {
  images: PropTypes.array,
  next: PropTypes.string
}

Index.getInitialProps = async ctx => {
  const res = await fetch(config.imageLists.page[0].url)
  const json = await res.json()
  return json
}

export default Index
