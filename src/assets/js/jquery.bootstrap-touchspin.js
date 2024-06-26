!(function (t) {
  "use strict";
  var o = 0;
  function n(o, n) {
    return t.map(o, function (t) {
      var o, s;
      return (o = t), o + ".touchspin_" + (s = n);
    });
  }
  t.fn.TouchSpin = function (s) {
    if ("destroy" === s) {
      this.each(function () {
        var o = t(this).data();
        t(document).off(
          n(
            [
              "mouseup",
              "touchend",
              "touchcancel",
              "mousemove",
              "touchmove",
              "scroll",
              "scrollstart",
            ],
            o.spinnerid
          ).join(" ")
        );
      });
      return;
    }
    var i = {
        min: 0,
        max: 100,
        initval: "",
        replacementval: "",
        step: 1,
        decimals: 0,
        stepinterval: 100,
        forcestepdivisibility: "round",
        stepintervaldelay: 500,
        verticalbuttons: !1,
        verticalupclass: "glyphicon glyphicon-chevron-up",
        verticaldownclass: "glyphicon glyphicon-chevron-down",
        prefix: "",
        postfix: "",
        prefix_extraclass: "",
        postfix_extraclass: "",
        booster: !0,
        boostat: 10,
        maxboostedstep: !1,
        mousewheel: !0,
        buttondown_class: "btn btn-default",
        buttonup_class: "btn btn-default",
        buttondown_txt: "-",
        buttonup_txt: "+",
      },
      e = {
        min: "min",
        max: "max",
        initval: "init-val",
        replacementval: "replacement-val",
        step: "step",
        decimals: "decimals",
        stepinterval: "step-interval",
        verticalbuttons: "vertical-buttons",
        verticalupclass: "vertical-up-class",
        verticaldownclass: "vertical-down-class",
        forcestepdivisibility: "force-step-divisibility",
        stepintervaldelay: "step-interval-delay",
        prefix: "prefix",
        postfix: "postfix",
        prefix_extraclass: "prefix-extra-class",
        postfix_extraclass: "postfix-extra-class",
        booster: "booster",
        boostat: "boostat",
        maxboostedstep: "max-boosted-step",
        mousewheel: "mouse-wheel",
        buttondown_class: "button-down-class",
        buttonup_class: "button-up-class",
        buttondown_txt: "button-down-txt",
        buttonup_txt: "button-up-txt",
      };
    return this.each(function () {
      var a,
        p,
        u,
        r,
        c,
        l,
        d,
        f,
        b = t(this),
        h = b.data(),
        v = 0,
        x = !1;
      function g() {
        var t, o, n;
        if ("" === (t = b.val())) {
          "" !== a.replacementval &&
            (b.val(a.replacementval), b.trigger("change"));
          return;
        }
        (!(a.decimals > 0) || "." !== t) &&
          (isNaN((o = parseFloat(t))) &&
            (o = "" !== a.replacementval ? a.replacementval : 0),
          (n = o),
          o.toString() !== t && (n = o),
          o < a.min && (n = a.min),
          o > a.max && (n = a.max),
          (n = (function t(o) {
            switch (a.forcestepdivisibility) {
              case "round":
                return (Math.round(o / a.step) * a.step).toFixed(a.decimals);
              case "floor":
                return (Math.floor(o / a.step) * a.step).toFixed(a.decimals);
              case "ceil":
                return (Math.ceil(o / a.step) * a.step).toFixed(a.decimals);
              default:
                return o;
            }
          })(n)),
          Number(t).toString() !== n.toString() &&
            (b.val(n), b.trigger("change")));
      }
      function m() {
        if (!a.booster) return a.step;
        var t = Math.pow(2, Math.floor(v / a.boostat)) * a.step;
        return (
          a.maxboostedstep &&
            t > a.maxboostedstep &&
            (r = Math.round(r / (t = a.maxboostedstep)) * t),
          Math.max(a.step, t)
        );
      }
      function w() {
        g(), isNaN((r = parseFloat(u.input.val()))) && (r = 0);
        var t = r,
          o = m();
        (r += o) > a.max && ((r = a.max), b.trigger("touchspin.on.max"), D()),
          u.input.val(Number(r).toFixed(a.decimals)),
          t !== r && b.trigger("change");
      }
      function y() {
        g(), isNaN((r = parseFloat(u.input.val()))) && (r = 0);
        var t = r,
          o = m();
        (r -= o) < a.min && ((r = a.min), b.trigger("touchspin.on.min"), D()),
          u.input.val(r.toFixed(a.decimals)),
          t !== r && b.trigger("change");
      }
      function $() {
        D(),
          (v = 0),
          (x = "down"),
          b.trigger("touchspin.on.startspin"),
          b.trigger("touchspin.on.startdownspin"),
          (d = setTimeout(function () {
            c = setInterval(function () {
              v++, y();
            }, a.stepinterval);
          }, a.stepintervaldelay));
      }
      function C() {
        D(),
          (v = 0),
          (x = "up"),
          b.trigger("touchspin.on.startspin"),
          b.trigger("touchspin.on.startupspin"),
          (f = setTimeout(function () {
            l = setInterval(function () {
              v++, w();
            }, a.stepinterval);
          }, a.stepintervaldelay));
      }
      function D() {
        switch (
          (clearTimeout(d),
          clearTimeout(f),
          clearInterval(c),
          clearInterval(l),
          x)
        ) {
          case "up":
            b.trigger("touchspin.on.stopupspin"),
              b.trigger("touchspin.on.stopspin");
            break;
          case "down":
            b.trigger("touchspin.on.stopdownspin"),
              b.trigger("touchspin.on.stopspin");
        }
        (v = 0), (x = !1);
      }
      !(function r() {
        if (!b.data("alreadyinitialized")) {
          var c, l, d, f;
          if (
            (b.data("alreadyinitialized", !0),
            (o += 1),
            b.data("spinnerid", o),
            !b.is("input"))
          ) {
            console.log("Must be an input.");
            return;
          }
          (a = t.extend(
            {},
            i,
            h,
            ((c = {}),
            t.each(e, function (t, o) {
              var n = "bts-" + o;
              b.is("[data-" + n + "]") && (c[t] = b.data(n));
            }),
            c),
            s
          )),
            "" !== a.initval && "" === b.val() && b.val(a.initval),
            g(),
            (l = b.val()),
            (d = b.parent()),
            "" !== l && (l = Number(l).toFixed(a.decimals)),
            b.data("initvalue", l).val(l),
            b.addClass("form-control"),
            d.hasClass("input-group")
              ? (function o(n) {
                  n.addClass("bootstrap-touchspin");
                  var s,
                    i,
                    e = b.prev(),
                    u = b.next(),
                    r =
                      '<span class="input-group-addon bootstrap-touchspin-prefix">' +
                      a.prefix +
                      "</span>",
                    c =
                      '<span class="input-group-addon bootstrap-touchspin-postfix">' +
                      a.postfix +
                      "</span>";
                  e.hasClass("input-group-btn")
                    ? ((s =
                        '<button class="' +
                        a.buttondown_class +
                        ' bootstrap-touchspin-down" type="button">' +
                        a.buttondown_txt +
                        "</button>"),
                      e.append(s))
                    : t(
                        (s =
                          '<span class="input-group-btn"><button class="' +
                          a.buttondown_class +
                          ' bootstrap-touchspin-down" type="button">' +
                          a.buttondown_txt +
                          "</button></span>")
                      ).insertBefore(b),
                    u.hasClass("input-group-btn")
                      ? ((i =
                          '<button class="' +
                          a.buttonup_class +
                          ' bootstrap-touchspin-up" type="button">' +
                          a.buttonup_txt +
                          "</button>"),
                        u.prepend(i))
                      : t(
                          (i =
                            '<span class="input-group-btn"><button class="' +
                            a.buttonup_class +
                            ' bootstrap-touchspin-up" type="button">' +
                            a.buttonup_txt +
                            "</button></span>")
                        ).insertAfter(b),
                    t(r).insertBefore(b),
                    t(c).insertAfter(b),
                    (p = n);
                })(d)
              : ((p = t(
                  (f = a.verticalbuttons
                    ? '<div class="input-group bootstrap-touchspin"><span class="input-group-addon bootstrap-touchspin-prefix">' +
                      a.prefix +
                      '</span><span class="input-group-addon bootstrap-touchspin-postfix">' +
                      a.postfix +
                      '</span><span class="input-group-btn-vertical"><button class="' +
                      a.buttondown_class +
                      ' bootstrap-touchspin-up" type="button"><i class="' +
                      a.verticalupclass +
                      '"></i></button><button class="' +
                      a.buttonup_class +
                      ' bootstrap-touchspin-down" type="button"><i class="' +
                      a.verticaldownclass +
                      '"></i></button></span></div>'
                    : '<div class="input-group bootstrap-touchspin"><span class="input-group-btn"><button class="' +
                      a.buttondown_class +
                      ' bootstrap-touchspin-down" type="button">' +
                      a.buttondown_txt +
                      '</button></span><span class="input-group-addon bootstrap-touchspin-prefix">' +
                      a.prefix +
                      '</span><span class="input-group-addon bootstrap-touchspin-postfix">' +
                      a.postfix +
                      '</span><span class="input-group-btn"><button class="' +
                      a.buttonup_class +
                      ' bootstrap-touchspin-up" type="button">' +
                      a.buttonup_txt +
                      "</button></span></div>")
                ).insertBefore(b)),
                t(".bootstrap-touchspin-prefix", p).after(b),
                b.hasClass("input-sm")
                  ? p.addClass("input-group-sm")
                  : b.hasClass("input-lg") && p.addClass("input-group-lg")),
            (u = {
              down: t(".bootstrap-touchspin-down", p),
              up: t(".bootstrap-touchspin-up", p),
              input: t("input", p),
              prefix: t(".bootstrap-touchspin-prefix", p).addClass(
                a.prefix_extraclass
              ),
              postfix: t(".bootstrap-touchspin-postfix", p).addClass(
                a.postfix_extraclass
              ),
            }),
            "" === a.prefix && u.prefix.hide(),
            "" === a.postfix && u.postfix.hide(),
            b.on("keydown", function (t) {
              var o = t.keyCode || t.which;
              38 === o
                ? ("up" !== x && (w(), C()), t.preventDefault())
                : 40 === o && ("down" !== x && (y(), $()), t.preventDefault());
            }),
            b.on("keyup", function (t) {
              var o = t.keyCode || t.which;
              38 === o ? D() : 40 === o && D();
            }),
            b.on("blur", function () {
              g();
            }),
            u.down.on("keydown", function (t) {
              var o = t.keyCode || t.which;
              (32 === o || 13 === o) &&
                ("down" !== x && (y(), $()), t.preventDefault());
            }),
            u.down.on("keyup", function (t) {
              var o = t.keyCode || t.which;
              (32 === o || 13 === o) && D();
            }),
            u.up.on("keydown", function (t) {
              var o = t.keyCode || t.which;
              (32 === o || 13 === o) &&
                ("up" !== x && (w(), C()), t.preventDefault());
            }),
            u.up.on("keyup", function (t) {
              var o = t.keyCode || t.which;
              (32 === o || 13 === o) && D();
            }),
            u.down.on("mousedown.touchspin", function (t) {
              u.down.off("touchstart.touchspin"),
                !b.is(":disabled") &&
                  (y(), $(), t.preventDefault(), t.stopPropagation());
            }),
            u.down.on("touchstart.touchspin", function (t) {
              u.down.off("mousedown.touchspin"),
                !b.is(":disabled") &&
                  (y(), $(), t.preventDefault(), t.stopPropagation());
            }),
            u.up.on("mousedown.touchspin", function (t) {
              u.up.off("touchstart.touchspin"),
                !b.is(":disabled") &&
                  (w(), C(), t.preventDefault(), t.stopPropagation());
            }),
            u.up.on("touchstart.touchspin", function (t) {
              u.up.off("mousedown.touchspin"),
                !b.is(":disabled") &&
                  (w(), C(), t.preventDefault(), t.stopPropagation());
            }),
            u.up.on("mouseout touchleave touchend touchcancel", function (t) {
              x && (t.stopPropagation(), D());
            }),
            u.down.on("mouseout touchleave touchend touchcancel", function (t) {
              x && (t.stopPropagation(), D());
            }),
            u.down.on("mousemove touchmove", function (t) {
              x && (t.stopPropagation(), t.preventDefault());
            }),
            u.up.on("mousemove touchmove", function (t) {
              x && (t.stopPropagation(), t.preventDefault());
            }),
            t(document).on(
              n(["mouseup", "touchend", "touchcancel"], o).join(" "),
              function (t) {
                x && (t.preventDefault(), D());
              }
            ),
            t(document).on(
              n(["mousemove", "touchmove", "scroll", "scrollstart"], o).join(
                " "
              ),
              function (t) {
                x && (t.preventDefault(), D());
              }
            ),
            b.on("mousewheel DOMMouseScroll", function (t) {
              if (a.mousewheel && b.is(":focus")) {
                var o =
                  t.originalEvent.wheelDelta ||
                  -t.originalEvent.deltaY ||
                  -t.originalEvent.detail;
                t.stopPropagation(), t.preventDefault(), o < 0 ? y() : w();
              }
            }),
            b.on("touchspin.uponce", function () {
              D(), w();
            }),
            b.on("touchspin.downonce", function () {
              D(), y();
            }),
            b.on("touchspin.startupspin", function () {
              C();
            }),
            b.on("touchspin.startdownspin", function () {
              $();
            }),
            b.on("touchspin.stopspin", function () {
              D();
            }),
            b.on("touchspin.updatesettings", function (o, n) {
              var s, i, e;
              (e = s = n),
                (a = t.extend({}, a, e)),
                g(),
                "" !== (i = u.input.val()) &&
                  ((i = Number(u.input.val())),
                  u.input.val(i.toFixed(a.decimals)));
            }),
            u.input.css("display", "block");
        }
      })();
    });
  };
})(jQuery);
