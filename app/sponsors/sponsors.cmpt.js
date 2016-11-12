(function () {
    'use strict';
    angular
        .module('app')
        .directive('mySponsors',  sponsorsDirective);
    
    
    sponsorsDirective.$inject = ['$window'];

    function sponsorsDirective($window) {
        
        return {
            replace:true,
            restrict:'E',
            templateUrl:'sponsors/sponsors.tpl.html',
            link:function(scope, elem, attr) {

                //Carousell Settings
                elem.find('.my-carousel').owlCarousel({
                    autoPlay:3000,
                    itemsDesktop : [1199,3],
                    itemsDesktopSmall : [979,3],
                    navigation : false
                });

            }
        };
    }

} ());