const express = require("express");
const router = express.Router();
const Products = require("./products");
const Users = require("./users");


router.use('/products', Products)
router.use('/users', Users)


module.exports = router;