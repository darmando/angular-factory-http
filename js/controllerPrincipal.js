
var app = angular.module('appPrincipal', []);


app.controller('controllerPrincipal',
  ['$scope','servicios',
  function($scope,servicios){
    onInit();

    function onInit(){
         servicios.obtenerAlumnos().then(function(response) {
              $scope.listaAlumnos = response.alumnos;
         });
    }

  
 
}]);
