import React from 'react'
import useSWR from 'swr'

import Gallery from '../components/Gallery'

function fetcher (url) {
  return fetch(url).then(r => r.json())
}

export default function Index () {
  const { data } = useSWR(
    '/api/images',
    fetcher
  )

  return (
    <div>
      <Gallery images={data} />
    </div>
  )
}
