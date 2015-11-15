angular.module('AngularTestApp', [])
    .filter('reverse', [function() {
      return function(string) {
        return string.split('').reverse().join('');
      }
    }]);