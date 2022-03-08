const express = require("express");
const app = express();
const cors = require('cors')

const db = require("./db");
const routes = require("./routes/index");
const User = require("./models/Users");
const Products = require("./models/Products");

db.sync({ force: false }).then(() => {
    app.listen(3001, () => {
      console.log("Escuchando en puerto 3001");
    });
});