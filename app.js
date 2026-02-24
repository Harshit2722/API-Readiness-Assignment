const express = require('express');

const app = express();

const routes = require('./routes/user.routes');

const swaggerUi = require('swagger-ui-express');
const swaggerSpec = require('./swagger');

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.use(express.json());

function errorHandler(err,req,res,next){
    const statusCode = err.statusCode || 500;
    
    res.status(statusCode).json({
        success: false,
        message: err.message || "Internal Server Error"
    })
}

app.get('/',(req,res)=>{
    res.send("Hello jii");
})

app.use('/api',routes);

app.use(errorHandler)



module.exports = app;


