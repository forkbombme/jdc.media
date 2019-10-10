/*
 Theme Name: Synergy - Creative HTML5 Responsive Template
 Theme URL: http://nasfactor.com/themes/synergy/
 Author: nasirwd
 Author URI: http://nasfactor.com/
 Description: Synergy - Creative HTML5 Responsive Template
 Version: 1.0
 */

/*=======================================================================
 [Table of contents]
 =========================================================================
 [01] Revluation Slider
 [02] Home carowsel
 [03] Team Page Twitter Feed
 [04] Testimonial carowsel
 [05] about approachContent
 [06] Fun Fact
 [07] about awards
 [08] Fillter
 [09] Journal Load MOre
 [10] Comment Scroll
 [11] Contact Map
 [12] Animation Menu
 [13] Mobile Menu
 [14] Button Qty
 [15] Preloader
 [16] Payment Accourdion
 [17] why choose Slide
 [18] mScroll
 [19] Fixed Header
 [20] Color Preset
 
 
 ==========================================================================*/


(function ($) {
    'use strict';

    //=========================
    // Revluation Slider
    //=========================
    if ($(".sliderSection").length > 0)
    {
        $('.revSlider').revolution({
            delay: 8000,
            startwidth: 1170,
            startheight: 700,
            startWithSlide: 0,
            fullScreenAlignForce: "off",
            navigationType: "bullet",
            navigationArrows: "on",
            navigationStyle: "round",
            touchenabled: "on",
            onHoverStop: "on",
            navOffsetHorizontal: 0,
            navOffsetVertical: 20,
            shadow: 0,
            fullWidth: "on",
            fullScreen: "on",
            navigationVOffset: 35
        });
    }
    ;

    //=========================
    // Home carowsel
    //=========================
    var client_slider = $('#client_slider');
    if (client_slider.length > 0) {
        client_slider.owlCarousel({
            items: 5,
            loop: true,
            nav: false,
            dots: false,
            responsiveClass: true,
            responsive: {
                0: {
                    items: 1
                },
                640: {
                    items: 3
                },
                1000: {
                    items: 5
                }
            }
        });
    }
    ;
    //=========================
    // Team Page Twitter Feed
    //=========================
    var twitterfeed = $(".twitterfeed");
    if (twitterfeed.length > 0) {
        twitterfeed.owlCarousel({
            items: 1,
            loop: true,
            nav: false,
            dots: false,
            responsiveClass: true,
            responsive: {
                0: {
                    items: 1
                },
                640: {
                    items: 1
                },
                1000: {
                    items: 1
                }
            }
        });
    }
    ;


    //=========================
    // Testimonial carowsel
    //=========================
    var testimonialSlider = $('#testimonialSlider');
    if (testimonialSlider.length > 0) {
        testimonialSlider.owlCarousel({
            items: 1,
            loop: true,
            nav: false,
            dots: true
        });
    }
    ;

    //=========================
    // about approachContent
    //=========================
    var testmonialcaro = $('#testmonialcaro');
    if (testmonialcaro.length > 0) {
        testmonialcaro.owlCarousel({
            items: 1,
            loop: true,
            nav: false,
            dots: true
        });
    }
    ;


    //========================================================
    // Fun Fact
    //========================================================
    var skl = true;
    $('.funfactsSec, .funfactsSec2').appear();
    $('.funfactsSec, .funfactsSec2').on('appear', function () {
        if (skl)
        {
            $('.counting').each(function () {
                var $this = $(this);
                jQuery({Counter: 0}).animate({Counter: $this.attr('data-counter')}, {
                    duration: 6000,
                    easing: 'swing',
                    step: function () {
                        var num = Math.ceil(this.Counter).toString();
                        if (Number(num) > 999) {
                            while (/(\d+)(\d{3})/.test(num)) {
                                num = num.replace(/(\d+)(\d{3})/, '<span class="countSpan">' + '$1' + ',</span>' + '$2');
                            }
                        }
                        $this.html(num);
                    }
                });
            });
            skl = false;
        }
    });


    //=========================
    // about awards
    //=========================
    var Awards_area = $('#Awards_area');
    if (Awards_area.length > 0) {
        Awards_area.owlCarousel({
            items: 4,
            loop: true,
            nav: false,
            dots: false,
            responsiveClass: true,
            responsive: {
                0: {
                    items: 1
                },
                640: {
                    items: 3
                },
                1000: {
                    items: 4
                }
            }
        });
    }
    ;

    /*==========================================================================
     // Fillter
     =========================================================================*/
    var filterCont = $('.filterCont');
    if (filterCont.length > 0) {
        $('.filterCont').themeWar();
    }
    var journalPosts = $('.journalPosts');
    if (journalPosts.length > 0) {
        journalPosts.themeWar();
    }

    /*==========================================================================
     // Journal Load MOre
     =========================================================================*/
    var addMorePost = $('#addMorePost')
    if (addMorePost.length > 0)
    {
        addMorePost.on('click', function ()
        {
            var $this = $(this);
            $this.addClass('carousel_active');
            var filename = $this.attr('data-filename');
            var append_div = $this.attr('data-append');
            setTimeout(function () {
                $.get(filename, function (response) {
                    $("." + append_div).append(response);
                    $this.removeClass('carousel_active');
                });
            }, 3000);

        });
    }

    /*==========================================================================
     //Comment Scroll
     =========================================================================*/
    var jon_comment = $('.jon_comment'),
            scrolltoDown = $('.scrolltoDown > a')
    jon_comment.on('click', function () {
        $('html, body').animate({scrollTop: $(this.hash).offset().top - 65}, 1000);
        return false;
    });
    scrolltoDown.on('click', function () {
        $('html, body').animate({scrollTop: $(this.hash).offset().top - 65}, 1000);
        return false;
    });


    /*==========================================================================
     // Google Map
     =========================================================================*/
    if ($("#map").length > 0)
    {
        var map;

        map = new GMaps({
            el: "#map",
            lat: 39.966528,
            lng: -75.158284,
            scrollwheel: false,
            draggable: false,
            zoom: 17,
            zoomControl: true,
            panControl: false,
            streetViewControl: false,
            mapTypeControl: false,
            overviewMapControl: false,
            clickable: false,
        });
        var image = "";
        map.addMarker({
            lat: 39.966528,
            lng: -75.158284,
            icon: "images/marker.png",
            animation: google.maps.Animation.DROP,
            verticalAlign: "bottom",
            horizontalAlign: "center",
            backgroundColor: "#d3cfcf"
        });
        var styles = [
            {
                "featureType": "road",
                "stylers": [
                    {"color": "#ffffff"}
                ]
            }, {
                "featureType": "water",
                "stylers": [
                    {"color": "#f2f2f2"}
                ]
            }, {
                "featureType": "landscape",
                "stylers": [
                    {"color": "#f2f2f2"}
                ]
            }, {
                "elementType": "labels.text.fill",
                "stylers": [
                    {"color": "#2d2d2d"}
                ]
            }, {
                "featureType": "poi",
                "stylers": [
                    {"color": "#f2f2f2"}
                ]
            }, {
                "elementType": "labels.text",
                "stylers": [
                    {"saturation": 1},
                    {"weight": 0.1},
                    {"color": "#b1b1b1"}
                ]
            }

        ];
        map.addStyle({
            styledMapName: "Styled Map",
            styles: styles,
            mapTypeId: "map_style"
        });

        map.setStyle("map_style");
    }

    /*==========================================================================
     // Animation Menu
     =========================================================================*/
    function menu_toggle($this) {
        $this.toggleClass('active');
        $this.parent().parent().toggleClass('menu_open');
        $('.mainNav ul.sub-menu').slideUp('slow');
        return false;
    }
    if ($('.menu_toggler').length > 0) {
        $('.menu_toggler').on('click', function () {
            menu_toggle($(this));
        });
    }
    $(document).mouseup(function (e) {
        var container = $(".header_01");
        if (!container.is(e.target) && container.has(e.target).length === 0)
        {
            if ($('.menu_open').length > 0) {
                menu_toggle($('.menu_toggler'));
            }
        }
    });
    $(".mainNav ul li.has-menu-items > a").on('click', function () {
        $(this).parent().toggleClass('active');
        $(this).parent().children('.sub-menu').slideToggle('slow');
        return false;
    });

    /*==========================================================================
     // Mobile Menu
     =========================================================================*/
    if ($('.mobile_menu').length > 0) {
        $('.mobile_menu').on('click', function () {
            $(this).toggleClass('active');
            $('.mobNav > ul, .mainNav2 > ul').slideToggle();
        });
        $(".mobNav li.has-menu-items > a").on('click', function () {
            $(this).parent().toggleClass('active');
            $(this).parent().children('.sub-menu').slideToggle('slow');
            return false;
        });
        if ($(window).width() < 990) {
            $(".mainNav2 li.has-menu-items > a").on('click', function () {
                $(this).parent().toggleClass('active');
                $(this).parent().children('.sub-menu').slideToggle('slow');
                return false;
            });
        }
    }


    /*==========================================================================
     // Button Qty
     =========================================================================*/
    if ($(".qtyBtn").length > 0)
    {
        $(".btnMinus").on('click', function () {
            var vals = parseInt($(this).next(".carqty").val(), 10);

            if (vals > 0)
            {
                vals -= 1;
                $(this).next(".carqty").val(vals);
            } else
            {
                $(this).next(".carqty").val(vals);
            }
            return false;
        });
        $(".btnPlus").on('click', function () {
            var vals = parseInt($(this).prev(".carqty").val(), 10);
            vals += 1;
            $(this).prev(".carqty").val(vals);
            return false;
        });
    }

    /*==========================================================================
     // Preloader
     =========================================================================*/
    $(window).load(function () {
        if ($('.preloader').length > 0) {
            $('.preloader').delay(800).fadeOut('slow');
        }
    });

    //=======================================================
    // Payment Accourdion
    //=======================================================
    if ($(".wc_payment_methods").length > 0)
    {
        $(".wc_payment_methods li").each(function () {
            $('input[type="radio"]', this).on('click', function (e) {
                var ids = $(this).attr('id');
                if ($('div.' + ids).hasClass('visibales'))
                {

                } else
                {
                    $(".payment_box").removeClass('visibales');
                    $(".payment_box").slideUp('fast');
                    $('div.' + ids).slideDown('fast').addClass('visibales');
                }
            });
        });
    }

    //=======================================================
    // why choose Slide
    //=======================================================
    if ($('#choooseusSlide').length > 0) {
        $("#choooseusSlide").owlCarousel({
            items: 1,
            loop: true,
            nav: false,
            dots: true
        });
    }

    //=======================================================
    // mScroll
    //=======================================================
    $(window).on("load", function () {
        $(".mainNav").mCustomScrollbar();
    });

    //=======================================================
    // Fixed Header
    //=======================================================
    $(window).on('scroll', function () {
        if ($(window).scrollTop() > 40)
        {
            $("header").addClass('fixedHeader');
        } else
        {
            $("header").removeClass('fixedHeader');
        }
    });

    //=======================================================
    // Contact Form
    //=======================================================
    if ($("#contactForm").length > 0)
    {
        $("#contactForm").on('submit', function (e) {
            e.preventDefault();
            $("#con_submit").html('Processsing...<span></span>');
            var con_name, con_email, con_phone, con_company, con_message;

            if ($("#con_name").length > 0) {
                var con_name = $("#con_name").val();
            }
            if ($("#con_email").length > 0) {
                var con_email = $("#con_email").val();
            }
            if ($("#con_phone").length > 0) {
                var con_phone = $("#con_phone").val();
            }
            if ($("#con_company").length > 0) {
                var con_company = $("#con_company").val();
            }
            if ($("#con_message").length > 0) {
                var con_message = $("#con_message").val();
            }


            var required = 0;
            $(".required", this).each(function () {
                if ($(this).val() == '')
                {
                    $(this).addClass('reqError');
                    $(this).parent().append('<span> Required Field</span>');
                    required += 1;
                } else
                {
                    if ($(this).hasClass('reqError'))
                    {
                        $(this).removeClass('reqError');
                        if (required > 0)
                        {
                            required -= 1;
                        }
                    }
                }
            });
            if (required === 0)
            {
                $.ajax({
                    type: "POST",
                    url: 'php/mail.php',
                    data: {con_name: con_name, con_email: con_email, con_phone: con_phone, con_company: con_company, con_message: con_message},
                    success: function (data)
                    {
                        $("#con_submit").html('Done! <span></span>');
                        $("#contactForm input, #contactForm textarea").val('');

                        $(".contactSuccess").fadeIn('slow');
                        setTimeout(function () {
                            $(".contactSuccess").fadeOut('slow');
                        }, 2500);

                    }
                });
            } else
            {
                $("#con_submit").html('Failed! <span></span>');
            }

        });

        $(".required").on('keyup', function () {
            $(this).parent().find('span').remove('span');
            $(this).removeClass('reqError');
        });
    }

    //=======================================================
    // Color Preset
    //=======================================================
    if ($(".colorPreset").length > 0)
    {
        var switchs = true;
        $(".switchButton").on('click', function (e) {
            e.preventDefault();
            if (switchs)
            {
                $(this).addClass('active');
                $(".colorPreset").animate({'right': '0px'}, 400);
                switchs = false;
            } else
            {
                $(this).removeClass('active');
                $(".colorPreset").animate({'right': '-250px'}, 400);
                switchs = true;
            }
        });
        $(".colorSwitch a").on('click', function (e) {
            e.preventDefault();
            var color = $(this).attr('href');
            $(".colorSwitch a").removeClass('active');
            $(this).addClass('active');
            $("#colorChem").attr('href', 'css/lay_colors/' + color + '.css');
			$(".scrolltoDown .hoverImg img").attr('src', 'css/lay_colors/icon/' + color + '.png');
        });
    };



})(jQuery);
