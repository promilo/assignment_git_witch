getUser = (input) => {

  let splitInput = input.split(' ')
  return splitInput[splitInput.length - 2]

},
getSubject = (input) => {
  let splitInput = input.split(' ')
  if (splitInput[2] === "starred" || splitInput[1] === "starred"){
    return "starred repos"
  } else {
    return "repos"
  }

},

getQuery = (input) => {
  let splitInput = input.split(' ')
  if (splitInput[0] === 'how'){
    return "count"
  } else {
    return "details"
  }

}

class QuestionParser {
  constructor() {
    this.output = {}
  }
  parse(input){

    this.output = {
      username: getUser(input),
      subject: getSubject(input),
      query: getQuery(input)
    }
    return this.output
  }
}

module.exports = QuestionParser
