const config = {}

config.isServer = typeof window === 'undefined'
config.rootPath = ''
config.urlPrefix = config.isServer ? 'http://localhost:3000' : `${window.location.protocol}//${window.location.hostname}:${window.location.port}`

config.thumbnails = {
  size: {
    width: 140,
    height: 140
  }
}

config.imageLists = {}
config.imageLists.root = {
  url: `${config.urlPrefix}/bad-vis-images`
}
config.imageLists.page = [{
  url: `${config.imageLists.root.url}/image_lists/0.json`
}]
config.imageLists.all = {
  url: `${config.imageLists.root.url}/image_lists/all.json`
}

config.imageMeta = {
  baseUrl: `${config.urlPrefix}/bad-vis-images/meta`
}

config.labels = {
  url: `${config.urlPrefix}/bad-vis-images/labels/all.json`
}

export default config
