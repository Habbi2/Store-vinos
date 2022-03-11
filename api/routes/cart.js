const express = require("express");
const router = express.Router();
const Cart = require("../models/Cart")
const Products = require("../models/Products");
const User = require("../models/Users");

const Users = require("../models/Users")


router.post('/add', (req, res) => {
  Users.findOne({ where: { id: req.user.id }, include: { model: Products, as: "products" } })
    .then(user => {
      Products.findOne({ where: { id: req.body.id } })
        .then(product => {
          user.addProducts(product)
          res.send(user);
        })
    })
})

router.delete('/delete/:id', (req, res) => {
  Cart.destroy({
    where: {
      id: req.params.id,
    },
  })
    .then(() => res.sendStatus(202))
})

router.put('/edit/:id', (req, res) => {
  Products.update(req.params.count, {
    where: {
      id: req.params.id,
    },
    returning: true,
  })
    .then(cartProduct => {
      res.send(cartProduct);
    })
})

module.exports = router