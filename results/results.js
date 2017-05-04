(function() {
    


var app = angular.module("libModule");

    app.controller('results', function($scope, wordFactory) {        
       
        $scope.word = wordFactory.giveWords();
        
})




});