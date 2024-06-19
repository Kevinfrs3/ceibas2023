!(function (e) {
  "use strict";
  function a() {
    if (e(".main-header").length) {
      var a = e(window).scrollTop(),
        t = e(".main-header"),
        n = e(".scroll-top");
      a >= 110
        ? (t.addClass("fixed-header"), n.addClass("open"))
        : (t.removeClass("fixed-header"), n.removeClass("open"));
    }
  }
  if (
    (e(".preloader-close").length &&
      e(".preloader-close").on("click", function () {
        e(".loader-wrap").delay(200).fadeOut(500);
      }),
    a(),
    e(".main-header li.dropdown ul").length &&
      e(".main-header .navigation li.dropdown").append(
        '<div class="dropdown-btn"><span class="fas fa-angle-down"></span></div>'
      ),
    e(".mobile-menu").length)
  ) {
    e(".mobile-menu .menu-box").mCustomScrollbar();
    var t = e(".main-header .menu-area .main-menu").html();
    e(".mobile-menu .menu-box .menu-outer").append(t),
      e(".sticky-header .main-menu").append(t),
      e(".mobile-menu li.dropdown .dropdown-btn").on("click", function () {
        e(this).toggleClass("open"), e(this).prev("ul").slideToggle(500);
      }),
      e(".mobile-menu li.dropdown .dropdown-btn").on("click", function () {
        e(this).prev(".megamenu").slideToggle(900);
      }),
      e(".mobile-nav-toggler").on("click", function () {
        e("body").addClass("mobile-menu-visible");
      }),
      e(".mobile-menu .menu-backdrop,.mobile-menu .close-btn").on(
        "click",
        function () {
          e("body").removeClass("mobile-menu-visible");
        }
      );
  }
  function n() {
    if (e(".sortable-masonry").length) {
      var a = e(window),
        t = e(".sortable-masonry .items-container"),
        n = e(".filter-btns");
      t.isotope({
        filter: "*",
        masonry: { columnWidth: ".masonry-item.small-column" },
        animationOptions: { duration: 500, easing: "linear" },
      }),
        n.find("li").on("click", function () {
          var a = e(this).attr("data-filter");
          try {
            t.isotope({
              filter: a,
              animationOptions: { duration: 500, easing: "linear", queue: !1 },
            });
          } catch (n) {}
          return !1;
        }),
        a.on("resize", function () {
          var e = n.find("li.active").attr("data-filter");
          t.isotope({
            filter: e,
            animationOptions: { duration: 500, easing: "linear", queue: !1 },
          });
        });
      var s = e(".filter-btns li");
      s.on("click", function () {
        var a = e(this);
        a.hasClass("active") || (s.removeClass("active"), a.addClass("active"));
      });
    }
  }
  $(".scroll-to-target").on("click", function () {
    var target = $(this).attr("data-target");
    $("html, body").animate({ scrollTop: $(target).offset().top }, 200); // Ajusta la velocidad aquí (300 ms)
  });
  $(window).on("scroll", handleScroll);
  handleScroll();
  e(".wow").length && new WOW({ mobile: !1 }).init(),
    e("#contact-form").length &&
      e("#contact-form").validate({
        rules: {
          username: { required: !0 },
          email: { required: !0, email: !0 },
          phone: { required: !0 },
          subject: { required: !0 },
          message: { required: !0 },
        },
      }),
    e(".count-box").length &&
      e(".count-box").appear(
        function () {
          var a = e(this),
            t = a.find(".count-text").attr("data-stop"),
            n = parseInt(a.find(".count-text").attr("data-speed"), 10);
          a.hasClass("counted") ||
            (a.addClass("counted"),
            e({ countNum: a.find(".count-text").text() }).animate(
              { countNum: t },
              {
                duration: n,
                easing: "linear",
                step: function () {
                  a.find(".count-text").text(Math.floor(this.countNum));
                },
                complete: function () {
                  a.find(".count-text").text(this.countNum);
                },
              }
            ));
        },
        { accY: 0 }
      ),
    e(".lightbox-image").length &&
      e(".lightbox-image").fancybox({
        openEffect: "fade",
        closeEffect: "fade",
        helpers: { media: {} },
      }),
    e(".tabs-box").length &&
      e(".tabs-box .tab-buttons .tab-btn").on("click", function (a) {
        a.preventDefault();
        var t = e(e(this).attr("data-tab"));
        if (e(t).is(":visible")) return !1;
        t
          .parents(".tabs-box")
          .find(".tab-buttons")
          .find(".tab-btn")
          .removeClass("active-btn"),
          e(this).addClass("active-btn"),
          t.parents(".tabs-box").find(".tabs-content").find(".tab").fadeOut(0),
          t
            .parents(".tabs-box")
            .find(".tabs-content")
            .find(".tab")
            .removeClass("active-tab"),
          e(t).fadeIn(300),
          e(t).addClass("active-tab");
      }),
    e(".pricing-tabs").length &&
      e(".pricing-tabs .tab-btns .tab-btn").on("click", function (a) {
        a.preventDefault();
        var t = e(e(this).attr("data-tab"));
        if (e(t).hasClass("actve-tab")) return !1;
        e(".pricing-tabs .tab-btns .tab-btn").removeClass("active-btn"),
          e(this).addClass("active-btn"),
          e(".pricing-tabs .pr-content .pr-tab").removeClass("active-tab"),
          e(t).addClass("active-tab");
      }),
    e(".accordion-box").length &&
      e(".accordion-box").on("click", ".acc-btn", function () {
        var a = e(this).parents(".accordion-box"),
          t = e(this).parents(".accordion");
        if (
          (!0 !== e(this).hasClass("active") &&
            e(a).find(".accordion .acc-btn").removeClass("active"),
          e(this).next(".acc-content").is(":visible"))
        )
          return !1;
        e(this).addClass("active"),
          e(a).children(".accordion").removeClass("active-block"),
          e(a).find(".accordion").children(".acc-content").slideUp(300),
          t.addClass("active-block"),
          e(this).next(".acc-content").slideDown(300);
      }),
    e(".banner-carousel").length &&
      e(".banner-carousel").owlCarousel({
        loop: !0,
        margin: 0,
        nav: !0,
        animateOut: "fadeOut",
        animateIn: "fadeIn",
        active: !0,
        smartSpeed: 1e3,
        autoplay: 6e3,
        navText: [
          '<span class="far fa-long-arrow-left"></span>',
          '<span class="far fa-long-arrow-right"></span>',
        ],
        responsive: {
          0: { items: 1 },
          600: { items: 1 },
          800: { items: 1 },
          1024: { items: 1 },
        },
      }),
    e(".two-column-carousel").length &&
      e(".two-column-carousel").owlCarousel({
        loop: !0,
        margin: 30,
        nav: !0,
        smartSpeed: 1e3,
        autoplay: 500,
        navText: [
          '<span class="fas fa-algle-left"></span>',
          '<span class="fas fa-algle-left-right"></span>',
        ],
        responsive: {
          0: { items: 1 },
          480: { items: 1 },
          600: { items: 1 },
          800: { items: 2 },
          1024: { items: 2 },
        },
      }),
    e(".three-item-carousel").length &&
      e(".three-item-carousel").owlCarousel({
        loop: !0,
        margin: 30,
        nav: !0,
        smartSpeed: 1e3,
        autoplay: 500,
        navText: [
          '<span class="far fa-long-arrow-alt-left"></span>',
          '<span class="far fa-long-arrow-alt-right"></span>',
        ],
        responsive: {
          0: { items: 1 },
          480: { items: 1 },
          600: { items: 2 },
          800: { items: 2 },
          1024: { items: 3 },
        },
      }),
    e(".four-item-carousel").length &&
      e(".four-item-carousel").owlCarousel({
        loop: !0,
        margin: 30,
        nav: !0,
        smartSpeed: 500,
        autoplay: 5e3,
        navText: [
          '<span class="fas fa-angle-left"></span>',
          '<span class="fas fa-angle-right"></span>',
        ],
        responsive: {
          0: { items: 1 },
          600: { items: 2 },
          800: { items: 2 },
          1024: { items: 3 },
          1200: { items: 4 },
        },
      }),
    e(".single-item-carousel").length &&
      e(".single-item-carousel").owlCarousel({
        loop: !0,
        margin: 30,
        nav: !1,
        smartSpeed: 500,
        autoplay: 1e3,
        navText: [
          '<span class="icon-Left-Arrow"></span>',
          '<span class="icon-Right-Arrow"></span>',
        ],
        responsive: {
          0: { items: 1 },
          480: { items: 1 },
          600: { items: 1 },
          800: { items: 1 },
          1200: { items: 1 },
        },
      }),
    e(".clients-carousel").length &&
      e(".clients-carousel").owlCarousel({
        loop: !0,
        margin: 30,
        nav: !1,
        smartSpeed: 3e3,
        autoplay: !0,
        navText: [
          '<span class="fas fa-angle-left"></span>',
          '<span class="fas fa-angle-right"></span>',
        ],
        responsive: {
          0: { items: 1 },
          480: { items: 2 },
          600: { items: 3 },
          800: { items: 4 },
          1200: { items: 5 },
        },
      }),
    e(".scroll-nav").length && e(".scroll-nav").onePageNav(),
    n(),
    e(".price-range-slider").length &&
      (e(".price-range-slider").slider({
        range: !0,
        min: 120,
        max: 500,
        values: [120, 300],
        slide: function (a, t) {
          e("input.property-amount").val(t.values[0] + " - " + t.values[1]);
        },
      }),
      e("input.property-amount").val(
        e(".price-range-slider").slider("values", 0) +
          " - $" +
          e(".price-range-slider").slider("values", 1)
      )),
    e(".count-bar").length &&
      e(".count-bar").appear(
        function () {
          var a = e(this),
            t = a.data("percent");
          e(a).css("width", t).addClass("counted");
        },
        { accY: -50 }
      ),
    e(document).ready(function () {
      e("select:not(.ignore)").niceSelect();
    }),
    e(".quantity-spinner").length &&
      e("input.quantity-spinner").TouchSpin({ verticalbuttons: !0 }),
    jQuery(document).on("ready", function () {
      var a;
      jQuery,
        e(".page_direction").length &&
          e(".direction_switch button").on("click", function () {
            e("body").toggleClass(function () {
              return e(this).is(".rtl, .ltr") ? "rtl ltr" : "rtl";
            });
          });
    }),
    e(window).on("scroll", function () {
      a();
    }),
    e(window).on("load", function () {
      e(".loader-wrap").length && e(".loader-wrap").delay(1e3).fadeOut(500),
        n();
    });
})(window.jQuery);
