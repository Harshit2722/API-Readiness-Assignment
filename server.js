require('dotenv').config();






require('dotenv').config();

const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_URI)
    .then( ()=>{
        console.log("MONGODB connected");

     
})
.catch(err=>{
    console.log("Error connecting to MONGODB",err.message);
    process.exit(1);
})





// app.listen(PORT,()=>{
//     console.log(`Server running on http://localhost:${PORT}`);
// })



