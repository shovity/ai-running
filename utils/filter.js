const pattern = {
  tag: /<.+?>/g,
  charCode: /&.+?;/g,
}

const filter = (raw) => {
  return raw.replace([ /&.+?;/g, /<.+?>/g ], '')
}

module.exports = filter
