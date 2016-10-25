// Your DOM library code goes here inside of an IIFE and must set a global variables called md.

/*
one(): Find one matching element using any CSS selector
all(): Find all matching elements using any CSS selector
remove(): Remove an element
addClass(): Add a CSS class to an element
removeClass(): Remove a CSS class from an element
hasClass(): Return true if an element contains a CSS class in it's CSS attribute (see classList documentation)
getAttr(): Get an HTML attribute from an element
setAttr(): Set an HTML attribute on an element
setHTML(): Set the innerHTML of an element
getHTML(): Get the innerHTML of an element
*/


(function(){
    'use strict'
    var one = function(selector){
        return document.querySelector(selector)
    }
    var all = function(selectors){
        return document.querySelectorAll(selectors)
    }
    var remove = function(element){
        // return document.querySelector(element).remove()
        return one(element).remove()  // use one() instead of document.querySelector
    }
    var addClass = function(element, value){
        // return document.querySelector(element).classList.add(value)
        one(element).classList.add(value)
    }
    var removeClass = function(element, value){
        // return document.querySelector(element).classList.remove(value)
        one(element).classList.remove(value)
    }
    var hasClass = function(element, name){
        // return document.querySelector(element).classList.contains(name)
        one(element).classList.contains(name)
    }
    var getAttr = function(element, value){
        // return document.querySelector(element).getAttribute(value)
        return one(element).getAttribute(value)
    }
    var setAttr = function(element, name, value){
        // return document.querySelector(element).setAttribute(name, value)
        one(element).setAttribute(name,value)
    }
    var setHTML = function(selector, value){
        // return document.querySelector(selector).innerHTML = value
        one(element).innerHTML = value
    }
    var getHTML = function(selector){
        // return document.querySelector(selector).innerHTML
        return one(element).innerHTML
    }
    var ajax = function(url, success){
        fetch(url)
        .then(response => response.json())
        .then(success)
    }
    var getProp = function(name, property){
        return document.querySelector(name)[property]
        // return one(name)[property] // property is the meta data use console.dir to look at the meta data and it will show the properties of the tag
    }
    var setProp = function(name, property, string){
        return document.querySelector(name)[property] = string
        // one(name)[property] = string
    }
    var getValue = function(name){
        return document.querySelector(name).value
        // return one(name).value
    }
    var setValue = function(name, setValue){
        return document.querySelector(name).value = setValue
        // one(name).value = setValue
    }
    var addEvent = function(element, event,callback){
        return document.querySelector(element).addEventListener(event, callback)
    }
    window.md = {
        one: one,
        all: all,
        remove: remove,
        addClass: addClass,
        removeClass: removeClass,
        hasClass: hasClass,
        getAttr: getAttr,
        setAttr: setAttr,
        setHTML: setHTML,
        getHTML: getHTML,
        ajax: ajax,
        getProp: getProp,
        setProp: setProp,
        getValue: getValue,
        setValue: setValue,
        addEvent: addEvent,
    }
}())
