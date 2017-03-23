'use strict';

angular.module('cmbApp')
  .controller('LoginCtrl', function ($scope,$anchorScroll, $location) {
       

$scope.Login = 
   {
    loginEmail: '',
    loginPassword: ''
   };

$scope.loginFunc = function()
{
    console.log("Login Email : ",$scope.Login.loginEmail);
    console.log("Login Password : ",$scope.Login.loginPassword);
}



  $scope.scrollToBottom = function(x)
    { 

      var old = $location.hash();
      $location.hash(x);
      $anchorScroll(); 
      $location.hash(old);      

    };

  });
