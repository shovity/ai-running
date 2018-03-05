const request = require('request')

const USER_AGENT = 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_11_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/57.0.2977.0 Safari/537.36'

const q = process.argv[2]

const options = {
  url: `http://google.com/search?q=${q}`,
  headers: { 'user-agent': USER_AGENT },
}

const filter = (raw) => {
  return raw
    .replace(/<.+?>/g, '')
    .replace(/&.+?;/g, '')
}

const callback = (error, response, body) => {

  const rc = body.match(/<div class="rc">(.+?)<\/div>/g)[0]
  const r = rc.match(/<h3 class="r">(.+?)<\/h3>/g)[0]
  // const st = s.match(/<span class="st">(.+?)<\/span>/)[0]

  const st = body.match(/<span class="st">(.+?)<\/span>/)[1]

  const link = r.match(/<a href="(.+?)".+?<\/a>/)[1]
  const title = filter(r)
  const content = filter(st)

  console.log({
    title,
    content,
    link,
  })
}

request(options, callback)
