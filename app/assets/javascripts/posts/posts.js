// myApp = angular.module('flapperNews', ['ui.router', 'templates']);

myApp.factory('posts', [
  '$http',
  function($http) {
  var o = {
    posts: []
  };
  o.getAll = function() {
    return $http.get('/posts.json').success(function(data){
      angular.copy(data, o.posts).error(function(err){
        console.log("posts service factory error on http get /posts.json")
      });
    });
  };
  o.create = function(){
    return $http.post('/posts.json', post).success(function(data){
      o.posts.push(data);
    });
  };

  return o;
}]);
