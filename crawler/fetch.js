const request = require('request')
const USER_AGENT = 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_11_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/57.0.2977.0 Safari/537.36'

const options = {
  headers: { 'user-agent': USER_AGENT },
}

const fetch = (url, callback) => {
  request(
    {
      url,
      options,
    },
    callback,
  )
}
