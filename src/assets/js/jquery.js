/*! jQuery v1.12.4 | (c) jQuery Foundation | jquery.org/license */ !(function (
  e,
  t
) {
  "object" == typeof module && "object" == typeof module.exports
    ? (module.exports = e.document
        ? t(e, !0)
        : function (e) {
            if (!e.document)
              throw Error("jQuery requires a window with a document");
            return t(e);
          })
    : t(e);
})("undefined" != typeof window ? window : this, function (e, t) {
  var n = [],
    r = e.document,
    i = n.slice,
    o = n.concat,
    a = n.push,
    s = n.indexOf,
    u = {},
    l = u.toString,
    c = u.hasOwnProperty,
    d = {},
    f = "1.12.4",
    p = function (e, t) {
      return new p.fn.init(e, t);
    },
    h = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
    m = /^-ms-/,
    g = /-([\da-z])/gi,
    v = function (e, t) {
      return t.toUpperCase();
    };
  function y(e) {
    var t = !!e && "length" in e && e.length,
      n = p.type(e);
    return (
      !("function" === n || p.isWindow(e)) &&
      ("array" === n ||
        0 === t ||
        ("number" == typeof t && t > 0 && t - 1 in e))
    );
  }
  (p.fn = p.prototype =
    {
      jquery: f,
      constructor: p,
      selector: "",
      length: 0,
      toArray: function () {
        return i.call(this);
      },
      get: function (e) {
        return null != e
          ? 0 > e
            ? this[e + this.length]
            : this[e]
          : i.call(this);
      },
      pushStack: function (e) {
        var t = p.merge(this.constructor(), e);
        return (t.prevObject = this), (t.context = this.context), t;
      },
      each: function (e) {
        return p.each(this, e);
      },
      map: function (e) {
        return this.pushStack(
          p.map(this, function (t, n) {
            return e.call(t, n, t);
          })
        );
      },
      slice: function () {
        return this.pushStack(i.apply(this, arguments));
      },
      first: function () {
        return this.eq(0);
      },
      last: function () {
        return this.eq(-1);
      },
      eq: function (e) {
        var t = this.length,
          n = +e + (0 > e ? t : 0);
        return this.pushStack(n >= 0 && t > n ? [this[n]] : []);
      },
      end: function () {
        return this.prevObject || this.constructor();
      },
      push: a,
      sort: n.sort,
      splice: n.splice,
    }),
    (p.extend = p.fn.extend =
      function () {
        var e,
          t,
          n,
          r,
          i,
          o,
          a = arguments[0] || {},
          s = 1,
          u = arguments.length,
          l = !1;
        for (
          "boolean" == typeof a && ((l = a), (a = arguments[s] || {}), s++),
            "object" == typeof a || p.isFunction(a) || (a = {}),
            s === u && ((a = this), s--);
          u > s;
          s++
        )
          if (null != (i = arguments[s]))
            for (r in i)
              (e = a[r]),
                a !== (n = i[r]) &&
                  (l && n && (p.isPlainObject(n) || (t = p.isArray(n)))
                    ? (t
                        ? ((t = !1), (o = e && p.isArray(e) ? e : []))
                        : (o = e && p.isPlainObject(e) ? e : {}),
                      (a[r] = p.extend(l, o, n)))
                    : void 0 !== n && (a[r] = n));
        return a;
      }),
    p.extend({
      expando: "jQuery" + (f + Math.random()).replace(/\D/g, ""),
      isReady: !0,
      error: function (e) {
        throw Error(e);
      },
      noop: function () {},
      isFunction: function (e) {
        return "function" === p.type(e);
      },
      isArray:
        Array.isArray ||
        function (e) {
          return "array" === p.type(e);
        },
      isWindow: function (e) {
        return null != e && e == e.window;
      },
      isNumeric: function (e) {
        var t = e && e.toString();
        return !p.isArray(e) && t - parseFloat(t) + 1 >= 0;
      },
      isEmptyObject: function (e) {
        var t;
        for (t in e) return !1;
        return !0;
      },
      isPlainObject: function (e) {
        var t;
        if (!e || "object" !== p.type(e) || e.nodeType || p.isWindow(e))
          return !1;
        try {
          if (
            e.constructor &&
            !c.call(e, "constructor") &&
            !c.call(e.constructor.prototype, "isPrototypeOf")
          )
            return !1;
        } catch (n) {
          return !1;
        }
        if (!d.ownFirst) for (t in e) return c.call(e, t);
        for (t in e);
        return void 0 === t || c.call(e, t);
      },
      type: function (e) {
        return null == e
          ? e + ""
          : "object" == typeof e || "function" == typeof e
          ? u[l.call(e)] || "object"
          : typeof e;
      },
      globalEval: function (t) {
        t &&
          p.trim(t) &&
          (
            e.execScript ||
            function (t) {
              e.eval.call(e, t);
            }
          )(t);
      },
      camelCase: function (e) {
        return e.replace(m, "ms-").replace(g, v);
      },
      nodeName: function (e, t) {
        return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase();
      },
      each: function (e, t) {
        var n,
          r = 0;
        if (y(e))
          for (n = e.length; n > r && !1 !== t.call(e[r], r, e[r]); r++);
        else for (r in e) if (!1 === t.call(e[r], r, e[r])) break;
        return e;
      },
      trim: function (e) {
        return null == e ? "" : (e + "").replace(h, "");
      },
      makeArray: function (e, t) {
        var n = t || [];
        return (
          null != e &&
            (y(Object(e))
              ? p.merge(n, "string" == typeof e ? [e] : e)
              : a.call(n, e)),
          n
        );
      },
      inArray: function (e, t, n) {
        var r;
        if (t) {
          if (s) return s.call(t, e, n);
          for (
            r = t.length, n = n ? (0 > n ? Math.max(0, r + n) : n) : 0;
            r > n;
            n++
          )
            if (n in t && t[n] === e) return n;
        }
        return -1;
      },
      merge: function (e, t) {
        for (var n = +t.length, r = 0, i = e.length; n > r; ) e[i++] = t[r++];
        if (n != n) for (; void 0 !== t[r]; ) e[i++] = t[r++];
        return (e.length = i), e;
      },
      grep: function (e, t, n) {
        for (var r, i = [], o = 0, a = e.length, s = !n; a > o; o++)
          (r = !t(e[o], o)) !== s && i.push(e[o]);
        return i;
      },
      map: function (e, t, n) {
        var r,
          i,
          a = 0,
          s = [];
        if (y(e))
          for (r = e.length; r > a; a++)
            null != (i = t(e[a], a, n)) && s.push(i);
        else for (a in e) null != (i = t(e[a], a, n)) && s.push(i);
        return o.apply([], s);
      },
      guid: 1,
      proxy: function (e, t) {
        var n, r, o;
        return (
          "string" == typeof t && ((o = e[t]), (t = e), (e = o)),
          p.isFunction(e)
            ? ((n = i.call(arguments, 2)),
              ((r = function () {
                return e.apply(t || this, n.concat(i.call(arguments)));
              }).guid = e.guid =
                e.guid || p.guid++),
              r)
            : void 0
        );
      },
      now: function () {
        return +new Date();
      },
      support: d,
    }),
    "function" == typeof Symbol && (p.fn[Symbol.iterator] = n[Symbol.iterator]),
    p.each(
      "Boolean Number String Function Array Date RegExp Object Error Symbol".split(
        " "
      ),
      function (e, t) {
        u["[object " + t + "]"] = t.toLowerCase();
      }
    );
  var $ = (function (e) {
    var t,
      n,
      r,
      i,
      o,
      a,
      s,
      u,
      l,
      c,
      d,
      f,
      p,
      h,
      m,
      g,
      v,
      y,
      $,
      b = "sizzle" + 1 * new Date(),
      x = e.document,
      _ = 0,
      w = 0,
      T = ea(),
      C = ea(),
      N = ea(),
      k = function (e, t) {
        return e === t && (d = !0), 0;
      },
      E = -2147483648,
      S = {}.hasOwnProperty,
      A = [],
      D = A.pop,
      j = A.push,
      L = A.push,
      H = A.slice,
      q = function (e, t) {
        for (var n = 0, r = e.length; r > n; n++) if (e[n] === t) return n;
        return -1;
      },
      O =
        "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
      M = "[\\x20\\t\\r\\n\\f]",
      F = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
      P =
        "\\[" +
        M +
        "*(" +
        F +
        ")(?:" +
        M +
        "*([*^$|!~]?=)" +
        M +
        "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" +
        F +
        "))|)" +
        M +
        "*\\]",
      B =
        ":(" +
        F +
        ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" +
        P +
        ")*)|.*)\\)|)",
      W = RegExp(M + "+", "g"),
      I = RegExp("^" + M + "+|((?:^|[^\\\\])(?:\\\\.)*)" + M + "+$", "g"),
      z = RegExp("^" + M + "*," + M + "*"),
      R = RegExp("^" + M + "*([>+~]|" + M + ")" + M + "*"),
      X = RegExp("=" + M + "*([^\\]'\"]*?)" + M + "*\\]", "g"),
      U = RegExp(B),
      V = RegExp("^" + F + "$"),
      Y = {
        ID: RegExp("^#(" + F + ")"),
        CLASS: RegExp("^\\.(" + F + ")"),
        TAG: RegExp("^(" + F + "|[*])"),
        ATTR: RegExp("^" + P),
        PSEUDO: RegExp("^" + B),
        CHILD: RegExp(
          "^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" +
            M +
            "*(even|odd|(([+-]|)(\\d*)n|)" +
            M +
            "*(?:([+-]|)" +
            M +
            "*(\\d+)|))" +
            M +
            "*\\)|)",
          "i"
        ),
        bool: RegExp("^(?:" + O + ")$", "i"),
        needsContext: RegExp(
          "^" +
            M +
            "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" +
            M +
            "*((?:-\\d)?\\d*)" +
            M +
            "*\\)|)(?=[^-]|$)",
          "i"
        ),
      },
      J = /^(?:input|select|textarea|button)$/i,
      G = /^h\d$/i,
      Q = /^[^{]+\{\s*\[native \w/,
      K = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
      Z = /[+~]/,
      ee = /'|\\/g,
      et = RegExp("\\\\([\\da-f]{1,6}" + M + "?|(" + M + ")|.)", "ig"),
      en = function (e, t, n) {
        var r = "0x" + t - 65536;
        return r != r || n
          ? t
          : 0 > r
          ? String.fromCharCode(r + 65536)
          : String.fromCharCode((r >> 10) | 55296, (1023 & r) | 56320);
      },
      er = function () {
        f();
      };
    try {
      L.apply((A = H.call(x.childNodes)), x.childNodes),
        A[x.childNodes.length].nodeType;
    } catch (ei) {
      L = {
        apply: A.length
          ? function (e, t) {
              j.apply(e, H.call(t));
            }
          : function (e, t) {
              for (var n = e.length, r = 0; (e[n++] = t[r++]); );
              e.length = n - 1;
            },
      };
    }
    function eo(e, t, r, i) {
      var o,
        s,
        l,
        c,
        d,
        h,
        v,
        y,
        _ = t && t.ownerDocument,
        w = t ? t.nodeType : 9;
      if (
        ((r = r || []),
        "string" != typeof e || !e || (1 !== w && 9 !== w && 11 !== w))
      )
        return r;
      if (
        !i &&
        ((t ? t.ownerDocument || t : x) !== p && f(t), (t = t || p), m)
      ) {
        if (11 !== w && (h = K.exec(e))) {
          if ((o = h[1])) {
            if (9 === w) {
              if (!(l = t.getElementById(o))) return r;
              if (l.id === o) return r.push(l), r;
            } else if (_ && (l = _.getElementById(o)) && $(t, l) && l.id === o)
              return r.push(l), r;
          } else {
            if (h[2]) return L.apply(r, t.getElementsByTagName(e)), r;
            if (
              (o = h[3]) &&
              n.getElementsByClassName &&
              t.getElementsByClassName
            )
              return L.apply(r, t.getElementsByClassName(o)), r;
          }
        }
        if (n.qsa && !N[e + " "] && (!g || !g.test(e))) {
          if (1 !== w) (_ = t), (y = e);
          else if ("object" !== t.nodeName.toLowerCase()) {
            for (
              (c = t.getAttribute("id"))
                ? (c = c.replace(ee, "\\$&"))
                : t.setAttribute("id", (c = b)),
                s = (v = a(e)).length,
                d = V.test(c) ? "#" + c : "[id='" + c + "']";
              s--;

            )
              v[s] = d + " " + eg(v[s]);
            (y = v.join(",")), (_ = (Z.test(e) && eh(t.parentNode)) || t);
          }
          if (y)
            try {
              return L.apply(r, _.querySelectorAll(y)), r;
            } catch (T) {
            } finally {
              c === b && t.removeAttribute("id");
            }
        }
      }
      return u(e.replace(I, "$1"), t, r, i);
    }
    function ea() {
      var e = [];
      function t(n, i) {
        return (
          e.push(n + " ") > r.cacheLength && delete t[e.shift()],
          (t[n + " "] = i)
        );
      }
      return t;
    }
    function es(e) {
      return (e[b] = !0), e;
    }
    function eu(e) {
      var t = p.createElement("div");
      try {
        return !!e(t);
      } catch (n) {
        return !1;
      } finally {
        t.parentNode && t.parentNode.removeChild(t), (t = null);
      }
    }
    function el(e, t) {
      for (var n = e.split("|"), i = n.length; i--; ) r.attrHandle[n[i]] = t;
    }
    function ec(e, t) {
      var n = t && e,
        r =
          n &&
          1 === e.nodeType &&
          1 === t.nodeType &&
          (~t.sourceIndex || E) - (~e.sourceIndex || E);
      if (r) return r;
      if (n) {
        for (; (n = n.nextSibling); ) if (n === t) return -1;
      }
      return e ? 1 : -1;
    }
    function ed(e) {
      return function (t) {
        return "input" === t.nodeName.toLowerCase() && t.type === e;
      };
    }
    function ef(e) {
      return function (t) {
        var n = t.nodeName.toLowerCase();
        return ("input" === n || "button" === n) && t.type === e;
      };
    }
    function ep(e) {
      return es(function (t) {
        return (
          (t = +t),
          es(function (n, r) {
            for (var i, o = e([], n.length, t), a = o.length; a--; )
              n[(i = o[a])] && (n[i] = !(r[i] = n[i]));
          })
        );
      });
    }
    function eh(e) {
      return e && void 0 !== e.getElementsByTagName && e;
    }
    for (t in ((n = eo.support = {}),
    (o = eo.isXML =
      function (e) {
        var t = e && (e.ownerDocument || e).documentElement;
        return !!t && "HTML" !== t.nodeName;
      }),
    (f = eo.setDocument =
      function (e) {
        var t,
          i,
          a = e ? e.ownerDocument || e : x;
        return (
          a !== p &&
            9 === a.nodeType &&
            a.documentElement &&
            ((h = (p = a).documentElement),
            (m = !o(p)),
            (i = p.defaultView) &&
              i.top !== i &&
              (i.addEventListener
                ? i.addEventListener("unload", er, !1)
                : i.attachEvent && i.attachEvent("onunload", er)),
            (n.attributes = eu(function (e) {
              return (e.className = "i"), !e.getAttribute("className");
            })),
            (n.getElementsByTagName = eu(function (e) {
              return (
                e.appendChild(p.createComment("")),
                !e.getElementsByTagName("*").length
              );
            })),
            (n.getElementsByClassName = Q.test(p.getElementsByClassName)),
            (n.getById = eu(function (e) {
              return (
                (h.appendChild(e).id = b),
                !p.getElementsByName || !p.getElementsByName(b).length
              );
            })),
            n.getById
              ? ((r.find.ID = function (e, t) {
                  if (void 0 !== t.getElementById && m) {
                    var n = t.getElementById(e);
                    return n ? [n] : [];
                  }
                }),
                (r.filter.ID = function (e) {
                  var t = e.replace(et, en);
                  return function (e) {
                    return e.getAttribute("id") === t;
                  };
                }))
              : (delete r.find.ID,
                (r.filter.ID = function (e) {
                  var t = e.replace(et, en);
                  return function (e) {
                    var n =
                      void 0 !== e.getAttributeNode && e.getAttributeNode("id");
                    return n && n.value === t;
                  };
                })),
            (r.find.TAG = n.getElementsByTagName
              ? function (e, t) {
                  return void 0 !== t.getElementsByTagName
                    ? t.getElementsByTagName(e)
                    : n.qsa
                    ? t.querySelectorAll(e)
                    : void 0;
                }
              : function (e, t) {
                  var n,
                    r = [],
                    i = 0,
                    o = t.getElementsByTagName(e);
                  if ("*" === e) {
                    for (; (n = o[i++]); ) 1 === n.nodeType && r.push(n);
                    return r;
                  }
                  return o;
                }),
            (r.find.CLASS =
              n.getElementsByClassName &&
              function (e, t) {
                return void 0 !== t.getElementsByClassName && m
                  ? t.getElementsByClassName(e)
                  : void 0;
              }),
            (v = []),
            (g = []),
            (n.qsa = Q.test(p.querySelectorAll)) &&
              (eu(function (e) {
                (h.appendChild(e).innerHTML =
                  "<a id='" +
                  b +
                  "'></a><select id='" +
                  b +
                  "-\r\\' msallowcapture=''><option selected=''></option></select>"),
                  e.querySelectorAll("[msallowcapture^='']").length &&
                    g.push("[*^$]=" + M + "*(?:''|\"\")"),
                  e.querySelectorAll("[selected]").length ||
                    g.push("\\[" + M + "*(?:value|" + O + ")"),
                  e.querySelectorAll("[id~=" + b + "-]").length || g.push("~="),
                  e.querySelectorAll(":checked").length || g.push(":checked"),
                  e.querySelectorAll("a#" + b + "+*").length ||
                    g.push(".#.+[+~]");
              }),
              eu(function (e) {
                var t = p.createElement("input");
                t.setAttribute("type", "hidden"),
                  e.appendChild(t).setAttribute("name", "D"),
                  e.querySelectorAll("[name=d]").length &&
                    g.push("name" + M + "*[*^$|!~]?="),
                  e.querySelectorAll(":enabled").length ||
                    g.push(":enabled", ":disabled"),
                  e.querySelectorAll("*,:x"),
                  g.push(",.*:");
              })),
            (n.matchesSelector = Q.test(
              (y =
                h.matches ||
                h.webkitMatchesSelector ||
                h.mozMatchesSelector ||
                h.oMatchesSelector ||
                h.msMatchesSelector)
            )) &&
              eu(function (e) {
                (n.disconnectedMatch = y.call(e, "div")),
                  y.call(e, "[s!='']:x"),
                  v.push("!=", B);
              }),
            (g = g.length && RegExp(g.join("|"))),
            (v = v.length && RegExp(v.join("|"))),
            ($ =
              (t = Q.test(h.compareDocumentPosition)) || Q.test(h.contains)
                ? function (e, t) {
                    var n = 9 === e.nodeType ? e.documentElement : e,
                      r = t && t.parentNode;
                    return (
                      e === r ||
                      !(
                        !r ||
                        1 !== r.nodeType ||
                        !(n.contains
                          ? n.contains(r)
                          : e.compareDocumentPosition &&
                            16 & e.compareDocumentPosition(r))
                      )
                    );
                  }
                : function (e, t) {
                    if (t) {
                      for (; (t = t.parentNode); ) if (t === e) return !0;
                    }
                    return !1;
                  }),
            (k = t
              ? function (e, t) {
                  if (e === t) return (d = !0), 0;
                  var r =
                    !e.compareDocumentPosition - !t.compareDocumentPosition;
                  return (
                    r ||
                    (1 &
                      (r =
                        (e.ownerDocument || e) === (t.ownerDocument || t)
                          ? e.compareDocumentPosition(t)
                          : 1) ||
                    (!n.sortDetached && t.compareDocumentPosition(e) === r)
                      ? e === p || (e.ownerDocument === x && $(x, e))
                        ? -1
                        : t === p || (t.ownerDocument === x && $(x, t))
                        ? 1
                        : c
                        ? q(c, e) - q(c, t)
                        : 0
                      : 4 & r
                      ? -1
                      : 1)
                  );
                }
              : function (e, t) {
                  if (e === t) return (d = !0), 0;
                  var n,
                    r = 0,
                    i = e.parentNode,
                    o = t.parentNode,
                    a = [e],
                    s = [t];
                  if (!i || !o)
                    return e === p
                      ? -1
                      : t === p
                      ? 1
                      : i
                      ? -1
                      : o
                      ? 1
                      : c
                      ? q(c, e) - q(c, t)
                      : 0;
                  if (i === o) return ec(e, t);
                  for (n = e; (n = n.parentNode); ) a.unshift(n);
                  for (n = t; (n = n.parentNode); ) s.unshift(n);
                  for (; a[r] === s[r]; ) r++;
                  return r
                    ? ec(a[r], s[r])
                    : a[r] === x
                    ? -1
                    : s[r] === x
                    ? 1
                    : 0;
                })),
          p
        );
      }),
    (eo.matches = function (e, t) {
      return eo(e, null, null, t);
    }),
    (eo.matchesSelector = function (e, t) {
      if (
        ((e.ownerDocument || e) !== p && f(e),
        (t = t.replace(X, "='$1']")),
        n.matchesSelector &&
          m &&
          !N[t + " "] &&
          (!v || !v.test(t)) &&
          (!g || !g.test(t)))
      )
        try {
          var r = y.call(e, t);
          if (
            r ||
            n.disconnectedMatch ||
            (e.document && 11 !== e.document.nodeType)
          )
            return r;
        } catch (i) {}
      return eo(t, p, null, [e]).length > 0;
    }),
    (eo.contains = function (e, t) {
      return (e.ownerDocument || e) !== p && f(e), $(e, t);
    }),
    (eo.attr = function (e, t) {
      (e.ownerDocument || e) !== p && f(e);
      var i = r.attrHandle[t.toLowerCase()],
        o = i && S.call(r.attrHandle, t.toLowerCase()) ? i(e, t, !m) : void 0;
      return void 0 !== o
        ? o
        : n.attributes || !m
        ? e.getAttribute(t)
        : (o = e.getAttributeNode(t)) && o.specified
        ? o.value
        : null;
    }),
    (eo.error = function (e) {
      throw Error("Syntax error, unrecognized expression: " + e);
    }),
    (eo.uniqueSort = function (e) {
      var t,
        r = [],
        i = 0,
        o = 0;
      if (
        ((d = !n.detectDuplicates),
        (c = !n.sortStable && e.slice(0)),
        e.sort(k),
        d)
      ) {
        for (; (t = e[o++]); ) t === e[o] && (i = r.push(o));
        for (; i--; ) e.splice(r[i], 1);
      }
      return (c = null), e;
    }),
    (i = eo.getText =
      function (e) {
        var t,
          n = "",
          r = 0,
          o = e.nodeType;
        if (o) {
          if (1 === o || 9 === o || 11 === o) {
            if ("string" == typeof e.textContent) return e.textContent;
            for (e = e.firstChild; e; e = e.nextSibling) n += i(e);
          } else if (3 === o || 4 === o) return e.nodeValue;
        } else for (; (t = e[r++]); ) n += i(t);
        return n;
      }),
    ((r = eo.selectors =
      {
        cacheLength: 50,
        createPseudo: es,
        match: Y,
        attrHandle: {},
        find: {},
        relative: {
          ">": { dir: "parentNode", first: !0 },
          " ": { dir: "parentNode" },
          "+": { dir: "previousSibling", first: !0 },
          "~": { dir: "previousSibling" },
        },
        preFilter: {
          ATTR: function (e) {
            return (
              (e[1] = e[1].replace(et, en)),
              (e[3] = (e[3] || e[4] || e[5] || "").replace(et, en)),
              "~=" === e[2] && (e[3] = " " + e[3] + " "),
              e.slice(0, 4)
            );
          },
          CHILD: function (e) {
            return (
              (e[1] = e[1].toLowerCase()),
              "nth" === e[1].slice(0, 3)
                ? (e[3] || eo.error(e[0]),
                  (e[4] = +(e[4]
                    ? e[5] + (e[6] || 1)
                    : 2 * ("even" === e[3] || "odd" === e[3]))),
                  (e[5] = +(e[7] + e[8] || "odd" === e[3])))
                : e[3] && eo.error(e[0]),
              e
            );
          },
          PSEUDO: function (e) {
            var t,
              n = !e[6] && e[2];
            return Y.CHILD.test(e[0])
              ? null
              : (e[3]
                  ? (e[2] = e[4] || e[5] || "")
                  : n &&
                    U.test(n) &&
                    (t = a(n, !0)) &&
                    (t = n.indexOf(")", n.length - t) - n.length) &&
                    ((e[0] = e[0].slice(0, t)), (e[2] = n.slice(0, t))),
                e.slice(0, 3));
          },
        },
        filter: {
          TAG: function (e) {
            var t = e.replace(et, en).toLowerCase();
            return "*" === e
              ? function () {
                  return !0;
                }
              : function (e) {
                  return e.nodeName && e.nodeName.toLowerCase() === t;
                };
          },
          CLASS: function (e) {
            var t = T[e + " "];
            return (
              t ||
              ((t = RegExp("(^|" + M + ")" + e + "(" + M + "|$)")),
              T(e, function (e) {
                return t.test(
                  ("string" == typeof e.className && e.className) ||
                    (void 0 !== e.getAttribute && e.getAttribute("class")) ||
                    ""
                );
              }))
            );
          },
          ATTR: function (e, t, n) {
            return function (r) {
              var i = eo.attr(r, e);
              return null == i
                ? "!=" === t
                : !t ||
                    ((i += ""),
                    "=" === t
                      ? i === n
                      : "!=" === t
                      ? i !== n
                      : "^=" === t
                      ? n && 0 === i.indexOf(n)
                      : "*=" === t
                      ? n && i.indexOf(n) > -1
                      : "$=" === t
                      ? n && i.slice(-n.length) === n
                      : "~=" === t
                      ? (" " + i.replace(W, " ") + " ").indexOf(n) > -1
                      : "|=" === t &&
                        (i === n || i.slice(0, n.length + 1) === n + "-"));
            };
          },
          CHILD: function (e, t, n, r, i) {
            var o = "nth" !== e.slice(0, 3),
              a = "last" !== e.slice(-4),
              s = "of-type" === t;
            return 1 === r && 0 === i
              ? function (e) {
                  return !!e.parentNode;
                }
              : function (t, n, u) {
                  var l,
                    c,
                    d,
                    f,
                    p,
                    h,
                    m = o !== a ? "nextSibling" : "previousSibling",
                    g = t.parentNode,
                    v = s && t.nodeName.toLowerCase(),
                    y = !u && !s,
                    $ = !1;
                  if (g) {
                    if (o) {
                      for (; m; ) {
                        for (f = t; (f = f[m]); )
                          if (
                            s
                              ? f.nodeName.toLowerCase() === v
                              : 1 === f.nodeType
                          )
                            return !1;
                        h = m = "only" === e && !h && "nextSibling";
                      }
                      return !0;
                    }
                    if (((h = [a ? g.firstChild : g.lastChild]), a && y)) {
                      for (
                        $ =
                          (p =
                            (l =
                              (c =
                                (d = (f = g)[b] || (f[b] = {}))[f.uniqueID] ||
                                (d[f.uniqueID] = {}))[e] || [])[0] === _ &&
                            l[1]) && l[2],
                          f = p && g.childNodes[p];
                        (f = (++p && f && f[m]) || ($ = p = 0) || h.pop());

                      )
                        if (1 === f.nodeType && ++$ && f === t) {
                          c[e] = [_, p, $];
                          break;
                        }
                    } else if (
                      (y &&
                        ($ = p =
                          (l =
                            (c =
                              (d = (f = t)[b] || (f[b] = {}))[f.uniqueID] ||
                              (d[f.uniqueID] = {}))[e] || [])[0] === _ && l[1]),
                      !1 === $)
                    )
                      for (
                        ;
                        (f = (++p && f && f[m]) || ($ = p = 0) || h.pop()) &&
                        (!(
                          (s
                            ? f.nodeName.toLowerCase() === v
                            : 1 === f.nodeType) && ++$
                        ) ||
                          (y &&
                            ((c =
                              (d = f[b] || (f[b] = {}))[f.uniqueID] ||
                              (d[f.uniqueID] = {}))[e] = [_, $]),
                          f !== t));

                      );
                    return ($ -= i) === r || ($ % r == 0 && $ / r >= 0);
                  }
                };
          },
          PSEUDO: function (e, t) {
            var n,
              i =
                r.pseudos[e] ||
                r.setFilters[e.toLowerCase()] ||
                eo.error("unsupported pseudo: " + e);
            return i[b]
              ? i(t)
              : i.length > 1
              ? ((n = [e, e, "", t]),
                r.setFilters.hasOwnProperty(e.toLowerCase())
                  ? es(function (e, n) {
                      for (var r, o = i(e, t), a = o.length; a--; )
                        e[(r = q(e, o[a]))] = !(n[r] = o[a]);
                    })
                  : function (e) {
                      return i(e, 0, n);
                    })
              : i;
          },
        },
        pseudos: {
          not: es(function (e) {
            var t = [],
              n = [],
              r = s(e.replace(I, "$1"));
            return r[b]
              ? es(function (e, t, n, i) {
                  for (var o, a = r(e, null, i, []), s = e.length; s--; )
                    (o = a[s]) && (e[s] = !(t[s] = o));
                })
              : function (e, i, o) {
                  return (t[0] = e), r(t, null, o, n), (t[0] = null), !n.pop();
                };
          }),
          has: es(function (e) {
            return function (t) {
              return eo(e, t).length > 0;
            };
          }),
          contains: es(function (e) {
            return (
              (e = e.replace(et, en)),
              function (t) {
                return (t.textContent || t.innerText || i(t)).indexOf(e) > -1;
              }
            );
          }),
          lang: es(function (e) {
            return (
              V.test(e || "") || eo.error("unsupported lang: " + e),
              (e = e.replace(et, en).toLowerCase()),
              function (t) {
                var n;
                do
                  if (
                    (n = m
                      ? t.lang
                      : t.getAttribute("xml:lang") || t.getAttribute("lang"))
                  )
                    return (
                      (n = n.toLowerCase()) === e || 0 === n.indexOf(e + "-")
                    );
                while ((t = t.parentNode) && 1 === t.nodeType);
                return !1;
              }
            );
          }),
          target: function (t) {
            var n = e.location && e.location.hash;
            return n && n.slice(1) === t.id;
          },
          root: function (e) {
            return e === h;
          },
          focus: function (e) {
            return (
              e === p.activeElement &&
              (!p.hasFocus || p.hasFocus()) &&
              !!(e.type || e.href || ~e.tabIndex)
            );
          },
          enabled: function (e) {
            return !1 === e.disabled;
          },
          disabled: function (e) {
            return !0 === e.disabled;
          },
          checked: function (e) {
            var t = e.nodeName.toLowerCase();
            return (
              ("input" === t && !!e.checked) || ("option" === t && !!e.selected)
            );
          },
          selected: function (e) {
            return (
              e.parentNode && e.parentNode.selectedIndex, !0 === e.selected
            );
          },
          empty: function (e) {
            for (e = e.firstChild; e; e = e.nextSibling)
              if (e.nodeType < 6) return !1;
            return !0;
          },
          parent: function (e) {
            return !r.pseudos.empty(e);
          },
          header: function (e) {
            return G.test(e.nodeName);
          },
          input: function (e) {
            return J.test(e.nodeName);
          },
          button: function (e) {
            var t = e.nodeName.toLowerCase();
            return ("input" === t && "button" === e.type) || "button" === t;
          },
          text: function (e) {
            var t;
            return (
              "input" === e.nodeName.toLowerCase() &&
              "text" === e.type &&
              (null == (t = e.getAttribute("type")) ||
                "text" === t.toLowerCase())
            );
          },
          first: ep(function () {
            return [0];
          }),
          last: ep(function (e, t) {
            return [t - 1];
          }),
          eq: ep(function (e, t, n) {
            return [0 > n ? n + t : n];
          }),
          even: ep(function (e, t) {
            for (var n = 0; t > n; n += 2) e.push(n);
            return e;
          }),
          odd: ep(function (e, t) {
            for (var n = 1; t > n; n += 2) e.push(n);
            return e;
          }),
          lt: ep(function (e, t, n) {
            for (var r = 0 > n ? n + t : n; --r >= 0; ) e.push(r);
            return e;
          }),
          gt: ep(function (e, t, n) {
            for (var r = 0 > n ? n + t : n; ++r < t; ) e.push(r);
            return e;
          }),
        },
      }).pseudos.nth = r.pseudos.eq),
    { radio: !0, checkbox: !0, file: !0, password: !0, image: !0 }))
      r.pseudos[t] = ed(t);
    for (t in { submit: !0, reset: !0 }) r.pseudos[t] = ef(t);
    function em() {}
    function eg(e) {
      for (var t = 0, n = e.length, r = ""; n > t; t++) r += e[t].value;
      return r;
    }
    function ev(e, t, n) {
      var r = t.dir,
        i = n && "parentNode" === r,
        o = w++;
      return t.first
        ? function (t, n, o) {
            for (; (t = t[r]); ) if (1 === t.nodeType || i) return e(t, n, o);
          }
        : function (t, n, a) {
            var s,
              u,
              l,
              c = [_, o];
            if (a) {
              for (; (t = t[r]); )
                if ((1 === t.nodeType || i) && e(t, n, a)) return !0;
            } else
              for (; (t = t[r]); )
                if (1 === t.nodeType || i) {
                  if (
                    (s = (u =
                      (l = t[b] || (t[b] = {}))[t.uniqueID] ||
                      (l[t.uniqueID] = {}))[r]) &&
                    s[0] === _ &&
                    s[1] === o
                  )
                    return (c[2] = s[2]);
                  if (((u[r] = c), (c[2] = e(t, n, a)))) return !0;
                }
          };
    }
    function ey(e) {
      return e.length > 1
        ? function (t, n, r) {
            for (var i = e.length; i--; ) if (!e[i](t, n, r)) return !1;
            return !0;
          }
        : e[0];
    }
    function e$(e, t, n, r, i) {
      for (var o, a = [], s = 0, u = e.length, l = null != t; u > s; s++)
        (o = e[s]) && ((n && !n(o, r, i)) || (a.push(o), l && t.push(s)));
      return a;
    }
    function eb(e, t, n, r, i, o) {
      return (
        r && !r[b] && (r = eb(r)),
        i && !i[b] && (i = eb(i, o)),
        es(function (o, a, s, u) {
          var l,
            c,
            d,
            f = [],
            p = [],
            h = a.length,
            m =
              o ||
              (function e(t, n, r) {
                for (var i = 0, o = n.length; o > i; i++) eo(t, n[i], r);
                return r;
              })(t || "*", s.nodeType ? [s] : s, []),
            g = e && (o || !t) ? e$(m, f, e, s, u) : m,
            v = n ? (i || (o ? e : h || r) ? [] : a) : g;
          if ((n && n(g, v, s, u), r))
            for (l = e$(v, p), r(l, [], s, u), c = l.length; c--; )
              (d = l[c]) && (v[p[c]] = !(g[p[c]] = d));
          if (o) {
            if (i || e) {
              if (i) {
                for (l = [], c = v.length; c--; )
                  (d = v[c]) && l.push((g[c] = d));
                i(null, (v = []), l, u);
              }
              for (c = v.length; c--; )
                (d = v[c]) &&
                  (l = i ? q(o, d) : f[c]) > -1 &&
                  (o[l] = !(a[l] = d));
            }
          } else (v = e$(v === a ? v.splice(h, v.length) : v)), i ? i(null, a, v, u) : L.apply(a, v);
        })
      );
    }
    function ex(e) {
      for (
        var t,
          n,
          i,
          o = e.length,
          a = r.relative[e[0].type],
          s = a || r.relative[" "],
          u = a ? 1 : 0,
          c = ev(
            function (e) {
              return e === t;
            },
            s,
            !0
          ),
          d = ev(
            function (e) {
              return q(t, e) > -1;
            },
            s,
            !0
          ),
          f = [
            function (e, n, r) {
              var i =
                (!a && (r || n !== l)) ||
                ((t = n).nodeType ? c(e, n, r) : d(e, n, r));
              return (t = null), i;
            },
          ];
        o > u;
        u++
      )
        if ((n = r.relative[e[u].type])) f = [ev(ey(f), n)];
        else {
          if ((n = r.filter[e[u].type].apply(null, e[u].matches))[b]) {
            for (i = ++u; o > i && !r.relative[e[i].type]; i++);
            return eb(
              u > 1 && ey(f),
              u > 1 &&
                eg(
                  e
                    .slice(0, u - 1)
                    .concat({ value: " " === e[u - 2].type ? "*" : "" })
                ).replace(I, "$1"),
              n,
              i > u && ex(e.slice(u, i)),
              o > i && ex((e = e.slice(i))),
              o > i && eg(e)
            );
          }
          f.push(n);
        }
      return ey(f);
    }
    return (
      (em.prototype = r.filters = r.pseudos),
      (r.setFilters = new em()),
      (a = eo.tokenize =
        function (e, t) {
          var n,
            i,
            o,
            a,
            s,
            u,
            l,
            c = C[e + " "];
          if (c) return t ? 0 : c.slice(0);
          for (s = e, u = [], l = r.preFilter; s; ) {
            for (a in ((!n || (i = z.exec(s))) &&
              (i && (s = s.slice(i[0].length) || s), u.push((o = []))),
            (n = !1),
            (i = R.exec(s)) &&
              ((n = i.shift()),
              o.push({ value: n, type: i[0].replace(I, " ") }),
              (s = s.slice(n.length))),
            r.filter))
              (i = Y[a].exec(s)) &&
                (!l[a] || (i = l[a](i))) &&
                ((n = i.shift()),
                o.push({ value: n, type: a, matches: i }),
                (s = s.slice(n.length)));
            if (!n) break;
          }
          return t ? s.length : s ? eo.error(e) : C(e, u).slice(0);
        }),
      (s = eo.compile =
        function (e, t) {
          var n,
            i,
            o,
            s,
            u,
            c,
            d = [],
            h = [],
            g = N[e + " "];
          if (!g) {
            for (t || (t = a(e)), c = t.length; c--; )
              (g = ex(t[c]))[b] ? d.push(g) : h.push(g);
            (g = N(
              e,
              ((n = h),
              (o = (i = d).length > 0),
              (s = n.length > 0),
              (u = function (e, t, a, u, c) {
                var d,
                  h,
                  g,
                  v = 0,
                  y = "0",
                  $ = e && [],
                  b = [],
                  x = l,
                  w = e || (s && r.find.TAG("*", c)),
                  T = (_ += null == x ? 1 : Math.random() || 0.1),
                  C = w.length;
                for (
                  c && (l = t === p || t || c);
                  y !== C && null != (d = w[y]);
                  y++
                ) {
                  if (s && d) {
                    for (
                      h = 0, t || d.ownerDocument === p || (f(d), (a = !m));
                      (g = n[h++]);

                    )
                      if (g(d, t || p, a)) {
                        u.push(d);
                        break;
                      }
                    c && (_ = T);
                  }
                  o && ((d = !g && d) && v--, e && $.push(d));
                }
                if (((v += y), o && y !== v)) {
                  for (h = 0; (g = i[h++]); ) g($, b, t, a);
                  if (e) {
                    if (v > 0) for (; y--; ) $[y] || b[y] || (b[y] = D.call(u));
                    b = e$(b);
                  }
                  L.apply(u, b),
                    c &&
                      !e &&
                      b.length > 0 &&
                      v + i.length > 1 &&
                      eo.uniqueSort(u);
                }
                return c && ((_ = T), (l = x)), $;
              }),
              o ? es(u) : u)
            )).selector = e;
          }
          return g;
        }),
      (u = eo.select =
        function (e, t, i, o) {
          var u,
            l,
            c,
            d,
            f,
            p = "function" == typeof e && e,
            h = !o && a((e = p.selector || e));
          if (((i = i || []), 1 === h.length)) {
            if (
              (l = h[0] = h[0].slice(0)).length > 2 &&
              "ID" === (c = l[0]).type &&
              n.getById &&
              9 === t.nodeType &&
              m &&
              r.relative[l[1].type]
            ) {
              if (!(t = (r.find.ID(c.matches[0].replace(et, en), t) || [])[0]))
                return i;
              p && (t = t.parentNode), (e = e.slice(l.shift().value.length));
            }
            for (
              u = Y.needsContext.test(e) ? 0 : l.length;
              u-- && ((c = l[u]), !r.relative[(d = c.type)]);

            )
              if (
                (f = r.find[d]) &&
                (o = f(
                  c.matches[0].replace(et, en),
                  (Z.test(l[0].type) && eh(t.parentNode)) || t
                ))
              ) {
                if ((l.splice(u, 1), !(e = o.length && eg(l))))
                  return L.apply(i, o), i;
                break;
              }
          }
          return (
            (p || s(e, h))(
              o,
              t,
              !m,
              i,
              !t || (Z.test(e) && eh(t.parentNode)) || t
            ),
            i
          );
        }),
      (n.sortStable = b.split("").sort(k).join("") === b),
      (n.detectDuplicates = !!d),
      f(),
      (n.sortDetached = eu(function (e) {
        return 1 & e.compareDocumentPosition(p.createElement("div"));
      })),
      eu(function (e) {
        return (
          (e.innerHTML = "<a href='#'></a>"),
          "#" === e.firstChild.getAttribute("href")
        );
      }) ||
        el("type|href|height|width", function (e, t, n) {
          return n
            ? void 0
            : e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2);
        }),
      (n.attributes &&
        eu(function (e) {
          return (
            (e.innerHTML = "<input/>"),
            e.firstChild.setAttribute("value", ""),
            "" === e.firstChild.getAttribute("value")
          );
        })) ||
        el("value", function (e, t, n) {
          return n || "input" !== e.nodeName.toLowerCase()
            ? void 0
            : e.defaultValue;
        }),
      eu(function (e) {
        return null == e.getAttribute("disabled");
      }) ||
        el(O, function (e, t, n) {
          var r;
          return n
            ? void 0
            : !0 === e[t]
            ? t.toLowerCase()
            : (r = e.getAttributeNode(t)) && r.specified
            ? r.value
            : null;
        }),
      eo
    );
  })(e);
  (p.find = $),
    (p.expr = $.selectors),
    (p.expr[":"] = p.expr.pseudos),
    (p.uniqueSort = p.unique = $.uniqueSort),
    (p.text = $.getText),
    (p.isXMLDoc = $.isXML),
    (p.contains = $.contains);
  var b = function (e, t, n) {
      for (var r = [], i = void 0 !== n; (e = e[t]) && 9 !== e.nodeType; )
        if (1 === e.nodeType) {
          if (i && p(e).is(n)) break;
          r.push(e);
        }
      return r;
    },
    x = function (e, t) {
      for (var n = []; e; e = e.nextSibling)
        1 === e.nodeType && e !== t && n.push(e);
      return n;
    },
    _ = p.expr.match.needsContext,
    w = /^<([\w-]+)\s*\/?>(?:<\/\1>|)$/,
    T = /^.[^:#\[\.,]*$/;
  function C(e, t, n) {
    if (p.isFunction(t))
      return p.grep(e, function (e, r) {
        return !!t.call(e, r, e) !== n;
      });
    if (t.nodeType)
      return p.grep(e, function (e) {
        return (e === t) !== n;
      });
    if ("string" == typeof t) {
      if (T.test(t)) return p.filter(t, e, n);
      t = p.filter(t, e);
    }
    return p.grep(e, function (e) {
      return p.inArray(e, t) > -1 !== n;
    });
  }
  (p.filter = function (e, t, n) {
    var r = t[0];
    return (
      n && (e = ":not(" + e + ")"),
      1 === t.length && 1 === r.nodeType
        ? p.find.matchesSelector(r, e)
          ? [r]
          : []
        : p.find.matches(
            e,
            p.grep(t, function (e) {
              return 1 === e.nodeType;
            })
          )
    );
  }),
    p.fn.extend({
      find: function (e) {
        var t,
          n = [],
          r = this,
          i = r.length;
        if ("string" != typeof e)
          return this.pushStack(
            p(e).filter(function () {
              for (t = 0; i > t; t++) if (p.contains(r[t], this)) return !0;
            })
          );
        for (t = 0; i > t; t++) p.find(e, r[t], n);
        return (
          ((n = this.pushStack(i > 1 ? p.unique(n) : n)).selector = this
            .selector
            ? this.selector + " " + e
            : e),
          n
        );
      },
      filter: function (e) {
        return this.pushStack(C(this, e || [], !1));
      },
      not: function (e) {
        return this.pushStack(C(this, e || [], !0));
      },
      is: function (e) {
        return !!C(this, "string" == typeof e && _.test(e) ? p(e) : e || [], !1)
          .length;
      },
    });
  var N,
    k = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/;
  ((p.fn.init = function (e, t, n) {
    var i, o;
    if (!e) return this;
    if (((n = n || N), "string" == typeof e)) {
      if (
        !(i =
          "<" === e.charAt(0) && ">" === e.charAt(e.length - 1) && e.length >= 3
            ? [null, e, null]
            : k.exec(e)) ||
        (!i[1] && t)
      )
        return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);
      if (i[1]) {
        if (
          ((t = t instanceof p ? t[0] : t),
          p.merge(
            this,
            p.parseHTML(i[1], t && t.nodeType ? t.ownerDocument || t : r, !0)
          ),
          w.test(i[1]) && p.isPlainObject(t))
        )
          for (i in t)
            p.isFunction(this[i]) ? this[i](t[i]) : this.attr(i, t[i]);
        return this;
      }
      if ((o = r.getElementById(i[2])) && o.parentNode) {
        if (o.id !== i[2]) return N.find(e);
        (this.length = 1), (this[0] = o);
      }
      return (this.context = r), (this.selector = e), this;
    }
    return e.nodeType
      ? ((this.context = this[0] = e), (this.length = 1), this)
      : p.isFunction(e)
      ? void 0 !== n.ready
        ? n.ready(e)
        : e(p)
      : (void 0 !== e.selector &&
          ((this.selector = e.selector), (this.context = e.context)),
        p.makeArray(e, this));
  }).prototype = p.fn),
    (N = p(r));
  var E = /^(?:parents|prev(?:Until|All))/,
    S = { children: !0, contents: !0, next: !0, prev: !0 };
  function A(e, t) {
    do e = e[t];
    while (e && 1 !== e.nodeType);
    return e;
  }
  p.fn.extend({
    has: function (e) {
      var t,
        n = p(e, this),
        r = n.length;
      return this.filter(function () {
        for (t = 0; r > t; t++) if (p.contains(this, n[t])) return !0;
      });
    },
    closest: function (e, t) {
      for (
        var n,
          r = 0,
          i = this.length,
          o = [],
          a = _.test(e) || "string" != typeof e ? p(e, t || this.context) : 0;
        i > r;
        r++
      )
        for (n = this[r]; n && n !== t; n = n.parentNode)
          if (
            n.nodeType < 11 &&
            (a
              ? a.index(n) > -1
              : 1 === n.nodeType && p.find.matchesSelector(n, e))
          ) {
            o.push(n);
            break;
          }
      return this.pushStack(o.length > 1 ? p.uniqueSort(o) : o);
    },
    index: function (e) {
      return e
        ? "string" == typeof e
          ? p.inArray(this[0], p(e))
          : p.inArray(e.jquery ? e[0] : e, this)
        : this[0] && this[0].parentNode
        ? this.first().prevAll().length
        : -1;
    },
    add: function (e, t) {
      return this.pushStack(p.uniqueSort(p.merge(this.get(), p(e, t))));
    },
    addBack: function (e) {
      return this.add(null == e ? this.prevObject : this.prevObject.filter(e));
    },
  }),
    p.each(
      {
        parent: function (e) {
          var t = e.parentNode;
          return t && 11 !== t.nodeType ? t : null;
        },
        parents: function (e) {
          return b(e, "parentNode");
        },
        parentsUntil: function (e, t, n) {
          return b(e, "parentNode", n);
        },
        next: function (e) {
          return A(e, "nextSibling");
        },
        prev: function (e) {
          return A(e, "previousSibling");
        },
        nextAll: function (e) {
          return b(e, "nextSibling");
        },
        prevAll: function (e) {
          return b(e, "previousSibling");
        },
        nextUntil: function (e, t, n) {
          return b(e, "nextSibling", n);
        },
        prevUntil: function (e, t, n) {
          return b(e, "previousSibling", n);
        },
        siblings: function (e) {
          return x((e.parentNode || {}).firstChild, e);
        },
        children: function (e) {
          return x(e.firstChild);
        },
        contents: function (e) {
          return p.nodeName(e, "iframe")
            ? e.contentDocument || e.contentWindow.document
            : p.merge([], e.childNodes);
        },
      },
      function (e, t) {
        p.fn[e] = function (n, r) {
          var i = p.map(this, t, n);
          return (
            "Until" !== e.slice(-5) && (r = n),
            r && "string" == typeof r && (i = p.filter(r, i)),
            this.length > 1 &&
              (S[e] || (i = p.uniqueSort(i)), E.test(e) && (i = i.reverse())),
            this.pushStack(i)
          );
        };
      }
    );
  var D = /\S+/g;
  function j() {
    r.addEventListener
      ? (r.removeEventListener("DOMContentLoaded", L),
        e.removeEventListener("load", L))
      : (r.detachEvent("onreadystatechange", L), e.detachEvent("onload", L));
  }
  function L() {
    (r.addEventListener ||
      "load" === e.event.type ||
      "complete" === r.readyState) &&
      (j(), p.ready());
  }
  for (eq in ((p.Callbacks = function (e) {
    e =
      "string" == typeof e
        ? ((t = e),
          (n = {}),
          p.each(t.match(D) || [], function (e, t) {
            n[t] = !0;
          }),
          n)
        : p.extend({}, e);
    var t,
      n,
      r,
      i,
      o,
      a,
      s = [],
      u = [],
      l = -1,
      c = function () {
        for (a = e.once, o = r = !0; u.length; l = -1)
          for (i = u.shift(); ++l < s.length; )
            !1 === s[l].apply(i[0], i[1]) &&
              e.stopOnFalse &&
              ((l = s.length), (i = !1));
        e.memory || (i = !1), (r = !1), a && (s = i ? [] : "");
      },
      d = {
        add: function () {
          return (
            s &&
              (i && !r && ((l = s.length - 1), u.push(i)),
              (function t(n) {
                p.each(n, function (n, r) {
                  p.isFunction(r)
                    ? (e.unique && d.has(r)) || s.push(r)
                    : r && r.length && "string" !== p.type(r) && t(r);
                });
              })(arguments),
              i && !r && c()),
            this
          );
        },
        remove: function () {
          return (
            p.each(arguments, function (e, t) {
              for (var n; (n = p.inArray(t, s, n)) > -1; )
                s.splice(n, 1), l >= n && l--;
            }),
            this
          );
        },
        has: function (e) {
          return e ? p.inArray(e, s) > -1 : s.length > 0;
        },
        empty: function () {
          return s && (s = []), this;
        },
        disable: function () {
          return (a = u = []), (s = i = ""), this;
        },
        disabled: function () {
          return !s;
        },
        lock: function () {
          return (a = !0), i || d.disable(), this;
        },
        locked: function () {
          return !!a;
        },
        fireWith: function (e, t) {
          return (
            a ||
              ((t = [e, (t = t || []).slice ? t.slice() : t]),
              u.push(t),
              r || c()),
            this
          );
        },
        fire: function () {
          return d.fireWith(this, arguments), this;
        },
        fired: function () {
          return !!o;
        },
      };
    return d;
  }),
  p.extend({
    Deferred: function (e) {
      var t = [
          ["resolve", "done", p.Callbacks("once memory"), "resolved"],
          ["reject", "fail", p.Callbacks("once memory"), "rejected"],
          ["notify", "progress", p.Callbacks("memory")],
        ],
        n = "pending",
        r = {
          state: function () {
            return n;
          },
          always: function () {
            return i.done(arguments).fail(arguments), this;
          },
          then: function () {
            var e = arguments;
            return p
              .Deferred(function (n) {
                p.each(t, function (t, o) {
                  var a = p.isFunction(e[t]) && e[t];
                  i[o[1]](function () {
                    var e = a && a.apply(this, arguments);
                    e && p.isFunction(e.promise)
                      ? e
                          .promise()
                          .progress(n.notify)
                          .done(n.resolve)
                          .fail(n.reject)
                      : n[o[0] + "With"](
                          this === r ? n.promise() : this,
                          a ? [e] : arguments
                        );
                  });
                }),
                  (e = null);
              })
              .promise();
          },
          promise: function (e) {
            return null != e ? p.extend(e, r) : r;
          },
        },
        i = {};
      return (
        (r.pipe = r.then),
        p.each(t, function (e, o) {
          var a = o[2],
            s = o[3];
          (r[o[1]] = a.add),
            s &&
              a.add(
                function () {
                  n = s;
                },
                t[1 ^ e][2].disable,
                t[2][2].lock
              ),
            (i[o[0]] = function () {
              return i[o[0] + "With"](this === i ? r : this, arguments), this;
            }),
            (i[o[0] + "With"] = a.fireWith);
        }),
        r.promise(i),
        e && e.call(i, i),
        i
      );
    },
    when: function (e) {
      var t,
        n,
        r,
        o = 0,
        a = i.call(arguments),
        s = a.length,
        u = 1 !== s || (e && p.isFunction(e.promise)) ? s : 0,
        l = 1 === u ? e : p.Deferred(),
        c = function (e, n, r) {
          return function (o) {
            (n[e] = this),
              (r[e] = arguments.length > 1 ? i.call(arguments) : o),
              r === t ? l.notifyWith(n, r) : --u || l.resolveWith(n, r);
          };
        };
      if (s > 1)
        for (t = Array(s), n = Array(s), r = Array(s); s > o; o++)
          a[o] && p.isFunction(a[o].promise)
            ? a[o]
                .promise()
                .progress(c(o, n, t))
                .done(c(o, r, a))
                .fail(l.reject)
            : --u;
      return u || l.resolveWith(r, a), l.promise();
    },
  }),
  (p.fn.ready = function (e) {
    return p.ready.promise().done(e), this;
  }),
  p.extend({
    isReady: !1,
    readyWait: 1,
    holdReady: function (e) {
      e ? p.readyWait++ : p.ready(!0);
    },
    ready: function (e) {
      (!0 === e ? --p.readyWait : p.isReady) ||
        ((p.isReady = !0),
        (!0 !== e && --p.readyWait > 0) ||
          (eH.resolveWith(r, [p]),
          p.fn.triggerHandler &&
            (p(r).triggerHandler("ready"), p(r).off("ready"))));
    },
  }),
  (p.ready.promise = function (t) {
    if (!eH) {
      if (
        ((eH = p.Deferred()),
        "complete" !== r.readyState &&
          ("loading" === r.readyState || r.documentElement.doScroll))
      ) {
        if (r.addEventListener)
          r.addEventListener("DOMContentLoaded", L),
            e.addEventListener("load", L);
        else {
          r.attachEvent("onreadystatechange", L), e.attachEvent("onload", L);
          var n = !1;
          try {
            n = null == e.frameElement && r.documentElement;
          } catch (i) {}
          n &&
            n.doScroll &&
            (function t() {
              if (!p.isReady) {
                try {
                  n.doScroll("left");
                } catch (r) {
                  return e.setTimeout(t, 50);
                }
                j(), p.ready();
              }
            })();
        }
      } else e.setTimeout(p.ready);
    }
    return eH.promise(t);
  }),
  p.ready.promise(),
  p(d)))
    break;
  (d.ownFirst = "0" === eq),
    (d.inlineBlockNeedsLayout = !1),
    p(function () {
      var e, t, n, i;
      (n = r.getElementsByTagName("body")[0]) &&
        n.style &&
        ((t = r.createElement("div")),
        ((i = r.createElement("div")).style.cssText =
          "position:absolute;border:0;width:0;height:0;top:0;left:-9999px"),
        n.appendChild(i).appendChild(t),
        void 0 !== t.style.zoom &&
          ((t.style.cssText =
            "display:inline;margin:0;border:0;padding:1px;width:1px;zoom:1"),
          (d.inlineBlockNeedsLayout = e = 3 === t.offsetWidth),
          e && (n.style.zoom = 1)),
        n.removeChild(i));
    }),
    (function () {
      var e = r.createElement("div");
      d.deleteExpando = !0;
      try {
        delete e.test;
      } catch (t) {
        d.deleteExpando = !1;
      }
      e = null;
    })();
  var H = function (e) {
      var t = p.noData[(e.nodeName + " ").toLowerCase()],
        n = +e.nodeType || 1;
      return (
        (1 === n || 9 === n) &&
        (!t || (!0 !== t && e.getAttribute("classid") === t))
      );
    },
    q = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
    O = /([A-Z])/g;
  function M(e, t, n) {
    if (void 0 === n && 1 === e.nodeType) {
      var r = "data-" + t.replace(O, "-$1").toLowerCase();
      if ("string" == typeof (n = e.getAttribute(r))) {
        try {
          n =
            "true" === n ||
            ("false" !== n &&
              ("null" === n
                ? null
                : +n + "" === n
                ? +n
                : q.test(n)
                ? p.parseJSON(n)
                : n));
        } catch (i) {}
        p.data(e, t, n);
      } else n = void 0;
    }
    return n;
  }
  function F(e) {
    var t;
    for (t in e)
      if (("data" !== t || !p.isEmptyObject(e[t])) && "toJSON" !== t) return !1;
    return !0;
  }
  function P(e, t, r, i) {
    if (H(e)) {
      var o,
        a,
        s = p.expando,
        u = e.nodeType,
        l = u ? p.cache : e,
        c = u ? e[s] : e[s] && s;
      if (
        (c && l[c] && (i || l[c].data)) ||
        void 0 !== r ||
        "string" != typeof t
      )
        return (
          c || (c = u ? (e[s] = n.pop() || p.guid++) : s),
          l[c] || (l[c] = u ? {} : { toJSON: p.noop }),
          ("object" != typeof t && "function" != typeof t) ||
            (i
              ? (l[c] = p.extend(l[c], t))
              : (l[c].data = p.extend(l[c].data, t))),
          (a = l[c]),
          i || (a.data || (a.data = {}), (a = a.data)),
          void 0 !== r && (a[p.camelCase(t)] = r),
          "string" == typeof t
            ? null == (o = a[t]) && (o = a[p.camelCase(t)])
            : (o = a),
          o
        );
    }
  }
  function B(e, t, n) {
    if (H(e)) {
      var r,
        i,
        o = e.nodeType,
        a = o ? p.cache : e,
        s = o ? e[p.expando] : p.expando;
      if (a[s]) {
        if (t && (r = n ? a[s] : a[s].data)) {
          for (
            i = (t = p.isArray(t)
              ? t.concat(p.map(t, p.camelCase))
              : (t in r)
              ? [t]
              : ((t = p.camelCase(t)) in r)
              ? [t]
              : t.split(" ")).length;
            i--;

          )
            delete r[t[i]];
          if (n ? !F(r) : !p.isEmptyObject(r)) return;
        }
        (n || (delete a[s].data, F(a[s]))) &&
          (o
            ? p.cleanData([e], !0)
            : d.deleteExpando || a != a.window
            ? delete a[s]
            : (a[s] = void 0));
      }
    }
  }
  p.extend({
    cache: {},
    noData: {
      "applet ": !0,
      "embed ": !0,
      "object ": "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000",
    },
    hasData: function (e) {
      return !!(e = e.nodeType ? p.cache[e[p.expando]] : e[p.expando]) && !F(e);
    },
    data: function (e, t, n) {
      return P(e, t, n);
    },
    removeData: function (e, t) {
      return B(e, t);
    },
    _data: function (e, t, n) {
      return P(e, t, n, !0);
    },
    _removeData: function (e, t) {
      return B(e, t, !0);
    },
  }),
    p.fn.extend({
      data: function (e, t) {
        var n,
          r,
          i,
          o = this[0],
          a = o && o.attributes;
        if (void 0 === e) {
          if (
            this.length &&
            ((i = p.data(o)), 1 === o.nodeType && !p._data(o, "parsedAttrs"))
          ) {
            for (n = a.length; n--; )
              a[n] &&
                0 === (r = a[n].name).indexOf("data-") &&
                M(o, (r = p.camelCase(r.slice(5))), i[r]);
            p._data(o, "parsedAttrs", !0);
          }
          return i;
        }
        return "object" == typeof e
          ? this.each(function () {
              p.data(this, e);
            })
          : arguments.length > 1
          ? this.each(function () {
              p.data(this, e, t);
            })
          : o
          ? M(o, e, p.data(o, e))
          : void 0;
      },
      removeData: function (e) {
        return this.each(function () {
          p.removeData(this, e);
        });
      },
    }),
    p.extend({
      queue: function (e, t, n) {
        var r;
        return e
          ? ((t = (t || "fx") + "queue"),
            (r = p._data(e, t)),
            n &&
              (!r || p.isArray(n)
                ? (r = p._data(e, t, p.makeArray(n)))
                : r.push(n)),
            r || [])
          : void 0;
      },
      dequeue: function (e, t) {
        t = t || "fx";
        var n = p.queue(e, t),
          r = n.length,
          i = n.shift(),
          o = p._queueHooks(e, t),
          a = function () {
            p.dequeue(e, t);
          };
        "inprogress" === i && ((i = n.shift()), r--),
          i &&
            ("fx" === t && n.unshift("inprogress"),
            delete o.stop,
            i.call(e, a, o)),
          !r && o && o.empty.fire();
      },
      _queueHooks: function (e, t) {
        var n = t + "queueHooks";
        return (
          p._data(e, n) ||
          p._data(e, n, {
            empty: p.Callbacks("once memory").add(function () {
              p._removeData(e, t + "queue"), p._removeData(e, n);
            }),
          })
        );
      },
    }),
    p.fn.extend({
      queue: function (e, t) {
        var n = 2;
        return (
          "string" != typeof e && ((t = e), (e = "fx"), n--),
          arguments.length < n
            ? p.queue(this[0], e)
            : void 0 === t
            ? this
            : this.each(function () {
                var n = p.queue(this, e, t);
                p._queueHooks(this, e),
                  "fx" === e && "inprogress" !== n[0] && p.dequeue(this, e);
              })
        );
      },
      dequeue: function (e) {
        return this.each(function () {
          p.dequeue(this, e);
        });
      },
      clearQueue: function (e) {
        return this.queue(e || "fx", []);
      },
      promise: function (e, t) {
        var n,
          r = 1,
          i = p.Deferred(),
          o = this,
          a = this.length,
          s = function () {
            --r || i.resolveWith(o, [o]);
          };
        for (
          "string" != typeof e && ((t = e), (e = void 0)), e = e || "fx";
          a--;

        )
          (n = p._data(o[a], e + "queueHooks")) &&
            n.empty &&
            (r++, n.empty.add(s));
        return s(), i.promise(t);
      },
    }),
    (d.shrinkWrapBlocks = function () {
      var e, t, n;
      return null != em
        ? em
        : ((em = !1),
          (t = r.getElementsByTagName("body")[0]) && t.style
            ? ((e = r.createElement("div")),
              ((n = r.createElement("div")).style.cssText =
                "position:absolute;border:0;width:0;height:0;top:0;left:-9999px"),
              t.appendChild(n).appendChild(e),
              void 0 !== e.style.zoom &&
                ((e.style.cssText =
                  "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:1px;width:1px;zoom:1"),
                (e.appendChild(r.createElement("div")).style.width = "5px"),
                (em = 3 !== e.offsetWidth)),
              t.removeChild(n),
              em)
            : void 0);
    });
  var W = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
    I = RegExp("^(?:([+-])=|)(" + W + ")([a-z%]*)$", "i"),
    z = ["Top", "Right", "Bottom", "Left"],
    R = function (e, t) {
      return (
        (e = t || e),
        "none" === p.css(e, "display") || !p.contains(e.ownerDocument, e)
      );
    };
  function X(e, t, n, r) {
    var i,
      o = 1,
      a = 20,
      s = r
        ? function () {
            return r.cur();
          }
        : function () {
            return p.css(e, t, "");
          },
      u = s(),
      l = (n && n[3]) || (p.cssNumber[t] ? "" : "px"),
      c = (p.cssNumber[t] || ("px" !== l && +u)) && I.exec(p.css(e, t));
    if (c && c[3] !== l) {
      (l = l || c[3]), (n = n || []), (c = +u || 1);
      do (c /= o = o || ".5"), p.style(e, t, c + l);
      while (o !== (o = s() / u) && 1 !== o && --a);
    }
    return (
      n &&
        ((c = +c || +u || 0),
        (i = n[1] ? c + (n[1] + 1) * n[2] : +n[2]),
        r && ((r.unit = l), (r.start = c), (r.end = i))),
      i
    );
  }
  var U = function (e, t, n, r, i, o, a) {
      var s = 0,
        u = e.length,
        l = null == n;
      if ("object" === p.type(n))
        for (s in ((i = !0), n)) U(e, t, s, n[s], !0, o, a);
      else if (
        void 0 !== r &&
        ((i = !0),
        p.isFunction(r) || (a = !0),
        l &&
          (a
            ? (t.call(e, r), (t = null))
            : ((l = t),
              (t = function (e, t, n) {
                return l.call(p(e), n);
              }))),
        t)
      )
        for (; u > s; s++) t(e[s], n, a ? r : r.call(e[s], s, t(e[s], n)));
      return i ? e : l ? t.call(e) : u ? t(e[0], n) : o;
    },
    V = /^(?:checkbox|radio)$/i,
    Y = /<([\w:-]+)/,
    J = /^$|\/(?:java|ecma)script/i,
    G = /^\s+/,
    Q =
      "abbr|article|aside|audio|bdi|canvas|data|datalist|details|dialog|figcaption|figure|footer|header|hgroup|main|mark|meter|nav|output|picture|progress|section|summary|template|time|video";
  function K(e) {
    var t = Q.split("|"),
      n = e.createDocumentFragment();
    if (n.createElement) for (; t.length; ) n.createElement(t.pop());
    return n;
  }
  (eg = r.createElement("div")),
    (ev = r.createDocumentFragment()),
    (ey = r.createElement("input")),
    (eg.innerHTML =
      "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>"),
    (d.leadingWhitespace = 3 === eg.firstChild.nodeType),
    (d.tbody = !eg.getElementsByTagName("tbody").length),
    (d.htmlSerialize = !!eg.getElementsByTagName("link").length),
    (d.html5Clone =
      "<:nav></:nav>" !== r.createElement("nav").cloneNode(!0).outerHTML),
    (ey.type = "checkbox"),
    (ey.checked = !0),
    ev.appendChild(ey),
    (d.appendChecked = ey.checked),
    (eg.innerHTML = "<textarea>x</textarea>"),
    (d.noCloneChecked = !!eg.cloneNode(!0).lastChild.defaultValue),
    ev.appendChild(eg),
    (ey = r.createElement("input")).setAttribute("type", "radio"),
    ey.setAttribute("checked", "checked"),
    ey.setAttribute("name", "t"),
    eg.appendChild(ey),
    (d.checkClone = eg.cloneNode(!0).cloneNode(!0).lastChild.checked),
    (d.noCloneEvent = !!eg.addEventListener),
    (eg[p.expando] = 1),
    (d.attributes = !eg.getAttribute(p.expando));
  var Z = {
    option: [1, "<select multiple='multiple'>", "</select>"],
    legend: [1, "<fieldset>", "</fieldset>"],
    area: [1, "<map>", "</map>"],
    param: [1, "<object>", "</object>"],
    thead: [1, "<table>", "</table>"],
    tr: [2, "<table><tbody>", "</tbody></table>"],
    col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
    td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
    _default: d.htmlSerialize ? [0, "", ""] : [1, "X<div>", "</div>"],
  };
  function ee(e, t) {
    var n,
      r,
      i = 0,
      o =
        void 0 !== e.getElementsByTagName
          ? e.getElementsByTagName(t || "*")
          : void 0 !== e.querySelectorAll
          ? e.querySelectorAll(t || "*")
          : void 0;
    if (!o)
      for (o = [], n = e.childNodes || e; null != (r = n[i]); i++)
        !t || p.nodeName(r, t) ? o.push(r) : p.merge(o, ee(r, t));
    return void 0 === t || (t && p.nodeName(e, t)) ? p.merge([e], o) : o;
  }
  function et(e, t) {
    for (var n, r = 0; null != (n = e[r]); r++)
      p._data(n, "globalEval", !t || p._data(t[r], "globalEval"));
  }
  (Z.optgroup = Z.option),
    (Z.tbody = Z.tfoot = Z.colgroup = Z.caption = Z.thead),
    (Z.th = Z.td);
  var en = /<|&#?\w+;/,
    er = /<tbody/i;
  function ei(e) {
    V.test(e.type) && (e.defaultChecked = e.checked);
  }
  function eo(e, t, n, r, i) {
    for (
      var o, a, s, u, l, c, f, h = e.length, m = K(t), g = [], v = 0;
      h > v;
      v++
    )
      if ((a = e[v]) || 0 === a) {
        if ("object" === p.type(a)) p.merge(g, a.nodeType ? [a] : a);
        else if (en.test(a)) {
          for (
            u = u || m.appendChild(t.createElement("div")),
              f =
                Z[(l = (Y.exec(a) || ["", ""])[1].toLowerCase())] || Z._default,
              u.innerHTML = f[1] + p.htmlPrefilter(a) + f[2],
              o = f[0];
            o--;

          )
            u = u.lastChild;
          if (
            (!d.leadingWhitespace &&
              G.test(a) &&
              g.push(t.createTextNode(G.exec(a)[0])),
            !d.tbody)
          )
            for (
              o =
                (a =
                  "table" !== l || er.test(a)
                    ? "<table>" !== f[1] || er.test(a)
                      ? 0
                      : u
                    : u.firstChild) && a.childNodes.length;
              o--;

            )
              p.nodeName((c = a.childNodes[o]), "tbody") &&
                !c.childNodes.length &&
                a.removeChild(c);
          for (p.merge(g, u.childNodes), u.textContent = ""; u.firstChild; )
            u.removeChild(u.firstChild);
          u = m.lastChild;
        } else g.push(t.createTextNode(a));
      }
    for (
      u && m.removeChild(u),
        d.appendChecked || p.grep(ee(g, "input"), ei),
        v = 0;
      (a = g[v++]);

    )
      if (r && p.inArray(a, r) > -1) i && i.push(a);
      else if (
        ((s = p.contains(a.ownerDocument, a)),
        (u = ee(m.appendChild(a), "script")),
        s && et(u),
        n)
      )
        for (o = 0; (a = u[o++]); ) J.test(a.type || "") && n.push(a);
    return (u = null), m;
  }
  !(function () {
    var t,
      n,
      i = r.createElement("div");
    for (t in { submit: !0, change: !0, focusin: !0 })
      (n = "on" + t),
        (d[t] = n in e) ||
          (i.setAttribute(n, "t"), (d[t] = !1 === i.attributes[n].expando));
    i = null;
  })();
  var ea = /^(?:input|select|textarea)$/i,
    es = /^key/,
    eu = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
    el = /^(?:focusinfocus|focusoutblur)$/,
    ec = /^([^.]*)(?:\.(.+)|)/;
  function ed() {
    return !0;
  }
  function ef() {
    return !1;
  }
  function ep() {
    try {
      return r.activeElement;
    } catch (e) {}
  }
  function eh(e, t, n, r, i, o) {
    var a, s;
    if ("object" == typeof t) {
      for (s in ("string" != typeof n && ((r = r || n), (n = void 0)), t))
        eh(e, s, n, r, t[s], o);
      return e;
    }
    if (
      (null == r && null == i
        ? ((i = n), (r = n = void 0))
        : null == i &&
          ("string" == typeof n
            ? ((i = r), (r = void 0))
            : ((i = r), (r = n), (n = void 0))),
      !1 === i)
    )
      i = ef;
    else if (!i) return e;
    return (
      1 === o &&
        ((a = i),
        ((i = function (e) {
          return p().off(e), a.apply(this, arguments);
        }).guid = a.guid || (a.guid = p.guid++))),
      e.each(function () {
        p.event.add(this, t, i, r, n);
      })
    );
  }
  (p.event = {
    global: {},
    add: function (e, t, n, r, i) {
      var o,
        a,
        s,
        u,
        l,
        c,
        d,
        f,
        h,
        m,
        g,
        v = p._data(e);
      if (v) {
        for (
          n.handler && ((n = (u = n).handler), (i = u.selector)),
            n.guid || (n.guid = p.guid++),
            (a = v.events) || (a = v.events = {}),
            (c = v.handle) ||
              ((c = v.handle =
                function (e) {
                  return e && p.event.triggered === e.type
                    ? void 0
                    : p.event.dispatch.apply(c.elem, arguments);
                }).elem = e),
            s = (t = (t || "").match(D) || [""]).length;
          s--;

        )
          (h = g = (o = ec.exec(t[s]) || [])[1]),
            (m = (o[2] || "").split(".").sort()),
            h &&
              ((l = p.event.special[h] || {}),
              (h = (i ? l.delegateType : l.bindType) || h),
              (l = p.event.special[h] || {}),
              (d = p.extend(
                {
                  type: h,
                  origType: g,
                  data: r,
                  handler: n,
                  guid: n.guid,
                  selector: i,
                  needsContext: i && p.expr.match.needsContext.test(i),
                  namespace: m.join("."),
                },
                u
              )),
              (f = a[h]) ||
                (((f = a[h] = []).delegateCount = 0),
                (l.setup && !1 !== l.setup.call(e, r, m, c)) ||
                  (e.addEventListener
                    ? e.addEventListener(h, c, !1)
                    : e.attachEvent && e.attachEvent("on" + h, c))),
              l.add &&
                (l.add.call(e, d), d.handler.guid || (d.handler.guid = n.guid)),
              i ? f.splice(f.delegateCount++, 0, d) : f.push(d),
              (p.event.global[h] = !0));
        e = null;
      }
    },
    remove: function (e, t, n, r, i) {
      var o,
        a,
        s,
        u,
        l,
        c,
        d,
        f,
        h,
        m,
        g,
        v = p.hasData(e) && p._data(e);
      if (v && (c = v.events)) {
        for (l = (t = (t || "").match(D) || [""]).length; l--; )
          if (
            ((h = g = (s = ec.exec(t[l]) || [])[1]),
            (m = (s[2] || "").split(".").sort()),
            h)
          ) {
            for (
              d = p.event.special[h] || {},
                f = c[(h = (r ? d.delegateType : d.bindType) || h)] || [],
                s =
                  s[2] &&
                  RegExp("(^|\\.)" + m.join("\\.(?:.*\\.|)") + "(\\.|$)"),
                u = o = f.length;
              o--;

            )
              (a = f[o]),
                (!i && g !== a.origType) ||
                  (n && n.guid !== a.guid) ||
                  (s && !s.test(a.namespace)) ||
                  (r && r !== a.selector && ("**" !== r || !a.selector)) ||
                  (f.splice(o, 1),
                  a.selector && f.delegateCount--,
                  d.remove && d.remove.call(e, a));
            u &&
              !f.length &&
              ((d.teardown && !1 !== d.teardown.call(e, m, v.handle)) ||
                p.removeEvent(e, h, v.handle),
              delete c[h]);
          } else for (h in c) p.event.remove(e, h + t[l], n, r, !0);
        p.isEmptyObject(c) && (delete v.handle, p._removeData(e, "events"));
      }
    },
    trigger: function (t, n, i, o) {
      var a,
        s,
        u,
        l,
        d,
        f,
        h,
        m = [i || r],
        g = c.call(t, "type") ? t.type : t,
        v = c.call(t, "namespace") ? t.namespace.split(".") : [];
      if (
        ((u = f = i = i || r),
        3 !== i.nodeType &&
          8 !== i.nodeType &&
          !el.test(g + p.event.triggered) &&
          (g.indexOf(".") > -1 && ((g = (v = g.split(".")).shift()), v.sort()),
          (s = 0 > g.indexOf(":") && "on" + g),
          ((t = t[p.expando]
            ? t
            : new p.Event(g, "object" == typeof t && t)).isTrigger = o ? 2 : 3),
          (t.namespace = v.join(".")),
          (t.rnamespace = t.namespace
            ? RegExp("(^|\\.)" + v.join("\\.(?:.*\\.|)") + "(\\.|$)")
            : null),
          (t.result = void 0),
          t.target || (t.target = i),
          (n = null == n ? [t] : p.makeArray(n, [t])),
          (d = p.event.special[g] || {}),
          o || !d.trigger || !1 !== d.trigger.apply(i, n)))
      ) {
        if (!o && !d.noBubble && !p.isWindow(i)) {
          for (
            l = d.delegateType || g, el.test(l + g) || (u = u.parentNode);
            u;
            u = u.parentNode
          )
            m.push(u), (f = u);
          f === (i.ownerDocument || r) &&
            m.push(f.defaultView || f.parentWindow || e);
        }
        for (h = 0; (u = m[h++]) && !t.isPropagationStopped(); )
          (t.type = h > 1 ? l : d.bindType || g),
            (a =
              (p._data(u, "events") || {})[t.type] && p._data(u, "handle")) &&
              a.apply(u, n),
            (a = s && u[s]) &&
              a.apply &&
              H(u) &&
              ((t.result = a.apply(u, n)),
              !1 === t.result && t.preventDefault());
        if (
          ((t.type = g),
          !o &&
            !t.isDefaultPrevented() &&
            (!d._default || !1 === d._default.apply(m.pop(), n)) &&
            H(i) &&
            s &&
            i[g] &&
            !p.isWindow(i))
        ) {
          (f = i[s]) && (i[s] = null), (p.event.triggered = g);
          try {
            i[g]();
          } catch (y) {}
          (p.event.triggered = void 0), f && (i[s] = f);
        }
        return t.result;
      }
    },
    dispatch: function (e) {
      e = p.event.fix(e);
      var t,
        n,
        r,
        o,
        a,
        s = [],
        u = i.call(arguments),
        l = (p._data(this, "events") || {})[e.type] || [],
        c = p.event.special[e.type] || {};
      if (
        ((u[0] = e),
        (e.delegateTarget = this),
        !c.preDispatch || !1 !== c.preDispatch.call(this, e))
      ) {
        for (
          s = p.event.handlers.call(this, e, l), t = 0;
          (o = s[t++]) && !e.isPropagationStopped();

        )
          for (
            e.currentTarget = o.elem, n = 0;
            (a = o.handlers[n++]) && !e.isImmediatePropagationStopped();

          )
            (e.rnamespace && !e.rnamespace.test(a.namespace)) ||
              ((e.handleObj = a),
              (e.data = a.data),
              void 0 !==
                (r = (
                  (p.event.special[a.origType] || {}).handle || a.handler
                ).apply(o.elem, u)) &&
                !1 === (e.result = r) &&
                (e.preventDefault(), e.stopPropagation()));
        return c.postDispatch && c.postDispatch.call(this, e), e.result;
      }
    },
    handlers: function (e, t) {
      var n,
        r,
        i,
        o,
        a = [],
        s = t.delegateCount,
        u = e.target;
      if (
        s &&
        u.nodeType &&
        ("click" !== e.type || isNaN(e.button) || e.button < 1)
      ) {
        for (; u != this; u = u.parentNode || this)
          if (1 === u.nodeType && (!0 !== u.disabled || "click" !== e.type)) {
            for (r = [], n = 0; s > n; n++)
              void 0 === r[(i = (o = t[n]).selector + " ")] &&
                (r[i] = o.needsContext
                  ? p(i, this).index(u) > -1
                  : p.find(i, this, null, [u]).length),
                r[i] && r.push(o);
            r.length && a.push({ elem: u, handlers: r });
          }
      }
      return s < t.length && a.push({ elem: this, handlers: t.slice(s) }), a;
    },
    fix: function (e) {
      if (e[p.expando]) return e;
      var t,
        n,
        i,
        o = e.type,
        a = e,
        s = this.fixHooks[o];
      for (
        s ||
          (this.fixHooks[o] = s =
            eu.test(o) ? this.mouseHooks : es.test(o) ? this.keyHooks : {}),
          i = s.props ? this.props.concat(s.props) : this.props,
          e = new p.Event(a),
          t = i.length;
        t--;

      )
        e[(n = i[t])] = a[n];
      return (
        e.target || (e.target = a.srcElement || r),
        3 === e.target.nodeType && (e.target = e.target.parentNode),
        (e.metaKey = !!e.metaKey),
        s.filter ? s.filter(e, a) : e
      );
    },
    props:
      "altKey bubbles cancelable ctrlKey currentTarget detail eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(
        " "
      ),
    fixHooks: {},
    keyHooks: {
      props: "char charCode key keyCode".split(" "),
      filter: function (e, t) {
        return (
          null == e.which &&
            (e.which = null != t.charCode ? t.charCode : t.keyCode),
          e
        );
      },
    },
    mouseHooks: {
      props:
        "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(
          " "
        ),
      filter: function (e, t) {
        var n,
          i,
          o,
          a = t.button,
          s = t.fromElement;
        return (
          null == e.pageX &&
            null != t.clientX &&
            ((o = (i = e.target.ownerDocument || r).documentElement),
            (n = i.body),
            (e.pageX =
              t.clientX +
              ((o && o.scrollLeft) || (n && n.scrollLeft) || 0) -
              ((o && o.clientLeft) || (n && n.clientLeft) || 0)),
            (e.pageY =
              t.clientY +
              ((o && o.scrollTop) || (n && n.scrollTop) || 0) -
              ((o && o.clientTop) || (n && n.clientTop) || 0))),
          !e.relatedTarget &&
            s &&
            (e.relatedTarget = s === e.target ? t.toElement : s),
          e.which ||
            void 0 === a ||
            (e.which = 1 & a ? 1 : 2 & a ? 3 : 4 & a ? 2 : 0),
          e
        );
      },
    },
    special: {
      load: { noBubble: !0 },
      focus: {
        trigger: function () {
          if (this !== ep() && this.focus)
            try {
              return this.focus(), !1;
            } catch (e) {}
        },
        delegateType: "focusin",
      },
      blur: {
        trigger: function () {
          return this === ep() && this.blur ? (this.blur(), !1) : void 0;
        },
        delegateType: "focusout",
      },
      click: {
        trigger: function () {
          return p.nodeName(this, "input") &&
            "checkbox" === this.type &&
            this.click
            ? (this.click(), !1)
            : void 0;
        },
        _default: function (e) {
          return p.nodeName(e.target, "a");
        },
      },
      beforeunload: {
        postDispatch: function (e) {
          void 0 !== e.result &&
            e.originalEvent &&
            (e.originalEvent.returnValue = e.result);
        },
      },
    },
    simulate: function (e, t, n) {
      var r = p.extend(new p.Event(), n, { type: e, isSimulated: !0 });
      p.event.trigger(r, null, t), r.isDefaultPrevented() && n.preventDefault();
    },
  }),
    (p.removeEvent = r.removeEventListener
      ? function (e, t, n) {
          e.removeEventListener && e.removeEventListener(t, n);
        }
      : function (e, t, n) {
          var r = "on" + t;
          e.detachEvent &&
            (void 0 === e[r] && (e[r] = null), e.detachEvent(r, n));
        }),
    (p.Event = function (e, t) {
      return this instanceof p.Event
        ? (e && e.type
            ? ((this.originalEvent = e),
              (this.type = e.type),
              (this.isDefaultPrevented =
                e.defaultPrevented ||
                (void 0 === e.defaultPrevented && !1 === e.returnValue)
                  ? ed
                  : ef))
            : (this.type = e),
          t && p.extend(this, t),
          (this.timeStamp = (e && e.timeStamp) || p.now()),
          void (this[p.expando] = !0))
        : new p.Event(e, t);
    }),
    (p.Event.prototype = {
      constructor: p.Event,
      isDefaultPrevented: ef,
      isPropagationStopped: ef,
      isImmediatePropagationStopped: ef,
      preventDefault: function () {
        var e = this.originalEvent;
        (this.isDefaultPrevented = ed),
          e && (e.preventDefault ? e.preventDefault() : (e.returnValue = !1));
      },
      stopPropagation: function () {
        var e = this.originalEvent;
        (this.isPropagationStopped = ed),
          e &&
            !this.isSimulated &&
            (e.stopPropagation && e.stopPropagation(), (e.cancelBubble = !0));
      },
      stopImmediatePropagation: function () {
        var e = this.originalEvent;
        (this.isImmediatePropagationStopped = ed),
          e && e.stopImmediatePropagation && e.stopImmediatePropagation(),
          this.stopPropagation();
      },
    }),
    p.each(
      {
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout",
      },
      function (e, t) {
        p.event.special[e] = {
          delegateType: t,
          bindType: t,
          handle: function (e) {
            var n,
              r = e.relatedTarget,
              i = e.handleObj;
            return (
              (r && (r === this || p.contains(this, r))) ||
                ((e.type = i.origType),
                (n = i.handler.apply(this, arguments)),
                (e.type = t)),
              n
            );
          },
        };
      }
    ),
    d.submit ||
      (p.event.special.submit = {
        setup: function () {
          return (
            !p.nodeName(this, "form") &&
            void p.event.add(
              this,
              "click._submit keypress._submit",
              function (e) {
                var t = e.target,
                  n =
                    p.nodeName(t, "input") || p.nodeName(t, "button")
                      ? p.prop(t, "form")
                      : void 0;
                n &&
                  !p._data(n, "submit") &&
                  (p.event.add(n, "submit._submit", function (e) {
                    e._submitBubble = !0;
                  }),
                  p._data(n, "submit", !0));
              }
            )
          );
        },
        postDispatch: function (e) {
          e._submitBubble &&
            (delete e._submitBubble,
            this.parentNode &&
              !e.isTrigger &&
              p.event.simulate("submit", this.parentNode, e));
        },
        teardown: function () {
          return (
            !p.nodeName(this, "form") && void p.event.remove(this, "._submit")
          );
        },
      }),
    d.change ||
      (p.event.special.change = {
        setup: function () {
          return ea.test(this.nodeName)
            ? (("checkbox" !== this.type && "radio" !== this.type) ||
                (p.event.add(this, "propertychange._change", function (e) {
                  "checked" === e.originalEvent.propertyName &&
                    (this._justChanged = !0);
                }),
                p.event.add(this, "click._change", function (e) {
                  this._justChanged && !e.isTrigger && (this._justChanged = !1),
                    p.event.simulate("change", this, e);
                })),
              !1)
            : void p.event.add(this, "beforeactivate._change", function (e) {
                var t = e.target;
                ea.test(t.nodeName) &&
                  !p._data(t, "change") &&
                  (p.event.add(t, "change._change", function (e) {
                    !this.parentNode ||
                      e.isSimulated ||
                      e.isTrigger ||
                      p.event.simulate("change", this.parentNode, e);
                  }),
                  p._data(t, "change", !0));
              });
        },
        handle: function (e) {
          var t = e.target;
          return this !== t ||
            e.isSimulated ||
            e.isTrigger ||
            ("radio" !== t.type && "checkbox" !== t.type)
            ? e.handleObj.handler.apply(this, arguments)
            : void 0;
        },
        teardown: function () {
          return p.event.remove(this, "._change"), !ea.test(this.nodeName);
        },
      }),
    d.focusin ||
      p.each({ focus: "focusin", blur: "focusout" }, function (e, t) {
        var n = function (e) {
          p.event.simulate(t, e.target, p.event.fix(e));
        };
        p.event.special[t] = {
          setup: function () {
            var r = this.ownerDocument || this,
              i = p._data(r, t);
            i || r.addEventListener(e, n, !0), p._data(r, t, (i || 0) + 1);
          },
          teardown: function () {
            var r = this.ownerDocument || this,
              i = p._data(r, t) - 1;
            i
              ? p._data(r, t, i)
              : (r.removeEventListener(e, n, !0), p._removeData(r, t));
          },
        };
      }),
    p.fn.extend({
      on: function (e, t, n, r) {
        return eh(this, e, t, n, r);
      },
      one: function (e, t, n, r) {
        return eh(this, e, t, n, r, 1);
      },
      off: function (e, t, n) {
        var r, i;
        if (e && e.preventDefault && e.handleObj)
          return (
            (r = e.handleObj),
            p(e.delegateTarget).off(
              r.namespace ? r.origType + "." + r.namespace : r.origType,
              r.selector,
              r.handler
            ),
            this
          );
        if ("object" == typeof e) {
          for (i in e) this.off(i, t, e[i]);
          return this;
        }
        return (
          (!1 !== t && "function" != typeof t) || ((n = t), (t = void 0)),
          !1 === n && (n = ef),
          this.each(function () {
            p.event.remove(this, e, n, t);
          })
        );
      },
      trigger: function (e, t) {
        return this.each(function () {
          p.event.trigger(e, t, this);
        });
      },
      triggerHandler: function (e, t) {
        var n = this[0];
        return n ? p.event.trigger(e, t, n, !0) : void 0;
      },
    });
  var em,
    eg,
    ev,
    ey,
    e$ = / jQuery\d+="(?:null|\d+)"/g,
    eb = RegExp("<(?:" + Q + ")[\\s/>]", "i"),
    ex =
      /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:-]+)[^>]*)\/>/gi,
    e_ = /<script|<style|<link/i,
    ew = /checked\s*(?:[^=]|=\s*.checked.)/i,
    eT = /^true\/(.*)/,
    eC = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
    eN = K(r).appendChild(r.createElement("div"));
  function ek(e, t) {
    return p.nodeName(e, "table") &&
      p.nodeName(11 !== t.nodeType ? t : t.firstChild, "tr")
      ? e.getElementsByTagName("tbody")[0] ||
          e.appendChild(e.ownerDocument.createElement("tbody"))
      : e;
  }
  function eE(e) {
    return (e.type = (null !== p.find.attr(e, "type")) + "/" + e.type), e;
  }
  function eS(e) {
    var t = eT.exec(e.type);
    return t ? (e.type = t[1]) : e.removeAttribute("type"), e;
  }
  function eA(e, t) {
    if (1 === t.nodeType && p.hasData(e)) {
      var n,
        r,
        i,
        o = p._data(e),
        a = p._data(t, o),
        s = o.events;
      if (s)
        for (n in (delete a.handle, (a.events = {}), s))
          for (r = 0, i = s[n].length; i > r; r++) p.event.add(t, n, s[n][r]);
      a.data && (a.data = p.extend({}, a.data));
    }
  }
  function eD(e, t) {
    var n, r, i;
    if (1 === t.nodeType) {
      if (((n = t.nodeName.toLowerCase()), !d.noCloneEvent && t[p.expando])) {
        for (r in (i = p._data(t)).events) p.removeEvent(t, r, i.handle);
        t.removeAttribute(p.expando);
      }
      "script" === n && t.text !== e.text
        ? ((eE(t).text = e.text), eS(t))
        : "object" === n
        ? (t.parentNode && (t.outerHTML = e.outerHTML),
          d.html5Clone &&
            e.innerHTML &&
            !p.trim(t.innerHTML) &&
            (t.innerHTML = e.innerHTML))
        : "input" === n && V.test(e.type)
        ? ((t.defaultChecked = t.checked = e.checked),
          t.value !== e.value && (t.value = e.value))
        : "option" === n
        ? (t.defaultSelected = t.selected = e.defaultSelected)
        : ("input" !== n && "textarea" !== n) ||
          (t.defaultValue = e.defaultValue);
    }
  }
  function ej(e, t, n, r) {
    t = o.apply([], t);
    var i,
      a,
      s,
      u,
      l,
      c,
      f = 0,
      h = e.length,
      m = h - 1,
      g = t[0],
      v = p.isFunction(g);
    if (v || (h > 1 && "string" == typeof g && !d.checkClone && ew.test(g)))
      return e.each(function (i) {
        var o = e.eq(i);
        v && (t[0] = g.call(this, i, o.html())), ej(o, t, n, r);
      });
    if (
      h &&
      ((i = (c = eo(t, e[0].ownerDocument, !1, e, r)).firstChild),
      1 === c.childNodes.length && (c = i),
      i || r)
    ) {
      for (s = (u = p.map(ee(c, "script"), eE)).length; h > f; f++)
        (a = c),
          f !== m &&
            ((a = p.clone(a, !0, !0)), s && p.merge(u, ee(a, "script"))),
          n.call(e[f], a, f);
      if (s)
        for (l = u[u.length - 1].ownerDocument, p.map(u, eS), f = 0; s > f; f++)
          (a = u[f]),
            J.test(a.type || "") &&
              !p._data(a, "globalEval") &&
              p.contains(l, a) &&
              (a.src
                ? p._evalUrl && p._evalUrl(a.src)
                : p.globalEval(
                    (a.text || a.textContent || a.innerHTML || "").replace(
                      eC,
                      ""
                    )
                  ));
      c = i = null;
    }
    return e;
  }
  function eL(e, t, n) {
    for (var r, i = t ? p.filter(t, e) : e, o = 0; null != (r = i[o]); o++)
      n || 1 !== r.nodeType || p.cleanData(ee(r)),
        r.parentNode &&
          (n && p.contains(r.ownerDocument, r) && et(ee(r, "script")),
          r.parentNode.removeChild(r));
    return e;
  }
  p.extend({
    htmlPrefilter: function (e) {
      return e.replace(ex, "<$1></$2>");
    },
    clone: function (e, t, n) {
      var r,
        i,
        o,
        a,
        s,
        u = p.contains(e.ownerDocument, e);
      if (
        (d.html5Clone || p.isXMLDoc(e) || !eb.test("<" + e.nodeName + ">")
          ? (o = e.cloneNode(!0))
          : ((eN.innerHTML = e.outerHTML), eN.removeChild((o = eN.firstChild))),
        !(
          (d.noCloneEvent && d.noCloneChecked) ||
          (1 !== e.nodeType && 11 !== e.nodeType) ||
          p.isXMLDoc(e)
        ))
      )
        for (r = ee(o), s = ee(e), a = 0; null != (i = s[a]); ++a)
          r[a] && eD(i, r[a]);
      if (t) {
        if (n)
          for (s = s || ee(e), r = r || ee(o), a = 0; null != (i = s[a]); a++)
            eA(i, r[a]);
        else eA(e, o);
      }
      return (
        (r = ee(o, "script")).length > 0 && et(r, !u && ee(e, "script")),
        (r = s = i = null),
        o
      );
    },
    cleanData: function (e, t) {
      for (
        var r,
          i,
          o,
          a,
          s = 0,
          u = p.expando,
          l = p.cache,
          c = d.attributes,
          f = p.event.special;
        null != (r = e[s]);
        s++
      )
        if ((t || H(r)) && (a = (o = r[u]) && l[o])) {
          if (a.events)
            for (i in a.events)
              f[i] ? p.event.remove(r, i) : p.removeEvent(r, i, a.handle);
          l[o] &&
            (delete l[o],
            c || void 0 === r.removeAttribute
              ? (r[u] = void 0)
              : r.removeAttribute(u),
            n.push(o));
        }
    },
  }),
    p.fn.extend({
      domManip: ej,
      detach: function (e) {
        return eL(this, e, !0);
      },
      remove: function (e) {
        return eL(this, e);
      },
      text: function (e) {
        return U(
          this,
          function (e) {
            return void 0 === e
              ? p.text(this)
              : this.empty().append(
                  ((this[0] && this[0].ownerDocument) || r).createTextNode(e)
                );
          },
          null,
          e,
          arguments.length
        );
      },
      append: function () {
        return ej(this, arguments, function (e) {
          (1 === this.nodeType ||
            11 === this.nodeType ||
            9 === this.nodeType) &&
            ek(this, e).appendChild(e);
        });
      },
      prepend: function () {
        return ej(this, arguments, function (e) {
          if (
            1 === this.nodeType ||
            11 === this.nodeType ||
            9 === this.nodeType
          ) {
            var t = ek(this, e);
            t.insertBefore(e, t.firstChild);
          }
        });
      },
      before: function () {
        return ej(this, arguments, function (e) {
          this.parentNode && this.parentNode.insertBefore(e, this);
        });
      },
      after: function () {
        return ej(this, arguments, function (e) {
          this.parentNode && this.parentNode.insertBefore(e, this.nextSibling);
        });
      },
      empty: function () {
        for (var e, t = 0; null != (e = this[t]); t++) {
          for (1 === e.nodeType && p.cleanData(ee(e, !1)); e.firstChild; )
            e.removeChild(e.firstChild);
          e.options && p.nodeName(e, "select") && (e.options.length = 0);
        }
        return this;
      },
      clone: function (e, t) {
        return (
          (e = null != e && e),
          (t = null == t ? e : t),
          this.map(function () {
            return p.clone(this, e, t);
          })
        );
      },
      html: function (e) {
        return U(
          this,
          function (e) {
            var t = this[0] || {},
              n = 0,
              r = this.length;
            if (void 0 === e)
              return 1 === t.nodeType ? t.innerHTML.replace(e$, "") : void 0;
            if (
              "string" == typeof e &&
              !e_.test(e) &&
              (d.htmlSerialize || !eb.test(e)) &&
              (d.leadingWhitespace || !G.test(e)) &&
              !Z[(Y.exec(e) || ["", ""])[1].toLowerCase()]
            ) {
              e = p.htmlPrefilter(e);
              try {
                for (; r > n; n++)
                  (t = this[n] || {}),
                    1 === t.nodeType &&
                      (p.cleanData(ee(t, !1)), (t.innerHTML = e));
                t = 0;
              } catch (i) {}
            }
            t && this.empty().append(e);
          },
          null,
          e,
          arguments.length
        );
      },
      replaceWith: function () {
        var e = [];
        return ej(
          this,
          arguments,
          function (t) {
            var n = this.parentNode;
            0 > p.inArray(this, e) &&
              (p.cleanData(ee(this)), n && n.replaceChild(t, this));
          },
          e
        );
      },
    }),
    p.each(
      {
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith",
      },
      function (e, t) {
        p.fn[e] = function (e) {
          for (var n, r = 0, i = [], o = p(e), s = o.length - 1; s >= r; r++)
            (n = r === s ? this : this.clone(!0)),
              p(o[r])[t](n),
              a.apply(i, n.get());
          return this.pushStack(i);
        };
      }
    );
  var eH,
    eq,
    e8,
    eO = { HTML: "block", BODY: "block" };
  function eM(e, t) {
    var n = p(t.createElement(e)).appendTo(t.body),
      r = p.css(n[0], "display");
    return n.detach(), r;
  }
  function eF(e) {
    var t = r,
      n = eO[e];
    return (
      n ||
        (("none" !== (n = eM(e, t)) && n) ||
          ((t = (
            (e8 = (
              e8 || p("<iframe frameborder='0' width='0' height='0'/>")
            ).appendTo(t.documentElement))[0].contentWindow ||
            e8[0].contentDocument
          ).document).write(),
          t.close(),
          (n = eM(e, t)),
          e8.detach()),
        (eO[e] = n)),
      n
    );
  }
  var e0 = /^margin/,
    eP = RegExp("^(" + W + ")(?!px)[a-z%]+$", "i"),
    eB = function (e, t, n, r) {
      var i,
        o,
        a = {};
      for (o in t) (a[o] = e.style[o]), (e.style[o] = t[o]);
      for (o in ((i = n.apply(e, r || [])), t)) e.style[o] = a[o];
      return i;
    },
    eW = r.documentElement;
  !(function () {
    var t,
      n,
      i,
      o,
      a,
      s,
      u = r.createElement("div"),
      l = r.createElement("div");
    if (l.style) {
      (l.style.cssText = "float:left;opacity:.5"),
        (d.opacity = "0.5" === l.style.opacity),
        (d.cssFloat = !!l.style.cssFloat),
        (l.style.backgroundClip = "content-box"),
        (l.cloneNode(!0).style.backgroundClip = ""),
        (d.clearCloneStyle = "content-box" === l.style.backgroundClip),
        ((u = r.createElement("div")).style.cssText =
          "border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute"),
        (l.innerHTML = ""),
        u.appendChild(l),
        (d.boxSizing =
          "" === l.style.boxSizing ||
          "" === l.style.MozBoxSizing ||
          "" === l.style.WebkitBoxSizing),
        p.extend(d, {
          reliableHiddenOffsets: function () {
            return null == t && c(), o;
          },
          boxSizingReliable: function () {
            return null == t && c(), i;
          },
          pixelMarginRight: function () {
            return null == t && c(), n;
          },
          pixelPosition: function () {
            return null == t && c(), t;
          },
          reliableMarginRight: function () {
            return null == t && c(), a;
          },
          reliableMarginLeft: function () {
            return null == t && c(), s;
          },
        });
      function c() {
        var c,
          d,
          f = r.documentElement;
        f.appendChild(u),
          (l.style.cssText =
            "-webkit-box-sizing:border-box;box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%"),
          (t = i = s = !1),
          (n = a = !0),
          e.getComputedStyle &&
            ((t = "1%" !== ((d = e.getComputedStyle(l)) || {}).top),
            (s = "2px" === (d || {}).marginLeft),
            (i = "4px" === (d || { width: "4px" }).width),
            (l.style.marginRight = "50%"),
            (n = "4px" === (d || { marginRight: "4px" }).marginRight),
            ((c = l.appendChild(r.createElement("div"))).style.cssText =
              l.style.cssText =
                "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0"),
            (c.style.marginRight = c.style.width = "0"),
            (l.style.width = "1px"),
            (a = !parseFloat((e.getComputedStyle(c) || {}).marginRight)),
            l.removeChild(c)),
          (l.style.display = "none"),
          (o = 0 === l.getClientRects().length) &&
            ((l.style.display = ""),
            (l.innerHTML = "<table><tr><td></td><td>t</td></tr></table>"),
            (l.childNodes[0].style.borderCollapse = "separate"),
            ((c = l.getElementsByTagName("td"))[0].style.cssText =
              "margin:0;border:0;padding:0;display:none"),
            (o = 0 === c[0].offsetHeight) &&
              ((c[0].style.display = ""),
              (c[1].style.display = "none"),
              (o = 0 === c[0].offsetHeight))),
          f.removeChild(u);
      }
    }
  })();
  var eI,
    e9,
    ez = /^(top|right|bottom|left)$/;
  function eR(e, t) {
    return {
      get: function () {
        return e()
          ? void delete this.get
          : (this.get = t).apply(this, arguments);
      },
    };
  }
  e.getComputedStyle
    ? ((eI = function (t) {
        var n = t.ownerDocument.defaultView;
        return (n && n.opener) || (n = e), n.getComputedStyle(t);
      }),
      (e9 = function (e, t, n) {
        var r,
          i,
          o,
          a,
          s = e.style;
        return (
          ("" !==
            (a = (n = n || eI(e)) ? n.getPropertyValue(t) || n[t] : void 0) &&
            void 0 !== a) ||
            p.contains(e.ownerDocument, e) ||
            (a = p.style(e, t)),
          n &&
            !d.pixelMarginRight() &&
            eP.test(a) &&
            e0.test(t) &&
            ((r = s.width),
            (i = s.minWidth),
            (o = s.maxWidth),
            (s.minWidth = s.maxWidth = s.width = a),
            (a = n.width),
            (s.width = r),
            (s.minWidth = i),
            (s.maxWidth = o)),
          void 0 === a ? a : a + ""
        );
      }))
    : eW.currentStyle &&
      ((eI = function (e) {
        return e.currentStyle;
      }),
      (e9 = function (e, t, n) {
        var r,
          i,
          o,
          a,
          s = e.style;
        return (
          null == (a = (n = n || eI(e)) ? n[t] : void 0) &&
            s &&
            s[t] &&
            (a = s[t]),
          eP.test(a) &&
            !ez.test(t) &&
            ((r = s.left),
            (o = (i = e.runtimeStyle) && i.left) &&
              (i.left = e.currentStyle.left),
            (s.left = "fontSize" === t ? "1em" : a),
            (a = s.pixelLeft + "px"),
            (s.left = r),
            o && (i.left = o)),
          void 0 === a ? a : a + "" || "auto"
        );
      }));
  var e1 = /alpha\([^)]*\)/i,
    e2 = /opacity\s*=\s*([^)]*)/i,
    eX = /^(none|table(?!-c[ea]).+)/,
    e3 = RegExp("^(" + W + ")(.*)$", "i"),
    e7 = { position: "absolute", visibility: "hidden", display: "block" },
    eU = { letterSpacing: "0", fontWeight: "400" },
    eV = ["Webkit", "O", "Moz", "ms"],
    e4 = r.createElement("div").style;
  function e6(e) {
    if (e in e4) return e;
    for (var t = e.charAt(0).toUpperCase() + e.slice(1), n = eV.length; n--; )
      if ((e = eV[n] + t) in e4) return e;
  }
  function eY(e, t) {
    for (var n, r, i, o = [], a = 0, s = e.length; s > a; a++)
      (r = e[a]).style &&
        ((o[a] = p._data(r, "olddisplay")),
        (n = r.style.display),
        t
          ? (o[a] || "none" !== n || (r.style.display = ""),
            "" === r.style.display &&
              R(r) &&
              (o[a] = p._data(r, "olddisplay", eF(r.nodeName))))
          : ((i = R(r)),
            ((n && "none" !== n) || !i) &&
              p._data(r, "olddisplay", i ? n : p.css(r, "display"))));
    for (a = 0; s > a; a++)
      (r = e[a]).style &&
        ((t && "none" !== r.style.display && "" !== r.style.display) ||
          (r.style.display = t ? o[a] || "" : "none"));
    return e;
  }
  function eJ(e, t, n) {
    var r = e3.exec(t);
    return r ? Math.max(0, r[1] - (n || 0)) + (r[2] || "px") : t;
  }
  function eG(e, t, n, r, i) {
    for (
      var o = n === (r ? "border" : "content") ? 4 : "width" === t ? 1 : 0,
        a = 0;
      4 > o;
      o += 2
    )
      "margin" === n && (a += p.css(e, n + z[o], !0, i)),
        r
          ? ("content" === n && (a -= p.css(e, "padding" + z[o], !0, i)),
            "margin" !== n && (a -= p.css(e, "border" + z[o] + "Width", !0, i)))
          : ((a += p.css(e, "padding" + z[o], !0, i)),
            "padding" !== n &&
              (a += p.css(e, "border" + z[o] + "Width", !0, i)));
    return a;
  }
  function eQ(e, t, n) {
    var r = !0,
      i = "width" === t ? e.offsetWidth : e.offsetHeight,
      o = eI(e),
      a = d.boxSizing && "border-box" === p.css(e, "boxSizing", !1, o);
    if (0 >= i || null == i) {
      if (
        ((0 > (i = e9(e, t, o)) || null == i) && (i = e.style[t]), eP.test(i))
      )
        return i;
      (r = a && (d.boxSizingReliable() || i === e.style[t])),
        (i = parseFloat(i) || 0);
    }
    return i + eG(e, t, n || (a ? "border" : "content"), r, o) + "px";
  }
  function eK(e, t, n, r, i) {
    return new eK.prototype.init(e, t, n, r, i);
  }
  p.extend({
    cssHooks: {
      opacity: {
        get: function (e, t) {
          if (t) {
            var n = e9(e, "opacity");
            return "" === n ? "1" : n;
          }
        },
      },
    },
    cssNumber: {
      animationIterationCount: !0,
      columnCount: !0,
      fillOpacity: !0,
      flexGrow: !0,
      flexShrink: !0,
      fontWeight: !0,
      lineHeight: !0,
      opacity: !0,
      order: !0,
      orphans: !0,
      widows: !0,
      zIndex: !0,
      zoom: !0,
    },
    cssProps: { float: d.cssFloat ? "cssFloat" : "styleFloat" },
    style: function (e, t, n, r) {
      if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
        var i,
          o,
          a,
          s = p.camelCase(t),
          u = e.style;
        if (
          ((t = p.cssProps[s] || (p.cssProps[s] = e6(s) || s)),
          (a = p.cssHooks[t] || p.cssHooks[s]),
          void 0 === n)
        )
          return a && "get" in a && void 0 !== (i = a.get(e, !1, r)) ? i : u[t];
        if (
          ("string" == (o = typeof n) &&
            (i = I.exec(n)) &&
            i[1] &&
            ((n = X(e, t, i)), (o = "number")),
          null != n &&
            n == n &&
            ("number" === o &&
              (n += (i && i[3]) || (p.cssNumber[s] ? "" : "px")),
            d.clearCloneStyle ||
              "" !== n ||
              0 !== t.indexOf("background") ||
              (u[t] = "inherit"),
            !(a && "set" in a && void 0 === (n = a.set(e, n, r)))))
        )
          try {
            u[t] = n;
          } catch (l) {}
      }
    },
    css: function (e, t, n, r) {
      var i,
        o,
        a,
        s = p.camelCase(t);
      return (
        (t = p.cssProps[s] || (p.cssProps[s] = e6(s) || s)),
        (a = p.cssHooks[t] || p.cssHooks[s]) &&
          "get" in a &&
          (o = a.get(e, !0, n)),
        void 0 === o && (o = e9(e, t, r)),
        "normal" === o && t in eU && (o = eU[t]),
        "" === n || n
          ? ((i = parseFloat(o)), !0 === n || isFinite(i) ? i || 0 : o)
          : o
      );
    },
  }),
    p.each(["height", "width"], function (e, t) {
      p.cssHooks[t] = {
        get: function (e, n, r) {
          return n
            ? eX.test(p.css(e, "display")) && 0 === e.offsetWidth
              ? eB(e, e7, function () {
                  return eQ(e, t, r);
                })
              : eQ(e, t, r)
            : void 0;
        },
        set: function (e, n, r) {
          var i = r && eI(e);
          return eJ(
            e,
            n,
            r
              ? eG(
                  e,
                  t,
                  r,
                  d.boxSizing && "border-box" === p.css(e, "boxSizing", !1, i),
                  i
                )
              : 0
          );
        },
      };
    }),
    d.opacity ||
      (p.cssHooks.opacity = {
        get: function (e, t) {
          return e2.test(
            (t && e.currentStyle ? e.currentStyle.filter : e.style.filter) || ""
          )
            ? 0.01 * parseFloat(RegExp.$1) + ""
            : t
            ? "1"
            : "";
        },
        set: function (e, t) {
          var n = e.style,
            r = e.currentStyle,
            i = p.isNumeric(t) ? "alpha(opacity=" + 100 * t + ")" : "",
            o = (r && r.filter) || n.filter || "";
          (n.zoom = 1),
            ((t >= 1 || "" === t) &&
              "" === p.trim(o.replace(e1, "")) &&
              n.removeAttribute &&
              (n.removeAttribute("filter"), "" === t || (r && !r.filter))) ||
              (n.filter = e1.test(o) ? o.replace(e1, i) : o + " " + i);
        },
      }),
    (p.cssHooks.marginRight = eR(d.reliableMarginRight, function (e, t) {
      return t
        ? eB(e, { display: "inline-block" }, e9, [e, "marginRight"])
        : void 0;
    })),
    (p.cssHooks.marginLeft = eR(d.reliableMarginLeft, function (e, t) {
      return t
        ? (parseFloat(e9(e, "marginLeft")) ||
            (p.contains(e.ownerDocument, e)
              ? e.getBoundingClientRect().left -
                eB(e, { marginLeft: 0 }, function () {
                  return e.getBoundingClientRect().left;
                })
              : 0)) + "px"
        : void 0;
    })),
    p.each({ margin: "", padding: "", border: "Width" }, function (e, t) {
      (p.cssHooks[e + t] = {
        expand: function (n) {
          for (
            var r = 0, i = {}, o = "string" == typeof n ? n.split(" ") : [n];
            4 > r;
            r++
          )
            i[e + z[r] + t] = o[r] || o[r - 2] || o[0];
          return i;
        },
      }),
        e0.test(e) || (p.cssHooks[e + t].set = eJ);
    }),
    p.fn.extend({
      css: function (e, t) {
        return U(
          this,
          function (e, t, n) {
            var r,
              i,
              o = {},
              a = 0;
            if (p.isArray(t)) {
              for (r = eI(e), i = t.length; i > a; a++)
                o[t[a]] = p.css(e, t[a], !1, r);
              return o;
            }
            return void 0 !== n ? p.style(e, t, n) : p.css(e, t);
          },
          e,
          t,
          arguments.length > 1
        );
      },
      show: function () {
        return eY(this, !0);
      },
      hide: function () {
        return eY(this);
      },
      toggle: function (e) {
        return "boolean" == typeof e
          ? e
            ? this.show()
            : this.hide()
          : this.each(function () {
              R(this) ? p(this).show() : p(this).hide();
            });
      },
    }),
    (p.Tween = eK),
    (eK.prototype = {
      constructor: eK,
      init: function (e, t, n, r, i, o) {
        (this.elem = e),
          (this.prop = n),
          (this.easing = i || p.easing._default),
          (this.options = t),
          (this.start = this.now = this.cur()),
          (this.end = r),
          (this.unit = o || (p.cssNumber[n] ? "" : "px"));
      },
      cur: function () {
        var e = eK.propHooks[this.prop];
        return e && e.get ? e.get(this) : eK.propHooks._default.get(this);
      },
      run: function (e) {
        var t,
          n = eK.propHooks[this.prop];
        return (
          this.options.duration
            ? (this.pos = t =
                p.easing[this.easing](
                  e,
                  this.options.duration * e,
                  0,
                  1,
                  this.options.duration
                ))
            : (this.pos = t = e),
          (this.now = (this.end - this.start) * t + this.start),
          this.options.step &&
            this.options.step.call(this.elem, this.now, this),
          n && n.set ? n.set(this) : eK.propHooks._default.set(this),
          this
        );
      },
    }),
    (eK.prototype.init.prototype = eK.prototype),
    (eK.propHooks = {
      _default: {
        get: function (e) {
          var t;
          return 1 !== e.elem.nodeType ||
            (null != e.elem[e.prop] && null == e.elem.style[e.prop])
            ? e.elem[e.prop]
            : (t = p.css(e.elem, e.prop, "")) && "auto" !== t
            ? t
            : 0;
        },
        set: function (e) {
          p.fx.step[e.prop]
            ? p.fx.step[e.prop](e)
            : 1 === e.elem.nodeType &&
              (null != e.elem.style[p.cssProps[e.prop]] || p.cssHooks[e.prop])
            ? p.style(e.elem, e.prop, e.now + e.unit)
            : (e.elem[e.prop] = e.now);
        },
      },
    }),
    (eK.propHooks.scrollTop = eK.propHooks.scrollLeft =
      {
        set: function (e) {
          e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now);
        },
      }),
    (p.easing = {
      linear: function (e) {
        return e;
      },
      swing: function (e) {
        return 0.5 - Math.cos(e * Math.PI) / 2;
      },
      _default: "swing",
    }),
    (p.fx = eK.prototype.init),
    (p.fx.step = {});
  var e5,
    eZ,
    te = /^(?:toggle|show|hide)$/,
    tt = /queueHooks$/;
  function tn() {
    return (
      e.setTimeout(function () {
        e5 = void 0;
      }),
      (e5 = p.now())
    );
  }
  function tr(e, t) {
    var n,
      r = { height: e },
      i = 0;
    for (t = t ? 1 : 0; 4 > i; i += 2 - t)
      r["margin" + (n = z[i])] = r["padding" + n] = e;
    return t && (r.opacity = r.width = e), r;
  }
  function ti(e, t, n) {
    for (
      var r,
        i = (to.tweeners[t] || []).concat(to.tweeners["*"]),
        o = 0,
        a = i.length;
      a > o;
      o++
    )
      if ((r = i[o].call(n, t, e))) return r;
  }
  function to(e, t, n) {
    var r,
      i,
      o = 0,
      a = to.prefilters.length,
      s = p.Deferred().always(function () {
        delete u.elem;
      }),
      u = function () {
        if (i) return !1;
        for (
          var t = e5 || tn(),
            n = Math.max(0, l.startTime + l.duration - t),
            r = n / l.duration || 0,
            o = 1 - r,
            a = 0,
            u = l.tweens.length;
          u > a;
          a++
        )
          l.tweens[a].run(o);
        return (
          s.notifyWith(e, [l, o, n]),
          1 > o && u ? n : (s.resolveWith(e, [l]), !1)
        );
      },
      l = s.promise({
        elem: e,
        props: p.extend({}, t),
        opts: p.extend(!0, { specialEasing: {}, easing: p.easing._default }, n),
        originalProperties: t,
        originalOptions: n,
        startTime: e5 || tn(),
        duration: n.duration,
        tweens: [],
        createTween: function (t, n) {
          var r = p.Tween(
            e,
            l.opts,
            t,
            n,
            l.opts.specialEasing[t] || l.opts.easing
          );
          return l.tweens.push(r), r;
        },
        stop: function (t) {
          var n = 0,
            r = t ? l.tweens.length : 0;
          if (i) return this;
          for (i = !0; r > n; n++) l.tweens[n].run(1);
          return (
            t
              ? (s.notifyWith(e, [l, 1, 0]), s.resolveWith(e, [l, t]))
              : s.rejectWith(e, [l, t]),
            this
          );
        },
      }),
      c = l.props;
    for (
      (function e(t, n) {
        var r, i, o, a, s;
        for (r in t)
          if (
            ((o = n[(i = p.camelCase(r))]),
            (a = t[r]),
            p.isArray(a) && ((o = a[1]), (a = t[r] = a[0])),
            r !== i && ((t[i] = a), delete t[r]),
            (s = p.cssHooks[i]) && ("expand" in s))
          )
            for (r in ((a = s.expand(a)), delete t[i], a))
              (r in t) || ((t[r] = a[r]), (n[r] = o));
          else n[i] = o;
      })(c, l.opts.specialEasing);
      a > o;
      o++
    )
      if ((r = to.prefilters[o].call(l, e, c, l.opts)))
        return (
          p.isFunction(r.stop) &&
            (p._queueHooks(l.elem, l.opts.queue).stop = p.proxy(r.stop, r)),
          r
        );
    return (
      p.map(c, ti, l),
      p.isFunction(l.opts.start) && l.opts.start.call(e, l),
      p.fx.timer(p.extend(u, { elem: e, anim: l, queue: l.opts.queue })),
      l
        .progress(l.opts.progress)
        .done(l.opts.done, l.opts.complete)
        .fail(l.opts.fail)
        .always(l.opts.always)
    );
  }
  (p.Animation = p.extend(to, {
    tweeners: {
      "*": [
        function (e, t) {
          var n = this.createTween(e, t);
          return X(n.elem, e, I.exec(t), n), n;
        },
      ],
    },
    tweener: function (e, t) {
      p.isFunction(e) ? ((t = e), (e = ["*"])) : (e = e.match(D));
      for (var n, r = 0, i = e.length; i > r; r++)
        (n = e[r]),
          (to.tweeners[n] = to.tweeners[n] || []),
          to.tweeners[n].unshift(t);
    },
    prefilters: [
      function e(t, n, r) {
        var i,
          o,
          a,
          s,
          u,
          l,
          c,
          f,
          h = this,
          m = {},
          g = t.style,
          v = t.nodeType && R(t),
          y = p._data(t, "fxshow");
        for (i in (r.queue ||
          (null == (u = p._queueHooks(t, "fx")).unqueued &&
            ((u.unqueued = 0),
            (l = u.empty.fire),
            (u.empty.fire = function () {
              u.unqueued || l();
            })),
          u.unqueued++,
          h.always(function () {
            h.always(function () {
              u.unqueued--, p.queue(t, "fx").length || u.empty.fire();
            });
          })),
        1 === t.nodeType &&
          ("height" in n || "width" in n) &&
          ((r.overflow = [g.overflow, g.overflowX, g.overflowY]),
          "inline" ===
            (f =
              "none" === (c = p.css(t, "display"))
                ? p._data(t, "olddisplay") || eF(t.nodeName)
                : c) &&
            "none" === p.css(t, "float") &&
            (d.inlineBlockNeedsLayout && "inline" !== eF(t.nodeName)
              ? (g.zoom = 1)
              : (g.display = "inline-block"))),
        r.overflow &&
          ((g.overflow = "hidden"),
          d.shrinkWrapBlocks() ||
            h.always(function () {
              (g.overflow = r.overflow[0]),
                (g.overflowX = r.overflow[1]),
                (g.overflowY = r.overflow[2]);
            })),
        n))
          if (((o = n[i]), te.exec(o))) {
            if (
              (delete n[i],
              (a = a || "toggle" === o),
              o === (v ? "hide" : "show"))
            ) {
              if ("show" !== o || !y || void 0 === y[i]) continue;
              v = !0;
            }
            m[i] = (y && y[i]) || p.style(t, i);
          } else c = void 0;
        if (p.isEmptyObject(m))
          "inline" === ("none" === c ? eF(t.nodeName) : c) && (g.display = c);
        else
          for (i in (y
            ? "hidden" in y && (v = y.hidden)
            : (y = p._data(t, "fxshow", {})),
          a && (y.hidden = !v),
          v
            ? p(t).show()
            : h.done(function () {
                p(t).hide();
              }),
          h.done(function () {
            var e;
            for (e in (p._removeData(t, "fxshow"), m)) p.style(t, e, m[e]);
          }),
          m))
            (s = ti(v ? y[i] : 0, i, h)),
              i in y ||
                ((y[i] = s.start),
                v &&
                  ((s.end = s.start),
                  (s.start = "width" === i || "height" === i ? 1 : 0)));
      },
    ],
    prefilter: function (e, t) {
      t ? to.prefilters.unshift(e) : to.prefilters.push(e);
    },
  })),
    (p.speed = function (e, t, n) {
      var r =
        e && "object" == typeof e
          ? p.extend({}, e)
          : {
              complete: n || (!n && t) || (p.isFunction(e) && e),
              duration: e,
              easing: (n && t) || (t && !p.isFunction(t) && t),
            };
      return (
        (r.duration = p.fx.off
          ? 0
          : "number" == typeof r.duration
          ? r.duration
          : r.duration in p.fx.speeds
          ? p.fx.speeds[r.duration]
          : p.fx.speeds._default),
        (null != r.queue && !0 !== r.queue) || (r.queue = "fx"),
        (r.old = r.complete),
        (r.complete = function () {
          p.isFunction(r.old) && r.old.call(this),
            r.queue && p.dequeue(this, r.queue);
        }),
        r
      );
    }),
    p.fn.extend({
      fadeTo: function (e, t, n, r) {
        return this.filter(R)
          .css("opacity", 0)
          .show()
          .end()
          .animate({ opacity: t }, e, n, r);
      },
      animate: function (e, t, n, r) {
        var i = p.isEmptyObject(e),
          o = p.speed(t, n, r),
          a = function () {
            var t = to(this, p.extend({}, e), o);
            (i || p._data(this, "finish")) && t.stop(!0);
          };
        return (
          (a.finish = a),
          i || !1 === o.queue ? this.each(a) : this.queue(o.queue, a)
        );
      },
      stop: function (e, t, n) {
        var r = function (e) {
          var t = e.stop;
          delete e.stop, t(n);
        };
        return (
          "string" != typeof e && ((n = t), (t = e), (e = void 0)),
          t && !1 !== e && this.queue(e || "fx", []),
          this.each(function () {
            var t = !0,
              i = null != e && e + "queueHooks",
              o = p.timers,
              a = p._data(this);
            if (i) a[i] && a[i].stop && r(a[i]);
            else for (i in a) a[i] && a[i].stop && tt.test(i) && r(a[i]);
            for (i = o.length; i--; )
              o[i].elem !== this ||
                (null != e && o[i].queue !== e) ||
                (o[i].anim.stop(n), (t = !1), o.splice(i, 1));
            (!t && n) || p.dequeue(this, e);
          })
        );
      },
      finish: function (e) {
        return (
          !1 !== e && (e = e || "fx"),
          this.each(function () {
            var t,
              n = p._data(this),
              r = n[e + "queue"],
              i = n[e + "queueHooks"],
              o = p.timers,
              a = r ? r.length : 0;
            for (
              n.finish = !0,
                p.queue(this, e, []),
                i && i.stop && i.stop.call(this, !0),
                t = o.length;
              t--;

            )
              o[t].elem === this &&
                o[t].queue === e &&
                (o[t].anim.stop(!0), o.splice(t, 1));
            for (t = 0; a > t; t++)
              r[t] && r[t].finish && r[t].finish.call(this);
            delete n.finish;
          })
        );
      },
    }),
    p.each(["toggle", "show", "hide"], function (e, t) {
      var n = p.fn[t];
      p.fn[t] = function (e, r, i) {
        return null == e || "boolean" == typeof e
          ? n.apply(this, arguments)
          : this.animate(tr(t, !0), e, r, i);
      };
    }),
    p.each(
      {
        slideDown: tr("show"),
        slideUp: tr("hide"),
        slideToggle: tr("toggle"),
        fadeIn: { opacity: "show" },
        fadeOut: { opacity: "hide" },
        fadeToggle: { opacity: "toggle" },
      },
      function (e, t) {
        p.fn[e] = function (e, n, r) {
          return this.animate(t, e, n, r);
        };
      }
    ),
    (p.timers = []),
    (p.fx.tick = function () {
      var e,
        t = p.timers,
        n = 0;
      for (e5 = p.now(); n < t.length; n++)
        (e = t[n])() || t[n] !== e || t.splice(n--, 1);
      t.length || p.fx.stop(), (e5 = void 0);
    }),
    (p.fx.timer = function (e) {
      p.timers.push(e), e() ? p.fx.start() : p.timers.pop();
    }),
    (p.fx.interval = 13),
    (p.fx.start = function () {
      eZ || (eZ = e.setInterval(p.fx.tick, p.fx.interval));
    }),
    (p.fx.stop = function () {
      e.clearInterval(eZ), (eZ = null);
    }),
    (p.fx.speeds = { slow: 600, fast: 200, _default: 400 }),
    (p.fn.delay = function (t, n) {
      return (
        (t = (p.fx && p.fx.speeds[t]) || t),
        (n = n || "fx"),
        this.queue(n, function (n, r) {
          var i = e.setTimeout(n, t);
          r.stop = function () {
            e.clearTimeout(i);
          };
        })
      );
    }),
    (tl = r.createElement("input")),
    (tc = r.createElement("div")),
    (tf = (td = r.createElement("select")).appendChild(
      r.createElement("option")
    )),
    (tc = r.createElement("div")).setAttribute("className", "t"),
    (tc.innerHTML =
      "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>"),
    (tu = tc.getElementsByTagName("a")[0]),
    tl.setAttribute("type", "checkbox"),
    tc.appendChild(tl),
    ((tu = tc.getElementsByTagName("a")[0]).style.cssText = "top:1px"),
    (d.getSetAttribute = "t" !== tc.className),
    (d.style = /top/.test(tu.getAttribute("style"))),
    (d.hrefNormalized = "/a" === tu.getAttribute("href")),
    (d.checkOn = !!tl.value),
    (d.optSelected = tf.selected),
    (d.enctype = !!r.createElement("form").enctype),
    (td.disabled = !0),
    (d.optDisabled = !tf.disabled),
    (tl = r.createElement("input")).setAttribute("value", ""),
    (d.input = "" === tl.getAttribute("value")),
    (tl.value = "t"),
    tl.setAttribute("type", "radio"),
    (d.radioValue = "t" === tl.value);
  var ta = /\r/g,
    ts = /[\x20\t\r\n\f]+/g;
  p.fn.extend({
    val: function (e) {
      var t,
        n,
        r,
        i = this[0];
      return arguments.length
        ? ((r = p.isFunction(e)),
          this.each(function (n) {
            var i;
            1 === this.nodeType &&
              (null == (i = r ? e.call(this, n, p(this).val()) : e)
                ? (i = "")
                : "number" == typeof i
                ? (i += "")
                : p.isArray(i) &&
                  (i = p.map(i, function (e) {
                    return null == e ? "" : e + "";
                  })),
              ((t =
                p.valHooks[this.type] ||
                p.valHooks[this.nodeName.toLowerCase()]) &&
                "set" in t &&
                void 0 !== t.set(this, i, "value")) ||
                (this.value = i));
          }))
        : i
        ? (t = p.valHooks[i.type] || p.valHooks[i.nodeName.toLowerCase()]) &&
          "get" in t &&
          void 0 !== (n = t.get(i, "value"))
          ? n
          : "string" == typeof (n = i.value)
          ? n.replace(ta, "")
          : null == n
          ? ""
          : n
        : void 0;
    },
  }),
    p.extend({
      valHooks: {
        option: {
          get: function (e) {
            var t = p.find.attr(e, "value");
            return null != t ? t : p.trim(p.text(e)).replace(ts, " ");
          },
        },
        select: {
          get: function (e) {
            for (
              var t,
                n,
                r = e.options,
                i = e.selectedIndex,
                o = "select-one" === e.type || 0 > i,
                a = o ? null : [],
                s = o ? i + 1 : r.length,
                u = 0 > i ? s : o ? i : 0;
              s > u;
              u++
            )
              if (
                ((n = r[u]).selected || u === i) &&
                (d.optDisabled
                  ? !n.disabled
                  : null === n.getAttribute("disabled")) &&
                (!n.parentNode.disabled ||
                  !p.nodeName(n.parentNode, "optgroup"))
              ) {
                if (((t = p(n).val()), o)) return t;
                a.push(t);
              }
            return a;
          },
          set: function (e, t) {
            for (
              var n, r, i = e.options, o = p.makeArray(t), a = i.length;
              a--;

            )
              if (((r = i[a]), p.inArray(p.valHooks.option.get(r), o) > -1))
                try {
                  r.selected = n = !0;
                } catch (s) {
                  r.scrollHeight;
                }
              else r.selected = !1;
            return n || (e.selectedIndex = -1), i;
          },
        },
      },
    }),
    p.each(["radio", "checkbox"], function () {
      (p.valHooks[this] = {
        set: function (e, t) {
          return p.isArray(t)
            ? (e.checked = p.inArray(p(e).val(), t) > -1)
            : void 0;
        },
      }),
        d.checkOn ||
          (p.valHooks[this].get = function (e) {
            return null === e.getAttribute("value") ? "on" : e.value;
          });
    });
  var tu,
    tl,
    tc,
    td,
    tf,
    tp,
    th,
    tm = p.expr.attrHandle,
    tg = /^(?:checked|selected)$/i,
    tv = d.getSetAttribute,
    ty = d.input;
  p.fn.extend({
    attr: function (e, t) {
      return U(this, p.attr, e, t, arguments.length > 1);
    },
    removeAttr: function (e) {
      return this.each(function () {
        p.removeAttr(this, e);
      });
    },
  }),
    p.extend({
      attr: function (e, t, n) {
        var r,
          i,
          o = e.nodeType;
        if (3 !== o && 8 !== o && 2 !== o)
          return void 0 === e.getAttribute
            ? p.prop(e, t, n)
            : ((1 === o && p.isXMLDoc(e)) ||
                ((t = t.toLowerCase()),
                (i = p.attrHooks[t] || (p.expr.match.bool.test(t) ? th : tp))),
              void 0 !== n
                ? null === n
                  ? void p.removeAttr(e, t)
                  : i && "set" in i && void 0 !== (r = i.set(e, n, t))
                  ? r
                  : (e.setAttribute(t, n + ""), n)
                : i && "get" in i && null !== (r = i.get(e, t))
                ? r
                : null == (r = p.find.attr(e, t))
                ? void 0
                : r);
      },
      attrHooks: {
        type: {
          set: function (e, t) {
            if (!d.radioValue && "radio" === t && p.nodeName(e, "input")) {
              var n = e.value;
              return e.setAttribute("type", t), n && (e.value = n), t;
            }
          },
        },
      },
      removeAttr: function (e, t) {
        var n,
          r,
          i = 0,
          o = t && t.match(D);
        if (o && 1 === e.nodeType)
          for (; (n = o[i++]); )
            (r = p.propFix[n] || n),
              p.expr.match.bool.test(n)
                ? (ty && tv) || !tg.test(n)
                  ? (e[r] = !1)
                  : (e[p.camelCase("default-" + n)] = e[r] = !1)
                : p.attr(e, n, ""),
              e.removeAttribute(tv ? n : r);
      },
    }),
    (th = {
      set: function (e, t, n) {
        return (
          !1 === t
            ? p.removeAttr(e, n)
            : (ty && tv) || !tg.test(n)
            ? e.setAttribute((!tv && p.propFix[n]) || n, n)
            : (e[p.camelCase("default-" + n)] = e[n] = !0),
          n
        );
      },
    }),
    p.each(p.expr.match.bool.source.match(/\w+/g), function (e, t) {
      var n = tm[t] || p.find.attr;
      (ty && tv) || !tg.test(t)
        ? (tm[t] = function (e, t, r) {
            var i, o;
            return (
              r ||
                ((o = tm[t]),
                (tm[t] = i),
                (i = null != n(e, t, r) ? t.toLowerCase() : null),
                (tm[t] = o)),
              i
            );
          })
        : (tm[t] = function (e, t, n) {
            return n
              ? void 0
              : e[p.camelCase("default-" + t)]
              ? t.toLowerCase()
              : null;
          });
    }),
    (ty && tv) ||
      (p.attrHooks.value = {
        set: function (e, t, n) {
          return p.nodeName(e, "input")
            ? void (e.defaultValue = t)
            : tp && tp.set(e, t, n);
        },
      }),
    tv ||
      ((tp = {
        set: function (e, t, n) {
          var r = e.getAttributeNode(n);
          return (
            r || e.setAttributeNode((r = e.ownerDocument.createAttribute(n))),
            (r.value = t += ""),
            "value" === n || t === e.getAttribute(n) ? t : void 0
          );
        },
      }),
      (tm.id =
        tm.name =
        tm.coords =
          function (e, t, n) {
            var r;
            return n
              ? void 0
              : (r = e.getAttributeNode(t)) && "" !== r.value
              ? r.value
              : null;
          }),
      (p.valHooks.button = {
        get: function (e, t) {
          var n = e.getAttributeNode(t);
          return n && n.specified ? n.value : void 0;
        },
        set: tp.set,
      }),
      (p.attrHooks.contenteditable = {
        set: function (e, t, n) {
          tp.set(e, "" !== t && t, n);
        },
      }),
      p.each(["width", "height"], function (e, t) {
        p.attrHooks[t] = {
          set: function (e, n) {
            return "" === n ? (e.setAttribute(t, "auto"), n) : void 0;
          },
        };
      })),
    d.style ||
      (p.attrHooks.style = {
        get: function (e) {
          return e.style.cssText || void 0;
        },
        set: function (e, t) {
          return (e.style.cssText = t + "");
        },
      });
  var t$ = /^(?:input|select|textarea|button|object)$/i,
    tb = /^(?:a|area)$/i;
  p.fn.extend({
    prop: function (e, t) {
      return U(this, p.prop, e, t, arguments.length > 1);
    },
    removeProp: function (e) {
      return (
        (e = p.propFix[e] || e),
        this.each(function () {
          try {
            (this[e] = void 0), delete this[e];
          } catch (t) {}
        })
      );
    },
  }),
    p.extend({
      prop: function (e, t, n) {
        var r,
          i,
          o = e.nodeType;
        if (3 !== o && 8 !== o && 2 !== o)
          return (
            (1 === o && p.isXMLDoc(e)) ||
              ((t = p.propFix[t] || t), (i = p.propHooks[t])),
            void 0 !== n
              ? i && "set" in i && void 0 !== (r = i.set(e, n, t))
                ? r
                : (e[t] = n)
              : i && "get" in i && null !== (r = i.get(e, t))
              ? r
              : e[t]
          );
      },
      propHooks: {
        tabIndex: {
          get: function (e) {
            var t = p.find.attr(e, "tabindex");
            return t
              ? parseInt(t, 10)
              : t$.test(e.nodeName) || (tb.test(e.nodeName) && e.href)
              ? 0
              : -1;
          },
        },
      },
      propFix: { for: "htmlFor", class: "className" },
    }),
    d.hrefNormalized ||
      p.each(["href", "src"], function (e, t) {
        p.propHooks[t] = {
          get: function (e) {
            return e.getAttribute(t, 4);
          },
        };
      }),
    d.optSelected ||
      (p.propHooks.selected = {
        get: function (e) {
          var t = e.parentNode;
          return (
            t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex),
            null
          );
        },
        set: function (e) {
          var t = e.parentNode;
          t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex);
        },
      }),
    p.each(
      [
        "tabIndex",
        "readOnly",
        "maxLength",
        "cellSpacing",
        "cellPadding",
        "rowSpan",
        "colSpan",
        "useMap",
        "frameBorder",
        "contentEditable",
      ],
      function () {
        p.propFix[this.toLowerCase()] = this;
      }
    ),
    d.enctype || (p.propFix.enctype = "encoding");
  var tx = /[\t\r\n\f]/g;
  function t_(e) {
    return p.attr(e, "class") || "";
  }
  p.fn.extend({
    addClass: function (e) {
      var t,
        n,
        r,
        i,
        o,
        a,
        s,
        u = 0;
      if (p.isFunction(e))
        return this.each(function (t) {
          p(this).addClass(e.call(this, t, t_(this)));
        });
      if ("string" == typeof e && e) {
        for (t = e.match(D) || []; (n = this[u++]); )
          if (
            ((i = t_(n)),
            (r = 1 === n.nodeType && (" " + i + " ").replace(tx, " ")))
          ) {
            for (a = 0; (o = t[a++]); )
              0 > r.indexOf(" " + o + " ") && (r += o + " ");
            i !== (s = p.trim(r)) && p.attr(n, "class", s);
          }
      }
      return this;
    },
    removeClass: function (e) {
      var t,
        n,
        r,
        i,
        o,
        a,
        s,
        u = 0;
      if (p.isFunction(e))
        return this.each(function (t) {
          p(this).removeClass(e.call(this, t, t_(this)));
        });
      if (!arguments.length) return this.attr("class", "");
      if ("string" == typeof e && e) {
        for (t = e.match(D) || []; (n = this[u++]); )
          if (
            ((i = t_(n)),
            (r = 1 === n.nodeType && (" " + i + " ").replace(tx, " ")))
          ) {
            for (a = 0; (o = t[a++]); )
              for (; r.indexOf(" " + o + " ") > -1; )
                r = r.replace(" " + o + " ", " ");
            i !== (s = p.trim(r)) && p.attr(n, "class", s);
          }
      }
      return this;
    },
    toggleClass: function (e, t) {
      var n = typeof e;
      return "boolean" == typeof t && "string" === n
        ? t
          ? this.addClass(e)
          : this.removeClass(e)
        : p.isFunction(e)
        ? this.each(function (n) {
            p(this).toggleClass(e.call(this, n, t_(this), t), t);
          })
        : this.each(function () {
            var t, r, i, o;
            if ("string" === n)
              for (r = 0, i = p(this), o = e.match(D) || []; (t = o[r++]); )
                i.hasClass(t) ? i.removeClass(t) : i.addClass(t);
            else
              (void 0 !== e && "boolean" !== n) ||
                ((t = t_(this)) && p._data(this, "__className__", t),
                p.attr(
                  this,
                  "class",
                  t || !1 === e ? "" : p._data(this, "__className__") || ""
                ));
          });
    },
    hasClass: function (e) {
      var t,
        n,
        r = 0;
      for (t = " " + e + " "; (n = this[r++]); )
        if (
          1 === n.nodeType &&
          (" " + t_(n) + " ").replace(tx, " ").indexOf(t) > -1
        )
          return !0;
      return !1;
    },
  }),
    p.each(
      "blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(
        " "
      ),
      function (e, t) {
        p.fn[t] = function (e, n) {
          return arguments.length > 0
            ? this.on(t, null, e, n)
            : this.trigger(t);
        };
      }
    ),
    p.fn.extend({
      hover: function (e, t) {
        return this.mouseenter(e).mouseleave(t || e);
      },
    });
  var tw = e.location,
    tT = p.now(),
    tC = /\?/,
    tN =
      /(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g;
  (p.parseJSON = function (t) {
    if (e.JSON && e.JSON.parse) return e.JSON.parse(t + "");
    var n,
      r = null,
      i = p.trim(t + "");
    return i &&
      !p.trim(
        i.replace(tN, function (e, t, i, o) {
          return (
            n && t && (r = 0), 0 === r ? e : ((n = i || t), (r += !o - !i), "")
          );
        })
      )
      ? Function("return " + i)()
      : p.error("Invalid JSON: " + t);
  }),
    (p.parseXML = function (t) {
      var n, r;
      if (!t || "string" != typeof t) return null;
      try {
        e.DOMParser
          ? (n = (r = new e.DOMParser()).parseFromString(t, "text/xml"))
          : (((n = new e.ActiveXObject("Microsoft.XMLDOM")).async = "false"),
            n.loadXML(t));
      } catch (i) {
        n = void 0;
      }
      return (
        (n &&
          n.documentElement &&
          !n.getElementsByTagName("parsererror").length) ||
          p.error("Invalid XML: " + t),
        n
      );
    });
  var tk = /#.*$/,
    tE = /([?&])_=[^&]*/,
    tS = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm,
    tA = /^(?:GET|HEAD)$/,
    tD = /^\/\//,
    tj = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,
    tL = {},
    tH = {},
    tq = "*/".concat("*"),
    t8 = tw.href,
    tO = tj.exec(t8.toLowerCase()) || [];
  function tM(e) {
    return function (t, n) {
      "string" != typeof t && ((n = t), (t = "*"));
      var r,
        i = 0,
        o = t.toLowerCase().match(D) || [];
      if (p.isFunction(n))
        for (; (r = o[i++]); )
          "+" === r.charAt(0)
            ? (e[(r = r.slice(1) || "*")] = e[r] || []).unshift(n)
            : (e[r] = e[r] || []).push(n);
    };
  }
  function tF(e, t, n, r) {
    var i = {},
      o = e === tH;
    function a(s) {
      var u;
      return (
        (i[s] = !0),
        p.each(e[s] || [], function (e, s) {
          var l = s(t, n, r);
          return "string" != typeof l || o || i[l]
            ? o
              ? !(u = l)
              : void 0
            : (t.dataTypes.unshift(l), a(l), !1);
        }),
        u
      );
    }
    return a(t.dataTypes[0]) || (!i["*"] && a("*"));
  }
  function t0(e, t) {
    var n,
      r,
      i = p.ajaxSettings.flatOptions || {};
    for (r in t) void 0 !== t[r] && ((i[r] ? e : n || (n = {}))[r] = t[r]);
    return n && p.extend(!0, e, n), e;
  }
  function tP(e) {
    return (e.style && e.style.display) || p.css(e, "display");
  }
  p.extend({
    active: 0,
    lastModified: {},
    etag: {},
    ajaxSettings: {
      url: t8,
      type: "GET",
      isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(
        tO[1]
      ),
      global: !0,
      processData: !0,
      async: !0,
      contentType: "application/x-www-form-urlencoded; charset=UTF-8",
      accepts: {
        "*": tq,
        text: "text/plain",
        html: "text/html",
        xml: "application/xml, text/xml",
        json: "application/json, text/javascript",
      },
      contents: { xml: /\bxml\b/, html: /\bhtml/, json: /\bjson\b/ },
      responseFields: {
        xml: "responseXML",
        text: "responseText",
        json: "responseJSON",
      },
      converters: {
        "* text": String,
        "text html": !0,
        "text json": p.parseJSON,
        "text xml": p.parseXML,
      },
      flatOptions: { url: !0, context: !0 },
    },
    ajaxSetup: function (e, t) {
      return t ? t0(t0(e, p.ajaxSettings), t) : t0(p.ajaxSettings, e);
    },
    ajaxPrefilter: tM(tL),
    ajaxTransport: tM(tH),
    ajax: function (t, n) {
      "object" == typeof t && ((n = t), (t = void 0)), (n = n || {});
      var r,
        i,
        o,
        a,
        s,
        u,
        l,
        c,
        d = p.ajaxSetup({}, n),
        f = d.context || d,
        h = d.context && (f.nodeType || f.jquery) ? p(f) : p.event,
        m = p.Deferred(),
        g = p.Callbacks("once memory"),
        v = d.statusCode || {},
        y = {},
        $ = {},
        b = 0,
        x = "canceled",
        _ = {
          readyState: 0,
          getResponseHeader: function (e) {
            var t;
            if (2 === b) {
              if (!c)
                for (c = {}; (t = tS.exec(a)); ) c[t[1].toLowerCase()] = t[2];
              t = c[e.toLowerCase()];
            }
            return null == t ? null : t;
          },
          getAllResponseHeaders: function () {
            return 2 === b ? a : null;
          },
          setRequestHeader: function (e, t) {
            var n = e.toLowerCase();
            return b || (y[(e = $[n] = $[n] || e)] = t), this;
          },
          overrideMimeType: function (e) {
            return b || (d.mimeType = e), this;
          },
          statusCode: function (e) {
            var t;
            if (e) {
              if (2 > b) for (t in e) v[t] = [v[t], e[t]];
              else _.always(e[_.status]);
            }
            return this;
          },
          abort: function (e) {
            var t = e || x;
            return l && l.abort(t), T(0, t), this;
          },
        };
      if (
        ((m.promise(_).complete = g.add),
        (_.success = _.done),
        (_.error = _.fail),
        (d.url = ((t || d.url || t8) + "")
          .replace(tk, "")
          .replace(tD, tO[1] + "//")),
        (d.type = n.method || n.type || d.method || d.type),
        (d.dataTypes = p
          .trim(d.dataType || "*")
          .toLowerCase()
          .match(D) || [""]),
        null == d.crossDomain &&
          ((r = tj.exec(d.url.toLowerCase())),
          (d.crossDomain = !(
            !r ||
            (r[1] === tO[1] &&
              r[2] === tO[2] &&
              (r[3] || ("http:" === r[1] ? "80" : "443")) ===
                (tO[3] || ("http:" === tO[1] ? "80" : "443")))
          ))),
        d.data &&
          d.processData &&
          "string" != typeof d.data &&
          (d.data = p.param(d.data, d.traditional)),
        tF(tL, d, n, _),
        2 === b)
      )
        return _;
      for (i in ((u = p.event && d.global) &&
        0 == p.active++ &&
        p.event.trigger("ajaxStart"),
      (d.type = d.type.toUpperCase()),
      (d.hasContent = !tA.test(d.type)),
      (o = d.url),
      d.hasContent ||
        (d.data &&
          ((o = d.url += (tC.test(o) ? "&" : "?") + d.data), delete d.data),
        !1 === d.cache &&
          (d.url = tE.test(o)
            ? o.replace(tE, "$1_=" + tT++)
            : o + (tC.test(o) ? "&" : "?") + "_=" + tT++)),
      d.ifModified &&
        (p.lastModified[o] &&
          _.setRequestHeader("If-Modified-Since", p.lastModified[o]),
        p.etag[o] && _.setRequestHeader("If-None-Match", p.etag[o])),
      ((d.data && d.hasContent && !1 !== d.contentType) || n.contentType) &&
        _.setRequestHeader("Content-Type", d.contentType),
      _.setRequestHeader(
        "Accept",
        d.dataTypes[0] && d.accepts[d.dataTypes[0]]
          ? d.accepts[d.dataTypes[0]] +
              ("*" !== d.dataTypes[0] ? ", " + tq + "; q=0.01" : "")
          : d.accepts["*"]
      ),
      d.headers))
        _.setRequestHeader(i, d.headers[i]);
      if (d.beforeSend && (!1 === d.beforeSend.call(f, _, d) || 2 === b))
        return _.abort();
      for (i in ((x = "abort"), { success: 1, error: 1, complete: 1 }))
        _[i](d[i]);
      if ((l = tF(tH, d, n, _))) {
        if (((_.readyState = 1), u && h.trigger("ajaxSend", [_, d]), 2 === b))
          return _;
        d.async &&
          d.timeout > 0 &&
          (s = e.setTimeout(function () {
            _.abort("timeout");
          }, d.timeout));
        try {
          (b = 1), l.send(y, T);
        } catch (w) {
          if (!(2 > b)) throw w;
          T(-1, w);
        }
      } else T(-1, "No Transport");
      function T(t, n, r, i) {
        var c,
          y,
          $,
          x,
          w,
          T = n;
        2 !== b &&
          ((b = 2),
          s && e.clearTimeout(s),
          (l = void 0),
          (a = i || ""),
          (_.readyState = t > 0 ? 4 : 0),
          (c = (t >= 200 && 300 > t) || 304 === t),
          r &&
            (x = (function e(t, n, r) {
              for (
                var i, o, a, s, u = t.contents, l = t.dataTypes;
                "*" === l[0];

              )
                l.shift(),
                  void 0 === o &&
                    (o = t.mimeType || n.getResponseHeader("Content-Type"));
              if (o) {
                for (s in u)
                  if (u[s] && u[s].test(o)) {
                    l.unshift(s);
                    break;
                  }
              }
              if (l[0] in r) a = l[0];
              else {
                for (s in r) {
                  if (!l[0] || t.converters[s + " " + l[0]]) {
                    a = s;
                    break;
                  }
                  i || (i = s);
                }
                a = a || i;
              }
              return a ? (a !== l[0] && l.unshift(a), r[a]) : void 0;
            })(d, _, r)),
          (x = (function e(t, n, r, i) {
            var o,
              a,
              s,
              u,
              l,
              c = {},
              d = t.dataTypes.slice();
            if (d[1])
              for (s in t.converters) c[s.toLowerCase()] = t.converters[s];
            for (a = d.shift(); a; )
              if (
                (t.responseFields[a] && (r[t.responseFields[a]] = n),
                !l && i && t.dataFilter && (n = t.dataFilter(n, t.dataType)),
                (l = a),
                (a = d.shift()))
              ) {
                if ("*" === a) a = l;
                else if ("*" !== l && l !== a) {
                  if (!(s = c[l + " " + a] || c["* " + a])) {
                    for (o in c)
                      if (
                        (u = o.split(" "))[1] === a &&
                        (s = c[l + " " + u[0]] || c["* " + u[0]])
                      ) {
                        !0 === s
                          ? (s = c[o])
                          : !0 !== c[o] && ((a = u[0]), d.unshift(u[1]));
                        break;
                      }
                  }
                  if (!0 !== s) {
                    if (s && t.throws) n = s(n);
                    else
                      try {
                        n = s(n);
                      } catch (f) {
                        return {
                          state: "parsererror",
                          error: s ? f : "No conversion from " + l + " to " + a,
                        };
                      }
                  }
                }
              }
            return { state: "success", data: n };
          })(d, x, _, c)),
          c
            ? (d.ifModified &&
                ((w = _.getResponseHeader("Last-Modified")) &&
                  (p.lastModified[o] = w),
                (w = _.getResponseHeader("etag")) && (p.etag[o] = w)),
              204 === t || "HEAD" === d.type
                ? (T = "nocontent")
                : 304 === t
                ? (T = "notmodified")
                : ((T = x.state), (y = x.data), (c = !($ = x.error))))
            : (($ = T), (!t && T) || ((T = "error"), 0 > t && (t = 0))),
          (_.status = t),
          (_.statusText = (n || T) + ""),
          c ? m.resolveWith(f, [y, T, _]) : m.rejectWith(f, [_, T, $]),
          _.statusCode(v),
          (v = void 0),
          u && h.trigger(c ? "ajaxSuccess" : "ajaxError", [_, d, c ? y : $]),
          g.fireWith(f, [_, T]),
          u &&
            (h.trigger("ajaxComplete", [_, d]),
            --p.active || p.event.trigger("ajaxStop")));
      }
      return _;
    },
    getJSON: function (e, t, n) {
      return p.get(e, t, n, "json");
    },
    getScript: function (e, t) {
      return p.get(e, void 0, t, "script");
    },
  }),
    p.each(["get", "post"], function (e, t) {
      p[t] = function (e, n, r, i) {
        return (
          p.isFunction(n) && ((i = i || r), (r = n), (n = void 0)),
          p.ajax(
            p.extend(
              { url: e, type: t, dataType: i, data: n, success: r },
              p.isPlainObject(e) && e
            )
          )
        );
      };
    }),
    (p._evalUrl = function (e) {
      return p.ajax({
        url: e,
        type: "GET",
        dataType: "script",
        cache: !0,
        async: !1,
        global: !1,
        throws: !0,
      });
    }),
    p.fn.extend({
      wrapAll: function (e) {
        if (p.isFunction(e))
          return this.each(function (t) {
            p(this).wrapAll(e.call(this, t));
          });
        if (this[0]) {
          var t = p(e, this[0].ownerDocument).eq(0).clone(!0);
          this[0].parentNode && t.insertBefore(this[0]),
            t
              .map(function () {
                for (
                  var e = this;
                  e.firstChild && 1 === e.firstChild.nodeType;

                )
                  e = e.firstChild;
                return e;
              })
              .append(this);
        }
        return this;
      },
      wrapInner: function (e) {
        return p.isFunction(e)
          ? this.each(function (t) {
              p(this).wrapInner(e.call(this, t));
            })
          : this.each(function () {
              var t = p(this),
                n = t.contents();
              n.length ? n.wrapAll(e) : t.append(e);
            });
      },
      wrap: function (e) {
        var t = p.isFunction(e);
        return this.each(function (n) {
          p(this).wrapAll(t ? e.call(this, n) : e);
        });
      },
      unwrap: function () {
        return this.parent()
          .each(function () {
            p.nodeName(this, "body") || p(this).replaceWith(this.childNodes);
          })
          .end();
      },
    }),
    (p.expr.filters.hidden = function (e) {
      return d.reliableHiddenOffsets()
        ? e.offsetWidth <= 0 &&
            e.offsetHeight <= 0 &&
            !e.getClientRects().length
        : (function e(t) {
            if (!p.contains(t.ownerDocument || r, t)) return !0;
            for (; t && 1 === t.nodeType; ) {
              if ("none" === tP(t) || "hidden" === t.type) return !0;
              t = t.parentNode;
            }
            return !1;
          })(e);
    }),
    (p.expr.filters.visible = function (e) {
      return !p.expr.filters.hidden(e);
    });
  var tB = /%20/g,
    tW = /\[\]$/,
    tI = /\r?\n/g,
    t9 = /^(?:submit|button|image|reset|file)$/i,
    tz = /^(?:input|select|textarea|keygen)/i;
  function tR(e, t, n, r) {
    var i;
    if (p.isArray(t))
      p.each(t, function (t, i) {
        n || tW.test(e)
          ? r(e, i)
          : tR(
              e + "[" + ("object" == typeof i && null != i ? t : "") + "]",
              i,
              n,
              r
            );
      });
    else if (n || "object" !== p.type(t)) r(e, t);
    else for (i in t) tR(e + "[" + i + "]", t[i], n, r);
  }
  (p.param = function (e, t) {
    var n,
      r = [],
      i = function (e, t) {
        (t = p.isFunction(t) ? t() : null == t ? "" : t),
          (r[r.length] = encodeURIComponent(e) + "=" + encodeURIComponent(t));
      };
    if (
      (void 0 === t && (t = p.ajaxSettings && p.ajaxSettings.traditional),
      p.isArray(e) || (e.jquery && !p.isPlainObject(e)))
    )
      p.each(e, function () {
        i(this.name, this.value);
      });
    else for (n in e) tR(n, e[n], t, i);
    return r.join("&").replace(tB, "+");
  }),
    p.fn.extend({
      serialize: function () {
        return p.param(this.serializeArray());
      },
      serializeArray: function () {
        return this.map(function () {
          var e = p.prop(this, "elements");
          return e ? p.makeArray(e) : this;
        })
          .filter(function () {
            var e = this.type;
            return (
              this.name &&
              !p(this).is(":disabled") &&
              tz.test(this.nodeName) &&
              !t9.test(e) &&
              (this.checked || !V.test(e))
            );
          })
          .map(function (e, t) {
            var n = p(this).val();
            return null == n
              ? null
              : p.isArray(n)
              ? p.map(n, function (e) {
                  return { name: t.name, value: e.replace(tI, "\r\n") };
                })
              : { name: t.name, value: n.replace(tI, "\r\n") };
          })
          .get();
      },
    }),
    (p.ajaxSettings.xhr =
      void 0 !== e.ActiveXObject
        ? function () {
            return this.isLocal
              ? t7()
              : r.documentMode > 8
              ? t3()
              : (/^(get|post|head|put|delete|options)$/i.test(this.type) &&
                  t3()) ||
                t7();
          }
        : t3);
  var t1 = 0,
    t2 = {},
    tX = p.ajaxSettings.xhr();
  function t3() {
    try {
      return new e.XMLHttpRequest();
    } catch (t) {}
  }
  function t7() {
    try {
      return new e.ActiveXObject("Microsoft.XMLHTTP");
    } catch (t) {}
  }
  e.attachEvent &&
    e.attachEvent("onunload", function () {
      for (var e in t2) t2[e](void 0, !0);
    }),
    (d.cors = !!tX && "withCredentials" in tX),
    (tX = d.ajax = !!tX) &&
      p.ajaxTransport(function (t) {
        if (!t.crossDomain || d.cors) {
          var n;
          return {
            send: function (r, i) {
              var o,
                a = t.xhr(),
                s = ++t1;
              if (
                (a.open(t.type, t.url, t.async, t.username, t.password),
                t.xhrFields)
              )
                for (o in t.xhrFields) a[o] = t.xhrFields[o];
              for (o in (t.mimeType &&
                a.overrideMimeType &&
                a.overrideMimeType(t.mimeType),
              t.crossDomain ||
                r["X-Requested-With"] ||
                (r["X-Requested-With"] = "XMLHttpRequest"),
              r))
                void 0 !== r[o] && a.setRequestHeader(o, r[o] + "");
              a.send((t.hasContent && t.data) || null),
                (n = function (e, r) {
                  var o, u, l;
                  if (n && (r || 4 === a.readyState)) {
                    if (
                      (delete t2[s],
                      (n = void 0),
                      (a.onreadystatechange = p.noop),
                      r)
                    )
                      4 !== a.readyState && a.abort();
                    else {
                      (l = {}),
                        (o = a.status),
                        "string" == typeof a.responseText &&
                          (l.text = a.responseText);
                      try {
                        u = a.statusText;
                      } catch (c) {
                        u = "";
                      }
                      o || !t.isLocal || t.crossDomain
                        ? 1223 === o && (o = 204)
                        : (o = l.text ? 200 : 404);
                    }
                  }
                  l && i(o, u, l, a.getAllResponseHeaders());
                }),
                t.async
                  ? 4 === a.readyState
                    ? e.setTimeout(n)
                    : (a.onreadystatechange = t2[s] = n)
                  : n();
            },
            abort: function () {
              n && n(void 0, !0);
            },
          };
        }
      }),
    p.ajaxSetup({
      accepts: {
        script:
          "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript",
      },
      contents: { script: /\b(?:java|ecma)script\b/ },
      converters: {
        "text script": function (e) {
          return p.globalEval(e), e;
        },
      },
    }),
    p.ajaxPrefilter("script", function (e) {
      void 0 === e.cache && (e.cache = !1),
        e.crossDomain && ((e.type = "GET"), (e.global = !1));
    }),
    p.ajaxTransport("script", function (e) {
      if (e.crossDomain) {
        var t,
          n = r.head || p("head")[0] || r.documentElement;
        return {
          send: function (i, o) {
            ((t = r.createElement("script")).async = !0),
              e.scriptCharset && (t.charset = e.scriptCharset),
              (t.src = e.url),
              (t.onload = t.onreadystatechange =
                function (e, n) {
                  (n ||
                    !t.readyState ||
                    /loaded|complete/.test(t.readyState)) &&
                    ((t.onload = t.onreadystatechange = null),
                    t.parentNode && t.parentNode.removeChild(t),
                    (t = null),
                    n || o(200, "success"));
                }),
              n.insertBefore(t, n.firstChild);
          },
          abort: function () {
            t && t.onload(void 0, !0);
          },
        };
      }
    });
  var tU = [],
    tV = /(=)\?(?=&|$)|\?\?/;
  p.ajaxSetup({
    jsonp: "callback",
    jsonpCallback: function () {
      var e = tU.pop() || p.expando + "_" + tT++;
      return (this[e] = !0), e;
    },
  }),
    p.ajaxPrefilter("json jsonp", function (t, n, r) {
      var i,
        o,
        a,
        s =
          !1 !== t.jsonp &&
          (tV.test(t.url)
            ? "url"
            : "string" == typeof t.data &&
              0 ===
                (t.contentType || "").indexOf(
                  "application/x-www-form-urlencoded"
                ) &&
              tV.test(t.data) &&
              "data");
      return s || "jsonp" === t.dataTypes[0]
        ? ((i = t.jsonpCallback =
            p.isFunction(t.jsonpCallback)
              ? t.jsonpCallback()
              : t.jsonpCallback),
          s
            ? (t[s] = t[s].replace(tV, "$1" + i))
            : !1 !== t.jsonp &&
              (t.url += (tC.test(t.url) ? "&" : "?") + t.jsonp + "=" + i),
          (t.converters["script json"] = function () {
            return a || p.error(i + " was not called"), a[0];
          }),
          (t.dataTypes[0] = "json"),
          (o = e[i]),
          (e[i] = function () {
            a = arguments;
          }),
          r.always(function () {
            void 0 === o ? p(e).removeProp(i) : (e[i] = o),
              t[i] && ((t.jsonpCallback = n.jsonpCallback), tU.push(i)),
              a && p.isFunction(o) && o(a[0]),
              (a = o = void 0);
          }),
          "script")
        : void 0;
    }),
    (p.parseHTML = function (e, t, n) {
      if (!e || "string" != typeof e) return null;
      "boolean" == typeof t && ((n = t), (t = !1)), (t = t || r);
      var i = w.exec(e),
        o = !n && [];
      return i
        ? [t.createElement(i[1])]
        : ((i = eo([e], t, o)),
          o && o.length && p(o).remove(),
          p.merge([], i.childNodes));
    });
  var t4 = p.fn.load;
  function t6(e) {
    return p.isWindow(e)
      ? e
      : 9 === e.nodeType && (e.defaultView || e.parentWindow);
  }
  (p.fn.load = function (e, t, n) {
    if ("string" != typeof e && t4) return t4.apply(this, arguments);
    var r,
      i,
      o,
      a = this,
      s = e.indexOf(" ");
    return (
      s > -1 && ((r = p.trim(e.slice(s, e.length))), (e = e.slice(0, s))),
      p.isFunction(t)
        ? ((n = t), (t = void 0))
        : t && "object" == typeof t && (i = "POST"),
      a.length > 0 &&
        p
          .ajax({ url: e, type: i || "GET", dataType: "html", data: t })
          .done(function (e) {
            (o = arguments),
              a.html(r ? p("<div>").append(p.parseHTML(e)).find(r) : e);
          })
          .always(
            n &&
              function (e, t) {
                a.each(function () {
                  n.apply(this, o || [e.responseText, t, e]);
                });
              }
          ),
      this
    );
  }),
    p.each(
      [
        "ajaxStart",
        "ajaxStop",
        "ajaxComplete",
        "ajaxError",
        "ajaxSuccess",
        "ajaxSend",
      ],
      function (e, t) {
        p.fn[t] = function (e) {
          return this.on(t, e);
        };
      }
    ),
    (p.expr.filters.animated = function (e) {
      return p.grep(p.timers, function (t) {
        return e === t.elem;
      }).length;
    }),
    (p.offset = {
      setOffset: function (e, t, n) {
        var r,
          i,
          o,
          a,
          s,
          u,
          l,
          c = p.css(e, "position"),
          d = p(e),
          f = {};
        "static" === c && (e.style.position = "relative"),
          (s = d.offset()),
          (o = p.css(e, "top")),
          (u = p.css(e, "left")),
          (l =
            ("absolute" === c || "fixed" === c) &&
            p.inArray("auto", [o, u]) > -1)
            ? ((a = (r = d.position()).top), (i = r.left))
            : ((a = parseFloat(o) || 0), (i = parseFloat(u) || 0)),
          p.isFunction(t) && (t = t.call(e, n, p.extend({}, s))),
          null != t.top && (f.top = t.top - s.top + a),
          null != t.left && (f.left = t.left - s.left + i),
          "using" in t ? t.using.call(e, f) : d.css(f);
      },
    }),
    p.fn.extend({
      offset: function (e) {
        if (arguments.length)
          return void 0 === e
            ? this
            : this.each(function (t) {
                p.offset.setOffset(this, e, t);
              });
        var t,
          n,
          r = { top: 0, left: 0 },
          i = this[0],
          o = i && i.ownerDocument;
        if (o)
          return (
            (t = o.documentElement),
            p.contains(t, i)
              ? (void 0 !== i.getBoundingClientRect &&
                  (r = i.getBoundingClientRect()),
                (n = t6(o)),
                {
                  top:
                    r.top + (n.pageYOffset || t.scrollTop) - (t.clientTop || 0),
                  left:
                    r.left +
                    (n.pageXOffset || t.scrollLeft) -
                    (t.clientLeft || 0),
                })
              : r
          );
      },
      position: function () {
        if (this[0]) {
          var e,
            t,
            n = { top: 0, left: 0 },
            r = this[0];
          return (
            "fixed" === p.css(r, "position")
              ? (t = r.getBoundingClientRect())
              : ((e = this.offsetParent()),
                (t = this.offset()),
                p.nodeName(e[0], "html") || (n = e.offset()),
                (n.top += p.css(e[0], "borderTopWidth", !0)),
                (n.left += p.css(e[0], "borderLeftWidth", !0))),
            {
              top: t.top - n.top - p.css(r, "marginTop", !0),
              left: t.left - n.left - p.css(r, "marginLeft", !0),
            }
          );
        }
      },
      offsetParent: function () {
        return this.map(function () {
          for (
            var e = this.offsetParent;
            e && !p.nodeName(e, "html") && "static" === p.css(e, "position");

          )
            e = e.offsetParent;
          return e || eW;
        });
      },
    }),
    p.each(
      { scrollLeft: "pageXOffset", scrollTop: "pageYOffset" },
      function (e, t) {
        var n = /Y/.test(t);
        p.fn[e] = function (r) {
          return U(
            this,
            function (e, r, i) {
              var o = t6(e);
              return void 0 === i
                ? o
                  ? t in o
                    ? o[t]
                    : o.document.documentElement[r]
                  : e[r]
                : void (o
                    ? o.scrollTo(
                        n ? p(o).scrollLeft() : i,
                        n ? i : p(o).scrollTop()
                      )
                    : (e[r] = i));
            },
            e,
            r,
            arguments.length,
            null
          );
        };
      }
    ),
    p.each(["top", "left"], function (e, t) {
      p.cssHooks[t] = eR(d.pixelPosition, function (e, n) {
        return n
          ? ((n = e9(e, t)), eP.test(n) ? p(e).position()[t] + "px" : n)
          : void 0;
      });
    }),
    p.each({ Height: "height", Width: "width" }, function (e, t) {
      p.each(
        { padding: "inner" + e, content: t, "": "outer" + e },
        function (n, r) {
          p.fn[r] = function (r, i) {
            var o = arguments.length && (n || "boolean" != typeof r),
              a = n || (!0 === r || !0 === i ? "margin" : "border");
            return U(
              this,
              function (t, n, r) {
                var i;
                return p.isWindow(t)
                  ? t.document.documentElement["client" + e]
                  : 9 === t.nodeType
                  ? ((i = t.documentElement),
                    Math.max(
                      t.body["scroll" + e],
                      i["scroll" + e],
                      t.body["offset" + e],
                      i["offset" + e],
                      i["client" + e]
                    ))
                  : void 0 === r
                  ? p.css(t, n, a)
                  : p.style(t, n, r, a);
              },
              t,
              o ? r : void 0,
              o,
              null
            );
          };
        }
      );
    }),
    p.fn.extend({
      bind: function (e, t, n) {
        return this.on(e, null, t, n);
      },
      unbind: function (e, t) {
        return this.off(e, null, t);
      },
      delegate: function (e, t, n, r) {
        return this.on(t, e, n, r);
      },
      undelegate: function (e, t, n) {
        return 1 === arguments.length
          ? this.off(e, "**")
          : this.off(t, e || "**", n);
      },
    }),
    (p.fn.size = function () {
      return this.length;
    }),
    (p.fn.andSelf = p.fn.addBack),
    "function" == typeof define &&
      define.amd &&
      define("jquery", [], function () {
        return p;
      });
  var tY = e.jQuery,
    tJ = e.$;
  return (
    (p.noConflict = function (t) {
      return e.$ === p && (e.$ = tJ), t && e.jQuery === p && (e.jQuery = tY), p;
    }),
    t || (e.jQuery = e.$ = p),
    p
  );
});
