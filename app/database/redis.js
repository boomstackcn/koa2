import config from '../config/config.js'
import Redis from 'ioredis'

const redis = new Redis(config.redisUrl)

export default redis
