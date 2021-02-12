var {execSync} = require('child_process'),
chalk = require('chalk'),
messages = require('./commits.json'),
options = process.argv[2];
var data = firstArg(options)
if(!options) console.log(chalk.redBright.bold('Please enter option'))
console.log(execSync(`git add . && git commit -m '${data.title + ' : ' + data.description + ' ' +data.emoji}'`).toString())
console.log('Commited : ' + data.title + ' : ' + data.description + ' ' +data.emoji )
function firstArg(inp){
for(var msg in messages){
if(!msg.startsWith(inp)) continue;
return messages[msg]
}}