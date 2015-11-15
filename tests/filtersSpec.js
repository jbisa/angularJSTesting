// This is your test suite
describe('Filters', function() {
	// Load your AngularJS module
	beforeEach(module('AngularTestApp'));
    
	describe('reverse',function() {
		var reverse;
		
		// Initialize your filter
		beforeEach(inject(function($filter) {
		  reverse = $filter('reverse',{});
		}));
        
		// Test 1
		it('Should reverse a string', function(){
		  expect(reverse('hello')).toBe('olleh'); 
		  expect(reverse('world')).toBe('dlrow');
		  //expect(reverse('foo')).toBe('bar'); // this test should fail
		});
	});    
});