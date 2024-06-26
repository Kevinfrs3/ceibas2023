var Drupal = Drupal || {};
!(function (t, o) {
  "use strict";
  (o.behaviors.bootstrap = {
    attach: function (o) {
      t(o)
        .find(".tabbable")
        .once("bootstrap-tabs", function () {
          var o = t(this),
            a = o.find(".nav-tabs"),
            r = o.find(".tab-content"),
            s = parseInt(r.css("borderBottomRightRadius"), 10),
            e = function () {
              (o.hasClass("tabs-left") || o.hasClass("tabs-right")) &&
                r.css("min-height", a.outerHeight());
            };
          e(),
            (o.hasClass("tabs-left") || o.hasClass("tabs-right")) &&
              a.on("shown.bs.tab", 'a[data-toggle="tab"]', function (a) {
                e(),
                  o.hasClass("tabs-left")
                    ? t(a.target).parent().is(":first-child")
                      ? r.css("borderTopLeftRadius", "0")
                      : r.css("borderTopLeftRadius", s + "px")
                    : t(a.target).parent().is(":first-child")
                    ? r.css("borderTopRightRadius", "0")
                    : r.css("borderTopRightRadius", s + "px");
              });
        });
    },
  }),
    (o.behaviors.bootstrapFormHasError = {
      attach: function (o, a) {
        a.bootstrap &&
          a.bootstrap.formHasError &&
          t(o)
            .find(".form-item.has-error:not(.form-type-password.has-feedback)")
            .once("error", function () {
              var o = t(this),
                a = o.find(":input");
              a.on("keyup focus blur", function () {
                var t = a.val() || !1;
                o[t ? "removeClass" : "addClass"]("has-error"),
                  a[t ? "removeClass" : "addClass"]("error");
              });
            });
      },
    }),
    (o.behaviors.bootstrapPopovers = {
      attach: function (o, a) {
        if (a.bootstrap && a.bootstrap.popoverEnabled) {
          var r = t();
          a.bootstrap.popoverOptions.triggerAutoclose &&
            t(document).on("click", function (o) {
              r.length &&
                !t(o.target).is("[data-toggle=popover]") &&
                0 === t(o.target).parents(".popover.in").length &&
                (r.popover("hide"), (r = t()));
            });
          for (
            var s = t(o).find("[data-toggle=popover]").toArray(), e = 0;
            e < s.length;
            e++
          ) {
            var n = t(s[e]),
              i = t.extend({}, a.bootstrap.popoverOptions, n.data());
            i.content ||
              (i.content = function () {
                var o = t(this).data("target");
                return (
                  (o &&
                    t(o) &&
                    t(o).length &&
                    t(o)
                      .clone()
                      .removeClass("element-invisible")
                      .wrap("<div/>")
                      .parent()
                      [
                        t(this).data("bs.popover").options.html
                          ? "html"
                          : "text"
                      ]()) ||
                  ""
                );
              }),
              n.popover(i).on("click", function (t) {
                t.preventDefault();
              }),
              a.bootstrap.popoverOptions.triggerAutoclose &&
                n.on("show.bs.popover", function () {
                  r.length && r.popover("hide"), (r = t(this));
                });
          }
        }
      },
    }),
    (o.behaviors.bootstrapTooltips = {
      attach: function (o, a) {
        if (a.bootstrap && a.bootstrap.tooltipEnabled)
          for (
            var r = t(o).find('[data-toggle="tooltip"]').toArray(), s = 0;
            s < r.length;
            s++
          ) {
            var e = t(r[s]),
              n = t.extend({}, a.bootstrap.tooltipOptions, e.data());
            e.tooltip(n);
          }
      },
    });
  var a = t();
  (o.behaviors.bootstrapAnchors = {
    attach: function (o, r) {
      var s,
        e = ["html", "body"];
      if (!a.length)
        for (s = 0; s < e.length; s++) {
          var n = t(e[s]);
          if (n.scrollTop() > 0) {
            a = n;
            break;
          }
          if ((n.scrollTop(1), n.scrollTop() > 0)) {
            n.scrollTop(0), (a = n);
            break;
          }
        }
      if (r.bootstrap && "1" === r.bootstrap.anchorsFix) {
        var i = t(o).find("a").toArray();
        for (s = 0; s < i.length; s++)
          i[s].scrollTo || this.bootstrapAnchor(i[s]);
        a.once("bootstrap-anchors", function () {
          a.on(
            "click.bootstrap-anchors",
            'a[href*="#"]:not([data-toggle],[data-target],[data-slide])',
            function (t) {
              this.scrollTo && this.scrollTo(t);
            }
          );
        });
      }
    },
    bootstrapAnchor: function (r) {
      (r.validAnchor =
        "A" === r.nodeName &&
        (location.hostname === r.hostname || !r.hostname) &&
        r.hash.replace(/#/, "").length > 0),
        (r.scrollTo = function (s) {
          var e = "id",
            n = t(r.hash);
          if (
            (n.length ||
              ((e = "name"),
              (n = t('[name="' + r.hash.replace("#", "") + '"]'))),
            this.validAnchor || n.length)
          ) {
            var i =
              n.offset().top -
              parseInt(a.css("paddingTop"), 10) -
              parseInt(a.css("marginTop"), 10);
            if (i > 0) {
              s && s.preventDefault();
              var l = t("<div/>")
                .addClass("element-invisible")
                .attr(e, n.attr(e))
                .css({ position: "absolute", top: i + "px", zIndex: -1e3 })
                .appendTo(a);
              n.removeAttr(e);
              var p = function () {
                (location.hash = r.hash),
                  l.remove(),
                  n.attr(e, r.hash.replace("#", ""));
              };
              o.settings.bootstrap.anchorsSmoothScrolling
                ? a.animate({ scrollTop: i, avoidTransforms: !0 }, 400, p)
                : (a.scrollTop(i), p());
            }
          }
        });
    },
  }),
    (o.theme.tableDragChangedMarker = function () {
      return '<span class="tabledrag-changed glyphicon glyphicon-warning-sign text-warning"></span>';
    }),
    (o.theme.tableDragChangedWarning = function () {
      return (
        '<div class="tabledrag-changed-warning alert alert-warning messages warning">' +
        o.theme("tableDragChangedMarker") +
        " " +
        o.t(
          "Changes made in this table will not be saved until the form is submitted."
        ) +
        "</div>"
      );
    });
})(jQuery, Drupal);
