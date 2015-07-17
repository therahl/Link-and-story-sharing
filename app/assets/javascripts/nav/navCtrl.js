myApp.controller('NavCtrl', [
  '$scope',
  'Auth',
  function($scope, Auth) {
    $scope.signedIn = Auth.isAuthenticated;
    $scope.logout = Auth.logout;

    Auth.currentUser().then(function(user) {
      console.log("Authenticated" + user);
      $scope.user = user;
    });

    $scope.$on('devise:new-registration', function(e, user) {
      console.log("REGISTERED");
      $scope.user = user;
    });

    $scope.$on('devise:login', function(e, user) {
      console.log("LOGIN SUCCESS" + user.username);
      $scope.user = user;
    });

    $scope.$on('devise:logout', function(e, user) {
      console.log("LOGOUT SUCCESS");
      $scope.user = {};
    });
  }
]);
