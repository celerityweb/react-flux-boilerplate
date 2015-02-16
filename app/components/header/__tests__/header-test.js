'use strict';

jest.dontMock('../header');

jest.dontMock('../../../../config/testHelper');

var testHelper = require('../../../../config/testHelper');
console.log(testHelper);
describe('Header', function() {

  it('sets class name', function() {
    var React = require('react/addons');
    //var Router = require('react-router');
    var Header = React.createFactory(require('../header'));
    var TestUtils = React.addons.TestUtils;
    //var stubbed = testHelper.makeStubbedDescriptor(Header, {});
   // console.log(stubbed);
    //var instance = TestUtils.renderIntoDocument(stubbed);
    var component = React.render(Header, document.body);
    // var testHelper = require('testHelper');


    // var TestLocation = require('react-router/modules/locations/TestLocation');
    // var routes = require('../../../routes/router');
    // var div = document.createElement('div');

   // TestLocation.history = ['/hkgf'];

    // Router.run(routes, function (Handler) {
    //   var micah = TestUtils.renderIntoDocument(<Handler/>, div);
    //   //var component = TestUtils.findRenderedComponentWithType(<Header/>, Handler);
    //   console.log(micah);
    //   // React.render(<Handler/>, div, function() {
    //   //var element = TestUtils.findRenderedDOMComponentWithClass(component, 'nav');
    //   //   expect(element).toBeDefined();
    //   // });
    // });
  });

});