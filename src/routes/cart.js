const expresss = require('express');
const { addItemToCart } = require('../controller/cart');
const { requireSignin, userMiddleware } = require('../common-middleware');
const router = expresss.Router();

router.post('/user/cart/addtocart', requireSignin, userMiddleware, addItemToCart);

module.exports = router;