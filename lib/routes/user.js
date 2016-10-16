const Joi = require('joi')
const userModel = require('../core/index')

module.exports.getUser = {
  method: 'GET',
  path: '/api/user',
  handler: (request, reply) => {
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
