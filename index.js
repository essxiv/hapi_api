const config = require('./config')
const server = require('./server')(config)

server.start((err) => {
  if (err) {
    throw err
  }
  console.log('Server is running at: ', server.info.uri)
})
