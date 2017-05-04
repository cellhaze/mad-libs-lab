var app = angular.module("libModule");

app.factory('wordFactory', function () {

    
    var wordStore = {};
    
    
    return {
        setWords: setWords,
        getWords: getWords
//        need help here
    }
    
    
    function setWords(word) {
        wordStore = word;
        console.log(word);    
    };
    
    function getWords() {
        return wordStore;
    }
    
    
    

    });