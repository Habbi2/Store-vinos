const express = require("express");
const router = express.Router();
const Products = require("./products");
const Users = require("./users");
const Cart = require("./cart")

router.use('/products', Products)
router.use('/users', Users)
router.use('/cart', Cart)

module.exports = router;