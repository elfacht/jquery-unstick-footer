/* Unstick Footer 1.0.0 - A simple jQuery plugin to unstick sticky footers
 *
 * GitHub: https://github.com/elfacht/jquery-unstick-footer
 * Copyright (c) 2015 Martin Szymanski (http://www.elfacht.com)
 * Licensed under the MIT (http://www.opensource.org/licenses/mit-license.php)
 */
(function($) {

  'use strict';

  $.fn.unstickFooter = function(options) {

    /**
     * Default settings
     */
    var settings = $.extend({
      baseClass: 'unstf',
      trigger: '' // define the element that triggers the unsticking
    }, options);

    var $sticky = this,
        $trigger = $(settings.trigger);

    return this.each(function() {

      var placeholder = 'unstf__placeholder', // temporary and invisible placeholder
          triggerHeight = $trigger.outerHeight(), // get the height of the footer
          isStickyClass = 'is-sticky';

      /* Add the default plugin class */
      $sticky.addClass(settings.baseClass);

      $(window).scroll(function(){

        /* Get the positions of the footer in the DOM */
        var scrollBottom = $(window).scrollTop() + $(window).height(),
            scrollFooter = $(document).height() - triggerHeight;

        if (scrollBottom >= scrollFooter) {
          /* Remove sticky class if footer is not visible in viewport */
          $sticky.removeClass(isStickyClass);

          /* Remove the placeholder */
          $('.' + placeholder).remove();
        } else {
          /* Add sticky class if footer is visible in viewport */
          $sticky.addClass(isStickyClass);

          /* Remove the placeholder ... */
          $('.' + placeholder).remove();

          /* ... and create a new one */
          $trigger
            .before($('<div/>')
            .height($sticky.outerHeight())
            .addClass(placeholder));
        }
      });

    });

  }

}(jQuery));
