!(function (e) {
  "function" == typeof define && define.amd
    ? define(["jquery"], e)
    : "object" == typeof exports
    ? (module.exports = e)
    : e(jQuery);
})(function (e) {
  function t(t) {
    var r = t || window.event,
      l = s.call(arguments, 1),
      c = 0,
      u = 0,
      f = 0,
      h = 0,
      m = 0,
      $ = 0;
    if (
      (((t = e.event.fix(r)).type = "mousewheel"),
      "detail" in r && (f = -1 * r.detail),
      "wheelDelta" in r && (f = r.wheelDelta),
      "wheelDeltaY" in r && (f = r.wheelDeltaY),
      "wheelDeltaX" in r && (u = -1 * r.wheelDeltaX),
      "axis" in r && r.axis === r.HORIZONTAL_AXIS && ((u = -1 * f), (f = 0)),
      (c = 0 === f ? u : f),
      "deltaY" in r && (c = f = -1 * r.deltaY),
      "deltaX" in r && ((u = r.deltaX), 0 === f && (c = -1 * u)),
      0 !== f || 0 !== u)
    ) {
      if (1 === r.deltaMode) {
        var p = e.data(this, "mousewheel-line-height");
        (c *= p), (f *= p), (u *= p);
      } else if (2 === r.deltaMode) {
        var g = e.data(this, "mousewheel-page-height");
        (c *= g), (f *= g), (u *= g);
      }
      if (
        ((h = Math.max(Math.abs(f), Math.abs(u))),
        (!i || i > h) && ((i = h), n(r, h) && (i /= 40)),
        n(r, h) && ((c /= 40), (u /= 40), (f /= 40)),
        (c = Math[c >= 1 ? "floor" : "ceil"](c / i)),
        (u = Math[u >= 1 ? "floor" : "ceil"](u / i)),
        (f = Math[f >= 1 ? "floor" : "ceil"](f / i)),
        d.settings.normalizeOffset && this.getBoundingClientRect)
      ) {
        var v = this.getBoundingClientRect();
        (m = t.clientX - v.left), ($ = t.clientY - v.top);
      }
      return (
        (t.deltaX = u),
        (t.deltaY = f),
        (t.deltaFactor = i),
        (t.offsetX = m),
        (t.offsetY = $),
        (t.deltaMode = 0),
        l.unshift(t, c, u, f),
        a && clearTimeout(a),
        (a = setTimeout(o, 200)),
        (e.event.dispatch || e.event.handle).apply(this, l)
      );
    }
  }
  function o() {
    i = null;
  }
  function n(e, t) {
    return (
      d.settings.adjustOldDeltas && "mousewheel" === e.type && t % 120 == 0
    );
  }
  var a,
    i,
    r = ["wheel", "mousewheel", "DOMMouseScroll", "MozMousePixelScroll"],
    l =
      "onwheel" in document || document.documentMode >= 9
        ? ["wheel"]
        : ["mousewheel", "DomMouseScroll", "MozMousePixelScroll"],
    s = Array.prototype.slice;
  if (e.event.fixHooks)
    for (var c = r.length; c; ) e.event.fixHooks[r[--c]] = e.event.mouseHooks;
  var d = (e.event.special.mousewheel = {
    version: "3.1.12",
    setup: function () {
      if (this.addEventListener)
        for (var o = l.length; o; ) this.addEventListener(l[--o], t, !1);
      else this.onmousewheel = t;
      e.data(this, "mousewheel-line-height", d.getLineHeight(this)),
        e.data(this, "mousewheel-page-height", d.getPageHeight(this));
    },
    teardown: function () {
      if (this.removeEventListener)
        for (var o = l.length; o; ) this.removeEventListener(l[--o], t, !1);
      else this.onmousewheel = null;
      e.removeData(this, "mousewheel-line-height"),
        e.removeData(this, "mousewheel-page-height");
    },
    getLineHeight: function (t) {
      var o = e(t),
        n = o["offsetParent" in e.fn ? "offsetParent" : "parent"]();
      return (
        n.length || (n = e("body")),
        parseInt(n.css("fontSize"), 10) || parseInt(o.css("fontSize"), 10) || 16
      );
    },
    getPageHeight: function (t) {
      return e(t).height();
    },
    settings: { adjustOldDeltas: !0, normalizeOffset: !0 },
  });
  e.fn.extend({
    mousewheel: function (e) {
      return e ? this.bind("mousewheel", e) : this.trigger("mousewheel");
    },
    unmousewheel: function (e) {
      return this.unbind("mousewheel", e);
    },
  });
}),
  (function (e) {
    "undefined" != typeof module && module.exports
      ? (module.exports = e)
      : e(jQuery, window, document);
  })(function (e) {
    var t, o, n, a;
    (t = function () {
      var t,
        o = "mCustomScrollbar",
        n = ".mCustomScrollbar",
        a = {
          setTop: 0,
          setLeft: 0,
          axis: "y",
          scrollbarPosition: "inside",
          scrollInertia: 950,
          autoDraggerLength: !0,
          alwaysShowScrollbar: 0,
          snapOffset: 0,
          mouseWheel: {
            enable: !0,
            scrollAmount: "auto",
            axis: "y",
            deltaFactor: "auto",
            disableOver: ["select", "option", "keygen", "datalist", "textarea"],
          },
          scrollButtons: { scrollType: "stepless", scrollAmount: "auto" },
          keyboard: {
            enable: !0,
            scrollType: "stepless",
            scrollAmount: "auto",
          },
          contentTouchScroll: 25,
          advanced: {
            autoScrollOnFocus:
              "input,textarea,select,button,datalist,keygen,a[tabindex],area,object,[contenteditable='true']",
            updateOnContentResize: !0,
            updateOnImageLoad: !0,
            autoUpdateTimeout: 60,
          },
          theme: "light",
          callbacks: {
            onTotalScrollOffset: 0,
            onTotalScrollBackOffset: 0,
            alwaysTriggerOffsets: !0,
          },
        },
        i = 0,
        r = {},
        l = window.attachEvent && !window.addEventListener ? 1 : 0,
        s = !1,
        c = [
          "mCSB_dragger_onDrag",
          "mCSB_scrollTools_onDrag",
          "mCS_img_loaded",
          "mCS_disabled",
          "mCS_destroyed",
          "mCS_no_scrollbar",
          "mCS-autoHide",
          "mCS-dir-rtl",
          "mCS_no_scrollbar_y",
          "mCS_no_scrollbar_x",
          "mCS_y_hidden",
          "mCS_x_hidden",
          "mCSB_draggerContainer",
          "mCSB_buttonUp",
          "mCSB_buttonDown",
          "mCSB_buttonLeft",
          "mCSB_buttonRight",
        ],
        d = {
          init: function (t) {
            var t = e.extend(!0, {}, a, t),
              o = u.call(this);
            if (t.live) {
              var l = t.liveSelector || this.selector || n,
                s = e(l);
              if ("off" === t.live) return void h(l);
              r[l] = setTimeout(function () {
                s.mCustomScrollbar(t), "once" === t.live && s.length && h(l);
              }, 500);
            } else h(l);
            return (
              (t.setWidth = t.set_width ? t.set_width : t.setWidth),
              (t.setHeight = t.set_height ? t.set_height : t.setHeight),
              (t.axis = t.horizontalScroll ? "x" : m(t.axis)),
              (t.scrollInertia =
                t.scrollInertia > 0 && t.scrollInertia < 17
                  ? 17
                  : t.scrollInertia),
              "object" != typeof t.mouseWheel &&
                1 == t.mouseWheel &&
                (t.mouseWheel = {
                  enable: !0,
                  scrollAmount: "auto",
                  axis: "y",
                  preventDefault: !1,
                  deltaFactor: "auto",
                  normalizeDelta: !1,
                  invert: !1,
                }),
              (t.mouseWheel.scrollAmount = t.mouseWheelPixels
                ? t.mouseWheelPixels
                : t.mouseWheel.scrollAmount),
              (t.mouseWheel.normalizeDelta = t.advanced.normalizeMouseWheelDelta
                ? t.advanced.normalizeMouseWheelDelta
                : t.mouseWheel.normalizeDelta),
              (t.scrollButtons.scrollType = $(t.scrollButtons.scrollType)),
              f(t),
              e(o).each(function () {
                var o = e(this);
                if (!o.data("mCS")) {
                  o.data("mCS", {
                    idx: ++i,
                    opt: t,
                    scrollRatio: { y: null, x: null },
                    overflowed: null,
                    contentReset: { y: null, x: null },
                    bindEvents: !1,
                    tweenRunning: !1,
                    sequential: {},
                    langDir: o.css("direction"),
                    cbOffsets: null,
                    trigger: null,
                  });
                  var n = o.data("mCS"),
                    a = n.opt,
                    r = o.data("mcs-axis"),
                    l = o.data("mcs-scrollbar-position"),
                    s = o.data("mcs-theme");
                  r && (a.axis = r),
                    l && (a.scrollbarPosition = l),
                    s && ((a.theme = s), f(a)),
                    p.call(this),
                    e(
                      "#mCSB_" + n.idx + "_container img:not(." + c[2] + ")"
                    ).addClass(c[2]),
                    d.update.call(null, o);
                }
              })
            );
          },
          update: function (t, o) {
            return e(t || u.call(this)).each(function () {
              var t = e(this);
              if (t.data("mCS")) {
                var n = t.data("mCS"),
                  a = n.opt,
                  i = e("#mCSB_" + n.idx + "_container"),
                  r = [
                    e("#mCSB_" + n.idx + "_dragger_vertical"),
                    e("#mCSB_" + n.idx + "_dragger_horizontal"),
                  ];
                if (!i.length) return;
                n.tweenRunning && q(t),
                  t.hasClass(c[3]) && t.removeClass(c[3]),
                  t.hasClass(c[4]) && t.removeClass(c[4]),
                  x.call(this),
                  v.call(this),
                  "y" === a.axis ||
                    a.advanced.autoExpandHorizontalScroll ||
                    i.css("width", g(i.children())),
                  (n.overflowed = b.call(this)),
                  k.call(this),
                  a.autoDraggerLength && S.call(this),
                  C.call(this),
                  B.call(this);
                var l = [Math.abs(i[0].offsetTop), Math.abs(i[0].offsetLeft)];
                "x" !== a.axis &&
                  (n.overflowed[0]
                    ? r[0].height() > r[0].parent().height()
                      ? y.call(this)
                      : (F(t, l[0].toString(), {
                          dir: "y",
                          dur: 0,
                          overwrite: "none",
                        }),
                        (n.contentReset.y = null))
                    : (y.call(this),
                      "y" === a.axis
                        ? T.call(this)
                        : "yx" === a.axis &&
                          n.overflowed[1] &&
                          F(t, l[1].toString(), {
                            dir: "x",
                            dur: 0,
                            overwrite: "none",
                          }))),
                  "y" !== a.axis &&
                    (n.overflowed[1]
                      ? r[1].width() > r[1].parent().width()
                        ? y.call(this)
                        : (F(t, l[1].toString(), {
                            dir: "x",
                            dur: 0,
                            overwrite: "none",
                          }),
                          (n.contentReset.x = null))
                      : (y.call(this),
                        "x" === a.axis
                          ? T.call(this)
                          : "yx" === a.axis &&
                            n.overflowed[0] &&
                            F(t, l[0].toString(), {
                              dir: "y",
                              dur: 0,
                              overwrite: "none",
                            }))),
                  o &&
                    n &&
                    (2 === o &&
                    a.callbacks.onImageLoad &&
                    "function" == typeof a.callbacks.onImageLoad
                      ? a.callbacks.onImageLoad.call(this)
                      : 3 === o &&
                        a.callbacks.onSelectorChange &&
                        "function" == typeof a.callbacks.onSelectorChange
                      ? a.callbacks.onSelectorChange.call(this)
                      : a.callbacks.onUpdate &&
                        "function" == typeof a.callbacks.onUpdate &&
                        a.callbacks.onUpdate.call(this)),
                  j.call(this);
              }
            });
          },
          scrollTo: function (t, o) {
            if (void 0 !== t && null != t)
              return e(u.call(this)).each(function () {
                var n = e(this);
                if (n.data("mCS")) {
                  var a = n.data("mCS"),
                    i = a.opt,
                    r = {
                      trigger: "external",
                      scrollInertia: i.scrollInertia,
                      scrollEasing: "mcsEaseInOut",
                      moveDragger: !1,
                      timeout: 60,
                      callbacks: !0,
                      onStart: !0,
                      onUpdate: !0,
                      onComplete: !0,
                    },
                    l = e.extend(!0, {}, r, o),
                    s = X.call(this, t),
                    c =
                      l.scrollInertia > 0 && l.scrollInertia < 17
                        ? 17
                        : l.scrollInertia;
                  (s[0] = Y.call(this, s[0], "y")),
                    (s[1] = Y.call(this, s[1], "x")),
                    l.moveDragger &&
                      ((s[0] *= a.scrollRatio.y), (s[1] *= a.scrollRatio.x)),
                    (l.dur = c),
                    setTimeout(function () {
                      null !== s[0] &&
                        void 0 !== s[0] &&
                        "x" !== i.axis &&
                        a.overflowed[0] &&
                        ((l.dir = "y"),
                        (l.overwrite = "all"),
                        F(n, s[0].toString(), l)),
                        null !== s[1] &&
                          void 0 !== s[1] &&
                          "y" !== i.axis &&
                          a.overflowed[1] &&
                          ((l.dir = "x"),
                          (l.overwrite = "none"),
                          F(n, s[1].toString(), l));
                    }, l.timeout);
                }
              });
          },
          stop: function () {
            return e(u.call(this)).each(function () {
              var t = e(this);
              t.data("mCS") && q(t);
            });
          },
          disable: function (t) {
            return e(u.call(this)).each(function () {
              var o = e(this);
              o.data("mCS") &&
                (o.data("mCS"),
                j.call(this, "remove"),
                T.call(this),
                t && y.call(this),
                k.call(this, !0),
                o.addClass(c[3]));
            });
          },
          destroy: function () {
            var t = u.call(this);
            return e(t).each(function () {
              var n = e(this);
              if (n.data("mCS")) {
                var a = n.data("mCS"),
                  i = a.opt,
                  r = e("#mCSB_" + a.idx),
                  l = e("#mCSB_" + a.idx + "_container"),
                  s = e(".mCSB_" + a.idx + "_scrollbar");
                i.live && h(i.liveSelector || e(t).selector),
                  j.call(this, "remove"),
                  T.call(this),
                  y.call(this),
                  n.removeData("mCS"),
                  G(this, "mcs"),
                  s.remove(),
                  l.find("img." + c[2]).removeClass(c[2]),
                  r.replaceWith(l.contents()),
                  n
                    .removeClass(
                      o +
                        " _mCS_" +
                        a.idx +
                        " " +
                        c[6] +
                        " " +
                        c[7] +
                        " " +
                        c[5] +
                        " " +
                        c[3]
                    )
                    .addClass(c[4]);
              }
            });
          },
        },
        u = function () {
          return "object" != typeof e(this) || e(this).length < 1 ? n : this;
        },
        f = function (t) {
          (t.autoDraggerLength =
            !(
              e.inArray(t.theme, [
                "rounded",
                "rounded-dark",
                "rounded-dots",
                "rounded-dots-dark",
              ]) > -1
            ) && t.autoDraggerLength),
            (t.autoExpandScrollbar =
              !(
                e.inArray(t.theme, [
                  "rounded-dots",
                  "rounded-dots-dark",
                  "3d",
                  "3d-dark",
                  "3d-thick",
                  "3d-thick-dark",
                  "inset",
                  "inset-dark",
                  "inset-2",
                  "inset-2-dark",
                  "inset-3",
                  "inset-3-dark",
                ]) > -1
              ) && t.autoExpandScrollbar),
            (t.scrollButtons.enable =
              !(e.inArray(t.theme, ["minimal", "minimal-dark"]) > -1) &&
              t.scrollButtons.enable),
            (t.autoHideScrollbar =
              e.inArray(t.theme, ["minimal", "minimal-dark"]) > -1 ||
              t.autoHideScrollbar),
            (t.scrollbarPosition =
              e.inArray(t.theme, ["minimal", "minimal-dark"]) > -1
                ? "outside"
                : t.scrollbarPosition);
        },
        h = function (e) {
          r[e] && (clearTimeout(r[e]), G(r, e));
        },
        m = function (e) {
          return "yx" === e || "xy" === e || "auto" === e
            ? "yx"
            : "x" === e || "horizontal" === e
            ? "x"
            : "y";
        },
        $ = function (e) {
          return "stepped" === e ||
            "pixels" === e ||
            "step" === e ||
            "click" === e
            ? "stepped"
            : "stepless";
        },
        p = function () {
          var t = e(this),
            n = t.data("mCS"),
            a = n.opt,
            i = a.autoExpandScrollbar ? " " + c[1] + "_expand" : "",
            r = [
              "<div id='mCSB_" +
                n.idx +
                "_scrollbar_vertical' class='mCSB_scrollTools mCSB_" +
                n.idx +
                "_scrollbar mCS-" +
                a.theme +
                " mCSB_scrollTools_vertical" +
                i +
                "'><div class='" +
                c[12] +
                "'><div id='mCSB_" +
                n.idx +
                "_dragger_vertical' class='mCSB_dragger' style='position:absolute;' oncontextmenu='return false;'><div class='mCSB_dragger_bar' /></div><div class='mCSB_draggerRail' /></div></div>",
              "<div id='mCSB_" +
                n.idx +
                "_scrollbar_horizontal' class='mCSB_scrollTools mCSB_" +
                n.idx +
                "_scrollbar mCS-" +
                a.theme +
                " mCSB_scrollTools_horizontal" +
                i +
                "'><div class='" +
                c[12] +
                "'><div id='mCSB_" +
                n.idx +
                "_dragger_horizontal' class='mCSB_dragger' style='position:absolute;' oncontextmenu='return false;'><div class='mCSB_dragger_bar' /></div><div class='mCSB_draggerRail' /></div></div>",
            ],
            l =
              "yx" === a.axis
                ? "mCSB_vertical_horizontal"
                : "x" === a.axis
                ? "mCSB_horizontal"
                : "mCSB_vertical",
            s = "yx" === a.axis ? r[0] + r[1] : "x" === a.axis ? r[1] : r[0],
            d =
              "yx" === a.axis
                ? "<div id='mCSB_" +
                  n.idx +
                  "_container_wrapper' class='mCSB_container_wrapper' />"
                : "",
            u = a.autoHideScrollbar ? " " + c[6] : "",
            f = "x" !== a.axis && "rtl" === n.langDir ? " " + c[7] : "";
          a.setWidth && t.css("width", a.setWidth),
            a.setHeight && t.css("height", a.setHeight),
            (a.setLeft =
              "y" !== a.axis && "rtl" === n.langDir ? "989999px" : a.setLeft),
            t
              .addClass(o + " _mCS_" + n.idx + u + f)
              .wrapInner(
                "<div id='mCSB_" +
                  n.idx +
                  "' class='mCustomScrollBox mCS-" +
                  a.theme +
                  " " +
                  l +
                  "'><div id='mCSB_" +
                  n.idx +
                  "_container' class='mCSB_container' style='position:relative; top:" +
                  a.setTop +
                  "; left:" +
                  a.setLeft +
                  ";' dir=" +
                  n.langDir +
                  " /></div>"
              );
          var h = e("#mCSB_" + n.idx),
            m = e("#mCSB_" + n.idx + "_container");
          "y" === a.axis ||
            a.advanced.autoExpandHorizontalScroll ||
            m.css("width", g(m.children())),
            "outside" === a.scrollbarPosition
              ? ("static" === t.css("position") &&
                  t.css("position", "relative"),
                t.css("overflow", "visible"),
                h.addClass("mCSB_outside").after(s))
              : (h.addClass("mCSB_inside").append(s), m.wrap(d)),
            _.call(this);
          var $ = [
            e("#mCSB_" + n.idx + "_dragger_vertical"),
            e("#mCSB_" + n.idx + "_dragger_horizontal"),
          ];
          $[0].css("min-height", $[0].height()),
            $[1].css("min-width", $[1].width());
        },
        g = function (t) {
          return Math.max.apply(
            Math,
            t
              .map(function () {
                return e(this).outerWidth(!0);
              })
              .get()
          );
        },
        v = function () {
          var t = e(this).data("mCS"),
            o = t.opt,
            n = e("#mCSB_" + t.idx + "_container");
          o.advanced.autoExpandHorizontalScroll &&
            "y" !== o.axis &&
            n
              .css({ position: "absolute", width: "auto" })
              .wrap(
                "<div class='mCSB_h_wrapper' style='position:relative; left:0; width:999999px;' />"
              )
              .css({
                width:
                  Math.ceil(n[0].getBoundingClientRect().right + 0.4) -
                  Math.floor(n[0].getBoundingClientRect().left),
                position: "relative",
              })
              .unwrap();
        },
        _ = function () {
          var t = e(this).data("mCS"),
            o = t.opt,
            n = e(".mCSB_" + t.idx + "_scrollbar:first"),
            a = Q(o.scrollButtons.tabindex)
              ? "tabindex='" + o.scrollButtons.tabindex + "'"
              : "",
            i = [
              "<a href='#' class='" +
                c[13] +
                "' oncontextmenu='return false;' " +
                a +
                " />",
              "<a href='#' class='" +
                c[14] +
                "' oncontextmenu='return false;' " +
                a +
                " />",
              "<a href='#' class='" +
                c[15] +
                "' oncontextmenu='return false;' " +
                a +
                " />",
              "<a href='#' class='" +
                c[16] +
                "' oncontextmenu='return false;' " +
                a +
                " />",
            ],
            r = [
              "x" === o.axis ? i[2] : i[0],
              "x" === o.axis ? i[3] : i[1],
              i[2],
              i[3],
            ];
          o.scrollButtons.enable &&
            n
              .prepend(r[0])
              .append(r[1])
              .next(".mCSB_scrollTools")
              .prepend(r[2])
              .append(r[3]);
        },
        x = function () {
          var t = e(this),
            o = e("#mCSB_" + t.data("mCS").idx),
            n = t.css("max-height") || "none",
            a = -1 !== n.indexOf("%"),
            i = t.css("box-sizing");
          if ("none" !== n) {
            var r = a ? (t.parent().height() * parseInt(n)) / 100 : parseInt(n);
            "border-box" === i &&
              (r -=
                t.innerHeight() -
                t.height() +
                (t.outerHeight() - t.innerHeight())),
              o.css("max-height", Math.round(r));
          }
        },
        S = function () {
          var t = e(this).data("mCS"),
            o = e("#mCSB_" + t.idx),
            n = e("#mCSB_" + t.idx + "_container"),
            a = [
              e("#mCSB_" + t.idx + "_dragger_vertical"),
              e("#mCSB_" + t.idx + "_dragger_horizontal"),
            ],
            i = [o.height() / n.outerHeight(!1), o.width() / n.outerWidth(!1)],
            r = [
              parseInt(a[0].css("min-height")),
              Math.round(i[0] * a[0].parent().height()),
              parseInt(a[1].css("min-width")),
              Math.round(i[1] * a[1].parent().width()),
            ],
            s = l && r[1] < r[0] ? r[0] : r[1],
            c = l && r[3] < r[2] ? r[2] : r[3];
          a[0]
            .css({ height: s, "max-height": a[0].parent().height() - 10 })
            .find(".mCSB_dragger_bar")
            .css({ "line-height": r[0] + "px" }),
            a[1].css({ width: c, "max-width": a[1].parent().width() - 10 });
        },
        C = function () {
          var t = e(this).data("mCS"),
            o = e("#mCSB_" + t.idx),
            n = e("#mCSB_" + t.idx + "_container"),
            a = [
              e("#mCSB_" + t.idx + "_dragger_vertical"),
              e("#mCSB_" + t.idx + "_dragger_horizontal"),
            ],
            i = [n.outerHeight(!1) - o.height(), n.outerWidth(!1) - o.width()],
            r = [
              i[0] / (a[0].parent().height() - a[0].height()),
              i[1] / (a[1].parent().width() - a[1].width()),
            ];
          t.scrollRatio = { y: r[0], x: r[1] };
        },
        w = function (e, t, o) {
          var n = o ? c[0] + "_expanded" : "",
            a = e.closest(".mCSB_scrollTools");
          "active" === t
            ? (e.toggleClass(c[0] + " " + n),
              a.toggleClass(c[1]),
              (e[0]._draggable = e[0]._draggable ? 0 : 1))
            : e[0]._draggable ||
              ("hide" === t
                ? (e.removeClass(c[0]), a.removeClass(c[1]))
                : (e.addClass(c[0]), a.addClass(c[1])));
        },
        b = function () {
          var t = e(this).data("mCS"),
            o = e("#mCSB_" + t.idx),
            n = e("#mCSB_" + t.idx + "_container"),
            a = null == t.overflowed ? n.height() : n.outerHeight(!1),
            i = null == t.overflowed ? n.width() : n.outerWidth(!1);
          return [a > o.height(), i > o.width()];
        },
        y = function () {
          var t = e(this),
            o = t.data("mCS"),
            n = o.opt,
            a = e("#mCSB_" + o.idx),
            i = e("#mCSB_" + o.idx + "_container"),
            r = [
              e("#mCSB_" + o.idx + "_dragger_vertical"),
              e("#mCSB_" + o.idx + "_dragger_horizontal"),
            ];
          if (
            (q(t),
            (("x" !== n.axis && !o.overflowed[0]) ||
              ("y" === n.axis && o.overflowed[0])) &&
              (r[0].add(i).css("top", 0), F(t, "_resetY")),
            ("y" !== n.axis && !o.overflowed[1]) ||
              ("x" === n.axis && o.overflowed[1]))
          ) {
            var l = (dx = 0);
            "rtl" === o.langDir &&
              (dx = Math.abs(
                (l = a.width() - i.outerWidth(!1)) / o.scrollRatio.x
              )),
              i.css("left", l),
              r[1].css("left", dx),
              F(t, "_resetX");
          }
        },
        B = function () {
          var t,
            o = e(this),
            n = o.data("mCS"),
            a = n.opt;
          n.bindEvents ||
            (D.call(this),
            a.contentTouchScroll && R.call(this),
            E.call(this),
            a.mouseWheel.enable &&
              (function n() {
                t = setTimeout(function () {
                  e.event.special.mousewheel
                    ? (clearTimeout(t), I.call(o[0]))
                    : n();
                }, 100);
              })(),
            P.call(this),
            A.call(this),
            a.advanced.autoScrollOnFocus && z.call(this),
            a.scrollButtons.enable && H.call(this),
            a.keyboard.enable && M.call(this),
            (n.bindEvents = !0));
        },
        T = function () {
          var t = e(this),
            o = t.data("mCS"),
            n = o.opt,
            a = "mCS_" + o.idx,
            i = ".mCSB_" + o.idx + "_scrollbar",
            r = e(
              "#mCSB_" +
                o.idx +
                ",#mCSB_" +
                o.idx +
                "_container,#mCSB_" +
                o.idx +
                "_container_wrapper," +
                i +
                " ." +
                c[12] +
                ",#mCSB_" +
                o.idx +
                "_dragger_vertical,#mCSB_" +
                o.idx +
                "_dragger_horizontal," +
                i +
                ">a"
            ),
            l = e("#mCSB_" + o.idx + "_container");
          n.advanced.releaseDraggableSelectors &&
            r.add(e(n.advanced.releaseDraggableSelectors)),
            o.bindEvents &&
              (e(document).unbind("." + a),
              r.each(function () {
                e(this).unbind("." + a);
              }),
              clearTimeout(t[0]._focusTimeout),
              G(t[0], "_focusTimeout"),
              clearTimeout(o.sequential.step),
              G(o.sequential, "step"),
              clearTimeout(l[0].onCompleteTimeout),
              G(l[0], "onCompleteTimeout"),
              (o.bindEvents = !1));
        },
        k = function (t) {
          var o = e(this),
            n = o.data("mCS"),
            a = n.opt,
            i = e("#mCSB_" + n.idx + "_container_wrapper"),
            r = i.length ? i : e("#mCSB_" + n.idx + "_container"),
            l = [
              e("#mCSB_" + n.idx + "_scrollbar_vertical"),
              e("#mCSB_" + n.idx + "_scrollbar_horizontal"),
            ],
            s = [l[0].find(".mCSB_dragger"), l[1].find(".mCSB_dragger")];
          "x" !== a.axis &&
            (n.overflowed[0] && !t
              ? (l[0].add(s[0]).add(l[0].children("a")).css("display", "block"),
                r.removeClass(c[8] + " " + c[10]))
              : (a.alwaysShowScrollbar
                  ? (2 !== a.alwaysShowScrollbar && s[0].css("display", "none"),
                    r.removeClass(c[10]))
                  : (l[0].css("display", "none"), r.addClass(c[10])),
                r.addClass(c[8]))),
            "y" !== a.axis &&
              (n.overflowed[1] && !t
                ? (l[1]
                    .add(s[1])
                    .add(l[1].children("a"))
                    .css("display", "block"),
                  r.removeClass(c[9] + " " + c[11]))
                : (a.alwaysShowScrollbar
                    ? (2 !== a.alwaysShowScrollbar &&
                        s[1].css("display", "none"),
                      r.removeClass(c[11]))
                    : (l[1].css("display", "none"), r.addClass(c[11])),
                  r.addClass(c[9]))),
            n.overflowed[0] || n.overflowed[1]
              ? o.removeClass(c[5])
              : o.addClass(c[5]);
        },
        O = function (e) {
          var t = e.type;
          switch (t) {
            case "pointerdown":
            case "MSPointerDown":
            case "pointermove":
            case "MSPointerMove":
            case "pointerup":
            case "MSPointerUp":
              return e.target.ownerDocument !== document
                ? [e.originalEvent.screenY, e.originalEvent.screenX, !1]
                : [e.originalEvent.pageY, e.originalEvent.pageX, !1];
            case "touchstart":
            case "touchmove":
            case "touchend":
              var o =
                  e.originalEvent.touches[0] ||
                  e.originalEvent.changedTouches[0],
                n =
                  e.originalEvent.touches.length ||
                  e.originalEvent.changedTouches.length;
              return e.target.ownerDocument !== document
                ? [o.screenY, o.screenX, n > 1]
                : [o.pageY, o.pageX, n > 1];
            default:
              return [e.pageY, e.pageX, !1];
          }
        },
        D = function () {
          function t(e) {
            var t = h.find("iframe");
            t.length && t.css("pointer-events", e ? "auto" : "none");
          }
          function o(e, t, o, a) {
            if (
              ((h[0].idleTimer = d.scrollInertia < 233 ? 250 : 0),
              n.attr("id") === f[1])
            )
              var i = "x",
                l = (n[0].offsetLeft - t + a) * c.scrollRatio.x;
            else
              var i = "y",
                l = (n[0].offsetTop - e + o) * c.scrollRatio.y;
            F(r, l.toString(), { dir: i, drag: !0 });
          }
          var n,
            a,
            i,
            r = e(this),
            c = r.data("mCS"),
            d = c.opt,
            u = "mCS_" + c.idx,
            f = [
              "mCSB_" + c.idx + "_dragger_vertical",
              "mCSB_" + c.idx + "_dragger_horizontal",
            ],
            h = e("#mCSB_" + c.idx + "_container"),
            m = e("#" + f[0] + ",#" + f[1]),
            $ = d.advanced.releaseDraggableSelectors
              ? m.add(e(d.advanced.releaseDraggableSelectors))
              : m;
          m
            .bind(
              "mousedown." +
                u +
                " touchstart." +
                u +
                " pointerdown." +
                u +
                " MSPointerDown." +
                u,
              function (o) {
                if ((o.stopImmediatePropagation(), o.preventDefault(), J(o))) {
                  (s = !0),
                    l &&
                      (document.onselectstart = function () {
                        return !1;
                      }),
                    t(!1),
                    q(r);
                  var c = (n = e(this)).offset(),
                    u = O(o)[0] - c.top,
                    f = O(o)[1] - c.left,
                    h = n.height() + c.top,
                    m = n.width() + c.left;
                  h > u && u > 0 && m > f && f > 0 && ((a = u), (i = f)),
                    w(n, "active", d.autoExpandScrollbar);
                }
              }
            )
            .bind("touchmove." + u, function (e) {
              e.stopImmediatePropagation(), e.preventDefault();
              var t = n.offset(),
                r = O(e)[0] - t.top,
                l = O(e)[1] - t.left;
              o(a, i, r, l);
            }),
            e(document)
              .bind(
                "mousemove." + u + " pointermove." + u + " MSPointerMove." + u,
                function (e) {
                  if (n) {
                    var t = n.offset(),
                      r = O(e)[0] - t.top,
                      l = O(e)[1] - t.left;
                    a !== r && o(a, i, r, l);
                  }
                }
              )
              .add($)
              .bind(
                "mouseup." +
                  u +
                  " touchend." +
                  u +
                  " pointerup." +
                  u +
                  " MSPointerUp." +
                  u,
                function (e) {
                  n && (w(n, "active", d.autoExpandScrollbar), (n = null)),
                    (s = !1),
                    l && (document.onselectstart = null),
                    t(!0);
                }
              );
        },
        R = function () {
          function o(e) {
            if (!K(e) || s || O(e)[2]) return void (t = 0);
            (t = 1), (x = 0), (S = 0), C.removeClass("mCS_touch_action");
            var o = T.offset();
            (c = O(e)[0] - o.top),
              (d = O(e)[1] - o.left),
              (W = [O(e)[0], O(e)[1]]);
          }
          function n(e) {
            if (
              K(e) &&
              !s &&
              !O(e)[2] &&
              (e.stopImmediatePropagation(), !S || x)
            ) {
              m = V();
              var t = B.offset(),
                o = O(e)[0] - t.top,
                n = O(e)[1] - t.left,
                a = "mcsLinearOut";
              if (
                (D.push(o),
                R.push(n),
                (W[2] = Math.abs(O(e)[0] - W[0])),
                (W[3] = Math.abs(O(e)[1] - W[1])),
                w.overflowed[0])
              )
                var i = k[0].parent().height() - k[0].height(),
                  r =
                    c - o > 0 &&
                    o - c > -(i * w.scrollRatio.y) &&
                    (2 * W[3] < W[2] || "yx" === b.axis);
              if (w.overflowed[1])
                var u = k[1].parent().width() - k[1].width(),
                  f =
                    d - n > 0 &&
                    n - d > -(u * w.scrollRatio.x) &&
                    (2 * W[2] < W[3] || "yx" === b.axis);
              r || f
                ? (e.preventDefault(), (x = 1))
                : ((S = 1), C.addClass("mCS_touch_action")),
                (v =
                  "yx" === b.axis
                    ? [c - o, d - n]
                    : "x" === b.axis
                    ? [null, d - n]
                    : [c - o, null]),
                (T[0].idleTimer = 250),
                w.overflowed[0] && l(v[0], E, a, "y", "all", !0),
                w.overflowed[1] && l(v[1], E, a, "x", I, !0);
            }
          }
          function a(e) {
            if (!K(e) || s || O(e)[2]) return void (t = 0);
            (t = 1), e.stopImmediatePropagation(), q(C), (h = V());
            var o = B.offset();
            (u = O(e)[0] - o.top), (f = O(e)[1] - o.left), (D = []), (R = []);
          }
          function i(e) {
            if (K(e) && !s && !O(e)[2]) {
              e.stopImmediatePropagation(), (x = 0), (S = 0), ($ = V());
              var t = B.offset(),
                o = O(e)[0] - t.top,
                n = O(e)[1] - t.left;
              if (!($ - m > 30)) {
                var a = "mcsEaseOut",
                  i = 2.5 > (g = 1e3 / ($ - h)),
                  c = i ? [D[D.length - 2], R[R.length - 2]] : [0, 0],
                  d = [
                    Math.abs(
                      (p = i ? [o - c[0], n - c[1]] : [o - u, n - f])[0]
                    ),
                    Math.abs(p[1]),
                  ];
                g = i ? [Math.abs(p[0] / 4), Math.abs(p[1] / 4)] : [g, g];
                var C = [
                  Math.abs(T[0].offsetTop) - p[0] * r(d[0] / g[0], g[0]),
                  Math.abs(T[0].offsetLeft) - p[1] * r(d[1] / g[1], g[1]),
                ];
                (v =
                  "yx" === b.axis
                    ? [C[0], C[1]]
                    : "x" === b.axis
                    ? [null, C[1]]
                    : [C[0], null]),
                  (_ = [
                    4 * d[0] + b.scrollInertia,
                    4 * d[1] + b.scrollInertia,
                  ]);
                var y = parseInt(b.contentTouchScroll) || 0;
                (v[0] = d[0] > y ? v[0] : 0),
                  (v[1] = d[1] > y ? v[1] : 0),
                  w.overflowed[0] && l(v[0], _[0], a, "y", I, !1),
                  w.overflowed[1] && l(v[1], _[1], a, "x", I, !1);
              }
            }
          }
          function r(e, t) {
            var o = [1.5 * t, 2 * t, t / 1.5, t / 2];
            return e > 90
              ? t > 4
                ? o[0]
                : o[3]
              : e > 60
              ? t > 3
                ? o[3]
                : o[2]
              : e > 30
              ? t > 8
                ? o[1]
                : t > 6
                ? o[0]
                : t > 4
                ? t
                : o[2]
              : t > 8
              ? t
              : o[3];
          }
          function l(e, t, o, n, a, i) {
            e &&
              F(C, e.toString(), {
                dur: t,
                scrollEasing: o,
                dir: n,
                overwrite: a,
                drag: i,
              });
          }
          var c,
            d,
            u,
            f,
            h,
            m,
            $,
            p,
            g,
            v,
            _,
            x,
            S,
            C = e(this),
            w = C.data("mCS"),
            b = w.opt,
            y = "mCS_" + w.idx,
            B = e("#mCSB_" + w.idx),
            T = e("#mCSB_" + w.idx + "_container"),
            k = [
              e("#mCSB_" + w.idx + "_dragger_vertical"),
              e("#mCSB_" + w.idx + "_dragger_horizontal"),
            ],
            D = [],
            R = [],
            E = 0,
            I = "yx" === b.axis ? "none" : "all",
            W = [],
            P = T.find("iframe"),
            z = [
              "touchstart." + y + " pointerdown." + y + " MSPointerDown." + y,
              "touchmove." + y + " pointermove." + y + " MSPointerMove." + y,
              "touchend." + y + " pointerup." + y + " MSPointerUp." + y,
            ];
          T.bind(z[0], function (e) {
            o(e);
          }).bind(z[1], function (e) {
            n(e);
          }),
            B.bind(z[0], function (e) {
              a(e);
            }).bind(z[2], function (e) {
              i(e);
            }),
            P.length &&
              P.each(function () {
                e(this).load(function () {
                  L(this) &&
                    e(this.contentDocument || this.contentWindow.document)
                      .bind(z[0], function (e) {
                        o(e), a(e);
                      })
                      .bind(z[1], function (e) {
                        n(e);
                      })
                      .bind(z[2], function (e) {
                        i(e);
                      });
                });
              });
        },
        E = function () {
          function o(e, t, o) {
            (l.type = o && n ? "stepped" : "stepless"),
              (l.scrollAmount = 10),
              U(a, e, t, "mcsLinearOut", o ? 60 : null);
          }
          var n,
            a = e(this),
            i = a.data("mCS"),
            r = i.opt,
            l = i.sequential,
            c = "mCS_" + i.idx,
            d = e("#mCSB_" + i.idx + "_container"),
            u = d.parent();
          d.bind("mousedown." + c, function (e) {
            t || n || ((n = 1), (s = !0));
          })
            .add(document)
            .bind("mousemove." + c, function (e) {
              if (
                !t &&
                n &&
                (window.getSelection
                  ? window.getSelection().toString()
                  : document.selection && "Control" != document.selection.type
                  ? document.selection.createRange().text
                  : 0)
              ) {
                var a = d.offset(),
                  s = O(e)[0] - a.top + d[0].offsetTop,
                  c = O(e)[1] - a.left + d[0].offsetLeft;
                s > 0 && s < u.height() && c > 0 && c < u.width()
                  ? l.step && o("off", null, "stepped")
                  : ("x" !== r.axis &&
                      i.overflowed[0] &&
                      (0 > s ? o("on", 38) : s > u.height() && o("on", 40)),
                    "y" !== r.axis &&
                      i.overflowed[1] &&
                      (0 > c ? o("on", 37) : c > u.width() && o("on", 39)));
              }
            })
            .bind("mouseup." + c, function (e) {
              t || (n && ((n = 0), o("off", null)), (s = !1));
            });
        },
        I = function () {
          function t(t, i) {
            if ((q(o), !W(o, t.target))) {
              var c =
                "auto" !== a.mouseWheel.deltaFactor
                  ? parseInt(a.mouseWheel.deltaFactor)
                  : l && t.deltaFactor < 100
                  ? 100
                  : t.deltaFactor || 100;
              if ("x" === a.axis || "x" === a.mouseWheel.axis)
                var d = "x",
                  u = [
                    Math.round(c * n.scrollRatio.x),
                    parseInt(a.mouseWheel.scrollAmount),
                  ],
                  f =
                    "auto" !== a.mouseWheel.scrollAmount
                      ? u[1]
                      : u[0] >= r.width()
                      ? 0.9 * r.width()
                      : u[0],
                  h = Math.abs(
                    e("#mCSB_" + n.idx + "_container")[0].offsetLeft
                  ),
                  m = s[1][0].offsetLeft,
                  $ = s[1].parent().width() - s[1].width(),
                  p = t.deltaX || t.deltaY || i;
              else
                var d = "y",
                  u = [
                    Math.round(c * n.scrollRatio.y),
                    parseInt(a.mouseWheel.scrollAmount),
                  ],
                  f =
                    "auto" !== a.mouseWheel.scrollAmount
                      ? u[1]
                      : u[0] >= r.height()
                      ? 0.9 * r.height()
                      : u[0],
                  h = Math.abs(e("#mCSB_" + n.idx + "_container")[0].offsetTop),
                  m = s[0][0].offsetTop,
                  $ = s[0].parent().height() - s[0].height(),
                  p = t.deltaY || i;
              ("y" !== d || n.overflowed[0]) &&
                ("x" !== d || n.overflowed[1]) &&
                ((a.mouseWheel.invert || t.webkitDirectionInvertedFromDevice) &&
                  (p = -p),
                a.mouseWheel.normalizeDelta && (p = 0 > p ? -1 : 1),
                ((p > 0 && 0 !== m) ||
                  (0 > p && m !== $) ||
                  a.mouseWheel.preventDefault) &&
                  (t.stopImmediatePropagation(), t.preventDefault()),
                F(o, (h - p * f).toString(), { dir: d }));
            }
          }
          if (e(this).data("mCS")) {
            var o = e(this),
              n = o.data("mCS"),
              a = n.opt,
              i = "mCS_" + n.idx,
              r = e("#mCSB_" + n.idx),
              s = [
                e("#mCSB_" + n.idx + "_dragger_vertical"),
                e("#mCSB_" + n.idx + "_dragger_horizontal"),
              ],
              c = e("#mCSB_" + n.idx + "_container").find("iframe");
            c.length &&
              c.each(function () {
                e(this).load(function () {
                  L(this) &&
                    e(this.contentDocument || this.contentWindow.document).bind(
                      "mousewheel." + i,
                      function (e, o) {
                        t(e, o);
                      }
                    );
                });
              }),
              r.bind("mousewheel." + i, function (e, o) {
                t(e, o);
              });
          }
        },
        L = function (e) {
          var t = null;
          try {
            t = (e.contentDocument || e.contentWindow.document).body.innerHTML;
          } catch (o) {}
          return null !== t;
        },
        W = function (t, o) {
          var n = o.nodeName.toLowerCase(),
            a = t.data("mCS").opt.mouseWheel.disableOver;
          return (
            e.inArray(n, a) > -1 &&
            !(e.inArray(n, ["select", "textarea"]) > -1 && !e(o).is(":focus"))
          );
        },
        P = function () {
          var t = e(this),
            o = t.data("mCS"),
            n = "mCS_" + o.idx,
            a = e("#mCSB_" + o.idx + "_container"),
            i = a.parent();
          e(".mCSB_" + o.idx + "_scrollbar ." + c[12])
            .bind(
              "touchstart." + n + " pointerdown." + n + " MSPointerDown." + n,
              function (e) {
                s = !0;
              }
            )
            .bind(
              "touchend." + n + " pointerup." + n + " MSPointerUp." + n,
              function (e) {
                s = !1;
              }
            )
            .bind("click." + n, function (n) {
              if (
                e(n.target).hasClass(c[12]) ||
                e(n.target).hasClass("mCSB_draggerRail")
              ) {
                q(t);
                var r = e(this),
                  l = r.find(".mCSB_dragger");
                if (r.parent(".mCSB_scrollTools_horizontal").length > 0) {
                  if (!o.overflowed[1]) return;
                  var s = "x",
                    d = n.pageX > l.offset().left ? -1 : 1,
                    u = Math.abs(a[0].offsetLeft) - 0.9 * d * i.width();
                } else {
                  if (!o.overflowed[0]) return;
                  var s = "y",
                    d = n.pageY > l.offset().top ? -1 : 1,
                    u = Math.abs(a[0].offsetTop) - 0.9 * d * i.height();
                }
                F(t, u.toString(), { dir: s, scrollEasing: "mcsEaseInOut" });
              }
            });
        },
        z = function () {
          var t = e(this),
            o = t.data("mCS"),
            n = o.opt,
            a = "mCS_" + o.idx,
            i = e("#mCSB_" + o.idx + "_container"),
            r = i.parent();
          i.bind("focusin." + a, function (o) {
            var a = e(document.activeElement),
              l = i.find(".mCustomScrollBox").length;
            a.is(n.advanced.autoScrollOnFocus) &&
              (q(t),
              clearTimeout(t[0]._focusTimeout),
              (t[0]._focusTimer = l ? 17 * l : 0),
              (t[0]._focusTimeout = setTimeout(function () {
                var e = [ee(a)[0], ee(a)[1]],
                  o = [i[0].offsetTop, i[0].offsetLeft],
                  l = [
                    o[0] + e[0] >= 0 &&
                      o[0] + e[0] < r.height() - a.outerHeight(!1),
                    o[1] + e[1] >= 0 &&
                      o[0] + e[1] < r.width() - a.outerWidth(!1),
                  ],
                  s = "yx" !== n.axis || l[0] || l[1] ? "all" : "none";
                "x" === n.axis ||
                  l[0] ||
                  F(t, e[0].toString(), {
                    dir: "y",
                    scrollEasing: "mcsEaseInOut",
                    overwrite: s,
                    dur: 0,
                  }),
                  "y" === n.axis ||
                    l[1] ||
                    F(t, e[1].toString(), {
                      dir: "x",
                      scrollEasing: "mcsEaseInOut",
                      overwrite: s,
                      dur: 0,
                    });
              }, t[0]._focusTimer)));
          });
        },
        A = function () {
          var t = e(this).data("mCS"),
            o = "mCS_" + t.idx,
            n = e("#mCSB_" + t.idx + "_container").parent();
          n.bind("scroll." + o, function (o) {
            (0 !== n.scrollTop() || 0 !== n.scrollLeft()) &&
              e(".mCSB_" + t.idx + "_scrollbar").css("visibility", "hidden");
          });
        },
        H = function () {
          var t = e(this),
            o = t.data("mCS"),
            n = o.opt,
            a = o.sequential,
            i = "mCS_" + o.idx;
          e(".mCSB_" + o.idx + "_scrollbar>a").bind(
            "mousedown." +
              i +
              " touchstart." +
              i +
              " pointerdown." +
              i +
              " MSPointerDown." +
              i +
              " mouseup." +
              i +
              " touchend." +
              i +
              " pointerup." +
              i +
              " MSPointerUp." +
              i +
              " mouseout." +
              i +
              " pointerout." +
              i +
              " MSPointerOut." +
              i +
              " click." +
              i,
            function (i) {
              function r(e, o) {
                (a.scrollAmount = n.snapAmount || n.scrollButtons.scrollAmount),
                  U(t, e, o);
              }
              if ((i.preventDefault(), J(i))) {
                var l = e(this).attr("class");
                switch (((a.type = n.scrollButtons.scrollType), i.type)) {
                  case "mousedown":
                  case "touchstart":
                  case "pointerdown":
                  case "MSPointerDown":
                    if ("stepped" === a.type) return;
                    (s = !0), (o.tweenRunning = !1), r("on", l);
                    break;
                  case "mouseup":
                  case "touchend":
                  case "pointerup":
                  case "MSPointerUp":
                  case "mouseout":
                  case "pointerout":
                  case "MSPointerOut":
                    if ("stepped" === a.type) return;
                    (s = !1), a.dir && r("off", l);
                    break;
                  case "click":
                    if ("stepped" !== a.type || o.tweenRunning) return;
                    r("on", l);
                }
              }
            }
          );
        },
        M = function () {
          function t(t) {
            function r(e, t) {
              (i.type = a.keyboard.scrollType),
                (i.scrollAmount = a.snapAmount || a.keyboard.scrollAmount),
                ("stepped" === i.type && n.tweenRunning) || U(o, e, t);
            }
            switch (t.type) {
              case "blur":
                n.tweenRunning && i.dir && r("off", null);
                break;
              case "keydown":
              case "keyup":
                var l = t.keyCode ? t.keyCode : t.which,
                  u = "on";
                if (
                  ("x" !== a.axis && (38 === l || 40 === l)) ||
                  ("y" !== a.axis && (37 === l || 39 === l))
                ) {
                  if (
                    ((38 === l || 40 === l) && !n.overflowed[0]) ||
                    ((37 === l || 39 === l) && !n.overflowed[1])
                  )
                    return;
                  "keyup" === t.type && (u = "off"),
                    e(document.activeElement).is(d) ||
                      (t.preventDefault(),
                      t.stopImmediatePropagation(),
                      r(u, l));
                } else if (33 === l || 34 === l) {
                  if (
                    ((n.overflowed[0] || n.overflowed[1]) &&
                      (t.preventDefault(), t.stopImmediatePropagation()),
                    "keyup" === t.type)
                  ) {
                    q(o);
                    var f = 34 === l ? -1 : 1;
                    if (
                      "x" === a.axis ||
                      ("yx" === a.axis && n.overflowed[1] && !n.overflowed[0])
                    )
                      var h = "x",
                        m = Math.abs(s[0].offsetLeft) - 0.9 * f * c.width();
                    else
                      var h = "y",
                        m = Math.abs(s[0].offsetTop) - 0.9 * f * c.height();
                    F(o, m.toString(), {
                      dir: h,
                      scrollEasing: "mcsEaseInOut",
                    });
                  }
                } else if (
                  (35 === l || 36 === l) &&
                  !e(document.activeElement).is(d) &&
                  ((n.overflowed[0] || n.overflowed[1]) &&
                    (t.preventDefault(), t.stopImmediatePropagation()),
                  "keyup" === t.type)
                ) {
                  if (
                    "x" === a.axis ||
                    ("yx" === a.axis && n.overflowed[1] && !n.overflowed[0])
                  )
                    var h = "x",
                      m = 35 === l ? Math.abs(c.width() - s.outerWidth(!1)) : 0;
                  else
                    var h = "y",
                      m =
                        35 === l ? Math.abs(c.height() - s.outerHeight(!1)) : 0;
                  F(o, m.toString(), { dir: h, scrollEasing: "mcsEaseInOut" });
                }
            }
          }
          var o = e(this),
            n = o.data("mCS"),
            a = n.opt,
            i = n.sequential,
            r = "mCS_" + n.idx,
            l = e("#mCSB_" + n.idx),
            s = e("#mCSB_" + n.idx + "_container"),
            c = s.parent(),
            d =
              "input,textarea,select,datalist,keygen,[contenteditable='true']",
            u = s.find("iframe"),
            f = ["blur." + r + " keydown." + r + " keyup." + r];
          u.length &&
            u.each(function () {
              e(this).load(function () {
                L(this) &&
                  e(this.contentDocument || this.contentWindow.document).bind(
                    f[0],
                    function (e) {
                      t(e);
                    }
                  );
              });
            }),
            l.attr("tabindex", "0").bind(f[0], function (e) {
              t(e);
            });
        },
        U = function (t, o, n, a, i) {
          function r(e) {
            var o = "stepped" !== d.type,
              n = i || (e ? (o ? h / 1.5 : m) : 1e3 / 60),
              s = e ? (o ? 7.5 : 40) : 2.5,
              c = [Math.abs(u[0].offsetTop), Math.abs(u[0].offsetLeft)],
              f = [
                l.scrollRatio.y > 10 ? 10 : l.scrollRatio.y,
                l.scrollRatio.x > 10 ? 10 : l.scrollRatio.x,
              ],
              $ =
                "x" === d.dir[0]
                  ? c[1] + d.dir[1] * f[1] * s
                  : c[0] + d.dir[1] * f[0] * s,
              p =
                "x" === d.dir[0]
                  ? c[1] + d.dir[1] * parseInt(d.scrollAmount)
                  : c[0] + d.dir[1] * parseInt(d.scrollAmount),
              g = "auto" !== d.scrollAmount ? p : $;
            return (
              e && 17 > n && (g = "x" === d.dir[0] ? c[1] : c[0]),
              F(t, g.toString(), {
                dir: d.dir[0],
                scrollEasing:
                  a ||
                  (e ? (o ? "mcsLinearOut" : "mcsEaseInOut") : "mcsLinear"),
                dur: n,
                onComplete: !!e,
              }),
              e
                ? void (d.dir = !1)
                : (clearTimeout(d.step),
                  void (d.step = setTimeout(function () {
                    r();
                  }, n)))
            );
          }
          var l = t.data("mCS"),
            s = l.opt,
            d = l.sequential,
            u = e("#mCSB_" + l.idx + "_container"),
            f = "stepped" === d.type,
            h = s.scrollInertia < 26 ? 26 : s.scrollInertia,
            m = s.scrollInertia < 1 ? 17 : s.scrollInertia;
          switch (o) {
            case "on":
              if (
                ((d.dir = [
                  n === c[16] || n === c[15] || 39 === n || 37 === n
                    ? "x"
                    : "y",
                  n === c[13] || n === c[15] || 38 === n || 37 === n ? -1 : 1,
                ]),
                q(t),
                Q(n) && "stepped" === d.type)
              )
                return;
              r(f);
              break;
            case "off":
              clearTimeout(d.step),
                G(d, "step"),
                q(t),
                (f || (l.tweenRunning && d.dir)) && r(!0);
          }
        },
        X = function (t) {
          var o = e(this).data("mCS").opt,
            n = [];
          return (
            "function" == typeof t && (t = t()),
            t instanceof Array
              ? (n =
                  t.length > 1
                    ? [t[0], t[1]]
                    : "x" === o.axis
                    ? [null, t[0]]
                    : [t[0], null])
              : ((n[0] = t.y ? t.y : t.x || "x" === o.axis ? null : t),
                (n[1] = t.x ? t.x : t.y || "y" === o.axis ? null : t)),
            "function" == typeof n[0] && (n[0] = n[0]()),
            "function" == typeof n[1] && (n[1] = n[1]()),
            n
          );
        },
        Y = function (t, o) {
          if (null != t && void 0 !== t) {
            var n = e(this),
              a = n.data("mCS"),
              i = a.opt,
              r = e("#mCSB_" + a.idx + "_container"),
              l = r.parent();
            o || (o = "x" === i.axis ? "x" : "y");
            var s = "x" === o ? r.outerWidth(!1) : r.outerHeight(!1),
              c = "x" === o ? r[0].offsetLeft : r[0].offsetTop,
              u = "x" === o ? "left" : "top";
            switch (typeof t) {
              case "function":
                return t();
              case "object":
                var f = t.jquery ? t : e(t);
                if (!f.length) return;
                return "x" === o ? ee(f)[1] : ee(f)[0];
              case "string":
              case "number":
                if (Q(t)) return Math.abs(t);
                if (-1 !== t.indexOf("%"))
                  return Math.abs((s * parseInt(t)) / 100);
                if (-1 !== t.indexOf("-="))
                  return Math.abs(c - parseInt(t.split("-=")[1]));
                if (-1 !== t.indexOf("+=")) {
                  var h = c + parseInt(t.split("+=")[1]);
                  return h >= 0 ? 0 : Math.abs(h);
                }
                if (-1 !== t.indexOf("px") && Q(t.split("px")[0]))
                  return Math.abs(t.split("px")[0]);
                if ("top" === t || "left" === t) return 0;
                if ("bottom" === t)
                  return Math.abs(l.height() - r.outerHeight(!1));
                if ("right" === t)
                  return Math.abs(l.width() - r.outerWidth(!1));
                if ("first" === t || "last" === t) {
                  var f = r.find(":" + t);
                  return "x" === o ? ee(f)[1] : ee(f)[0];
                }
                return e(t).length
                  ? "x" === o
                    ? ee(e(t))[1]
                    : ee(e(t))[0]
                  : (r.css(u, t), void d.update.call(null, n[0]));
            }
          }
        },
        j = function (t) {
          function o() {
            var e = 0;
            return (
              l.advanced.updateOnImageLoad && (e = s.find("img").length), e
            );
          }
          function n() {
            !0 === l.advanced.updateOnSelectorChange &&
              (l.advanced.updateOnSelectorChange = "*");
            var t = 0,
              o = s.find(l.advanced.updateOnSelectorChange);
            return (
              l.advanced.updateOnSelectorChange &&
                o.length > 0 &&
                o.each(function () {
                  t += e(this).height() + e(this).width();
                }),
              t
            );
          }
          function a(e) {
            clearTimeout(s[0].autoUpdate), d.update.call(null, i[0], e);
          }
          var i = e(this),
            r = i.data("mCS"),
            l = r.opt,
            s = e("#mCSB_" + r.idx + "_container");
          if (t)
            return clearTimeout(s[0].autoUpdate), void G(s[0], "autoUpdate");
          var u,
            f,
            h,
            m = s.parent(),
            $ = [
              e("#mCSB_" + r.idx + "_scrollbar_vertical"),
              e("#mCSB_" + r.idx + "_scrollbar_horizontal"),
            ],
            p = function () {
              return [
                $[0].is(":visible") ? $[0].outerHeight(!0) : 0,
                $[1].is(":visible") ? $[1].outerWidth(!0) : 0,
              ];
            },
            g = n(),
            v = [
              s.outerHeight(!1),
              s.outerWidth(!1),
              m.height(),
              m.width(),
              p()[0],
              p()[1],
            ],
            _ = o();
          !(function t() {
            return (
              clearTimeout(s[0].autoUpdate),
              0 === i.parents("html").length
                ? void (i = null)
                : void (s[0].autoUpdate = setTimeout(function () {
                    return l.advanced.updateOnSelectorChange && (u = n()) !== g
                      ? (a(3), void (g = u))
                      : (l.advanced.updateOnContentResize &&
                          ((f = [
                            s.outerHeight(!1),
                            s.outerWidth(!1),
                            m.height(),
                            m.width(),
                            p()[0],
                            p()[1],
                          ])[0] !== v[0] ||
                            f[1] !== v[1] ||
                            f[2] !== v[2] ||
                            f[3] !== v[3] ||
                            f[4] !== v[4] ||
                            f[5] !== v[5]) &&
                          (a(f[0] !== v[0] || f[1] !== v[1]), (v = f)),
                        l.advanced.updateOnImageLoad &&
                          (h = o()) !== _ &&
                          (s.find("img").each(function () {
                            (function t(o) {
                              if (e(o).hasClass(c[2])) return void a();
                              var n,
                                i,
                                r = new Image();
                              (r.onload =
                                ((n = r),
                                (i = function t() {
                                  (this.onload = null),
                                    e(o).addClass(c[2]),
                                    a(2);
                                }),
                                function () {
                                  return i.apply(n, arguments);
                                })),
                                (r.src = o.src);
                            })(this);
                          }),
                          (_ = h)),
                        void (
                          (l.advanced.updateOnSelectorChange ||
                            l.advanced.updateOnContentResize ||
                            l.advanced.updateOnImageLoad) &&
                          t()
                        ));
                  }, l.advanced.autoUpdateTimeout))
            );
          })();
        },
        q = function (t) {
          var o = t.data("mCS");
          e(
            "#mCSB_" +
              o.idx +
              "_container,#mCSB_" +
              o.idx +
              "_container_wrapper,#mCSB_" +
              o.idx +
              "_dragger_vertical,#mCSB_" +
              o.idx +
              "_dragger_horizontal"
          ).each(function () {
            Z.call(this);
          });
        },
        F = function (t, o, n) {
          function a(e) {
            return c && d.callbacks[e] && "function" == typeof d.callbacks[e];
          }
          function i() {
            var e = [m[0].offsetTop, m[0].offsetLeft],
              o = [v[0].offsetTop, v[0].offsetLeft],
              a = [m.outerHeight(!1), m.outerWidth(!1)],
              i = [h.height(), h.width()];
            t[0].mcs = {
              content: m,
              top: e[0],
              left: e[1],
              draggerTop: o[0],
              draggerLeft: o[1],
              topPct: Math.round(
                (100 * Math.abs(e[0])) / (Math.abs(a[0]) - i[0])
              ),
              leftPct: Math.round(
                (100 * Math.abs(e[1])) / (Math.abs(a[1]) - i[1])
              ),
              direction: n.dir,
            };
          }
          var r,
            l,
            s,
            c = t.data("mCS"),
            d = c.opt,
            u = {
              trigger: "internal",
              dir: "y",
              scrollEasing: "mcsEaseOut",
              drag: !1,
              dur: d.scrollInertia,
              overwrite: "all",
              callbacks: !0,
              onStart: !0,
              onUpdate: !0,
              onComplete: !0,
            },
            n = e.extend(u, n),
            f = [n.dur, n.drag ? 0 : n.dur],
            h = e("#mCSB_" + c.idx),
            m = e("#mCSB_" + c.idx + "_container"),
            $ = m.parent(),
            p = d.callbacks.onTotalScrollOffset
              ? X.call(t, d.callbacks.onTotalScrollOffset)
              : [0, 0],
            g = d.callbacks.onTotalScrollBackOffset
              ? X.call(t, d.callbacks.onTotalScrollBackOffset)
              : [0, 0];
          if (
            ((c.trigger = n.trigger),
            (0 !== $.scrollTop() || 0 !== $.scrollLeft()) &&
              (e(".mCSB_" + c.idx + "_scrollbar").css("visibility", "visible"),
              $.scrollTop(0).scrollLeft(0)),
            "_resetY" !== o ||
              c.contentReset.y ||
              (a("onOverflowYNone") && d.callbacks.onOverflowYNone.call(t[0]),
              (c.contentReset.y = 1)),
            "_resetX" !== o ||
              c.contentReset.x ||
              (a("onOverflowXNone") && d.callbacks.onOverflowXNone.call(t[0]),
              (c.contentReset.x = 1)),
            "_resetY" !== o && "_resetX" !== o)
          ) {
            switch (
              ((c.contentReset.y || !t[0].mcs) &&
                c.overflowed[0] &&
                (a("onOverflowY") && d.callbacks.onOverflowY.call(t[0]),
                (c.contentReset.x = null)),
              (c.contentReset.x || !t[0].mcs) &&
                c.overflowed[1] &&
                (a("onOverflowX") && d.callbacks.onOverflowX.call(t[0]),
                (c.contentReset.x = null)),
              d.snapAmount &&
                (o =
                  ((r = o),
                  (l = d.snapAmount),
                  Math.round(r / l) * l - (s = d.snapOffset))),
              n.dir)
            ) {
              case "x":
                var v = e("#mCSB_" + c.idx + "_dragger_horizontal"),
                  _ = "left",
                  x = m[0].offsetLeft,
                  S = [
                    h.width() - m.outerWidth(!1),
                    v.parent().width() - v.width(),
                  ],
                  C = [o, 0 === o ? 0 : o / c.scrollRatio.x],
                  b = p[1],
                  y = g[1],
                  B = b > 0 ? b / c.scrollRatio.x : 0,
                  T = y > 0 ? y / c.scrollRatio.x : 0;
                break;
              case "y":
                var v = e("#mCSB_" + c.idx + "_dragger_vertical"),
                  _ = "top",
                  x = m[0].offsetTop,
                  S = [
                    h.height() - m.outerHeight(!1),
                    v.parent().height() - v.height(),
                  ],
                  C = [o, 0 === o ? 0 : o / c.scrollRatio.y],
                  b = p[0],
                  y = g[0],
                  B = b > 0 ? b / c.scrollRatio.y : 0,
                  T = y > 0 ? y / c.scrollRatio.y : 0;
            }
            C[1] < 0 || (0 === C[0] && 0 === C[1])
              ? (C = [0, 0])
              : C[1] >= S[1]
              ? (C = [S[0], S[1]])
              : (C[0] = -C[0]),
              t[0].mcs || (i(), a("onInit") && d.callbacks.onInit.call(t[0])),
              clearTimeout(m[0].onCompleteTimeout),
              (c.tweenRunning ||
                !((0 === x && C[0] >= 0) || (x === S[0] && C[0] <= S[0]))) &&
                (N(v[0], _, Math.round(C[1]), f[1], n.scrollEasing),
                N(
                  m[0],
                  _,
                  Math.round(C[0]),
                  f[0],
                  n.scrollEasing,
                  n.overwrite,
                  {
                    onStart: function () {
                      n.callbacks &&
                        n.onStart &&
                        !c.tweenRunning &&
                        (a("onScrollStart") &&
                          (i(), d.callbacks.onScrollStart.call(t[0])),
                        (c.tweenRunning = !0),
                        w(v),
                        (c.cbOffsets = [
                          d.callbacks.alwaysTriggerOffsets || x >= S[0] + b,
                          d.callbacks.alwaysTriggerOffsets || -y >= x,
                        ]));
                    },
                    onUpdate: function () {
                      n.callbacks &&
                        n.onUpdate &&
                        a("whileScrolling") &&
                        (i(), d.callbacks.whileScrolling.call(t[0]));
                    },
                    onComplete: function () {
                      if (n.callbacks && n.onComplete) {
                        "yx" === d.axis && clearTimeout(m[0].onCompleteTimeout);
                        var e = m[0].idleTimer || 0;
                        m[0].onCompleteTimeout = setTimeout(function () {
                          a("onScroll") &&
                            (i(), d.callbacks.onScroll.call(t[0])),
                            a("onTotalScroll") &&
                              C[1] >= S[1] - B &&
                              c.cbOffsets[0] &&
                              (i(), d.callbacks.onTotalScroll.call(t[0])),
                            a("onTotalScrollBack") &&
                              C[1] <= T &&
                              c.cbOffsets[1] &&
                              (i(), d.callbacks.onTotalScrollBack.call(t[0])),
                            (c.tweenRunning = !1),
                            (m[0].idleTimer = 0),
                            w(v, "hide");
                        }, e);
                      }
                    },
                  }
                ));
          }
        },
        N = function (e, t, o, n, a, i, r) {
          function l() {
            v.stop ||
              ($ || u.call(),
              ($ = V() - m),
              s(),
              $ >= v.time &&
                ((v.time = $ > v.time ? $ + c - ($ - v.time) : $ + c - 1),
                v.time < $ + 1 && (v.time = $ + 1)),
              v.time < n ? (v.id = d(l)) : h.call());
          }
          function s() {
            n > 0
              ? ((v.currVal = (function e(t, o, n, a, i) {
                  switch (i) {
                    case "linear":
                    case "mcsLinear":
                      return (n * t) / a + o;
                    case "mcsLinearOut":
                      return (t /= a), n * Math.sqrt(1 - --t * t) + o;
                    case "easeInOutSmooth":
                      return 1 > (t /= a / 2)
                        ? (n / 2) * t * t + o
                        : (-n / 2) * (--t * (t - 2) - 1) + o;
                    case "easeInOutStrong":
                      return 1 > (t /= a / 2)
                        ? (n / 2) * Math.pow(2, 10 * (t - 1)) + o
                        : (n / 2) * (-Math.pow(2, -10 * --t) + 2) + o;
                    case "easeInOut":
                    case "mcsEaseInOut":
                      return 1 > (t /= a / 2)
                        ? (n / 2) * t * t * t + o
                        : (n / 2) * ((t -= 2) * t * t + 2) + o;
                    case "easeOutSmooth":
                      return (t /= a), -n * (--t * t * t * t - 1) + o;
                    case "easeOutStrong":
                      return n * (-Math.pow(2, (-10 * t) / a) + 1) + o;
                    default:
                      var r = (t /= a) * t,
                        l = r * t;
                      return (
                        o +
                        n *
                          (0.499999999999997 * l * r +
                            -2.5 * r * r +
                            5.5 * l +
                            -6.5 * r +
                            4 * t)
                      );
                  }
                })(v.time, p, _, n, a)),
                (g[t] = Math.round(v.currVal) + "px"))
              : (g[t] = o + "px"),
              f.call();
          }
          e._mTween || (e._mTween = { top: {}, left: {} });
          var c,
            d,
            r = r || {},
            u = r.onStart || function () {},
            f = r.onUpdate || function () {},
            h = r.onComplete || function () {},
            m = V(),
            $ = 0,
            p = e.offsetTop,
            g = e.style,
            v = e._mTween[t];
          "left" === t && (p = e.offsetLeft);
          var _ = o - p;
          (v.stop = 0),
            "none" !== i &&
              null != v.id &&
              (window.requestAnimationFrame
                ? window.cancelAnimationFrame(v.id)
                : clearTimeout(v.id),
              (v.id = null)),
            (c = 1e3 / 60),
            (v.time = $ + c),
            (d = window.requestAnimationFrame
              ? window.requestAnimationFrame
              : function (e) {
                  return s(), setTimeout(e, 0.01);
                }),
            (v.id = d(l));
        },
        V = function () {
          return window.performance && window.performance.now
            ? window.performance.now()
            : window.performance && window.performance.webkitNow
            ? window.performance.webkitNow()
            : Date.now
            ? Date.now()
            : new Date().getTime();
        },
        Z = function () {
          var e = this;
          e._mTween || (e._mTween = { top: {}, left: {} });
          for (var t = ["top", "left"], o = 0; o < t.length; o++) {
            var n = t[o];
            e._mTween[n].id &&
              (window.requestAnimationFrame
                ? window.cancelAnimationFrame(e._mTween[n].id)
                : clearTimeout(e._mTween[n].id),
              (e._mTween[n].id = null),
              (e._mTween[n].stop = 1));
          }
        },
        G = function (e, t) {
          try {
            delete e[t];
          } catch (o) {
            e[t] = null;
          }
        },
        J = function (e) {
          return !(e.which && 1 !== e.which);
        },
        K = function (e) {
          var t = e.originalEvent.pointerType;
          return !(t && "touch" !== t && 2 !== t);
        },
        Q = function (e) {
          return !isNaN(parseFloat(e)) && isFinite(e);
        },
        ee = function (e) {
          var t = e.parents(".mCSB_container");
          return [
            e.offset().top - t.offset().top,
            e.offset().left - t.offset().left,
          ];
        };
      (e.fn[o] = function (t) {
        return d[t]
          ? d[t].apply(this, Array.prototype.slice.call(arguments, 1))
          : "object" != typeof t && t
          ? void e.error("Method " + t + " does not exist")
          : d.init.apply(this, arguments);
      }),
        (e[o] = function (t) {
          return d[t]
            ? d[t].apply(this, Array.prototype.slice.call(arguments, 1))
            : "object" != typeof t && t
            ? void e.error("Method " + t + " does not exist")
            : d.init.apply(this, arguments);
        }),
        (e[o].defaults = a),
        (window[o] = !0),
        e(window).load(function () {
          e(n)[o](),
            e.extend(e.expr[":"], {
              mcsInView:
                e.expr[":"].mcsInView ||
                function (t) {
                  var o,
                    n,
                    a = e(t),
                    i = a.parents(".mCSB_container");
                  if (i.length)
                    return (
                      (o = i.parent()),
                      (n = [i[0].offsetTop, i[0].offsetLeft])[0] + ee(a)[0] >=
                        0 &&
                        n[0] + ee(a)[0] < o.height() - a.outerHeight(!1) &&
                        n[1] + ee(a)[1] >= 0 &&
                        n[1] + ee(a)[1] < o.width() - a.outerWidth(!1)
                    );
                },
              mcsOverflow:
                e.expr[":"].mcsOverflow ||
                function (t) {
                  var o = e(t).data("mCS");
                  if (o) return o.overflowed[0] || o.overflowed[1];
                },
            });
        });
    }),
      (o = "function" == typeof define && define.amd),
      (n = "undefined" != typeof module && module.exports),
      (a = "https:" == document.location.protocol ? "https:" : "http:"),
      o ||
        (n
          ? require("jquery-mousewheel")(e)
          : e.event.special.mousewheel ||
            e("head").append(
              decodeURI(
                "%3Cscript src=" +
                  a +
                  "//cdnjs.cloudflare.com/ajax/libs/jquery-mousewheel/3.1.12/jquery.mousewheel.min.js%3E%3C/script%3E"
              )
            )),
      t();
  });
