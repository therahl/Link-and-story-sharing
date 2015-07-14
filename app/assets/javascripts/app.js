angular.module('flapperNews', ['ui.router'])
  .config([
    '$stateProvider',
    '$urlRouterProvider',
    function($stateProvider, $urlRouterProvider) {
      $stateProvider
        .state('home', {
          url: '/home',
          templateUrl: '/home.html',
          controller: 'MainCtrl'
        })
        .state('posts', {
          url: '/posts/{id}',
          templateUrl: '/posts.html',
          controller: 'PostsCtrl'
        });
      $urlRouterProvider.otherwise('home');
    }
  ])

.factory('posts', [function() {
  var o = {
    posts: []
  };
  return o;
}])

.controller('PostsCtrl', [
  '$scope',
  '$stateParams',
  'posts',
  function($scope, $stateParams, posts) {
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
    }
    $scope.addUpvote = function(comment) {
      comment.upvotes++;
    }
  }
])

.controller('MainCtrl', [
  '$scope',
  'posts',
  function($scope, posts) {
    $scope.test = "what's up world?";
    $scope.posts = posts.posts;
    $scope.addPost = function() {
      if (!$scope.title || $scope.title === '') {
        return;
      }
      $scope.posts.push({
        title: $scope.title,
        link: $scope.link,
        upvotes: 0,
        comments: [
          {author: 'Joe Bob', body: 'great post! this is so fantastic you know!', upvotes: 0},
          {author: 'David John', body: 'Vestibulum eleifend, ex vitae accumsan luctus, libero erat ultricies turpis, non eleifend dui nisl nec magna. Morbi cursus tincidunt augue, in porttitor felis ornare eleifend. Ut id euismod dolor, sit amet tristique ante. Nam vulputate interdum nisl et dapibus', upvotes: 0},
          {author: 'Ben Bob', body: 'Integer orci neque, consectetur a suscipit vel, dapibus ut augue. Aliquam tempor vel est at condimentum. In nec orci eu dolor ultrices mattis.', upvotes: 0}
        ]
    });
      $scope.title = '';
      $scope.link = '';
    };

    $scope.removeUpvote = function(post) {
      post.upvotes--;
    }
    $scope.addUpvote = function(post) {
      post.upvotes++;
    }

  }
]);
