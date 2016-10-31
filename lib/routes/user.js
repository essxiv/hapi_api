const Joi = require('joi')
const UserModel = require('../core/index')

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
    let user = new UserModel.UserModel(request.payload)
    user.save((err) => {
      if (err) {
        console.log(err)
      } else {
        reply('User Saved!')
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

module.exports.deleteUser = {
  method: 'DELETE',
  path: '/api/user/{id}',
  handler: (request, reply) => {
    let user = new UserModel.UserModel(request.payload)
    user.delete((err) => {
      if (err) {
        console.log(err)
      } else {
        reply('User Deleted!')
      }
    })
  },
  config: {
    tags: ['api', 'delete'],
    description: 'Deletes User in Database by ID',
    notes: 'delete',
    validate: {
      payload: {
        name: Joi.string().required(),
        age: Joi.number().required()
      }
    }
  }
}
