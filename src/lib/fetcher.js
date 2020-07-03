import fetch from 'isomorphic-unfetch'

const fetcher = (...args) => {
  return fetch(...args).then(response => response.json())
}

export default fetcher
