myApp.factory('userComments', [
  '$http',
  function($http) {
    var u = {
      posts: [],
      comments: []
    };
    u.get = function(id) {
      return $http.get('/users/' + id + '.json').success(function(data) {
        angular.copy(data[0], u.posts);
        angular.copy(data[1], u.comments);
      });
    };
    return u;
}])
