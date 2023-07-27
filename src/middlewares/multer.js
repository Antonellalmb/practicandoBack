const multer = require('multer');
const path = require('path');
const crypto = require('crypto');


function generateRandomString(length) {
  return crypto.randomBytes(Math.ceil(length / 2)).toString('hex').slice(0, length);
}

const storage = multer.diskStorage({

  destination: function (req, file, cb) {
    cb(null, path.join(__dirname, '../../public/img') ); 
  },

  filename: function (req, file, cb) {
    const uniqueName = generateRandomString(8) + Date.now() + path.extname(file.originalname);
    cb(null, uniqueName);
  }
});

const fileFilter = (req, file, cb) => {
  if (file.mimetype.includes('image') && file.fileSize < (1024*1024*10) ) {
    cb(null, true)
  } else {
    req.fileError = true
    cb(null, false)
  }
}




const fileUpload = multer({ storage: storage, fileFilter: fileFilter });
module.exports = fileUpload;