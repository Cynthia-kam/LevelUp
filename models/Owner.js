import Sequelize  from 'sequelize';
import db from "../config/database.js";

const Owner=db.define('Owner',{
  name: {
          type: Sequelize.STRING,
          allowNull: false,
        },
      },
      {
    Sequelize,
    modelName: 'Owner',
    timestamps:false
      }
)
// Borrower.hasOne(Book, { foreignKey: 'borrowerId' });
// Book.belongsTo(Borrower, { foreignKey: 'borrowerId' })
export default Owner