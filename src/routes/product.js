const expresss = require('express');
//const {  } = require('../controller/category');
const { requireSignin, adminMiddleware } = require('../common-middleware');
const { createProduct } = require('../controller/product');
const multer = require('multer');
const router = expresss.Router();
const shortid = require('shortid');
const path = require('path');


const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, path.join(path.dirname(__dirname), 'uploads'))
    },
    filename: function(req, file, cb) {
        cb(null, shortid.generate() + '-' + file.originalname)
    }
});

const upload = multer({ storage });

router.post('/product/create', requireSignin, adminMiddleware, upload.array('productPicture'), createProduct);

//router.get('/category/getcategory', getCategories);

module.exports = router;