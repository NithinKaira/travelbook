const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

require('dotenv').config();

const app = express();
const port = process.env.Port || 5000;

app.use(cors());
app.use(express.json());

const uri = process.env.ATLAS_URI;
mongoose.connect(uri,{ useNewUrlParser: true, useUnifiedTopology: true });
const connection = mongoose.connection;
connection.once('open',()=>{
    console.log("MongoDB database connection established");
})
const userRouter = require('./Login-backend/routes/user-route');
const addRouter = require('./Login-backend/routes/add');

app.use('/userRegister',userRouter);
app.use('/userAdd',addRouter);

app.listen(port, ()=>{
    console.log(`server running on ${port}`);
})