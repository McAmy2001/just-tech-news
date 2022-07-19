const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

// Create User Model
class User extends Model {}

// Define table columns and configuration
User.init(
  {
    // Define an ID column
    id: {
      // use the special Sequelize DataTypes object provide what type of data it is
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    // Define a user name column
    username: {
      type: DataTypes.STRING,
      allowNull: false
    },
    // Define an email column
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true
      }
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        // this means the password must be at least four characters long
        len: [4]
      }
    }
  },
  {
    // TABLE CONFIGURATION OPTIONS 
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'user'
  }
);

module.exports = User;