describe('Hello World Test', function() {
  "use strict";

  // Test 1
  it("msg is in fact 'Hello World!'", function() {
	  var msg = "Hello World!";
	  expect(msg).toEqual("Hello World!");
  });

  // Test 2
  it("a to not be null", function() {
	  var a = true;
	  expect(a).not.toBe(null);
  });

});