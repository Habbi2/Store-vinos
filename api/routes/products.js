const express = require("express");
const router = express.Router();
const Products = require("../models/Products");


//obtener propiedades
router.get("/all", (req, res) => {
  Products.findAll().then((products) => {
    res.status(200).send(products);
  });
});

router.get("/list/departamento", (req, res) => {
  Products.findAll({ where: {category: "Departamento"}}).then((products) => {
    res.status(200).send(products);
  });
});

router.get("/list/casa", (req, res) => {
  Products.findAll({ where: {category: "Casa"}}).then((products) => {
    res.status(200).send(products);
  });
});

router.get("/list/local", (req, res) => {
  Products.findAll({ where: {category: "Local"}}).then((products) => {
    res.status(200).send(products);
  });
});

router.get("/list/caba", (req, res) => {
  Products.findAll({ where: {location: "CABA"}}).then((products) => {
    res.status(200).send(products);
  });
});

router.get("/list/zona_norte", (req, res) => {
  Products.findAll({ where: {location: "Zona Norte"}}).then((products) => {
    res.status(200).send(products);
  });
});

router.get("/list/zona_oeste", (req, res) => {
  Products.findAll({ where: {location: "Zona Oeste"}}).then((products) => {
    res.status(200).send(products);
  });
});

router.get("/list/zona_sur", (req, res) => {
  Products.findAll({ where: {location: "Zona Sur"}}).then((products) => {
    res.status(200).send(products);
  });
});

router.post("/add", (req, res) => {
  Products.create(req.body).then((newProduct) => {
    res.status(201).send(newProduct);
  });
});

router.get("/find/:name/:id", (req, res) => {
  Products.findOne({ where: { name: req.params.name, id: req.params.id} }).then((product) => {
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
