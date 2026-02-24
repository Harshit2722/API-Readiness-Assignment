require('dotenv').config();

const app = require('./app');

const connectDB = require('./db/db');

connectDB();

app.listen(process.env.PORT,()=>{
    console.log("Server running on http://localhost:3003");
})



