var fs = require('fs');
var multer  = require('multer')
var maxSize = 22282810;

var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    var folderName = 'static/gallery'

    try {
      if (!fs.existsSync(folderName)){
        fs.mkdirSync(folderName)
      }
    } catch (err) {
      console.error(err)
    }
    cb(null, folderName)
  },
  filename: function (req, file, cb) {
    cb(null, Math.floor(Math.random() * 101) + '-' + file.originalname)
  }
})

const upload = multer({ storage: storage, limits: { fileSize: maxSize } })

export default upload