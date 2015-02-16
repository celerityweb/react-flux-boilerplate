'use strict';

jest.dontMock('../footer');
//jest.dontMock('../../../routes/router');

describe('Footer', function() {

  it('sets class name', function() {
    var React = require('react/addons');
    //var Router = require('react-router');
    var Footer = require('../footer');
    var TestUtils = React.addons.TestUtils;

    TestUtils.renderIntoDocument(<Footer/>);
    //var TestLocation = require('react-router/modules/locations/TestLocation');
   // var routes = require('../../../routes/router');
    //var div = document.createElement('div');

   // TestLocation.history = ['/dashboard'];

    // Router.run(routes, TestLocation, function (Handler) {
    //   React.render(<Handler/>, div, function() {
    //     var element = TestUtils.findRenderedDOMComponentWithClass(div, 'dashboard');
    //     expect(element).toBeDefined();
    //   });
    // });
  });

});