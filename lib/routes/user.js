const Hapi = require('hapi')
const server = new Hapi.Server()

server.route({
  method: 'GET',
  path: '/api/user',
  hander: (request, reply) => {
    reply({
      statusCode: 200,
      message: 'Retrieving All User Data..',
      data: [
        {
          name: 'greg',
          age: 23
        },
        {
          name: 'tyler',
          age: 29
        }
      ]
    })
  },
  config: {
    tags: ['api'],
    description: 'Get All User Data',
    notes: 'Get All User Data'
  }
})
