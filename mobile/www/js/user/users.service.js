(function () {
  "use strict";

  angular
    .module('users')
    .factory('UsersService', function ($http) {
      // var url = "http://tiny-tiny.herokuapp.com/collections/PediaApp";
      // var url = "https://pediaserver.herokuapp.com/api/collections/PediaApp";
      var url = "/auth/signup";
      var getUser = "/api/me"
      //The functions below would then go to the server side??

      var addUser = function (newUser) {
        console.log(newUser);
        $http.post(url, newUser).then(function(res){
          console.log(res);
        });
      };

      var getUsers = function () {
        return $http.get(url);
      };

      var getSingleUser = function () {
        return $http.get(getUser);
      };

      var updateUser = function (updatedUser) {
        return $http.put(url + '/' + updatedUser._id, updatedUser);
      };
      var removeUser = function (userId) {
        return $http.delete(url + '/' + userId);
      };



      return {
        addUser: addUser,
        getSingleUser: getSingleUser,
        removeUser: removeUser,
        updateUser: updateUser,
        getUsers: getUsers
      };
    });

})();
