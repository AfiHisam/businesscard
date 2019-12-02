#!/usr/bin/env node

// 👆 Used to tell Node.js that this is a CLI tool Pull in our modules
const chalk = require('chalk')
const boxen = require('boxen')
var qrcode = require('qrcode-terminal');

// Define options for Boxen
const options = {
  backgroundColor: 'black',
  padding: 1,
  margin: 1,
  borderStyle: 'double'
}

// Text + chalk definitions
const data = {
  name: chalk.white(' Afi Hisam'),
  work: chalk.white('Full Stack Developer'),
  github: chalk.cyan('github.com/AfiHisam'),
  linkedin: chalk.cyan('linkedin.com/in/afi-hisam-127aa7141'),
  web: chalk.cyan('fcgb.com.my'),
  email: chalk.cyan('afihisam@fcgb.com.my'),
  mobile: chalk.cyan('(+6) 018-575 0527'),
  phone: chalk.cyan('(+6) 03-8953 9661'),
  npx: chalk.white('npx afihisam'),
  labelName: chalk
    .white
    .bold('      Name:'),
  labelWork: chalk
    .white
    .bold('      Work:'),
  labelGitHub: chalk
    .white
    .bold('    GitHub:'),
  labelMobile: chalk
    .white
    .bold('    Mobile:'),
  labelPhone: chalk
    .white
    .bold('     Phone:'),
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
const githubing = `${data.labelGitHub}  ${data.github}`
const linkedining = `${data.labelLinkedIn}  ${data.linkedin}`
const webing = `${data.labelWeb}  ${data.web}`
const emailing = `${data.labelEmail}  ${data.email}`
const phone = `${data.labelPhone}  ${data.phone}`
const mobile = `${data.labelMobile}  ${data.mobile}`
const carding = `${data.labelCard}  ${data.npx}`

// Put all our output together into a single variable so we can use boxen
// effectively
const output = heading + newline + working + newline + githubing + newline + linkedining + newline + webing + newline + emailing + newline + phone + newline + mobile + newline + carding

qrcode.generate('https://github.com/AfiHisam', {small: true}, function (qrcode) {

const output = heading + newline + working + newline + githubing + newline + linkedining + newline + webing + newline + emailing + newline + phone + newline + mobile + newline + carding

  console.log(chalk.green(boxen(output, options),(boxen(qrcode, options))))

});
