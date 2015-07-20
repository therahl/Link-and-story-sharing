myApp.controller('UserCtrl',[
  '$scope',
  'userComments',
  function($scope, userComments){
    $scope.posts = userComments.posts;
    $scope.comments = userComments.comments;
  }
])
