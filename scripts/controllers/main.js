'use strict';

angular.module('chattyApp')
  .controller('MainCtrl', function ( $scope, messageService ) {
    messageService.getMessages().then(function ( response ) {
      $scope.messages = response.data;
    });



    $scope.addMessage = function ( message ) {
      var msg = {
        username: $scope.username,
        message: message
      }

      if (msg) {
        messageService.addMessage(msg).then(function ( response ) {
          $scope.messages = response.data;
        });
      }
    };


    $scope.saveUsername = function(name) {
      $scope.submitted = !$scope.submitted;
      $scope.username = name;
    }

    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
