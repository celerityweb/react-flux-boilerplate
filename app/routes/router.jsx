/** @jsx React.DOM */
var React = require('react');
var Router = require('react-router');
var { Route, DefaultRoute, RouteHandler } = Router;

var BaseLayout = require('../components/layouts/base-layout/base-layout');
var StrippedLayout = require('../components/layouts/stripped-layout/stripped-layout');

var Dashboard = require('../components/dashboard/dashboard');
var About = require('../components/about/about');

var routes = (
  <Route handler={RouteHandler}>

    <Route handler={BaseLayout}>
      <Route name="dashboard" path='/dashboard' handler={Dashboard}/>
      <Route name="about" path='/about' handler={About}/>
      <DefaultRoute handler={Dashboard}/>
    </Route>

    <Route path="/stripped" handler={StrippedLayout}>
      <Route name="about-stripped" path="about" handler={About}/>
    </Route>
    <DefaultRoute handler={BaseLayout}/>

  </Route>

);

module.exports = routes;

