(function(){
  'use strict';
  angular.module('lc-timer')
  .controller('MainCtrl', ['$scope','$interval', function($scope, $interval){
    $scope.minutes = '0';
    $scope.seconds = '00';
    var timer;
    $scope.addSecs = function(sec){
      if(sec <= 5){
        $scope.seconds = '0'+sec;
      }else{
        $scope.seconds = sec;
      }
    };
    function reduceTime(){
      if($scope.seconds > 0){
        if($scope.seconds >10){
          $scope.seconds -= 1;
        }else{
          $scope.seconds = '0' + ($scope.seconds -=1);
        }
      }else if($scope.seconds === ('0'+0) && $scope.minutes > 0){
        $scope.minutes -=1;
        $scope.seconds = 59;
      }else if($scope.seconds === ('0'+0) && $scope.minutes === 0){
        navigator.vibrate(3000);
        $interval.cancel(timer);
      }
    }
    $scope.startTimer = function(){
      timer = $interval(reduceTime, 1000);
    };
    $scope.endTimer = function(){
      $interval.cancel(timer);
      $scope.minutes = '0';
      $scope.seconds = '00';
    };
  }]);
})();
