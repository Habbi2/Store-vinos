const { DataTypes, Model } = require("sequelize");
const db = require("../db");

class Products extends Model {

}

Products.init(
    {
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        cellar: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        price: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        description: {
            type: DataTypes.TEXT,
            allowNull: false,
        },
        image: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    },
    {
        sequelize: db,
        modelName: "products",
    }
);


module.exports = Products;