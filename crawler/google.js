const fetch = require('./fetch')
const filter = require('../utils/filter')


const google = (query, callback) => {

  fetch('http://google.com/search?q=' + query, (err, data) => {
    if (err) return callback(err)

    const rc = data.match(/<div class="rc">(.+?)<\/div>/g)[0]
    const st = data.match(/<span class="st">(.+?)<\/span>/)[1]
    const r = rc.match(/<h3 class="r">(.+?)<\/h3>/g)[0]

    const [ , link, title ] = r.match(/<a href="(.+?)".+?>(.+?)<\/a>/)
    const content = filter(st)

    callback({
      title: filter(title),
      content,
      link,
    })
  })
}

module.exports = google
