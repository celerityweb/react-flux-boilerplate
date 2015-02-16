/** @jsx React.DOM */
'use strict';
var React = require('react');

var About = React.createClass({
  render() {
    return (
      <div className='about'>
        <h1>About Page</h1>
        <p>This page demostrates a stripped template that doesn't use either the header nor the footer</p>
      </div>
    )
  }
});

module.exports = About;
