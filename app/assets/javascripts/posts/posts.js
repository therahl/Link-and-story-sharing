// myApp = angular.module('flapperNews', ['ui.router', 'templates']);

myApp.factory('posts', [
  '$http',
  function($http) {
  var o = {
    posts: []
  };
  o.getAll = function() {
    return $http.get('/posts.json').success(function(data){
      angular.copy(data, o.posts);
      });
  };
  o.create = function(){
    return $http.post('/posts.json', post).success(function(data){
      o.posts.push(data);
    });
  };
  o.upvote = function(post){
    return $http.put('/posts/' + post.id + '/upvote.json')
      .success(function(data){
        post.upvotes += 1;
      });
  };
  o.downvote = function(post){
    return $http.put('/posts/' + post.id + '/downvote.json')
      .success(function(data){
        post.downvotes -= 1;
      });
  }
  return o;
}]);
