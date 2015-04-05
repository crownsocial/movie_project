"use strict";
module.exports = function(sequelize, DataTypes) {
  var movie_database = sequelize.define("movie_database", {
    movieName: DataTypes.STRING,
    movieYear: DataTypes.STRING,
    tomatoScore: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return movie_database;
};