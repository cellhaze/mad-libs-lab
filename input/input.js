var app = angular.module("libModule");

app.controller('input', function($scope, wordFactory, $location) {        
        

    $scope.obj = {};

    $scope.submit = function() {
        wordFactory.getWords($scope.obj);
        console.log($scope.obj);
        $location.path("/results");
        console.log('hi');
    };
    
});