(function () {
    'use strict';
    angular
        .module('app')
        .directive('navigation',  navigationDirective);
    
    
    navigationDirective.$inject = ['$window'];

    function navigationDirective($window) {
        
        return {
            replace:true,
            restrict:'E',
            templateUrl:'navigation/navigation.tpl.html',
            link:function(scope, elem, attr) {

                //Hide Menu When Scroll
                var endWindowMid = window.innerHeight *0.5;
                angular.element($window).bind('scroll', function() {
                    
                    if (this.pageYOffset > endWindowMid) {
                        elem.removeClass("bg-none");
                        elem.addClass("bg-white");
                    }
                    else {
                        elem.removeClass("bg-white");
                        elem.addClass("bg-none");
                    }
                });
                

                //Smooth Scroll
                scope.scrollTo = function(section, event) {
                    event.preventDefault();
                    var elements = document.querySelectorAll('html, body');
                    angular.element(elements).animate({
                        scrollTop: $('#' + section).offset().top
                    }, 800, function(){                
                        // Add hash (#) to URL when done scrolling (default click behavior)
                        window.location.hash = section;
                    });
                }   
            }
        };
    }

} ());