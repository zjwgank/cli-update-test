const readline = require('readline')

module.exports = {
  IsGit: (path) => {
    try {
      return fs.statSync(path).isDirectory()
    } catch (err) {
      return false
    }
  },
  update: () => {

  }
}
