const express = require("express");
const router = express.Router();
const Products = require("../models/Products");
const Users = require("../models/Users");


//obtener vinos
router.get("/all", (req, res) => {
  Products.findAll().then((products) => {
    res.status(200).send(products);
  });
});

router.get("/list/tinto", (req, res) => {
  Products.findAll({ where: {breed: "Tinto"}}).then((products) => {
    res.status(200).send(products);
  });
});

router.get("/list/blanco", (req, res) => {
  Products.findAll({ where: {breed: "Blanco"}}).then((products) => {
    res.status(200).send(products);
  });
});

router.get("/list/rosado", (req, res) => {
  Products.findAll({ where: {breed: "Rosado"}}).then((products) => {
    res.status(200).send(products);
  });
});
//hasta aca estan bien

router.post("/add", (req, res) => {
  Products.create(req.body).then((newProduct) => {
    res.status(201).send(newProduct);
  });
});

router.get("/find/:name", (req, res) => {
  Products.findOne({ where: { name: req.params.name } }).then((product) => {
    res.status(200).send(product);
  });
});

router.put("/find/:name", (req, res) => {
  Products.update(req.body, {
    where: {
      name: req.params.name,
    },
    returning: true,
  }).then((product) => {
    res.send(product);
  });
});

router.delete("/delete/:name", (req, res, next) => {
  Products.destroy({
    where: {
      name: req.params.name,
    },
  }).then(() => res.sendStatus(202));
});

router.delete("/delete", (req, res, next) => {
  Products.destroy({ where: {} }).then(() => {
    res.sendStatus(202);
  });
});

module.exports = router;
