$(function () {
  var e = 0,
    o = $(".r-event .event-body"),
    r = $(".l-event .event-body");
  TweenMax.staggerFrom(o, 1, { x: 100, ease: Bounce.easeOut }, 1),
    TweenMax.staggerFrom(r, 1, { x: -100, ease: Bounce.easeOut }, 1),
    $(window).on("scroll", function () {
      var o = $(window).scrollTop();
      o > e
        ? $("footer").addClass("footer-up")
        : $("footer").removeClass("footer-up"),
        (e = o);
    });
});
