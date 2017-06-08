app.factory('servicios', function($http) {
  return {
	obtenerAlumnos: function() {
	      var oPromise = $http.get('js/listaAlumnosJSON.json').then(function (response) {
	        return response.data;
	      });
	      return oPromise;
	 }
	
  }; // fin return	
}) 




