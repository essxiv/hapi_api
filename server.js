const Hapi = require('hapi')
const server = new Hapi.Server()
const mongoose = require('mongoose')
const routes = require('./lib/routes/index')
const database = require('./lib/store/index')
const userModel = require('./lib/core/index')

module.exports = function (config) {
  mongoose.connect(database.database.url)
  server.connection({
    host: config.host,
    port: config.port
  })

  const swagger = {
    register: require('hapi-swagger'),
    options: {
      info: {
        title: 'Hapi :)',
        version: require('./package.json').version
      }
    }
  }

  server.register([
    require('inert'),
    require('blipp'),
    require('vision'),
    swagger], function (err) {
    if (err) {
      console.log(err)
    }
    server.route([
      routes.user.getUser,
      routes.user.postUser
    ])
  })
  return server
}
