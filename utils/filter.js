const list = {
  tag: /<.+?>/g,
  charCode: /&.+?;/g,
}

const filter = (raw) => {
  return raw.replace([ tag, charCode ], '')
}

module.exports = filter
