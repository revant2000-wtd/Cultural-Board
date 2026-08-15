const express = require('express');
const routes = require('./Routes/route'); 
const connectDB = require('./DB/connect');
require('dotenv').config();
const app = express();

app.use(express.static('./Public'));
app.use('/',routes);
const PORT = process.env.PORT || 8000;
app.use('/',routes);
const start = async ()=>{
    try{
        await connectDB(process.env.MONGODB_URI);
        app.listen(PORT,console.log("app is listening to port ${PORT}..."))
    }
    catch(error){
        console.log(error);

    }
}
start();