(function () {
    'use strict';
    angular
        .module('app')
        .directive('myMap',  myMapDirective);
    
    
    myMapDirective.$inject = [];

    function myMapDirective() {
        
        return {
            replace:true,
            restrict:'E',
            templateUrl:'map/map.tpl.html',
            link:function(scope, elem, attr) {
                elem.backstretch([
                    "img/bg/1.JPG",
                    "img/bg/2.JPG",
                    "img/bg/3.JPG",
                    "img/bg/4.JPG"
                ], {duration: 5000, fade: 1000, centeredX:true, centeredY:true});
            }
        };
    }

} ());
