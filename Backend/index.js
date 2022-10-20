const express = require('express');
require('dotenv').config();
const cors = require('cors');

const connection = require('./Config/Connection');
const BlogController = require('./Controller/Blog.controlller')


const app = express();
app.use(cors());
app.use(express.json())
app.use('/blog', BlogController);


app.listen(process.env.PORT, async()=>{
        await connection
        console.log(`listening to port ${process.env.PORT}`)
})