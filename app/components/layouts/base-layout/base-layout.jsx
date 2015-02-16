/** @jsx React.DOM */
var React = require('react');
var RouteHandler = require('react-router').RouteHandler;
var Header = require('../../header/header');
var Footer = require('../../footer/footer');

var BaseLayout = React.createClass({
  render() {
    return (
      <div className="base-layout">
       <Header/>
        <div className="base-content">
          <RouteHandler/>
        </div>
        <Footer/>
      </div>
    )
  }
});
module.exports = BaseLayout;
