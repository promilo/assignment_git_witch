const GitHub = require('./GitHub')


class CommandRunner {
  constructor(git){
    this.git = new GitHub()
  }
  run (obj) {

    if (obj.subject === "repos"){
      if (obj.query === "details"){
        return this.git.repos(obj.username)
      } else {
        let arr = this.git.repos()
        return arr.length
      }
    } else{
      if (obj.query === "details"){
        return this.git.starredRepos(obj.username)
      } else{
        let arr = this.git.starredRepos()
        return arr.length
      }
    }
  }
}

let test = new CommandRunner(GitHub)

console.log(test.run({username:"milind", subject: "repos", query: "details"}))
console.log(test.run({username:"milind", subject: "repos", query: "count"}))
console.log(test.run({username:"milind", subject: "stars", query: "details"}))
console.log(test.run({username:"milind", subject: "stars", query: "count"}))



module.exports = CommandRunner;
