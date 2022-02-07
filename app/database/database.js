const mongoose = require("mongoose");
const { connectionUrl } = require('../config/config.js');

module.exports = {
    connect() {
        mongoose.connect(
            connectionUrl,
            { useUnifiedTopology: true, useNewUrlParser: true },
            () => console.log('mongodb 连接成功了！')
        );
        mongoose.connection.on('error', console.error);
    },
};
