const { redisUrl } = require('../config/config.js');
const Redis = require('ioredis');
const redis = new Redis(redisUrl);

module.exports = redis