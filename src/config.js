const config = {}

config.isServer = typeof window === 'undefined'
config.development = !!process.env.NEXT_PUBLIC_DEV
config.rootPath = !config.development ? '/bad-vis-browser' : ''
config.urlPrefix = !config.isServer ? '' : config.development ? 'http://localhost:3000' : 'https://leoyuholo.github.io'
// config.urlPrefix = !config.development ?
//   'https://leoyuholo.github.io' :
//   config.isServer ?
//     'http://localhost:3000' :
//     `${window.location.protocol}//${window.location.hostname}:${window.location.port}`
config.urlPrefix += '/bad-vis-images'

config.thumbnails = {
  size: {
    width: 140,
    height: 140
  }
}

config.images = {}
config.images.root = {
  url: config.urlPrefix
}
config.images.preview = {
  url: config.images.root.url
}
config.images.thumbnails = {
  url: config.images.root.url
}

config.imageLists = {}
config.imageLists.root = {
  url: `${config.urlPrefix}/image_lists`
}
config.imageLists.page = [{
  url: `${config.imageLists.root.url}/0.json`
}]
config.imageLists.all = {
  url: `${config.imageLists.root.url}/all.json`
}
config.imageLists.dateRange = [
  new Date('2012-11-01T00:00:00Z'),
  new Date()
]

config.imageMeta = {
  baseUrl: `${config.urlPrefix}/meta`
}

config.labelOptions = {
  url: `${config.imageLists.root.url}/labelOptions.json`
}

config.labelTags = {
  url: `${config.imageLists.root.url}/labelTags.json`
}

export default config
