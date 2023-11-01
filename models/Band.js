const { DataTypes } = require("sequelize");
const { Sequelize, sequelize, Model } = require("../db");

// TODO - define the Band model
class Band extends Model {}

Band.init(
  {
    name: DataTypes.STRING,
    genre: DataTypes.STRING,
    showCount: DataTypes.INTEGER,
  },
  {
    sequelize: sequelize,
    modelName: "Band",
  }
);

Band.bulkCreate([
  { name: "ACDC", genre: "Rock", showCount: 10000 },
  { name: "The Police", genre: "Rock", showCount: 9000 },
  { name: "Guns 'n' Roses", genre: "Rock", showCount: 10001 },
]);

module.exports = {
  Band,
  Model,
};
