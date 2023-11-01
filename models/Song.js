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

Song.bulkCreate([
  { title: "Kiss from a rose", year: 1994, length: 331 },
  { title: "Highway to Hell", year: 1979, length: 235 },
  { title: "For whom the bell tolls", year: 1984, length: 456 },
]);
module.exports = {
  Song,
  Model,
};
