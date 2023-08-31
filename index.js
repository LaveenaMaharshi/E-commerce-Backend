// model: database related stuff(schemas), views: static files from server to client, controllers: (action or data as response to client) main business logic function most important, routes: we write all the api routes here.

const express = require('express');
const mongoose= require('mongoose');
const morgan= require('morgan')
require('dotenv').config();

const app = express();
const Port= process.env.Port;

//connect with mongoose, by making it Async
const dbConnect= require('./connection')
dbConnect();

//importing custome routes
const ProductRouter= require('./routes/product.route')

//loading my routes
//on postman it will have /product/info :get
//main gateway route
app.use('/product',ProductRouter)

app.listen(Port, ()=>{
    console.log(`Server running on port ${Port}`);
})
