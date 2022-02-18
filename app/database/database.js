// const mongoose = require("mongoose");
import mongoose from 'mongoose';
import config from '../config/config.js';

export const connect = () => {
    mongoose.connect(
        config.connectionUrl,
        { useUnifiedTopology: true, useNewUrlParser: true },
        () => console.log('mongodb 连接成功了！')
    );
    mongoose.connection.on('error', console.error);
};
