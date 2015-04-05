"use strict";
module.exports = {
  up: function(migration, DataTypes, done) {
    migration.createTable("movie_databases", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
      },
      movieName: {
        type: DataTypes.STRING
      },
      movieYear: {
        type: DataTypes.STRING
      },
      tomatoScore: {
        type: DataTypes.INTEGER
      },
      createdAt: {
        allowNull: false,
        type: DataTypes.DATE
      },
      updatedAt: {
        allowNull: false,
        type: DataTypes.DATE
      }
    }).done(done);
  },
  down: function(migration, DataTypes, done) {
    migration.dropTable("movie_databases").done(done);
  }
};