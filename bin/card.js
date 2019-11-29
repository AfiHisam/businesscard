#!/usr/bin/env node

// 👆 Used to tell Node.js that this is a CLI tool Pull in our modules
const chalk = require('chalk')
const boxen = require('boxen')

// Define options for Boxen
const options = {
  backgroundColor: 'black',
  padding: 1,
  margin: 1,
  borderStyle: 'double'
}

// Text + chalk definitions
const data = {
  name: chalk.white(' Asyraf Hussin'),
  work: chalk.white('Full Stack Developer'),
  twitter: chalk.cyan('twitter.com/asyrafhussin4'),
  github: chalk.cyan('github.com/AsyrafHussin'),
  codepen: chalk.cyan('codepen.io/AsyrafHussin'),
  linkedin: chalk.cyan('linkedin.com/in/asyraf-hussin-834011a4'),
  web: chalk.cyan('asyrafhussin.com'),
  email: chalk.cyan('asyrafhussin4@gmail.com'),
  npx: chalk.white('npx asyrafhussin'),
  labelName: chalk
    .white
    .bold('      Name:'),
  labelWork: chalk
    .white
    .bold('      Work:'),
  labelTwitter: chalk
    .white
    .bold('   Twitter:'),
  labelGitHub: chalk
    .white
    .bold('    GitHub:'),
  labelCodepen: chalk
    .white
    .bold('   CodePen:'),
  labelLinkedIn: chalk
    .white
    .bold('  LinkedIn:'),
  labelWeb: chalk
    .white
    .bold('       Web:'),
  labelEmail: chalk
    .white
    .bold('     Email:'),
  labelCard: chalk
    .white
    .bold('      Card:')
}

// Actual strings we're going to output
const newline = '\n'
const heading = `${data.labelName} ${data.name}`
const working = `${data.labelWork}  ${data.work}`
const twittering = `${data.labelTwitter}  ${data.twitter}`
const githubing = `${data.labelGitHub}  ${data.github}`
const codepening = `${data.labelCodepen}  ${data.codepen}`
const linkedining = `${data.labelLinkedIn}  ${data.linkedin}`
const webing = `${data.labelWeb}  ${data.web}`
const emailing = `${data.labelEmail}  ${data.email}`
const carding = `${data.labelCard}  ${data.npx}`

// Put all our output together into a single variable so we can use boxen
// effectively
const output = heading + newline + working + newline + twittering + newline + githubing + newline + codepening + newline + linkedining + newline + webing + newline + emailing + newline + newline + carding

console.log(chalk.green(boxen(output, options)))
