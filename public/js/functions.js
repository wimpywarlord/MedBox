var payload;
function convertHex(e, a) {
    return e = e.replace("#", ""), r = parseInt(e.substring(0, 2), 16), g = parseInt(e.substring(2, 4), 16), b = parseInt(e.substring(4, 6), 16), result = "rgba(" + r + ", " + g + ", " + b + ", " + a + ")", result
}! function(d) {
    "use strict";
    d(document).on("ready", function() {
        var e, a, s, t, i, l, o, n;
        c(), d("*[data-pattern-overlay-darkness-opacity]").each(function() {
                var e = d(this).data("pattern-overlay-darkness-opacity");
                d(this).css("background-color", convertHex("#000000", e))
            }), d("*[data-pattern-overlay-background-image]").each(function() {
                "none" == d(this).data("pattern-overlay-background-image") ? d(this).css("background-image", "none") : "yes" == d(this).data("pattern-overlay-background-image") && d(this).css("background-image")
            }), d("*[data-remove-pattern-overlay]").each(function() {
                "yes" == d(this).data("remove-pattern-overlay") && d(this).css("background", "none")
            }), d("*[data-bg-color]").each(function() {
                var e = d(this).data("bg-color");
                d(this).css("background-color", e)
            }), d("*[data-bg-color-opacity]").each(function() {
                var e = d(this).data("bg-color-opacity"),
                    a = d(this).css("background-color"),
                    s = a.replace("rgb", "rgba").replace(")", ", " + e + ")");
                d(this).css("background-color", s)
            }), d("*[data-bg-img]").each(function() {
                var e = d(this).data("bg-img");
                d(this).css("background-image", "url('" + e + "')")
            }), d("*[data-parallax-bg-img]").each(function() {
                var e = d(this).data("parallax-bg-img");
                d(this).css("background-image", "url('./images/files/parallax-bg/" + e + "')")
            }), h(), d(".img-bg").each(function() {
                var e = d(this),
                    a = e.find("img").attr("src");
                if (e.parent(".section-image").length) e.css("background-image", "url('" + a + "')");
                else {
                    e.prepend("<div class='bg-element'></div>");
                    var s = e.find(".bg-element");
                    s.css("background-image", "url('" + a + "')")
                }
                e.find("img").css({
                    opacity: 0,
                    visibility: "hidden"
                })
            }), d("#full-container").fitVids(), d(".video-background").each(function() {
                d(this).YTPlayer({
                    mute: !1,
                    autoPlay: !0,
                    opacity: 1,
                    containment: ".video-background",
                    showControls: !1,
                    startAt: 0,
                    addRaster: !0,
                    showYTLogo: !1,
                    stopMovieOnBlur: !1
                })
            }), d(".lightbox-img").magnificPopup({
                type: "image",
                gallery: {
                    enabled: !1
                },
                mainClass: "mfp-fade",
                removalDelay: 160,
                preloader: !1,
                fixedContentPos: !1
            }), d(".lightbox-gallery").magnificPopup({
                type: "image",
                gallery: {
                    enabled: !0
                },
                mainClass: "mfp-fade",
                removalDelay: 160,
                preloader: !1,
                fixedContentPos: !1
            }), d(".lightbox-iframe").magnificPopup({
                type: "iframe",
                mainClass: "mfp-fade",
                removalDelay: 160,
                preloader: !1,
                fixedContentPos: !1
            }), e = d(".header-bar.sticky"), a = e.height(), s = e ? a : 0, d(".scroll-to").on("click", function(e) {
                e.preventDefault();
                var a = d(this);
                d("html, body").stop().animate({
                    scrollTop: d(a.attr("href")).offset().top - s
                }, 1200, "easeInOutExpo")
            }), t = d(".banner-parallax"), i = t.children("img:first-child").attr("src"), t.prepend("<div class='bg-element'></div>"), t.find("> .bg-element").css("background-image", "url('" + i + "')").attr("data-stellar-background-ratio", .2), d(".parallax-section").each(function() {
                var e = d(this),
                    a = e.children("img:first-child").attr("src");
                e.prepend("<div class='bg-element'></div>");
                var s = e.find("> .bg-element");
                s.css("background-image", "url('" + a + "')").attr("data-stellar-background-ratio", .2)
            }), d(".slider-clients > .owl-carousel").owlCarousel({
                items: 6,
                rtl: u,
                autoplay: 3e3,
                autoplaySpeed: 500,
                autoplayTimeout: 3e3,
                dragEndSpeed: 350,
                autoplayHoverPause: !0,
                loop: !0,
                slideBy: 1,
                margin: 30,
                stagePadding: 0,
                nav: !1,
                dots: !1,
                navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
                responsive: {
                    0: {
                        items: 2
                    },
                    480: {
                        items: 3
                    },
                    768: {
                        items: 4
                    },
                    992: {
                        items: 5
                    },
                    1200: {
                        items: 6
                    }
                },
                autoHeight: !1,
                autoWidth: !1,
                navRewind: !0,
                center: !1,
                dotsEach: 1,
                dotData: !1,
                lazyLoad: !1,
                smartSpeed: 600,
                fluidSpeed: 5e3,
                navSpeed: 400,
                dotsSpeed: 400
            }), (l = d(".slider-boxes-features-1 > .owl-carousel")).on("initialized.owl.carousel", function(e) {
                var a = e.item.index,
                    s = d(".slider-boxes-features-1 > .owl-carousel .owl-item");
                r.hasClass("device-lg") || r.hasClass("device-md") ? s.eq(a + 1).addClass("highlighted") : (r.hasClass("device-sm") || r.hasClass("device-xs") || r.hasClass("device-xxs")) && s.eq(a).addClass("highlighted")
            }), l.on("resized.owl.carousel", function(e) {
                var a = e.item.index,
                    s = d(".slider-boxes-features-1 > .owl-carousel .owl-item");
                r.hasClass("device-lg") || r.hasClass("device-md") ? (s.removeClass("highlighted"), s.eq(a + 1).addClass("highlighted")) : (r.hasClass("device-sm") || r.hasClass("device-xs") || r.hasClass("device-xxs")) && (s.removeClass("highlighted"), s.eq(a).addClass("highlighted"))
            }), d(".slider-boxes-features-1 > .owl-carousel").on("translate.owl.carousel", function(e) {
                var a = e.item.index,
                    s = d(".slider-boxes-features-1 > .owl-carousel .owl-item");
                r.hasClass("device-lg") || r.hasClass("device-md") ? (s.removeClass("highlighted"), s.eq(a + 1).addClass("highlighted")) : (r.hasClass("device-sm") || r.hasClass("device-xs") || r.hasClass("device-xxs")) && (s.removeClass("highlighted"), s.eq(a).addClass("highlighted"))
            }), l.owlCarousel({
                rtl: u,
                autoplay: !1,
                autoplaySpeed: 500,
                autoplayTimeout: 5e3,
                dragEndSpeed: 350,
                autoplayHoverPause: !0,
                loop: !1,
                slideBy: 1,
                margin: 20,
                stagePadding: 0,
                nav: !1,
                dots: !1,
                navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
                responsive: {
                    0: {
                        items: 1
                    },
                    480: {
                        items: 1
                    },
                    600: {
                        items: 2
                    },
                    768: {
                        items: 2
                    },
                    1024: {
                        items: 3
                    }
                },
                autoHeight: !0,
                autoWidth: !1,
                navRewind: !0,
                center: !1,
                dotsEach: 1,
                dotData: !1,
                lazyLoad: !1,
                smartSpeed: 600,
                fluidSpeed: 5e3,
                navSpeed: 400,
                dotsSpeed: 400
            }), (o = d(".slider-boxes-features-2 > .owl-carousel")).on("initialized.owl.carousel", function(e) {
                var a = e.item.index,
                    s = d(".slider-boxes-features-2 > .owl-carousel .owl-item");
                r.hasClass("device-lg") || r.hasClass("device-md") ? s.eq(a + 1).addClass("highlighted") : (r.hasClass("device-sm") || r.hasClass("device-xs") || r.hasClass("device-xxs")) && s.eq(a).addClass("highlighted")
            }), o.on("resized.owl.carousel", function(e) {
                var a = e.item.index,
                    s = d(".slider-boxes-features-2 > .owl-carousel .owl-item");
                r.hasClass("device-lg") || r.hasClass("device-md") ? (s.removeClass("highlighted"), s.eq(a + 1).addClass("highlighted")) : (r.hasClass("device-sm") || r.hasClass("device-xs") || r.hasClass("device-xxs")) && (s.removeClass("highlighted"), s.eq(a).addClass("highlighted"))
            }), d(".slider-boxes-features-2 > .owl-carousel").on("translate.owl.carousel", function(e) {
                var a = e.item.index,
                    s = d(".slider-boxes-features-2 > .owl-carousel .owl-item");
                r.hasClass("device-lg") || r.hasClass("device-md") ? (s.removeClass("highlighted"), s.eq(a + 1).addClass("highlighted")) : (r.hasClass("device-sm") || r.hasClass("device-xs") || r.hasClass("device-xxs")) && (s.removeClass("highlighted"), s.eq(a).addClass("highlighted"))
            }), o.owlCarousel({
                rtl: u,
                autoplay: !1,
                autoplaySpeed: 500,
                autoplayTimeout: 5e3,
                dragEndSpeed: 350,
                autoplayHoverPause: !0,
                loop: !1,
                slideBy: 1,
                margin: 20,
                stagePadding: 0,
                nav: !1,
                dots: !1,
                navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
                responsive: {
                    0: {
                        items: 2
                    },
                    480: {
                        items: 3
                    },
                    600: {
                        items: 4
                    },
                    768: {
                        items: 4
                    },
                    1024: {
                        items: 3
                    }
                },
                autoHeight: !0,
                autoWidth: !1,
                navRewind: !0,
                center: !1,
                dotsEach: 1,
                dotData: !1,
                lazyLoad: !1,
                smartSpeed: 600,
                fluidSpeed: 5e3,
                navSpeed: 400,
                dotsSpeed: 400
            }), (n = d(".slider-boxes-features-3 > .owl-carousel")).on("initialized.owl.carousel", function(e) {
                var a = e.item.index,
                    s = d(".slider-boxes-features-3 > .owl-carousel .owl-item");
                r.hasClass("device-lg") || r.hasClass("device-md") ? s.eq(a).addClass("highlighted") : (r.hasClass("device-sm") || r.hasClass("device-xs") || r.hasClass("device-xxs")) && s.eq(a).addClass("highlighted")
            }), n.on("resized.owl.carousel", function(e) {
                var a = e.item.index,
                    s = d(".slider-boxes-features-3 > .owl-carousel .owl-item");
                r.hasClass("device-lg") || r.hasClass("device-md") ? (s.removeClass("highlighted"), s.eq(a).addClass("highlighted")) : (r.hasClass("device-sm") || r.hasClass("device-xs") || r.hasClass("device-xxs")) && (s.removeClass("highlighted"), s.eq(a).addClass("highlighted"))
            }), d(".slider-boxes-features-3 > .owl-carousel").on("translate.owl.carousel", function(e) {
                var a = e.item.index,
                    s = d(".slider-boxes-features-3 > .owl-carousel .owl-item");
                r.hasClass("device-lg") || r.hasClass("device-md") ? (s.removeClass("highlighted"), s.eq(a).addClass("highlighted")) : (r.hasClass("device-sm") || r.hasClass("device-xs") || r.hasClass("device-xxs")) && (s.removeClass("highlighted"), s.eq(a).addClass("highlighted"))
            }), n.owlCarousel({
                rtl: u,
                autoplay: !1,
                autoplaySpeed: 500,
                autoplayTimeout: 5e3,
                dragEndSpeed: 350,
                autoplayHoverPause: !0,
                loop: !1,
                slideBy: 1,
                margin: 20,
                stagePadding: 0,
                nav: !1,
                dots: !1,
                navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
                responsive: {
                    0: {
                        items: 2
                    },
                    480: {
                        items: 3
                    },
                    600: {
                        items: 4
                    },
                    768: {
                        items: 4
                    },
                    1024: {
                        items: 3
                    }
                },
                autoHeight: !0,
                autoWidth: !1,
                navRewind: !0,
                center: !1,
                dotsEach: 1,
                dotData: !1,
                lazyLoad: !1,
                smartSpeed: 600,
                fluidSpeed: 5e3,
                navSpeed: 400,
                dotsSpeed: 400
            }), d(".counter-stats").each(function() {
                var e = d(this),
                    a = e.text(),
                    s = a.toString().replace(/(\d)/g, "<span class='digit'><span class='digit-value'>$1</span></span>");
                e.html(s + "<div class='main'>" + a + "</span>"), e.find(".digit").each(function() {
                    var e = d(this),
                        a = e.find(".digit-value").text();
                    e.append("<div class='counter-animator' data-value='" + a + "'><ul><li>0</li><li>1</li><li>2</li><li>3</li><li>4</li><li>5</li><li>6</li><li>7</li><li>8</li><li>9</li></ul></div>")
                })
            }), d(".counter-stats").each(function(a) {
                var s = d(this);
                new Waypoint({
                    element: s,
                    handler: function(e) {
                        setTimeout(function() {
                            setTimeout(function() {
                                1 < d(window).width() && s.find(".counter-animator").each(function() {
                                    var e = d(this),
                                        a = 10 * e.data("value");
                                    e.find("ul").css({
                                        transform: "translateY(-" + a + "%)",
                                        "-webkit-transform": "translateY(-" + a + "%)",
                                        "-moz-transform": "translateY(-" + a + "%)",
                                        "-ms-transform": "translateY(-" + a + "%)",
                                        "-o-transform": "translateY(-" + a + "%)"
                                    })
                                })
                            }, 0 * a)
                        }, 0)
                    },
                    offset: "100%"
                })
            }), d(".slider-testimonials > .owl-carousel").owlCarousel({
                rtl: u,
                autoplay: !1,
                autoplaySpeed: 500,
                autoplayTimeout: 5e3,
                dragEndSpeed: 350,
                autoplayHoverPause: !0,
                loop: !1,
                slideBy: 1,
                margin: 20,
                stagePadding: 0,
                nav: !1,
                dots: !1,
                navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
                responsive: {
                    0: {
                        items: 1
                    },
                    480: {
                        items: 1
                    },
                    768: {
                        items: 2
                    },
                    1024: {
                        items: 3
                    }
                },
                autoHeight: !0,
                autoWidth: !1,
                navRewind: !0,
                center: !1,
                dotsEach: 1,
                dotData: !1,
                lazyLoad: !1,
                smartSpeed: 600,
                fluidSpeed: 5e3,
                navSpeed: 400,
                dotsSpeed: 400
            }),
            function() {
                d("#form-cta-subscribe-2").validate({
                    rules: {
                        cs2Name: {
                            required: !0,
                            minlength: 3
                        },
                        cs2Email: {
                            required: !0,
                            email: !0
                        },
                        cs2PhoneNum: {
                            required: !0,
                            number: !0,
                            minlength: 10,
                            maxlength: 10
                        }
                    }
                });
                var e = m.data("error-msg"),
                    l = e || "Please Follow Error Messages and Complete as Required";
                d("#form-cta-subscribe-2").on("submit", function(e) {
                    if (e.isDefaultPrevented()) {
                        var a = '<i class="cs-error-icon fas fa-times"></i>' + l;
                        p(!1, a), v()
                    } else e.preventDefault(), s = d("#cs2Name").val(), t = d("#cs2Email").val(), i = d("#cs2PhoneNum").val(), d.ajax({
                        type: "POST",
                        url: "/form/user",
                        data: "cs2Name=" + s + "&cs2Email=" + t + "&cs2PhoneNum=" + i,
                        success: function(e) {
                            var a, s;
                            "success" == e ? (a = m.data("success-msg"), s = a || "Thank you for your submission :)", d("#form-cta-subscribe-2")[0].reset(), p(!0, '<i class="cs-success-icon fas fa-check"></i>' + s), d(".cs-notifications-content").addClass("sent"), m.css("opacity", 0), m.slideDown(300).animate({
                                opacity: 1
                            }, 300).delay(5e3).slideUp(400), d("#form-cta-subscribe-2").hasClass("redirected") && setTimeout(function() {
                                window.location.href = "/thankyou"
                            }, 3e3)) : (v(), p(!1, e))
                        }
                    });
                    var s, t, i
                })
            }(), g()
    }), d(window).on("load", function() {
        a(), s(),
            function() {
            }()
    }), d(window).on("resize", function() {
        c(), h(), a()
    }), d(window).on("scroll", function() {
        g(), s()
    }), d(window).on("load", function() {
        d(window).on("scroll", function() {})
    });
    (d = jQuery.noConflict())(window), d(this);
    var r = d("body");

    function c() {
        jRespond([{
            label: "smallest",
            enter: 0,
            exit: 479
        }, {
            label: "handheld",
            enter: 480,
            exit: 767
        }, {
            label: "tablet",
            enter: 768,
            exit: 991
        }, {
            label: "laptop",
            enter: 992,
            exit: 1199
        }, {
            label: "desktop",
            enter: 1200,
            exit: 1e4
        }]).addFunc([{
            breakpoint: "desktop",
            enter: function() {
                r.addClass("device-lg")
            },
            exit: function() {
                r.removeClass("device-lg")
            }
        }, {
            breakpoint: "laptop",
            enter: function() {
                r.addClass("device-md")
            },
            exit: function() {
                r.removeClass("device-md")
            }
        }, {
            breakpoint: "tablet",
            enter: function() {
                r.addClass("device-sm")
            },
            exit: function() {
                r.removeClass("device-sm")
            }
        }, {
            breakpoint: "handheld",
            enter: function() {
                r.addClass("device-xs")
            },
            exit: function() {
                r.removeClass("device-xs")
            }
        }, {
            breakpoint: "smallest",
            enter: function() {
                r.addClass("device-xxs")
            },
            exit: function() {
                r.removeClass("device-xxs")
            }
        }])
    }

    function h() {
        d(".fullscreen, #home-header, #home-banner").css("height", d(window).height()), d("#banner.fullscreen").css("height", d(window).height())
    }
    d(".banner-parallax").each(function() {
        var e = d(this).data("banner-height"),
            a = d(this).find(".row > [class*='col-']");
        d(this).css("min-height", e), d(a).css("min-height", e)
    });
    var u, e = d("html").css("direction");

    function a() {
        d(function() {
            (r.hasClass("device-lg") || r.hasClass("device-md") || r.hasClass("device-sm")) && d.stellar({
                horizontalScrolling: !1,
                verticalOffset: 0,
                responsive: !0
            })
        })
    }

    function g() {
        d(window).scrollTop();
        800 < d(window).scrollTop() ? d(".scroll-top-icon").addClass("show") : d(".scroll-top-icon").removeClass("show")
    }

    function s() {
        var e = d(document).height() - d(window).height(),
            a = d(document).scrollTop() / (e / 100);
        d("#scroll-progress .scroll-progress").width(a + "%"), d(".scroll-percent").text(a.toFixed(0) + "%")
    }
    u = "rtl" == e, d(".scroll-top").on("click", function(e) {
        e.preventDefault(), d("html, body").animate({
            scrollTop: 0
        }, 1200, "easeInOutExpo")
    }), d(".scroll-to").on("click", function(e) {
        e.preventDefault();
        var a = d(this);
        d("html, body").stop().animate({
            scrollTop: d(a.attr("href")).offset().top
        }, 1200, "easeInOutExpo")
    });
    var m = d(".cs-notifications");

    function v() {
        m.css("opacity", 0), m.slideDown(300).animate({
            opacity: 1
        }, 300), d(".cs-notifications-content").removeClass("sent")
    }

    function p(e, a) {
        var s;
        s = "shake animated", m.delay(300).addClass(s).one("webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend", function() {
            d(this).removeClass("shake bounce animated")
        }), m.children(".cs-notifications-content").html(a)
    }
    // jQuery("https://moradhamdy.com/morad/magicay-demo/img.svg").each(function() {
    //     var s = jQuery(this),
    //         t = s.attr("id"),
    //         i = s.attr("class"),
    //         e = s.attr("src");
    //     jQuery.get(e, function(e) {
    //         var a = jQuery(e).find("svg");
    //         void 0 !== t && (a = a.attr("id", t)), void 0 !== i && (a = a.attr("class", i + " replaced-svg")), a = a.removeAttr("xmlns:a"), s.replaceWith(a)
    //     }, "xml")
    // })
}(jQuery);