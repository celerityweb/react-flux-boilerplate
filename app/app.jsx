var React = require('react');
var Router = require('react-router');
var routes = require('./routes/router');

Router.run(routes, function (Handler) {
  React.render(<Handler/>, document.body);
});

