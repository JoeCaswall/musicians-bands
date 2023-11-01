const { DataTypes } = require("sequelize");
const { Sequelize, sequelize, Model } = require("../db");

// TODO - define the Song model
class Song extends Model {}

Song.init(
  {
    title: DataTypes.STRING,
    year: DataTypes.INTEGER,
    length: DataTypes.INTEGER,
  },
  {
    sequelize: sequelize,
    modelName: "Song",
  }
);

module.exports = {
  Song,
  Model,
};
