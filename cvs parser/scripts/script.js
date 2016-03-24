angular.module('myApp', [])
    .controller('MainController',function($scope, $http) {
    $scope.lista = [];
    function oggetto(i, d, ds) {
        this.indirizzo = i;
        this.data = d;
        this.descrizione = ds;
    }

    $http({
        method: 'GET',
        url: "http://localhost:63342/HTML/ProjectWork1/source/esercizio.csv"
    })
        .then(function(resp) {
            $scope.processData(resp.data);
        }, function(resp) {
        })

    $scope.processData = function(allText) {
        // split content based on new lines
        var allTextLines = allText.split(/\r\n|\n/);
        for(var i=1; i<allTextLines.length; i++) {
            var line = allTextLines[i].split(";");
            //console.log(line);
            $scope.lista.push( new oggetto(line[0], line[1], line[8]) );
        }

    };
});
