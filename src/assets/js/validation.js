/*! jQuery Validation Plugin - v1.14.0 - 6/30/2015
 * http://jqueryvalidation.org/
 * Copyright (c) 2015 JĆĀ¶rn Zaefferer; Licensed MIT */ !(function (t) {
  "function" == typeof define && define.amd ? define(["jquery"], t) : t(jQuery);
})(function (t) {
  t.extend(t.fn, {
    validate: function (e) {
      if (!this.length)
        return void (
          e &&
          e.debug &&
          window.console &&
          console.warn("Nothing selected, can't validate, returning nothing.")
        );
      var r = t.data(this[0], "validator");
      return (
        r ||
          (this.attr("novalidate", "novalidate"),
          (r = new t.validator(e, this[0])),
          t.data(this[0], "validator", r),
          r.settings.onsubmit &&
            (this.on("click.validate", ":submit", function (e) {
              r.settings.submitHandler && (r.submitButton = e.target),
                t(this).hasClass("cancel") && (r.cancelSubmit = !0),
                void 0 !== t(this).attr("formnovalidate") &&
                  (r.cancelSubmit = !0);
            }),
            this.on("submit.validate", function (e) {
              function i() {
                var i, a;
                return (
                  !r.settings.submitHandler ||
                  (r.submitButton &&
                    (i = t("<input type='hidden'/>")
                      .attr("name", r.submitButton.name)
                      .val(t(r.submitButton).val())
                      .appendTo(r.currentForm)),
                  (a = r.settings.submitHandler.call(r, r.currentForm, e)),
                  r.submitButton && i.remove(),
                  void 0 !== a && a)
                );
              }
              return (
                r.settings.debug && e.preventDefault(),
                r.cancelSubmit
                  ? ((r.cancelSubmit = !1), i())
                  : r.form()
                  ? r.pendingRequest
                    ? ((r.formSubmitted = !0), !1)
                    : i()
                  : (r.focusInvalid(), !1)
              );
            }))),
        r
      );
    },
    valid: function () {
      var e, r, i;
      return (
        t(this[0]).is("form")
          ? (e = this.validate().form())
          : ((i = []),
            (e = !0),
            (r = t(this[0].form).validate()),
            this.each(function () {
              (e = r.element(this) && e), (i = i.concat(r.errorList));
            }),
            (r.errorList = i)),
        e
      );
    },
    rules: function (e, r) {
      var i,
        a,
        n,
        s,
        o,
        l,
        u = this[0];
      if (e)
        switch (
          ((a = (i = t.data(u.form, "validator").settings).rules),
          (n = t.validator.staticRules(u)),
          e)
        ) {
          case "add":
            t.extend(n, t.validator.normalizeRule(r)),
              delete n.messages,
              (a[u.name] = n),
              r.messages &&
                (i.messages[u.name] = t.extend(i.messages[u.name], r.messages));
            break;
          case "remove":
            return r
              ? ((l = {}),
                t.each(r.split(/\s/), function (e, r) {
                  (l[r] = n[r]),
                    delete n[r],
                    "required" === r && t(u).removeAttr("aria-required");
                }),
                l)
              : (delete a[u.name], n);
        }
      return (
        (s = t.validator.normalizeRules(
          t.extend(
            {},
            t.validator.classRules(u),
            t.validator.attributeRules(u),
            t.validator.dataRules(u),
            t.validator.staticRules(u)
          ),
          u
        )).required &&
          ((o = s.required),
          delete s.required,
          (s = t.extend({ required: o }, s)),
          t(u).attr("aria-required", "true")),
        s.remote &&
          ((o = s.remote), delete s.remote, (s = t.extend(s, { remote: o }))),
        s
      );
    },
  }),
    t.extend(t.expr[":"], {
      blank: function (e) {
        return !t.trim("" + t(e).val());
      },
      filled: function (e) {
        return !!t.trim("" + t(e).val());
      },
      unchecked: function (e) {
        return !t(e).prop("checked");
      },
    }),
    (t.validator = function (e, r) {
      (this.settings = t.extend(!0, {}, t.validator.defaults, e)),
        (this.currentForm = r),
        this.init();
    }),
    (t.validator.format = function (e, r) {
      return 1 === arguments.length
        ? function () {
            var r = t.makeArray(arguments);
            return r.unshift(e), t.validator.format.apply(this, r);
          }
        : (arguments.length > 2 &&
            r.constructor !== Array &&
            (r = t.makeArray(arguments).slice(1)),
          r.constructor !== Array && (r = [r]),
          t.each(r, function (t, r) {
            e = e.replace(RegExp("\\{" + t + "\\}", "g"), function () {
              return r;
            });
          }),
          e);
    }),
    t.extend(t.validator, {
      defaults: {
        messages: {},
        groups: {},
        rules: {},
        errorClass: "error",
        validClass: "valid",
        errorElement: "label",
        focusCleanup: !1,
        focusInvalid: !0,
        errorContainer: t([]),
        errorLabelContainer: t([]),
        onsubmit: !0,
        ignore: ":hidden",
        ignoreTitle: !1,
        onfocusin: function (t) {
          (this.lastActive = t),
            this.settings.focusCleanup &&
              (this.settings.unhighlight &&
                this.settings.unhighlight.call(
                  this,
                  t,
                  this.settings.errorClass,
                  this.settings.validClass
                ),
              this.hideThese(this.errorsFor(t)));
        },
        onfocusout: function (t) {
          this.checkable(t) ||
            (!(t.name in this.submitted) && this.optional(t)) ||
            this.element(t);
        },
        onkeyup: function (e, r) {
          (9 === r.which && "" === this.elementValue(e)) ||
            -1 !==
              t.inArray(
                r.keyCode,
                [16, 17, 18, 20, 35, 36, 37, 38, 39, 40, 45, 144, 225]
              ) ||
            ((e.name in this.submitted || e === this.lastElement) &&
              this.element(e));
        },
        onclick: function (t) {
          t.name in this.submitted
            ? this.element(t)
            : t.parentNode.name in this.submitted && this.element(t.parentNode);
        },
        highlight: function (e, r, i) {
          "radio" === e.type
            ? this.findByName(e.name).addClass(r).removeClass(i)
            : t(e).addClass(r).removeClass(i);
        },
        unhighlight: function (e, r, i) {
          "radio" === e.type
            ? this.findByName(e.name).removeClass(r).addClass(i)
            : t(e).removeClass(r).addClass(i);
        },
      },
      setDefaults: function (e) {
        t.extend(t.validator.defaults, e);
      },
      messages: {
        required: "This field is required.",
        remote: "Please fix this field.",
        email: "Please enter a valid email address.",
        url: "Please enter a valid URL.",
        date: "Please enter a valid date.",
        dateISO: "Please enter a valid date ( ISO ).",
        number: "Please enter a valid number.",
        digits: "Please enter only digits.",
        creditcard: "Please enter a valid credit card number.",
        equalTo: "Please enter the same value again.",
        maxlength: t.validator.format(
          "Please enter no more than {0} characters."
        ),
        minlength: t.validator.format("Please enter at least {0} characters."),
        rangelength: t.validator.format(
          "Please enter a value between {0} and {1} characters long."
        ),
        range: t.validator.format("Please enter a value between {0} and {1}."),
        max: t.validator.format(
          "Please enter a value less than or equal to {0}."
        ),
        min: t.validator.format(
          "Please enter a value greater than or equal to {0}."
        ),
      },
      autoCreateRanges: !1,
      prototype: {
        init: function () {
          function e(e) {
            var r = t.data(this.form, "validator"),
              i = "on" + e.type.replace(/^validate/, ""),
              a = r.settings;
            a[i] && !t(this).is(a.ignore) && a[i].call(r, this, e);
          }
          (this.labelContainer = t(this.settings.errorLabelContainer)),
            (this.errorContext =
              (this.labelContainer.length && this.labelContainer) ||
              t(this.currentForm)),
            (this.containers = t(this.settings.errorContainer).add(
              this.settings.errorLabelContainer
            )),
            (this.submitted = {}),
            (this.valueCache = {}),
            (this.pendingRequest = 0),
            (this.pending = {}),
            (this.invalid = {}),
            this.reset();
          var r,
            i = (this.groups = {});
          t.each(this.settings.groups, function (e, r) {
            "string" == typeof r && (r = r.split(/\s/)),
              t.each(r, function (t, r) {
                i[r] = e;
              });
          }),
            (r = this.settings.rules),
            t.each(r, function (e, i) {
              r[e] = t.validator.normalizeRule(i);
            }),
            t(this.currentForm)
              .on(
                "focusin.validate focusout.validate keyup.validate",
                ":text, [type='password'], [type='file'], select, textarea, [type='number'], [type='search'], [type='tel'], [type='url'], [type='email'], [type='datetime'], [type='date'], [type='month'], [type='week'], [type='time'], [type='datetime-local'], [type='range'], [type='color'], [type='radio'], [type='checkbox']",
                e
              )
              .on(
                "click.validate",
                "select, option, [type='radio'], [type='checkbox']",
                e
              ),
            this.settings.invalidHandler &&
              t(this.currentForm).on(
                "invalid-form.validate",
                this.settings.invalidHandler
              ),
            t(this.currentForm)
              .find("[required], [data-rule-required], .required")
              .attr("aria-required", "true");
        },
        form: function () {
          return (
            this.checkForm(),
            t.extend(this.submitted, this.errorMap),
            (this.invalid = t.extend({}, this.errorMap)),
            this.valid() ||
              t(this.currentForm).triggerHandler("invalid-form", [this]),
            this.showErrors(),
            this.valid()
          );
        },
        checkForm: function () {
          this.prepareForm();
          for (
            var t = 0, e = (this.currentElements = this.elements());
            e[t];
            t++
          )
            this.check(e[t]);
          return this.valid();
        },
        element: function (e) {
          var r = this.clean(e),
            i = this.validationTargetFor(r),
            a = !0;
          return (
            (this.lastElement = i),
            void 0 === i
              ? delete this.invalid[r.name]
              : (this.prepareElement(i),
                (this.currentElements = t(i)),
                (a = !1 !== this.check(i))
                  ? delete this.invalid[i.name]
                  : (this.invalid[i.name] = !0)),
            t(e).attr("aria-invalid", !a),
            this.numberOfInvalids() ||
              (this.toHide = this.toHide.add(this.containers)),
            this.showErrors(),
            a
          );
        },
        showErrors: function (e) {
          if (e) {
            for (var r in (t.extend(this.errorMap, e),
            (this.errorList = []),
            e))
              this.errorList.push({
                message: e[r],
                element: this.findByName(r)[0],
              });
            this.successList = t.grep(this.successList, function (t) {
              return !(t.name in e);
            });
          }
          this.settings.showErrors
            ? this.settings.showErrors.call(this, this.errorMap, this.errorList)
            : this.defaultShowErrors();
        },
        resetForm: function () {
          t.fn.resetForm && t(this.currentForm).resetForm(),
            (this.submitted = {}),
            (this.lastElement = null),
            this.prepareForm(),
            this.hideErrors();
          var e,
            r = this.elements()
              .removeData("previousValue")
              .removeAttr("aria-invalid");
          if (this.settings.unhighlight)
            for (e = 0; r[e]; e++)
              this.settings.unhighlight.call(
                this,
                r[e],
                this.settings.errorClass,
                ""
              );
          else r.removeClass(this.settings.errorClass);
        },
        numberOfInvalids: function () {
          return this.objectLength(this.invalid);
        },
        objectLength: function (t) {
          var e,
            r = 0;
          for (e in t) r++;
          return r;
        },
        hideErrors: function () {
          this.hideThese(this.toHide);
        },
        hideThese: function (t) {
          t.not(this.containers).text(""), this.addWrapper(t).hide();
        },
        valid: function () {
          return 0 === this.size();
        },
        size: function () {
          return this.errorList.length;
        },
        focusInvalid: function () {
          if (this.settings.focusInvalid)
            try {
              t(
                this.findLastActive() ||
                  (this.errorList.length && this.errorList[0].element) ||
                  []
              )
                .filter(":visible")
                .focus()
                .trigger("focusin");
            } catch (e) {}
        },
        findLastActive: function () {
          var e = this.lastActive;
          return (
            e &&
            1 ===
              t.grep(this.errorList, function (t) {
                return t.element.name === e.name;
              }).length &&
            e
          );
        },
        elements: function () {
          var e = this,
            r = {};
          return t(this.currentForm)
            .find("input, select, textarea")
            .not(":submit, :reset, :image, :disabled")
            .not(this.settings.ignore)
            .filter(function () {
              return (
                !this.name &&
                  e.settings.debug &&
                  window.console &&
                  console.error("%o has no name assigned", this),
                !(this.name in r) &&
                  !!e.objectLength(t(this).rules()) &&
                  ((r[this.name] = !0), !0)
              );
            });
        },
        clean: function (e) {
          return t(e)[0];
        },
        errors: function () {
          var e = this.settings.errorClass.split(" ").join(".");
          return t(this.settings.errorElement + "." + e, this.errorContext);
        },
        reset: function () {
          (this.successList = []),
            (this.errorList = []),
            (this.errorMap = {}),
            (this.toShow = t([])),
            (this.toHide = t([])),
            (this.currentElements = t([]));
        },
        prepareForm: function () {
          this.reset(), (this.toHide = this.errors().add(this.containers));
        },
        prepareElement: function (t) {
          this.reset(), (this.toHide = this.errorsFor(t));
        },
        elementValue: function (e) {
          var r,
            i = t(e),
            a = e.type;
          return "radio" === a || "checkbox" === a
            ? this.findByName(e.name).filter(":checked").val()
            : "number" === a && void 0 !== e.validity
            ? !e.validity.badInput && i.val()
            : "string" == typeof (r = i.val())
            ? r.replace(/\r/g, "")
            : r;
        },
        check: function (e) {
          e = this.validationTargetFor(this.clean(e));
          var r,
            i,
            a,
            n = t(e).rules(),
            s = t.map(n, function (t, e) {
              return e;
            }).length,
            o = !1,
            l = this.elementValue(e);
          for (i in n) {
            a = { method: i, parameters: n[i] };
            try {
              if (
                ((r = t.validator.methods[i].call(this, l, e, a.parameters)),
                "dependency-mismatch" === r && 1 === s)
              ) {
                o = !0;
                continue;
              }
              if (((o = !1), "pending" === r))
                return void (this.toHide = this.toHide.not(this.errorsFor(e)));
              if (!r) return this.formatAndAdd(e, a), !1;
            } catch (u) {
              throw (
                (this.settings.debug &&
                  window.console &&
                  console.log(
                    "Exception occurred when checking element " +
                      e.id +
                      ", check the '" +
                      a.method +
                      "' method.",
                    u
                  ),
                u instanceof TypeError &&
                  (u.message +=
                    ".  Exception occurred when checking element " +
                    e.id +
                    ", check the '" +
                    a.method +
                    "' method."),
                u)
              );
            }
          }
          if (!o) return this.objectLength(n) && this.successList.push(e), !0;
        },
        customDataMessage: function (e, r) {
          return (
            t(e).data(
              "msg" + r.charAt(0).toUpperCase() + r.substring(1).toLowerCase()
            ) || t(e).data("msg")
          );
        },
        customMessage: function (t, e) {
          var r = this.settings.messages[t];
          return r && (r.constructor === String ? r : r[e]);
        },
        findDefined: function () {
          for (var t = 0; t < arguments.length; t++)
            if (void 0 !== arguments[t]) return arguments[t];
        },
        defaultMessage: function (e, r) {
          return this.findDefined(
            this.customMessage(e.name, r),
            this.customDataMessage(e, r),
            (!this.settings.ignoreTitle && e.title) || void 0,
            t.validator.messages[r],
            "<strong>Warning: No message defined for " + e.name + "</strong>"
          );
        },
        formatAndAdd: function (e, r) {
          var i = this.defaultMessage(e, r.method),
            a = /\$?\{(\d+)\}/g;
          "function" == typeof i
            ? (i = i.call(this, r.parameters, e))
            : a.test(i) &&
              (i = t.validator.format(i.replace(a, "{$1}"), r.parameters)),
            this.errorList.push({ message: i, element: e, method: r.method }),
            (this.errorMap[e.name] = i),
            (this.submitted[e.name] = i);
        },
        addWrapper: function (t) {
          return (
            this.settings.wrapper &&
              (t = t.add(t.parent(this.settings.wrapper))),
            t
          );
        },
        defaultShowErrors: function () {
          var t, e, r;
          for (t = 0; this.errorList[t]; t++)
            (r = this.errorList[t]),
              this.settings.highlight &&
                this.settings.highlight.call(
                  this,
                  r.element,
                  this.settings.errorClass,
                  this.settings.validClass
                ),
              this.showLabel(r.element, r.message);
          if (
            (this.errorList.length &&
              (this.toShow = this.toShow.add(this.containers)),
            this.settings.success)
          )
            for (t = 0; this.successList[t]; t++)
              this.showLabel(this.successList[t]);
          if (this.settings.unhighlight)
            for (t = 0, e = this.validElements(); e[t]; t++)
              this.settings.unhighlight.call(
                this,
                e[t],
                this.settings.errorClass,
                this.settings.validClass
              );
          (this.toHide = this.toHide.not(this.toShow)),
            this.hideErrors(),
            this.addWrapper(this.toShow).show();
        },
        validElements: function () {
          return this.currentElements.not(this.invalidElements());
        },
        invalidElements: function () {
          return t(this.errorList).map(function () {
            return this.element;
          });
        },
        showLabel: function (e, r) {
          var i,
            a,
            n,
            s = this.errorsFor(e),
            o = this.idOrName(e),
            l = t(e).attr("aria-describedby");
          s.length
            ? (s
                .removeClass(this.settings.validClass)
                .addClass(this.settings.errorClass),
              s.html(r))
            : ((i = s =
                t("<" + this.settings.errorElement + ">")
                  .attr("id", o + "-error")
                  .addClass(this.settings.errorClass)
                  .html(r || "")),
              this.settings.wrapper &&
                (i = s
                  .hide()
                  .show()
                  .wrap("<" + this.settings.wrapper + "/>")
                  .parent()),
              this.labelContainer.length
                ? this.labelContainer.append(i)
                : this.settings.errorPlacement
                ? this.settings.errorPlacement(i, t(e))
                : i.insertAfter(e),
              s.is("label")
                ? s.attr("for", o)
                : 0 === s.parents("label[for='" + o + "']").length &&
                  ((n = s.attr("id").replace(/(:|\.|\[|\]|\$)/g, "\\$1")),
                  l
                    ? l.match(RegExp("\\b" + n + "\\b")) || (l += " " + n)
                    : (l = n),
                  t(e).attr("aria-describedby", l),
                  (a = this.groups[e.name]) &&
                    t.each(this.groups, function (e, r) {
                      r === a &&
                        t("[name='" + e + "']", this.currentForm).attr(
                          "aria-describedby",
                          s.attr("id")
                        );
                    }))),
            !r &&
              this.settings.success &&
              (s.text(""),
              "string" == typeof this.settings.success
                ? s.addClass(this.settings.success)
                : this.settings.success(s, e)),
            (this.toShow = this.toShow.add(s));
        },
        errorsFor: function (e) {
          var r = this.idOrName(e),
            i = t(e).attr("aria-describedby"),
            a = "label[for='" + r + "'], label[for='" + r + "'] *";
          return (
            i && (a = a + ", #" + i.replace(/\s+/g, ", #")),
            this.errors().filter(a)
          );
        },
        idOrName: function (t) {
          return (
            this.groups[t.name] || (this.checkable(t) ? t.name : t.id || t.name)
          );
        },
        validationTargetFor: function (e) {
          return (
            this.checkable(e) && (e = this.findByName(e.name)),
            t(e).not(this.settings.ignore)[0]
          );
        },
        checkable: function (t) {
          return /radio|checkbox/i.test(t.type);
        },
        findByName: function (e) {
          return t(this.currentForm).find("[name='" + e + "']");
        },
        getLength: function (e, r) {
          switch (r.nodeName.toLowerCase()) {
            case "select":
              return t("option:selected", r).length;
            case "input":
              if (this.checkable(r))
                return this.findByName(r.name).filter(":checked").length;
          }
          return e.length;
        },
        depend: function (t, e) {
          return (
            !this.dependTypes[typeof t] || this.dependTypes[typeof t](t, e)
          );
        },
        dependTypes: {
          boolean: function (t) {
            return t;
          },
          string: function (e, r) {
            return !!t(e, r.form).length;
          },
          function: function (t, e) {
            return t(e);
          },
        },
        optional: function (e) {
          var r = this.elementValue(e);
          return (
            !t.validator.methods.required.call(this, r, e) &&
            "dependency-mismatch"
          );
        },
        startRequest: function (t) {
          this.pending[t.name] ||
            (this.pendingRequest++, (this.pending[t.name] = !0));
        },
        stopRequest: function (e, r) {
          this.pendingRequest--,
            this.pendingRequest < 0 && (this.pendingRequest = 0),
            delete this.pending[e.name],
            r && 0 === this.pendingRequest && this.formSubmitted && this.form()
              ? (t(this.currentForm).submit(), (this.formSubmitted = !1))
              : !r &&
                0 === this.pendingRequest &&
                this.formSubmitted &&
                (t(this.currentForm).triggerHandler("invalid-form", [this]),
                (this.formSubmitted = !1));
        },
        previousValue: function (e) {
          return (
            t.data(e, "previousValue") ||
            t.data(e, "previousValue", {
              old: null,
              valid: !0,
              message: this.defaultMessage(e, "remote"),
            })
          );
        },
        destroy: function () {
          this.resetForm(),
            t(this.currentForm).off(".validate").removeData("validator");
        },
      },
      classRuleSettings: {
        required: { required: !0 },
        email: { email: !0 },
        url: { url: !0 },
        date: { date: !0 },
        dateISO: { dateISO: !0 },
        number: { number: !0 },
        digits: { digits: !0 },
        creditcard: { creditcard: !0 },
      },
      addClassRules: function (e, r) {
        e.constructor === String
          ? (this.classRuleSettings[e] = r)
          : t.extend(this.classRuleSettings, e);
      },
      classRules: function (e) {
        var r = {},
          i = t(e).attr("class");
        return (
          i &&
            t.each(i.split(" "), function () {
              this in t.validator.classRuleSettings &&
                t.extend(r, t.validator.classRuleSettings[this]);
            }),
          r
        );
      },
      normalizeAttributeRule: function (t, e, r, i) {
        /min|max/.test(r) &&
          (null === e || /number|range|text/.test(e)) &&
          isNaN((i = Number(i))) &&
          (i = void 0),
          i || 0 === i ? (t[r] = i) : e === r && "range" !== e && (t[r] = !0);
      },
      attributeRules: function (e) {
        var r,
          i,
          a = {},
          n = t(e),
          s = e.getAttribute("type");
        for (r in t.validator.methods)
          "required" === r
            ? ("" === (i = e.getAttribute(r)) && (i = !0), (i = !!i))
            : (i = n.attr(r)),
            this.normalizeAttributeRule(a, s, r, i);
        return (
          a.maxlength &&
            /-1|2147483647|524288/.test(a.maxlength) &&
            delete a.maxlength,
          a
        );
      },
      dataRules: function (e) {
        var r,
          i,
          a = {},
          n = t(e),
          s = e.getAttribute("type");
        for (r in t.validator.methods)
          (i = n.data(
            "rule" + r.charAt(0).toUpperCase() + r.substring(1).toLowerCase()
          )),
            this.normalizeAttributeRule(a, s, r, i);
        return a;
      },
      staticRules: function (e) {
        var r = {},
          i = t.data(e.form, "validator");
        return (
          i.settings.rules &&
            (r = t.validator.normalizeRule(i.settings.rules[e.name]) || {}),
          r
        );
      },
      normalizeRules: function (e, r) {
        return (
          t.each(e, function (i, a) {
            if (!1 === a) return void delete e[i];
            if (a.param || a.depends) {
              var n = !0;
              switch (typeof a.depends) {
                case "string":
                  n = !!t(a.depends, r.form).length;
                  break;
                case "function":
                  n = a.depends.call(r, r);
              }
              n ? (e[i] = void 0 === a.param || a.param) : delete e[i];
            }
          }),
          t.each(e, function (i, a) {
            e[i] = t.isFunction(a) ? a(r) : a;
          }),
          t.each(["minlength", "maxlength"], function () {
            e[this] && (e[this] = Number(e[this]));
          }),
          t.each(["rangelength", "range"], function () {
            var r;
            e[this] &&
              (t.isArray(e[this])
                ? (e[this] = [Number(e[this][0]), Number(e[this][1])])
                : "string" == typeof e[this] &&
                  ((r = e[this].replace(/[\[\]]/g, "").split(/[\s,]+/)),
                  (e[this] = [Number(r[0]), Number(r[1])])));
          }),
          t.validator.autoCreateRanges &&
            (null != e.min &&
              null != e.max &&
              ((e.range = [e.min, e.max]), delete e.min, delete e.max),
            null != e.minlength &&
              null != e.maxlength &&
              ((e.rangelength = [e.minlength, e.maxlength]),
              delete e.minlength,
              delete e.maxlength)),
          e
        );
      },
      normalizeRule: function (e) {
        if ("string" == typeof e) {
          var r = {};
          t.each(e.split(/\s/), function () {
            r[this] = !0;
          }),
            (e = r);
        }
        return e;
      },
      addMethod: function (e, r, i) {
        (t.validator.methods[e] = r),
          (t.validator.messages[e] =
            void 0 !== i ? i : t.validator.messages[e]),
          r.length < 3 &&
            t.validator.addClassRules(e, t.validator.normalizeRule(e));
      },
      methods: {
        required: function (e, r, i) {
          if (!this.depend(i, r)) return "dependency-mismatch";
          if ("select" === r.nodeName.toLowerCase()) {
            var a = t(r).val();
            return a && a.length > 0;
          }
          return this.checkable(r) ? this.getLength(e, r) > 0 : e.length > 0;
        },
        email: function (t, e) {
          return (
            this.optional(e) ||
            /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/.test(
              t
            )
          );
        },
        url: function (t, e) {
          return (
            this.optional(e) ||
            /^(?:(?:(?:https?|ftp):)?\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})).?)(?::\d{2,5})?(?:[/?#]\S*)?$/i.test(
              t
            )
          );
        },
        date: function (t, e) {
          return (
            this.optional(e) || !/Invalid|NaN/.test(new Date(t).toString())
          );
        },
        dateISO: function (t, e) {
          return (
            this.optional(e) ||
            /^\d{4}[\/\-](0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])$/.test(
              t
            )
          );
        },
        number: function (t, e) {
          return (
            this.optional(e) ||
            /^(?:-?\d+|-?\d{1,3}(?:,\d{3})+)?(?:\.\d+)?$/.test(t)
          );
        },
        digits: function (t, e) {
          return this.optional(e) || /^\d+$/.test(t);
        },
        creditcard: function (t, e) {
          if (this.optional(e)) return "dependency-mismatch";
          if (/[^0-9 \-]+/.test(t)) return !1;
          var r,
            i,
            a = 0,
            n = 0,
            s = !1;
          if ((t = t.replace(/\D/g, "")).length < 13 || t.length > 19)
            return !1;
          for (r = t.length - 1; r >= 0; r--)
            (n = parseInt((i = t.charAt(r)), 10)),
              s && (n *= 2) > 9 && (n -= 9),
              (a += n),
              (s = !s);
          return a % 10 == 0;
        },
        minlength: function (e, r, i) {
          var a = t.isArray(e) ? e.length : this.getLength(e, r);
          return this.optional(r) || a >= i;
        },
        maxlength: function (e, r, i) {
          var a = t.isArray(e) ? e.length : this.getLength(e, r);
          return this.optional(r) || i >= a;
        },
        rangelength: function (e, r, i) {
          var a = t.isArray(e) ? e.length : this.getLength(e, r);
          return this.optional(r) || (a >= i[0] && a <= i[1]);
        },
        min: function (t, e, r) {
          return this.optional(e) || t >= r;
        },
        max: function (t, e, r) {
          return this.optional(e) || r >= t;
        },
        range: function (t, e, r) {
          return this.optional(e) || (t >= r[0] && t <= r[1]);
        },
        equalTo: function (e, r, i) {
          var a = t(i);
          return (
            this.settings.onfocusout &&
              a
                .off(".validate-equalTo")
                .on("blur.validate-equalTo", function () {
                  t(r).valid();
                }),
            e === a.val()
          );
        },
        remote: function (e, r, i) {
          if (this.optional(r)) return "dependency-mismatch";
          var a,
            n,
            s = this.previousValue(r);
          return (
            this.settings.messages[r.name] ||
              (this.settings.messages[r.name] = {}),
            (s.originalMessage = this.settings.messages[r.name].remote),
            (this.settings.messages[r.name].remote = s.message),
            (i = ("string" == typeof i && { url: i }) || i),
            s.old === e
              ? s.valid
              : ((s.old = e),
                (a = this),
                this.startRequest(r),
                ((n = {})[r.name] = e),
                t.ajax(
                  t.extend(
                    !0,
                    {
                      mode: "abort",
                      port: "validate" + r.name,
                      dataType: "json",
                      data: n,
                      context: a.currentForm,
                      success: function (i) {
                        var n,
                          o,
                          l,
                          u = !0 === i || "true" === i;
                        (a.settings.messages[r.name].remote =
                          s.originalMessage),
                          u
                            ? ((l = a.formSubmitted),
                              a.prepareElement(r),
                              (a.formSubmitted = l),
                              a.successList.push(r),
                              delete a.invalid[r.name],
                              a.showErrors())
                            : ((n = {}),
                              (o = i || a.defaultMessage(r, "remote")),
                              (n[r.name] = s.message =
                                t.isFunction(o) ? o(e) : o),
                              (a.invalid[r.name] = !0),
                              a.showErrors(n)),
                          (s.valid = u),
                          a.stopRequest(r, u);
                      },
                    },
                    i
                  )
                ),
                "pending")
          );
        },
      },
    });
  var e,
    r = {};
  t.ajaxPrefilter
    ? t.ajaxPrefilter(function (t, e, i) {
        var a = t.port;
        "abort" === t.mode && (r[a] && r[a].abort(), (r[a] = i));
      })
    : ((e = t.ajax),
      (t.ajax = function (i) {
        var a = ("mode" in i ? i : t.ajaxSettings).mode,
          n = ("port" in i ? i : t.ajaxSettings).port;
        return "abort" === a
          ? (r[n] && r[n].abort(), (r[n] = e.apply(this, arguments)), r[n])
          : e.apply(this, arguments);
      }));
}),
  (function (t) {
    "use strict";
    "function" == typeof define && define.amd
      ? define(["jquery"], t)
      : t("undefined" != typeof jQuery ? jQuery : window.Zepto);
  })(function (t) {
    "use strict";
    function e(e) {
      var r = e.data;
      e.isDefaultPrevented() || (e.preventDefault(), t(e.target).ajaxSubmit(r));
    }
    function r(e) {
      var r = e.target,
        i = t(r);
      if (!i.is("[type=submit],[type=image]")) {
        var a = i.closest("[type=submit]");
        if (0 === a.length) return;
        r = a[0];
      }
      var n = this;
      if (((n.clk = r), "image" == r.type)) {
        if (void 0 !== e.offsetX) (n.clk_x = e.offsetX), (n.clk_y = e.offsetY);
        else if ("function" == typeof t.fn.offset) {
          var s = i.offset();
          (n.clk_x = e.pageX - s.left), (n.clk_y = e.pageY - s.top);
        } else
          (n.clk_x = e.pageX - r.offsetLeft), (n.clk_y = e.pageY - r.offsetTop);
      }
      setTimeout(function () {
        n.clk = n.clk_x = n.clk_y = null;
      }, 100);
    }
    function i() {
      if (t.fn.ajaxSubmit.debug) {
        var e = "[jquery.form] " + Array.prototype.join.call(arguments, "");
        window.console && window.console.log
          ? window.console.log(e)
          : window.opera && window.opera.postError && window.opera.postError(e);
      }
    }
    var a = {};
    (a.fileapi = void 0 !== t("<input type='file'/>").get(0).files),
      (a.formdata = void 0 !== window.FormData);
    var n = !!t.fn.prop;
    (t.fn.attr2 = function () {
      if (!n) return this.attr.apply(this, arguments);
      var t = this.prop.apply(this, arguments);
      return (t && t.jquery) || "string" == typeof t
        ? t
        : this.attr.apply(this, arguments);
    }),
      (t.fn.ajaxSubmit = function (e) {
        function r(r) {
          function a(t) {
            var e = null;
            try {
              t.contentWindow && (e = t.contentWindow.document);
            } catch (r) {
              i("cannot get iframe.contentWindow document: " + r);
            }
            if (e) return e;
            try {
              e = t.contentDocument ? t.contentDocument : t.document;
            } catch (a) {
              i("cannot get iframe.contentDocument: " + a), (e = t.document);
            }
            return e;
          }
          function o() {
            function e() {
              try {
                var t = a(v).readyState;
                i("state = " + t),
                  t && "uninitialized" == t.toLowerCase() && setTimeout(e, 50);
              } catch (r) {
                i("Server abort: ", r, " (", r.name, ")"),
                  l(C),
                  _ && clearTimeout(_),
                  (_ = void 0);
              }
            }
            var r = u.attr2("target"),
              n = u.attr2("action"),
              o =
                u.attr("enctype") ||
                u.attr("encoding") ||
                "multipart/form-data";
            S.setAttribute("target", p),
              (!s || /post/i.test(s)) && S.setAttribute("method", "POST"),
              n != d.url && S.setAttribute("action", d.url),
              d.skipEncodingOverride ||
                (s && !/post/i.test(s)) ||
                u.attr({
                  encoding: "multipart/form-data",
                  enctype: "multipart/form-data",
                }),
              d.timeout &&
                (_ = setTimeout(function () {
                  (x = !0), l(L);
                }, d.timeout));
            var c = [];
            try {
              if (d.extraData)
                for (var h in d.extraData)
                  d.extraData.hasOwnProperty(h) &&
                    (t.isPlainObject(d.extraData[h]) &&
                    d.extraData[h].hasOwnProperty("name") &&
                    d.extraData[h].hasOwnProperty("value")
                      ? c.push(
                          t(
                            '<input type="hidden" name="' +
                              d.extraData[h].name +
                              '">'
                          )
                            .val(d.extraData[h].value)
                            .appendTo(S)[0]
                        )
                      : c.push(
                          t('<input type="hidden" name="' + h + '">')
                            .val(d.extraData[h])
                            .appendTo(S)[0]
                        ));
              d.iframeTarget || g.appendTo("body"),
                v.attachEvent
                  ? v.attachEvent("onload", l)
                  : v.addEventListener("load", l, !1),
                setTimeout(e, 15);
              try {
                S.submit();
              } catch (m) {
                document.createElement("form").submit.apply(S);
              }
            } finally {
              S.setAttribute("action", n),
                S.setAttribute("enctype", o),
                r ? S.setAttribute("target", r) : u.removeAttr("target"),
                t(c).remove();
            }
          }
          function l(e) {
            if (!b.aborted && !E) {
              if (
                ((A = a(v)) || (i("cannot access response document"), (e = C)),
                e === L && b)
              )
                return b.abort("timeout"), void k.reject(b, "timeout");
              if (e == C && b)
                return (
                  b.abort("server abort"),
                  void k.reject(b, "error", "server abort")
                );
              if ((A && A.location.href != d.iframeSrc) || x) {
                v.detachEvent
                  ? v.detachEvent("onload", l)
                  : v.removeEventListener("load", l, !1);
                var r,
                  n = "success";
                try {
                  if (x) throw "timeout";
                  var s = "xml" == d.dataType || A.XMLDocument || t.isXMLDoc(A);
                  if (
                    (i("isXml=" + s),
                    !s &&
                      window.opera &&
                      (null === A.body || !A.body.innerHTML) &&
                      --F)
                  )
                    return (
                      i("requeing onLoad callback, DOM not available"),
                      void setTimeout(l, 250)
                    );
                  var o = A.body ? A.body : A.documentElement;
                  (b.responseText = o ? o.innerHTML : null),
                    (b.responseXML = A.XMLDocument ? A.XMLDocument : A),
                    s && (d.dataType = "xml"),
                    (b.getResponseHeader = function (t) {
                      return { "content-type": d.dataType }[t.toLowerCase()];
                    }),
                    o &&
                      ((b.status =
                        Number(o.getAttribute("status")) || b.status),
                      (b.statusText =
                        o.getAttribute("statusText") || b.statusText));
                  var u = (d.dataType || "").toLowerCase(),
                    c = /(json|script|text)/.test(u);
                  if (c || d.textarea) {
                    var h = A.getElementsByTagName("textarea")[0];
                    if (h)
                      (b.responseText = h.value),
                        (b.status =
                          Number(h.getAttribute("status")) || b.status),
                        (b.statusText =
                          h.getAttribute("statusText") || b.statusText);
                    else if (c) {
                      var m = A.getElementsByTagName("pre")[0],
                        p = A.getElementsByTagName("body")[0];
                      m
                        ? (b.responseText = m.textContent
                            ? m.textContent
                            : m.innerText)
                        : p &&
                          (b.responseText = p.textContent
                            ? p.textContent
                            : p.innerText);
                    }
                  } else
                    "xml" == u &&
                      !b.responseXML &&
                      b.responseText &&
                      (b.responseXML = q(b.responseText));
                  try {
                    j = R(b, u, d);
                  } catch ($) {
                    (n = "parsererror"), (b.error = r = $ || n);
                  }
                } catch (y) {
                  i("error caught: ", y), (n = "error"), (b.error = r = y || n);
                }
                b.aborted && (i("upload aborted"), (n = null)),
                  b.status &&
                    (n =
                      (b.status >= 200 && b.status < 300) || 304 === b.status
                        ? "success"
                        : "error"),
                  "success" === n
                    ? (d.success && d.success.call(d.context, j, "success", b),
                      k.resolve(b.responseText, "success", b),
                      f && t.event.trigger("ajaxSuccess", [b, d]))
                    : n &&
                      (void 0 === r && (r = b.statusText),
                      d.error && d.error.call(d.context, b, n, r),
                      k.reject(b, "error", r),
                      f && t.event.trigger("ajaxError", [b, d, r])),
                  f && t.event.trigger("ajaxComplete", [b, d]),
                  !f || --t.active || t.event.trigger("ajaxStop"),
                  d.complete && d.complete.call(d.context, b, n),
                  (E = !0),
                  d.timeout && clearTimeout(_),
                  setTimeout(function () {
                    d.iframeTarget ? g.attr("src", d.iframeSrc) : g.remove(),
                      (b.responseXML = null);
                  }, 100);
              }
            }
          }
          var c,
            h,
            d,
            f,
            p,
            g,
            v,
            b,
            $,
            y,
            x,
            _,
            S = u[0],
            k = t.Deferred();
          if (
            ((k.abort = function (t) {
              b.abort(t);
            }),
            r)
          )
            for (h = 0; h < m.length; h++)
              (c = t(m[h])),
                n ? c.prop("disabled", !1) : c.removeAttr("disabled");
          if (
            (((d = t.extend(!0, {}, t.ajaxSettings, e)).context =
              d.context || d),
            (p = "jqFormIO" + new Date().getTime()),
            d.iframeTarget
              ? (y = (g = t(d.iframeTarget)).attr2("name"))
                ? (p = y)
                : g.attr2("name", p)
              : (g = t(
                  '<iframe name="' + p + '" src="' + d.iframeSrc + '" />'
                )).css({
                  position: "absolute",
                  top: "-1000px",
                  left: "-1000px",
                }),
            (v = g[0]),
            (b = {
              aborted: 0,
              responseText: null,
              responseXML: null,
              status: 0,
              statusText: "n/a",
              getAllResponseHeaders: function () {},
              getResponseHeader: function () {},
              setRequestHeader: function () {},
              abort: function (e) {
                var r = "timeout" === e ? "timeout" : "aborted";
                i("aborting upload... " + r), (this.aborted = 1);
                try {
                  v.contentWindow.document.execCommand &&
                    v.contentWindow.document.execCommand("Stop");
                } catch (a) {}
                g.attr("src", d.iframeSrc),
                  (b.error = r),
                  d.error && d.error.call(d.context, b, r, e),
                  f && t.event.trigger("ajaxError", [b, d, r]),
                  d.complete && d.complete.call(d.context, b, r);
              },
            }),
            (f = d.global) && 0 == t.active++ && t.event.trigger("ajaxStart"),
            f && t.event.trigger("ajaxSend", [b, d]),
            d.beforeSend && !1 === d.beforeSend.call(d.context, b, d))
          )
            return d.global && t.active--, k.reject(), k;
          if (b.aborted) return k.reject(), k;
          ($ = S.clk) &&
            (y = $.name) &&
            !$.disabled &&
            ((d.extraData = d.extraData || {}),
            (d.extraData[y] = $.value),
            "image" == $.type &&
              ((d.extraData[y + ".x"] = S.clk_x),
              (d.extraData[y + ".y"] = S.clk_y)));
          var L = 1,
            C = 2,
            T = t("meta[name=csrf-token]").attr("content"),
            w = t("meta[name=csrf-param]").attr("content");
          w && T && ((d.extraData = d.extraData || {}), (d.extraData[w] = T)),
            d.forceSync ? o() : setTimeout(o, 10);
          var j,
            A,
            E,
            F = 50,
            q =
              t.parseXML ||
              function (t, e) {
                return (
                  window.ActiveXObject
                    ? (((e = new ActiveXObject("Microsoft.XMLDOM")).async =
                        "false"),
                      e.loadXML(t))
                    : (e = new DOMParser().parseFromString(t, "text/xml")),
                  e &&
                  e.documentElement &&
                  "parsererror" != e.documentElement.nodeName
                    ? e
                    : null
                );
              },
            D =
              t.parseJSON ||
              function (t) {
                return window.eval("(" + t + ")");
              },
            R = function (e, r, i) {
              var a = e.getResponseHeader("content-type") || "",
                n = "xml" === r || (!r && a.indexOf("xml") >= 0),
                s = n ? e.responseXML : e.responseText;
              return (
                n &&
                  "parsererror" === s.documentElement.nodeName &&
                  t.error &&
                  t.error("parsererror"),
                i && i.dataFilter && (s = i.dataFilter(s, r)),
                "string" == typeof s &&
                  ("json" === r || (!r && a.indexOf("json") >= 0)
                    ? (s = D(s))
                    : ("script" === r ||
                        (!r && a.indexOf("javascript") >= 0)) &&
                      t.globalEval(s)),
                s
              );
            };
          return k;
        }
        if (!this.length)
          return (
            i("ajaxSubmit: skipping submit process - no element selected"), this
          );
        var s,
          o,
          l,
          u = this;
        "function" == typeof e
          ? (e = { success: e })
          : void 0 === e && (e = {}),
          (s = e.type || this.attr2("method")),
          (l =
            (l =
              "string" == typeof (o = e.url || this.attr2("action"))
                ? t.trim(o)
                : "") ||
            window.location.href ||
            "") && (l = (l.match(/^([^#]+)/) || [])[1]),
          (e = t.extend(
            !0,
            {
              url: l,
              success: t.ajaxSettings.success,
              type: s || t.ajaxSettings.type,
              iframeSrc: /^https/i.test(window.location.href || "")
                ? "javascript:false"
                : "about:blank",
            },
            e
          ));
        var c = {};
        if ((this.trigger("form-pre-serialize", [this, e, c]), c.veto))
          return (
            i("ajaxSubmit: submit vetoed via form-pre-serialize trigger"), this
          );
        if (e.beforeSerialize && !1 === e.beforeSerialize(this, e))
          return (
            i("ajaxSubmit: submit aborted via beforeSerialize callback"), this
          );
        var h = e.traditional;
        void 0 === h && (h = t.ajaxSettings.traditional);
        var d,
          m = [],
          f = this.formToArray(e.semantic, m);
        if (
          (e.data && ((e.extraData = e.data), (d = t.param(e.data, h))),
          e.beforeSubmit && !1 === e.beforeSubmit(f, this, e))
        )
          return (
            i("ajaxSubmit: submit aborted via beforeSubmit callback"), this
          );
        if ((this.trigger("form-submit-validate", [f, this, e, c]), c.veto))
          return (
            i("ajaxSubmit: submit vetoed via form-submit-validate trigger"),
            this
          );
        var p = t.param(f, h);
        d && (p = p ? p + "&" + d : d),
          "GET" == e.type.toUpperCase()
            ? ((e.url += (e.url.indexOf("?") >= 0 ? "&" : "?") + p),
              (e.data = null))
            : (e.data = p);
        var g = [];
        if (
          (e.resetForm &&
            g.push(function () {
              u.resetForm();
            }),
          e.clearForm &&
            g.push(function () {
              u.clearForm(e.includeHidden);
            }),
          !e.dataType && e.target)
        ) {
          var v = e.success || function () {};
          g.push(function (r) {
            var i = e.replaceTarget ? "replaceWith" : "html";
            t(e.target)[i](r).each(v, arguments);
          });
        } else e.success && g.push(e.success);
        if (
          ((e.success = function (t, r, i) {
            for (var a = e.context || this, n = 0, s = g.length; s > n; n++)
              g[n].apply(a, [t, r, i || u, u]);
          }),
          e.error)
        ) {
          var b = e.error;
          e.error = function (t, r, i) {
            var a = e.context || this;
            b.apply(a, [t, r, i, u]);
          };
        }
        if (e.complete) {
          var $ = e.complete;
          e.complete = function (t, r) {
            var i = e.context || this;
            $.apply(i, [t, r, u]);
          };
        }
        var y,
          x =
            t("input[type=file]:enabled", this).filter(function () {
              return "" !== t(this).val();
            }).length > 0,
          _ = "multipart/form-data",
          S = u.attr("enctype") == _ || u.attr("encoding") == _,
          k = a.fileapi && a.formdata;
        i("fileAPI :" + k),
          !1 !== e.iframe && (e.iframe || ((x || S) && !k))
            ? e.closeKeepAlive
              ? t.get(e.closeKeepAlive, function () {
                  y = r(f);
                })
              : (y = r(f))
            : (y =
                (x || S) && k
                  ? (function r(i) {
                      for (var a = new FormData(), n = 0; n < i.length; n++)
                        a.append(i[n].name, i[n].value);
                      if (e.extraData) {
                        var o = (function r(i) {
                          var a,
                            n,
                            s = t.param(i, e.traditional).split("&"),
                            o = s.length,
                            l = [];
                          for (a = 0; o > a; a++)
                            (s[a] = s[a].replace(/\+/g, " ")),
                              (n = s[a].split("=")),
                              l.push([
                                decodeURIComponent(n[0]),
                                decodeURIComponent(n[1]),
                              ]);
                          return l;
                        })(e.extraData);
                        for (n = 0; n < o.length; n++)
                          o[n] && a.append(o[n][0], o[n][1]);
                      }
                      e.data = null;
                      var l = t.extend(!0, {}, t.ajaxSettings, e, {
                        contentType: !1,
                        processData: !1,
                        cache: !1,
                        type: s || "POST",
                      });
                      e.uploadProgress &&
                        (l.xhr = function () {
                          var r = t.ajaxSettings.xhr();
                          return (
                            r.upload &&
                              r.upload.addEventListener(
                                "progress",
                                function (t) {
                                  var r = 0,
                                    i = t.loaded || t.position,
                                    a = t.total;
                                  t.lengthComputable &&
                                    (r = Math.ceil((i / a) * 100)),
                                    e.uploadProgress(t, i, a, r);
                                },
                                !1
                              ),
                            r
                          );
                        }),
                        (l.data = null);
                      var u = l.beforeSend;
                      return (
                        (l.beforeSend = function (t, r) {
                          e.formData ? (r.data = e.formData) : (r.data = a),
                            u && u.call(this, t, r);
                        }),
                        t.ajax(l)
                      );
                    })(f)
                  : t.ajax(e)),
          u.removeData("jqxhr").data("jqxhr", y);
        for (var L = 0; L < m.length; L++) m[L] = null;
        return this.trigger("form-submit-notify", [this, e]), this;
      }),
      (t.fn.ajaxForm = function (a) {
        if (
          (((a = a || {}).delegation = a.delegation && t.isFunction(t.fn.on)),
          !a.delegation && 0 === this.length)
        ) {
          var n = { s: this.selector, c: this.context };
          return !t.isReady && n.s
            ? (i("DOM not ready, queuing ajaxForm"),
              t(function () {
                t(n.s, n.c).ajaxForm(a);
              }),
              this)
            : (i(
                "terminating; zero elements found by selector" +
                  (t.isReady ? "" : " (DOM not ready)")
              ),
              this);
        }
        return a.delegation
          ? (t(document)
              .off("submit.form-plugin", this.selector, e)
              .off("click.form-plugin", this.selector, r)
              .on("submit.form-plugin", this.selector, a, e)
              .on("click.form-plugin", this.selector, a, r),
            this)
          : this.ajaxFormUnbind()
              .bind("submit.form-plugin", a, e)
              .bind("click.form-plugin", a, r);
      }),
      (t.fn.ajaxFormUnbind = function () {
        return this.unbind("submit.form-plugin click.form-plugin");
      }),
      (t.fn.formToArray = function (e, r) {
        var i,
          n,
          s,
          o,
          l,
          u,
          c,
          h = [];
        if (0 === this.length) return h;
        var d,
          m = this[0],
          f = this.attr("id"),
          p = e ? m.getElementsByTagName("*") : m.elements;
        if (
          (p && !/MSIE [678]/.test(navigator.userAgent) && (p = t(p).get()),
          f &&
            (d = t(':input[form="' + f + '"]').get()).length &&
            (p = (p || []).concat(d)),
          !p || !p.length)
        )
          return h;
        for (i = 0, u = p.length; u > i; i++)
          if ((s = (l = p[i]).name) && !l.disabled) {
            if (e && m.clk && "image" == l.type)
              m.clk == l &&
                (h.push({ name: s, value: t(l).val(), type: l.type }),
                h.push(
                  { name: s + ".x", value: m.clk_x },
                  { name: s + ".y", value: m.clk_y }
                ));
            else if ((o = t.fieldValue(l, !0)) && o.constructor == Array)
              for (r && r.push(l), n = 0, c = o.length; c > n; n++)
                h.push({ name: s, value: o[n] });
            else if (a.fileapi && "file" == l.type) {
              r && r.push(l);
              var g = l.files;
              if (g.length)
                for (n = 0; n < g.length; n++)
                  h.push({ name: s, value: g[n], type: l.type });
              else h.push({ name: s, value: "", type: l.type });
            } else
              null != o &&
                (r && r.push(l),
                h.push({
                  name: s,
                  value: o,
                  type: l.type,
                  required: l.required,
                }));
          }
        if (!e && m.clk) {
          var v = t(m.clk),
            b = v[0];
          (s = b.name) &&
            !b.disabled &&
            "image" == b.type &&
            (h.push({ name: s, value: v.val() }),
            h.push(
              { name: s + ".x", value: m.clk_x },
              { name: s + ".y", value: m.clk_y }
            ));
        }
        return h;
      }),
      (t.fn.formSerialize = function (e) {
        return t.param(this.formToArray(e));
      }),
      (t.fn.fieldSerialize = function (e) {
        var r = [];
        return (
          this.each(function () {
            var i = this.name;
            if (i) {
              var a = t.fieldValue(this, e);
              if (a && a.constructor == Array)
                for (var n = 0, s = a.length; s > n; n++)
                  r.push({ name: i, value: a[n] });
              else null != a && r.push({ name: this.name, value: a });
            }
          }),
          t.param(r)
        );
      }),
      (t.fn.fieldValue = function (e) {
        for (var r = [], i = 0, a = this.length; a > i; i++) {
          var n = this[i],
            s = t.fieldValue(n, e);
          null != s &&
            (s.constructor != Array || s.length) &&
            (s.constructor == Array ? t.merge(r, s) : r.push(s));
        }
        return r;
      }),
      (t.fieldValue = function (e, r) {
        var i = e.name,
          a = e.type,
          n = e.tagName.toLowerCase();
        if (
          (void 0 === r && (r = !0),
          r &&
            (!i ||
              e.disabled ||
              "reset" == a ||
              "button" == a ||
              (("checkbox" == a || "radio" == a) && !e.checked) ||
              (("submit" == a || "image" == a) && e.form && e.form.clk != e) ||
              ("select" == n && -1 == e.selectedIndex)))
        )
          return null;
        if ("select" == n) {
          var s = e.selectedIndex;
          if (0 > s) return null;
          for (
            var o = [],
              l = e.options,
              u = "select-one" == a,
              c = u ? s + 1 : l.length,
              h = u ? s : 0;
            c > h;
            h++
          ) {
            var d = l[h];
            if (d.selected) {
              var m = d.value;
              if (
                (m ||
                  (m =
                    d.attributes &&
                    d.attributes.value &&
                    !d.attributes.value.specified
                      ? d.text
                      : d.value),
                u)
              )
                return m;
              o.push(m);
            }
          }
          return o;
        }
        return t(e).val();
      }),
      (t.fn.clearForm = function (e) {
        return this.each(function () {
          t("input,select,textarea", this).clearFields(e);
        });
      }),
      (t.fn.clearFields = t.fn.clearInputs =
        function (e) {
          var r =
            /^(?:color|date|datetime|email|month|number|password|range|search|tel|text|time|url|week)$/i;
          return this.each(function () {
            var i = this.type,
              a = this.tagName.toLowerCase();
            r.test(i) || "textarea" == a
              ? (this.value = "")
              : "checkbox" == i || "radio" == i
              ? (this.checked = !1)
              : "select" == a
              ? (this.selectedIndex = -1)
              : "file" == i
              ? /MSIE/.test(navigator.userAgent)
                ? t(this).replaceWith(t(this).clone(!0))
                : t(this).val("")
              : e &&
                ((!0 === e && /hidden/.test(i)) ||
                  ("string" == typeof e && t(this).is(e))) &&
                (this.value = "");
          });
        }),
      (t.fn.resetForm = function () {
        return this.each(function () {
          ("function" != typeof this.reset &&
            ("object" != typeof this.reset || this.reset.nodeType)) ||
            this.reset();
        });
      }),
      (t.fn.enable = function (t) {
        return (
          void 0 === t && (t = !0),
          this.each(function () {
            this.disabled = !t;
          })
        );
      }),
      (t.fn.selected = function (e) {
        return (
          void 0 === e && (e = !0),
          this.each(function () {
            var r = this.type;
            if ("checkbox" == r || "radio" == r) this.checked = e;
            else if ("option" == this.tagName.toLowerCase()) {
              var i = t(this).parent("select");
              e &&
                i[0] &&
                "select-one" == i[0].type &&
                i.find("option").selected(!1),
                (this.selected = e);
            }
          })
        );
      }),
      (t.fn.ajaxSubmit.debug = !1);
  });
