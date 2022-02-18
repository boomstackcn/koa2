// const mongoose = require("mongoose");
import mongoose from 'mongoose'
import config from '../config/config.js'

let dbConnect = () => {
    mongoose.connect(
        config.connectionUrl,
        { useUnifiedTopology: true, useNewUrlParser: true },
        () => console.log('mongodb 连接成功了！')
    )
    mongoose.connection.on('error', console.error)
}
export default dbConnect
