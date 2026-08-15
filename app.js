const express = require('express');
const routes = require('./Routes/route'); 
const connectDB = require('./DB/connect');
require('dotenv').config();
const app = express();

app.use(express.static('./Public'));
app.use('/',routes);

app.use('/',routes);
const start = async ()=>{
    try{
        await connectDB(process.env.MONGODB_URI);
        app.listen(8000,console.log("app is listening to port 8000..."))
    }
    catch(error){
        console.log(error);

    }
}
start();