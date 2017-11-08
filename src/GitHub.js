const request = require('request');
const Github = require('github');
const env = require('node-env-file');
require('dotenv').config();


const url = 'https://api.github.com/users'

class Github {
  constructor () {
    // var github = newGithub()
    // github.authenticate({
    //   type: "token",
    //   token: || process.env.TOKEN
    // })

  }
  getRepos(){
    return [
      {
      name: "Code-Coven",
      description: "A version control system for weird sisters"
    },
    {
      name: "Mocking-Birds",
      description: "An application for the asynchronous ornithologist"
    }
  ]
  }
  getStarredRepos(){
    return [
      {
        name: "Eye-Of-Newt",
        description: "EON is a new frontend framework written in pure spaghetti code."
      }
    ]
  }
}

module.exports = GitHub
