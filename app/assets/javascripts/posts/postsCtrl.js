// myApp = angular.module('flapperNews', ['ui.router', 'templates']);

myApp.controller('PostsCtrl', [
  '$scope',
  '$stateParams',
  'posts',
  function($scope, $stateParams, posts) {
    console.log("I am the post controller");
    $scope.post = posts.posts[$stateParams.id];
    $scope.addComment = function(){
      if($scope.body === ''){return;}
      $scope.post.comments.push({
        body: $scope.body,
        author: 'user',
        upvotes: 0
      });
      $scope.body = '';
    };
    $scope.removeUpvote = function(comment) {
      comment.upvotes--;
    };
    $scope.addUpvote = function(comment) {
      comment.upvotes++;
    };
  }
])
