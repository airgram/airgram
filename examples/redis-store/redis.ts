import * as redis from 'redis'
import { promisify } from 'util'

export const redisClient = redis.createClient()

export const delAsync = promisify(redisClient.del).bind(redisClient)
export const hgetAsync = promisify(redisClient.hget).bind(redisClient)
export const hgetAllAsync = promisify(redisClient.hgetall).bind(redisClient)
export const hmsetAsync = promisify(redisClient.hmset).bind(redisClient)
