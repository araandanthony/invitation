(function(){
    'use strict';

    angular
        .module('app', [
            "ngAnimate",
            /* Third Party */
            
        ]);
}());
angular.module('app').run(['$templateCache', function($templateCache) {$templateCache.put('info/weddinginfo.tpl.html','<div id="info" class="container-fluid bg-white" ng-switch on="infoType"><br><div class="row"><div class="col-md-offset-3 col-md-6"><div class="text-center pull-sm-left"><div class="col-md-4"><h2 class="divider"><a href="#thedate" ng-click="infoType = \'date\'" ng-class="{active:infoType == \'date\'}"><span class="fa fa-heart" ng-show="infoType == \'date\'"></span> DATE</a></h2></div><div class="col-md-4"><h2 class="divider"><a href="#thelocation" ng-click="infoType = \'church\'" ng-class="{active:infoType == \'church\'}"><span class="fa fa-plus" ng-show="infoType == \'church\'"></span> CHURCH</a></h2></div><div class="col-md-4"><h2><a href="#thelocation" ng-click="infoType = \'reception\'" ng-class="{active:infoType == \'reception\'}"><span class="fa fa-location-arrow" ng-show="infoType == \'reception\'"></span> RECEPTION</a></h2></div></div></div></div><br><div class="row"><div class="col-md-12 animated animate-switch" ng-switch-default><div class="text-center"><h1 class="cursive" style="font-size:80px">27th January 2017</h1></div></div><div class="col-md-offset-4 col-md-4 clear-padding animated animate-switch" ng-switch-when="church"><div class="col-md-4"><address><strong><span class="text-primary">Immaculate Mary Parish</span></strong><br>Antipolo<br>Philippines, 1870</address></div><div class="col-md-8 text-right"><div style="border:1px solid black"></div></div></div></div></div>');
$templateCache.put('invitation/invitation.tpl.html','<section id="welcome" class="container-full-page"><canvas id="world"></canvas><!--<div class="row-fluid">\r\n        <div class="col-md-offset-4 col-md-4">\r\n            <div class="text-center">\r\n                <h1 class="cursive fa-5x">Celebrating  </h1>\r\n                <br/>\r\n                <p class="wedding-font fa fa-3x">ARA <i class="cursive">&</i> ANTHONY</p>\r\n            </div>\r\n        </div>\r\n    </div>--></section>');
$templateCache.put('navigation/navigation.tpl.html','<nav class="navbar navbar-fixed-top" role="navigation"><!-- Brand and toggle get grouped for better mobile display --><div class="navbar-header"><button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-ex1-collapse"><span class="sr-only">Toggle navigation</span> <span class="icon-bar" style="color:red"></span> <span class="icon-bar"></span> <span class="icon-bar"></span></button></div><!-- Collect the nav links, forms, and other content for toggling --><div class="collapse navbar-collapse navbar-ex1-collapse"><ul class="nav navbar-nav"><li class="active"><a href="#" ng-click="scrollTo(\'welcome\', $event)">Welcome</a></li><li class=""><a href="#" ng-click="scrollTo(\'gift\', $event)">Date</a></li><li class=""><h2 class="cursive">Love</h2></li><li class=""><a href="#gift" ng-click="scrollTo(\'info\', $event)">INFO</a></li><li class=""><a href="#gift" ng-click="scrollTo(\'gift\', $event)">Date</a></li></ul></div><!-- /.navbar-collapse --></nav>');
$templateCache.put('sponsors/sponsors.tpl.html','<div class="container"><div class="row"><div class="col-md-12"><div class="my-carousel"><div class="item"><img src="img/bg/bg1.jpg" alt="Owl Image"></div><div class="item"><img src="img/bg/bg5.jpg" alt="Owl Image"></div><div class="item"><img src="img/bg/bg8.jpg" alt="Owl Image"></div><div class="item"><img src="img/bg/bg1.jpg" alt="Owl Image"></div><div class="item"><img src="img/bg/bg5.jpg" alt="Owl Image"></div><div class="item"><img src="img/bg/bg8.jpg" alt="Owl Image"></div></div></div></div></div>');}]);
(function () {
    'use strict';
    angular
        .module('app')
        .directive('myInvitation',  myInvitationDirective);
    
    
    myInvitationDirective.$inject = ['$interval'];

    function myInvitationDirective($interval) {
        
        return {
            replace:true,
            restrict:'E',
            templateUrl:'invitation/invitation.tpl.html',
            link:function(scope, elem, attr) {
               
                elem.backstretch([
                    "img/bg/1.jpg",
                    "img/bg/2.jpg",
                    "img/bg/3.jpg",
                    "img/bg/4.jpg"
                ], {duration: 7000, fade: 1000, centeredX:true, centeredY:true});

            }
        };
    }

} ());

angular.element(document).ready(function() {
    (function() {
    var COLORS, Confetti, NUM_CONFETTI, PI_2, canvas, confetti, context, drawCircle, i, range, resizeWindow, xpos;

    NUM_CONFETTI = 40;

    COLORS = [[220, 220, 220], [119, 136, 153], [211, 211, 211], [218, 165, 32], [255, 250, 250]];

    PI_2 = 1 * Math.PI; //edited to make heart shape

    canvas = document.getElementById("world");

    context = canvas.getContext("2d");

    window.w = 0;

    window.h = 0;

    resizeWindow = function() {
        window.w = canvas.width = window.innerWidth;
        return window.h = canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', resizeWindow, false);

    window.onload = function() {
        return setTimeout(resizeWindow, 0);
    };

    range = function(a, b) {
        return (b - a) * Math.random() + a;
    };

    drawCircle = function(x, y, r, style) {
        context.beginPath();
        context.arc(x, y, r, 0, PI_2, false);
        //context.rect(x, y, 10, 10);
        
        context.fillStyle = style;
        return context.fill();
    };

    //xpos = 0.5;
    xpos = 0.9;

    document.onmousemove = function(e) {
        return xpos = e.pageX / w;
    };

    window.requestAnimationFrame = (function() {
        return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function(callback) {
            return window.setTimeout(callback, 1000 / 600);
        };

    })();

    Confetti = (function() {
        function Confetti() {
        this.style = COLORS[~~range(0, 5)];
        this.rgb = "rgba(" + this.style[0] + "," + this.style[1] + "," + this.style[2];
        this.r = ~~range(2, 6);
        this.r2 = 2 * this.r;
        this.replace();
        }

        Confetti.prototype.replace = function() {
        this.opacity = 0;
        this.dop = 0.03 * range(1, 4);
        this.x = range(-this.r2, w - this.r2);
        this.y = range(-20, h - this.r2);
        this.xmax = w - this.r;
        this.ymax = h - this.r;
        this.vx = range(0, 2) + 8 * xpos - 5;
        return this.vy = 0.7 * this.r + range(-1, 1);
        };

        Confetti.prototype.draw = function() {
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

    confetti = (function() {
        var j, ref, results;
        results = [];
        for (i = j = 1, ref = NUM_CONFETTI; 1 <= ref ? j <= ref : j >= ref; i = 1 <= ref ? ++j : --j) {
        results.push(new Confetti);
        }
        return results;
    })();

    window.step = function() {
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
        .directive('myWeddingInfo',  weddingInfoDirective);
    
    
    weddingInfoDirective.$inject = ['$window'];

    function weddingInfoDirective($window) {
        
        return {
            replace:true,
            restrict:'E',
            templateUrl:'info/weddinginfo.tpl.html',
            link:function(scope, elem, attr) {
                scope.infoType = 'date';
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