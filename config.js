const convict = require('convict')

const conf = convict({
  host: {
    doc: 'Web server host',
    format: String,
    default: 'localhost',
    env: 'HOST'
  },
  port: {
    doc: 'Port for web server host',
    format: Number,
    default: 1337,
    env: 'Port'
  }
})

conf.validate()
module.exports = conf.get()