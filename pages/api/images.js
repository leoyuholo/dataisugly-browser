import images from '../../public/gallery/images.json'

export default (req, res) => {
  res.status(200).json(images)
}
