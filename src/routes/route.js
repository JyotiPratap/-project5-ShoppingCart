const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController')
const productController = require('../controllers/productController')
const cartController = require('../controllers/cartController')
const middleware = require('../middlewares/auth')

//User's APIs -> Authentication required.
router.post('/register', userController.createUSer)
router.post('/login', userController.login)
router.get('/user/:userId/profile', userController.getUserProfile)
router.put('/user/:userId/profile',middleware.userAuth,userController.updateProfile)

//Product's APIs -> No Authentication required.
router.post('/products', productController.createProduct)
router.get('/products', productController.getAllProducts)
router.get('/products/:productId', productController.getProductsById)
router.put('/products/:productId', productController.updateProduct)
router.delete('/products/:productId', productController.deleteProduct)

//Cart's APIs -> Authentication required.
router.post('/users/:userId/cart', middleware.userAuth, cartController.cartCreation)

module.exports = router;