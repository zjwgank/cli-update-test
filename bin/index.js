#!/usr/bin/env node

const fs = require('fs')
// const readline = require('readline')
const chalk = require('chalk')
const figlet = require('figlet')
const program = require('commander')

const { IsGit, update } = require('../lib')

// const rl = readline.createInterface(process.stdin, process.stdout)

// rl.question('what is your name?', res => {
//   console.log(`name is ${res}`)
//   rl.close()
// })

const tips = chalk.yellow(figlet.textSync('cli-update-test', { font: 'Ghost', horizontalLayout: 'default', verticalLayout: 'default' }))
console.log(tips)

program.version('0.0.1')
program.name('cli')

program.usage('[ options ] command')

program.command('update').description('update cli demo').action(() => {
  console.log('update----------')
  update()
})

program.parse(process.argv)

if (!program.args.length) {
  program.help()
}

// if (!IsGit(".git")) {
//   console.log(chalk.red('It`s sorry for no git'))
//   process.exit()
// }


