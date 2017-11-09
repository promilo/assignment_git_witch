const GitWitch = require('./GitWitch')
const QuestionParser = require("./QuestionParser")


const inputString = process.argv.slice(2).join(' ')

const gitwitch = new GitWitch(inputString)
