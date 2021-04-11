function r(r, n) {
  return (
    (function (r) {
      if (Array.isArray(r)) return r;
    })(r) ||
    (function (r, n) {
      if ("undefined" == typeof Symbol || !(Symbol.iterator in Object(r)))
        return;
      var e = [],
        t = !0,
        o = !1,
        a = void 0;
      try {
        for (
          var l, i = r[Symbol.iterator]();
          !(t = (l = i.next()).done) && (e.push(l.value), !n || e.length !== n);
          t = !0
        );
      } catch (r) {
        (o = !0), (a = r);
      } finally {
        try {
          t || null == i.return || i.return();
        } finally {
          if (o) throw a;
        }
      }
      return e;
    })(r, n) ||
    e(r, n) ||
    (function () {
      throw new TypeError(
        "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
      );
    })()
  );
}
function n(r, n) {
  var t;
  if ("undefined" == typeof Symbol || null == r[Symbol.iterator]) {
    if (
      Array.isArray(r) ||
      (t = e(r)) ||
      (n && r && "number" == typeof r.length)
    ) {
      t && (r = t);
      var o = 0,
        a = function () {};
      return {
        s: a,
        n: function () {
          return o >= r.length ? { done: !0 } : { done: !1, value: r[o++] };
        },
        e: function (r) {
          throw r;
        },
        f: a,
      };
    }
    throw new TypeError(
      "Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
    );
  }
  var l,
    i = !0,
    u = !1;
  return {
    s: function () {
      t = r[Symbol.iterator]();
    },
    n: function () {
      var r = t.next();
      return (i = r.done), r;
    },
    e: function (r) {
      (u = !0), (l = r);
    },
    f: function () {
      try {
        i || null == t.return || t.return();
      } finally {
        if (u) throw l;
      }
    },
  };
}
function e(r, n) {
  if (r) {
    if ("string" == typeof r) return t(r, n);
    var e = Object.prototype.toString.call(r).slice(8, -1);
    return (
      "Object" === e && r.constructor && (e = r.constructor.name),
      "Map" === e || "Set" === e
        ? Array.from(r)
        : "Arguments" === e ||
          /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)
        ? t(r, n)
        : void 0
    );
  }
}
function t(r, n) {
  (null == n || n > r.length) && (n = r.length);
  for (var e = 0, t = new Array(n); e < n; e++) t[e] = r[e];
  return t;
}
for (
  var o = [
      "Annie",
      "Rammus",
      "Darius",
      "Diana",
      "Leona",
      "Maokai",
      "Ivern",
      "Rengar",
    ],
    a = [
      {
        name: "Precision",
        rows: [
          ["A", "B", "C"],
          ["a", "b", "c"],
          ["a", "b", "c"],
          ["a", "b", "c"],
        ],
      },
      {
        name: "Sorcery",
        rows: [
          ["A", "B", "C", "D"],
          ["a", "b", "c"],
          ["a", "b", "c"],
          ["a", "b", "c"],
        ],
      },
      {
        name: "Foo",
        rows: [
          ["A", "B"],
          ["a", "b", "c"],
          ["a", "b", "c", "d"],
          ["a", "b", "c"],
        ],
      },
      {
        name: "Bar",
        rows: [
          ["A", "B", "C", "D", "E"],
          ["a", "b", "c", "d"],
          ["a", "b", "c", "d"],
          ["a", "b"],
        ],
      },
    ],
    l = function (r, n) {
      return Math.floor(Math.random() * (n - r + 1)) + r;
    },
    i = function r(n) {
      if (n.length === o.length)
        throw new RangeError("out already is the same length as CHAMP_LIST");
      var e = l(0, o.length - 1),
        t = o[e];
      return n.includes(t) ? r(n) : n.push(t), n;
    },
    u = function r(n) {
      if (n.length === a.length)
        throw new RangeError("out already is the same length as RUNE_TREES");
      var e = l(0, a.length - 1),
        t = a[e];
      return (
        n.some(function (r) {
          return r.name === t.name;
        })
          ? r(n)
          : n.push(t),
        n
      );
    },
    c = function (r, e) {
      var t,
        o = n(e);
      try {
        for (o.s(); !(t = o.n()).done; ) {
          var a = t.value,
            i = a[l(0, a.length - 1)];
          r.push(i);
        }
      } catch (r) {
        o.e(r);
      } finally {
        o.f();
      }
      return r;
    },
    s = [],
    f = 0;
  f < 3;
  f++
)
  i(s);
console.log("Your champs to choose from:"), console.log(s), console.log();
for (var h = [], y = 0; y < 2; y++) u(h);
var b,
  m = n(h.entries());
try {
  for (m.s(); !(b = m.n()).done; ) {
    var g = r(b.value, 2),
      v = g[0],
      d = g[1],
      p = 0 === v,
      w = [];
    c(w, p ? d.rows : d.rows.slice(1, 4)),
      console.log(
        "Your ".concat(p ? "primary" : "secondary", " rune tree is"),
        d.name
      ),
      console.log("Please use the following configuration", w),
      console.log();
  }
} catch (r) {
  m.e(r);
} finally {
  m.f();
}
for (
  var A = [],
    S = 0,
    E = [
      ["a", "b", "c"],
      ["a", "b", "c"],
      ["a", "b", "c"],
    ];
  S < E.length;
  S++
) {
  var I = E[S],
    R = l(0, I.length - 1);
  A.push(I[R]);
}
console.log("Your stat runes are"), console.log(A);
