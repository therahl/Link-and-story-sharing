// myApp = angular.module('flapperNews', ['ui.router', 'templates']);

myApp.controller('MainCtrl', [
  '$scope',
  'posts',
  function($scope, posts) {
    console.log("I am MainCtrl");
    $scope.posts = posts.posts;

    $scope.addPost = function() {
      if (!$scope.title || $scope.title === '') {
        return;
      }
      posts.create({
        title: $scope.title,
        link: $scope.link,
        description: $scope.description,
        upvotes: 0
      });

      $scope.title = '';
      $scope.link = '';
      $scope.description = '';
      $scope.showPostForm = false;
    };
    $scope.showPostForm = false;
    $scope.togglePostForm = function(){
      $scope.showPostForm = !$scope.showPostForm;
    };
    $scope.removeUpvote = function(post) {
      posts.downvote(post);
    };
    $scope.addUpvote = function(post) {
      posts.upvote(post);
    };

  }
]);
