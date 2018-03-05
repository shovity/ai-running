const redis = require('redis')
const redisClient = redis.createClient()
redisClient.on('connect', () => {
  console.log('redis client connected')
})

module.exports = redisClient
