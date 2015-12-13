(function () {
  "use strict";

  angular
    .module('dependents')
    .factory('dependentsController', function ($http) {
      var url = "https://tiny-tiny.herokuapp.com/collections/PediaAppDependents";
      var addDependent = function (newDependent) {
        console.log(newDependent);
        $http.dependent(url, newDependent);
      };

      var getDependents = function () {
        return $http.get(url);
      };

      var getSingleDependent = function (dependentId) {
        return $http.get(url + '/' + dependentId);
      };

      var updateDependent = function (updatedDependent) {
        return $http.put(url + '/' + updatedDependent._id, updatedDependent);
      };
      var removeDependent = function (dependentId) {
        return $http.delete(url + '/' + dependentId);
      };



      return {
        addDependent: addDependent,
        getSingleDependent: getSingleDependent,
        removeDependent: removeDependent,
        updateDependent: updateDependent,
        getDependents: getDependents
      }
    })

})();
