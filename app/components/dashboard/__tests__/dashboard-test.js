// 'use strict';

// jest.dontMock('../dashboard');
// jest.dontMock('../../../routes/router');

// describe('Dashboard', function() {

//   it('sets class name', function() {
//     var React = require('react/addons');
//     var Router = require('react-router');
//     var Dashboard = require('../dashboard');
//     var TestUtils = React.addons.TestUtils;
//     var TestLocation = require('react-router/modules/locations/TestLocation');
//     var routes = require('../../../routes/router');
//     var div = document.createElement('div');

//     TestLocation.history = ['/dashboard'];

//     Router.run(routes, TestLocation, function (Handler) {
//       React.render(<Handler/>, div, function() {
//         var element = TestUtils.findRenderedDOMComponentWithClass(this, 'dashboard');
//         expect(element).toBeDefined();
//       });
//     });
//   });

// });