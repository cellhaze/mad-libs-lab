var app = angular.module("libModule");

app.factory('wordFactory', function () {

    
    var obj = {};
    var holder;
    
    obj.setWords = function(word) {
        holder = word;
    };
    
    obj.giveWords = function() {
        return holder;
    };
    
    return.obj;
    
    
//    function bringObject(words){
//        var obj = words;
//    }
//    function getWords(){
//        return obj;
//    }
//    
//    return{
//        bringObject:bringObject,
//        getWords:getWords
//    }
    });