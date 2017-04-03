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

    $(document).on('click','.js-menu-show', function () {
        $('.header-menu').toggleClass('open');
    })

    $('.js-show-next').on('click', function () {
        $(this).toggleClass('show');
        $('.richagblock').toggleClass('show');
    });

    $('.js-show-bez-btn-no').on('click', function () {
        $('.js-show-bez-no').addClass('show');
        $('.js-show-bez-yes').removeClass('show');
    });

    $('.js-show-bez-btn-yes').on('click', function () {
        $('.js-show-bez-no').removeClass('show');
        $('.js-show-bez-yes').addClass('show');
    });

    $('.phone_mask').mask("+7 (000) 000-00-00", {placeholder: "+7 (000) 000-00-00"});

    $('.js_vakans').on('change',function(){
        var idShow = '#'+$('.js_vakans:checked').val();
        $('.undestend__item').fadeOut();
        $(idShow).fadeIn();
    });

    $('.js_vakans_text').on('change focus',function(){
        var idShow = '#sh6'
        $('.js_vakans:checked').prop('checked',false);
        $('.undestend__item').fadeOut();
        $(idShow).fadeIn();
    });

    $('form').each(function(){
        $(this).validate({
            rules: {
                name: {
                    required: true
                },
                phone: {
                    required: true
                },
            },
            messages: {
                name: {
                    required: 'Поле должно быть заполнено'
                },
                phone: {
                    required: 'Поле должно быть заполнено',
                    digits: 'Только цифры'
                },
            }
        });
    });
});

$(window).load(function(){
    setTimeout(function(){$('.richagblock').removeClass('show');}, 10);
});

$(document).on('click.modal', 'a[rel="modal:close"]', function(event) {
    // event.preventDefault();
    var modalBlock = $(this).parents('.modall');
    $('.modalbgblock').remove();
    modalBlock.find('.close-modal').remove();
    modalBlock.removeClass('show');
});

$(document).on('click.modal', '.modalbgblock', function(event) {
    event.preventDefault();
    var idHref = $(this).data('modalblock'),
        modalBlock = $(idHref);
    $('.modalbgblock').remove();
    modalBlock.find('.close-modal').remove();
    modalBlock.removeClass('show');
});

$(document).on('click.modal', 'a[rel="modal:open"]', function(event) {
    event.preventDefault();
    if ($('.modalbgblock').length > 0 ) {
        var idHref = $('.modalbgblock').data('modalblock'),
            modalBlock = $(idHref);

        $('.modalbgblock').remove();
        modalBlock.find('.close-modal').remove();
        modalBlock.removeClass('show');
    }
    var bgModal = $('<span class="modalbgblock overlay"></span>'),
        modalClose = $('<a href="#close-modal" rel="modal:close" class="modall__close close-modal"></a>'),
        idHref = $(this).attr('href'),
        formSend = $(this).data('formsend'),
        modalBlock = $(idHref);

    bgModal.data('modalblock',idHref);
    $('body').append(bgModal);
    modalBlock.append(modalClose);
    modalBlock.addClass('show');
});

$(document).on('submit','form', function (event) {
    event.preventDefault();
    if ($('.modalbgblock').length > 0 ) {
        var idHref = $('.modalbgblock').data('modalblock'),
            modalBlock = $(idHref);

        $('.modalbgblock').remove();
        modalBlock.find('.close-modal').remove();
        modalBlock.removeClass('show');
    }
    var bgModal = $('<span class="modalbgblock overlay"></span>'),
        modalClose = $('<a href="#close-modal" rel="modal:close" class="modall__close close-modal"></a>'),
        idHref = '#message',
        modalBlock = $(idHref);

    bgModal.data('modalblock',idHref);
    $('body').append(bgModal);
    modalBlock.append(modalClose);
    modalBlock.addClass('show');
    return false;
});

var anchors = (function() {
    $('.js-scroll-anchor').on('click', function(e) {
        e.preventDefault();
        var changePosition = 0;
        if ($.attr(this, 'href') == '#made-in') {
            changePosition = 75;
        }
        $('.header-menu').removeClass('open');
        $('html, body').animate({
            scrollTop: $($.attr(this, 'href')).offset().top - changePosition
        }, 500);
    });
})();
