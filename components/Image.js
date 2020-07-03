import Head from 'next/head'
import { useRouter } from 'next/router'
import PropTypes from 'prop-types'
import React from 'react'
import useSWR from 'swr'
import config from '../src/config'
import fetcher from '../src/lib/fetcher'
import ImageDetail from './ImageDetail'
import Loading from './Loading'

const Image = props => {
  const { imageId, labelOptions } = props
  const { data: image } = useSWR(`${config.imageMeta.baseUrl}/${imageId}.json`, fetcher)
  const router = useRouter()

  const handleClose = () => {
    router.push(`${config.rootPath}/`)
  }

  return !image ? (<Loading />) : (
    <div>
      <Head>
        <title>Bad Vis Browser</title>
      </Head>
      <ImageDetail open image={image} labelOptions={labelOptions} handleClose={handleClose} />
    </div>
  )
}

Image.propTypes = {
  imageId: PropTypes.string.isRequired,
  image: PropTypes.object,
  labelOptions: PropTypes.array.isRequired
}

export default Image
