const express = require("express");
const router = express.Router();
const Products = require("../models/Products")
const Users = require("../models/Users")
const passport = require("passport");


router.post("/login", passport.authenticate("local"), (req, res) => {
  res.send(req.user);
});


router.post('/register', (req, res) => {
  Users.create(req.body, {
    include: { model: Products, as: "products" }
  }).then((user) => {
    res.sendStatus(201);
  });
})

router.get("/me", (req, res) => {
  if (!req.user) {
    return res.sendStatus(401);
  }
  Users.findOne({ where: { id: req.user.id }, include: { model: Products, as: "products" } })
    .then((user) => { res.send(user); })
});

router.post("/logout", (req, res) => {
  req.logOut();
  res.sendStatus(200);
});

router.put('/edit/:email', passport.authenticate("local") , (req, res) => {
  if (!req.user) {
    return res.sendStatus(401)
  }
  Users.update(req.body, {
    where: {
      email: req.params.email,
    },
    returning: true,
  })
    .then(product => {
      res.send(product);
    })
})

router.delete("/delete/:email", (req, res, next) => {
  Users.destroy({
    where: {
      email: req.params.email,
    },
  })
    .then(() => res.sendStatus(202))
});

module.exports = router