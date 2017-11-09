
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
    //   subject: stars or repos // but will filter it before calling the format.
    //   query: details or count
    //   repos: list of repos/number of repos
    // }


    let string = ""
    if (obj.query === "details"){
      let collectionRepos = listRepos(obj.repos);
      string += collectionRepos
      return string
    })
      }else {
        return `the user ${obj.username} has ${obj.repos} ${obj.subject}`
    }
  }
}


module.exports = ResponseFormatter
