const express = require("express");
const router = express.Router();
const Cart = require("../models/Cart");
const Products = require("../models/Products");
const User = require("../models/Users");

const Users = require("../models/Users");

router.post("/add", async function (req, res) {
  if (!req.user) return 
  const user = await Users.findOne({
    where: { id: req.user.id },
    include: { model: Products, as: "products" },
  });
  if (!req.body.id) return 
  const product = await Products.findOne({ where: { id: req.body.id } });
  if (!product) return 
  await user.addProducts(product);
  return res.send(product);
});

router.get("/get", async function (req, res) {
  if (!req.user) return 
  const user = await Users.findOne({
    where: { id: req.user.id },
    include: { model: Products, as: "products" },
  });
  if (!user) return 
  return res.send(user.products);
});

router.post("/delete", async function (req, res) {
  if (!req.user) return 
  const user = await Users.findOne({
    where: { id: req.user.id },
    include: { model: Products, as: "products" },
  });
  if (!req.body.id) return 
  const product = await Products.findOne({ where: { id: req.body.id } });
  if (!product) return
  let bool = false;
  user.products.map((value) => {
    if (value.id === req.body.id) bool = true;
  });
  if (bool === false)
    return 
  await user.removeProducts(product);
  const products = user.products.splice(user.products.indexOf(product))
  return res.send(user.products)
});

router.post("/edit", async function (req, res) {
  if (!req.user) return res.send("No se encontró el usuario");
  const user = await Users.findOne({
    where: { id: req.user.id },
    include: { model: Products, as: "products" },
  });
  if (!req.body.id) return res.send("No se encontró el producto");
  let product = await Products.findOne({ where: { id: req.body.id } });
  if (!product) return res.send("No se encontró el producto en el carrito");
  await product.update({ quantity: req.body.quantity });
  await product.save();
  if (!product) return res.send("No se encontró el producto");
  let bool = false;
  user.products.map((value) => {
    if (value.id === req.body.id) bool = true;
  });
  if (bool === false)
    return res.send("No se encontró el producto en el carrito");
  await user.removeProducts(product);
  await user.addProducts(product);
  return res.send("El producto se actualizó correctamente");
});

module.exports = router;
