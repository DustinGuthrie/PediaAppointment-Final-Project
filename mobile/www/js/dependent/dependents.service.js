// https://pediaserver.herokuapp.com/api/collections/dependents
(function () {
  "use strict";

  angular
    .module('dependents')
    .factory('DependentsService', function ($http) {
      var url = "https://pediaserver.herokuapp.com/api/dependents";
      //****The above route is working to get dependents****//

      // var getDependent = "https://pediaserver.herokuapp.com/api/dependents/";
      //****The above route gives us a 400 error when attempting to get single dependent****//

      var getDependent = "https://pediaserver.herokuapp.com/api/collections/dependents/";
      //****The above route will allow us in and appears to find the dependent.  For some reason the res.json(result) in crudRoutes
      //is not working but at some point was.  We see in the console logs the data we need but now it does not appear in the
      //the dependentProfile.html - its like we dont have access to that data ****//
      
      var editDependent = "https://pediaserver.herokuapp.com/api/dependents/:dependentId";


      var addDependent = function (newDependent) {
        console.log("ADD DEP SERV", newDependent);
        $http.post(url, newDependent).then(function(data) {
          console.log("ADD DEPENDENT SERVICE", data);
        });
      };


      var getDependents = function () {
        return $http.get(url);
      };

      var getSingleDependent = function (id) {
        console.log("this is getsingledependent in dependent service:", id);
        console.log("getsingledependent service is firing!");
        return $http.get(getDependent + id);
      };


      var updateDependent = function (updatedDependent) {
        return $http.put(editDependent, updatedDependent);
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
      };
    });

})();
