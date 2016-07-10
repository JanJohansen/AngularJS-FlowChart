angular.
module('flowChart').
directive('ngMouseWheelUp', function () {
    return function (scope, element, attrs) {
        element.bind("DOMMouseScroll mousewheel onmousewheel", function (event) {

            // cross-browser wheel delta
            var event = window.event || event; // old IE support
            var delta = Math.max(-1, Math.min(1, (event.wheelDelta || -event.detail)));

            if (delta > 0) {
                scope.$apply(function () {
                    scope.$event = event;
                    scope.$eval(attrs.ngMouseWheelUp);
                });

                // for IE
                event.returnValue = false;
                // for Chrome and Firefox
                if (event.preventDefault) {
                    event.preventDefault();
                }

            }
        });
    };
});

angular.
module('flowChart').
directive('ngMouseWheelDown', function () {
    return function (scope, element, attrs) {
        element.bind("DOMMouseScroll mousewheel onmousewheel", function (event) {

            // cross-browser wheel delta
            var event = window.event || event; // old IE support
            var delta = Math.max(-1, Math.min(1, (event.wheelDelta || -event.detail)));

            if (delta < 0) {
                scope.$apply(function () {
                    scope.$event = event;
                    scope.$eval(attrs.ngMouseWheelDown);
                });

                // for IE
                event.returnValue = false;
                // for Chrome and Firefox
                if (event.preventDefault) {
                    event.preventDefault();
                }

            }
        });
    };
});


angular.
module('flowChart').
directive('viewBox', [
	/**
		* @ngdoc directive
		* @name directives.viewBox.directive:viewBox
		* @description
		* Supports using expression for SVG viewBox, by
		* using `data-view-box` which sets `viewBox` attribute.
		* Code borrowed from http://stackoverflow.com/a/14596319
		* @element SVG
		* @example
			<doc:example>
		    <doc:source>
		        <svg view-box="{{ APP_VIEWPORT.viewBox }}"></svg>
		    </doc:source>
		</doc:example>
		*/
    function () {
        'use strict';
        return {
            link: function (scope, element, attributes) {
                attributes.$observe('viewBox', function (value) {
                    //element.attr('viewBox', value);
                    element.get(0).setAttribute("viewBox", value);
                });
            }
        };
    }
]);