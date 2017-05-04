var app = angular.module("libModule");

app.controller('input', function($scope, wordFactory, $location) {        
        


    $scope.setWords = function(word) {
        wordFactory.setWords(word);
        console.log(word);
        $location.path("/results");
    };
    
});