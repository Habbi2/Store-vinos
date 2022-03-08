const Products = require("./Products");
const Users = require("./Users");

Users.belongsTo(Products, { as: "ventas" })

module.exports = { Users, Products };