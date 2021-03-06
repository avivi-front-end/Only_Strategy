'use strict';
if(!window.console) window.console = {};
if(!window.console.memory) window.console.memory = function() {};
if(!window.console.debug) window.console.debug = function() {};
if(!window.console.error) window.console.error = function() {};
if(!window.console.info) window.console.info = function() {};
if(!window.console.log) window.console.log = function() {};

// sticky footer
//-----------------------------------------------------------------------------
if(!Modernizr.flexbox) {
  (function() {
    var
      $pageWrapper = $('#page-wrapper'),
      $pageBody = $('#page-body'),
      noFlexboxStickyFooter = function() {
        $pageBody.height('auto');
        if($pageBody.height() + $('#header').outerHeight() + $('#footer').outerHeight() < $(window).height()) {
          $pageBody.height($(window).height() - $('#header').outerHeight() - $('#footer').outerHeight());
        } else {
          $pageWrapper.height('auto');
        }
      };
    $(window).on('load resize', noFlexboxStickyFooter);
  })();
}
if(ieDetector.ieVersion == 10 || ieDetector.ieVersion == 11) {
  (function(){
    var
      $pageWrapper = $('#page-wrapper'),
      $pageBody = $('#page-body'),
      ieFlexboxFix = function() {
        if($pageBody.addClass('flex-none').height() + $('#header').outerHeight() + $('#footer').outerHeight() < $(window).height()) {
          $pageWrapper.height($(window).height());
          $pageBody.removeClass('flex-none');
        } else {
          $pageWrapper.height('auto');
        }
      };
    ieFlexboxFix();
    $(window).on('load resize', ieFlexboxFix);
  })();
}

var real_slider_option = {
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: false,
        fade: true,
        prevArrow: $('.js-slider-real-prev'),
        nextArrow: $('.js-slider-real-next'),
        speed: 500
    };


$(function() {
    // placeholder
    //-----------------------------------------------------------------------------
    $('input[placeholder], textarea[placeholder]').placeholder();

    $('.js-slider-real').slick(real_slider_option);
    var realSliderLength = $('.real-slider__item').length;
    $('.js-real-slider-all').text(realSliderLength);
    $('.js-real-slider-curent').text(1);
    $('.js-slider-real').on('beforeChange', function(event, slick, currentSlide, nextSlide){
        $('.js-real-slider-curent').text(nextSlide+1);
    });

});
