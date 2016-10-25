(function(){
    'use strict'

    var one = function(selector){
        return document.querySelector(selector)
    }
    var add = function (){
        var numbers = Array.from(arguments)  //arguments is premade in functions
        var total = 0
        total = numbers.reduce(function(previousNumber, currentNumber){
            return previousNumber + currentNumber
        },0)
        return total
    }
    window.md = {
        one: one,
        add: add,
    }
}())
