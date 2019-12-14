'use strict'

const Redis = use('Redis')

const User = use('App/Models/User')

class CheckController {
  async checkPostgres ({ request, response }) {
    let responseMessage = 'Postgres connected'
    try {
      const users = await User.all()
    } catch (e) {
      responseMessage = 'Postgres not connected'
    }
    response.json({ status: responseMessage })
  }

  async checkRedis ({ request, response }) {
    let responseMessage = 'Redis connected'
    try {
      const cachedSessions = await Redis.get('sessions')
    } catch (e) {
      responseMessage = 'Redis not connected'
    }
    response.json({ status: responseMessage })
  }
}

module.exports = CheckController
