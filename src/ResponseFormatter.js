
const listRepos = (arr) => {
  let string = ""
  arr.forEach( repo => {
    string += repo
    string += '\n'
  })
  return string
}

class ResponseFormatter{
  constructor() {

  }

  format(obj) {
    // obj = {
    //   username: username
    //   subject: stars or repos
    //   query: details or count
    //   repos: list of repos
    // }


    let string = ""
    if (obj.query === "details"){
      string += obj.username + obj.subject
      obj.repos.forEach( repo => {
      string += repo
      string += '\n'
    })
      }else {
        return `the user ${obj.username} has ${obj.repos} ${obj.subject}`
    }
  }
}


module.exports = ResponseFormatter
