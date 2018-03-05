const dotenv = require('dotenv')
const google = require('./crawler/google')

const args = process.argv.slice(2)

google(args.join(''), (data) => {
  console.log(data)
})
