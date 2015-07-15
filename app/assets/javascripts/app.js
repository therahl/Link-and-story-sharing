angular.module('flapperNews', ['ui.router', 'templates'])
  .config([
    '$stateProvider',
    '$urlRouterProvider',
    function($stateProvider, $urlRouterProvider) {
      console.log("hey there yo")

      $stateProvider
        .state('home', {
          url: '/home',
          template: "<h1>HEREIAM</h1>",
          // templateUrl: 'home/_home.html',
          controller: 'MainCtrl'
          // resolve: {
          //   postPromise: ['posts', function(posts){
          //     return posts.getAll();
          //   }]
          // }
        })
        .state('posts', {
          url: '/posts/{id}',
          templateUrl: 'posts/_posts.html',
          controller: 'PostsCtrl'
        });
      $urlRouterProvider.otherwise('home');
    }
  ])
