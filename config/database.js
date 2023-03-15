import Sequelize  from 'sequelize';


// Connecting to a database
const db= new Sequelize('Library', 'postgres', 'root', {
    host: 'localhost',
    dialect:'postgres'
  });
  
  
  
  export default db;
  