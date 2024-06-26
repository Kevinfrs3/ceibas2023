!(function (e) {
  Drupal.behaviors.flexslider = {
    attach: function (t, n) {
      var s = [];
      if (
        "undefined" !== e.type(n.flexslider) &&
        "undefined" !== e.type(n.flexslider.instances)
      )
        for (id in n.flexslider.instances)
          void 0 !== n.flexslider.optionsets[n.flexslider.instances[id]] &&
            ("" !== n.flexslider.optionsets[n.flexslider.instances[id]].asNavFor
              ? i(id, n.flexslider.optionsets[n.flexslider.instances[id]], t)
              : (s[id] = n.flexslider.optionsets[n.flexslider.instances[id]]));
      for (id in s)
        i(id, n.flexslider.optionsets[n.flexslider.instances[id]], t);
    },
  };
  function i(i, t, n) {
    e("#" + i, n).once("flexslider", function () {
      e(this)
        .find("ul.slides > li > *")
        .removeAttr("width")
        .removeAttr("height"),
        t
          ? e(this).flexslider(
              e.extend(t, {
                start: function (e) {
                  e.trigger("start");
                },
                before: function (e) {
                  e.trigger("before");
                },
                after: function (e) {
                  e.trigger("after");
                },
                end: function (e) {
                  e.trigger("end");
                },
                added: function (e) {
                  e.trigger("added");
                },
                removed: function (e) {
                  e.trigger("removed");
                },
              })
            )
          : e(this).flexslider();
    });
  }
})(jQuery);
