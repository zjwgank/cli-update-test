const readline = require('readline')
const chalk = require('chalk')
const { exec } = require('child_process')
const pkg = require("../package.json")

module.exports = {
  IsGit: (path) => {
    try {
      return fs.statSync(path).isDirectory()
    } catch (err) {
      return false
    }
  },
  update: async () => {
    const curVersion = pkg.version
    const cmdStr = 'npm view cli-update-test version'
    const latestVersion = await execCommand(cmdStr)
    console.log(latestVersion, curVersion, '------')
    if (latestVersion < curVersion) {
      console.log(chalk.red('版本不正确'))
    }
    if (latestVersion > curVersion) {
      const updateCmd = 'npm install -g cli-update-test'
      const res = await execCommand(updateCmd)
      console.log(res, '-------')
    }
  },
}

function execCommand(cmd) {
  return new Promise((resolve, reject) => {
    exec(cmd, (err, res) => {
      if (err) {
        reject(err)
      } else {
        resolve(res)
      }
    })
  })
}