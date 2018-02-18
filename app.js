const request = require('request')

const USER_AGENT = 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_11_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/57.0.2977.0 Safari/537.36'

const options = {
  url: 'http://google.com/search?q=miku+la+gi',
  headers: { 'user-agent': USER_AGENT },
}

const callback = (error, response, body) => {
  let result = body
    .match(/<span class="st">(.+?)<\/span>/g)[0]
    .replace(/<.+?>/g, '')
    .replace(/&.+?;/g, '')

  console.log(result)
}

request(options, callback)
