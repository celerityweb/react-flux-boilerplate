/** @jsx React.DOM */
var React = require('react');
var Reflux = require('reflux');
var store = require('../../stores/githubStore');
var actions = require('../../actions/githubActions');


var SearchInput = React.createClass({
  handleSearch(event) {
    actions.searchUser(this.refs.searchInput.getDOMNode().value);
  },
  render() {
    return (
      <div className='dashboard'>
        <div className="ui action input">
          <form onSubmit={this.handleSearch}>
            <input type="text" ref="searchInput" placeholder="Search Github User Profiles..."/>
            <div className="ui button" onClick={this.handleSearch}>Search</div>
          </form>
        </div>
        <SearchResults/>
      </div>
    )
  }
});

var SearchResults = React.createClass({
  mixins: [Reflux.connect(store,"searchResults")],
  getInitialState() {
    return {
      searchResults: {
        repos: [],
        user: {}
      }
    };
  },
  render() {
    var results;
    if(this.state.searchResults && this.state.searchResults.user) {
      results = (
        <div className="result">
          <UserInfo name={this.state.searchResults.user.login} imgSrc={this.state.searchResults.user.avatar_url} />
          <div className="repo-list">
            <ul>
              {this.state.searchResults && this.state.searchResults.repos && this.state.searchResults.repos.map((repo) => {
                return <li key={repo.id}>{repo.name}</li>
              })}
            </ul>

          </div>
        </div>
      )
    } else {
      results = <h1>No results match your query.</h1>
    }
    return (
      <div className='search-results'>
        {results}
      </div>
    )
  }
});

var UserInfo = React.createClass({
  render() {
    return (
      <div>
        <label>{this.props.name}</label>
        <br/>
        <img id="gravitar-image" src={this.props.imgSrc}/>
      </div>
    );
  }
});

module.exports = SearchInput;


