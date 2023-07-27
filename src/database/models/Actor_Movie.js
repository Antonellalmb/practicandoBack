// const { TINYINT, INTEGER } = require("sequelize/types");

module.exports = (sequelize, dataTypes) => {
    let alias = 'Actor_Movie';
    let cols = {
        id: {
            type: dataTypes.INTEGER.UNSIGNED,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true
        },
         created_at: dataTypes.DATE,
      updated_at: dataTypes.DATE,
      
        rating: {
            type: dataTypes.INTEGER.UNSIGNED,
            allowNull: false
        },
        participaciones: {
            type: dataTypes.INTEGER.UNSIGNED,
            allowNull: false
        }
    };
    let config = {
        freezeTableName:true,
       tableName:'actor_movie',
        timeStamps: true,
        createdAt: 'created_at',
        updatedAt: 'updated_at',
        deletedAt: false
    }
    const Actor_Movie = sequelize.define(alias, cols, config);

   
    return Actor_Movie
};