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
}

module.exports.postUser = {
  method: 'POST',
  path: '/api/user',
  handler: (request, reply) => {
    let user = new userModel.user(request.payload)
    user.save((err) => {
      if (err) {
        console.log(err)
      } else {
        reply('success no errors!')
      }
    })
  },
  config: {
    tags: ['api', 'post'],
    description: 'Save New User To Database',
    notes: 'save user data',
    validate: {
      payload: {
        name: Joi.string().required(),
        age: Joi.number().required()
      }
    }
  }
}
