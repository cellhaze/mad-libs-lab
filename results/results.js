var app = angular.module("libModule");

    app.controller('results', function($scope, wordFactory) {        
       
        console.log('output loaded');
        
        wordFactory.getWords;
        
        $scope.word = wordFactory.getWords();
        console.log($scope.word);
        
})


