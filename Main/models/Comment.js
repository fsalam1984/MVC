const { Model, DataTypes } = require('sequelize');
const bcrypt = require('bcrypt');
const sequelize = require('../config/connection');

class Comment extends Model {
 
}

Comment.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
 
    body: {
      type: DataTypes.STRING,
      allowNull: false,
      // unique: true,
    },
    // project_id:{
    //   type: DataTypes.INTEGER,
    //   references: {
    //     model: 'project',
    //     key: 'id',
    //   },
    // },
    //   user_id: {
    //     type: DataTypes.INTEGER,
    //     references: {
    //       model: 'user',
    //       key: 'id',
    //     },
    //  }
    
 
  },

  {

    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'comment',
  }
);

module.exports = Comment;
