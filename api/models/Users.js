const { DataTypes, Model } = require("sequelize");
const db = require("../db");

/* const bcrypt = require("bcrypt");
} */
class User extends Model {
/*   hash(password, salt) {
    return bcrypt.hash(password, salt); */
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
        type: DataTypes.INTEGER,
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
/*     salt: {
      type: DataTypes.STRING,
    }, */
  },
  {
    sequelize : db,
    modelName: "users",
  }
);


module.exports = User;


/* User.beforeCreate((user) => {
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
 */