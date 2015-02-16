/** @jsx React.DOM */
var React = require('react');
var Link = require('react-router').Link;

var Header = React.createClass({
  render() {
    return (
      <div className='nav'>
        <ul>
          <li><Link to="dashboard">Dashboard</Link></li>
          <li><Link to="about">About</Link></li>
        </ul>
      </div>
    )
  }
});

module.exports = Header;
