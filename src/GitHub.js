const request = require('request');
const git = require('github');
// const env = require('node-env-file');
// require('dotenv').config();
const token = process.env.TOKEN


const url = 'https://api.github.com/users'

class GitHub {
  constructor () {
    // var github = new git()
    // github.authenticate({
    //   type: "token",
    //   token: || process.env.TOKEN
    // })

  }
  repos(){
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
  starredRepos(){
    return [
      {
        name: "Eye-Of-Newt",
        description: "EON is a new frontend framework written in pure spaghetti code."
      }
    ]
  }
}

module.exports = GitHub
