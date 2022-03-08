const express = require("express");
const router = express.Router();
const Products = require("../models/Products")
const Users = require("../models/Users")
const passport = require("passport");


router.post("/login", passport.authenticate("local"), (req, res) => {
  res.status(200).send("Usuario logueado correctamente");
});


router.post('/register', (req, res) => {
  Users.create(req.body).then((user) => {
    res.status(201).send("Usuario creado correctamente");
  });
})

router.get("/me", (req, res) => {
  if (!req.user) {
    return res.sendStatus(401);
  }
  res.send(req.user);
});

router.post("/logout", (req, res) => {
  req.logOut();
  res.sendStatus(200);
});

router.post('/edit/:email', passport.authenticate("local"), (req, res) => {
  Users.update(req.body, {
    where: {
      email: req.params.email,
    },
    returning: true,
  })
  .then(product => {
    res.send(product);
  })
  .catch(err => console.log(err));
})

module.exports = router