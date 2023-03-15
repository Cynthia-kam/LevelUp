// const { Sequelize,Model, DataTypes } = require('sequelize');
// // const  sequelize = require('./index');
// const Book = require('./book');
// const sequelize = new Sequelize('postgres://postgres:root@localhost:5432/Library');

// class Borrower extends Model {}

// Borrower.init(
//   {
//     name: {
//       type: DataTypes.STRING,
//       allowNull: false,
//     },
//   },
//   {
//     sequelize,
//     modelName: 'Borrower',
//     timestamps:false
//   },
// );
// Borrower.hasOne(Book, { foreignKey: 'borrowerId' });
// Book.belongsTo(Borrower, { foreignKey: 'borrowerId' });

// module.exports = Borrower;
import Sequelize  from 'sequelize';
import db from "../config/database.js";
import Book from './Book.js';

const Borrower=db.define('Borrower',{
  name: {
          type: Sequelize.STRING,
          allowNull: false,
        },
      },
      {
    Sequelize,
    modelName: 'Borrower',
    timestamps:false
      }
)
// Borrower.hasOne(Book, { foreignKey: 'borrowerId' });
// Book.belongsTo(Borrower, { foreignKey: 'borrowerId' })
export default Borrower

