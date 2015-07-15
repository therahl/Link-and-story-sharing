myApp = angular.module('flapperNews', [])

myApp.controller('PpCtrl', [
  '$scope',
  function($scope){
    console.log("i'm here!!");
    $scope.test = "some text LALKSJKSJDSD";
  }

]);
// debugger;
//
// myApp.config(
//     function($stateProvider, $urlRouterProvider) {
//       $urlRouterProvider.otherwise('home');
//       $stateProvider
//         .state('home', {
//           url:"/fdsa",
//           template: "<div>HELLO</div>"
//         })
//
//           console.log("hey")
        //   url: '/home',
        //   templateUrl: 'home/_home.html',
        //   controller: 'MainCtrl'
        // })
        // .state('posts', {
        //   url: '/posts/{id}',
        //   templateUrl: 'posts/_posts.html',
        //   controller: 'PostsCtrl'
        // });
  //   }
  // )
