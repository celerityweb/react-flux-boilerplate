/** @jsx React.DOM */
var React = require('react');
var RouteHandler = require('react-router').RouteHandler;

var StrippedLayout = React.createClass({
  render() {
    return (
      <RouteHandler/>
    )
  }
});
module.exports = StrippedLayout;
