jQuery.noConflict();
jQuery(document).ready(function($) {

    "use strict";
    if (dttheme_urls.loadingbar === "enable") {
        Pace.on("done", function() {
            $(".loader").fadeOut(500);
            $(".pace").remove();
        });
    }



    if ($('.dt-sc-icon-box-type9').length) {
        setTimeout(function() {
            $('.dt-sc-icon-box-type9').each(function() {
                $(this).find('.icon-wrapper').css('height', $(this).find('.icon-content').outerHeight(true));
            });
        }, 1000);
    }

    if ($('ul.dt-sc-tabs-vertical-frame').length) {
        $('ul.dt-sc-tabs-vertical-frame').each(function() {
            $(this).css('min-height', $(this).height());
        });
    }

    if ($('ul.dt-sc-tabs-vertical').length) {
        $('ul.dt-sc-tabs-vertical').each(function() {
            $(this).css('min-height', $(this).height());
        });
    }

    // <select>	
    $("select").each(function() {
        if ($(this).css('display') != 'none') {
            $(this).wrap('<div class="selection-box"></div>');
        }
    });

    //To Top...
    $().UItoTop({ easingType: 'easeOutQuart' });

    function validateEmail($email) {
        var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
        return emailReg.test($email);
    }

    $("#enviarMail").click(function(event) {

        var name = $("#cli-name").val();
        var phone = $("#cli-phone").val();
        var email = $("#cli-email").val();
        var datepicker = $("#datepicker").val();

        if (name == "") {
            alert("Please enter your name.");
            return false
        }
        if (phone == "") {
            alert("Please enter your phone number.");
            return false
        }

        if (email == "") {
            alert("Please enter your email address.");
            return false
        }

        if (!validateEmail(email)) {
            alert("Not a valid email address.");
            return false
        }

        if (datepicker == "") {
            alert("Please enter a date.");
            return false
        }


        /*$.ajax({
            url: dttheme_urls.ajaxurl,
            method: 'POST',
            data: { cli_name: name, cli_phone: phone, cli_email: email, cli_date: datepicker },
            success: function(mensaje) {
                console.log(mensaje);
                alert("Your appointment has been sent");
                $("#cli-name").val("");
                $("#cli-phone").val("");
                $("#cli-email").val("");
                $("#datepicker").val("");
            }
        });*/

        $.ajax({
                url: dttheme_urls.ajaxurl,
                method: 'POST',
                data: { cli_name: name, cli_phone: phone, cli_email: email, cli_date: datepicker }
            })
            .done(function(data) {
                console.log(data);
                alert("Your appointment has been sent");
                $("#cli-name").val("");
                $("#cli-phone").val("");
                $("#cli-email").val("");
                $("#datepicker").val("");
            })
            .always(function() {
                alert("Your appointment has been sent");
                $("#cli-name").val("");
                $("#cli-phone").val("");
                $("#cli-email").val("");
                $("#datepicker").val("");
            });

    });



    //Scroll Animation
    function scrollToAnchor(aid) {
        var aTag = $("div[name='" + aid + "']");
        if ($(window).innerWidth() < 768)
            $('html,body').animate({ scrollTop: aTag.offset().top }, 'slow');
        else
            $('html,body').animate({ scrollTop: aTag.offset().top - 100 }, 'slow');

    }

    $("#homeMenu").click(function(event) {
        event.preventDefault();
        $('html, body').animate({ scrollTop: 0 }, 1200, 'easeOutQuart');
    });

    $("#servicesMenu").click(function(event) {
        event.preventDefault();
        scrollToAnchor('servicesSection');
    });

    $("#facilitiesMenu").click(function(event) {
        event.preventDefault();
        scrollToAnchor('facilitiesSection');
    });

    $("#aboutMenu").click(function(event) {
        event.preventDefault();
        scrollToAnchor('aboutSection');
    });

    $("#appointmentMenu").click(function(event) {
        event.preventDefault();
        scrollToAnchor('appointmentSection');
    });

    $("#wwoMenu").click(function(event) {
        event.preventDefault();
        scrollToAnchor('wwoSection');
    });

    $("#reviewsMenu").click(function(event) {
        event.preventDefault();
        scrollToAnchor('reviewsSection');
    });

    $("#mapMenu").click(function(event) {
        event.preventDefault();
        scrollToAnchor('mapSection');
    });

    $("#contactMenu").click(function(event) {
        event.preventDefault();
        scrollToAnchor('contactSection');
    });

    $('.activity-type-tabs > ul >li:first').addClass('selected');
    $('.dir-form > .item-list-tabs > ul > li:first').addClass('selected');

    //Menu...
    function dentalMegaMenu() {
        var screenWidth = $(document).width(),
            containerWidth = $("#header .container").width(),
            containerMinuScreen = (screenWidth - containerWidth) / 2;
        if (containerWidth == screenWidth) {

            $("li.menu-item-megamenu-parent .megamenu-child-container").each(function() {

                var ParentLeftPosition = $(this).parent("li.menu-item-megamenu-parent").offset().left,
                    MegaMenuChildContainerWidth = $(this).width();

                if ((ParentLeftPosition + MegaMenuChildContainerWidth) > screenWidth) {
                    var SwMinuOffset = screenWidth - ParentLeftPosition;
                    var marginFromLeft = MegaMenuChildContainerWidth - SwMinuOffset;
                    var marginFromLeftActual = (marginFromLeft) + 25;
                    var marginLeftFromScreen = "-" + marginFromLeftActual + "px";
                    $(this).css('left', marginLeftFromScreen);
                }

            });
        } else {

            $("li.menu-item-megamenu-parent .megamenu-child-container").each(function() {
                var ParentLeftPosition = $(this).parent("li.menu-item-megamenu-parent").offset().left,
                    MegaMenuChildContainerWidth = $(this).width();

                if ((ParentLeftPosition + MegaMenuChildContainerWidth) > containerWidth) {
                    var marginFromLeft = (ParentLeftPosition + MegaMenuChildContainerWidth) - screenWidth;
                    var marginLeftFromContainer = containerMinuScreen + marginFromLeft + 20;

                    if (MegaMenuChildContainerWidth > containerWidth) {
                        var MegaMinuContainer = ((MegaMenuChildContainerWidth - containerWidth) / 2) + 10;
                        var marginLeftFromContainerVal = marginLeftFromContainer - MegaMinuContainer;
                        marginLeftFromContainerVal = "-" + marginLeftFromContainerVal + "px";
                        $(this).css('left', marginLeftFromContainerVal);
                    } else {
                        marginLeftFromContainer = "-" + marginLeftFromContainer + "px";
                        $(this).css('left', marginLeftFromContainer);
                    }
                }

            });
        }
    }

    dentalMegaMenu();

    $(window).smartresize(function() {
        dentalMegaMenu();
    });

    //Menu Hover Animation...
    function dentalMenuHover() {

        $("li.menu-item-depth-0,li.menu-item-simple-parent ul li").hover(function() {
            //mouseover 
            if ($(this).find(".megamenu-child-container").length) {
                $(this).find(".megamenu-child-container").stop().fadeIn('fast');
            } else {
                $(this).find("> ul.sub-menu").stop().fadeIn('fast');
            }

        }, function() {
            //mouseout
            if ($(this).find(".megamenu-child-container").length) {
                $(this).find(".megamenu-child-container").stop(true, true).hide();
            } else {
                $(this).find('> ul.sub-menu').stop(true, true).hide();
            }
        });
    } //Menu Hover End

    $("div.dt-video-wrap").fitVids();

    var isMobile = (navigator.userAgent.match(/iPhone/i)) || (navigator.userAgent.match(/iPod/i)) || (navigator.userAgent.match(/iPad/i)) || (navigator.userAgent.match(/Android/i)) || (navigator.userAgent.match(/Blackberry/i)) || (navigator.userAgent.match(/Windows Phone/i) || navigator.platform.match(/(Mac|iPhone|iPod|iPad)/i)) ? true : false;

    var currentWidth = window.innerWidth || document.documentElement.clientWidth;

    if (typeof dttheme_urls !== 'undefined') {

        if (dttheme_urls.nicescroll == "enable") {
            $("html").niceScroll({
                zindex: 999999,
                cursorborder: "1px solid #424242"
            });
        }

        //Sticky Navigation
        if (isMobile && dttheme_urls.mobilestickynav == "enable") {
            $(dttheme_urls.stickyele).sticky({ topSpacing: 0 });
        }

        var $body = jQuery('body');
        if (!$body.hasClass("left-header") && !$body.hasClass("left-header-boxed") && !$body.hasClass("creative-header") && !$body.hasClass("overlay-header") && !$body.hasClass("header-on-slider")) {
            if (dttheme_urls.stickynav === "enable" && currentWidth > 767) {
                $(dttheme_urls.stickyele).sticky({ topSpacing: 0 });
            }
        }
    }

    //Mobile Menu
    $("#dt-menu-toggle").click(function(event) {
        event.preventDefault();

        var $menu = $("nav#main-menu").find("ul.menu:first");
        $menu.slideToggle(function() {
            $menu.css('overflow', 'visible');
            $menu.toggleClass('menu-toggle-open');
        });

        var $right = $("nav#main-menu").find("ul.menu-right");
        if ($right.length) {
            $right.slideToggle(function() {
                $right.css('overflow', 'visible');
                $right.toggleClass('menu-toggle-open');
            });
        }
    });

    $(".dt-menu-expand").click(function() {
        if ($(this).hasClass("dt-mean-clicked")) {
            $(this).text("+");
            if ($(this).prev('ul').length) {
                $(this).prev('ul').slideUp(300);
            } else {
                $(this).prev('.megamenu-child-container').find('ul:first').slideUp(300);
            }
        } else {
            $(this).text("-");
            if ($(this).prev('ul').length) {
                $(this).prev('ul').slideDown(300);
            } else {
                $(this).prev('.megamenu-child-container').find('ul:first').slideDown(300);
            }
        }

        $(this).toggleClass("dt-mean-clicked");
        return false;
    });

    currentWidth = window.innerWidth || document.documentElement.clientWidth;
    if (currentWidth > 767) {
        dentalMenuHover();
    }
    //Mobile Menu End	

    $('.dt-search-icon').on('click', function(e) {
        e.stopPropagation();
        $('#header .top-menu-search-container').toggleClass('show-top-menu-search');
    });

    //Portfolio single
    if ($(".dt-portfolio-single-slider").find("li").length > 1) {
        $(".dt-portfolio-single-slider").bxSlider({ auto: false, video: true, useCSS: false, pagerCustom: '#bx-pager', autoHover: true, adaptiveHeight: true, controls: false });
    }

    var $pphoto = $('a[data-gal^="prettyPhoto[gallery]"]');
    if ($pphoto.length) {
        $pphoto.prettyPhoto({
            hook: 'data-gal',
            show_title: false,
            deeplinking: false,
            social_tools: false,
            default_width: 500,
            default_height: 344
        });
    }

    $('.downcount').each(function() {
        var el = $(this);
        el.downCount({
            date: el.attr('data-date'),
            offset: el.attr('data-offset')
        });
    });

    $('p:empty').each(function() {
        $(this).next('br').remove();
        $(this).remove();
    });

    // Last word coloring
    $('.footer-widgets h3.widgettitle, .secondary-sidebar .type19 h3.widgettitle').each(function() {
        var cthis = $(this);
        var ctext = $.trim(cthis.text());
        var cwords = ctext.split(/\s+/);
        var lastWord = cwords.pop();
        if (cwords.length > 0) {
            cwords.push('<span class="last-word">' + lastWord + '</span>');
            cthis.html(cwords.join(' '));
        }
    });

    if (currentWidth > 767) {
        if ($('#primary').hasClass('with-both-sidebar')) {
            if (($('#secondary-left').is(':empty') && $('#secondary-right').is(':empty'))) {
                $('#primary').css({ 'width': '100%', 'margin': 0 });
            }
        } else if ($('#primary').hasClass('with-left-sidebar')) {
            if ($('#secondary-left').is(':empty')) {
                $('#primary').css({ 'width': '100%', 'margin': 0 });
            }
        } else if ($('#primary').hasClass('with-right-sidebar')) {
            if ($('#secondary-right').is(':empty')) {
                $('#primary').css({ 'width': '100%', 'margin': 0 });
            }
        }
    }

    $('.dt-sc-contact-details-on-map a.map-switch-icon').on("click", function() {
        $(this).parents('.dt-sc-contact-details-on-map').toggleClass('hide-overlay');
        $('.dt-sc-map-overlay').toggle();
        return false;
    });

    $('.dt-sc-contact-details-on-map a.switch-icon').on("click", function() {
        $(this).parents('.dt-sc-contact-details-on-map').addClass('hide-overlay');
        $('.dt-sc-map-overlay').toggle();
        $('.back-to-contact').toggle();
        return false;
    });

    $('.dt-sc-contact-details-on-map a.back-to-contact').on("click", function() {
        $(this).parents('.dt-sc-contact-details-on-map').removeClass('hide-overlay');
        $('.dt-sc-map-overlay').toggle();
        $(this).toggle();
        return false;
    });

    //Smart Resize Start
    $(window).smartresize(function() {
        //Blog Template
        if ($(".apply-isotope").length) {
            $(".apply-isotope").isotope({ itemSelector: '.column', transformsEnabled: false, masonry: { gutter: 20 } });
        }

        //Portfolio Template
        if ($('.dt-sc-portfolio-container').length) {
            var $width = $('.dt-sc-portfolio-container').hasClass("no-space") ? 0 : 20;
            $('.dt-sc-portfolio-container').css({ overflow: 'hidden' }).isotope({ itemSelector: '.column', masonry: { gutter: $width } });
        }
    });

    // Window Load Start
    $(window).load(function() {

        var portfolioHeight = $('.dt-sc-portfolio-wrapper .portfolio:first').height();
        $('.icon-link-title').css('height', portfolioHeight + 'px');

        //Portfolio Template : Sorting
        var $container = $('.dt-sc-portfolio-container');
        if ($container.length) {
            var $width = $container.hasClass("no-space") ? 0 : 20;

            $container.isotope({
                filter: '*',
                masonry: { gutter: $width },
                animationOptions: { duration: 750, easing: 'linear', queue: false }
            });
        } //Isotope End

        if ($("div.dt-sc-portfolio-sorting").length) {

            $("div.dt-sc-portfolio-sorting a").on('click', function() {
                $("div.dt-sc-portfolio-sorting a").removeClass("active-sort");
                var $width = $container.hasClass("no-space") ? 0 : 20;
                var selector = $(this).attr('data-filter');
                $(this).addClass("active-sort");

                $('.dt-sc-portfolio-container').isotope({
                    filter: selector,
                    masonry: { gutter: $width },
                    animationOptions: { duration: 750, easing: 'linear', queue: false }
                });

                return false;
            });
        }
        //Portfolio Template : Sorting End

        //Gallery Post Slider
        if (($("ul.entry-gallery-post-slider").length) && ($("ul.entry-gallery-post-slider li").length > 1)) {
            $("ul.entry-gallery-post-slider").bxSlider({ auto: false, video: true, useCSS: false, pager: '', autoHover: true, adaptiveHeight: true });
        }

        //Blog Template
        if ($(".apply-isotope").length) {
            $(".apply-isotope").isotope({ itemSelector: '.column', transformsEnabled: false, masonry: { gutter: 20 } });
        }
        //Blog Template End
    });

    $(".dt-like-this").click(function() {

        var el = jQuery(this);

        if (el.hasClass('liked')) {
            return false;
        }

        var post = {
            action: 'dental_like_love',
            post_id: el.attr('data-id')
        };

        $.post(dttheme_urls.ajaxurl, post, function(data) {
            el.find('span').html(data);
            el.addClass('liked');
        });
        return false;
    });

    if ($('body').hasClass('page-template-tpl-onepage')) {
        $('nav#main-menu ul.menu').visualNav({
            selectedClass: 'current_page_item',
            externalLinks: 'external',
            useHash: false
        });
        $('nav#main-menu ul.menu-left').visualNav({
            selectedClass: 'current_page_item',
            externalLinks: 'external',
            useHash: false
        });
        $('nav#main-menu ul.menu-right').visualNav({
            selectedClass: 'current_page_item',
            externalLinks: 'external',
            useHash: false
        });
        $('.left-header nav#main-menu ul.menu, .left-header-boxed nav#main-menu ul.menu, .left-header-creative nav#main-menu ul.menu').visualNav({
            selectedClass: 'current_page_item',
            externalLinks: 'external',
            useHash: false
        });
    } else {
        if ($('nav#main-menu ul.menu li a[href^="#"]').length) {
            $('nav#main-menu ul.menu li a[href^="#"]').on('click', function(e) {
                $(location).attr('href', dttheme_urls.url + '/' + $(this).attr('href'));
            });
        }
    }

    if ($('body').hasClass('left-header-creative')) {
        $('#header-wrapper').simpleSidebar({
            opener: '#toggle-sidebar',
            wrapper: '#main',
            animation: {
                easing: "easeOutQuint"
            },
            sidebar: {
                align: 'left',
                width: 260
            },
            sbWrapper: {
                display: true
            }
        });

        $('#toggle-sidebar, div[data-simplesidebar="mask"]').click(function() {
            $('#toggle-sidebar').toggleClass('close-icon');
        });
    }
    $('input, textarea').placeholder();

    if ($(".dt-sc-scroll-wrapper").length) {
        var scroll_wrapper = $(".dt-sc-scroll-wrapper").niceScroll({ cursorcolor: "#ffffff", cursorwidth: "2px" });
        scroll_wrapper.rail.addClass('dt-sc-skin');
    }

    $('a.dt-sc-smooth-link').click(function() {
        var str = $.attr(this, 'href');
        var n = str.indexOf("#");
        var t = "";
        if (n >= 0) {
            t = str.substr(n);
            $('html, body').animate({
                scrollTop: $(t).offset().top - 70
            }, 500);
            return false;
        } else {
            return true;
        }
    });
});

var jq = jQuery.noConflict();
jq(document).ready(function($) {
    jq(document).on("scroll", function() {

        // Settings
        var exceptClass = "";
        var current = "current-menu-item current_page_item";
        var scrollingOffsetBottom = 0.4;

        var container = jq("ul[class='menu']");
        var menu_items_li = jq(container).children("li");
        var menu_items_a = jq(container).find("a");
        var scrolled = false;

        if (scrolled) return;

        function getPxFromPercent(percent, docHeight) {
            if (percent < 1) {
                return (docHeight / 100) * ((percent < 1) ? percent * 100 : percent);
            }
            return percent;
        }

        setTimeout(function() {
            var documentScroll = jq(this).scrollTop();
            var docHeight = jq(window).height();
            var doc_view = (documentScroll + docHeight);

            // Bottom offset
            var bottom_offset = getPxFromPercent(scrollingOffsetBottom, docHeight);

            for (var i = 0; i < menu_items_a.length; i++) {

                var item_pos = jq("div[name='" + menu_items_a.eq(i).attr("href") + "']").offset().top;

                if (doc_view > (item_pos + bottom_offset)) {
                    menu_items_li.removeClass(current);
                    menu_items_li.eq(i).addClass(current);
                }

            }
            scrolled = false;

        }, 50);
        scrolled = true;
    }).trigger('scroll');
});

(function() {

    function dentaltoggleOverlay() {
        if (classie.has(overlay, 'open')) {
            classie.remove(overlay, 'open');
            classie.add(overlay, 'close');
            var onEndTransitionFn = function(ev) {
                if (support.transitions) {
                    if (ev.propertyName !== 'visibility') return;
                    this.removeEventListener(transEndEventName, onEndTransitionFn);
                }
                classie.remove(overlay, 'close');
            };
            if (support.transitions) {
                overlay.addEventListener(transEndEventName, onEndTransitionFn);
            } else {
                onEndTransitionFn();
            }
        } else if (!classie.has(overlay, 'close')) {
            classie.add(overlay, 'open');
        }
    }

    if (jQuery('div.overlay.overlay-hugeinc').length) {

        var triggerBttn = document.getElementById('trigger-overlay'),
            overlay = document.querySelector('div.overlay'),
            closeBttn = overlay.querySelector('div.overlay-close');
        transEndEventNames = {
                'WebkitTransition': 'webkitTransitionEnd',
                'MozTransition': 'transitionend',
                'OTransition': 'oTransitionEnd',
                'msTransition': 'MSTransitionEnd',
                'transition': 'transitionend'
            },
            transEndEventName = transEndEventNames[Modernizr.prefixed('transition')],
            support = { transitions: Modernizr.csstransitions };

        triggerBttn.addEventListener('click', dentaltoggleOverlay);
        closeBttn.addEventListener('click', dentaltoggleOverlay);
    }

})();

var $body = jQuery('body');
if (!$body.hasClass("left-header") && !$body.hasClass("left-header-boxed") && !$body.hasClass("creative-header") && !$body.hasClass("overlay-header") && $body.hasClass("header-on-slider")) {

    var didScroll;
    var lastScrollTop = 0;
    var delta = 5;
    var navbarHeight = jQuery('#header-wrapper header #main-header-wrapper').outerHeight();

    jQuery(window).scroll(function() {
        "use strict";
        didScroll = true;
    });

    setInterval(function() {
        "use strict";
        if (didScroll) {
            hasScrolled();
            didScroll = false;
        }
    }, 250);

    function hasScrolled() {
        var st = jQuery(this).scrollTop();

        if (Math.abs(lastScrollTop - st) <= delta) {}
        if (st > lastScrollTop && st > navbarHeight) {
            jQuery('#header-wrapper header #main-header-wrapper').removeClass('show').addClass('hide');
        } else {
            if (st + jQuery(window).height() < jQuery(document).height()) {
                jQuery('#header-wrapper header #main-header-wrapper').removeClass('hide').addClass('show');
            }
        }

        lastScrollTop = st;
    }
}