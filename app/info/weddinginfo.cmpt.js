(function () {
    'use strict';
    angular
        .module('app')
        .directive('myWeddingInfo', weddingInfoDirective);


    weddingInfoDirective.$inject = ['$window'];

    function weddingInfoDirective($window) {

        return {
            replace: true,
            restrict: 'E',
            templateUrl: 'info/weddinginfo.tpl.html',
            link: function (scope, elem, attr) {
                scope.infoType = 'date';


                var target_date = new Date("January 27, 2017").getTime();
                // variables for time units
                var days, hours, minutes, seconds;
                // get tag element
                var countdown = document.getElementById("countdown-box");
                var days_span = document.createElement("SPAN");
                days_span.className = 'days';
                countdown.appendChild(days_span);
                var hours_span = document.createElement("SPAN");
                hours_span.className = 'hours';
                countdown.appendChild(hours_span);
                var minutes_span = document.createElement("SPAN");
                minutes_span.className = 'minutes';
                countdown.appendChild(minutes_span);
                var secs_span = document.createElement("SPAN");
                secs_span.className = 'secs';
                countdown.appendChild(secs_span);

                // update the tag with id "countdown" every 1 second
                setInterval(function () {
                    // find the amount of "seconds" between now and target
                    var current_date = new Date().getTime();
                    var seconds_left = (target_date - current_date) / 1000;

                    // do some time calculations
                    days = parseInt(seconds_left / 86400);
                    seconds_left = seconds_left % 86400;

                    hours = parseInt(seconds_left / 3600);
                    seconds_left = seconds_left % 3600;

                    minutes = parseInt(seconds_left / 60);
                    seconds = parseInt(seconds_left % 60);

                    // format countdown string + set tag value.
                    days_span.innerHTML = '<span class="number">' + days + '</span>' + '<span class="unit script">Days</span>';
                    hours_span.innerHTML = '<span class="number">' + hours + '</span>' + '<span class="unit script">Hrs</span>';
                    minutes_span.innerHTML = '<span class="number">' + minutes + '</span>' + '<span class="unit script">Mins</span>';
                    secs_span.innerHTML = '<span class="number">' + seconds + '</span>' + '<span class="unit script">Secs</span>';

                }, 1000);


                /* MAPS */
                var map = new GMaps({
                    div: '#map',
                    lat: 14.612966,
                    lng: 121.153193,
                    scrollwheel: false,
                    zoom: 13,
                });


                map.addMarker({
                    lat: 14.619312,
                    lng: 121.081945,
                    title: 'Reception Location',
                    infoWindow: {
                        content: '<div class="note">Reception</div><h4 class="map-title script">The Glass Garden</h4><div class="address"><span class="region">257 Evangelista Ave. Brgy. Santolan</span><br><span class="postal-code">1670</span><br><span class="city-name">Pasig City</span></div>'
                    }

                });

                
                map.addMarker({
                    lat: 14.596038,
                    lng: 121.163642,
                    verticalAlign: 'top',
                    title: 'Ceremony Location',
                    infoWindow: {
                        content: '<div class="note">Ceremony</div><h4 class="map-title script">Parish of the Immaculate Heart of Mary\'s Church</h4><div class="address"><span class="region">Daang Bakal Road</span><br><span class="postal-code">1870</span><br><span class="city-name">Antipolo City</span></div>'
                    }


                });



                /*display marker 1 address on load */
                google.maps.event.trigger(map.markers[0], 'click');
                /*display marker 2 address on load */
                google.maps.event.trigger(map.markers[1], 'click');

            }
        };
    }

} ());