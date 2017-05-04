var app = angular.module('libModule', ["ngRoute"]);


app.controller('myController', function($scope) {  
    

    
});

app.config(function($routeProvider) {
    
    $routeProvider
    
        .when("/input", {
        templateUrl: "input/input.html",
        controller: "input"
                        }) 
    
        .when("/results", {
        templateUrl: "results/results.html",
        controller: "results"
                        })
    
});




