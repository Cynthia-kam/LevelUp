// const express = require('express')
// const app = express()
// const port = 3001
// // const { sequelize } = require('./models');
// const { Sequelize,Model, DataTypes } = require('sequelize');
// const sequelize = new Sequelize('postgres://postgres:root@localhost:5432/Library');
// const book_model=require('./book_model')
// app.use(express.json())
// app.use(function (req, res, next) {
//   res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
//   res.setHeader('Access-Control-Allow-Methods', 'GET,POST,PUT,DELETE,OPTIONS');
//   res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Access-Control-Allow-Headers');
//   next();
// });

// // app.get('/', (req, res) => {
// //   res.status(200).send('Hello World!');
// // })
// app.get('/test', async (req, res) => {
//   try {
//     await sequelize.authenticate();
//     console.log('Connection has been established successfully.');
//     res.send('Connection has been established successfully.');
//   } catch (error) {
//     console.error('Unable to connect to the database:', error);
//     res.status(500).send('Unable to connect to the database.');
//   }
// });
// app.get('/getbooks', async (req, res) => {
//   book_model.getBooks()
//   .then(response=>{
//     res.status(200).send(response)
//   })
//   .catch(error=>{
//     res.status(500).send(error);
//   })

// });


// app.listen(port, () => {
//   console.log(`App running on port ${port}.`)
// })

import dotenv from "dotenv";
import express from 'express';
import bodyParser from 'body-parser';
import db from "./config/database.js"
import allRoutes from "./Routes/allRoutes.js"



dotenv.config();
const app= express();

// using app instances
app.use(bodyParser.json())

// Testing the database
try{
    await db.authenticate()
    console.log("Databse connection has been established successfully...")
}
catch(error){
    console.log("Unable to connect to the database:", error)
}


app.get('/',(req,res)=>res.send(`<h1 style="text-align: center;font-size:50; color: blue; margin-top: 20vh">Welcome to my Library!</h1>`))


// Book routes
app.use('/',allRoutes)

const PORT = process.env.PORT 
const HOST =process.env.HOST 
app.listen(PORT,console.log(`server started on: http://${HOST}:${PORT}`))



export default app;