angular.module('MovieApp', [])
  .controller('MovieController', ['$scope', 'MovieFactory',  function($scope, MovieFactory) {

    //Call MovieFactory get function
    MovieFactory.get().then(function(response) {

    });

  }]);
