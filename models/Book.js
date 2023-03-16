// const { Sequelize,Model, DataTypes } = require('sequelize');
// // const  sequelize  = require('./index');
// const Owner = require('./Owner');
// const Borrower=require('./Borrower')
// const sequelize = new Sequelize('postgres://postgres:root@localhost:5432/Library');
// class Book extends Model {}

// Book.init(
//   {
//     title: {
//       type: DataTypes.STRING,
//       allowNull: false,
//     },
//     author: {
//       type: DataTypes.STRING,
//       allowNull: false,
//     },
//     genre: {
//       type: DataTypes.STRING,
//       allowNull: false,
//     },
//     borrowerId: {
//       type: DataTypes.INTEGER,
//       references: {
//         model: Borrower,
//         key: 'id',
//       },
//       allowNull: true,
//     },
//     ownerId: {
//       type: DataTypes.INTEGER,
//       references: {
//         model: Owner,
//         key: 'id',
//       },
//       allowNull: false,
//     },
//     ISBN: {
//       type: DataTypes.STRING,
//       allowNull: false,
//       unique: true,
//     },
//   },
//   {
//     sequelize,
//     modelName: 'Book',
//   }
// );
// Book.belongsTo(Owner, { foreignKey: 'ownerId' });
// Owner.hasMany(Book, { foreignKey: 'ownerId' });

// module.exports = Book;

import Sequelize  from 'sequelize';
import db from "../config/database.js";

import Borrower from './Borrower.js';
import Owner from './Owner.js';

const Book=db.define('Book',{
  title: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        author: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        genre: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        borrowerId: {
          type: Sequelize.INTEGER,
          references: {
            model: Borrower,
            key: 'id',
          },
          allowNull: true,
        },
        ownerId: {
          type: Sequelize.INTEGER,
          references: {
            model: Owner,
            key: 'id',
          },
          allowNull: false,
        },
        ISBN: {
          type: Sequelize.STRING,
          allowNull: false,
          unique: true,
        },
      },
      {
        Sequelize,
        modelName: 'Book',
      }
)

// Owner.hasMany(Book);
// Book.belongsTo(Owner, { foreignKey: 'ownerId' });
export default Book;
