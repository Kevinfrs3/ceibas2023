!(function (t, e, n, o) {
  "use strict";
  if (n) {
    if (n.fn.fancybox) {
      "console" in t && console.log("fancyBox already initialized");
      return;
    }
    var i,
      s = {
        loop: !1,
        margin: [44, 0],
        gutter: 50,
        keyboard: !0,
        arrows: !0,
        infobar: !0,
        toolbar: !0,
        buttons: ["slideShow", "fullScreen", "thumbs", "share", "close"],
        idleTime: 3,
        smallBtn: "auto",
        protect: !1,
        modal: !1,
        image: { preload: "auto" },
        ajax: { settings: { data: { fancybox: !0 } } },
        iframe: {
          tpl: '<iframe id="fancybox-frame{rnd}" name="fancybox-frame{rnd}" class="fancybox-iframe" frameborder="0" vspace="0" hspace="0" webkitAllowFullScreen mozallowfullscreen allowFullScreen allowtransparency="true" src=""></iframe>',
          preload: !0,
          css: {},
          attr: { scrolling: "auto" },
        },
        defaultType: "image",
        animationEffect: "zoom",
        animationDuration: 500,
        zoomOpacity: "auto",
        transitionEffect: "fade",
        transitionDuration: 366,
        slideClass: "",
        baseClass: "",
        baseTpl:
          '<div class="fancybox-container" role="dialog" tabindex="-1"><div class="fancybox-bg"></div><div class="fancybox-inner"><div class="fancybox-infobar"><span data-fancybox-index></span>&nbsp;/&nbsp;<span data-fancybox-count></span></div><div class="fancybox-toolbar">{{buttons}}</div><div class="fancybox-navigation">{{arrows}}</div><div class="fancybox-stage"></div><div class="fancybox-caption-wrap"><div class="fancybox-caption"></div></div></div></div>',
        spinnerTpl: '<div class="fancybox-loading"></div>',
        errorTpl: '<div class="fancybox-error"><p>{{ERROR}}<p></div>',
        btnTpl: {
          download:
            '<a download data-fancybox-download class="fancybox-button fancybox-button--download" title="{{DOWNLOAD}}"><svg viewBox="0 0 40 40"><path d="M20,23 L20,8 L20,23 L13,16 L20,23 L27,16 L20,23 M26,28 L13,28 L27,28 L14,28" /></svg></a>',
          zoom: '<button data-fancybox-zoom class="fancybox-button fancybox-button--zoom" title="{{ZOOM}}"><svg viewBox="0 0 40 40"><path d="M 18,17 m-8,0 a 8,8 0 1,0 16,0 a 8,8 0 1,0 -16,0 M25,23 L31,29 L25,23" /></svg></button>',
          close:
            '<button data-fancybox-close class="fancybox-button fancybox-button--close" title="{{CLOSE}}"><svg viewBox="0 0 40 40"><path d="M10,10 L30,30 M30,10 L10,30" /></svg></button>',
          smallBtn:
            '<button data-fancybox-close class="fancybox-close-small" title="{{CLOSE}}"></button>',
          arrowLeft:
            '<button data-fancybox-prev class="fancybox-button fancybox-button--arrow_left" title="{{PREV}}"><svg viewBox="0 0 40 40"><path d="M10,20 L30,20 L10,20 L18,28 L10,20 L18,12 L10,20"></path></svg></button>',
          arrowRight:
            '<button data-fancybox-next class="fancybox-button fancybox-button--arrow_right" title="{{NEXT}}"><svg viewBox="0 0 40 40"><path d="M30,20 L10,20 L30,20 L22,28 L30,20 L22,12 L30,20"></path></svg></button>',
        },
        parentEl: "body",
        autoFocus: !1,
        backFocus: !0,
        trapFocus: !0,
        fullScreen: { autoStart: !1 },
        touch: { vertical: !0, momentum: !0 },
        hash: null,
        media: {},
        slideShow: { autoStart: !1, speed: 4e3 },
        thumbs: {
          autoStart: !1,
          hideOnClose: !0,
          parentEl: ".fancybox-container",
          axis: "y",
        },
        wheel: "auto",
        onInit: n.noop,
        beforeLoad: n.noop,
        afterLoad: n.noop,
        beforeShow: n.noop,
        afterShow: n.noop,
        beforeClose: n.noop,
        afterClose: n.noop,
        onActivate: n.noop,
        onDeactivate: n.noop,
        clickContent: function (t, e) {
          return "image" === t.type && "zoom";
        },
        clickSlide: "close",
        clickOutside: "close",
        dblclickContent: !1,
        dblclickSlide: !1,
        dblclickOutside: !1,
        mobile: {
          idleTime: !1,
          margin: 0,
          clickContent: function (t, e) {
            return "image" === t.type && "toggleControls";
          },
          clickSlide: function (t, e) {
            return "image" === t.type ? "toggleControls" : "close";
          },
          dblclickContent: function (t, e) {
            return "image" === t.type && "zoom";
          },
          dblclickSlide: function (t, e) {
            return "image" === t.type && "zoom";
          },
        },
        lang: "en",
        i18n: {
          en: {
            CLOSE: "Close",
            NEXT: "Next",
            PREV: "Previous",
            ERROR:
              "The requested content cannot be loaded. <br/> Please try again later.",
            PLAY_START: "Start slideshow",
            PLAY_STOP: "Pause slideshow",
            FULL_SCREEN: "Full screen",
            THUMBS: "Thumbnails",
            DOWNLOAD: "Download",
            SHARE: "Share",
            ZOOM: "Zoom",
          },
          de: {
            CLOSE: "Schliessen",
            NEXT: "Weiter",
            PREV: "Zur\xfcck",
            ERROR:
              "Die angeforderten Daten konnten nicht geladen werden. <br/> Bitte versuchen Sie es sp\xe4ter nochmal.",
            PLAY_START: "Diaschau starten",
            PLAY_STOP: "Diaschau beenden",
            FULL_SCREEN: "Vollbild",
            THUMBS: "Vorschaubilder",
            DOWNLOAD: "Herunterladen",
            SHARE: "Teilen",
            ZOOM: "Ma\xdfstab",
          },
        },
      },
      a = n(t),
      r = n(e),
      c = 0,
      l =
        t.requestAnimationFrame ||
        t.webkitRequestAnimationFrame ||
        t.mozRequestAnimationFrame ||
        t.oRequestAnimationFrame ||
        function (e) {
          return t.setTimeout(e, 1e3 / 60);
        },
      u = (function () {
        var t,
          n = e.createElement("fakeelement"),
          i = {
            transition: "transitionend",
            OTransition: "oTransitionEnd",
            MozTransition: "transitionend",
            WebkitTransition: "webkitTransitionEnd",
          };
        for (t in i) if (o !== n.style[t]) return i[t];
        return "transitionend";
      })(),
      d = function (t) {
        return t && t.length && t[0].offsetHeight;
      },
      f = function (t, o, i) {
        var s = this;
        (s.opts = n.extend(!0, { index: i }, n.fancybox.defaults, o || {})),
          n.fancybox.isMobile &&
            (s.opts = n.extend(!0, {}, s.opts, s.opts.mobile)),
          o && n.isArray(o.buttons) && (s.opts.buttons = o.buttons),
          (s.id = s.opts.id || ++c),
          (s.group = []),
          (s.currIndex = parseInt(s.opts.index, 10) || 0),
          (s.prevIndex = null),
          (s.prevPos = null),
          (s.currPos = 0),
          (s.firstRun = null),
          s.createGroup(t),
          s.group.length &&
            ((s.$lastFocus = n(e.activeElement).blur()),
            (s.slides = {}),
            s.init());
      };
    n.extend(f.prototype, {
      init: function () {
        var i,
          s,
          a,
          c = this,
          l = c.group[c.currIndex],
          u = l.opts,
          d = n.fancybox.scrollbarWidth;
        (c.scrollTop = r.scrollTop()),
          (c.scrollLeft = r.scrollLeft()),
          n.fancybox.getInstance() ||
            (n("body").addClass("fancybox-active"),
            /iPad|iPhone|iPod/.test(navigator.userAgent) && !t.MSStream
              ? "image" !== l.type &&
                n("body")
                  .css("top", -1 * n("body").scrollTop())
                  .addClass("fancybox-iosfix")
              : !n.fancybox.isMobile &&
                e.body.scrollHeight > t.innerHeight &&
                (d === o &&
                  ((i = n(
                    '<div style="width:50px;height:50px;overflow:scroll;" />'
                  ).appendTo("body")),
                  (d = n.fancybox.scrollbarWidth =
                    i[0].offsetWidth - i[0].clientWidth),
                  i.remove()),
                n("head").append(
                  '<style id="fancybox-style-noscroll" type="text/css">.compensate-for-scrollbar { margin-right: ' +
                    d +
                    "px; }</style>"
                ),
                n("body").addClass("compensate-for-scrollbar"))),
          (a = ""),
          n.each(u.buttons, function (t, e) {
            a += u.btnTpl[e] || "";
          }),
          (s = n(
            c.translate(
              c,
              u.baseTpl
                .replace("{{buttons}}", a)
                .replace("{{arrows}}", u.btnTpl.arrowLeft + u.btnTpl.arrowRight)
            )
          )
            .attr("id", "fancybox-container-" + c.id)
            .addClass("fancybox-is-hidden")
            .addClass(u.baseClass)
            .data("FancyBox", c)
            .appendTo(u.parentEl)),
          (c.$refs = { container: s }),
          [
            "bg",
            "inner",
            "infobar",
            "toolbar",
            "stage",
            "caption",
            "navigation",
          ].forEach(function (t) {
            c.$refs[t] = s.find(".fancybox-" + t);
          }),
          c.trigger("onInit"),
          c.activate(),
          c.jumpTo(c.currIndex);
      },
      translate: function (t, e) {
        var n = t.opts.i18n[t.opts.lang];
        return e.replace(/\{\{(\w+)\}\}/g, function (t, e) {
          var i = n[e];
          return i === o ? t : i;
        });
      },
      createGroup: function (t) {
        var e = this,
          i = n.makeArray(t);
        n.each(i, function (t, i) {
          var s,
            a,
            r,
            c,
            l,
            u = {},
            d = {};
          n.isPlainObject(i)
            ? ((u = i), (d = i.opts || i))
            : "object" === n.type(i) && n(i).length
            ? ((d = (s = n(i)).data()),
              ((d = n.extend({}, d, d.options || {})).$orig = s),
              (u.src = d.src || s.attr("href")),
              u.type || u.src || ((u.type = "inline"), (u.src = i)))
            : (u = { type: "html", src: i + "" }),
            (u.opts = n.extend(!0, {}, e.opts, d)),
            n.isArray(d.buttons) && (u.opts.buttons = d.buttons),
            (a = u.type || u.opts.type),
            (c = u.src || ""),
            a ||
              !c ||
              (c.match(
                /(^data:image\/[a-z0-9+\/=]*,)|(\.(jp(e|g|eg)|gif|png|bmp|webp|svg|ico)((\?|#).*)?$)/i
              )
                ? (a = "image")
                : c.match(/\.(pdf)((\?|#).*)?$/i)
                ? (a = "pdf")
                : (r = c.match(/\.(mp4|mov|ogv)((\?|#).*)?$/i))
                ? ((a = "video"),
                  u.opts.videoFormat ||
                    (u.opts.videoFormat =
                      "video/" + ("ogv" === r[1] ? "ogg" : r[1])))
                : "#" !== c.charAt(0) || (a = "inline")),
            a ? (u.type = a) : e.trigger("objectNeedsType", u),
            (u.index = e.group.length),
            u.opts.$orig && !u.opts.$orig.length && delete u.opts.$orig,
            !u.opts.$thumb &&
              u.opts.$orig &&
              (u.opts.$thumb = u.opts.$orig.find("img:first")),
            u.opts.$thumb && !u.opts.$thumb.length && delete u.opts.$thumb,
            "function" === n.type(u.opts.caption) &&
              (u.opts.caption = u.opts.caption.apply(i, [e, u])),
            "function" === n.type(e.opts.caption) &&
              (u.opts.caption = e.opts.caption.apply(i, [e, u])),
            u.opts.caption instanceof n ||
              (u.opts.caption =
                o === u.opts.caption ? "" : u.opts.caption + ""),
            "ajax" === a &&
              (l = c.split(/\s+/, 2)).length > 1 &&
              ((u.src = l.shift()), (u.opts.filter = l.shift())),
            "auto" == u.opts.smallBtn &&
              (n.inArray(a, ["html", "inline", "ajax"]) > -1
                ? ((u.opts.toolbar = !1), (u.opts.smallBtn = !0))
                : (u.opts.smallBtn = !1)),
            "pdf" === a && ((u.type = "iframe"), (u.opts.iframe.preload = !1)),
            u.opts.modal &&
              (u.opts = n.extend(!0, u.opts, {
                infobar: 0,
                toolbar: 0,
                smallBtn: 0,
                keyboard: 0,
                slideShow: 0,
                fullScreen: 0,
                thumbs: 0,
                touch: 0,
                clickContent: !1,
                clickSlide: !1,
                clickOutside: !1,
                dblclickContent: !1,
                dblclickSlide: !1,
                dblclickOutside: !1,
              })),
            e.group.push(u);
        });
      },
      addEvents: function () {
        var o = this;
        o.removeEvents(),
          o.$refs.container
            .on("click.fb-close", "[data-fancybox-close]", function (t) {
              t.stopPropagation(), t.preventDefault(), o.close(t);
            })
            .on(
              "click.fb-prev touchend.fb-prev",
              "[data-fancybox-prev]",
              function (t) {
                t.stopPropagation(), t.preventDefault(), o.previous();
              }
            )
            .on(
              "click.fb-next touchend.fb-next",
              "[data-fancybox-next]",
              function (t) {
                t.stopPropagation(), t.preventDefault(), o.next();
              }
            )
            .on("click.fb", "[data-fancybox-zoom]", function (t) {
              o[o.isScaledDown() ? "scaleToActual" : "scaleToFit"]();
            }),
          a.on("orientationchange.fb resize.fb", function (t) {
            t && t.originalEvent && "resize" === t.originalEvent.type
              ? l(function () {
                  o.update();
                })
              : (o.$refs.stage.hide(),
                setTimeout(function () {
                  o.$refs.stage.show(), o.update();
                }, 600));
          }),
          r.on("focusin.fb", function (t) {
            var i = n.fancybox ? n.fancybox.getInstance() : null;
            !(
              i.isClosing ||
              !i.current ||
              !i.current.opts.trapFocus ||
              n(t.target).hasClass("fancybox-container") ||
              n(t.target).is(e)
            ) &&
              i &&
              "fixed" !== n(t.target).css("position") &&
              !i.$refs.container.has(t.target).length &&
              (t.stopPropagation(),
              i.focus(),
              a.scrollTop(o.scrollTop).scrollLeft(o.scrollLeft));
          }),
          r.on("keydown.fb", function (t) {
            var e = o.current,
              i = t.keyCode || t.which;
            if (
              !(
                !e ||
                !e.opts.keyboard ||
                n(t.target).is("input") ||
                n(t.target).is("textarea")
              )
            ) {
              if (8 === i || 27 === i) {
                t.preventDefault(), o.close(t);
                return;
              }
              if (37 === i || 38 === i) {
                t.preventDefault(), o.previous();
                return;
              }
              if (39 === i || 40 === i) {
                t.preventDefault(), o.next();
                return;
              }
              o.trigger("afterKeydown", t, i);
            }
          }),
          o.group[o.currIndex].opts.idleTime &&
            ((o.idleSecondsCounter = 0),
            r.on(
              "mousemove.fb-idle mouseleave.fb-idle mousedown.fb-idle touchstart.fb-idle touchmove.fb-idle scroll.fb-idle keydown.fb-idle",
              function (t) {
                (o.idleSecondsCounter = 0),
                  o.isIdle && o.showControls(),
                  (o.isIdle = !1);
              }
            ),
            (o.idleInterval = t.setInterval(function () {
              o.idleSecondsCounter++,
                o.idleSecondsCounter >= o.group[o.currIndex].opts.idleTime &&
                  !o.isDragging &&
                  ((o.isIdle = !0),
                  (o.idleSecondsCounter = 0),
                  o.hideControls());
            }, 1e3)));
      },
      removeEvents: function () {
        var e = this;
        a.off("orientationchange.fb resize.fb"),
          r.off("focusin.fb keydown.fb .fb-idle"),
          this.$refs.container.off(".fb-close .fb-prev .fb-next"),
          e.idleInterval &&
            (t.clearInterval(e.idleInterval), (e.idleInterval = null));
      },
      previous: function (t) {
        return this.jumpTo(this.currPos - 1, t);
      },
      next: function (t) {
        return this.jumpTo(this.currPos + 1, t);
      },
      jumpTo: function (t, e, i) {
        var s,
          a,
          r,
          c,
          l,
          u,
          f,
          p = this,
          h = p.group.length;
        if (!p.isDragging && !p.isClosing && (!p.isAnimating || !p.firstRun)) {
          if (
            ((t = parseInt(t, 10)),
            !(a = p.current ? p.current.opts.loop : p.opts.loop) &&
              (t < 0 || t >= h))
          )
            return !1;
          if (
            ((s = p.firstRun = null === p.firstRun),
            !(h < 2) || s || !p.isDragging)
          ) {
            if (
              ((c = p.current),
              (p.prevIndex = p.currIndex),
              (p.prevPos = p.currPos),
              (r = p.createSlide(t)),
              h > 1 &&
                ((a || r.index > 0) && p.createSlide(t - 1),
                (a || r.index < h - 1) && p.createSlide(t + 1)),
              (p.current = r),
              (p.currIndex = r.index),
              (p.currPos = r.pos),
              p.trigger("beforeShow", s),
              p.updateControls(),
              (u = n.fancybox.getTranslate(r.$slide)),
              (r.isMoved =
                (0 !== u.left || 0 !== u.top) &&
                !r.$slide.hasClass("fancybox-animated")),
              (r.forcedDuration = o),
              n.isNumeric(e)
                ? (r.forcedDuration = e)
                : (e = r.opts[s ? "animationDuration" : "transitionDuration"]),
              (e = parseInt(e, 10)),
              s)
            ) {
              r.opts.animationEffect &&
                e &&
                p.$refs.container.css("transition-duration", e + "ms"),
                p.$refs.container.removeClass("fancybox-is-hidden"),
                d(p.$refs.container),
                p.$refs.container.addClass("fancybox-is-open"),
                r.$slide.addClass("fancybox-slide--current"),
                p.loadSlide(r),
                p.preload("image");
              return;
            }
            if (
              (n.each(p.slides, function (t, e) {
                n.fancybox.stop(e.$slide);
              }),
              r.$slide
                .removeClass("fancybox-slide--next fancybox-slide--previous")
                .addClass("fancybox-slide--current"),
              r.isMoved
                ? ((l = Math.round(r.$slide.width())),
                  n.each(p.slides, function (t, o) {
                    var i = o.pos - r.pos;
                    n.fancybox.animate(
                      o.$slide,
                      { top: 0, left: i * l + i * o.opts.gutter },
                      e,
                      function () {
                        o.$slide
                          .removeAttr("style")
                          .removeClass(
                            "fancybox-slide--next fancybox-slide--previous"
                          ),
                          o.pos === p.currPos &&
                            ((r.isMoved = !1), p.complete());
                      }
                    );
                  }))
                : p.$refs.stage.children().removeAttr("style"),
              r.isLoaded ? p.revealContent(r) : p.loadSlide(r),
              p.preload("image"),
              c.pos !== r.pos)
            )
              (f = "fancybox-slide--" + (c.pos > r.pos ? "next" : "previous")),
                c.$slide.removeClass(
                  "fancybox-slide--complete fancybox-slide--current fancybox-slide--next fancybox-slide--previous"
                ),
                (c.isComplete = !1),
                e &&
                  (r.isMoved || r.opts.transitionEffect) &&
                  (r.isMoved
                    ? c.$slide.addClass(f)
                    : ((f =
                        "fancybox-animated " +
                        f +
                        " fancybox-fx-" +
                        r.opts.transitionEffect),
                      n.fancybox.animate(c.$slide, f, e, function () {
                        c.$slide.removeClass(f).removeAttr("style");
                      })));
          }
        }
      },
      createSlide: function (t) {
        var e,
          o,
          i = this;
        return (
          (o = (o = t % i.group.length) < 0 ? i.group.length + o : o),
          !i.slides[t] &&
            i.group[o] &&
            ((e = n('<div class="fancybox-slide"></div>').appendTo(
              i.$refs.stage
            )),
            (i.slides[t] = n.extend(!0, {}, i.group[o], {
              pos: t,
              $slide: e,
              isLoaded: !1,
            })),
            i.updateSlide(i.slides[t])),
          i.slides[t]
        );
      },
      scaleToActual: function (t, e, i) {
        var s,
          a,
          r,
          c,
          l,
          u = this,
          d = u.current,
          f = d.$content,
          p = parseInt(d.$slide.width(), 10),
          h = parseInt(d.$slide.height(), 10),
          g = d.width,
          b = d.height;
        "image" == d.type &&
          !d.hasError &&
          f &&
          !u.isAnimating &&
          (n.fancybox.stop(f),
          (u.isAnimating = !0),
          (t = t === o ? 0.5 * p : t),
          (e = e === o ? 0.5 * h : e),
          (c = g / (s = n.fancybox.getTranslate(f)).width),
          (l = b / s.height),
          (a = 0.5 * p - 0.5 * g),
          (r = 0.5 * h - 0.5 * b),
          g > p &&
            ((a = s.left * c - (t * c - t)) > 0 && (a = 0),
            a < p - g && (a = p - g)),
          b > h &&
            ((r = s.top * l - (e * l - e)) > 0 && (r = 0),
            r < h - b && (r = h - b)),
          u.updateCursor(g, b),
          n.fancybox.animate(
            f,
            { top: r, left: a, scaleX: c, scaleY: l },
            i || 330,
            function () {
              u.isAnimating = !1;
            }
          ),
          u.SlideShow && u.SlideShow.isActive && u.SlideShow.stop());
      },
      scaleToFit: function (t) {
        var e,
          o = this,
          i = o.current,
          s = i.$content;
        "image" == i.type &&
          !i.hasError &&
          s &&
          !o.isAnimating &&
          (n.fancybox.stop(s),
          (o.isAnimating = !0),
          (e = o.getFitPos(i)),
          o.updateCursor(e.width, e.height),
          n.fancybox.animate(
            s,
            {
              top: e.top,
              left: e.left,
              scaleX: e.width / s.width(),
              scaleY: e.height / s.height(),
            },
            t || 330,
            function () {
              o.isAnimating = !1;
            }
          ));
      },
      getFitPos: function (t) {
        var e,
          o,
          i,
          s,
          a,
          r = t.$content,
          c = t.width,
          l = t.height,
          u = t.opts.margin;
        return (
          !!r &&
          !!r.length &&
          (!!c || !!l) &&
          ("number" === n.type(u) && (u = [u, u]),
          2 == u.length && (u = [u[0], u[1], u[0], u[1]]),
          (s = Math.floor(
            (i = Math.min(
              1,
              (e = parseInt(this.$refs.stage.width(), 10) - (u[1] + u[3])) / c,
              (o = parseInt(this.$refs.stage.height(), 10) - (u[0] + u[2])) / l
            )) * c
          )),
          {
            top: Math.floor((o - (a = Math.floor(i * l))) * 0.5) + u[0],
            left: Math.floor((e - s) * 0.5) + u[3],
            width: s,
            height: a,
          })
        );
      },
      update: function () {
        var t = this;
        n.each(t.slides, function (e, n) {
          t.updateSlide(n);
        });
      },
      updateSlide: function (t, e) {
        var o = this,
          i = t && t.$content;
        i &&
          (t.width || t.height) &&
          ((o.isAnimating = !1),
          n.fancybox.stop(i),
          n.fancybox.setTranslate(i, o.getFitPos(t)),
          t.pos === o.currPos && o.updateCursor()),
          t.$slide.trigger("refresh"),
          o.trigger("onUpdate", t);
      },
      centerSlide: function (t, e) {
        var i, s;
        this.current &&
          ((i = Math.round(t.$slide.width())),
          (s = t.pos - this.current.pos),
          n.fancybox.animate(
            t.$slide,
            { top: 0, left: s * i + s * t.opts.gutter, opacity: 1 },
            e === o ? 0 : e,
            null,
            !1
          ));
      },
      updateCursor: function (t, e) {
        var n,
          i = this.$refs.container.removeClass(
            "fancybox-is-zoomable fancybox-can-zoomIn fancybox-can-drag fancybox-can-zoomOut"
          );
        this.current &&
          !this.isClosing &&
          (this.isZoomable()
            ? (i.addClass("fancybox-is-zoomable"),
              (n =
                t !== o && e !== o
                  ? t < this.current.width && e < this.current.height
                  : this.isScaledDown())
                ? i.addClass("fancybox-can-zoomIn")
                : this.current.opts.touch
                ? i.addClass("fancybox-can-drag")
                : i.addClass("fancybox-can-zoomOut"))
            : this.current.opts.touch && i.addClass("fancybox-can-drag"));
      },
      isZoomable: function () {
        var t,
          e = this.current;
        return !e || this.isClosing
          ? void 0
          : !!(
              "image" === e.type &&
              e.isLoaded &&
              !e.hasError &&
              ("zoom" === e.opts.clickContent ||
                (n.isFunction(e.opts.clickContent) &&
                  "zoom" === e.opts.clickContent(e)))
            ) &&
              ((t = this.getFitPos(e)),
              !!(e.width > t.width) || !!(e.height > t.height));
      },
      isScaledDown: function () {
        var t = this.current,
          e = t.$content,
          o = !1;
        return (
          e &&
            (o =
              (o = n.fancybox.getTranslate(e)).width < t.width ||
              o.height < t.height),
          o
        );
      },
      canPan: function () {
        var t = this.current,
          e = t.$content,
          n = !1;
        return (
          e &&
            ((n = this.getFitPos(t)),
            (n =
              Math.abs(e.width() - n.width) > 1 ||
              Math.abs(e.height() - n.height) > 1)),
          n
        );
      },
      loadSlide: function (t) {
        var e,
          o,
          i,
          s = this;
        if (!t.isLoading && !t.isLoaded) {
          switch (
            ((t.isLoading = !0),
            s.trigger("beforeLoad", t),
            (o = t.type),
            (i = t.$slide)
              .off("refresh")
              .trigger("onReset")
              .addClass("fancybox-slide--" + (o || "unknown"))
              .addClass(t.opts.slideClass),
            o)
          ) {
            case "image":
              s.setImage(t);
              break;
            case "iframe":
              s.setIframe(t);
              break;
            case "html":
              s.setContent(t, t.src || t.content);
              break;
            case "inline":
              n(t.src).length ? s.setContent(t, n(t.src)) : s.setError(t);
              break;
            case "ajax":
              s.showLoading(t),
                (e = n.ajax(
                  n.extend({}, t.opts.ajax.settings, {
                    url: t.src,
                    success: function (e, n) {
                      "success" === n && s.setContent(t, e);
                    },
                    error: function (e, n) {
                      e && "abort" !== n && s.setError(t);
                    },
                  })
                )),
                i.one("onReset", function () {
                  e.abort();
                });
              break;
            case "video":
              s.setContent(
                t,
                '<video controls><source src="' +
                  t.src +
                  '" type="' +
                  t.opts.videoFormat +
                  "\">Your browser doesn't support HTML5 video</video>"
              );
              break;
            default:
              s.setError(t);
          }
          return !0;
        }
      },
      setImage: function (e) {
        var o,
          i,
          s,
          a,
          r = this,
          c = e.opts.srcset || e.opts.image.srcset;
        if (c) {
          (s = t.devicePixelRatio || 1),
            (a = t.innerWidth * s),
            (i = c.split(",").map(function (t) {
              var e = {};
              return (
                t
                  .trim()
                  .split(/\s+/)
                  .forEach(function (t, n) {
                    var o = parseInt(t.substring(0, t.length - 1), 10);
                    if (0 === n) return (e.url = t);
                    o && ((e.value = o), (e.postfix = t[t.length - 1]));
                  }),
                e
              );
            })).sort(function (t, e) {
              return t.value - e.value;
            });
          for (var l = 0; l < i.length; l++) {
            var u = i[l];
            if (
              ("w" === u.postfix && u.value >= a) ||
              ("x" === u.postfix && u.value >= s)
            ) {
              o = u;
              break;
            }
          }
          !o && i.length && (o = i[i.length - 1]),
            o &&
              ((e.src = o.url),
              e.width &&
                e.height &&
                "w" == o.postfix &&
                ((e.height = (e.width / e.height) * o.value),
                (e.width = o.value)));
        }
        (e.$content = n('<div class="fancybox-image-wrap"></div>')
          .addClass("fancybox-is-hidden")
          .appendTo(e.$slide)),
          !1 !== e.opts.preload &&
          e.opts.width &&
          e.opts.height &&
          (e.opts.thumb || e.opts.$thumb)
            ? ((e.width = e.opts.width),
              (e.height = e.opts.height),
              (e.$ghost = n("<img />")
                .one("error", function () {
                  n(this).remove(), (e.$ghost = null), r.setBigImage(e);
                })
                .one("load", function () {
                  r.afterLoad(e), r.setBigImage(e);
                })
                .addClass("fancybox-image")
                .appendTo(e.$content)
                .attr("src", e.opts.thumb || e.opts.$thumb.attr("src"))))
            : r.setBigImage(e);
      },
      setBigImage: function (t) {
        var e = this,
          o = n("<img />");
        (t.$image = o
          .one("error", function () {
            e.setError(t);
          })
          .one("load", function () {
            clearTimeout(t.timouts),
              (t.timouts = null),
              !e.isClosing &&
                ((t.width = t.opts.width || this.naturalWidth),
                (t.height = t.opts.height || this.naturalHeight),
                t.opts.image.srcset &&
                  o.attr("sizes", "100vw").attr("srcset", t.opts.image.srcset),
                e.hideLoading(t),
                t.$ghost
                  ? (t.timouts = setTimeout(function () {
                      (t.timouts = null), t.$ghost.hide();
                    }, Math.min(300, Math.max(1e3, t.height / 1600))))
                  : e.afterLoad(t));
          })
          .addClass("fancybox-image")
          .attr("src", t.src)
          .appendTo(t.$content)),
          (o[0].complete || "complete" == o[0].readyState) &&
          o[0].naturalWidth &&
          o[0].naturalHeight
            ? o.trigger("load")
            : o[0].error
            ? o.trigger("error")
            : (t.timouts = setTimeout(function () {
                o[0].complete || t.hasError || e.showLoading(t);
              }, 100));
      },
      setIframe: function (t) {
        var e,
          i = this,
          s = t.opts.iframe,
          a = t.$slide;
        (t.$content = n(
          '<div class="fancybox-content' +
            (s.preload ? " fancybox-is-hidden" : "") +
            '"></div>'
        )
          .css(s.css)
          .appendTo(a)),
          (e = n(s.tpl.replace(/\{rnd\}/g, new Date().getTime()))
            .attr(s.attr)
            .appendTo(t.$content)),
          s.preload
            ? (i.showLoading(t),
              e.on("load.fb error.fb", function (e) {
                (this.isReady = 1), t.$slide.trigger("refresh"), i.afterLoad(t);
              }),
              a.on("refresh.fb", function () {
                var n,
                  i,
                  a,
                  r = t.$content,
                  c = s.css.width,
                  l = s.css.height;
                if (1 === e[0].isReady) {
                  try {
                    a = (i = e.contents()).find("body");
                  } catch (u) {}
                  a &&
                    a.length &&
                    (c === o &&
                      ((n =
                        e[0].contentWindow.document.documentElement
                          .scrollWidth),
                      (c = Math.ceil(a.outerWidth(!0) + (r.width() - n))),
                      (c += r.outerWidth() - r.innerWidth())),
                    l === o &&
                      ((l = Math.ceil(a.outerHeight(!0))),
                      (l += r.outerHeight() - r.innerHeight())),
                    c && r.width(c),
                    l && r.height(l)),
                    r.removeClass("fancybox-is-hidden");
                }
              }))
            : this.afterLoad(t),
          e.attr("src", t.src),
          !0 === t.opts.smallBtn &&
            t.$content.prepend(i.translate(t, t.opts.btnTpl.smallBtn)),
          a.one("onReset", function () {
            try {
              n(this).find("iframe").hide().attr("src", "//about:blank");
            } catch (e) {}
            n(this).empty(), (t.isLoaded = !1);
          });
      },
      setContent: function (t, e) {
        var o;
        !this.isClosing &&
          ((this.hideLoading(t),
          t.$slide.empty(),
          (o = e) && o.hasOwnProperty && o instanceof n && e.parent().length)
            ? (e.parent(".fancybox-slide--inline").trigger("onReset"),
              (t.$placeholder = n("<div></div>").hide().insertAfter(e)),
              e.css("display", "inline-block"))
            : !t.hasError &&
              ("string" === n.type(e) &&
                3 ===
                  (e = n("<div>").append(n.trim(e)).contents())[0].nodeType &&
                (e = n("<div>").html(e)),
              t.opts.filter && (e = n("<div>").html(e).find(t.opts.filter))),
          t.$slide.one("onReset", function () {
            n(this).find("video,audio").trigger("pause"),
              t.$placeholder &&
                (t.$placeholder.after(e.hide()).remove(),
                (t.$placeholder = null)),
              t.$smallBtn && (t.$smallBtn.remove(), (t.$smallBtn = null)),
              t.hasError || (n(this).empty(), (t.isLoaded = !1));
          }),
          (t.$content = n(e).appendTo(t.$slide)),
          this.afterLoad(t));
      },
      setError: function (t) {
        (t.hasError = !0),
          t.$slide.removeClass("fancybox-slide--" + t.type),
          this.setContent(t, this.translate(t, t.opts.errorTpl));
      },
      showLoading: function (t) {
        (t = t || this.current) &&
          !t.$spinner &&
          (t.$spinner = n(this.opts.spinnerTpl).appendTo(t.$slide));
      },
      hideLoading: function (t) {
        (t = t || this.current) &&
          t.$spinner &&
          (t.$spinner.remove(), delete t.$spinner);
      },
      afterLoad: function (t) {
        !this.isClosing &&
          ((t.isLoading = !1),
          (t.isLoaded = !0),
          this.trigger("afterLoad", t),
          this.hideLoading(t),
          t.opts.smallBtn &&
            !t.$smallBtn &&
            (t.$smallBtn = n(
              this.translate(t, t.opts.btnTpl.smallBtn)
            ).appendTo(t.$content.filter("div,form").first())),
          t.opts.protect &&
            t.$content &&
            !t.hasError &&
            (t.$content.on("contextmenu.fb", function (t) {
              return 2 == t.button && t.preventDefault(), !0;
            }),
            "image" === t.type &&
              n('<div class="fancybox-spaceball"></div>').appendTo(t.$content)),
          this.revealContent(t));
      },
      revealContent: function (t) {
        var e,
          i,
          s,
          a,
          r,
          c = this,
          l = t.$slide,
          u = !1;
        if (
          ((e = t.opts[c.firstRun ? "animationEffect" : "transitionEffect"]),
          (s = t.opts[c.firstRun ? "animationDuration" : "transitionDuration"]),
          (s = parseInt(o === t.forcedDuration ? s : t.forcedDuration, 10)),
          (t.isMoved || t.pos !== c.currPos || !s) && (e = !1),
          "zoom" !== e ||
            (t.pos === c.currPos &&
              s &&
              "image" === t.type &&
              !t.hasError &&
              (u = c.getThumbPos(t))) ||
            (e = "fade"),
          "zoom" === e)
        ) {
          ((r = c.getFitPos(t)).scaleX = r.width / u.width),
            (r.scaleY = r.height / u.height),
            delete r.width,
            delete r.height,
            "auto" == (a = t.opts.zoomOpacity) &&
              (a = Math.abs(t.width / t.height - u.width / u.height) > 0.1),
            a && ((u.opacity = 0.1), (r.opacity = 1)),
            n.fancybox.setTranslate(
              t.$content.removeClass("fancybox-is-hidden"),
              u
            ),
            d(t.$content),
            n.fancybox.animate(t.$content, r, s, function () {
              c.complete();
            });
          return;
        }
        if ((c.updateSlide(t), !e)) {
          d(l),
            t.$content.removeClass("fancybox-is-hidden"),
            t.pos === c.currPos && c.complete();
          return;
        }
        n.fancybox.stop(l),
          (i =
            "fancybox-animated fancybox-slide--" +
            (t.pos >= c.prevPos ? "next" : "previous") +
            " fancybox-fx-" +
            e),
          l
            .removeAttr("style")
            .removeClass(
              "fancybox-slide--current fancybox-slide--next fancybox-slide--previous"
            )
            .addClass(i),
          t.$content.removeClass("fancybox-is-hidden"),
          d(l),
          n.fancybox.animate(
            l,
            "fancybox-slide--current",
            s,
            function (e) {
              l.removeClass(i).removeAttr("style"),
                t.pos === c.currPos && c.complete();
            },
            !0
          );
      },
      getThumbPos: function (o) {
        var i,
          s = !1,
          a = o.opts.$thumb,
          r = a ? a.offset() : 0;
        return (
          r &&
            a[0].ownerDocument === e &&
            (function (e) {
              for (
                var o, i = e[0], s = i.getBoundingClientRect(), a = [];
                null !== i.parentElement;

              )
                ("hidden" === n(i.parentElement).css("overflow") ||
                  "auto" === n(i.parentElement).css("overflow")) &&
                  a.push(i.parentElement.getBoundingClientRect()),
                  (i = i.parentElement);
              return (
                (o = a.every(function (t) {
                  var e = Math.min(s.right, t.right) - Math.max(s.left, t.left),
                    n = Math.min(s.bottom, t.bottom) - Math.max(s.top, t.top);
                  return e > 0 && n > 0;
                })) &&
                s.bottom > 0 &&
                s.right > 0 &&
                s.left < n(t).width() &&
                s.top < n(t).height()
              );
            })(a) &&
            ((i = this.$refs.stage.offset()),
            (s = {
              top: r.top - i.top + parseFloat(a.css("border-top-width") || 0),
              left:
                r.left - i.left + parseFloat(a.css("border-left-width") || 0),
              width: a.width(),
              height: a.height(),
              scaleX: 1,
              scaleY: 1,
            })),
          s
        );
      },
      complete: function () {
        var t = this,
          o = t.current,
          i = {};
        !o.isMoved &&
          o.isLoaded &&
          !o.isComplete &&
          ((o.isComplete = !0),
          o.$slide.siblings().trigger("onReset"),
          t.preload("inline"),
          d(o.$slide),
          o.$slide.addClass("fancybox-slide--complete"),
          n.each(t.slides, function (e, o) {
            o.pos >= t.currPos - 1 && o.pos <= t.currPos + 1
              ? (i[o.pos] = o)
              : o && (n.fancybox.stop(o.$slide), o.$slide.off().remove());
          }),
          (t.slides = i),
          t.updateCursor(),
          t.trigger("afterShow"),
          o.$slide.find("video,audio").first().trigger("play"),
          (n(e.activeElement).is("[disabled]") ||
            (o.opts.autoFocus &&
              !("image" == o.type || "iframe" === o.type))) &&
            t.focus());
      },
      preload: function (t) {
        var e = this.slides[this.currPos + 1],
          n = this.slides[this.currPos - 1];
        e && e.type === t && this.loadSlide(e),
          n && n.type === t && this.loadSlide(n);
      },
      focus: function () {
        var t,
          e = this.current;
        !this.isClosing &&
          (e &&
            e.isComplete &&
            !(t = e.$slide.find("input[autofocus]:enabled:visible:first"))
              .length &&
            (t = e.$slide
              .find("button,:input,[tabindex],a")
              .filter(":enabled:visible:first")),
          (t = t && t.length ? t : this.$refs.container).focus());
      },
      activate: function () {
        var t = this;
        n(".fancybox-container").each(function () {
          var e = n(this).data("FancyBox");
          e &&
            e.id !== t.id &&
            !e.isClosing &&
            (e.trigger("onDeactivate"), e.removeEvents(), (e.isVisible = !1));
        }),
          (t.isVisible = !0),
          (t.current || t.isIdle) && (t.update(), t.updateControls()),
          t.trigger("onActivate"),
          t.addEvents();
      },
      close: function (t, e) {
        var o,
          i,
          s,
          a,
          r,
          c,
          f = this,
          p = f.current,
          h = function () {
            f.cleanUp(t);
          };
        return (
          !f.isClosing &&
          (((f.isClosing = !0), !1 === f.trigger("beforeClose", t))
            ? ((f.isClosing = !1),
              l(function () {
                f.update();
              }),
              !1)
            : (f.removeEvents(),
              p.timouts && clearTimeout(p.timouts),
              (s = p.$content),
              (o = p.opts.animationEffect),
              (i = n.isNumeric(e) ? e : o ? p.opts.animationDuration : 0),
              p.$slide
                .off(u)
                .removeClass(
                  "fancybox-slide--complete fancybox-slide--next fancybox-slide--previous fancybox-animated"
                ),
              p.$slide.siblings().trigger("onReset").remove(),
              i &&
                f.$refs.container
                  .removeClass("fancybox-is-open")
                  .addClass("fancybox-is-closing"),
              f.hideLoading(p),
              f.hideControls(),
              f.updateCursor(),
              "zoom" !== o ||
                (!0 !== t &&
                  s &&
                  i &&
                  "image" === p.type &&
                  !p.hasError &&
                  (c = f.getThumbPos(p))) ||
                (o = "fade"),
              "zoom" === o)
            ? (n.fancybox.stop(s),
              ((r = n.fancybox.getTranslate(s)).width = r.width * r.scaleX),
              (r.height = r.height * r.scaleY),
              "auto" == (a = p.opts.zoomOpacity) &&
                (a = Math.abs(p.width / p.height - c.width / c.height) > 0.1),
              a && (c.opacity = 0),
              (r.scaleX = r.width / c.width),
              (r.scaleY = r.height / c.height),
              (r.width = c.width),
              (r.height = c.height),
              n.fancybox.setTranslate(p.$content, r),
              d(p.$content),
              n.fancybox.animate(p.$content, c, i, h),
              !0)
            : (o && i
                ? !0 === t
                  ? setTimeout(h, i)
                  : n.fancybox.animate(
                      p.$slide.removeClass("fancybox-slide--current"),
                      "fancybox-animated fancybox-slide--previous fancybox-fx-" +
                        o,
                      i,
                      h
                    )
                : h(),
              !0))
        );
      },
      cleanUp: function (t) {
        var o,
          i,
          s = this,
          r = n("body");
        s.current.$slide.trigger("onReset"),
          s.$refs.container.empty().remove(),
          s.trigger("afterClose", t),
          s.$lastFocus && s.current.opts.backFocus && s.$lastFocus.focus(),
          (s.current = null),
          (o = n.fancybox.getInstance())
            ? o.activate()
            : (a.scrollTop(s.scrollTop).scrollLeft(s.scrollLeft),
              r.removeClass("fancybox-active compensate-for-scrollbar"),
              r.hasClass("fancybox-iosfix") &&
                ((i = parseInt(e.body.style.top, 10)),
                r
                  .removeClass("fancybox-iosfix")
                  .css("top", "")
                  .scrollTop(-1 * i)),
              n("#fancybox-style-noscroll").remove());
      },
      trigger: function (t, e) {
        var o,
          i = Array.prototype.slice.call(arguments, 1),
          s = e && e.opts ? e : this.current;
        if (
          (s ? i.unshift(s) : (s = this),
          i.unshift(this),
          n.isFunction(s.opts[t]) && (o = s.opts[t].apply(s, i)),
          !1 === o)
        )
          return o;
        "afterClose" !== t && this.$refs
          ? this.$refs.container.trigger(t + ".fb", i)
          : r.trigger(t + ".fb", i);
      },
      updateControls: function (t) {
        var e = this,
          n = e.current,
          o = n.index,
          i = n.opts.caption,
          s = e.$refs.container,
          a = e.$refs.caption;
        n.$slide.trigger("refresh"),
          (e.$caption = i && i.length ? a.html(i) : null),
          e.isHiddenControls || e.isIdle || e.showControls(),
          s.find("[data-fancybox-count]").html(e.group.length),
          s.find("[data-fancybox-index]").html(o + 1),
          s
            .find("[data-fancybox-prev]")
            .prop("disabled", !n.opts.loop && o <= 0),
          s
            .find("[data-fancybox-next]")
            .prop("disabled", !n.opts.loop && o >= e.group.length - 1),
          "image" === n.type
            ? s
                .find("[data-fancybox-download]")
                .attr("href", n.opts.image.src || n.src)
                .show()
            : s.find("[data-fancybox-download],[data-fancybox-zoom]").hide();
      },
      hideControls: function () {
        (this.isHiddenControls = !0),
          this.$refs.container.removeClass(
            "fancybox-show-infobar fancybox-show-toolbar fancybox-show-caption fancybox-show-nav"
          );
      },
      showControls: function () {
        var t = this,
          e = t.current ? t.current.opts : t.opts,
          n = t.$refs.container;
        (t.isHiddenControls = !1),
          (t.idleSecondsCounter = 0),
          n
            .toggleClass("fancybox-show-toolbar", !!(e.toolbar && e.buttons))
            .toggleClass(
              "fancybox-show-infobar",
              !!(e.infobar && t.group.length > 1)
            )
            .toggleClass(
              "fancybox-show-nav",
              !!(e.arrows && t.group.length > 1)
            )
            .toggleClass("fancybox-is-modal", !!e.modal),
          t.$caption
            ? n.addClass("fancybox-show-caption ")
            : n.removeClass("fancybox-show-caption");
      },
      toggleControls: function () {
        this.isHiddenControls ? this.showControls() : this.hideControls();
      },
    }),
      (n.fancybox = {
        version: "3.2.10",
        defaults: s,
        getInstance: function (t) {
          var e = n(
              '.fancybox-container:not(".fancybox-is-closing"):last'
            ).data("FancyBox"),
            o = Array.prototype.slice.call(arguments, 1);
          return (
            e instanceof f &&
            ("string" === n.type(t)
              ? e[t].apply(e, o)
              : "function" === n.type(t) && t.apply(e, o),
            e)
          );
        },
        open: function (t, e, n) {
          return new f(t, e, n);
        },
        close: function (t) {
          var e = this.getInstance();
          e && (e.close(), !0 === t && this.close());
        },
        destroy: function () {
          this.close(!0), r.off("click.fb-start");
        },
        isMobile:
          o !== e.createTouch &&
          /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
            navigator.userAgent
          ),
        use3d:
          ((i = e.createElement("div")),
          t.getComputedStyle &&
            t.getComputedStyle(i).getPropertyValue("transform") &&
            !(e.documentMode && e.documentMode < 11)),
        getTranslate: function (t) {
          var e;
          if (!t || !t.length) return !1;
          if (
            (e =
              (e = t.eq(0).css("transform")) && -1 !== e.indexOf("matrix")
                ? (e = (e = e.split("(")[1]).split(")")[0]).split(",")
                : []).length
          )
            e = (e =
              e.length > 10
                ? [e[13], e[12], e[0], e[5]]
                : [e[5], e[4], e[0], e[3]]).map(parseFloat);
          else {
            e = [0, 0, 1, 1];
            var n = /\.*translate\((.*)px,(.*)px\)/i.exec(
              t.eq(0).attr("style")
            );
            n && ((e[0] = parseFloat(n[2])), (e[1] = parseFloat(n[1])));
          }
          return {
            top: e[0],
            left: e[1],
            scaleX: e[2],
            scaleY: e[3],
            opacity: parseFloat(t.css("opacity")),
            width: t.width(),
            height: t.height(),
          };
        },
        setTranslate: function (t, e) {
          var n = "",
            i = {};
          if (t && e)
            return (
              (o !== e.left || o !== e.top) &&
                ((n =
                  (o === e.left ? t.position().left : e.left) +
                  "px, " +
                  (o === e.top ? t.position().top : e.top) +
                  "px"),
                (n = this.use3d
                  ? "translate3d(" + n + ", 0px)"
                  : "translate(" + n + ")")),
              o !== e.scaleX &&
                o !== e.scaleY &&
                (n =
                  (n.length ? n + " " : "") +
                  "scale(" +
                  e.scaleX +
                  ", " +
                  e.scaleY +
                  ")"),
              n.length && (i.transform = n),
              o !== e.opacity && (i.opacity = e.opacity),
              o !== e.width && (i.width = e.width),
              o !== e.height && (i.height = e.height),
              t.css(i)
            );
        },
        animate: function (t, e, i, s, a) {
          n.isFunction(i) && ((s = i), (i = null)),
            n.isPlainObject(e) || t.removeAttr("style"),
            t.on(u, function (i) {
              (!i ||
                !i.originalEvent ||
                (t.is(i.originalEvent.target) &&
                  "z-index" != i.originalEvent.propertyName)) &&
                (n.fancybox.stop(t),
                n.isPlainObject(e)
                  ? (o !== e.scaleX &&
                      o !== e.scaleY &&
                      (t.css("transition-duration", ""),
                      (e.width = Math.round(t.width() * e.scaleX)),
                      (e.height = Math.round(t.height() * e.scaleY)),
                      (e.scaleX = 1),
                      (e.scaleY = 1),
                      n.fancybox.setTranslate(t, e)),
                    !1 === a && t.removeAttr("style"))
                  : !0 !== a && t.removeClass(e),
                n.isFunction(s) && s(i));
            }),
            n.isNumeric(i) && t.css("transition-duration", i + "ms"),
            n.isPlainObject(e) ? n.fancybox.setTranslate(t, e) : t.addClass(e),
            e.scaleX &&
              t.hasClass("fancybox-image-wrap") &&
              t.parent().addClass("fancybox-is-scaling"),
            t.data(
              "timer",
              setTimeout(function () {
                t.trigger("transitionend");
              }, i + 16)
            );
        },
        stop: function (t) {
          clearTimeout(t.data("timer")),
            t.off("transitionend").css("transition-duration", ""),
            t.hasClass("fancybox-image-wrap") &&
              t.parent().removeClass("fancybox-is-scaling");
        },
      }),
      (n.fn.fancybox = function (t) {
        var e;
        return (
          (e = (t = t || {}).selector || !1)
            ? n("body")
                .off("click.fb-start", e)
                .on("click.fb-start", e, { options: t }, p)
            : this.off("click.fb-start").on(
                "click.fb-start",
                { items: this, options: t },
                p
              ),
          this
        );
      }),
      r.on("click.fb-start", "[data-fancybox]", p);
  }
  function p(t) {
    var e = n(t.currentTarget),
      o = t.data ? t.data.options : {},
      i = e.attr("data-fancybox") || "",
      s = 0,
      a = [];
    !t.isDefaultPrevented() &&
      (t.preventDefault(),
      i
        ? (s = (a = (a = o.selector
            ? n(o.selector)
            : t.data
            ? t.data.items
            : []).length
            ? a.filter('[data-fancybox="' + i + '"]')
            : n('[data-fancybox="' + i + '"]')).index(e)) < 0 && (s = 0)
        : (a = [e]),
      n.fancybox.open(a, o, s));
  }
})(window, document, window.jQuery || jQuery),
  (function (t) {
    "use strict";
    var e = function (e, n, o) {
        if (e)
          return (
            (o = o || ""),
            "object" === t.type(o) && (o = t.param(o, !0)),
            t.each(n, function (t, n) {
              e = e.replace("$" + t, n || "");
            }),
            o.length && (e += (e.indexOf("?") > 0 ? "&" : "?") + o),
            e
          );
      },
      n = {
        youtube: {
          matcher:
            /(youtube\.com|youtu\.be|youtube\-nocookie\.com)\/(watch\?(.*&)?v=|v\/|u\/|embed\/?)?(videoseries\?list=(.*)|[\w-]{11}|\?listType=(.*)&list=(.*))(.*)/i,
          params: {
            autoplay: 1,
            autohide: 1,
            fs: 1,
            rel: 0,
            hd: 1,
            wmode: "transparent",
            enablejsapi: 1,
            html5: 1,
          },
          paramPlace: 8,
          type: "iframe",
          url: "//www.youtube.com/embed/$4",
          thumb: "//img.youtube.com/vi/$4/hqdefault.jpg",
        },
        vimeo: {
          matcher: /^.+vimeo.com\/(.*\/)?([\d]+)(.*)?/,
          params: {
            autoplay: 1,
            hd: 1,
            show_title: 1,
            show_byline: 1,
            show_portrait: 0,
            fullscreen: 1,
            api: 1,
          },
          paramPlace: 3,
          type: "iframe",
          url: "//player.vimeo.com/video/$2",
        },
        metacafe: {
          matcher: /metacafe.com\/watch\/(\d+)\/(.*)?/,
          type: "iframe",
          url: "//www.metacafe.com/embed/$1/?ap=1",
        },
        dailymotion: {
          matcher: /dailymotion.com\/video\/(.*)\/?(.*)/,
          params: { additionalInfos: 0, autoStart: 1 },
          type: "iframe",
          url: "//www.dailymotion.com/embed/video/$1",
        },
        vine: {
          matcher: /vine.co\/v\/([a-zA-Z0-9\?\=\-]+)/,
          type: "iframe",
          url: "//vine.co/v/$1/embed/simple",
        },
        instagram: {
          matcher: /(instagr\.am|instagram\.com)\/p\/([a-zA-Z0-9_\-]+)\/?/i,
          type: "image",
          url: "//$1/p/$2/media/?size=l",
        },
        gmap_place: {
          matcher:
            /(maps\.)?google\.([a-z]{2,3}(\.[a-z]{2})?)\/(((maps\/(place\/(.*)\/)?\@(.*),(\d+.?\d+?)z))|(\?ll=))(.*)?/i,
          type: "iframe",
          url: function (t) {
            return (
              "//maps.google." +
              t[2] +
              "/?ll=" +
              (t[9]
                ? t[9] +
                  "&z=" +
                  Math.floor(t[10]) +
                  (t[12] ? t[12].replace(/^\//, "&") : "")
                : t[12]) +
              "&output=" +
              (t[12] && t[12].indexOf("layer=c") > 0 ? "svembed" : "embed")
            );
          },
        },
        gmap_search: {
          matcher:
            /(maps\.)?google\.([a-z]{2,3}(\.[a-z]{2})?)\/(maps\/search\/)(.*)/i,
          type: "iframe",
          url: function (t) {
            return (
              "//maps.google." +
              t[2] +
              "/maps?q=" +
              t[5].replace("query=", "q=").replace("api=1", "") +
              "&output=embed"
            );
          },
        },
      };
    t(document).on("objectNeedsType.fb", function (o, i, s) {
      var a,
        r,
        c,
        l,
        u,
        d,
        f,
        p = s.src || "",
        h = !1;
      (a = t.extend(!0, {}, n, s.opts.media)),
        t.each(a, function (n, o) {
          if ((c = p.match(o.matcher))) {
            if (((h = o.type), (d = {}), o.paramPlace && c[o.paramPlace])) {
              "?" == (u = c[o.paramPlace])[0] && (u = u.substring(1)),
                (u = u.split("&"));
              for (var i = 0; i < u.length; ++i) {
                var a = u[i].split("=", 2);
                2 == a.length &&
                  (d[a[0]] = decodeURIComponent(a[1].replace(/\+/g, " ")));
              }
            }
            return (
              (l = t.extend(!0, {}, o.params, s.opts[n], d)),
              (p =
                "function" === t.type(o.url)
                  ? o.url.call(this, c, l, s)
                  : e(o.url, c, l)),
              (r =
                "function" === t.type(o.thumb)
                  ? o.thumb.call(this, c, l, s)
                  : e(o.thumb, c)),
              "vimeo" === n && (p = p.replace("&%23", "#")),
              !1
            );
          }
        }),
        h
          ? ((s.src = p),
            (s.type = h),
            s.opts.thumb ||
              (s.opts.$thumb && s.opts.$thumb.length) ||
              (s.opts.thumb = r),
            "iframe" === h &&
              (t.extend(!0, s.opts, {
                iframe: { preload: !1, attr: { scrolling: "no" } },
              }),
              (s.contentProvider = f),
              (s.opts.slideClass +=
                " fancybox-slide--" +
                ("gmap_place" == f || "gmap_search" == f ? "map" : "video"))))
          : p && (s.type = s.opts.defaultType);
    });
  })(window.jQuery || jQuery),
  (function (t, e, n) {
    "use strict";
    var o =
        t.requestAnimationFrame ||
        t.webkitRequestAnimationFrame ||
        t.mozRequestAnimationFrame ||
        t.oRequestAnimationFrame ||
        function (e) {
          return t.setTimeout(e, 1e3 / 60);
        },
      i =
        t.cancelAnimationFrame ||
        t.webkitCancelAnimationFrame ||
        t.mozCancelAnimationFrame ||
        t.oCancelAnimationFrame ||
        function (e) {
          t.clearTimeout(e);
        },
      s = function (e) {
        var n = [];
        for (var o in (e =
          (e = e.originalEvent || e || t.e).touches && e.touches.length
            ? e.touches
            : e.changedTouches && e.changedTouches.length
            ? e.changedTouches
            : [e]))
          e[o].pageX
            ? n.push({ x: e[o].pageX, y: e[o].pageY })
            : e[o].clientX && n.push({ x: e[o].clientX, y: e[o].clientY });
        return n;
      },
      a = function (t, e, n) {
        return e && t
          ? "x" === n
            ? t.x - e.x
            : "y" === n
            ? t.y - e.y
            : Math.sqrt(Math.pow(t.x - e.x, 2) + Math.pow(t.y - e.y, 2))
          : 0;
      },
      r = function (t) {
        if (
          t.is(
            'a,area,button,[role="button"],input,label,select,summary,textarea'
          ) ||
          n.isFunction(t.get(0).onclick) ||
          t.data("selectable")
        )
          return !0;
        for (var e = 0, o = t[0].attributes, i = o.length; e < i; e++)
          if ("data-fancybox-" === o[e].nodeName.substr(0, 14)) return !0;
        return !1;
      },
      c = function (e) {
        var n = t.getComputedStyle(e)["overflow-y"],
          o = t.getComputedStyle(e)["overflow-x"],
          i =
            ("scroll" === n || "auto" === n) && e.scrollHeight > e.clientHeight,
          s = ("scroll" === o || "auto" === o) && e.scrollWidth > e.clientWidth;
        return i || s;
      },
      l = function (t) {
        for (
          var e = !1;
          !(
            (e = c(t.get(0))) ||
            !(t = t.parent()).length ||
            t.hasClass("fancybox-stage") ||
            t.is("body")
          );

        );
        return e;
      },
      u = function (t) {
        var e = this;
        (e.instance = t),
          (e.$bg = t.$refs.bg),
          (e.$stage = t.$refs.stage),
          (e.$container = t.$refs.container),
          e.destroy(),
          e.$container.on(
            "touchstart.fb.touch mousedown.fb.touch",
            n.proxy(e, "ontouchstart")
          );
      };
    (u.prototype.destroy = function () {
      this.$container.off(".fb.touch");
    }),
      (u.prototype.ontouchstart = function (o) {
        var i = this,
          c = n(o.target),
          u = i.instance,
          d = u.current,
          f = d.$content,
          p = "touchstart" == o.type;
        if (
          (p && i.$container.off("mousedown.fb.touch"),
          !(
            (o.originalEvent && 2 == o.originalEvent.button) ||
            !c.length ||
            r(c) ||
            r(c.parent())
          ) &&
            (c.is("img") ||
              !(o.originalEvent.clientX > c[0].clientWidth + c.offset().left)))
        ) {
          if (!d || i.instance.isAnimating || i.instance.isClosing) {
            o.stopPropagation(), o.preventDefault();
            return;
          }
          if (((i.realPoints = i.startPoints = s(o)), i.startPoints)) {
            if (
              (o.stopPropagation(),
              (i.startEvent = o),
              (i.canTap = !0),
              (i.$target = c),
              (i.$content = f),
              (i.opts = d.opts.touch),
              (i.isPanning = !1),
              (i.isSwiping = !1),
              (i.isZooming = !1),
              (i.isScrolling = !1),
              (i.sliderStartPos = i.sliderLastPos || { top: 0, left: 0 }),
              (i.contentStartPos = n.fancybox.getTranslate(i.$content)),
              (i.contentLastPos = null),
              (i.startTime = new Date().getTime()),
              (i.distanceX = i.distanceY = i.distance = 0),
              (i.canvasWidth = Math.round(d.$slide[0].clientWidth)),
              (i.canvasHeight = Math.round(d.$slide[0].clientHeight)),
              n(e)
                .off(".fb.touch")
                .on(
                  p
                    ? "touchend.fb.touch touchcancel.fb.touch"
                    : "mouseup.fb.touch mouseleave.fb.touch",
                  n.proxy(i, "ontouchend")
                )
                .on(
                  p ? "touchmove.fb.touch" : "mousemove.fb.touch",
                  n.proxy(i, "ontouchmove")
                ),
              n.fancybox.isMobile &&
                e.addEventListener("scroll", i.onscroll, !0),
              !(i.opts || u.canPan()) ||
                !(c.is(i.$stage) || i.$stage.find(c).length))
            ) {
              c.is("img") && o.preventDefault();
              return;
            }
            (n.fancybox.isMobile && (l(c) || l(c.parent()))) ||
              o.preventDefault(),
              1 === i.startPoints.length &&
                ("image" === d.type &&
                (i.contentStartPos.width > i.canvasWidth + 1 ||
                  i.contentStartPos.height > i.canvasHeight + 1)
                  ? (n.fancybox.stop(i.$content),
                    i.$content.css("transition-duration", ""),
                    (i.isPanning = !0))
                  : (i.isSwiping = !0),
                i.$container.addClass("fancybox-controls--isGrabbing")),
              2 === i.startPoints.length &&
                !u.isAnimating &&
                !d.hasError &&
                "image" === d.type &&
                (d.isLoaded || d.$ghost) &&
                ((i.canTap = !1),
                (i.isSwiping = !1),
                (i.isPanning = !1),
                (i.isZooming = !0),
                n.fancybox.stop(i.$content),
                i.$content.css("transition-duration", ""),
                (i.centerPointStartX =
                  (i.startPoints[0].x + i.startPoints[1].x) * 0.5 -
                  n(t).scrollLeft()),
                (i.centerPointStartY =
                  (i.startPoints[0].y + i.startPoints[1].y) * 0.5 -
                  n(t).scrollTop()),
                (i.percentageOfImageAtPinchPointX =
                  (i.centerPointStartX - i.contentStartPos.left) /
                  i.contentStartPos.width),
                (i.percentageOfImageAtPinchPointY =
                  (i.centerPointStartY - i.contentStartPos.top) /
                  i.contentStartPos.height),
                (i.startDistanceBetweenFingers = a(
                  i.startPoints[0],
                  i.startPoints[1]
                )));
          }
        }
      }),
      (u.prototype.onscroll = function (t) {
        self.isScrolling = !0;
      }),
      (u.prototype.ontouchmove = function (t) {
        var e = this,
          o = n(t.target);
        if (e.isScrolling || !(o.is(e.$stage) || e.$stage.find(o).length)) {
          e.canTap = !1;
          return;
        }
        (e.newPoints = s(t)),
          (e.opts || e.instance.canPan()) &&
            e.newPoints &&
            e.newPoints.length &&
            ((e.isSwiping && !0 === e.isSwiping) || t.preventDefault(),
            (e.distanceX = a(e.newPoints[0], e.startPoints[0], "x")),
            (e.distanceY = a(e.newPoints[0], e.startPoints[0], "y")),
            (e.distance = a(e.newPoints[0], e.startPoints[0])),
            e.distance > 0 &&
              (e.isSwiping
                ? e.onSwipe(t)
                : e.isPanning
                ? e.onPan()
                : e.isZooming && e.onZoom()));
      }),
      (u.prototype.onSwipe = function (e) {
        var s,
          a = this,
          r = a.isSwiping,
          c = a.sliderStartPos.left || 0;
        if (!0 === r) {
          if (Math.abs(a.distance) > 10) {
            if (
              ((a.canTap = !1),
              a.instance.group.length < 2 && a.opts.vertical
                ? (a.isSwiping = "y")
                : a.instance.isDragging ||
                  !1 === a.opts.vertical ||
                  ("auto" === a.opts.vertical && n(t).width() > 800)
                ? (a.isSwiping = "x")
                : ((s = Math.abs(
                    (180 * Math.atan2(a.distanceY, a.distanceX)) / Math.PI
                  )),
                  (a.isSwiping = s > 45 && s < 135 ? "y" : "x")),
              (a.canTap = !1),
              "y" === a.isSwiping &&
                n.fancybox.isMobile &&
                (l(a.$target) || l(a.$target.parent())))
            ) {
              a.isScrolling = !0;
              return;
            }
            (a.instance.isDragging = a.isSwiping),
              (a.startPoints = a.newPoints),
              n.each(a.instance.slides, function (t, e) {
                n.fancybox.stop(e.$slide),
                  e.$slide.css("transition-duration", ""),
                  (e.inTransition = !1),
                  e.pos === a.instance.current.pos &&
                    (a.sliderStartPos.left = n.fancybox.getTranslate(
                      e.$slide
                    ).left);
              }),
              a.instance.SlideShow &&
                a.instance.SlideShow.isActive &&
                a.instance.SlideShow.stop();
          }
          return;
        }
        "x" == r &&
          (a.distanceX > 0 &&
          (a.instance.group.length < 2 ||
            (0 === a.instance.current.index && !a.instance.current.opts.loop))
            ? (c += Math.pow(a.distanceX, 0.8))
            : a.distanceX < 0 &&
              (a.instance.group.length < 2 ||
                (a.instance.current.index === a.instance.group.length - 1 &&
                  !a.instance.current.opts.loop))
            ? (c -= Math.pow(-a.distanceX, 0.8))
            : (c += a.distanceX)),
          (a.sliderLastPos = {
            top: "x" == r ? 0 : a.sliderStartPos.top + a.distanceY,
            left: c,
          }),
          a.requestId && (i(a.requestId), (a.requestId = null)),
          (a.requestId = o(function () {
            a.sliderLastPos &&
              (n.each(a.instance.slides, function (t, e) {
                var o = e.pos - a.instance.currPos;
                n.fancybox.setTranslate(e.$slide, {
                  top: a.sliderLastPos.top,
                  left:
                    a.sliderLastPos.left +
                    o * a.canvasWidth +
                    o * e.opts.gutter,
                });
              }),
              a.$container.addClass("fancybox-is-sliding"));
          }));
      }),
      (u.prototype.onPan = function () {
        var t = this;
        if (
          a(t.newPoints[0], t.realPoints[0]) < (n.fancybox.isMobile ? 10 : 5)
        ) {
          t.startPoints = t.newPoints;
          return;
        }
        (t.canTap = !1),
          (t.contentLastPos = t.limitMovement()),
          t.requestId && (i(t.requestId), (t.requestId = null)),
          (t.requestId = o(function () {
            n.fancybox.setTranslate(t.$content, t.contentLastPos);
          }));
      }),
      (u.prototype.limitMovement = function () {
        var t,
          e,
          n,
          o,
          i,
          s,
          a = this.canvasWidth,
          r = this.canvasHeight,
          c = this.distanceX,
          l = this.distanceY,
          u = this.contentStartPos,
          d = u.left,
          f = u.top,
          p = u.width,
          h = u.height;
        return (
          (i = p > a ? d + c : d),
          (s = f + l),
          (t = Math.max(0, 0.5 * a - 0.5 * p)),
          (e = Math.max(0, 0.5 * r - 0.5 * h)),
          (n = Math.min(a - p, 0.5 * a - 0.5 * p)),
          (o = Math.min(r - h, 0.5 * r - 0.5 * h)),
          p > a &&
            (c > 0 && i > t && (i = t - 1 + Math.pow(-t + d + c, 0.8) || 0),
            c < 0 && i < n && (i = n + 1 - Math.pow(n - d - c, 0.8) || 0)),
          h > r &&
            (l > 0 && s > e && (s = e - 1 + Math.pow(-e + f + l, 0.8) || 0),
            l < 0 && s < o && (s = o + 1 - Math.pow(o - f - l, 0.8) || 0)),
          { top: s, left: i, scaleX: u.scaleX, scaleY: u.scaleY }
        );
      }),
      (u.prototype.limitPosition = function (t, e, n, o) {
        var i = this.canvasWidth,
          s = this.canvasHeight;
        return (
          (t =
            n > i
              ? (t = t > 0 ? 0 : t) < i - n
                ? i - n
                : t
              : Math.max(0, i / 2 - n / 2)),
          {
            top: (e =
              o > s
                ? (e = e > 0 ? 0 : e) < s - o
                  ? s - o
                  : e
                : Math.max(0, s / 2 - o / 2)),
            left: t,
          }
        );
      }),
      (u.prototype.onZoom = function () {
        var e,
          s = this,
          r = s.contentStartPos.width,
          c = s.contentStartPos.height,
          l = s.contentStartPos.left,
          u = s.contentStartPos.top,
          d = a(s.newPoints[0], s.newPoints[1]) / s.startDistanceBetweenFingers,
          f = Math.floor(r * d),
          p = Math.floor(c * d),
          h = (r - f) * s.percentageOfImageAtPinchPointX,
          g = (c - p) * s.percentageOfImageAtPinchPointY,
          b = (s.newPoints[0].x + s.newPoints[1].x) / 2 - n(t).scrollLeft(),
          m = (s.newPoints[0].y + s.newPoints[1].y) / 2 - n(t).scrollTop(),
          $ = b - s.centerPointStartX,
          y = {
            top: u + (g + (m - s.centerPointStartY)),
            left: l + (h + $),
            scaleX: s.contentStartPos.scaleX * d,
            scaleY: s.contentStartPos.scaleY * d,
          };
        (s.canTap = !1),
          (s.newWidth = f),
          (s.newHeight = p),
          (s.contentLastPos = y),
          s.requestId && (i(s.requestId), (s.requestId = null)),
          (s.requestId = o(function () {
            n.fancybox.setTranslate(s.$content, s.contentLastPos);
          }));
      }),
      (u.prototype.ontouchend = function (t) {
        var o = this,
          a = Math.max(new Date().getTime() - o.startTime, 1),
          r = o.isSwiping,
          c = o.isPanning,
          l = o.isZooming,
          u = o.isScrolling;
        if (
          ((o.endPoints = s(t)),
          o.$container.removeClass("fancybox-controls--isGrabbing"),
          n(e).off(".fb.touch"),
          e.removeEventListener("scroll", o.onscroll, !0),
          o.requestId && (i(o.requestId), (o.requestId = null)),
          (o.isSwiping = !1),
          (o.isPanning = !1),
          (o.isZooming = !1),
          (o.isScrolling = !1),
          (o.instance.isDragging = !1),
          o.canTap)
        )
          return o.onTap(t);
        (o.speed = 366),
          (o.velocityX = (o.distanceX / a) * 0.5),
          (o.velocityY = (o.distanceY / a) * 0.5),
          (o.speedX = Math.max(
            0.5 * o.speed,
            Math.min(1.5 * o.speed, (1 / Math.abs(o.velocityX)) * o.speed)
          )),
          c ? o.endPanning() : l ? o.endZooming() : o.endSwiping(r, u);
      }),
      (u.prototype.endSwiping = function (t, e) {
        var o = this,
          i = !1,
          s = o.instance.group.length;
        (o.sliderLastPos = null),
          "y" == t && !e && Math.abs(o.distanceY) > 50
            ? (n.fancybox.animate(
                o.instance.current.$slide,
                {
                  top: o.sliderStartPos.top + o.distanceY + 150 * o.velocityY,
                  opacity: 0,
                },
                150
              ),
              (i = o.instance.close(!0, 300)))
            : "x" == t && o.distanceX > 50 && s > 1
            ? (i = o.instance.previous(o.speedX))
            : "x" == t &&
              o.distanceX < -50 &&
              s > 1 &&
              (i = o.instance.next(o.speedX)),
          !1 === i &&
            ("x" == t || "y" == t) &&
            (e || s < 2
              ? o.instance.centerSlide(o.instance.current, 150)
              : o.instance.jumpTo(o.instance.current.index)),
          o.$container.removeClass("fancybox-is-sliding");
      }),
      (u.prototype.endPanning = function () {
        var t, e, o;
        this.contentLastPos &&
          (!1 === this.opts.momentum
            ? ((t = this.contentLastPos.left), (e = this.contentLastPos.top))
            : ((t = this.contentLastPos.left + this.velocityX * this.speed),
              (e = this.contentLastPos.top + this.velocityY * this.speed)),
          ((o = this.limitPosition(
            t,
            e,
            this.contentStartPos.width,
            this.contentStartPos.height
          )).width = this.contentStartPos.width),
          (o.height = this.contentStartPos.height),
          n.fancybox.animate(this.$content, o, 330));
      }),
      (u.prototype.endZooming = function () {
        var t,
          e,
          o,
          i,
          s = this.instance.current,
          a = this.newWidth,
          r = this.newHeight;
        this.contentLastPos &&
          ((t = this.contentLastPos.left),
          (i = {
            top: (e = this.contentLastPos.top),
            left: t,
            width: a,
            height: r,
            scaleX: 1,
            scaleY: 1,
          }),
          n.fancybox.setTranslate(this.$content, i),
          a < this.canvasWidth && r < this.canvasHeight
            ? this.instance.scaleToFit(150)
            : a > s.width || r > s.height
            ? this.instance.scaleToActual(
                this.centerPointStartX,
                this.centerPointStartY,
                150
              )
            : ((o = this.limitPosition(t, e, a, r)),
              n.fancybox.setTranslate(
                this.content,
                n.fancybox.getTranslate(this.$content)
              ),
              n.fancybox.animate(this.$content, o, 150)));
      }),
      (u.prototype.onTap = function (t) {
        var e,
          o = this,
          i = n(t.target),
          a = o.instance,
          r = a.current,
          c = (t && s(t)) || o.startPoints,
          l = c[0] ? c[0].x - o.$stage.offset().left : 0,
          u = c[0] ? c[0].y - o.$stage.offset().top : 0,
          d = function (e) {
            var i = r.opts[e];
            if ((n.isFunction(i) && (i = i.apply(a, [r, t])), i))
              switch (i) {
                case "close":
                  a.close(o.startEvent);
                  break;
                case "toggleControls":
                  a.toggleControls(!0);
                  break;
                case "next":
                  a.next();
                  break;
                case "nextOrClose":
                  a.group.length > 1 ? a.next() : a.close(o.startEvent);
                  break;
                case "zoom":
                  "image" == r.type &&
                    (r.isLoaded || r.$ghost) &&
                    (a.canPan()
                      ? a.scaleToFit()
                      : a.isScaledDown()
                      ? a.scaleToActual(l, u)
                      : a.group.length < 2 && a.close(o.startEvent));
              }
          };
        if (
          (!t.originalEvent || 2 != t.originalEvent.button) &&
          (i.is("img") || !(l > i[0].clientWidth + i.offset().left))
        ) {
          if (
            i.is(
              ".fancybox-bg,.fancybox-inner,.fancybox-outer,.fancybox-container"
            )
          )
            e = "Outside";
          else if (i.is(".fancybox-slide")) e = "Slide";
          else {
            if (
              !a.current.$content ||
              !a.current.$content.find(i).addBack().filter(i).length
            )
              return;
            e = "Content";
          }
          if (o.tapped) {
            if (
              (clearTimeout(o.tapped),
              (o.tapped = null),
              Math.abs(l - o.tapX) > 50 || Math.abs(u - o.tapY) > 50)
            )
              return this;
            d("dblclick" + e);
          } else
            (o.tapX = l),
              (o.tapY = u),
              r.opts["dblclick" + e] &&
              r.opts["dblclick" + e] !== r.opts["click" + e]
                ? (o.tapped = setTimeout(function () {
                    (o.tapped = null), d("click" + e);
                  }, 500))
                : d("click" + e);
          return this;
        }
      }),
      n(e).on("onActivate.fb", function (t, e) {
        e && !e.Guestures && (e.Guestures = new u(e));
      });
  })(window, document, window.jQuery || jQuery),
  (function (t, e) {
    "use strict";
    e.extend(!0, e.fancybox.defaults, {
      btnTpl: {
        slideShow:
          '<button data-fancybox-play class="fancybox-button fancybox-button--play" title="{{PLAY_START}}"><svg viewBox="0 0 40 40"><path d="M13,12 L27,20 L13,27 Z" /><path d="M15,10 v19 M23,10 v19" /></svg></button>',
      },
      slideShow: { autoStart: !1, speed: 3e3 },
    });
    var n = function (t) {
      (this.instance = t), this.init();
    };
    e.extend(n.prototype, {
      timer: null,
      isActive: !1,
      $button: null,
      init: function () {
        var t = this;
        (t.$button = t.instance.$refs.toolbar
          .find("[data-fancybox-play]")
          .on("click", function () {
            t.toggle();
          })),
          (t.instance.group.length < 2 ||
            !t.instance.group[t.instance.currIndex].opts.slideShow) &&
            t.$button.hide();
      },
      set: function (t) {
        var e = this;
        e.instance &&
        e.instance.current &&
        (!0 === t ||
          e.instance.current.opts.loop ||
          e.instance.currIndex < e.instance.group.length - 1)
          ? (e.timer = setTimeout(function () {
              e.isActive &&
                e.instance.jumpTo(
                  (e.instance.currIndex + 1) % e.instance.group.length
                );
            }, e.instance.current.opts.slideShow.speed))
          : (e.stop(),
            (e.instance.idleSecondsCounter = 0),
            e.instance.showControls());
      },
      clear: function () {
        var t = this;
        clearTimeout(t.timer), (t.timer = null);
      },
      start: function () {
        var t = this,
          e = t.instance.current;
        e &&
          ((t.isActive = !0),
          t.$button
            .attr("title", e.opts.i18n[e.opts.lang].PLAY_STOP)
            .removeClass("fancybox-button--play")
            .addClass("fancybox-button--pause"),
          t.set(!0));
      },
      stop: function () {
        var t = this,
          e = t.instance.current;
        t.clear(),
          t.$button
            .attr("title", e.opts.i18n[e.opts.lang].PLAY_START)
            .removeClass("fancybox-button--pause")
            .addClass("fancybox-button--play"),
          (t.isActive = !1);
      },
      toggle: function () {
        this.isActive ? this.stop() : this.start();
      },
    }),
      e(t).on({
        "onInit.fb": function (t, e) {
          e && !e.SlideShow && (e.SlideShow = new n(e));
        },
        "beforeShow.fb": function (t, e, n, o) {
          var i = e && e.SlideShow;
          o
            ? i && n.opts.slideShow.autoStart && i.start()
            : i && i.isActive && i.clear();
        },
        "afterShow.fb": function (t, e, n) {
          var o = e && e.SlideShow;
          o && o.isActive && o.set();
        },
        "afterKeydown.fb": function (n, o, i, s, a) {
          var r = o && o.SlideShow;
          r &&
            i.opts.slideShow &&
            (80 === a || 32 === a) &&
            !e(t.activeElement).is("button,a,input") &&
            (s.preventDefault(), r.toggle());
        },
        "beforeClose.fb onDeactivate.fb": function (t, e) {
          var n = e && e.SlideShow;
          n && n.stop();
        },
      }),
      e(t).on("visibilitychange", function () {
        var n = e.fancybox.getInstance(),
          o = n && n.SlideShow;
        o && o.isActive && (t.hidden ? o.clear() : o.set());
      });
  })(document, window.jQuery || jQuery),
  (function (t, e) {
    "use strict";
    var n = (function () {
      var e,
        n,
        o,
        i = [
          [
            "requestFullscreen",
            "exitFullscreen",
            "fullscreenElement",
            "fullscreenEnabled",
            "fullscreenchange",
            "fullscreenerror",
          ],
          [
            "webkitRequestFullscreen",
            "webkitExitFullscreen",
            "webkitFullscreenElement",
            "webkitFullscreenEnabled",
            "webkitfullscreenchange",
            "webkitfullscreenerror",
          ],
          [
            "webkitRequestFullScreen",
            "webkitCancelFullScreen",
            "webkitCurrentFullScreenElement",
            "webkitCancelFullScreen",
            "webkitfullscreenchange",
            "webkitfullscreenerror",
          ],
          [
            "mozRequestFullScreen",
            "mozCancelFullScreen",
            "mozFullScreenElement",
            "mozFullScreenEnabled",
            "mozfullscreenchange",
            "mozfullscreenerror",
          ],
          [
            "msRequestFullscreen",
            "msExitFullscreen",
            "msFullscreenElement",
            "msFullscreenEnabled",
            "MSFullscreenChange",
            "MSFullscreenError",
          ],
        ],
        s = {};
      for (n = 0; n < i.length; n++)
        if ((e = i[n]) && e[1] in t) {
          for (o = 0; o < e.length; o++) s[i[0][o]] = e[o];
          return s;
        }
      return !1;
    })();
    if (!n) {
      e && e.fancybox && (e.fancybox.defaults.btnTpl.fullScreen = !1);
      return;
    }
    var o = {
      request: function (e) {
        (e = e || t.documentElement)[n.requestFullscreen](
          e.ALLOW_KEYBOARD_INPUT
        );
      },
      exit: function () {
        t[n.exitFullscreen]();
      },
      toggle: function (e) {
        (e = e || t.documentElement),
          this.isFullscreen() ? this.exit() : this.request(e);
      },
      isFullscreen: function () {
        return Boolean(t[n.fullscreenElement]);
      },
      enabled: function () {
        return Boolean(t[n.fullscreenEnabled]);
      },
    };
    e.extend(!0, e.fancybox.defaults, {
      btnTpl: {
        fullScreen:
          '<button data-fancybox-fullscreen class="fancybox-button fancybox-button--fullscreen" title="{{FULL_SCREEN}}"><svg viewBox="0 0 40 40"><path d="M9,12 h22 v16 h-22 v-16 v16 h22 v-16 Z" /></svg></button>',
      },
      fullScreen: { autoStart: !1 },
    }),
      e(t).on({
        "onInit.fb": function (t, e) {
          var n;
          e && e.group[e.currIndex].opts.fullScreen
            ? ((n = e.$refs.container).on(
                "click.fb-fullscreen",
                "[data-fancybox-fullscreen]",
                function (t) {
                  t.stopPropagation(), t.preventDefault(), o.toggle(n[0]);
                }
              ),
              e.opts.fullScreen &&
                !0 === e.opts.fullScreen.autoStart &&
                o.request(n[0]),
              (e.FullScreen = o))
            : e && e.$refs.toolbar.find("[data-fancybox-fullscreen]").hide();
        },
        "afterKeydown.fb": function (t, e, n, o, i) {
          e &&
            e.FullScreen &&
            70 === i &&
            (o.preventDefault(), e.FullScreen.toggle(e.$refs.container[0]));
        },
        "beforeClose.fb": function (t) {
          t && t.FullScreen && o.exit();
        },
      }),
      e(t).on(n.fullscreenchange, function () {
        var t = o.isFullscreen(),
          n = e.fancybox.getInstance();
        n &&
          (n.current &&
            "image" === n.current.type &&
            n.isAnimating &&
            (n.current.$content.css("transition", "none"),
            (n.isAnimating = !1),
            n.update(!0, !0, 0)),
          n.trigger("onFullscreenChange", t),
          n.$refs.container.toggleClass("fancybox-is-fullscreen", t));
      });
  })(document, window.jQuery || jQuery),
  (function (t, e) {
    "use strict";
    e.fancybox.defaults = e.extend(
      !0,
      {
        btnTpl: {
          thumbs:
            '<button data-fancybox-thumbs class="fancybox-button fancybox-button--thumbs" title="{{THUMBS}}"><svg viewBox="0 0 120 120"><path d="M30,30 h14 v14 h-14 Z M50,30 h14 v14 h-14 Z M70,30 h14 v14 h-14 Z M30,50 h14 v14 h-14 Z M50,50 h14 v14 h-14 Z M70,50 h14 v14 h-14 Z M30,70 h14 v14 h-14 Z M50,70 h14 v14 h-14 Z M70,70 h14 v14 h-14 Z" /></svg></button>',
        },
        thumbs: {
          autoStart: !1,
          hideOnClose: !0,
          parentEl: ".fancybox-container",
          axis: "y",
        },
      },
      e.fancybox.defaults
    );
    var n = function (t) {
      this.init(t);
    };
    e.extend(n.prototype, {
      $button: null,
      $grid: null,
      $list: null,
      isVisible: !1,
      isActive: !1,
      init: function (t) {
        var e = this;
        (e.instance = t), (t.Thumbs = e);
        var n = t.group[0],
          o = t.group[1];
        (e.opts = t.group[t.currIndex].opts.thumbs),
          (e.$button = t.$refs.toolbar.find("[data-fancybox-thumbs]")),
          e.opts &&
          n &&
          o &&
          ("image" == n.type || n.opts.thumb || n.opts.$thumb) &&
          ("image" == o.type || o.opts.thumb || o.opts.$thumb)
            ? (e.$button.show().on("click", function () {
                e.toggle();
              }),
              (e.isActive = !0))
            : e.$button.hide();
      },
      create: function () {
        var t,
          n,
          o = this,
          i = o.instance,
          s = o.opts.parentEl;
        (o.$grid = e(
          '<div class="fancybox-thumbs fancybox-thumbs-' +
            o.opts.axis +
            '"></div>'
        ).appendTo(i.$refs.container.find(s).addBack().filter(s))),
          (t = "<ul>"),
          e.each(i.group, function (e, o) {
            (n =
              o.opts.thumb ||
              (o.opts.$thumb ? o.opts.$thumb.attr("src") : null)) ||
              "image" !== o.type ||
              (n = o.src),
              n &&
                n.length &&
                (t +=
                  '<li data-index="' +
                  e +
                  '"  tabindex="0" class="fancybox-thumbs-loading"><img data-src="' +
                  n +
                  '" /></li>');
          }),
          (t += "</ul>"),
          (o.$list = e(t)
            .appendTo(o.$grid)
            .on("click", "li", function () {
              i.jumpTo(e(this).data("index"));
            })),
          o.$list
            .find("img")
            .hide()
            .one("load", function () {
              var t,
                n,
                o,
                i,
                s = e(this).parent().removeClass("fancybox-thumbs-loading"),
                a = s.outerWidth(),
                r = s.outerHeight();
              (t = this.naturalWidth || this.width),
                (n = this.naturalHeight || this.height),
                (o = t / a),
                (i = n / r),
                o >= 1 &&
                  i >= 1 &&
                  (o > i ? ((t /= i), (n = r)) : ((t = a), (n /= o))),
                e(this)
                  .css({
                    width: Math.floor(t),
                    height: Math.floor(n),
                    "margin-top":
                      n > r
                        ? Math.floor(0.3 * r - 0.3 * n)
                        : Math.floor(0.5 * r - 0.5 * n),
                    "margin-left": Math.floor(0.5 * a - 0.5 * t),
                  })
                  .show();
            })
            .each(function () {
              this.src = e(this).data("src");
            }),
          "x" === o.opts.axis &&
            o.$list.width(
              parseInt(o.$grid.css("padding-right")) +
                i.group.length * o.$list.children().eq(0).outerWidth(!0) +
                "px"
            );
      },
      focus: function (t) {
        var e,
          n,
          o = this.$list;
        this.instance.current &&
          ((n = (e = o
            .children()
            .removeClass("fancybox-thumbs-active")
            .filter('[data-index="' + this.instance.current.index + '"]')
            .addClass("fancybox-thumbs-active")).position()),
          "y" === this.opts.axis &&
          (n.top < 0 || n.top > o.height() - e.outerHeight())
            ? o.stop().animate({ scrollTop: o.scrollTop() + n.top }, t)
            : "x" === this.opts.axis &&
              (n.left < o.parent().scrollLeft() ||
                n.left >
                  o.parent().scrollLeft() +
                    (o.parent().width() - e.outerWidth())) &&
              o.parent().stop().animate({ scrollLeft: n.left }, t));
      },
      update: function () {
        this.instance.$refs.container.toggleClass(
          "fancybox-show-thumbs",
          this.isVisible
        ),
          this.isVisible
            ? (this.$grid || this.create(),
              this.instance.trigger("onThumbsShow"),
              this.focus(0))
            : this.$grid && this.instance.trigger("onThumbsHide"),
          this.instance.update();
      },
      hide: function () {
        (this.isVisible = !1), this.update();
      },
      show: function () {
        (this.isVisible = !0), this.update();
      },
      toggle: function () {
        (this.isVisible = !this.isVisible), this.update();
      },
    }),
      e(t).on({
        "onInit.fb": function (t, e) {
          var o;
          e &&
            !e.Thumbs &&
            (o = new n(e)).isActive &&
            !0 === o.opts.autoStart &&
            o.show();
        },
        "beforeShow.fb": function (t, e, n, o) {
          var i = e && e.Thumbs;
          i && i.isVisible && i.focus(o ? 0 : 250);
        },
        "afterKeydown.fb": function (t, e, n, o, i) {
          var s = e && e.Thumbs;
          s && s.isActive && 71 === i && (o.preventDefault(), s.toggle());
        },
        "beforeClose.fb": function (t, e) {
          var n = e && e.Thumbs;
          n && n.isVisible && !1 !== n.opts.hideOnClose && n.$grid.hide();
        },
      });
  })(document, window.jQuery),
  (function (t, e) {
    "use strict";
    e.extend(!0, e.fancybox.defaults, {
      btnTpl: {
        share:
          '<button data-fancybox-share class="fancybox-button fancybox-button--share" title="{{SHARE}}"><svg viewBox="0 0 40 40"><path d="M6,30 C8,18 19,16 23,16 L23,16 L23,10 L33,20 L23,29 L23,24 C19,24 8,27 6,30 Z"></svg></button>',
      },
      share: {
        tpl: '<div class="fancybox-share"><h1>{{SHARE}}</h1><p class="fancybox-share__links"><a class="fancybox-share__button fancybox-share__button--fb" href="https://www.facebook.com/sharer/sharer.php?u={{url}}"><svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="m287 456v-299c0-21 6-35 35-35h38v-63c-7-1-29-3-55-3-54 0-91 33-91 94v306m143-254h-205v72h196" /></svg><span>Facebook</span></a><a class="fancybox-share__button fancybox-share__button--pt" href="https://www.pinterest.com/pin/create/button/?url={{url}}&description={{descr}}&media={{media}}"><svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="m265 56c-109 0-164 78-164 144 0 39 15 74 47 87 5 2 10 0 12-5l4-19c2-6 1-8-3-13-9-11-15-25-15-45 0-58 43-110 113-110 62 0 96 38 96 88 0 67-30 122-73 122-24 0-42-19-36-44 6-29 20-60 20-81 0-19-10-35-31-35-25 0-44 26-44 60 0 21 7 36 7 36l-30 125c-8 37-1 83 0 87 0 3 4 4 5 2 2-3 32-39 42-75l16-64c8 16 31 29 56 29 74 0 124-67 124-157 0-69-58-132-146-132z" fill="#fff"/></svg><span>Pinterest</span></a><a class="fancybox-share__button fancybox-share__button--tw" href="https://twitter.com/intent/tweet?url={{url}}&text={{descr}}"><svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="m456 133c-14 7-31 11-47 13 17-10 30-27 37-46-15 10-34 16-52 20-61-62-157-7-141 75-68-3-129-35-169-85-22 37-11 86 26 109-13 0-26-4-37-9 0 39 28 72 65 80-12 3-25 4-37 2 10 33 41 57 77 57-42 30-77 38-122 34 170 111 378-32 359-208 16-11 30-25 41-42z" /></svg><span>Twitter</span></a></p><p><input class="fancybox-share__input" type="text" value="{{url_raw}}" /></p></div>',
      },
    }),
      e(t).on("click", "[data-fancybox-share]", function () {
        var t,
          n,
          o,
          i,
          s = e.fancybox.getInstance();
        s &&
          ((o = !1 === s.current.opts.hash ? s.current.src : window.location),
          (i = s.current.opts.share.tpl
            .replace(
              /\{\{media\}\}/g,
              "image" === s.current.type
                ? encodeURIComponent(s.current.src)
                : ""
            )
            .replace(/\{\{url\}\}/g, encodeURIComponent(o))
            .replace(
              /\{\{url_raw\}\}/g,
              ((n = {
                "&": "&amp;",
                "<": "&lt;",
                ">": "&gt;",
                '"': "&quot;",
                "'": "&#39;",
                "/": "&#x2F;",
                "`": "&#x60;",
                "=": "&#x3D;",
              }),
              String((t = o)).replace(/[&<>"'`=\/]/g, function (t) {
                return n[t];
              }))
            )
            .replace(
              /\{\{descr\}\}/g,
              s.$caption ? encodeURIComponent(s.$caption.text()) : ""
            )),
          e.fancybox.open({
            src: s.translate(s, i),
            type: "html",
            opts: {
              animationEffect: "fade",
              animationDuration: 250,
              afterLoad: function (t, e) {
                e.$content.find(".fancybox-share__links a").click(function () {
                  return (
                    window.open(this.href, "Share", "width=550, height=450"), !1
                  );
                });
              },
            },
          }));
      });
  })(document, window.jQuery || jQuery),
  (function (t, e, n) {
    "use strict";
    n.escapeSelector ||
      (n.escapeSelector = function (t) {
        var e = function (t, e) {
          return e
            ? "\0" === t
              ? "�"
              : t.slice(0, -1) +
                "\\" +
                t.charCodeAt(t.length - 1).toString(16) +
                " "
            : "\\" + t;
        };
        return (t + "").replace(
          /([\0-\x1f\x7f]|^-?\d)|^-$|[^\x80-\uFFFF\w-]/g,
          e
        );
      });
    var o = !0,
      i = null,
      s = null;
    function a() {
      var t,
        n = e.location.hash.substr(1),
        o = n.split("-"),
        i =
          (o.length > 1 &&
            /^\+?\d+$/.test(o[o.length - 1]) &&
            parseInt(o.pop(-1), 10)) ||
          1;
      return i < 1 && (i = 1), { hash: n, index: i, gallery: o.join("-") };
    }
    function r(t) {
      var e;
      "" !== t.gallery &&
        ((e = n("[data-fancybox='" + n.escapeSelector(t.gallery) + "']").eq(
          t.index - 1
        )).length || (e = n("#" + n.escapeSelector(t.gallery))),
        e.length && ((o = !1), e.trigger("click")));
    }
    function c(t) {
      var e;
      return (
        !!t &&
        ((e = t.current ? t.current.opts : t.opts).hash ||
          (e.$orig ? e.$orig.data("fancybox") : ""))
      );
    }
    n(function () {
      !1 !== n.fancybox.defaults.hash &&
        (n(t).on({
          "onInit.fb": function (t, e) {
            var n, o;
            !1 !== e.group[e.currIndex].opts.hash &&
              ((n = a()),
              (o = c(e)) &&
                n.gallery &&
                o == n.gallery &&
                (e.currIndex = n.index - 1));
          },
          "beforeShow.fb": function (n, a, r) {
            var l;
            r &&
              !1 !== r.opts.hash &&
              (l = c(a)) &&
              "" !== l &&
              (0 > e.location.hash.indexOf(l) &&
                (a.opts.origHash = e.location.hash),
              (i = l + (a.group.length > 1 ? "-" + (r.index + 1) : "")),
              "replaceState" in e.history
                ? (s && clearTimeout(s),
                  (s = setTimeout(function () {
                    e.history[o ? "pushState" : "replaceState"](
                      {},
                      t.title,
                      e.location.pathname + e.location.search + "#" + i
                    ),
                      (s = null),
                      (o = !1);
                  }, 300)))
                : (e.location.hash = i));
          },
          "beforeClose.fb": function (o, a, r) {
            var l, u;
            s && clearTimeout(s),
              !1 !== r.opts.hash &&
                ((l = c(a)),
                (u = a && a.opts.origHash ? a.opts.origHash : ""),
                l &&
                  "" !== l &&
                  ("replaceState" in history
                    ? e.history.replaceState(
                        {},
                        t.title,
                        e.location.pathname + e.location.search + u
                      )
                    : ((e.location.hash = u),
                      n(e).scrollTop(a.scrollTop).scrollLeft(a.scrollLeft))),
                (i = null));
          },
        }),
        n(e).on("hashchange.fb", function () {
          var t = a();
          n.fancybox.getInstance()
            ? i &&
              i !== t.gallery + "-" + t.index &&
              !(1 === t.index && i == t.gallery) &&
              ((i = null), n.fancybox.close())
            : "" !== t.gallery && r(t);
        }),
        setTimeout(function () {
          r(a());
        }, 50));
    });
  })(document, window, window.jQuery || jQuery),
  (function (t, e) {
    "use strict";
    var n = new Date().getTime();
    e(t).on({
      "onInit.fb": function (t, e, o) {
        e.$refs.stage.on(
          "mousewheel DOMMouseScroll wheel MozMousePixelScroll",
          function (t) {
            var o = e.current,
              i = new Date().getTime();
            if (
              !(
                e.group.length < 1 ||
                !1 === o.opts.wheel ||
                ("auto" === o.opts.wheel && "image" !== o.type) ||
                (t.preventDefault(),
                t.stopPropagation(),
                o.$slide.hasClass("fancybox-animated"))
              )
            )
              (t = t.originalEvent || t),
                !(i - n < 250) &&
                  ((n = i),
                  e[
                    0 > (-t.deltaY || -t.deltaX || t.wheelDelta || -t.detail)
                      ? "next"
                      : "previous"
                  ]());
          }
        );
      },
    });
  })(document, window.jQuery || jQuery);
