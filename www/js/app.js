(function(){
  'use strict';
  angular.module('lc-timer', ['ionic'])
  .run(function($ionicPlatform){
    $ionicPlatform.ready(function(){
      if(window.cordova && window.cordova.plugins.Keyboard) {
        cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      }
      if(window.StatusBar) {
        StatusBar.styleDefault();
      }
    });
  });
})();
