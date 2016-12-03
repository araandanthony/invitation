(function(){
    'use strict';

    angular
        .module('app', [
            "ngAnimate",
            /* Third Party */
            
        ]);
}());
angular.module('app').run(['$templateCache', function($templateCache) {$templateCache.put('info/weddinginfo.tpl.html','<div id="info" class="container-fluid" ng-switch on="infoType"><navigation></navigation><br><!-- ******Wedding Section****** --><section id="wedding" class="wedding-section section"><div class="container text-center"><h3 class="title script"><span class="title-deco-left"></span><span class="title-text">The Wedding</span><span class="title-deco-right"></span></h3><div id="countdown-box" class="countdown-box"></div><!--//countdown-box--><div class="row cols-wrapper"><div class="ceremony-col col-xs-12 col-sm-6"><div class="col-inner"><h4 class="subtitle">Ceremony</h4><div class="intro">We are getting married at Parish of the Immaculate Heart of Mary Antipolo.</div><ul class="meta-list list-unstyled text-left center-block"><li><span class="icon-calendar love-icon"></span>Friday - January 27th, 2017</li><li><span class="icon-clock love-icon"></span>3:00pm - 4:00pm</li><li><span class="icon-map love-icon"></span>Parish of the Immaculate Heart of Mary Antipolo<br><span class="direction-info display-block list-link"><a href="#" data-toggle="modal" data-target="#direction-modal">How to get there</a></span></li></ul><!--//meta-list--></div><!--//col-inner--></div><!--//ceremony-col--><div class="reception-col col-xs-12 col-sm-6"><div class="col-inner"><h4 class="subtitle">Reception</h4><p class="intro">The party will take place after the ceremony at the Glass Garden (Emerald Wing).</p><ul class="meta-list list-unstyled text-left center-block"><li><span class="icon-calendar love-icon"></span>Friday - January 27th, 2017</li><li><span class="icon-clock love-icon"></span>5:00pm - 10:00pm</li><li><span class="icon-map love-icon"></span>The Glass Garden<br><span class="direction-info display-block list-link"><a href="#" data-toggle="modal" data-target="#direction-modal">How to get there</a></span></li></ul><!--//meta-list--></div><!--//col-inner--></div><!--//ceremony-col--></div><!--//row--><div class="row"><div class="col-xs-12"><div class="col-inner"><h4 class="subtitle">Ara &amp; Antz Save The Date (Behind-the-Scenes SG Edition)</h4><iframe class="col-xs-12" src="https://player.vimeo.com/video/194141996" width="inherit" height="360" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>&nbsp;</div></div></div><!--//action-wrapper--></div><!--//container--><div id="map" class="map-container"></div><!--//map-container--></section><!--//wedding-section--><!-- Direction Modal--><div id="direction-modal" class="direction-modal modal" tabindex="-1" role="dialog" aria-labelledby="directionModalLabel"><div class="modal-dialog" role="document"><div class="modal-content"><div class="modal-header"><button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button><h4 class="modal-title text-center" id="directionModalLabel">How to get to the events</h4></div><!--//modal-header--><div class="modal-body"><div class="row"><div class="event-col col-xs-12 col-sm-6"><h4 class="col-title text-center">Ceremony</h4><div class="col-subtitle script text-center">Parish of the Immaculate Heart of Mary</div><div class="figure-container"><img class="img-responsive" src="http://static.panoramio.com/photos/large/127635684.jpg" alt=""></div><h5 class="section-title"><i class="fa fa-car"></i> By Car</h5><p style="text-align:justify">From C5, turn right to FVR road and go straight until you reach Marilaque highway (a.k.a. Marcos highway). Drive through Marilaque highway until you reach Masinag intersection. In the intersection, turn right and take Sumulong Highway. In about 12KM, turn right to Daang Bakal road. Go straight and follow Daang Bakal road. In 1KM you will have reached the church.</p></div><!--//event-col--><div class="event-col col-xs-12 col-sm-6"><h4 class="col-title text-center">Reception</h4><div class="col-subtitle script text-center">The Glass Garden</div><div class="figure-container glass-garden"><img class="img-responsive" src="http://hizonscatering.com/wp-content/uploads/2014/06/gg4.jpg" alt=""></div><h5 class="section-title"><i class="fa fa-car"></i> By Car</h5><p style="text-align:justify">From Church, take Daang Bakal road and turn left to Sumulong highway intersection. Go through Sumulong highway until you reach Masinag Intersection. In the Masinag intersection, turn left and take Marilaque highway. Driving through Marilaque highway, you should take a U-turn under the bridge between Santolan LRT and SM Marikina. Coming from the U-turn, you should be able to reach Evangelista ave. Take Evangelista ave. In 200M, Glass Garden will be on your right.</p></div><!--//event-col--></div><!--//row--></div><!--//modal-body--></div><!--//modal-content--></div></div><!--//modal--><!-- ******Gift Section****** --><section id="gift" class="gift-section section"><div class="container text-center"><h3 class="title script"><span class="title-deco-left"></span><span class="title-text"><span class="hidden-xs">Gift</span> Registries</span> <span class="title-deco-right"></span></h3><div class="message-container"><div class="message-inner center-block"><div class="intro">More than just kisses, so far we\'ve shared, our home has been made, with love and care. Most things we need, we\'ve already got, and in our home, we can\'t fit a lot! A wishing well, we thought would be great, but only if, you wish to participate, a gift of money, is deposited into a well,then make a wish... but shhh don\'t tell! Once we\'ve replaced the old with the new, we can look back, and say it was thanks to you!</div><div class="thank-you script">Thank you so much!</div></div><!--//message-inner--></div><!--//message-container--><h1 class="signature cursive">Ara &amp; Antz</h1></div><!--//container--></section><!--//gift-section--><!-- ******FOOTER****** --><footer class="footer"><div class="footer-content text-center"><div class="container"><div class="copyright">Copyright @ Ara and Anthony</div><div class="credit">Special thanks to Mich Wong & Randy Tomas (M&R Beauty Service), Jason Ng, Jennifer Francisco, Janet Tria, Francis Gaerlan</div></div><!--//container--></div><!--//footer-content--></footer><!--//footer--></div>');
$templateCache.put('invitation/invitation.tpl.html','<section id="welcome" class="container-full-page"><canvas id="world"></canvas><!--<div class="row-fluid">\r\n        <div class="col-md-offset-4 col-md-4">\r\n            <div class="text-center">\r\n                <h1 class="cursive fa-5x">Celebrating  </h1>\r\n                <br/>\r\n                <p class="wedding-font fa fa-3x">ARA <i class="cursive">&</i> ANTHONY</p>\r\n            </div>\r\n        </div>\r\n    </div>--></section>');
$templateCache.put('map/map.tpl.html','<div>I am a map</div><!--//map-container-->');
$templateCache.put('navigation/navigation.tpl.html','<nav class="navbar navbar-fixed-top" role="navigation"><!-- Brand and toggle get grouped for better mobile display --><div class="navbar-header"><button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-ex1-collapse"><span class="sr-only">Toggle navigation</span> <span class="icon-bar" style="color:red"></span> <span class="icon-bar"></span> <span class="icon-bar"></span></button></div><!-- Collect the nav links, forms, and other content for toggling --><div class="collapse navbar-collapse navbar-ex1-collapse"><ul class="nav navbar-nav"><li class="active"><a href="#" ng-click="scrollTo(\'welcome\', $event)">Welcome</a></li><li class=""><a href="#wedding" ng-click="scrollTo(\'wedding\', $event)">Date</a></li><li class=""><h2 class="cursive">Love</h2></li><li class=""><a href="#" data-toggle="modal" data-target="#direction-modal">Info</a></li><li class=""><a href="#" ng-click="scrollTo(\'gift\', $event)">Registry</a></li></ul></div><!-- /.navbar-collapse --></nav>');
$templateCache.put('sponsors/sponsors.tpl.html','<div class="container"><div class="row"><div class="col-md-12"><div class="my-carousel"><div class="item"><img src="img/bg/bg1.jpg" alt="Owl Image"></div><div class="item"><img src="img/bg/bg5.jpg" alt="Owl Image"></div><div class="item"><img src="img/bg/bg8.jpg" alt="Owl Image"></div><div class="item"><img src="img/bg/bg1.jpg" alt="Owl Image"></div><div class="item"><img src="img/bg/bg5.jpg" alt="Owl Image"></div><div class="item"><img src="img/bg/bg8.jpg" alt="Owl Image"></div></div></div></div></div>');}]);
(function () {
    'use strict';
    angular
        .module('app')
        .directive('myInvitation', myInvitationDirective);


    myInvitationDirective.$inject = ['$interval'];

    function myInvitationDirective($interval) {

        return {
            replace: true,
            restrict: 'E',
            templateUrl: 'invitation/invitation.tpl.html',
            link: function (scope, elem, attr) {
                elem.backstretch([
                    "img/bg/1.JPG",
                    "img/bg/2.JPG",
                    "img/bg/3.JPG",
                    "img/bg/4.jpg",
                    "img/bg/5.JPG",
                    "img/bg/6.JPG",
                    "img/bg/7.jpg",
                    "img/bg/8.jpg"                    
                ], { duration: 5000, fade: 1000, centeredX: true, centeredY: true });

             
            }
        };
    }

} ());



angular.element(document).ready(function () {
    (function () {
        var COLORS, Confetti, NUM_CONFETTI, PI_2, canvas, confetti, context, drawCircle, i, range, resizeWindow, xpos;

        NUM_CONFETTI = 40;

        COLORS = [[220, 220, 220], [119, 136, 153], [211, 211, 211], [218, 165, 32], [255, 250, 250]];

        PI_2 = 1 * Math.PI; //edited to make heart shape

        canvas = document.getElementById("world");

        context = canvas.getContext("2d");

        window.w = 0;

        window.h = 0;

        resizeWindow = function () {
            window.w = canvas.width = window.innerWidth;
            return window.h = canvas.height = window.innerHeight;
        };

        window.addEventListener('resize', resizeWindow, false);

        window.onload = function () {
            return setTimeout(resizeWindow, 0);
        };

        range = function (a, b) {
            return (b - a) * Math.random() + a;
        };

        drawCircle = function (x, y, r, style) {
            context.beginPath();
            context.arc(x, y, r, 0, PI_2, false);
            //context.rect(x, y, 10, 10);

            context.fillStyle = style;
            return context.fill();
        };

        //xpos = 0.5;
        xpos = 0.9;

        document.onmousemove = function (e) {
            return xpos = e.pageX / w;
        };

        window.requestAnimationFrame = (function () {
            return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function (callback) {
                return window.setTimeout(callback, 1000 / 600);
            };

        })();

        Confetti = (function () {
            function Confetti() {
                this.style = COLORS[~~range(0, 5)];
                this.rgb = "rgba(" + this.style[0] + "," + this.style[1] + "," + this.style[2];
                this.r = ~~range(2, 6);
                this.r2 = 2 * this.r;
                this.replace();
            }

            Confetti.prototype.replace = function () {
                this.opacity = 0;
                this.dop = 0.03 * range(1, 4);
                this.x = range(-this.r2, w - this.r2);
                this.y = range(-20, h - this.r2);
                this.xmax = w - this.r;
                this.ymax = h - this.r;
                this.vx = range(0, 2) + 8 * xpos - 5;
                return this.vy = 0.7 * this.r + range(-1, 1);
            };

            Confetti.prototype.draw = function () {
                var ref;
                this.x += this.vx;
                this.y += this.vy;
                this.opacity += this.dop;
                if (this.opacity > 1) {
                    this.opacity = 1;
                    this.dop *= -1;
                }
                if (this.opacity < 0 || this.y > this.ymax) {
                    this.replace();
                }
                if (!((0 < (ref = this.x) && ref < this.xmax))) {
                    this.x = (this.x + this.xmax) % this.xmax;
                }
                return drawCircle(~~this.x, ~~this.y, this.r, this.rgb + "," + this.opacity + ")");
            };

            return Confetti;

        })();

        confetti = (function () {
            var j, ref, results;
            results = [];
            for (i = j = 1, ref = NUM_CONFETTI; 1 <= ref ? j <= ref : j >= ref; i = 1 <= ref ? ++j : --j) {
                results.push(new Confetti);
            }
            return results;
        })();

        window.step = function () {
            var c, j, len, results;
            requestAnimationFrame(step);
            context.clearRect(0, 0, w, h);
            results = [];
            for (j = 0, len = confetti.length; j < len; j++) {
                c = confetti[j];
                results.push(c.draw());
            }
            return results;
        };

        step();

    }).call(this);
});
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