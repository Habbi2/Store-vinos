const { DataTypes, Model } = require("sequelize");
const db = require("../db");
const bcrypt = require("bcrypt");
/* const Cart = require("./Cart") */
const Products = require("./Products")

class User extends Model {
  ass(password, salt) {
    return bcrypt.hash(password, salt)
  }
  hash(password, salt) {
    return bcrypt.hash(password, salt)
  }
}

User.init(
  {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    lastname: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    phone: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    state: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    salt: {
      type: DataTypes.STRING,
    },
  },
  {
    sequelize : db,
    modelName: "users",
  }
);

User.beforeCreate((user) => {
  return bcrypt
    .genSalt(16)
    .then((salt) => {
      user.salt = salt;
      return user.hash(user.password, salt);
    })
    .then((hash) => {
      user.password = hash;
    });
});

User.beforeBulkUpdate((user) => {
  return bcrypt
    .genSalt(16)
    .then((salt) => {
      user.salt = salt;
      return user.ass(user.password, salt);
    })
    .then((hash) => {
      user.password = hash;
    });
});

/* User.hasMany(Products, {as: "products"}) */

module.exports = User;


