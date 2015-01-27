var Reflux = require('reflux');
var request = require('superagent');
var actions = require('../actions/githubActions');

var API = require('../constants/Api').githubUserSearchApi.fullUrl() ;
var UserSearchUrl = API + '/search/users?';

var UserStore = Reflux.createStore({
    init() {
      this.listenTo(actions.searchUser, this.searchUser);
    },
    searchUser(name) {
      request
        .get(UserSearchUrl)
        .query({q: name})
        .end((res) => {
          this.trigger(res.body.items);
        });
    },
});

var AggregateStore = Reflux.createStore({
  init() {
    this.listenTo(UserStore, this.getUserRepos);
    this.results = {};
  },
  getUserRepos(user) {
    if(user[0] && user[0].login) {
      var userRepoUrl = API + '/users/' + user[0].login + '/repos';
       request
        .get(userRepoUrl)
        .end((res) => {
          this.results.user = user[0];
          this.results.repos = res.body;
          this.trigger(this.results);
        });
    } else {
      this.trigger();
    }
  }
});

module.exports = AggregateStore