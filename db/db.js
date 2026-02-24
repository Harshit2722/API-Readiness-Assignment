
require('dotenv').config();

const mongoose = require('mongoose');

const app = require('../app')

async function connectDB(){
    mongoose.connect(process.env.MONGODB_URI)
    .then( ()=>{
        console.log("MONGODB connected");

     
})
.catch(err=>{
    console.log("Error connecting to MONGODB",err.message);
    process.exit(1);
})

}

module.exports = connectDB;