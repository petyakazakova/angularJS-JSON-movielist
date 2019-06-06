angular.module('MovieApp', [])
  .controller('MovieController', ['$scope', 'MovieFactory', function($scope, MovieFactory) {

    MovieFactory.get().then(function(response) {

      $scope.movies = response.data;

      // extract numbers from string
      // $scope.duration = response.data.duration;
      $scope.duration = 'PT150M'; //dummy
      $scope.regex = /\d+/g;
      $scope.found = parseInt($scope.duration.match($scope.regex)[0]);

      // convert number to hours:min
      function timeConvert(n) {
        $scope.num = n;
        $scope.hours = ($scope.num / 60);
        $scope.rhours = Math.floor($scope.hours);
        $scope.minutes = ($scope.hours - $scope.rhours) * 60;
        $scope.rminutes = Math.round($scope.minutes);
        return $scope.finalResult = $scope.num + " min = " + $scope.rhours + " h and " + $scope.rminutes + " min.";
      }
      timeConvert($scope.found);

    });

  }]);
