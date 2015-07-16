// myApp = angular.module('flapperNews', ['ui.router', 'templates']);

myApp.controller('PostsCtrl', [
  '$scope',
  'post',
  'posts',
  function($scope, post, posts) {
    console.log("I am the post controller");
    $scope.post = post;

    $scope.addComment = function(){
      if($scope.body === ''){return;}
      posts.addComment(post.id, {
        body: $scope.body
      }).success(function(comment){
        $scope.post.comments.push(comment);
      });
      $scope.body = '';
    };
    $scope.removeUpvote = function(comment) {
      posts.downvoteComment(post, comment);
    };
    $scope.addUpvote = function(comment) {
      posts.upvoteComment(post, comment);
    };

  }
])
