var Ze =
    typeof globalThis != 'undefined'
        ? globalThis
        : typeof window != 'undefined'
        ? window
        : typeof global != 'undefined'
        ? global
        : typeof self != 'undefined'
        ? self
        : {}
function Ag(e) {
    if (e.__esModule) return e
    var t = Object.defineProperty({}, '__esModule', { value: !0 })
    return (
        Object.keys(e).forEach(function (r) {
            var n = Object.getOwnPropertyDescriptor(e, r)
            Object.defineProperty(
                t,
                r,
                n.get
                    ? n
                    : {
                          enumerable: !0,
                          get: function () {
                              return e[r]
                          },
                      }
            )
        }),
        t
    )
}
function Ig(e) {
    throw new Error(
        'Could not dynamically require "' +
            e +
            '". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.'
    )
}
var T = { exports: {} },
    ne = {}
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/ var jf = Object.getOwnPropertySymbols,
    Rg = Object.prototype.hasOwnProperty,
    Pg = Object.prototype.propertyIsEnumerable
function Fg(e) {
    if (e == null)
        throw new TypeError(
            'Object.assign cannot be called with null or undefined'
        )
    return Object(e)
}
function Dg() {
    try {
        if (!Object.assign) return !1
        var e = new String('abc')
        if (((e[5] = 'de'), Object.getOwnPropertyNames(e)[0] === '5')) return !1
        for (var t = {}, r = 0; r < 10; r++) t['_' + String.fromCharCode(r)] = r
        var n = Object.getOwnPropertyNames(t).map(function (o) {
            return t[o]
        })
        if (n.join('') !== '0123456789') return !1
        var i = {}
        return (
            'abcdefghijklmnopqrst'.split('').forEach(function (o) {
                i[o] = o
            }),
            Object.keys(Object.assign({}, i)).join('') ===
                'abcdefghijklmnopqrst'
        )
    } catch {
        return !1
    }
}
var Wf = Dg()
    ? Object.assign
    : function (e, t) {
          for (var r, n = Fg(e), i, o = 1; o < arguments.length; o++) {
              r = Object(arguments[o])
              for (var a in r) Rg.call(r, a) && (n[a] = r[a])
              if (jf) {
                  i = jf(r)
                  for (var s = 0; s < i.length; s++)
                      Pg.call(r, i[s]) && (n[i[s]] = r[i[s]])
              }
          }
          return n
      }
/** @license React v17.0.2
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var al = Wf,
    wn = 60103,
    Hf = 60106
ne.Fragment = 60107
ne.StrictMode = 60108
ne.Profiler = 60114
var Vf = 60109,
    Kf = 60110,
    qf = 60112
ne.Suspense = 60113
var Gf = 60115,
    Yf = 60116
if (typeof Symbol == 'function' && Symbol.for) {
    var Dt = Symbol.for
    ;(wn = Dt('react.element')),
        (Hf = Dt('react.portal')),
        (ne.Fragment = Dt('react.fragment')),
        (ne.StrictMode = Dt('react.strict_mode')),
        (ne.Profiler = Dt('react.profiler')),
        (Vf = Dt('react.provider')),
        (Kf = Dt('react.context')),
        (qf = Dt('react.forward_ref')),
        (ne.Suspense = Dt('react.suspense')),
        (Gf = Dt('react.memo')),
        (Yf = Dt('react.lazy'))
}
var Xf = typeof Symbol == 'function' && Symbol.iterator
function Bg(e) {
    return e === null || typeof e != 'object'
        ? null
        : ((e = (Xf && e[Xf]) || e['@@iterator']),
          typeof e == 'function' ? e : null)
}
function xi(e) {
    for (
        var t = 'https://reactjs.org/docs/error-decoder.html?invariant=' + e,
            r = 1;
        r < arguments.length;
        r++
    )
        t += '&args[]=' + encodeURIComponent(arguments[r])
    return (
        'Minified React error #' +
        e +
        '; visit ' +
        t +
        ' for the full message or use the non-minified dev environment for full errors and additional helpful warnings.'
    )
}
var Qf = {
        isMounted: function () {
            return !1
        },
        enqueueForceUpdate: function () {},
        enqueueReplaceState: function () {},
        enqueueSetState: function () {},
    },
    Jf = {}
function bn(e, t, r) {
    ;(this.props = e),
        (this.context = t),
        (this.refs = Jf),
        (this.updater = r || Qf)
}
bn.prototype.isReactComponent = {}
bn.prototype.setState = function (e, t) {
    if (typeof e != 'object' && typeof e != 'function' && e != null)
        throw Error(xi(85))
    this.updater.enqueueSetState(this, e, t, 'setState')
}
bn.prototype.forceUpdate = function (e) {
    this.updater.enqueueForceUpdate(this, e, 'forceUpdate')
}
function Zf() {}
Zf.prototype = bn.prototype
function sl(e, t, r) {
    ;(this.props = e),
        (this.context = t),
        (this.refs = Jf),
        (this.updater = r || Qf)
}
var ll = (sl.prototype = new Zf())
ll.constructor = sl
al(ll, bn.prototype)
ll.isPureReactComponent = !0
var ul = { current: null },
    ed = Object.prototype.hasOwnProperty,
    td = { key: !0, ref: !0, __self: !0, __source: !0 }
function rd(e, t, r) {
    var n,
        i = {},
        o = null,
        a = null
    if (t != null)
        for (n in (t.ref !== void 0 && (a = t.ref),
        t.key !== void 0 && (o = '' + t.key),
        t))
            ed.call(t, n) && !td.hasOwnProperty(n) && (i[n] = t[n])
    var s = arguments.length - 2
    if (s === 1) i.children = r
    else if (1 < s) {
        for (var l = Array(s), u = 0; u < s; u++) l[u] = arguments[u + 2]
        i.children = l
    }
    if (e && e.defaultProps)
        for (n in ((s = e.defaultProps), s)) i[n] === void 0 && (i[n] = s[n])
    return {
        $$typeof: wn,
        type: e,
        key: o,
        ref: a,
        props: i,
        _owner: ul.current,
    }
}
function Ng(e, t) {
    return {
        $$typeof: wn,
        type: e.type,
        key: t,
        ref: e.ref,
        props: e.props,
        _owner: e._owner,
    }
}
function cl(e) {
    return typeof e == 'object' && e !== null && e.$$typeof === wn
}
function Ug(e) {
    var t = { '=': '=0', ':': '=2' }
    return (
        '$' +
        e.replace(/[=:]/g, function (r) {
            return t[r]
        })
    )
}
var nd = /\/+/g
function fl(e, t) {
    return typeof e == 'object' && e !== null && e.key != null
        ? Ug('' + e.key)
        : t.toString(36)
}
function Vo(e, t, r, n, i) {
    var o = typeof e
    ;(o === 'undefined' || o === 'boolean') && (e = null)
    var a = !1
    if (e === null) a = !0
    else
        switch (o) {
            case 'string':
            case 'number':
                a = !0
                break
            case 'object':
                switch (e.$$typeof) {
                    case wn:
                    case Hf:
                        a = !0
                }
        }
    if (a)
        return (
            (a = e),
            (i = i(a)),
            (e = n === '' ? '.' + fl(a, 0) : n),
            Array.isArray(i)
                ? ((r = ''),
                  e != null && (r = e.replace(nd, '$&/') + '/'),
                  Vo(i, t, r, '', function (u) {
                      return u
                  }))
                : i != null &&
                  (cl(i) &&
                      (i = Ng(
                          i,
                          r +
                              (!i.key || (a && a.key === i.key)
                                  ? ''
                                  : ('' + i.key).replace(nd, '$&/') + '/') +
                              e
                      )),
                  t.push(i)),
            1
        )
    if (((a = 0), (n = n === '' ? '.' : n + ':'), Array.isArray(e)))
        for (var s = 0; s < e.length; s++) {
            o = e[s]
            var l = n + fl(o, s)
            a += Vo(o, t, r, l, i)
        }
    else if (((l = Bg(e)), typeof l == 'function'))
        for (e = l.call(e), s = 0; !(o = e.next()).done; )
            (o = o.value), (l = n + fl(o, s++)), (a += Vo(o, t, r, l, i))
    else if (o === 'object')
        throw (
            ((t = '' + e),
            Error(
                xi(
                    31,
                    t === '[object Object]'
                        ? 'object with keys {' + Object.keys(e).join(', ') + '}'
                        : t
                )
            ))
        )
    return a
}
function Ko(e, t, r) {
    if (e == null) return e
    var n = [],
        i = 0
    return (
        Vo(e, n, '', '', function (o) {
            return t.call(r, o, i++)
        }),
        n
    )
}
function Mg(e) {
    if (e._status === -1) {
        var t = e._result
        ;(t = t()),
            (e._status = 0),
            (e._result = t),
            t.then(
                function (r) {
                    e._status === 0 &&
                        ((r = r.default), (e._status = 1), (e._result = r))
                },
                function (r) {
                    e._status === 0 && ((e._status = 2), (e._result = r))
                }
            )
    }
    if (e._status === 1) return e._result
    throw e._result
}
var id = { current: null }
function nr() {
    var e = id.current
    if (e === null) throw Error(xi(321))
    return e
}
var Og = {
    ReactCurrentDispatcher: id,
    ReactCurrentBatchConfig: { transition: 0 },
    ReactCurrentOwner: ul,
    IsSomeRendererActing: { current: !1 },
    assign: al,
}
ne.Children = {
    map: Ko,
    forEach: function (e, t, r) {
        Ko(
            e,
            function () {
                t.apply(this, arguments)
            },
            r
        )
    },
    count: function (e) {
        var t = 0
        return (
            Ko(e, function () {
                t++
            }),
            t
        )
    },
    toArray: function (e) {
        return (
            Ko(e, function (t) {
                return t
            }) || []
        )
    },
    only: function (e) {
        if (!cl(e)) throw Error(xi(143))
        return e
    },
}
ne.Component = bn
ne.PureComponent = sl
ne.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Og
ne.cloneElement = function (e, t, r) {
    if (e == null) throw Error(xi(267, e))
    var n = al({}, e.props),
        i = e.key,
        o = e.ref,
        a = e._owner
    if (t != null) {
        if (
            (t.ref !== void 0 && ((o = t.ref), (a = ul.current)),
            t.key !== void 0 && (i = '' + t.key),
            e.type && e.type.defaultProps)
        )
            var s = e.type.defaultProps
        for (l in t)
            ed.call(t, l) &&
                !td.hasOwnProperty(l) &&
                (n[l] = t[l] === void 0 && s !== void 0 ? s[l] : t[l])
    }
    var l = arguments.length - 2
    if (l === 1) n.children = r
    else if (1 < l) {
        s = Array(l)
        for (var u = 0; u < l; u++) s[u] = arguments[u + 2]
        n.children = s
    }
    return { $$typeof: wn, type: e.type, key: i, ref: o, props: n, _owner: a }
}
ne.createContext = function (e, t) {
    return (
        t === void 0 && (t = null),
        (e = {
            $$typeof: Kf,
            _calculateChangedBits: t,
            _currentValue: e,
            _currentValue2: e,
            _threadCount: 0,
            Provider: null,
            Consumer: null,
        }),
        (e.Provider = { $$typeof: Vf, _context: e }),
        (e.Consumer = e)
    )
}
ne.createElement = rd
ne.createFactory = function (e) {
    var t = rd.bind(null, e)
    return (t.type = e), t
}
ne.createRef = function () {
    return { current: null }
}
ne.forwardRef = function (e) {
    return { $$typeof: qf, render: e }
}
ne.isValidElement = cl
ne.lazy = function (e) {
    return { $$typeof: Yf, _payload: { _status: -1, _result: e }, _init: Mg }
}
ne.memo = function (e, t) {
    return { $$typeof: Gf, type: e, compare: t === void 0 ? null : t }
}
ne.useCallback = function (e, t) {
    return nr().useCallback(e, t)
}
ne.useContext = function (e, t) {
    return nr().useContext(e, t)
}
ne.useDebugValue = function () {}
ne.useEffect = function (e, t) {
    return nr().useEffect(e, t)
}
ne.useImperativeHandle = function (e, t, r) {
    return nr().useImperativeHandle(e, t, r)
}
ne.useLayoutEffect = function (e, t) {
    return nr().useLayoutEffect(e, t)
}
ne.useMemo = function (e, t) {
    return nr().useMemo(e, t)
}
ne.useReducer = function (e, t, r) {
    return nr().useReducer(e, t, r)
}
ne.useRef = function (e) {
    return nr().useRef(e)
}
ne.useState = function (e) {
    return nr().useState(e)
}
ne.version = '17.0.2'
T.exports = ne
var ir = T.exports,
    od = { exports: {} },
    St = {},
    ad = { exports: {} },
    sd = {}
/** @license React v0.20.2
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ ;(function (e) {
    var t, r, n, i
    if (
        typeof performance == 'object' &&
        typeof performance.now == 'function'
    ) {
        var o = performance
        e.unstable_now = function () {
            return o.now()
        }
    } else {
        var a = Date,
            s = a.now()
        e.unstable_now = function () {
            return a.now() - s
        }
    }
    if (typeof window == 'undefined' || typeof MessageChannel != 'function') {
        var l = null,
            u = null,
            d = function () {
                if (l !== null)
                    try {
                        var $ = e.unstable_now()
                        l(!0, $), (l = null)
                    } catch (K) {
                        throw (setTimeout(d, 0), K)
                    }
            }
        ;(t = function ($) {
            l !== null ? setTimeout(t, 0, $) : ((l = $), setTimeout(d, 0))
        }),
            (r = function ($, K) {
                u = setTimeout($, K)
            }),
            (n = function () {
                clearTimeout(u)
            }),
            (e.unstable_shouldYield = function () {
                return !1
            }),
            (i = e.unstable_forceFrameRate = function () {})
    } else {
        var m = window.setTimeout,
            p = window.clearTimeout
        if (typeof console != 'undefined') {
            var x = window.cancelAnimationFrame
            typeof window.requestAnimationFrame != 'function' &&
                console.error(
                    "This browser doesn't support requestAnimationFrame. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills"
                ),
                typeof x != 'function' &&
                    console.error(
                        "This browser doesn't support cancelAnimationFrame. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills"
                    )
        }
        var _ = !1,
            b = null,
            g = -1,
            v = 5,
            h = 0
        ;(e.unstable_shouldYield = function () {
            return e.unstable_now() >= h
        }),
            (i = function () {}),
            (e.unstable_forceFrameRate = function ($) {
                0 > $ || 125 < $
                    ? console.error(
                          'forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported'
                      )
                    : (v = 0 < $ ? Math.floor(1e3 / $) : 5)
            })
        var C = new MessageChannel(),
            E = C.port2
        ;(C.port1.onmessage = function () {
            if (b !== null) {
                var $ = e.unstable_now()
                h = $ + v
                try {
                    b(!0, $) ? E.postMessage(null) : ((_ = !1), (b = null))
                } catch (K) {
                    throw (E.postMessage(null), K)
                }
            } else _ = !1
        }),
            (t = function ($) {
                ;(b = $), _ || ((_ = !0), E.postMessage(null))
            }),
            (r = function ($, K) {
                g = m(function () {
                    $(e.unstable_now())
                }, K)
            }),
            (n = function () {
                p(g), (g = -1)
            })
    }
    function D($, K) {
        var j = $.length
        $.push(K)
        e: for (;;) {
            var le = (j - 1) >>> 1,
                ke = $[le]
            if (ke !== void 0 && 0 < O(ke, K))
                ($[le] = K), ($[j] = ke), (j = le)
            else break e
        }
    }
    function P($) {
        return ($ = $[0]), $ === void 0 ? null : $
    }
    function F($) {
        var K = $[0]
        if (K !== void 0) {
            var j = $.pop()
            if (j !== K) {
                $[0] = j
                e: for (var le = 0, ke = $.length; le < ke; ) {
                    var qe = 2 * (le + 1) - 1,
                        ut = $[qe],
                        ct = qe + 1,
                        Ft = $[ct]
                    if (ut !== void 0 && 0 > O(ut, j))
                        Ft !== void 0 && 0 > O(Ft, ut)
                            ? (($[le] = Ft), ($[ct] = j), (le = ct))
                            : (($[le] = ut), ($[qe] = j), (le = qe))
                    else if (Ft !== void 0 && 0 > O(Ft, j))
                        ($[le] = Ft), ($[ct] = j), (le = ct)
                    else break e
                }
            }
            return K
        }
        return null
    }
    function O($, K) {
        var j = $.sortIndex - K.sortIndex
        return j !== 0 ? j : $.id - K.id
    }
    var M = [],
        L = [],
        q = 1,
        J = null,
        oe = 3,
        Ue = !1,
        Ke = !1,
        Pt = !1
    function Lt($) {
        for (var K = P(L); K !== null; ) {
            if (K.callback === null) F(L)
            else if (K.startTime <= $)
                F(L), (K.sortIndex = K.expirationTime), D(M, K)
            else break
            K = P(L)
        }
    }
    function tr($) {
        if (((Pt = !1), Lt($), !Ke))
            if (P(M) !== null) (Ke = !0), t(Lr)
            else {
                var K = P(L)
                K !== null && r(tr, K.startTime - $)
            }
    }
    function Lr($, K) {
        ;(Ke = !1), Pt && ((Pt = !1), n()), (Ue = !0)
        var j = oe
        try {
            for (
                Lt(K), J = P(M);
                J !== null &&
                (!(J.expirationTime > K) || ($ && !e.unstable_shouldYield()));

            ) {
                var le = J.callback
                if (typeof le == 'function') {
                    ;(J.callback = null), (oe = J.priorityLevel)
                    var ke = le(J.expirationTime <= K)
                    ;(K = e.unstable_now()),
                        typeof ke == 'function'
                            ? (J.callback = ke)
                            : J === P(M) && F(M),
                        Lt(K)
                } else F(M)
                J = P(M)
            }
            if (J !== null) var qe = !0
            else {
                var ut = P(L)
                ut !== null && r(tr, ut.startTime - K), (qe = !1)
            }
            return qe
        } finally {
            ;(J = null), (oe = j), (Ue = !1)
        }
    }
    var hi = i
    ;(e.unstable_IdlePriority = 5),
        (e.unstable_ImmediatePriority = 1),
        (e.unstable_LowPriority = 4),
        (e.unstable_NormalPriority = 3),
        (e.unstable_Profiling = null),
        (e.unstable_UserBlockingPriority = 2),
        (e.unstable_cancelCallback = function ($) {
            $.callback = null
        }),
        (e.unstable_continueExecution = function () {
            Ke || Ue || ((Ke = !0), t(Lr))
        }),
        (e.unstable_getCurrentPriorityLevel = function () {
            return oe
        }),
        (e.unstable_getFirstCallbackNode = function () {
            return P(M)
        }),
        (e.unstable_next = function ($) {
            switch (oe) {
                case 1:
                case 2:
                case 3:
                    var K = 3
                    break
                default:
                    K = oe
            }
            var j = oe
            oe = K
            try {
                return $()
            } finally {
                oe = j
            }
        }),
        (e.unstable_pauseExecution = function () {}),
        (e.unstable_requestPaint = hi),
        (e.unstable_runWithPriority = function ($, K) {
            switch ($) {
                case 1:
                case 2:
                case 3:
                case 4:
                case 5:
                    break
                default:
                    $ = 3
            }
            var j = oe
            oe = $
            try {
                return K()
            } finally {
                oe = j
            }
        }),
        (e.unstable_scheduleCallback = function ($, K, j) {
            var le = e.unstable_now()
            switch (
                (typeof j == 'object' && j !== null
                    ? ((j = j.delay),
                      (j = typeof j == 'number' && 0 < j ? le + j : le))
                    : (j = le),
                $)
            ) {
                case 1:
                    var ke = -1
                    break
                case 2:
                    ke = 250
                    break
                case 5:
                    ke = 1073741823
                    break
                case 4:
                    ke = 1e4
                    break
                default:
                    ke = 5e3
            }
            return (
                (ke = j + ke),
                ($ = {
                    id: q++,
                    callback: K,
                    priorityLevel: $,
                    startTime: j,
                    expirationTime: ke,
                    sortIndex: -1,
                }),
                j > le
                    ? (($.sortIndex = j),
                      D(L, $),
                      P(M) === null &&
                          $ === P(L) &&
                          (Pt ? n() : (Pt = !0), r(tr, j - le)))
                    : (($.sortIndex = ke),
                      D(M, $),
                      Ke || Ue || ((Ke = !0), t(Lr))),
                $
            )
        }),
        (e.unstable_wrapCallback = function ($) {
            var K = oe
            return function () {
                var j = oe
                oe = K
                try {
                    return $.apply(this, arguments)
                } finally {
                    oe = j
                }
            }
        })
})(sd)
ad.exports = sd
/** @license React v17.0.2
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var qo = T.exports,
    _e = Wf,
    Me = ad.exports
function z(e) {
    for (
        var t = 'https://reactjs.org/docs/error-decoder.html?invariant=' + e,
            r = 1;
        r < arguments.length;
        r++
    )
        t += '&args[]=' + encodeURIComponent(arguments[r])
    return (
        'Minified React error #' +
        e +
        '; visit ' +
        t +
        ' for the full message or use the non-minified dev environment for full errors and additional helpful warnings.'
    )
}
if (!qo) throw Error(z(227))
var ld = new Set(),
    wi = {}
function qr(e, t) {
    Cn(e, t), Cn(e + 'Capture', t)
}
function Cn(e, t) {
    for (wi[e] = t, e = 0; e < t.length; e++) ld.add(t[e])
}
var or = !(
        typeof window == 'undefined' ||
        typeof window.document == 'undefined' ||
        typeof window.document.createElement == 'undefined'
    ),
    $g =
        /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
    ud = Object.prototype.hasOwnProperty,
    cd = {},
    fd = {}
function zg(e) {
    return ud.call(fd, e)
        ? !0
        : ud.call(cd, e)
        ? !1
        : $g.test(e)
        ? (fd[e] = !0)
        : ((cd[e] = !0), !1)
}
function Lg(e, t, r, n) {
    if (r !== null && r.type === 0) return !1
    switch (typeof t) {
        case 'function':
        case 'symbol':
            return !0
        case 'boolean':
            return n
                ? !1
                : r !== null
                ? !r.acceptsBooleans
                : ((e = e.toLowerCase().slice(0, 5)),
                  e !== 'data-' && e !== 'aria-')
        default:
            return !1
    }
}
function jg(e, t, r, n) {
    if (t === null || typeof t == 'undefined' || Lg(e, t, r, n)) return !0
    if (n) return !1
    if (r !== null)
        switch (r.type) {
            case 3:
                return !t
            case 4:
                return t === !1
            case 5:
                return isNaN(t)
            case 6:
                return isNaN(t) || 1 > t
        }
    return !1
}
function et(e, t, r, n, i, o, a) {
    ;(this.acceptsBooleans = t === 2 || t === 3 || t === 4),
        (this.attributeName = n),
        (this.attributeNamespace = i),
        (this.mustUseProperty = r),
        (this.propertyName = e),
        (this.type = t),
        (this.sanitizeURL = o),
        (this.removeEmptyString = a)
}
var je = {}
'children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style'
    .split(' ')
    .forEach(function (e) {
        je[e] = new et(e, 0, !1, e, null, !1, !1)
    })
;[
    ['acceptCharset', 'accept-charset'],
    ['className', 'class'],
    ['htmlFor', 'for'],
    ['httpEquiv', 'http-equiv'],
].forEach(function (e) {
    var t = e[0]
    je[t] = new et(t, 1, !1, e[1], null, !1, !1)
})
;['contentEditable', 'draggable', 'spellCheck', 'value'].forEach(function (e) {
    je[e] = new et(e, 2, !1, e.toLowerCase(), null, !1, !1)
})
;[
    'autoReverse',
    'externalResourcesRequired',
    'focusable',
    'preserveAlpha',
].forEach(function (e) {
    je[e] = new et(e, 2, !1, e, null, !1, !1)
})
'allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope'
    .split(' ')
    .forEach(function (e) {
        je[e] = new et(e, 3, !1, e.toLowerCase(), null, !1, !1)
    })
;['checked', 'multiple', 'muted', 'selected'].forEach(function (e) {
    je[e] = new et(e, 3, !0, e, null, !1, !1)
})
;['capture', 'download'].forEach(function (e) {
    je[e] = new et(e, 4, !1, e, null, !1, !1)
})
;['cols', 'rows', 'size', 'span'].forEach(function (e) {
    je[e] = new et(e, 6, !1, e, null, !1, !1)
})
;['rowSpan', 'start'].forEach(function (e) {
    je[e] = new et(e, 5, !1, e.toLowerCase(), null, !1, !1)
})
var dl = /[\-:]([a-z])/g
function hl(e) {
    return e[1].toUpperCase()
}
'accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height'
    .split(' ')
    .forEach(function (e) {
        var t = e.replace(dl, hl)
        je[t] = new et(t, 1, !1, e, null, !1, !1)
    })
'xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type'
    .split(' ')
    .forEach(function (e) {
        var t = e.replace(dl, hl)
        je[t] = new et(t, 1, !1, e, 'http://www.w3.org/1999/xlink', !1, !1)
    })
;['xml:base', 'xml:lang', 'xml:space'].forEach(function (e) {
    var t = e.replace(dl, hl)
    je[t] = new et(t, 1, !1, e, 'http://www.w3.org/XML/1998/namespace', !1, !1)
})
;['tabIndex', 'crossOrigin'].forEach(function (e) {
    je[e] = new et(e, 1, !1, e.toLowerCase(), null, !1, !1)
})
je.xlinkHref = new et(
    'xlinkHref',
    1,
    !1,
    'xlink:href',
    'http://www.w3.org/1999/xlink',
    !0,
    !1
)
;['src', 'href', 'action', 'formAction'].forEach(function (e) {
    je[e] = new et(e, 1, !1, e.toLowerCase(), null, !0, !0)
})
function pl(e, t, r, n) {
    var i = je.hasOwnProperty(t) ? je[t] : null,
        o =
            i !== null
                ? i.type === 0
                : n
                ? !1
                : !(
                      !(2 < t.length) ||
                      (t[0] !== 'o' && t[0] !== 'O') ||
                      (t[1] !== 'n' && t[1] !== 'N')
                  )
    o ||
        (jg(t, r, i, n) && (r = null),
        n || i === null
            ? zg(t) &&
              (r === null ? e.removeAttribute(t) : e.setAttribute(t, '' + r))
            : i.mustUseProperty
            ? (e[i.propertyName] = r === null ? (i.type === 3 ? !1 : '') : r)
            : ((t = i.attributeName),
              (n = i.attributeNamespace),
              r === null
                  ? e.removeAttribute(t)
                  : ((i = i.type),
                    (r = i === 3 || (i === 4 && r === !0) ? '' : '' + r),
                    n ? e.setAttributeNS(n, t, r) : e.setAttribute(t, r))))
}
var Gr = qo.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
    bi = 60103,
    Yr = 60106,
    mr = 60107,
    ml = 60108,
    Ci = 60114,
    vl = 60109,
    gl = 60110,
    Go = 60112,
    _i = 60113,
    Yo = 60120,
    Xo = 60115,
    yl = 60116,
    Sl = 60121,
    xl = 60128,
    dd = 60129,
    wl = 60130,
    bl = 60131
if (typeof Symbol == 'function' && Symbol.for) {
    var Oe = Symbol.for
    ;(bi = Oe('react.element')),
        (Yr = Oe('react.portal')),
        (mr = Oe('react.fragment')),
        (ml = Oe('react.strict_mode')),
        (Ci = Oe('react.profiler')),
        (vl = Oe('react.provider')),
        (gl = Oe('react.context')),
        (Go = Oe('react.forward_ref')),
        (_i = Oe('react.suspense')),
        (Yo = Oe('react.suspense_list')),
        (Xo = Oe('react.memo')),
        (yl = Oe('react.lazy')),
        (Sl = Oe('react.block')),
        Oe('react.scope'),
        (xl = Oe('react.opaque.id')),
        (dd = Oe('react.debug_trace_mode')),
        (wl = Oe('react.offscreen')),
        (bl = Oe('react.legacy_hidden'))
}
var hd = typeof Symbol == 'function' && Symbol.iterator
function Ei(e) {
    return e === null || typeof e != 'object'
        ? null
        : ((e = (hd && e[hd]) || e['@@iterator']),
          typeof e == 'function' ? e : null)
}
var Cl
function ki(e) {
    if (Cl === void 0)
        try {
            throw Error()
        } catch (r) {
            var t = r.stack.trim().match(/\n( *(at )?)/)
            Cl = (t && t[1]) || ''
        }
    return (
        `
` +
        Cl +
        e
    )
}
var _l = !1
function Qo(e, t) {
    if (!e || _l) return ''
    _l = !0
    var r = Error.prepareStackTrace
    Error.prepareStackTrace = void 0
    try {
        if (t)
            if (
                ((t = function () {
                    throw Error()
                }),
                Object.defineProperty(t.prototype, 'props', {
                    set: function () {
                        throw Error()
                    },
                }),
                typeof Reflect == 'object' && Reflect.construct)
            ) {
                try {
                    Reflect.construct(t, [])
                } catch (l) {
                    var n = l
                }
                Reflect.construct(e, [], t)
            } else {
                try {
                    t.call()
                } catch (l) {
                    n = l
                }
                e.call(t.prototype)
            }
        else {
            try {
                throw Error()
            } catch (l) {
                n = l
            }
            e()
        }
    } catch (l) {
        if (l && n && typeof l.stack == 'string') {
            for (
                var i = l.stack.split(`
`),
                    o = n.stack.split(`
`),
                    a = i.length - 1,
                    s = o.length - 1;
                1 <= a && 0 <= s && i[a] !== o[s];

            )
                s--
            for (; 1 <= a && 0 <= s; a--, s--)
                if (i[a] !== o[s]) {
                    if (a !== 1 || s !== 1)
                        do
                            if ((a--, s--, 0 > s || i[a] !== o[s]))
                                return (
                                    `
` + i[a].replace(' at new ', ' at ')
                                )
                        while (1 <= a && 0 <= s)
                    break
                }
        }
    } finally {
        ;(_l = !1), (Error.prepareStackTrace = r)
    }
    return (e = e ? e.displayName || e.name : '') ? ki(e) : ''
}
function Wg(e) {
    switch (e.tag) {
        case 5:
            return ki(e.type)
        case 16:
            return ki('Lazy')
        case 13:
            return ki('Suspense')
        case 19:
            return ki('SuspenseList')
        case 0:
        case 2:
        case 15:
            return (e = Qo(e.type, !1)), e
        case 11:
            return (e = Qo(e.type.render, !1)), e
        case 22:
            return (e = Qo(e.type._render, !1)), e
        case 1:
            return (e = Qo(e.type, !0)), e
        default:
            return ''
    }
}
function _n(e) {
    if (e == null) return null
    if (typeof e == 'function') return e.displayName || e.name || null
    if (typeof e == 'string') return e
    switch (e) {
        case mr:
            return 'Fragment'
        case Yr:
            return 'Portal'
        case Ci:
            return 'Profiler'
        case ml:
            return 'StrictMode'
        case _i:
            return 'Suspense'
        case Yo:
            return 'SuspenseList'
    }
    if (typeof e == 'object')
        switch (e.$$typeof) {
            case gl:
                return (e.displayName || 'Context') + '.Consumer'
            case vl:
                return (e._context.displayName || 'Context') + '.Provider'
            case Go:
                var t = e.render
                return (
                    (t = t.displayName || t.name || ''),
                    e.displayName ||
                        (t !== '' ? 'ForwardRef(' + t + ')' : 'ForwardRef')
                )
            case Xo:
                return _n(e.type)
            case Sl:
                return _n(e._render)
            case yl:
                ;(t = e._payload), (e = e._init)
                try {
                    return _n(e(t))
                } catch {}
        }
    return null
}
function vr(e) {
    switch (typeof e) {
        case 'boolean':
        case 'number':
        case 'object':
        case 'string':
        case 'undefined':
            return e
        default:
            return ''
    }
}
function pd(e) {
    var t = e.type
    return (
        (e = e.nodeName) &&
        e.toLowerCase() === 'input' &&
        (t === 'checkbox' || t === 'radio')
    )
}
function Hg(e) {
    var t = pd(e) ? 'checked' : 'value',
        r = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
        n = '' + e[t]
    if (
        !e.hasOwnProperty(t) &&
        typeof r != 'undefined' &&
        typeof r.get == 'function' &&
        typeof r.set == 'function'
    ) {
        var i = r.get,
            o = r.set
        return (
            Object.defineProperty(e, t, {
                configurable: !0,
                get: function () {
                    return i.call(this)
                },
                set: function (a) {
                    ;(n = '' + a), o.call(this, a)
                },
            }),
            Object.defineProperty(e, t, { enumerable: r.enumerable }),
            {
                getValue: function () {
                    return n
                },
                setValue: function (a) {
                    n = '' + a
                },
                stopTracking: function () {
                    ;(e._valueTracker = null), delete e[t]
                },
            }
        )
    }
}
function Jo(e) {
    e._valueTracker || (e._valueTracker = Hg(e))
}
function md(e) {
    if (!e) return !1
    var t = e._valueTracker
    if (!t) return !0
    var r = t.getValue(),
        n = ''
    return (
        e && (n = pd(e) ? (e.checked ? 'true' : 'false') : e.value),
        (e = n),
        e !== r ? (t.setValue(e), !0) : !1
    )
}
function Zo(e) {
    if (
        ((e = e || (typeof document != 'undefined' ? document : void 0)),
        typeof e == 'undefined')
    )
        return null
    try {
        return e.activeElement || e.body
    } catch {
        return e.body
    }
}
function El(e, t) {
    var r = t.checked
    return _e({}, t, {
        defaultChecked: void 0,
        defaultValue: void 0,
        value: void 0,
        checked: r != null ? r : e._wrapperState.initialChecked,
    })
}
function vd(e, t) {
    var r = t.defaultValue == null ? '' : t.defaultValue,
        n = t.checked != null ? t.checked : t.defaultChecked
    ;(r = vr(t.value != null ? t.value : r)),
        (e._wrapperState = {
            initialChecked: n,
            initialValue: r,
            controlled:
                t.type === 'checkbox' || t.type === 'radio'
                    ? t.checked != null
                    : t.value != null,
        })
}
function gd(e, t) {
    ;(t = t.checked), t != null && pl(e, 'checked', t, !1)
}
function kl(e, t) {
    gd(e, t)
    var r = vr(t.value),
        n = t.type
    if (r != null)
        n === 'number'
            ? ((r === 0 && e.value === '') || e.value != r) &&
              (e.value = '' + r)
            : e.value !== '' + r && (e.value = '' + r)
    else if (n === 'submit' || n === 'reset') {
        e.removeAttribute('value')
        return
    }
    t.hasOwnProperty('value')
        ? Tl(e, t.type, r)
        : t.hasOwnProperty('defaultValue') && Tl(e, t.type, vr(t.defaultValue)),
        t.checked == null &&
            t.defaultChecked != null &&
            (e.defaultChecked = !!t.defaultChecked)
}
function yd(e, t, r) {
    if (t.hasOwnProperty('value') || t.hasOwnProperty('defaultValue')) {
        var n = t.type
        if (
            !(
                (n !== 'submit' && n !== 'reset') ||
                (t.value !== void 0 && t.value !== null)
            )
        )
            return
        ;(t = '' + e._wrapperState.initialValue),
            r || t === e.value || (e.value = t),
            (e.defaultValue = t)
    }
    ;(r = e.name),
        r !== '' && (e.name = ''),
        (e.defaultChecked = !!e._wrapperState.initialChecked),
        r !== '' && (e.name = r)
}
function Tl(e, t, r) {
    ;(t !== 'number' || Zo(e.ownerDocument) !== e) &&
        (r == null
            ? (e.defaultValue = '' + e._wrapperState.initialValue)
            : e.defaultValue !== '' + r && (e.defaultValue = '' + r))
}
function Vg(e) {
    var t = ''
    return (
        qo.Children.forEach(e, function (r) {
            r != null && (t += r)
        }),
        t
    )
}
function Al(e, t) {
    return (
        (e = _e({ children: void 0 }, t)),
        (t = Vg(t.children)) && (e.children = t),
        e
    )
}
function En(e, t, r, n) {
    if (((e = e.options), t)) {
        t = {}
        for (var i = 0; i < r.length; i++) t['$' + r[i]] = !0
        for (r = 0; r < e.length; r++)
            (i = t.hasOwnProperty('$' + e[r].value)),
                e[r].selected !== i && (e[r].selected = i),
                i && n && (e[r].defaultSelected = !0)
    } else {
        for (r = '' + vr(r), t = null, i = 0; i < e.length; i++) {
            if (e[i].value === r) {
                ;(e[i].selected = !0), n && (e[i].defaultSelected = !0)
                return
            }
            t !== null || e[i].disabled || (t = e[i])
        }
        t !== null && (t.selected = !0)
    }
}
function Il(e, t) {
    if (t.dangerouslySetInnerHTML != null) throw Error(z(91))
    return _e({}, t, {
        value: void 0,
        defaultValue: void 0,
        children: '' + e._wrapperState.initialValue,
    })
}
function Sd(e, t) {
    var r = t.value
    if (r == null) {
        if (((r = t.children), (t = t.defaultValue), r != null)) {
            if (t != null) throw Error(z(92))
            if (Array.isArray(r)) {
                if (!(1 >= r.length)) throw Error(z(93))
                r = r[0]
            }
            t = r
        }
        t == null && (t = ''), (r = t)
    }
    e._wrapperState = { initialValue: vr(r) }
}
function xd(e, t) {
    var r = vr(t.value),
        n = vr(t.defaultValue)
    r != null &&
        ((r = '' + r),
        r !== e.value && (e.value = r),
        t.defaultValue == null && e.defaultValue !== r && (e.defaultValue = r)),
        n != null && (e.defaultValue = '' + n)
}
function wd(e) {
    var t = e.textContent
    t === e._wrapperState.initialValue &&
        t !== '' &&
        t !== null &&
        (e.value = t)
}
var Rl = {
    html: 'http://www.w3.org/1999/xhtml',
    mathml: 'http://www.w3.org/1998/Math/MathML',
    svg: 'http://www.w3.org/2000/svg',
}
function bd(e) {
    switch (e) {
        case 'svg':
            return 'http://www.w3.org/2000/svg'
        case 'math':
            return 'http://www.w3.org/1998/Math/MathML'
        default:
            return 'http://www.w3.org/1999/xhtml'
    }
}
function Pl(e, t) {
    return e == null || e === 'http://www.w3.org/1999/xhtml'
        ? bd(t)
        : e === 'http://www.w3.org/2000/svg' && t === 'foreignObject'
        ? 'http://www.w3.org/1999/xhtml'
        : e
}
var ea,
    Cd = (function (e) {
        return typeof MSApp != 'undefined' && MSApp.execUnsafeLocalFunction
            ? function (t, r, n, i) {
                  MSApp.execUnsafeLocalFunction(function () {
                      return e(t, r, n, i)
                  })
              }
            : e
    })(function (e, t) {
        if (e.namespaceURI !== Rl.svg || 'innerHTML' in e) e.innerHTML = t
        else {
            for (
                ea = ea || document.createElement('div'),
                    ea.innerHTML = '<svg>' + t.valueOf().toString() + '</svg>',
                    t = ea.firstChild;
                e.firstChild;

            )
                e.removeChild(e.firstChild)
            for (; t.firstChild; ) e.appendChild(t.firstChild)
        }
    })
function Ti(e, t) {
    if (t) {
        var r = e.firstChild
        if (r && r === e.lastChild && r.nodeType === 3) {
            r.nodeValue = t
            return
        }
    }
    e.textContent = t
}
var Ai = {
        animationIterationCount: !0,
        borderImageOutset: !0,
        borderImageSlice: !0,
        borderImageWidth: !0,
        boxFlex: !0,
        boxFlexGroup: !0,
        boxOrdinalGroup: !0,
        columnCount: !0,
        columns: !0,
        flex: !0,
        flexGrow: !0,
        flexPositive: !0,
        flexShrink: !0,
        flexNegative: !0,
        flexOrder: !0,
        gridArea: !0,
        gridRow: !0,
        gridRowEnd: !0,
        gridRowSpan: !0,
        gridRowStart: !0,
        gridColumn: !0,
        gridColumnEnd: !0,
        gridColumnSpan: !0,
        gridColumnStart: !0,
        fontWeight: !0,
        lineClamp: !0,
        lineHeight: !0,
        opacity: !0,
        order: !0,
        orphans: !0,
        tabSize: !0,
        widows: !0,
        zIndex: !0,
        zoom: !0,
        fillOpacity: !0,
        floodOpacity: !0,
        stopOpacity: !0,
        strokeDasharray: !0,
        strokeDashoffset: !0,
        strokeMiterlimit: !0,
        strokeOpacity: !0,
        strokeWidth: !0,
    },
    Kg = ['Webkit', 'ms', 'Moz', 'O']
Object.keys(Ai).forEach(function (e) {
    Kg.forEach(function (t) {
        ;(t = t + e.charAt(0).toUpperCase() + e.substring(1)), (Ai[t] = Ai[e])
    })
})
function _d(e, t, r) {
    return t == null || typeof t == 'boolean' || t === ''
        ? ''
        : r ||
          typeof t != 'number' ||
          t === 0 ||
          (Ai.hasOwnProperty(e) && Ai[e])
        ? ('' + t).trim()
        : t + 'px'
}
function Ed(e, t) {
    e = e.style
    for (var r in t)
        if (t.hasOwnProperty(r)) {
            var n = r.indexOf('--') === 0,
                i = _d(r, t[r], n)
            r === 'float' && (r = 'cssFloat'),
                n ? e.setProperty(r, i) : (e[r] = i)
        }
}
var qg = _e(
    { menuitem: !0 },
    {
        area: !0,
        base: !0,
        br: !0,
        col: !0,
        embed: !0,
        hr: !0,
        img: !0,
        input: !0,
        keygen: !0,
        link: !0,
        meta: !0,
        param: !0,
        source: !0,
        track: !0,
        wbr: !0,
    }
)
function Fl(e, t) {
    if (t) {
        if (qg[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
            throw Error(z(137, e))
        if (t.dangerouslySetInnerHTML != null) {
            if (t.children != null) throw Error(z(60))
            if (
                !(
                    typeof t.dangerouslySetInnerHTML == 'object' &&
                    '__html' in t.dangerouslySetInnerHTML
                )
            )
                throw Error(z(61))
        }
        if (t.style != null && typeof t.style != 'object') throw Error(z(62))
    }
}
function Dl(e, t) {
    if (e.indexOf('-') === -1) return typeof t.is == 'string'
    switch (e) {
        case 'annotation-xml':
        case 'color-profile':
        case 'font-face':
        case 'font-face-src':
        case 'font-face-uri':
        case 'font-face-format':
        case 'font-face-name':
        case 'missing-glyph':
            return !1
        default:
            return !0
    }
}
function Bl(e) {
    return (
        (e = e.target || e.srcElement || window),
        e.correspondingUseElement && (e = e.correspondingUseElement),
        e.nodeType === 3 ? e.parentNode : e
    )
}
var Nl = null,
    kn = null,
    Tn = null
function kd(e) {
    if ((e = qi(e))) {
        if (typeof Nl != 'function') throw Error(z(280))
        var t = e.stateNode
        t && ((t = ya(t)), Nl(e.stateNode, e.type, t))
    }
}
function Td(e) {
    kn ? (Tn ? Tn.push(e) : (Tn = [e])) : (kn = e)
}
function Ad() {
    if (kn) {
        var e = kn,
            t = Tn
        if (((Tn = kn = null), kd(e), t))
            for (e = 0; e < t.length; e++) kd(t[e])
    }
}
function Ul(e, t) {
    return e(t)
}
function Id(e, t, r, n, i) {
    return e(t, r, n, i)
}
function Ml() {}
var Rd = Ul,
    Xr = !1,
    Ol = !1
function $l() {
    ;(kn !== null || Tn !== null) && (Ml(), Ad())
}
function Gg(e, t, r) {
    if (Ol) return e(t, r)
    Ol = !0
    try {
        return Rd(e, t, r)
    } finally {
        ;(Ol = !1), $l()
    }
}
function Ii(e, t) {
    var r = e.stateNode
    if (r === null) return null
    var n = ya(r)
    if (n === null) return null
    r = n[t]
    e: switch (t) {
        case 'onClick':
        case 'onClickCapture':
        case 'onDoubleClick':
        case 'onDoubleClickCapture':
        case 'onMouseDown':
        case 'onMouseDownCapture':
        case 'onMouseMove':
        case 'onMouseMoveCapture':
        case 'onMouseUp':
        case 'onMouseUpCapture':
        case 'onMouseEnter':
            ;(n = !n.disabled) ||
                ((e = e.type),
                (n = !(
                    e === 'button' ||
                    e === 'input' ||
                    e === 'select' ||
                    e === 'textarea'
                ))),
                (e = !n)
            break e
        default:
            e = !1
    }
    if (e) return null
    if (r && typeof r != 'function') throw Error(z(231, t, typeof r))
    return r
}
var zl = !1
if (or)
    try {
        var Ri = {}
        Object.defineProperty(Ri, 'passive', {
            get: function () {
                zl = !0
            },
        }),
            window.addEventListener('test', Ri, Ri),
            window.removeEventListener('test', Ri, Ri)
    } catch {
        zl = !1
    }
function Yg(e, t, r, n, i, o, a, s, l) {
    var u = Array.prototype.slice.call(arguments, 3)
    try {
        t.apply(r, u)
    } catch (d) {
        this.onError(d)
    }
}
var Pi = !1,
    ta = null,
    ra = !1,
    Ll = null,
    Xg = {
        onError: function (e) {
            ;(Pi = !0), (ta = e)
        },
    }
function Qg(e, t, r, n, i, o, a, s, l) {
    ;(Pi = !1), (ta = null), Yg.apply(Xg, arguments)
}
function Jg(e, t, r, n, i, o, a, s, l) {
    if ((Qg.apply(this, arguments), Pi)) {
        if (Pi) {
            var u = ta
            ;(Pi = !1), (ta = null)
        } else throw Error(z(198))
        ra || ((ra = !0), (Ll = u))
    }
}
function Qr(e) {
    var t = e,
        r = e
    if (e.alternate) for (; t.return; ) t = t.return
    else {
        e = t
        do (t = e), (t.flags & 1026) != 0 && (r = t.return), (e = t.return)
        while (e)
    }
    return t.tag === 3 ? r : null
}
function Pd(e) {
    if (e.tag === 13) {
        var t = e.memoizedState
        if (
            (t === null &&
                ((e = e.alternate), e !== null && (t = e.memoizedState)),
            t !== null)
        )
            return t.dehydrated
    }
    return null
}
function Fd(e) {
    if (Qr(e) !== e) throw Error(z(188))
}
function Zg(e) {
    var t = e.alternate
    if (!t) {
        if (((t = Qr(e)), t === null)) throw Error(z(188))
        return t !== e ? null : e
    }
    for (var r = e, n = t; ; ) {
        var i = r.return
        if (i === null) break
        var o = i.alternate
        if (o === null) {
            if (((n = i.return), n !== null)) {
                r = n
                continue
            }
            break
        }
        if (i.child === o.child) {
            for (o = i.child; o; ) {
                if (o === r) return Fd(i), e
                if (o === n) return Fd(i), t
                o = o.sibling
            }
            throw Error(z(188))
        }
        if (r.return !== n.return) (r = i), (n = o)
        else {
            for (var a = !1, s = i.child; s; ) {
                if (s === r) {
                    ;(a = !0), (r = i), (n = o)
                    break
                }
                if (s === n) {
                    ;(a = !0), (n = i), (r = o)
                    break
                }
                s = s.sibling
            }
            if (!a) {
                for (s = o.child; s; ) {
                    if (s === r) {
                        ;(a = !0), (r = o), (n = i)
                        break
                    }
                    if (s === n) {
                        ;(a = !0), (n = o), (r = i)
                        break
                    }
                    s = s.sibling
                }
                if (!a) throw Error(z(189))
            }
        }
        if (r.alternate !== n) throw Error(z(190))
    }
    if (r.tag !== 3) throw Error(z(188))
    return r.stateNode.current === r ? e : t
}
function Dd(e) {
    if (((e = Zg(e)), !e)) return null
    for (var t = e; ; ) {
        if (t.tag === 5 || t.tag === 6) return t
        if (t.child) (t.child.return = t), (t = t.child)
        else {
            if (t === e) break
            for (; !t.sibling; ) {
                if (!t.return || t.return === e) return null
                t = t.return
            }
            ;(t.sibling.return = t.return), (t = t.sibling)
        }
    }
    return null
}
function Bd(e, t) {
    for (var r = e.alternate; t !== null; ) {
        if (t === e || t === r) return !0
        t = t.return
    }
    return !1
}
var Nd,
    jl,
    Ud,
    Md,
    Wl = !1,
    jt = [],
    gr = null,
    yr = null,
    Sr = null,
    Fi = new Map(),
    Di = new Map(),
    Bi = [],
    Od =
        'mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit'.split(
            ' '
        )
function Hl(e, t, r, n, i) {
    return {
        blockedOn: e,
        domEventName: t,
        eventSystemFlags: r | 16,
        nativeEvent: i,
        targetContainers: [n],
    }
}
function $d(e, t) {
    switch (e) {
        case 'focusin':
        case 'focusout':
            gr = null
            break
        case 'dragenter':
        case 'dragleave':
            yr = null
            break
        case 'mouseover':
        case 'mouseout':
            Sr = null
            break
        case 'pointerover':
        case 'pointerout':
            Fi.delete(t.pointerId)
            break
        case 'gotpointercapture':
        case 'lostpointercapture':
            Di.delete(t.pointerId)
    }
}
function Ni(e, t, r, n, i, o) {
    return e === null || e.nativeEvent !== o
        ? ((e = Hl(t, r, n, i, o)),
          t !== null && ((t = qi(t)), t !== null && jl(t)),
          e)
        : ((e.eventSystemFlags |= n),
          (t = e.targetContainers),
          i !== null && t.indexOf(i) === -1 && t.push(i),
          e)
}
function ey(e, t, r, n, i) {
    switch (t) {
        case 'focusin':
            return (gr = Ni(gr, e, t, r, n, i)), !0
        case 'dragenter':
            return (yr = Ni(yr, e, t, r, n, i)), !0
        case 'mouseover':
            return (Sr = Ni(Sr, e, t, r, n, i)), !0
        case 'pointerover':
            var o = i.pointerId
            return Fi.set(o, Ni(Fi.get(o) || null, e, t, r, n, i)), !0
        case 'gotpointercapture':
            return (
                (o = i.pointerId),
                Di.set(o, Ni(Di.get(o) || null, e, t, r, n, i)),
                !0
            )
    }
    return !1
}
function ty(e) {
    var t = Jr(e.target)
    if (t !== null) {
        var r = Qr(t)
        if (r !== null) {
            if (((t = r.tag), t === 13)) {
                if (((t = Pd(r)), t !== null)) {
                    ;(e.blockedOn = t),
                        Md(e.lanePriority, function () {
                            Me.unstable_runWithPriority(
                                e.priority,
                                function () {
                                    Ud(r)
                                }
                            )
                        })
                    return
                }
            } else if (t === 3 && r.stateNode.hydrate) {
                e.blockedOn = r.tag === 3 ? r.stateNode.containerInfo : null
                return
            }
        }
    }
    e.blockedOn = null
}
function na(e) {
    if (e.blockedOn !== null) return !1
    for (var t = e.targetContainers; 0 < t.length; ) {
        var r = Xl(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent)
        if (r !== null)
            return (t = qi(r)), t !== null && jl(t), (e.blockedOn = r), !1
        t.shift()
    }
    return !0
}
function zd(e, t, r) {
    na(e) && r.delete(t)
}
function ry() {
    for (Wl = !1; 0 < jt.length; ) {
        var e = jt[0]
        if (e.blockedOn !== null) {
            ;(e = qi(e.blockedOn)), e !== null && Nd(e)
            break
        }
        for (var t = e.targetContainers; 0 < t.length; ) {
            var r = Xl(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent)
            if (r !== null) {
                e.blockedOn = r
                break
            }
            t.shift()
        }
        e.blockedOn === null && jt.shift()
    }
    gr !== null && na(gr) && (gr = null),
        yr !== null && na(yr) && (yr = null),
        Sr !== null && na(Sr) && (Sr = null),
        Fi.forEach(zd),
        Di.forEach(zd)
}
function Ui(e, t) {
    e.blockedOn === t &&
        ((e.blockedOn = null),
        Wl ||
            ((Wl = !0),
            Me.unstable_scheduleCallback(Me.unstable_NormalPriority, ry)))
}
function Ld(e) {
    function t(i) {
        return Ui(i, e)
    }
    if (0 < jt.length) {
        Ui(jt[0], e)
        for (var r = 1; r < jt.length; r++) {
            var n = jt[r]
            n.blockedOn === e && (n.blockedOn = null)
        }
    }
    for (
        gr !== null && Ui(gr, e),
            yr !== null && Ui(yr, e),
            Sr !== null && Ui(Sr, e),
            Fi.forEach(t),
            Di.forEach(t),
            r = 0;
        r < Bi.length;
        r++
    )
        (n = Bi[r]), n.blockedOn === e && (n.blockedOn = null)
    for (; 0 < Bi.length && ((r = Bi[0]), r.blockedOn === null); )
        ty(r), r.blockedOn === null && Bi.shift()
}
function ia(e, t) {
    var r = {}
    return (
        (r[e.toLowerCase()] = t.toLowerCase()),
        (r['Webkit' + e] = 'webkit' + t),
        (r['Moz' + e] = 'moz' + t),
        r
    )
}
var An = {
        animationend: ia('Animation', 'AnimationEnd'),
        animationiteration: ia('Animation', 'AnimationIteration'),
        animationstart: ia('Animation', 'AnimationStart'),
        transitionend: ia('Transition', 'TransitionEnd'),
    },
    Vl = {},
    jd = {}
or &&
    ((jd = document.createElement('div').style),
    'AnimationEvent' in window ||
        (delete An.animationend.animation,
        delete An.animationiteration.animation,
        delete An.animationstart.animation),
    'TransitionEvent' in window || delete An.transitionend.transition)
function oa(e) {
    if (Vl[e]) return Vl[e]
    if (!An[e]) return e
    var t = An[e],
        r
    for (r in t) if (t.hasOwnProperty(r) && r in jd) return (Vl[e] = t[r])
    return e
}
var Wd = oa('animationend'),
    Hd = oa('animationiteration'),
    Vd = oa('animationstart'),
    Kd = oa('transitionend'),
    qd = new Map(),
    Kl = new Map(),
    ny = [
        'abort',
        'abort',
        Wd,
        'animationEnd',
        Hd,
        'animationIteration',
        Vd,
        'animationStart',
        'canplay',
        'canPlay',
        'canplaythrough',
        'canPlayThrough',
        'durationchange',
        'durationChange',
        'emptied',
        'emptied',
        'encrypted',
        'encrypted',
        'ended',
        'ended',
        'error',
        'error',
        'gotpointercapture',
        'gotPointerCapture',
        'load',
        'load',
        'loadeddata',
        'loadedData',
        'loadedmetadata',
        'loadedMetadata',
        'loadstart',
        'loadStart',
        'lostpointercapture',
        'lostPointerCapture',
        'playing',
        'playing',
        'progress',
        'progress',
        'seeking',
        'seeking',
        'stalled',
        'stalled',
        'suspend',
        'suspend',
        'timeupdate',
        'timeUpdate',
        Kd,
        'transitionEnd',
        'waiting',
        'waiting',
    ]
function ql(e, t) {
    for (var r = 0; r < e.length; r += 2) {
        var n = e[r],
            i = e[r + 1]
        ;(i = 'on' + (i[0].toUpperCase() + i.slice(1))),
            Kl.set(n, t),
            qd.set(n, i),
            qr(i, [n])
    }
}
var iy = Me.unstable_now
iy()
var ge = 8
function In(e) {
    if ((1 & e) != 0) return (ge = 15), 1
    if ((2 & e) != 0) return (ge = 14), 2
    if ((4 & e) != 0) return (ge = 13), 4
    var t = 24 & e
    return t !== 0
        ? ((ge = 12), t)
        : (e & 32) != 0
        ? ((ge = 11), 32)
        : ((t = 192 & e),
          t !== 0
              ? ((ge = 10), t)
              : (e & 256) != 0
              ? ((ge = 9), 256)
              : ((t = 3584 & e),
                t !== 0
                    ? ((ge = 8), t)
                    : (e & 4096) != 0
                    ? ((ge = 7), 4096)
                    : ((t = 4186112 & e),
                      t !== 0
                          ? ((ge = 6), t)
                          : ((t = 62914560 & e),
                            t !== 0
                                ? ((ge = 5), t)
                                : e & 67108864
                                ? ((ge = 4), 67108864)
                                : (e & 134217728) != 0
                                ? ((ge = 3), 134217728)
                                : ((t = 805306368 & e),
                                  t !== 0
                                      ? ((ge = 2), t)
                                      : (1073741824 & e) != 0
                                      ? ((ge = 1), 1073741824)
                                      : ((ge = 8), e))))))
}
function oy(e) {
    switch (e) {
        case 99:
            return 15
        case 98:
            return 10
        case 97:
        case 96:
            return 8
        case 95:
            return 2
        default:
            return 0
    }
}
function ay(e) {
    switch (e) {
        case 15:
        case 14:
            return 99
        case 13:
        case 12:
        case 11:
        case 10:
            return 98
        case 9:
        case 8:
        case 7:
        case 6:
        case 4:
        case 5:
            return 97
        case 3:
        case 2:
        case 1:
            return 95
        case 0:
            return 90
        default:
            throw Error(z(358, e))
    }
}
function Mi(e, t) {
    var r = e.pendingLanes
    if (r === 0) return (ge = 0)
    var n = 0,
        i = 0,
        o = e.expiredLanes,
        a = e.suspendedLanes,
        s = e.pingedLanes
    if (o !== 0) (n = o), (i = ge = 15)
    else if (((o = r & 134217727), o !== 0)) {
        var l = o & ~a
        l !== 0
            ? ((n = In(l)), (i = ge))
            : ((s &= o), s !== 0 && ((n = In(s)), (i = ge)))
    } else
        (o = r & ~a),
            o !== 0
                ? ((n = In(o)), (i = ge))
                : s !== 0 && ((n = In(s)), (i = ge))
    if (n === 0) return 0
    if (
        ((n = 31 - xr(n)),
        (n = r & (((0 > n ? 0 : 1 << n) << 1) - 1)),
        t !== 0 && t !== n && (t & a) == 0)
    ) {
        if ((In(t), i <= ge)) return t
        ge = i
    }
    if (((t = e.entangledLanes), t !== 0))
        for (e = e.entanglements, t &= n; 0 < t; )
            (r = 31 - xr(t)), (i = 1 << r), (n |= e[r]), (t &= ~i)
    return n
}
function Gd(e) {
    return (
        (e = e.pendingLanes & -1073741825),
        e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
    )
}
function aa(e, t) {
    switch (e) {
        case 15:
            return 1
        case 14:
            return 2
        case 12:
            return (e = Rn(24 & ~t)), e === 0 ? aa(10, t) : e
        case 10:
            return (e = Rn(192 & ~t)), e === 0 ? aa(8, t) : e
        case 8:
            return (
                (e = Rn(3584 & ~t)),
                e === 0 && ((e = Rn(4186112 & ~t)), e === 0 && (e = 512)),
                e
            )
        case 2:
            return (t = Rn(805306368 & ~t)), t === 0 && (t = 268435456), t
    }
    throw Error(z(358, e))
}
function Rn(e) {
    return e & -e
}
function Gl(e) {
    for (var t = [], r = 0; 31 > r; r++) t.push(e)
    return t
}
function sa(e, t, r) {
    e.pendingLanes |= t
    var n = t - 1
    ;(e.suspendedLanes &= n),
        (e.pingedLanes &= n),
        (e = e.eventTimes),
        (t = 31 - xr(t)),
        (e[t] = r)
}
var xr = Math.clz32 ? Math.clz32 : uy,
    sy = Math.log,
    ly = Math.LN2
function uy(e) {
    return e === 0 ? 32 : (31 - ((sy(e) / ly) | 0)) | 0
}
var cy = Me.unstable_UserBlockingPriority,
    fy = Me.unstable_runWithPriority,
    la = !0
function dy(e, t, r, n) {
    Xr || Ml()
    var i = Yl,
        o = Xr
    Xr = !0
    try {
        Id(i, e, t, r, n)
    } finally {
        ;(Xr = o) || $l()
    }
}
function hy(e, t, r, n) {
    fy(cy, Yl.bind(null, e, t, r, n))
}
function Yl(e, t, r, n) {
    if (la) {
        var i
        if ((i = (t & 4) == 0) && 0 < jt.length && -1 < Od.indexOf(e))
            (e = Hl(null, e, t, r, n)), jt.push(e)
        else {
            var o = Xl(e, t, r, n)
            if (o === null) i && $d(e, n)
            else {
                if (i) {
                    if (-1 < Od.indexOf(e)) {
                        ;(e = Hl(o, e, t, r, n)), jt.push(e)
                        return
                    }
                    if (ey(o, e, t, r, n)) return
                    $d(e, n)
                }
                _h(e, t, n, null, r)
            }
        }
    }
}
function Xl(e, t, r, n) {
    var i = Bl(n)
    if (((i = Jr(i)), i !== null)) {
        var o = Qr(i)
        if (o === null) i = null
        else {
            var a = o.tag
            if (a === 13) {
                if (((i = Pd(o)), i !== null)) return i
                i = null
            } else if (a === 3) {
                if (o.stateNode.hydrate)
                    return o.tag === 3 ? o.stateNode.containerInfo : null
                i = null
            } else o !== i && (i = null)
        }
    }
    return _h(e, t, n, i, r), null
}
var wr = null,
    Ql = null,
    ua = null
function Yd() {
    if (ua) return ua
    var e,
        t = Ql,
        r = t.length,
        n,
        i = 'value' in wr ? wr.value : wr.textContent,
        o = i.length
    for (e = 0; e < r && t[e] === i[e]; e++);
    var a = r - e
    for (n = 1; n <= a && t[r - n] === i[o - n]; n++);
    return (ua = i.slice(e, 1 < n ? 1 - n : void 0))
}
function ca(e) {
    var t = e.keyCode
    return (
        'charCode' in e
            ? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
            : (e = t),
        e === 10 && (e = 13),
        32 <= e || e === 13 ? e : 0
    )
}
function fa() {
    return !0
}
function Xd() {
    return !1
}
function dt(e) {
    function t(r, n, i, o, a) {
        ;(this._reactName = r),
            (this._targetInst = i),
            (this.type = n),
            (this.nativeEvent = o),
            (this.target = a),
            (this.currentTarget = null)
        for (var s in e)
            e.hasOwnProperty(s) && ((r = e[s]), (this[s] = r ? r(o) : o[s]))
        return (
            (this.isDefaultPrevented = (
                o.defaultPrevented != null
                    ? o.defaultPrevented
                    : o.returnValue === !1
            )
                ? fa
                : Xd),
            (this.isPropagationStopped = Xd),
            this
        )
    }
    return (
        _e(t.prototype, {
            preventDefault: function () {
                this.defaultPrevented = !0
                var r = this.nativeEvent
                r &&
                    (r.preventDefault
                        ? r.preventDefault()
                        : typeof r.returnValue != 'unknown' &&
                          (r.returnValue = !1),
                    (this.isDefaultPrevented = fa))
            },
            stopPropagation: function () {
                var r = this.nativeEvent
                r &&
                    (r.stopPropagation
                        ? r.stopPropagation()
                        : typeof r.cancelBubble != 'unknown' &&
                          (r.cancelBubble = !0),
                    (this.isPropagationStopped = fa))
            },
            persist: function () {},
            isPersistent: fa,
        }),
        t
    )
}
var Pn = {
        eventPhase: 0,
        bubbles: 0,
        cancelable: 0,
        timeStamp: function (e) {
            return e.timeStamp || Date.now()
        },
        defaultPrevented: 0,
        isTrusted: 0,
    },
    Jl = dt(Pn),
    Oi = _e({}, Pn, { view: 0, detail: 0 }),
    py = dt(Oi),
    Zl,
    eu,
    $i,
    da = _e({}, Oi, {
        screenX: 0,
        screenY: 0,
        clientX: 0,
        clientY: 0,
        pageX: 0,
        pageY: 0,
        ctrlKey: 0,
        shiftKey: 0,
        altKey: 0,
        metaKey: 0,
        getModifierState: ru,
        button: 0,
        buttons: 0,
        relatedTarget: function (e) {
            return e.relatedTarget === void 0
                ? e.fromElement === e.srcElement
                    ? e.toElement
                    : e.fromElement
                : e.relatedTarget
        },
        movementX: function (e) {
            return 'movementX' in e
                ? e.movementX
                : (e !== $i &&
                      ($i && e.type === 'mousemove'
                          ? ((Zl = e.screenX - $i.screenX),
                            (eu = e.screenY - $i.screenY))
                          : (eu = Zl = 0),
                      ($i = e)),
                  Zl)
        },
        movementY: function (e) {
            return 'movementY' in e ? e.movementY : eu
        },
    }),
    Qd = dt(da),
    my = _e({}, da, { dataTransfer: 0 }),
    vy = dt(my),
    gy = _e({}, Oi, { relatedTarget: 0 }),
    tu = dt(gy),
    yy = _e({}, Pn, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
    Sy = dt(yy),
    xy = _e({}, Pn, {
        clipboardData: function (e) {
            return 'clipboardData' in e ? e.clipboardData : window.clipboardData
        },
    }),
    wy = dt(xy),
    by = _e({}, Pn, { data: 0 }),
    Jd = dt(by),
    Cy = {
        Esc: 'Escape',
        Spacebar: ' ',
        Left: 'ArrowLeft',
        Up: 'ArrowUp',
        Right: 'ArrowRight',
        Down: 'ArrowDown',
        Del: 'Delete',
        Win: 'OS',
        Menu: 'ContextMenu',
        Apps: 'ContextMenu',
        Scroll: 'ScrollLock',
        MozPrintableKey: 'Unidentified',
    },
    _y = {
        8: 'Backspace',
        9: 'Tab',
        12: 'Clear',
        13: 'Enter',
        16: 'Shift',
        17: 'Control',
        18: 'Alt',
        19: 'Pause',
        20: 'CapsLock',
        27: 'Escape',
        32: ' ',
        33: 'PageUp',
        34: 'PageDown',
        35: 'End',
        36: 'Home',
        37: 'ArrowLeft',
        38: 'ArrowUp',
        39: 'ArrowRight',
        40: 'ArrowDown',
        45: 'Insert',
        46: 'Delete',
        112: 'F1',
        113: 'F2',
        114: 'F3',
        115: 'F4',
        116: 'F5',
        117: 'F6',
        118: 'F7',
        119: 'F8',
        120: 'F9',
        121: 'F10',
        122: 'F11',
        123: 'F12',
        144: 'NumLock',
        145: 'ScrollLock',
        224: 'Meta',
    },
    Ey = {
        Alt: 'altKey',
        Control: 'ctrlKey',
        Meta: 'metaKey',
        Shift: 'shiftKey',
    }
function ky(e) {
    var t = this.nativeEvent
    return t.getModifierState
        ? t.getModifierState(e)
        : (e = Ey[e])
        ? !!t[e]
        : !1
}
function ru() {
    return ky
}
var Ty = _e({}, Oi, {
        key: function (e) {
            if (e.key) {
                var t = Cy[e.key] || e.key
                if (t !== 'Unidentified') return t
            }
            return e.type === 'keypress'
                ? ((e = ca(e)), e === 13 ? 'Enter' : String.fromCharCode(e))
                : e.type === 'keydown' || e.type === 'keyup'
                ? _y[e.keyCode] || 'Unidentified'
                : ''
        },
        code: 0,
        location: 0,
        ctrlKey: 0,
        shiftKey: 0,
        altKey: 0,
        metaKey: 0,
        repeat: 0,
        locale: 0,
        getModifierState: ru,
        charCode: function (e) {
            return e.type === 'keypress' ? ca(e) : 0
        },
        keyCode: function (e) {
            return e.type === 'keydown' || e.type === 'keyup' ? e.keyCode : 0
        },
        which: function (e) {
            return e.type === 'keypress'
                ? ca(e)
                : e.type === 'keydown' || e.type === 'keyup'
                ? e.keyCode
                : 0
        },
    }),
    Ay = dt(Ty),
    Iy = _e({}, da, {
        pointerId: 0,
        width: 0,
        height: 0,
        pressure: 0,
        tangentialPressure: 0,
        tiltX: 0,
        tiltY: 0,
        twist: 0,
        pointerType: 0,
        isPrimary: 0,
    }),
    Zd = dt(Iy),
    Ry = _e({}, Oi, {
        touches: 0,
        targetTouches: 0,
        changedTouches: 0,
        altKey: 0,
        metaKey: 0,
        ctrlKey: 0,
        shiftKey: 0,
        getModifierState: ru,
    }),
    Py = dt(Ry),
    Fy = _e({}, Pn, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
    Dy = dt(Fy),
    By = _e({}, da, {
        deltaX: function (e) {
            return 'deltaX' in e
                ? e.deltaX
                : 'wheelDeltaX' in e
                ? -e.wheelDeltaX
                : 0
        },
        deltaY: function (e) {
            return 'deltaY' in e
                ? e.deltaY
                : 'wheelDeltaY' in e
                ? -e.wheelDeltaY
                : 'wheelDelta' in e
                ? -e.wheelDelta
                : 0
        },
        deltaZ: 0,
        deltaMode: 0,
    }),
    Ny = dt(By),
    Uy = [9, 13, 27, 32],
    nu = or && 'CompositionEvent' in window,
    zi = null
or && 'documentMode' in document && (zi = document.documentMode)
var My = or && 'TextEvent' in window && !zi,
    eh = or && (!nu || (zi && 8 < zi && 11 >= zi)),
    th = String.fromCharCode(32),
    rh = !1
function nh(e, t) {
    switch (e) {
        case 'keyup':
            return Uy.indexOf(t.keyCode) !== -1
        case 'keydown':
            return t.keyCode !== 229
        case 'keypress':
        case 'mousedown':
        case 'focusout':
            return !0
        default:
            return !1
    }
}
function ih(e) {
    return (e = e.detail), typeof e == 'object' && 'data' in e ? e.data : null
}
var Fn = !1
function Oy(e, t) {
    switch (e) {
        case 'compositionend':
            return ih(t)
        case 'keypress':
            return t.which !== 32 ? null : ((rh = !0), th)
        case 'textInput':
            return (e = t.data), e === th && rh ? null : e
        default:
            return null
    }
}
function $y(e, t) {
    if (Fn)
        return e === 'compositionend' || (!nu && nh(e, t))
            ? ((e = Yd()), (ua = Ql = wr = null), (Fn = !1), e)
            : null
    switch (e) {
        case 'paste':
            return null
        case 'keypress':
            if (
                !(t.ctrlKey || t.altKey || t.metaKey) ||
                (t.ctrlKey && t.altKey)
            ) {
                if (t.char && 1 < t.char.length) return t.char
                if (t.which) return String.fromCharCode(t.which)
            }
            return null
        case 'compositionend':
            return eh && t.locale !== 'ko' ? null : t.data
        default:
            return null
    }
}
var zy = {
    color: !0,
    date: !0,
    datetime: !0,
    'datetime-local': !0,
    email: !0,
    month: !0,
    number: !0,
    password: !0,
    range: !0,
    search: !0,
    tel: !0,
    text: !0,
    time: !0,
    url: !0,
    week: !0,
}
function oh(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase()
    return t === 'input' ? !!zy[e.type] : t === 'textarea'
}
function ah(e, t, r, n) {
    Td(n),
        (t = pa(t, 'onChange')),
        0 < t.length &&
            ((r = new Jl('onChange', 'change', null, r, n)),
            e.push({ event: r, listeners: t }))
}
var Li = null,
    ji = null
function Ly(e) {
    Sh(e, 0)
}
function ha(e) {
    var t = Mn(e)
    if (md(t)) return e
}
function jy(e, t) {
    if (e === 'change') return t
}
var sh = !1
if (or) {
    var iu
    if (or) {
        var ou = 'oninput' in document
        if (!ou) {
            var lh = document.createElement('div')
            lh.setAttribute('oninput', 'return;'),
                (ou = typeof lh.oninput == 'function')
        }
        iu = ou
    } else iu = !1
    sh = iu && (!document.documentMode || 9 < document.documentMode)
}
function uh() {
    Li && (Li.detachEvent('onpropertychange', ch), (ji = Li = null))
}
function ch(e) {
    if (e.propertyName === 'value' && ha(ji)) {
        var t = []
        if ((ah(t, ji, e, Bl(e)), (e = Ly), Xr)) e(t)
        else {
            Xr = !0
            try {
                Ul(e, t)
            } finally {
                ;(Xr = !1), $l()
            }
        }
    }
}
function Wy(e, t, r) {
    e === 'focusin'
        ? (uh(), (Li = t), (ji = r), Li.attachEvent('onpropertychange', ch))
        : e === 'focusout' && uh()
}
function Hy(e) {
    if (e === 'selectionchange' || e === 'keyup' || e === 'keydown')
        return ha(ji)
}
function Vy(e, t) {
    if (e === 'click') return ha(t)
}
function Ky(e, t) {
    if (e === 'input' || e === 'change') return ha(t)
}
function qy(e, t) {
    return (e === t && (e !== 0 || 1 / e == 1 / t)) || (e !== e && t !== t)
}
var xt = typeof Object.is == 'function' ? Object.is : qy,
    Gy = Object.prototype.hasOwnProperty
function Wi(e, t) {
    if (xt(e, t)) return !0
    if (
        typeof e != 'object' ||
        e === null ||
        typeof t != 'object' ||
        t === null
    )
        return !1
    var r = Object.keys(e),
        n = Object.keys(t)
    if (r.length !== n.length) return !1
    for (n = 0; n < r.length; n++)
        if (!Gy.call(t, r[n]) || !xt(e[r[n]], t[r[n]])) return !1
    return !0
}
function fh(e) {
    for (; e && e.firstChild; ) e = e.firstChild
    return e
}
function dh(e, t) {
    var r = fh(e)
    e = 0
    for (var n; r; ) {
        if (r.nodeType === 3) {
            if (((n = e + r.textContent.length), e <= t && n >= t))
                return { node: r, offset: t - e }
            e = n
        }
        e: {
            for (; r; ) {
                if (r.nextSibling) {
                    r = r.nextSibling
                    break e
                }
                r = r.parentNode
            }
            r = void 0
        }
        r = fh(r)
    }
}
function hh(e, t) {
    return e && t
        ? e === t
            ? !0
            : e && e.nodeType === 3
            ? !1
            : t && t.nodeType === 3
            ? hh(e, t.parentNode)
            : 'contains' in e
            ? e.contains(t)
            : e.compareDocumentPosition
            ? !!(e.compareDocumentPosition(t) & 16)
            : !1
        : !1
}
function ph() {
    for (var e = window, t = Zo(); t instanceof e.HTMLIFrameElement; ) {
        try {
            var r = typeof t.contentWindow.location.href == 'string'
        } catch {
            r = !1
        }
        if (r) e = t.contentWindow
        else break
        t = Zo(e.document)
    }
    return t
}
function au(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase()
    return (
        t &&
        ((t === 'input' &&
            (e.type === 'text' ||
                e.type === 'search' ||
                e.type === 'tel' ||
                e.type === 'url' ||
                e.type === 'password')) ||
            t === 'textarea' ||
            e.contentEditable === 'true')
    )
}
var Yy = or && 'documentMode' in document && 11 >= document.documentMode,
    Dn = null,
    su = null,
    Hi = null,
    lu = !1
function mh(e, t, r) {
    var n = r.window === r ? r.document : r.nodeType === 9 ? r : r.ownerDocument
    lu ||
        Dn == null ||
        Dn !== Zo(n) ||
        ((n = Dn),
        'selectionStart' in n && au(n)
            ? (n = { start: n.selectionStart, end: n.selectionEnd })
            : ((n = (
                  (n.ownerDocument && n.ownerDocument.defaultView) ||
                  window
              ).getSelection()),
              (n = {
                  anchorNode: n.anchorNode,
                  anchorOffset: n.anchorOffset,
                  focusNode: n.focusNode,
                  focusOffset: n.focusOffset,
              })),
        (Hi && Wi(Hi, n)) ||
            ((Hi = n),
            (n = pa(su, 'onSelect')),
            0 < n.length &&
                ((t = new Jl('onSelect', 'select', null, t, r)),
                e.push({ event: t, listeners: n }),
                (t.target = Dn))))
}
ql(
    'cancel cancel click click close close contextmenu contextMenu copy copy cut cut auxclick auxClick dblclick doubleClick dragend dragEnd dragstart dragStart drop drop focusin focus focusout blur input input invalid invalid keydown keyDown keypress keyPress keyup keyUp mousedown mouseDown mouseup mouseUp paste paste pause pause play play pointercancel pointerCancel pointerdown pointerDown pointerup pointerUp ratechange rateChange reset reset seeked seeked submit submit touchcancel touchCancel touchend touchEnd touchstart touchStart volumechange volumeChange'.split(
        ' '
    ),
    0
)
ql(
    'drag drag dragenter dragEnter dragexit dragExit dragleave dragLeave dragover dragOver mousemove mouseMove mouseout mouseOut mouseover mouseOver pointermove pointerMove pointerout pointerOut pointerover pointerOver scroll scroll toggle toggle touchmove touchMove wheel wheel'.split(
        ' '
    ),
    1
)
ql(ny, 2)
for (
    var vh =
            'change selectionchange textInput compositionstart compositionend compositionupdate'.split(
                ' '
            ),
        uu = 0;
    uu < vh.length;
    uu++
)
    Kl.set(vh[uu], 0)
Cn('onMouseEnter', ['mouseout', 'mouseover'])
Cn('onMouseLeave', ['mouseout', 'mouseover'])
Cn('onPointerEnter', ['pointerout', 'pointerover'])
Cn('onPointerLeave', ['pointerout', 'pointerover'])
qr(
    'onChange',
    'change click focusin focusout input keydown keyup selectionchange'.split(
        ' '
    )
)
qr(
    'onSelect',
    'focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange'.split(
        ' '
    )
)
qr('onBeforeInput', ['compositionend', 'keypress', 'textInput', 'paste'])
qr(
    'onCompositionEnd',
    'compositionend focusout keydown keypress keyup mousedown'.split(' ')
)
qr(
    'onCompositionStart',
    'compositionstart focusout keydown keypress keyup mousedown'.split(' ')
)
qr(
    'onCompositionUpdate',
    'compositionupdate focusout keydown keypress keyup mousedown'.split(' ')
)
var Vi =
        'abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange seeked seeking stalled suspend timeupdate volumechange waiting'.split(
            ' '
        ),
    gh = new Set(
        'cancel close invalid load scroll toggle'.split(' ').concat(Vi)
    )
function yh(e, t, r) {
    var n = e.type || 'unknown-event'
    ;(e.currentTarget = r), Jg(n, t, void 0, e), (e.currentTarget = null)
}
function Sh(e, t) {
    t = (t & 4) != 0
    for (var r = 0; r < e.length; r++) {
        var n = e[r],
            i = n.event
        n = n.listeners
        e: {
            var o = void 0
            if (t)
                for (var a = n.length - 1; 0 <= a; a--) {
                    var s = n[a],
                        l = s.instance,
                        u = s.currentTarget
                    if (((s = s.listener), l !== o && i.isPropagationStopped()))
                        break e
                    yh(i, s, u), (o = l)
                }
            else
                for (a = 0; a < n.length; a++) {
                    if (
                        ((s = n[a]),
                        (l = s.instance),
                        (u = s.currentTarget),
                        (s = s.listener),
                        l !== o && i.isPropagationStopped())
                    )
                        break e
                    yh(i, s, u), (o = l)
                }
        }
    }
    if (ra) throw ((e = Ll), (ra = !1), (Ll = null), e)
}
function Se(e, t) {
    var r = Rh(t),
        n = e + '__bubble'
    r.has(n) || (Ch(t, e, 2, !1), r.add(n))
}
var xh = '_reactListening' + Math.random().toString(36).slice(2)
function wh(e) {
    e[xh] ||
        ((e[xh] = !0),
        ld.forEach(function (t) {
            gh.has(t) || bh(t, !1, e, null), bh(t, !0, e, null)
        }))
}
function bh(e, t, r, n) {
    var i = 4 < arguments.length && arguments[4] !== void 0 ? arguments[4] : 0,
        o = r
    if (
        (e === 'selectionchange' && r.nodeType !== 9 && (o = r.ownerDocument),
        n !== null && !t && gh.has(e))
    ) {
        if (e !== 'scroll') return
        ;(i |= 2), (o = n)
    }
    var a = Rh(o),
        s = e + '__' + (t ? 'capture' : 'bubble')
    a.has(s) || (t && (i |= 4), Ch(o, e, i, t), a.add(s))
}
function Ch(e, t, r, n) {
    var i = Kl.get(t)
    switch (i === void 0 ? 2 : i) {
        case 0:
            i = dy
            break
        case 1:
            i = hy
            break
        default:
            i = Yl
    }
    ;(r = i.bind(null, t, r, e)),
        (i = void 0),
        !zl ||
            (t !== 'touchstart' && t !== 'touchmove' && t !== 'wheel') ||
            (i = !0),
        n
            ? i !== void 0
                ? e.addEventListener(t, r, { capture: !0, passive: i })
                : e.addEventListener(t, r, !0)
            : i !== void 0
            ? e.addEventListener(t, r, { passive: i })
            : e.addEventListener(t, r, !1)
}
function _h(e, t, r, n, i) {
    var o = n
    if ((t & 1) == 0 && (t & 2) == 0 && n !== null)
        e: for (;;) {
            if (n === null) return
            var a = n.tag
            if (a === 3 || a === 4) {
                var s = n.stateNode.containerInfo
                if (s === i || (s.nodeType === 8 && s.parentNode === i)) break
                if (a === 4)
                    for (a = n.return; a !== null; ) {
                        var l = a.tag
                        if (
                            (l === 3 || l === 4) &&
                            ((l = a.stateNode.containerInfo),
                            l === i || (l.nodeType === 8 && l.parentNode === i))
                        )
                            return
                        a = a.return
                    }
                for (; s !== null; ) {
                    if (((a = Jr(s)), a === null)) return
                    if (((l = a.tag), l === 5 || l === 6)) {
                        n = o = a
                        continue e
                    }
                    s = s.parentNode
                }
            }
            n = n.return
        }
    Gg(function () {
        var u = o,
            d = Bl(r),
            m = []
        e: {
            var p = qd.get(e)
            if (p !== void 0) {
                var x = Jl,
                    _ = e
                switch (e) {
                    case 'keypress':
                        if (ca(r) === 0) break e
                    case 'keydown':
                    case 'keyup':
                        x = Ay
                        break
                    case 'focusin':
                        ;(_ = 'focus'), (x = tu)
                        break
                    case 'focusout':
                        ;(_ = 'blur'), (x = tu)
                        break
                    case 'beforeblur':
                    case 'afterblur':
                        x = tu
                        break
                    case 'click':
                        if (r.button === 2) break e
                    case 'auxclick':
                    case 'dblclick':
                    case 'mousedown':
                    case 'mousemove':
                    case 'mouseup':
                    case 'mouseout':
                    case 'mouseover':
                    case 'contextmenu':
                        x = Qd
                        break
                    case 'drag':
                    case 'dragend':
                    case 'dragenter':
                    case 'dragexit':
                    case 'dragleave':
                    case 'dragover':
                    case 'dragstart':
                    case 'drop':
                        x = vy
                        break
                    case 'touchcancel':
                    case 'touchend':
                    case 'touchmove':
                    case 'touchstart':
                        x = Py
                        break
                    case Wd:
                    case Hd:
                    case Vd:
                        x = Sy
                        break
                    case Kd:
                        x = Dy
                        break
                    case 'scroll':
                        x = py
                        break
                    case 'wheel':
                        x = Ny
                        break
                    case 'copy':
                    case 'cut':
                    case 'paste':
                        x = wy
                        break
                    case 'gotpointercapture':
                    case 'lostpointercapture':
                    case 'pointercancel':
                    case 'pointerdown':
                    case 'pointermove':
                    case 'pointerout':
                    case 'pointerover':
                    case 'pointerup':
                        x = Zd
                }
                var b = (t & 4) != 0,
                    g = !b && e === 'scroll',
                    v = b ? (p !== null ? p + 'Capture' : null) : p
                b = []
                for (var h = u, C; h !== null; ) {
                    C = h
                    var E = C.stateNode
                    if (
                        (C.tag === 5 &&
                            E !== null &&
                            ((C = E),
                            v !== null &&
                                ((E = Ii(h, v)),
                                E != null && b.push(Ki(h, E, C)))),
                        g)
                    )
                        break
                    h = h.return
                }
                0 < b.length &&
                    ((p = new x(p, _, null, r, d)),
                    m.push({ event: p, listeners: b }))
            }
        }
        if ((t & 7) == 0) {
            e: {
                if (
                    ((p = e === 'mouseover' || e === 'pointerover'),
                    (x = e === 'mouseout' || e === 'pointerout'),
                    p &&
                        (t & 16) == 0 &&
                        (_ = r.relatedTarget || r.fromElement) &&
                        (Jr(_) || _[Un]))
                )
                    break e
                if (
                    (x || p) &&
                    ((p =
                        d.window === d
                            ? d
                            : (p = d.ownerDocument)
                            ? p.defaultView || p.parentWindow
                            : window),
                    x
                        ? ((_ = r.relatedTarget || r.toElement),
                          (x = u),
                          (_ = _ ? Jr(_) : null),
                          _ !== null &&
                              ((g = Qr(_)),
                              _ !== g || (_.tag !== 5 && _.tag !== 6)) &&
                              (_ = null))
                        : ((x = null), (_ = u)),
                    x !== _)
                ) {
                    if (
                        ((b = Qd),
                        (E = 'onMouseLeave'),
                        (v = 'onMouseEnter'),
                        (h = 'mouse'),
                        (e === 'pointerout' || e === 'pointerover') &&
                            ((b = Zd),
                            (E = 'onPointerLeave'),
                            (v = 'onPointerEnter'),
                            (h = 'pointer')),
                        (g = x == null ? p : Mn(x)),
                        (C = _ == null ? p : Mn(_)),
                        (p = new b(E, h + 'leave', x, r, d)),
                        (p.target = g),
                        (p.relatedTarget = C),
                        (E = null),
                        Jr(d) === u &&
                            ((b = new b(v, h + 'enter', _, r, d)),
                            (b.target = C),
                            (b.relatedTarget = g),
                            (E = b)),
                        (g = E),
                        x && _)
                    )
                        t: {
                            for (b = x, v = _, h = 0, C = b; C; C = Bn(C)) h++
                            for (C = 0, E = v; E; E = Bn(E)) C++
                            for (; 0 < h - C; ) (b = Bn(b)), h--
                            for (; 0 < C - h; ) (v = Bn(v)), C--
                            for (; h--; ) {
                                if (
                                    b === v ||
                                    (v !== null && b === v.alternate)
                                )
                                    break t
                                ;(b = Bn(b)), (v = Bn(v))
                            }
                            b = null
                        }
                    else b = null
                    x !== null && Eh(m, p, x, b, !1),
                        _ !== null && g !== null && Eh(m, g, _, b, !0)
                }
            }
            e: {
                if (
                    ((p = u ? Mn(u) : window),
                    (x = p.nodeName && p.nodeName.toLowerCase()),
                    x === 'select' || (x === 'input' && p.type === 'file'))
                )
                    var D = jy
                else if (oh(p))
                    if (sh) D = Ky
                    else {
                        D = Hy
                        var P = Wy
                    }
                else
                    (x = p.nodeName) &&
                        x.toLowerCase() === 'input' &&
                        (p.type === 'checkbox' || p.type === 'radio') &&
                        (D = Vy)
                if (D && (D = D(e, u))) {
                    ah(m, D, r, d)
                    break e
                }
                P && P(e, p, u),
                    e === 'focusout' &&
                        (P = p._wrapperState) &&
                        P.controlled &&
                        p.type === 'number' &&
                        Tl(p, 'number', p.value)
            }
            switch (((P = u ? Mn(u) : window), e)) {
                case 'focusin':
                    ;(oh(P) || P.contentEditable === 'true') &&
                        ((Dn = P), (su = u), (Hi = null))
                    break
                case 'focusout':
                    Hi = su = Dn = null
                    break
                case 'mousedown':
                    lu = !0
                    break
                case 'contextmenu':
                case 'mouseup':
                case 'dragend':
                    ;(lu = !1), mh(m, r, d)
                    break
                case 'selectionchange':
                    if (Yy) break
                case 'keydown':
                case 'keyup':
                    mh(m, r, d)
            }
            var F
            if (nu)
                e: {
                    switch (e) {
                        case 'compositionstart':
                            var O = 'onCompositionStart'
                            break e
                        case 'compositionend':
                            O = 'onCompositionEnd'
                            break e
                        case 'compositionupdate':
                            O = 'onCompositionUpdate'
                            break e
                    }
                    O = void 0
                }
            else
                Fn
                    ? nh(e, r) && (O = 'onCompositionEnd')
                    : e === 'keydown' &&
                      r.keyCode === 229 &&
                      (O = 'onCompositionStart')
            O &&
                (eh &&
                    r.locale !== 'ko' &&
                    (Fn || O !== 'onCompositionStart'
                        ? O === 'onCompositionEnd' && Fn && (F = Yd())
                        : ((wr = d),
                          (Ql = 'value' in wr ? wr.value : wr.textContent),
                          (Fn = !0))),
                (P = pa(u, O)),
                0 < P.length &&
                    ((O = new Jd(O, e, null, r, d)),
                    m.push({ event: O, listeners: P }),
                    F
                        ? (O.data = F)
                        : ((F = ih(r)), F !== null && (O.data = F)))),
                (F = My ? Oy(e, r) : $y(e, r)) &&
                    ((u = pa(u, 'onBeforeInput')),
                    0 < u.length &&
                        ((d = new Jd(
                            'onBeforeInput',
                            'beforeinput',
                            null,
                            r,
                            d
                        )),
                        m.push({ event: d, listeners: u }),
                        (d.data = F)))
        }
        Sh(m, t)
    })
}
function Ki(e, t, r) {
    return { instance: e, listener: t, currentTarget: r }
}
function pa(e, t) {
    for (var r = t + 'Capture', n = []; e !== null; ) {
        var i = e,
            o = i.stateNode
        i.tag === 5 &&
            o !== null &&
            ((i = o),
            (o = Ii(e, r)),
            o != null && n.unshift(Ki(e, o, i)),
            (o = Ii(e, t)),
            o != null && n.push(Ki(e, o, i))),
            (e = e.return)
    }
    return n
}
function Bn(e) {
    if (e === null) return null
    do e = e.return
    while (e && e.tag !== 5)
    return e || null
}
function Eh(e, t, r, n, i) {
    for (var o = t._reactName, a = []; r !== null && r !== n; ) {
        var s = r,
            l = s.alternate,
            u = s.stateNode
        if (l !== null && l === n) break
        s.tag === 5 &&
            u !== null &&
            ((s = u),
            i
                ? ((l = Ii(r, o)), l != null && a.unshift(Ki(r, l, s)))
                : i || ((l = Ii(r, o)), l != null && a.push(Ki(r, l, s)))),
            (r = r.return)
    }
    a.length !== 0 && e.push({ event: t, listeners: a })
}
function ma() {}
var cu = null,
    fu = null
function kh(e, t) {
    switch (e) {
        case 'button':
        case 'input':
        case 'select':
        case 'textarea':
            return !!t.autoFocus
    }
    return !1
}
function du(e, t) {
    return (
        e === 'textarea' ||
        e === 'option' ||
        e === 'noscript' ||
        typeof t.children == 'string' ||
        typeof t.children == 'number' ||
        (typeof t.dangerouslySetInnerHTML == 'object' &&
            t.dangerouslySetInnerHTML !== null &&
            t.dangerouslySetInnerHTML.__html != null)
    )
}
var Th = typeof setTimeout == 'function' ? setTimeout : void 0,
    Xy = typeof clearTimeout == 'function' ? clearTimeout : void 0
function hu(e) {
    e.nodeType === 1
        ? (e.textContent = '')
        : e.nodeType === 9 && ((e = e.body), e != null && (e.textContent = ''))
}
function Nn(e) {
    for (; e != null; e = e.nextSibling) {
        var t = e.nodeType
        if (t === 1 || t === 3) break
    }
    return e
}
function Ah(e) {
    e = e.previousSibling
    for (var t = 0; e; ) {
        if (e.nodeType === 8) {
            var r = e.data
            if (r === '$' || r === '$!' || r === '$?') {
                if (t === 0) return e
                t--
            } else r === '/$' && t++
        }
        e = e.previousSibling
    }
    return null
}
var pu = 0
function Qy(e) {
    return { $$typeof: xl, toString: e, valueOf: e }
}
var va = Math.random().toString(36).slice(2),
    br = '__reactFiber$' + va,
    ga = '__reactProps$' + va,
    Un = '__reactContainer$' + va,
    Ih = '__reactEvents$' + va
function Jr(e) {
    var t = e[br]
    if (t) return t
    for (var r = e.parentNode; r; ) {
        if ((t = r[Un] || r[br])) {
            if (
                ((r = t.alternate),
                t.child !== null || (r !== null && r.child !== null))
            )
                for (e = Ah(e); e !== null; ) {
                    if ((r = e[br])) return r
                    e = Ah(e)
                }
            return t
        }
        ;(e = r), (r = e.parentNode)
    }
    return null
}
function qi(e) {
    return (
        (e = e[br] || e[Un]),
        !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3)
            ? null
            : e
    )
}
function Mn(e) {
    if (e.tag === 5 || e.tag === 6) return e.stateNode
    throw Error(z(33))
}
function ya(e) {
    return e[ga] || null
}
function Rh(e) {
    var t = e[Ih]
    return t === void 0 && (t = e[Ih] = new Set()), t
}
var mu = [],
    On = -1
function Cr(e) {
    return { current: e }
}
function xe(e) {
    0 > On || ((e.current = mu[On]), (mu[On] = null), On--)
}
function Te(e, t) {
    On++, (mu[On] = e.current), (e.current = t)
}
var _r = {},
    Ge = Cr(_r),
    nt = Cr(!1),
    Zr = _r
function $n(e, t) {
    var r = e.type.contextTypes
    if (!r) return _r
    var n = e.stateNode
    if (n && n.__reactInternalMemoizedUnmaskedChildContext === t)
        return n.__reactInternalMemoizedMaskedChildContext
    var i = {},
        o
    for (o in r) i[o] = t[o]
    return (
        n &&
            ((e = e.stateNode),
            (e.__reactInternalMemoizedUnmaskedChildContext = t),
            (e.__reactInternalMemoizedMaskedChildContext = i)),
        i
    )
}
function it(e) {
    return (e = e.childContextTypes), e != null
}
function Sa() {
    xe(nt), xe(Ge)
}
function Ph(e, t, r) {
    if (Ge.current !== _r) throw Error(z(168))
    Te(Ge, t), Te(nt, r)
}
function Fh(e, t, r) {
    var n = e.stateNode
    if (((e = t.childContextTypes), typeof n.getChildContext != 'function'))
        return r
    n = n.getChildContext()
    for (var i in n) if (!(i in e)) throw Error(z(108, _n(t) || 'Unknown', i))
    return _e({}, r, n)
}
function xa(e) {
    return (
        (e =
            ((e = e.stateNode) &&
                e.__reactInternalMemoizedMergedChildContext) ||
            _r),
        (Zr = Ge.current),
        Te(Ge, e),
        Te(nt, nt.current),
        !0
    )
}
function Dh(e, t, r) {
    var n = e.stateNode
    if (!n) throw Error(z(169))
    r
        ? ((e = Fh(e, t, Zr)),
          (n.__reactInternalMemoizedMergedChildContext = e),
          xe(nt),
          xe(Ge),
          Te(Ge, e))
        : xe(nt),
        Te(nt, r)
}
var vu = null,
    en = null,
    Jy = Me.unstable_runWithPriority,
    gu = Me.unstable_scheduleCallback,
    yu = Me.unstable_cancelCallback,
    Zy = Me.unstable_shouldYield,
    Bh = Me.unstable_requestPaint,
    Su = Me.unstable_now,
    e1 = Me.unstable_getCurrentPriorityLevel,
    wa = Me.unstable_ImmediatePriority,
    Nh = Me.unstable_UserBlockingPriority,
    Uh = Me.unstable_NormalPriority,
    Mh = Me.unstable_LowPriority,
    Oh = Me.unstable_IdlePriority,
    xu = {},
    t1 = Bh !== void 0 ? Bh : function () {},
    ar = null,
    ba = null,
    wu = !1,
    $h = Su(),
    Ye =
        1e4 > $h
            ? Su
            : function () {
                  return Su() - $h
              }
function zn() {
    switch (e1()) {
        case wa:
            return 99
        case Nh:
            return 98
        case Uh:
            return 97
        case Mh:
            return 96
        case Oh:
            return 95
        default:
            throw Error(z(332))
    }
}
function zh(e) {
    switch (e) {
        case 99:
            return wa
        case 98:
            return Nh
        case 97:
            return Uh
        case 96:
            return Mh
        case 95:
            return Oh
        default:
            throw Error(z(332))
    }
}
function tn(e, t) {
    return (e = zh(e)), Jy(e, t)
}
function Gi(e, t, r) {
    return (e = zh(e)), gu(e, t, r)
}
function Wt() {
    if (ba !== null) {
        var e = ba
        ;(ba = null), yu(e)
    }
    Lh()
}
function Lh() {
    if (!wu && ar !== null) {
        wu = !0
        var e = 0
        try {
            var t = ar
            tn(99, function () {
                for (; e < t.length; e++) {
                    var r = t[e]
                    do r = r(!0)
                    while (r !== null)
                }
            }),
                (ar = null)
        } catch (r) {
            throw (ar !== null && (ar = ar.slice(e + 1)), gu(wa, Wt), r)
        } finally {
            wu = !1
        }
    }
}
var r1 = Gr.ReactCurrentBatchConfig
function Bt(e, t) {
    if (e && e.defaultProps) {
        ;(t = _e({}, t)), (e = e.defaultProps)
        for (var r in e) t[r] === void 0 && (t[r] = e[r])
        return t
    }
    return t
}
var Ca = Cr(null),
    _a = null,
    Ln = null,
    Ea = null
function bu() {
    Ea = Ln = _a = null
}
function Cu(e) {
    var t = Ca.current
    xe(Ca), (e.type._context._currentValue = t)
}
function jh(e, t) {
    for (; e !== null; ) {
        var r = e.alternate
        if ((e.childLanes & t) === t) {
            if (r === null || (r.childLanes & t) === t) break
            r.childLanes |= t
        } else (e.childLanes |= t), r !== null && (r.childLanes |= t)
        e = e.return
    }
}
function jn(e, t) {
    ;(_a = e),
        (Ea = Ln = null),
        (e = e.dependencies),
        e !== null &&
            e.firstContext !== null &&
            ((e.lanes & t) != 0 && (Nt = !0), (e.firstContext = null))
}
function wt(e, t) {
    if (Ea !== e && t !== !1 && t !== 0)
        if (
            ((typeof t != 'number' || t === 1073741823) &&
                ((Ea = e), (t = 1073741823)),
            (t = { context: e, observedBits: t, next: null }),
            Ln === null)
        ) {
            if (_a === null) throw Error(z(308))
            ;(Ln = t),
                (_a.dependencies = {
                    lanes: 0,
                    firstContext: t,
                    responders: null,
                })
        } else Ln = Ln.next = t
    return e._currentValue
}
var Er = !1
function _u(e) {
    e.updateQueue = {
        baseState: e.memoizedState,
        firstBaseUpdate: null,
        lastBaseUpdate: null,
        shared: { pending: null },
        effects: null,
    }
}
function Wh(e, t) {
    ;(e = e.updateQueue),
        t.updateQueue === e &&
            (t.updateQueue = {
                baseState: e.baseState,
                firstBaseUpdate: e.firstBaseUpdate,
                lastBaseUpdate: e.lastBaseUpdate,
                shared: e.shared,
                effects: e.effects,
            })
}
function kr(e, t) {
    return {
        eventTime: e,
        lane: t,
        tag: 0,
        payload: null,
        callback: null,
        next: null,
    }
}
function Tr(e, t) {
    if (((e = e.updateQueue), e !== null)) {
        e = e.shared
        var r = e.pending
        r === null ? (t.next = t) : ((t.next = r.next), (r.next = t)),
            (e.pending = t)
    }
}
function Hh(e, t) {
    var r = e.updateQueue,
        n = e.alternate
    if (n !== null && ((n = n.updateQueue), r === n)) {
        var i = null,
            o = null
        if (((r = r.firstBaseUpdate), r !== null)) {
            do {
                var a = {
                    eventTime: r.eventTime,
                    lane: r.lane,
                    tag: r.tag,
                    payload: r.payload,
                    callback: r.callback,
                    next: null,
                }
                o === null ? (i = o = a) : (o = o.next = a), (r = r.next)
            } while (r !== null)
            o === null ? (i = o = t) : (o = o.next = t)
        } else i = o = t
        ;(r = {
            baseState: n.baseState,
            firstBaseUpdate: i,
            lastBaseUpdate: o,
            shared: n.shared,
            effects: n.effects,
        }),
            (e.updateQueue = r)
        return
    }
    ;(e = r.lastBaseUpdate),
        e === null ? (r.firstBaseUpdate = t) : (e.next = t),
        (r.lastBaseUpdate = t)
}
function Yi(e, t, r, n) {
    var i = e.updateQueue
    Er = !1
    var o = i.firstBaseUpdate,
        a = i.lastBaseUpdate,
        s = i.shared.pending
    if (s !== null) {
        i.shared.pending = null
        var l = s,
            u = l.next
        ;(l.next = null), a === null ? (o = u) : (a.next = u), (a = l)
        var d = e.alternate
        if (d !== null) {
            d = d.updateQueue
            var m = d.lastBaseUpdate
            m !== a &&
                (m === null ? (d.firstBaseUpdate = u) : (m.next = u),
                (d.lastBaseUpdate = l))
        }
    }
    if (o !== null) {
        ;(m = i.baseState), (a = 0), (d = u = l = null)
        do {
            s = o.lane
            var p = o.eventTime
            if ((n & s) === s) {
                d !== null &&
                    (d = d.next =
                        {
                            eventTime: p,
                            lane: 0,
                            tag: o.tag,
                            payload: o.payload,
                            callback: o.callback,
                            next: null,
                        })
                e: {
                    var x = e,
                        _ = o
                    switch (((s = t), (p = r), _.tag)) {
                        case 1:
                            if (((x = _.payload), typeof x == 'function')) {
                                m = x.call(p, m, s)
                                break e
                            }
                            m = x
                            break e
                        case 3:
                            x.flags = (x.flags & -4097) | 64
                        case 0:
                            if (
                                ((x = _.payload),
                                (s =
                                    typeof x == 'function'
                                        ? x.call(p, m, s)
                                        : x),
                                s == null)
                            )
                                break e
                            m = _e({}, m, s)
                            break e
                        case 2:
                            Er = !0
                    }
                }
                o.callback !== null &&
                    ((e.flags |= 32),
                    (s = i.effects),
                    s === null ? (i.effects = [o]) : s.push(o))
            } else
                (p = {
                    eventTime: p,
                    lane: s,
                    tag: o.tag,
                    payload: o.payload,
                    callback: o.callback,
                    next: null,
                }),
                    d === null ? ((u = d = p), (l = m)) : (d = d.next = p),
                    (a |= s)
            if (((o = o.next), o === null)) {
                if (((s = i.shared.pending), s === null)) break
                ;(o = s.next),
                    (s.next = null),
                    (i.lastBaseUpdate = s),
                    (i.shared.pending = null)
            }
        } while (1)
        d === null && (l = m),
            (i.baseState = l),
            (i.firstBaseUpdate = u),
            (i.lastBaseUpdate = d),
            (so |= a),
            (e.lanes = a),
            (e.memoizedState = m)
    }
}
function Vh(e, t, r) {
    if (((e = t.effects), (t.effects = null), e !== null))
        for (t = 0; t < e.length; t++) {
            var n = e[t],
                i = n.callback
            if (i !== null) {
                if (((n.callback = null), (n = r), typeof i != 'function'))
                    throw Error(z(191, i))
                i.call(n)
            }
        }
}
var Kh = new qo.Component().refs
function ka(e, t, r, n) {
    ;(t = e.memoizedState),
        (r = r(n, t)),
        (r = r == null ? t : _e({}, t, r)),
        (e.memoizedState = r),
        e.lanes === 0 && (e.updateQueue.baseState = r)
}
var Ta = {
    isMounted: function (e) {
        return (e = e._reactInternals) ? Qr(e) === e : !1
    },
    enqueueSetState: function (e, t, r) {
        e = e._reactInternals
        var n = ht(),
            i = Rr(e),
            o = kr(n, i)
        ;(o.payload = t), r != null && (o.callback = r), Tr(e, o), Pr(e, i, n)
    },
    enqueueReplaceState: function (e, t, r) {
        e = e._reactInternals
        var n = ht(),
            i = Rr(e),
            o = kr(n, i)
        ;(o.tag = 1),
            (o.payload = t),
            r != null && (o.callback = r),
            Tr(e, o),
            Pr(e, i, n)
    },
    enqueueForceUpdate: function (e, t) {
        e = e._reactInternals
        var r = ht(),
            n = Rr(e),
            i = kr(r, n)
        ;(i.tag = 2), t != null && (i.callback = t), Tr(e, i), Pr(e, n, r)
    },
}
function qh(e, t, r, n, i, o, a) {
    return (
        (e = e.stateNode),
        typeof e.shouldComponentUpdate == 'function'
            ? e.shouldComponentUpdate(n, o, a)
            : t.prototype && t.prototype.isPureReactComponent
            ? !Wi(r, n) || !Wi(i, o)
            : !0
    )
}
function Gh(e, t, r) {
    var n = !1,
        i = _r,
        o = t.contextType
    return (
        typeof o == 'object' && o !== null
            ? (o = wt(o))
            : ((i = it(t) ? Zr : Ge.current),
              (n = t.contextTypes),
              (o = (n = n != null) ? $n(e, i) : _r)),
        (t = new t(r, o)),
        (e.memoizedState =
            t.state !== null && t.state !== void 0 ? t.state : null),
        (t.updater = Ta),
        (e.stateNode = t),
        (t._reactInternals = e),
        n &&
            ((e = e.stateNode),
            (e.__reactInternalMemoizedUnmaskedChildContext = i),
            (e.__reactInternalMemoizedMaskedChildContext = o)),
        t
    )
}
function Yh(e, t, r, n) {
    ;(e = t.state),
        typeof t.componentWillReceiveProps == 'function' &&
            t.componentWillReceiveProps(r, n),
        typeof t.UNSAFE_componentWillReceiveProps == 'function' &&
            t.UNSAFE_componentWillReceiveProps(r, n),
        t.state !== e && Ta.enqueueReplaceState(t, t.state, null)
}
function Eu(e, t, r, n) {
    var i = e.stateNode
    ;(i.props = r), (i.state = e.memoizedState), (i.refs = Kh), _u(e)
    var o = t.contextType
    typeof o == 'object' && o !== null
        ? (i.context = wt(o))
        : ((o = it(t) ? Zr : Ge.current), (i.context = $n(e, o))),
        Yi(e, r, i, n),
        (i.state = e.memoizedState),
        (o = t.getDerivedStateFromProps),
        typeof o == 'function' && (ka(e, t, o, r), (i.state = e.memoizedState)),
        typeof t.getDerivedStateFromProps == 'function' ||
            typeof i.getSnapshotBeforeUpdate == 'function' ||
            (typeof i.UNSAFE_componentWillMount != 'function' &&
                typeof i.componentWillMount != 'function') ||
            ((t = i.state),
            typeof i.componentWillMount == 'function' && i.componentWillMount(),
            typeof i.UNSAFE_componentWillMount == 'function' &&
                i.UNSAFE_componentWillMount(),
            t !== i.state && Ta.enqueueReplaceState(i, i.state, null),
            Yi(e, r, i, n),
            (i.state = e.memoizedState)),
        typeof i.componentDidMount == 'function' && (e.flags |= 4)
}
var Aa = Array.isArray
function Xi(e, t, r) {
    if (
        ((e = r.ref),
        e !== null && typeof e != 'function' && typeof e != 'object')
    ) {
        if (r._owner) {
            if (((r = r._owner), r)) {
                if (r.tag !== 1) throw Error(z(309))
                var n = r.stateNode
            }
            if (!n) throw Error(z(147, e))
            var i = '' + e
            return t !== null &&
                t.ref !== null &&
                typeof t.ref == 'function' &&
                t.ref._stringRef === i
                ? t.ref
                : ((t = function (o) {
                      var a = n.refs
                      a === Kh && (a = n.refs = {}),
                          o === null ? delete a[i] : (a[i] = o)
                  }),
                  (t._stringRef = i),
                  t)
        }
        if (typeof e != 'string') throw Error(z(284))
        if (!r._owner) throw Error(z(290, e))
    }
    return e
}
function Ia(e, t) {
    if (e.type !== 'textarea')
        throw Error(
            z(
                31,
                Object.prototype.toString.call(t) === '[object Object]'
                    ? 'object with keys {' + Object.keys(t).join(', ') + '}'
                    : t
            )
        )
}
function Xh(e) {
    function t(g, v) {
        if (e) {
            var h = g.lastEffect
            h !== null
                ? ((h.nextEffect = v), (g.lastEffect = v))
                : (g.firstEffect = g.lastEffect = v),
                (v.nextEffect = null),
                (v.flags = 8)
        }
    }
    function r(g, v) {
        if (!e) return null
        for (; v !== null; ) t(g, v), (v = v.sibling)
        return null
    }
    function n(g, v) {
        for (g = new Map(); v !== null; )
            v.key !== null ? g.set(v.key, v) : g.set(v.index, v),
                (v = v.sibling)
        return g
    }
    function i(g, v) {
        return (g = Br(g, v)), (g.index = 0), (g.sibling = null), g
    }
    function o(g, v, h) {
        return (
            (g.index = h),
            e
                ? ((h = g.alternate),
                  h !== null
                      ? ((h = h.index), h < v ? ((g.flags = 2), v) : h)
                      : ((g.flags = 2), v))
                : v
        )
    }
    function a(g) {
        return e && g.alternate === null && (g.flags = 2), g
    }
    function s(g, v, h, C) {
        return v === null || v.tag !== 6
            ? ((v = sc(h, g.mode, C)), (v.return = g), v)
            : ((v = i(v, h)), (v.return = g), v)
    }
    function l(g, v, h, C) {
        return v !== null && v.elementType === h.type
            ? ((C = i(v, h.props)), (C.ref = Xi(g, v, h)), (C.return = g), C)
            : ((C = qa(h.type, h.key, h.props, null, g.mode, C)),
              (C.ref = Xi(g, v, h)),
              (C.return = g),
              C)
    }
    function u(g, v, h, C) {
        return v === null ||
            v.tag !== 4 ||
            v.stateNode.containerInfo !== h.containerInfo ||
            v.stateNode.implementation !== h.implementation
            ? ((v = lc(h, g.mode, C)), (v.return = g), v)
            : ((v = i(v, h.children || [])), (v.return = g), v)
    }
    function d(g, v, h, C, E) {
        return v === null || v.tag !== 7
            ? ((v = Xn(h, g.mode, C, E)), (v.return = g), v)
            : ((v = i(v, h)), (v.return = g), v)
    }
    function m(g, v, h) {
        if (typeof v == 'string' || typeof v == 'number')
            return (v = sc('' + v, g.mode, h)), (v.return = g), v
        if (typeof v == 'object' && v !== null) {
            switch (v.$$typeof) {
                case bi:
                    return (
                        (h = qa(v.type, v.key, v.props, null, g.mode, h)),
                        (h.ref = Xi(g, null, v)),
                        (h.return = g),
                        h
                    )
                case Yr:
                    return (v = lc(v, g.mode, h)), (v.return = g), v
            }
            if (Aa(v) || Ei(v))
                return (v = Xn(v, g.mode, h, null)), (v.return = g), v
            Ia(g, v)
        }
        return null
    }
    function p(g, v, h, C) {
        var E = v !== null ? v.key : null
        if (typeof h == 'string' || typeof h == 'number')
            return E !== null ? null : s(g, v, '' + h, C)
        if (typeof h == 'object' && h !== null) {
            switch (h.$$typeof) {
                case bi:
                    return h.key === E
                        ? h.type === mr
                            ? d(g, v, h.props.children, C, E)
                            : l(g, v, h, C)
                        : null
                case Yr:
                    return h.key === E ? u(g, v, h, C) : null
            }
            if (Aa(h) || Ei(h)) return E !== null ? null : d(g, v, h, C, null)
            Ia(g, h)
        }
        return null
    }
    function x(g, v, h, C, E) {
        if (typeof C == 'string' || typeof C == 'number')
            return (g = g.get(h) || null), s(v, g, '' + C, E)
        if (typeof C == 'object' && C !== null) {
            switch (C.$$typeof) {
                case bi:
                    return (
                        (g = g.get(C.key === null ? h : C.key) || null),
                        C.type === mr
                            ? d(v, g, C.props.children, E, C.key)
                            : l(v, g, C, E)
                    )
                case Yr:
                    return (
                        (g = g.get(C.key === null ? h : C.key) || null),
                        u(v, g, C, E)
                    )
            }
            if (Aa(C) || Ei(C))
                return (g = g.get(h) || null), d(v, g, C, E, null)
            Ia(v, C)
        }
        return null
    }
    function _(g, v, h, C) {
        for (
            var E = null, D = null, P = v, F = (v = 0), O = null;
            P !== null && F < h.length;
            F++
        ) {
            P.index > F ? ((O = P), (P = null)) : (O = P.sibling)
            var M = p(g, P, h[F], C)
            if (M === null) {
                P === null && (P = O)
                break
            }
            e && P && M.alternate === null && t(g, P),
                (v = o(M, v, F)),
                D === null ? (E = M) : (D.sibling = M),
                (D = M),
                (P = O)
        }
        if (F === h.length) return r(g, P), E
        if (P === null) {
            for (; F < h.length; F++)
                (P = m(g, h[F], C)),
                    P !== null &&
                        ((v = o(P, v, F)),
                        D === null ? (E = P) : (D.sibling = P),
                        (D = P))
            return E
        }
        for (P = n(g, P); F < h.length; F++)
            (O = x(P, g, F, h[F], C)),
                O !== null &&
                    (e &&
                        O.alternate !== null &&
                        P.delete(O.key === null ? F : O.key),
                    (v = o(O, v, F)),
                    D === null ? (E = O) : (D.sibling = O),
                    (D = O))
        return (
            e &&
                P.forEach(function (L) {
                    return t(g, L)
                }),
            E
        )
    }
    function b(g, v, h, C) {
        var E = Ei(h)
        if (typeof E != 'function') throw Error(z(150))
        if (((h = E.call(h)), h == null)) throw Error(z(151))
        for (
            var D = (E = null), P = v, F = (v = 0), O = null, M = h.next();
            P !== null && !M.done;
            F++, M = h.next()
        ) {
            P.index > F ? ((O = P), (P = null)) : (O = P.sibling)
            var L = p(g, P, M.value, C)
            if (L === null) {
                P === null && (P = O)
                break
            }
            e && P && L.alternate === null && t(g, P),
                (v = o(L, v, F)),
                D === null ? (E = L) : (D.sibling = L),
                (D = L),
                (P = O)
        }
        if (M.done) return r(g, P), E
        if (P === null) {
            for (; !M.done; F++, M = h.next())
                (M = m(g, M.value, C)),
                    M !== null &&
                        ((v = o(M, v, F)),
                        D === null ? (E = M) : (D.sibling = M),
                        (D = M))
            return E
        }
        for (P = n(g, P); !M.done; F++, M = h.next())
            (M = x(P, g, F, M.value, C)),
                M !== null &&
                    (e &&
                        M.alternate !== null &&
                        P.delete(M.key === null ? F : M.key),
                    (v = o(M, v, F)),
                    D === null ? (E = M) : (D.sibling = M),
                    (D = M))
        return (
            e &&
                P.forEach(function (q) {
                    return t(g, q)
                }),
            E
        )
    }
    return function (g, v, h, C) {
        var E =
            typeof h == 'object' &&
            h !== null &&
            h.type === mr &&
            h.key === null
        E && (h = h.props.children)
        var D = typeof h == 'object' && h !== null
        if (D)
            switch (h.$$typeof) {
                case bi:
                    e: {
                        for (D = h.key, E = v; E !== null; ) {
                            if (E.key === D) {
                                switch (E.tag) {
                                    case 7:
                                        if (h.type === mr) {
                                            r(g, E.sibling),
                                                (v = i(E, h.props.children)),
                                                (v.return = g),
                                                (g = v)
                                            break e
                                        }
                                        break
                                    default:
                                        if (E.elementType === h.type) {
                                            r(g, E.sibling),
                                                (v = i(E, h.props)),
                                                (v.ref = Xi(g, E, h)),
                                                (v.return = g),
                                                (g = v)
                                            break e
                                        }
                                }
                                r(g, E)
                                break
                            } else t(g, E)
                            E = E.sibling
                        }
                        h.type === mr
                            ? ((v = Xn(h.props.children, g.mode, C, h.key)),
                              (v.return = g),
                              (g = v))
                            : ((C = qa(
                                  h.type,
                                  h.key,
                                  h.props,
                                  null,
                                  g.mode,
                                  C
                              )),
                              (C.ref = Xi(g, v, h)),
                              (C.return = g),
                              (g = C))
                    }
                    return a(g)
                case Yr:
                    e: {
                        for (E = h.key; v !== null; ) {
                            if (v.key === E)
                                if (
                                    v.tag === 4 &&
                                    v.stateNode.containerInfo ===
                                        h.containerInfo &&
                                    v.stateNode.implementation ===
                                        h.implementation
                                ) {
                                    r(g, v.sibling),
                                        (v = i(v, h.children || [])),
                                        (v.return = g),
                                        (g = v)
                                    break e
                                } else {
                                    r(g, v)
                                    break
                                }
                            else t(g, v)
                            v = v.sibling
                        }
                        ;(v = lc(h, g.mode, C)), (v.return = g), (g = v)
                    }
                    return a(g)
            }
        if (typeof h == 'string' || typeof h == 'number')
            return (
                (h = '' + h),
                v !== null && v.tag === 6
                    ? (r(g, v.sibling), (v = i(v, h)), (v.return = g), (g = v))
                    : (r(g, v),
                      (v = sc(h, g.mode, C)),
                      (v.return = g),
                      (g = v)),
                a(g)
            )
        if (Aa(h)) return _(g, v, h, C)
        if (Ei(h)) return b(g, v, h, C)
        if ((D && Ia(g, h), typeof h == 'undefined' && !E))
            switch (g.tag) {
                case 1:
                case 22:
                case 0:
                case 11:
                case 15:
                    throw Error(z(152, _n(g.type) || 'Component'))
            }
        return r(g, v)
    }
}
var Ra = Xh(!0),
    Qh = Xh(!1),
    Qi = {},
    Ht = Cr(Qi),
    Ji = Cr(Qi),
    Zi = Cr(Qi)
function rn(e) {
    if (e === Qi) throw Error(z(174))
    return e
}
function ku(e, t) {
    switch ((Te(Zi, t), Te(Ji, e), Te(Ht, Qi), (e = t.nodeType), e)) {
        case 9:
        case 11:
            t = (t = t.documentElement) ? t.namespaceURI : Pl(null, '')
            break
        default:
            ;(e = e === 8 ? t.parentNode : t),
                (t = e.namespaceURI || null),
                (e = e.tagName),
                (t = Pl(t, e))
    }
    xe(Ht), Te(Ht, t)
}
function Wn() {
    xe(Ht), xe(Ji), xe(Zi)
}
function Jh(e) {
    rn(Zi.current)
    var t = rn(Ht.current),
        r = Pl(t, e.type)
    t !== r && (Te(Ji, e), Te(Ht, r))
}
function Tu(e) {
    Ji.current === e && (xe(Ht), xe(Ji))
}
var Ae = Cr(0)
function Pa(e) {
    for (var t = e; t !== null; ) {
        if (t.tag === 13) {
            var r = t.memoizedState
            if (
                r !== null &&
                ((r = r.dehydrated),
                r === null || r.data === '$?' || r.data === '$!')
            )
                return t
        } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
            if ((t.flags & 64) != 0) return t
        } else if (t.child !== null) {
            ;(t.child.return = t), (t = t.child)
            continue
        }
        if (t === e) break
        for (; t.sibling === null; ) {
            if (t.return === null || t.return === e) return null
            t = t.return
        }
        ;(t.sibling.return = t.return), (t = t.sibling)
    }
    return null
}
var sr = null,
    Ar = null,
    Vt = !1
function Zh(e, t) {
    var r = _t(5, null, null, 0)
    ;(r.elementType = 'DELETED'),
        (r.type = 'DELETED'),
        (r.stateNode = t),
        (r.return = e),
        (r.flags = 8),
        e.lastEffect !== null
            ? ((e.lastEffect.nextEffect = r), (e.lastEffect = r))
            : (e.firstEffect = e.lastEffect = r)
}
function ep(e, t) {
    switch (e.tag) {
        case 5:
            var r = e.type
            return (
                (t =
                    t.nodeType !== 1 ||
                    r.toLowerCase() !== t.nodeName.toLowerCase()
                        ? null
                        : t),
                t !== null ? ((e.stateNode = t), !0) : !1
            )
        case 6:
            return (
                (t = e.pendingProps === '' || t.nodeType !== 3 ? null : t),
                t !== null ? ((e.stateNode = t), !0) : !1
            )
        case 13:
            return !1
        default:
            return !1
    }
}
function Au(e) {
    if (Vt) {
        var t = Ar
        if (t) {
            var r = t
            if (!ep(e, t)) {
                if (((t = Nn(r.nextSibling)), !t || !ep(e, t))) {
                    ;(e.flags = (e.flags & -1025) | 2), (Vt = !1), (sr = e)
                    return
                }
                Zh(sr, r)
            }
            ;(sr = e), (Ar = Nn(t.firstChild))
        } else (e.flags = (e.flags & -1025) | 2), (Vt = !1), (sr = e)
    }
}
function tp(e) {
    for (
        e = e.return;
        e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13;

    )
        e = e.return
    sr = e
}
function Fa(e) {
    if (e !== sr) return !1
    if (!Vt) return tp(e), (Vt = !0), !1
    var t = e.type
    if (
        e.tag !== 5 ||
        (t !== 'head' && t !== 'body' && !du(t, e.memoizedProps))
    )
        for (t = Ar; t; ) Zh(e, t), (t = Nn(t.nextSibling))
    if ((tp(e), e.tag === 13)) {
        if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
            throw Error(z(317))
        e: {
            for (e = e.nextSibling, t = 0; e; ) {
                if (e.nodeType === 8) {
                    var r = e.data
                    if (r === '/$') {
                        if (t === 0) {
                            Ar = Nn(e.nextSibling)
                            break e
                        }
                        t--
                    } else (r !== '$' && r !== '$!' && r !== '$?') || t++
                }
                e = e.nextSibling
            }
            Ar = null
        }
    } else Ar = sr ? Nn(e.stateNode.nextSibling) : null
    return !0
}
function Iu() {
    ;(Ar = sr = null), (Vt = !1)
}
var Hn = []
function Ru() {
    for (var e = 0; e < Hn.length; e++)
        Hn[e]._workInProgressVersionPrimary = null
    Hn.length = 0
}
var eo = Gr.ReactCurrentDispatcher,
    bt = Gr.ReactCurrentBatchConfig,
    to = 0,
    Re = null,
    Xe = null,
    We = null,
    Da = !1,
    ro = !1
function ot() {
    throw Error(z(321))
}
function Pu(e, t) {
    if (t === null) return !1
    for (var r = 0; r < t.length && r < e.length; r++)
        if (!xt(e[r], t[r])) return !1
    return !0
}
function Fu(e, t, r, n, i, o) {
    if (
        ((to = o),
        (Re = t),
        (t.memoizedState = null),
        (t.updateQueue = null),
        (t.lanes = 0),
        (eo.current = e === null || e.memoizedState === null ? i1 : o1),
        (e = r(n, i)),
        ro)
    ) {
        o = 0
        do {
            if (((ro = !1), !(25 > o))) throw Error(z(301))
            ;(o += 1),
                (We = Xe = null),
                (t.updateQueue = null),
                (eo.current = a1),
                (e = r(n, i))
        } while (ro)
    }
    if (
        ((eo.current = Ma),
        (t = Xe !== null && Xe.next !== null),
        (to = 0),
        (We = Xe = Re = null),
        (Da = !1),
        t)
    )
        throw Error(z(300))
    return e
}
function nn() {
    var e = {
        memoizedState: null,
        baseState: null,
        baseQueue: null,
        queue: null,
        next: null,
    }
    return We === null ? (Re.memoizedState = We = e) : (We = We.next = e), We
}
function on() {
    if (Xe === null) {
        var e = Re.alternate
        e = e !== null ? e.memoizedState : null
    } else e = Xe.next
    var t = We === null ? Re.memoizedState : We.next
    if (t !== null) (We = t), (Xe = e)
    else {
        if (e === null) throw Error(z(310))
        ;(Xe = e),
            (e = {
                memoizedState: Xe.memoizedState,
                baseState: Xe.baseState,
                baseQueue: Xe.baseQueue,
                queue: Xe.queue,
                next: null,
            }),
            We === null ? (Re.memoizedState = We = e) : (We = We.next = e)
    }
    return We
}
function Kt(e, t) {
    return typeof t == 'function' ? t(e) : t
}
function no(e) {
    var t = on(),
        r = t.queue
    if (r === null) throw Error(z(311))
    r.lastRenderedReducer = e
    var n = Xe,
        i = n.baseQueue,
        o = r.pending
    if (o !== null) {
        if (i !== null) {
            var a = i.next
            ;(i.next = o.next), (o.next = a)
        }
        ;(n.baseQueue = i = o), (r.pending = null)
    }
    if (i !== null) {
        ;(i = i.next), (n = n.baseState)
        var s = (a = o = null),
            l = i
        do {
            var u = l.lane
            if ((to & u) === u)
                s !== null &&
                    (s = s.next =
                        {
                            lane: 0,
                            action: l.action,
                            eagerReducer: l.eagerReducer,
                            eagerState: l.eagerState,
                            next: null,
                        }),
                    (n = l.eagerReducer === e ? l.eagerState : e(n, l.action))
            else {
                var d = {
                    lane: u,
                    action: l.action,
                    eagerReducer: l.eagerReducer,
                    eagerState: l.eagerState,
                    next: null,
                }
                s === null ? ((a = s = d), (o = n)) : (s = s.next = d),
                    (Re.lanes |= u),
                    (so |= u)
            }
            l = l.next
        } while (l !== null && l !== i)
        s === null ? (o = n) : (s.next = a),
            xt(n, t.memoizedState) || (Nt = !0),
            (t.memoizedState = n),
            (t.baseState = o),
            (t.baseQueue = s),
            (r.lastRenderedState = n)
    }
    return [t.memoizedState, r.dispatch]
}
function io(e) {
    var t = on(),
        r = t.queue
    if (r === null) throw Error(z(311))
    r.lastRenderedReducer = e
    var n = r.dispatch,
        i = r.pending,
        o = t.memoizedState
    if (i !== null) {
        r.pending = null
        var a = (i = i.next)
        do (o = e(o, a.action)), (a = a.next)
        while (a !== i)
        xt(o, t.memoizedState) || (Nt = !0),
            (t.memoizedState = o),
            t.baseQueue === null && (t.baseState = o),
            (r.lastRenderedState = o)
    }
    return [o, n]
}
function rp(e, t, r) {
    var n = t._getVersion
    n = n(t._source)
    var i = t._workInProgressVersionPrimary
    if (
        (i !== null
            ? (e = i === n)
            : ((e = e.mutableReadLanes),
              (e = (to & e) === e) &&
                  ((t._workInProgressVersionPrimary = n), Hn.push(t))),
        e)
    )
        return r(t._source)
    throw (Hn.push(t), Error(z(350)))
}
function np(e, t, r, n) {
    var i = tt
    if (i === null) throw Error(z(349))
    var o = t._getVersion,
        a = o(t._source),
        s = eo.current,
        l = s.useState(function () {
            return rp(i, t, r)
        }),
        u = l[1],
        d = l[0]
    l = We
    var m = e.memoizedState,
        p = m.refs,
        x = p.getSnapshot,
        _ = m.source
    m = m.subscribe
    var b = Re
    return (
        (e.memoizedState = { refs: p, source: t, subscribe: n }),
        s.useEffect(
            function () {
                ;(p.getSnapshot = r), (p.setSnapshot = u)
                var g = o(t._source)
                if (!xt(a, g)) {
                    ;(g = r(t._source)),
                        xt(d, g) ||
                            (u(g),
                            (g = Rr(b)),
                            (i.mutableReadLanes |= g & i.pendingLanes)),
                        (g = i.mutableReadLanes),
                        (i.entangledLanes |= g)
                    for (var v = i.entanglements, h = g; 0 < h; ) {
                        var C = 31 - xr(h),
                            E = 1 << C
                        ;(v[C] |= g), (h &= ~E)
                    }
                }
            },
            [r, t, n]
        ),
        s.useEffect(
            function () {
                return n(t._source, function () {
                    var g = p.getSnapshot,
                        v = p.setSnapshot
                    try {
                        v(g(t._source))
                        var h = Rr(b)
                        i.mutableReadLanes |= h & i.pendingLanes
                    } catch (C) {
                        v(function () {
                            throw C
                        })
                    }
                })
            },
            [t, n]
        ),
        (xt(x, r) && xt(_, t) && xt(m, n)) ||
            ((e = {
                pending: null,
                dispatch: null,
                lastRenderedReducer: Kt,
                lastRenderedState: d,
            }),
            (e.dispatch = u = Uu.bind(null, Re, e)),
            (l.queue = e),
            (l.baseQueue = null),
            (d = rp(i, t, r)),
            (l.memoizedState = l.baseState = d)),
        d
    )
}
function ip(e, t, r) {
    var n = on()
    return np(n, e, t, r)
}
function oo(e) {
    var t = nn()
    return (
        typeof e == 'function' && (e = e()),
        (t.memoizedState = t.baseState = e),
        (e = t.queue =
            {
                pending: null,
                dispatch: null,
                lastRenderedReducer: Kt,
                lastRenderedState: e,
            }),
        (e = e.dispatch = Uu.bind(null, Re, e)),
        [t.memoizedState, e]
    )
}
function Ba(e, t, r, n) {
    return (
        (e = { tag: e, create: t, destroy: r, deps: n, next: null }),
        (t = Re.updateQueue),
        t === null
            ? ((t = { lastEffect: null }),
              (Re.updateQueue = t),
              (t.lastEffect = e.next = e))
            : ((r = t.lastEffect),
              r === null
                  ? (t.lastEffect = e.next = e)
                  : ((n = r.next),
                    (r.next = e),
                    (e.next = n),
                    (t.lastEffect = e))),
        e
    )
}
function op(e) {
    var t = nn()
    return (e = { current: e }), (t.memoizedState = e)
}
function Na() {
    return on().memoizedState
}
function Du(e, t, r, n) {
    var i = nn()
    ;(Re.flags |= e),
        (i.memoizedState = Ba(1 | t, r, void 0, n === void 0 ? null : n))
}
function Bu(e, t, r, n) {
    var i = on()
    n = n === void 0 ? null : n
    var o = void 0
    if (Xe !== null) {
        var a = Xe.memoizedState
        if (((o = a.destroy), n !== null && Pu(n, a.deps))) {
            Ba(t, r, o, n)
            return
        }
    }
    ;(Re.flags |= e), (i.memoizedState = Ba(1 | t, r, o, n))
}
function ap(e, t) {
    return Du(516, 4, e, t)
}
function Ua(e, t) {
    return Bu(516, 4, e, t)
}
function sp(e, t) {
    return Bu(4, 2, e, t)
}
function lp(e, t) {
    if (typeof t == 'function')
        return (
            (e = e()),
            t(e),
            function () {
                t(null)
            }
        )
    if (t != null)
        return (
            (e = e()),
            (t.current = e),
            function () {
                t.current = null
            }
        )
}
function up(e, t, r) {
    return (
        (r = r != null ? r.concat([e]) : null), Bu(4, 2, lp.bind(null, t, e), r)
    )
}
function Nu() {}
function cp(e, t) {
    var r = on()
    t = t === void 0 ? null : t
    var n = r.memoizedState
    return n !== null && t !== null && Pu(t, n[1])
        ? n[0]
        : ((r.memoizedState = [e, t]), e)
}
function fp(e, t) {
    var r = on()
    t = t === void 0 ? null : t
    var n = r.memoizedState
    return n !== null && t !== null && Pu(t, n[1])
        ? n[0]
        : ((e = e()), (r.memoizedState = [e, t]), e)
}
function n1(e, t) {
    var r = zn()
    tn(98 > r ? 98 : r, function () {
        e(!0)
    }),
        tn(97 < r ? 97 : r, function () {
            var n = bt.transition
            bt.transition = 1
            try {
                e(!1), t()
            } finally {
                bt.transition = n
            }
        })
}
function Uu(e, t, r) {
    var n = ht(),
        i = Rr(e),
        o = {
            lane: i,
            action: r,
            eagerReducer: null,
            eagerState: null,
            next: null,
        },
        a = t.pending
    if (
        (a === null ? (o.next = o) : ((o.next = a.next), (a.next = o)),
        (t.pending = o),
        (a = e.alternate),
        e === Re || (a !== null && a === Re))
    )
        ro = Da = !0
    else {
        if (
            e.lanes === 0 &&
            (a === null || a.lanes === 0) &&
            ((a = t.lastRenderedReducer), a !== null)
        )
            try {
                var s = t.lastRenderedState,
                    l = a(s, r)
                if (((o.eagerReducer = a), (o.eagerState = l), xt(l, s))) return
            } catch {
            } finally {
            }
        Pr(e, i, n)
    }
}
var Ma = {
        readContext: wt,
        useCallback: ot,
        useContext: ot,
        useEffect: ot,
        useImperativeHandle: ot,
        useLayoutEffect: ot,
        useMemo: ot,
        useReducer: ot,
        useRef: ot,
        useState: ot,
        useDebugValue: ot,
        useDeferredValue: ot,
        useTransition: ot,
        useMutableSource: ot,
        useOpaqueIdentifier: ot,
        unstable_isNewReconciler: !1,
    },
    i1 = {
        readContext: wt,
        useCallback: function (e, t) {
            return (nn().memoizedState = [e, t === void 0 ? null : t]), e
        },
        useContext: wt,
        useEffect: ap,
        useImperativeHandle: function (e, t, r) {
            return (
                (r = r != null ? r.concat([e]) : null),
                Du(4, 2, lp.bind(null, t, e), r)
            )
        },
        useLayoutEffect: function (e, t) {
            return Du(4, 2, e, t)
        },
        useMemo: function (e, t) {
            var r = nn()
            return (
                (t = t === void 0 ? null : t),
                (e = e()),
                (r.memoizedState = [e, t]),
                e
            )
        },
        useReducer: function (e, t, r) {
            var n = nn()
            return (
                (t = r !== void 0 ? r(t) : t),
                (n.memoizedState = n.baseState = t),
                (e = n.queue =
                    {
                        pending: null,
                        dispatch: null,
                        lastRenderedReducer: e,
                        lastRenderedState: t,
                    }),
                (e = e.dispatch = Uu.bind(null, Re, e)),
                [n.memoizedState, e]
            )
        },
        useRef: op,
        useState: oo,
        useDebugValue: Nu,
        useDeferredValue: function (e) {
            var t = oo(e),
                r = t[0],
                n = t[1]
            return (
                ap(
                    function () {
                        var i = bt.transition
                        bt.transition = 1
                        try {
                            n(e)
                        } finally {
                            bt.transition = i
                        }
                    },
                    [e]
                ),
                r
            )
        },
        useTransition: function () {
            var e = oo(!1),
                t = e[0]
            return (e = n1.bind(null, e[1])), op(e), [e, t]
        },
        useMutableSource: function (e, t, r) {
            var n = nn()
            return (
                (n.memoizedState = {
                    refs: { getSnapshot: t, setSnapshot: null },
                    source: e,
                    subscribe: r,
                }),
                np(n, e, t, r)
            )
        },
        useOpaqueIdentifier: function () {
            if (Vt) {
                var e = !1,
                    t = Qy(function () {
                        throw (
                            (e || ((e = !0), r('r:' + (pu++).toString(36))),
                            Error(z(355)))
                        )
                    }),
                    r = oo(t)[1]
                return (
                    (Re.mode & 2) == 0 &&
                        ((Re.flags |= 516),
                        Ba(
                            5,
                            function () {
                                r('r:' + (pu++).toString(36))
                            },
                            void 0,
                            null
                        )),
                    t
                )
            }
            return (t = 'r:' + (pu++).toString(36)), oo(t), t
        },
        unstable_isNewReconciler: !1,
    },
    o1 = {
        readContext: wt,
        useCallback: cp,
        useContext: wt,
        useEffect: Ua,
        useImperativeHandle: up,
        useLayoutEffect: sp,
        useMemo: fp,
        useReducer: no,
        useRef: Na,
        useState: function () {
            return no(Kt)
        },
        useDebugValue: Nu,
        useDeferredValue: function (e) {
            var t = no(Kt),
                r = t[0],
                n = t[1]
            return (
                Ua(
                    function () {
                        var i = bt.transition
                        bt.transition = 1
                        try {
                            n(e)
                        } finally {
                            bt.transition = i
                        }
                    },
                    [e]
                ),
                r
            )
        },
        useTransition: function () {
            var e = no(Kt)[0]
            return [Na().current, e]
        },
        useMutableSource: ip,
        useOpaqueIdentifier: function () {
            return no(Kt)[0]
        },
        unstable_isNewReconciler: !1,
    },
    a1 = {
        readContext: wt,
        useCallback: cp,
        useContext: wt,
        useEffect: Ua,
        useImperativeHandle: up,
        useLayoutEffect: sp,
        useMemo: fp,
        useReducer: io,
        useRef: Na,
        useState: function () {
            return io(Kt)
        },
        useDebugValue: Nu,
        useDeferredValue: function (e) {
            var t = io(Kt),
                r = t[0],
                n = t[1]
            return (
                Ua(
                    function () {
                        var i = bt.transition
                        bt.transition = 1
                        try {
                            n(e)
                        } finally {
                            bt.transition = i
                        }
                    },
                    [e]
                ),
                r
            )
        },
        useTransition: function () {
            var e = io(Kt)[0]
            return [Na().current, e]
        },
        useMutableSource: ip,
        useOpaqueIdentifier: function () {
            return io(Kt)[0]
        },
        unstable_isNewReconciler: !1,
    },
    s1 = Gr.ReactCurrentOwner,
    Nt = !1
function at(e, t, r, n) {
    t.child = e === null ? Qh(t, null, r, n) : Ra(t, e.child, r, n)
}
function dp(e, t, r, n, i) {
    r = r.render
    var o = t.ref
    return (
        jn(t, i),
        (n = Fu(e, t, r, n, o, i)),
        e !== null && !Nt
            ? ((t.updateQueue = e.updateQueue),
              (t.flags &= -517),
              (e.lanes &= ~i),
              lr(e, t, i))
            : ((t.flags |= 1), at(e, t, n, i), t.child)
    )
}
function hp(e, t, r, n, i, o) {
    if (e === null) {
        var a = r.type
        return typeof a == 'function' &&
            !oc(a) &&
            a.defaultProps === void 0 &&
            r.compare === null &&
            r.defaultProps === void 0
            ? ((t.tag = 15), (t.type = a), pp(e, t, a, n, i, o))
            : ((e = qa(r.type, null, n, t, t.mode, o)),
              (e.ref = t.ref),
              (e.return = t),
              (t.child = e))
    }
    return (
        (a = e.child),
        (i & o) == 0 &&
        ((i = a.memoizedProps),
        (r = r.compare),
        (r = r !== null ? r : Wi),
        r(i, n) && e.ref === t.ref)
            ? lr(e, t, o)
            : ((t.flags |= 1),
              (e = Br(a, n)),
              (e.ref = t.ref),
              (e.return = t),
              (t.child = e))
    )
}
function pp(e, t, r, n, i, o) {
    if (e !== null && Wi(e.memoizedProps, n) && e.ref === t.ref)
        if (((Nt = !1), (o & i) != 0)) (e.flags & 16384) != 0 && (Nt = !0)
        else return (t.lanes = e.lanes), lr(e, t, o)
    return Ou(e, t, r, n, o)
}
function Mu(e, t, r) {
    var n = t.pendingProps,
        i = n.children,
        o = e !== null ? e.memoizedState : null
    if (n.mode === 'hidden' || n.mode === 'unstable-defer-without-hiding')
        if ((t.mode & 4) == 0) (t.memoizedState = { baseLanes: 0 }), Ka(t, r)
        else if ((r & 1073741824) != 0)
            (t.memoizedState = { baseLanes: 0 }),
                Ka(t, o !== null ? o.baseLanes : r)
        else
            return (
                (e = o !== null ? o.baseLanes | r : r),
                (t.lanes = t.childLanes = 1073741824),
                (t.memoizedState = { baseLanes: e }),
                Ka(t, e),
                null
            )
    else
        o !== null
            ? ((n = o.baseLanes | r), (t.memoizedState = null))
            : (n = r),
            Ka(t, n)
    return at(e, t, i, r), t.child
}
function mp(e, t) {
    var r = t.ref
    ;((e === null && r !== null) || (e !== null && e.ref !== r)) &&
        (t.flags |= 128)
}
function Ou(e, t, r, n, i) {
    var o = it(r) ? Zr : Ge.current
    return (
        (o = $n(t, o)),
        jn(t, i),
        (r = Fu(e, t, r, n, o, i)),
        e !== null && !Nt
            ? ((t.updateQueue = e.updateQueue),
              (t.flags &= -517),
              (e.lanes &= ~i),
              lr(e, t, i))
            : ((t.flags |= 1), at(e, t, r, i), t.child)
    )
}
function vp(e, t, r, n, i) {
    if (it(r)) {
        var o = !0
        xa(t)
    } else o = !1
    if ((jn(t, i), t.stateNode === null))
        e !== null &&
            ((e.alternate = null), (t.alternate = null), (t.flags |= 2)),
            Gh(t, r, n),
            Eu(t, r, n, i),
            (n = !0)
    else if (e === null) {
        var a = t.stateNode,
            s = t.memoizedProps
        a.props = s
        var l = a.context,
            u = r.contextType
        typeof u == 'object' && u !== null
            ? (u = wt(u))
            : ((u = it(r) ? Zr : Ge.current), (u = $n(t, u)))
        var d = r.getDerivedStateFromProps,
            m =
                typeof d == 'function' ||
                typeof a.getSnapshotBeforeUpdate == 'function'
        m ||
            (typeof a.UNSAFE_componentWillReceiveProps != 'function' &&
                typeof a.componentWillReceiveProps != 'function') ||
            ((s !== n || l !== u) && Yh(t, a, n, u)),
            (Er = !1)
        var p = t.memoizedState
        ;(a.state = p),
            Yi(t, n, a, i),
            (l = t.memoizedState),
            s !== n || p !== l || nt.current || Er
                ? (typeof d == 'function' &&
                      (ka(t, r, d, n), (l = t.memoizedState)),
                  (s = Er || qh(t, r, s, n, p, l, u))
                      ? (m ||
                            (typeof a.UNSAFE_componentWillMount != 'function' &&
                                typeof a.componentWillMount != 'function') ||
                            (typeof a.componentWillMount == 'function' &&
                                a.componentWillMount(),
                            typeof a.UNSAFE_componentWillMount == 'function' &&
                                a.UNSAFE_componentWillMount()),
                        typeof a.componentDidMount == 'function' &&
                            (t.flags |= 4))
                      : (typeof a.componentDidMount == 'function' &&
                            (t.flags |= 4),
                        (t.memoizedProps = n),
                        (t.memoizedState = l)),
                  (a.props = n),
                  (a.state = l),
                  (a.context = u),
                  (n = s))
                : (typeof a.componentDidMount == 'function' && (t.flags |= 4),
                  (n = !1))
    } else {
        ;(a = t.stateNode),
            Wh(e, t),
            (s = t.memoizedProps),
            (u = t.type === t.elementType ? s : Bt(t.type, s)),
            (a.props = u),
            (m = t.pendingProps),
            (p = a.context),
            (l = r.contextType),
            typeof l == 'object' && l !== null
                ? (l = wt(l))
                : ((l = it(r) ? Zr : Ge.current), (l = $n(t, l)))
        var x = r.getDerivedStateFromProps
        ;(d =
            typeof x == 'function' ||
            typeof a.getSnapshotBeforeUpdate == 'function') ||
            (typeof a.UNSAFE_componentWillReceiveProps != 'function' &&
                typeof a.componentWillReceiveProps != 'function') ||
            ((s !== m || p !== l) && Yh(t, a, n, l)),
            (Er = !1),
            (p = t.memoizedState),
            (a.state = p),
            Yi(t, n, a, i)
        var _ = t.memoizedState
        s !== m || p !== _ || nt.current || Er
            ? (typeof x == 'function' &&
                  (ka(t, r, x, n), (_ = t.memoizedState)),
              (u = Er || qh(t, r, u, n, p, _, l))
                  ? (d ||
                        (typeof a.UNSAFE_componentWillUpdate != 'function' &&
                            typeof a.componentWillUpdate != 'function') ||
                        (typeof a.componentWillUpdate == 'function' &&
                            a.componentWillUpdate(n, _, l),
                        typeof a.UNSAFE_componentWillUpdate == 'function' &&
                            a.UNSAFE_componentWillUpdate(n, _, l)),
                    typeof a.componentDidUpdate == 'function' && (t.flags |= 4),
                    typeof a.getSnapshotBeforeUpdate == 'function' &&
                        (t.flags |= 256))
                  : (typeof a.componentDidUpdate != 'function' ||
                        (s === e.memoizedProps && p === e.memoizedState) ||
                        (t.flags |= 4),
                    typeof a.getSnapshotBeforeUpdate != 'function' ||
                        (s === e.memoizedProps && p === e.memoizedState) ||
                        (t.flags |= 256),
                    (t.memoizedProps = n),
                    (t.memoizedState = _)),
              (a.props = n),
              (a.state = _),
              (a.context = l),
              (n = u))
            : (typeof a.componentDidUpdate != 'function' ||
                  (s === e.memoizedProps && p === e.memoizedState) ||
                  (t.flags |= 4),
              typeof a.getSnapshotBeforeUpdate != 'function' ||
                  (s === e.memoizedProps && p === e.memoizedState) ||
                  (t.flags |= 256),
              (n = !1))
    }
    return $u(e, t, r, n, o, i)
}
function $u(e, t, r, n, i, o) {
    mp(e, t)
    var a = (t.flags & 64) != 0
    if (!n && !a) return i && Dh(t, r, !1), lr(e, t, o)
    ;(n = t.stateNode), (s1.current = t)
    var s =
        a && typeof r.getDerivedStateFromError != 'function' ? null : n.render()
    return (
        (t.flags |= 1),
        e !== null && a
            ? ((t.child = Ra(t, e.child, null, o)),
              (t.child = Ra(t, null, s, o)))
            : at(e, t, s, o),
        (t.memoizedState = n.state),
        i && Dh(t, r, !0),
        t.child
    )
}
function gp(e) {
    var t = e.stateNode
    t.pendingContext
        ? Ph(e, t.pendingContext, t.pendingContext !== t.context)
        : t.context && Ph(e, t.context, !1),
        ku(e, t.containerInfo)
}
var Oa = { dehydrated: null, retryLane: 0 }
function yp(e, t, r) {
    var n = t.pendingProps,
        i = Ae.current,
        o = !1,
        a
    return (
        (a = (t.flags & 64) != 0) ||
            (a = e !== null && e.memoizedState === null ? !1 : (i & 2) != 0),
        a
            ? ((o = !0), (t.flags &= -65))
            : (e !== null && e.memoizedState === null) ||
              n.fallback === void 0 ||
              n.unstable_avoidThisFallback === !0 ||
              (i |= 1),
        Te(Ae, i & 1),
        e === null
            ? (n.fallback !== void 0 && Au(t),
              (e = n.children),
              (i = n.fallback),
              o
                  ? ((e = Sp(t, e, i, r)),
                    (t.child.memoizedState = { baseLanes: r }),
                    (t.memoizedState = Oa),
                    e)
                  : typeof n.unstable_expectedLoadTime == 'number'
                  ? ((e = Sp(t, e, i, r)),
                    (t.child.memoizedState = { baseLanes: r }),
                    (t.memoizedState = Oa),
                    (t.lanes = 33554432),
                    e)
                  : ((r = ac(
                        { mode: 'visible', children: e },
                        t.mode,
                        r,
                        null
                    )),
                    (r.return = t),
                    (t.child = r)))
            : e.memoizedState !== null
            ? o
                ? ((n = wp(e, t, n.children, n.fallback, r)),
                  (o = t.child),
                  (i = e.child.memoizedState),
                  (o.memoizedState =
                      i === null
                          ? { baseLanes: r }
                          : { baseLanes: i.baseLanes | r }),
                  (o.childLanes = e.childLanes & ~r),
                  (t.memoizedState = Oa),
                  n)
                : ((r = xp(e, t, n.children, r)), (t.memoizedState = null), r)
            : o
            ? ((n = wp(e, t, n.children, n.fallback, r)),
              (o = t.child),
              (i = e.child.memoizedState),
              (o.memoizedState =
                  i === null
                      ? { baseLanes: r }
                      : { baseLanes: i.baseLanes | r }),
              (o.childLanes = e.childLanes & ~r),
              (t.memoizedState = Oa),
              n)
            : ((r = xp(e, t, n.children, r)), (t.memoizedState = null), r)
    )
}
function Sp(e, t, r, n) {
    var i = e.mode,
        o = e.child
    return (
        (t = { mode: 'hidden', children: t }),
        (i & 2) == 0 && o !== null
            ? ((o.childLanes = 0), (o.pendingProps = t))
            : (o = ac(t, i, 0, null)),
        (r = Xn(r, i, n, null)),
        (o.return = e),
        (r.return = e),
        (o.sibling = r),
        (e.child = o),
        r
    )
}
function xp(e, t, r, n) {
    var i = e.child
    return (
        (e = i.sibling),
        (r = Br(i, { mode: 'visible', children: r })),
        (t.mode & 2) == 0 && (r.lanes = n),
        (r.return = t),
        (r.sibling = null),
        e !== null &&
            ((e.nextEffect = null),
            (e.flags = 8),
            (t.firstEffect = t.lastEffect = e)),
        (t.child = r)
    )
}
function wp(e, t, r, n, i) {
    var o = t.mode,
        a = e.child
    e = a.sibling
    var s = { mode: 'hidden', children: r }
    return (
        (o & 2) == 0 && t.child !== a
            ? ((r = t.child),
              (r.childLanes = 0),
              (r.pendingProps = s),
              (a = r.lastEffect),
              a !== null
                  ? ((t.firstEffect = r.firstEffect),
                    (t.lastEffect = a),
                    (a.nextEffect = null))
                  : (t.firstEffect = t.lastEffect = null))
            : (r = Br(a, s)),
        e !== null ? (n = Br(e, n)) : ((n = Xn(n, o, i, null)), (n.flags |= 2)),
        (n.return = t),
        (r.return = t),
        (r.sibling = n),
        (t.child = r),
        n
    )
}
function bp(e, t) {
    e.lanes |= t
    var r = e.alternate
    r !== null && (r.lanes |= t), jh(e.return, t)
}
function zu(e, t, r, n, i, o) {
    var a = e.memoizedState
    a === null
        ? (e.memoizedState = {
              isBackwards: t,
              rendering: null,
              renderingStartTime: 0,
              last: n,
              tail: r,
              tailMode: i,
              lastEffect: o,
          })
        : ((a.isBackwards = t),
          (a.rendering = null),
          (a.renderingStartTime = 0),
          (a.last = n),
          (a.tail = r),
          (a.tailMode = i),
          (a.lastEffect = o))
}
function Cp(e, t, r) {
    var n = t.pendingProps,
        i = n.revealOrder,
        o = n.tail
    if ((at(e, t, n.children, r), (n = Ae.current), (n & 2) != 0))
        (n = (n & 1) | 2), (t.flags |= 64)
    else {
        if (e !== null && (e.flags & 64) != 0)
            e: for (e = t.child; e !== null; ) {
                if (e.tag === 13) e.memoizedState !== null && bp(e, r)
                else if (e.tag === 19) bp(e, r)
                else if (e.child !== null) {
                    ;(e.child.return = e), (e = e.child)
                    continue
                }
                if (e === t) break e
                for (; e.sibling === null; ) {
                    if (e.return === null || e.return === t) break e
                    e = e.return
                }
                ;(e.sibling.return = e.return), (e = e.sibling)
            }
        n &= 1
    }
    if ((Te(Ae, n), (t.mode & 2) == 0)) t.memoizedState = null
    else
        switch (i) {
            case 'forwards':
                for (r = t.child, i = null; r !== null; )
                    (e = r.alternate),
                        e !== null && Pa(e) === null && (i = r),
                        (r = r.sibling)
                ;(r = i),
                    r === null
                        ? ((i = t.child), (t.child = null))
                        : ((i = r.sibling), (r.sibling = null)),
                    zu(t, !1, i, r, o, t.lastEffect)
                break
            case 'backwards':
                for (r = null, i = t.child, t.child = null; i !== null; ) {
                    if (((e = i.alternate), e !== null && Pa(e) === null)) {
                        t.child = i
                        break
                    }
                    ;(e = i.sibling), (i.sibling = r), (r = i), (i = e)
                }
                zu(t, !0, r, null, o, t.lastEffect)
                break
            case 'together':
                zu(t, !1, null, null, void 0, t.lastEffect)
                break
            default:
                t.memoizedState = null
        }
    return t.child
}
function lr(e, t, r) {
    if (
        (e !== null && (t.dependencies = e.dependencies),
        (so |= t.lanes),
        (r & t.childLanes) != 0)
    ) {
        if (e !== null && t.child !== e.child) throw Error(z(153))
        if (t.child !== null) {
            for (
                e = t.child,
                    r = Br(e, e.pendingProps),
                    t.child = r,
                    r.return = t;
                e.sibling !== null;

            )
                (e = e.sibling),
                    (r = r.sibling = Br(e, e.pendingProps)),
                    (r.return = t)
            r.sibling = null
        }
        return t.child
    }
    return null
}
var _p, Lu, Ep, kp
_p = function (e, t) {
    for (var r = t.child; r !== null; ) {
        if (r.tag === 5 || r.tag === 6) e.appendChild(r.stateNode)
        else if (r.tag !== 4 && r.child !== null) {
            ;(r.child.return = r), (r = r.child)
            continue
        }
        if (r === t) break
        for (; r.sibling === null; ) {
            if (r.return === null || r.return === t) return
            r = r.return
        }
        ;(r.sibling.return = r.return), (r = r.sibling)
    }
}
Lu = function () {}
Ep = function (e, t, r, n) {
    var i = e.memoizedProps
    if (i !== n) {
        ;(e = t.stateNode), rn(Ht.current)
        var o = null
        switch (r) {
            case 'input':
                ;(i = El(e, i)), (n = El(e, n)), (o = [])
                break
            case 'option':
                ;(i = Al(e, i)), (n = Al(e, n)), (o = [])
                break
            case 'select':
                ;(i = _e({}, i, { value: void 0 })),
                    (n = _e({}, n, { value: void 0 })),
                    (o = [])
                break
            case 'textarea':
                ;(i = Il(e, i)), (n = Il(e, n)), (o = [])
                break
            default:
                typeof i.onClick != 'function' &&
                    typeof n.onClick == 'function' &&
                    (e.onclick = ma)
        }
        Fl(r, n)
        var a
        r = null
        for (u in i)
            if (!n.hasOwnProperty(u) && i.hasOwnProperty(u) && i[u] != null)
                if (u === 'style') {
                    var s = i[u]
                    for (a in s)
                        s.hasOwnProperty(a) && (r || (r = {}), (r[a] = ''))
                } else
                    u !== 'dangerouslySetInnerHTML' &&
                        u !== 'children' &&
                        u !== 'suppressContentEditableWarning' &&
                        u !== 'suppressHydrationWarning' &&
                        u !== 'autoFocus' &&
                        (wi.hasOwnProperty(u)
                            ? o || (o = [])
                            : (o = o || []).push(u, null))
        for (u in n) {
            var l = n[u]
            if (
                ((s = i != null ? i[u] : void 0),
                n.hasOwnProperty(u) && l !== s && (l != null || s != null))
            )
                if (u === 'style')
                    if (s) {
                        for (a in s)
                            !s.hasOwnProperty(a) ||
                                (l && l.hasOwnProperty(a)) ||
                                (r || (r = {}), (r[a] = ''))
                        for (a in l)
                            l.hasOwnProperty(a) &&
                                s[a] !== l[a] &&
                                (r || (r = {}), (r[a] = l[a]))
                    } else r || (o || (o = []), o.push(u, r)), (r = l)
                else
                    u === 'dangerouslySetInnerHTML'
                        ? ((l = l ? l.__html : void 0),
                          (s = s ? s.__html : void 0),
                          l != null && s !== l && (o = o || []).push(u, l))
                        : u === 'children'
                        ? (typeof l != 'string' && typeof l != 'number') ||
                          (o = o || []).push(u, '' + l)
                        : u !== 'suppressContentEditableWarning' &&
                          u !== 'suppressHydrationWarning' &&
                          (wi.hasOwnProperty(u)
                              ? (l != null &&
                                    u === 'onScroll' &&
                                    Se('scroll', e),
                                o || s === l || (o = []))
                              : typeof l == 'object' &&
                                l !== null &&
                                l.$$typeof === xl
                              ? l.toString()
                              : (o = o || []).push(u, l))
        }
        r && (o = o || []).push('style', r)
        var u = o
        ;(t.updateQueue = u) && (t.flags |= 4)
    }
}
kp = function (e, t, r, n) {
    r !== n && (t.flags |= 4)
}
function ao(e, t) {
    if (!Vt)
        switch (e.tailMode) {
            case 'hidden':
                t = e.tail
                for (var r = null; t !== null; )
                    t.alternate !== null && (r = t), (t = t.sibling)
                r === null ? (e.tail = null) : (r.sibling = null)
                break
            case 'collapsed':
                r = e.tail
                for (var n = null; r !== null; )
                    r.alternate !== null && (n = r), (r = r.sibling)
                n === null
                    ? t || e.tail === null
                        ? (e.tail = null)
                        : (e.tail.sibling = null)
                    : (n.sibling = null)
        }
}
function l1(e, t, r) {
    var n = t.pendingProps
    switch (t.tag) {
        case 2:
        case 16:
        case 15:
        case 0:
        case 11:
        case 7:
        case 8:
        case 12:
        case 9:
        case 14:
            return null
        case 1:
            return it(t.type) && Sa(), null
        case 3:
            return (
                Wn(),
                xe(nt),
                xe(Ge),
                Ru(),
                (n = t.stateNode),
                n.pendingContext &&
                    ((n.context = n.pendingContext), (n.pendingContext = null)),
                (e === null || e.child === null) &&
                    (Fa(t) ? (t.flags |= 4) : n.hydrate || (t.flags |= 256)),
                Lu(t),
                null
            )
        case 5:
            Tu(t)
            var i = rn(Zi.current)
            if (((r = t.type), e !== null && t.stateNode != null))
                Ep(e, t, r, n, i), e.ref !== t.ref && (t.flags |= 128)
            else {
                if (!n) {
                    if (t.stateNode === null) throw Error(z(166))
                    return null
                }
                if (((e = rn(Ht.current)), Fa(t))) {
                    ;(n = t.stateNode), (r = t.type)
                    var o = t.memoizedProps
                    switch (((n[br] = t), (n[ga] = o), r)) {
                        case 'dialog':
                            Se('cancel', n), Se('close', n)
                            break
                        case 'iframe':
                        case 'object':
                        case 'embed':
                            Se('load', n)
                            break
                        case 'video':
                        case 'audio':
                            for (e = 0; e < Vi.length; e++) Se(Vi[e], n)
                            break
                        case 'source':
                            Se('error', n)
                            break
                        case 'img':
                        case 'image':
                        case 'link':
                            Se('error', n), Se('load', n)
                            break
                        case 'details':
                            Se('toggle', n)
                            break
                        case 'input':
                            vd(n, o), Se('invalid', n)
                            break
                        case 'select':
                            ;(n._wrapperState = { wasMultiple: !!o.multiple }),
                                Se('invalid', n)
                            break
                        case 'textarea':
                            Sd(n, o), Se('invalid', n)
                    }
                    Fl(r, o), (e = null)
                    for (var a in o)
                        o.hasOwnProperty(a) &&
                            ((i = o[a]),
                            a === 'children'
                                ? typeof i == 'string'
                                    ? n.textContent !== i &&
                                      (e = ['children', i])
                                    : typeof i == 'number' &&
                                      n.textContent !== '' + i &&
                                      (e = ['children', '' + i])
                                : wi.hasOwnProperty(a) &&
                                  i != null &&
                                  a === 'onScroll' &&
                                  Se('scroll', n))
                    switch (r) {
                        case 'input':
                            Jo(n), yd(n, o, !0)
                            break
                        case 'textarea':
                            Jo(n), wd(n)
                            break
                        case 'select':
                        case 'option':
                            break
                        default:
                            typeof o.onClick == 'function' && (n.onclick = ma)
                    }
                    ;(n = e), (t.updateQueue = n), n !== null && (t.flags |= 4)
                } else {
                    switch (
                        ((a = i.nodeType === 9 ? i : i.ownerDocument),
                        e === Rl.html && (e = bd(r)),
                        e === Rl.html
                            ? r === 'script'
                                ? ((e = a.createElement('div')),
                                  (e.innerHTML = '<script></script>'),
                                  (e = e.removeChild(e.firstChild)))
                                : typeof n.is == 'string'
                                ? (e = a.createElement(r, { is: n.is }))
                                : ((e = a.createElement(r)),
                                  r === 'select' &&
                                      ((a = e),
                                      n.multiple
                                          ? (a.multiple = !0)
                                          : n.size && (a.size = n.size)))
                            : (e = a.createElementNS(e, r)),
                        (e[br] = t),
                        (e[ga] = n),
                        _p(e, t, !1, !1),
                        (t.stateNode = e),
                        (a = Dl(r, n)),
                        r)
                    ) {
                        case 'dialog':
                            Se('cancel', e), Se('close', e), (i = n)
                            break
                        case 'iframe':
                        case 'object':
                        case 'embed':
                            Se('load', e), (i = n)
                            break
                        case 'video':
                        case 'audio':
                            for (i = 0; i < Vi.length; i++) Se(Vi[i], e)
                            i = n
                            break
                        case 'source':
                            Se('error', e), (i = n)
                            break
                        case 'img':
                        case 'image':
                        case 'link':
                            Se('error', e), Se('load', e), (i = n)
                            break
                        case 'details':
                            Se('toggle', e), (i = n)
                            break
                        case 'input':
                            vd(e, n), (i = El(e, n)), Se('invalid', e)
                            break
                        case 'option':
                            i = Al(e, n)
                            break
                        case 'select':
                            ;(e._wrapperState = { wasMultiple: !!n.multiple }),
                                (i = _e({}, n, { value: void 0 })),
                                Se('invalid', e)
                            break
                        case 'textarea':
                            Sd(e, n), (i = Il(e, n)), Se('invalid', e)
                            break
                        default:
                            i = n
                    }
                    Fl(r, i)
                    var s = i
                    for (o in s)
                        if (s.hasOwnProperty(o)) {
                            var l = s[o]
                            o === 'style'
                                ? Ed(e, l)
                                : o === 'dangerouslySetInnerHTML'
                                ? ((l = l ? l.__html : void 0),
                                  l != null && Cd(e, l))
                                : o === 'children'
                                ? typeof l == 'string'
                                    ? (r !== 'textarea' || l !== '') && Ti(e, l)
                                    : typeof l == 'number' && Ti(e, '' + l)
                                : o !== 'suppressContentEditableWarning' &&
                                  o !== 'suppressHydrationWarning' &&
                                  o !== 'autoFocus' &&
                                  (wi.hasOwnProperty(o)
                                      ? l != null &&
                                        o === 'onScroll' &&
                                        Se('scroll', e)
                                      : l != null && pl(e, o, l, a))
                        }
                    switch (r) {
                        case 'input':
                            Jo(e), yd(e, n, !1)
                            break
                        case 'textarea':
                            Jo(e), wd(e)
                            break
                        case 'option':
                            n.value != null &&
                                e.setAttribute('value', '' + vr(n.value))
                            break
                        case 'select':
                            ;(e.multiple = !!n.multiple),
                                (o = n.value),
                                o != null
                                    ? En(e, !!n.multiple, o, !1)
                                    : n.defaultValue != null &&
                                      En(e, !!n.multiple, n.defaultValue, !0)
                            break
                        default:
                            typeof i.onClick == 'function' && (e.onclick = ma)
                    }
                    kh(r, n) && (t.flags |= 4)
                }
                t.ref !== null && (t.flags |= 128)
            }
            return null
        case 6:
            if (e && t.stateNode != null) kp(e, t, e.memoizedProps, n)
            else {
                if (typeof n != 'string' && t.stateNode === null)
                    throw Error(z(166))
                ;(r = rn(Zi.current)),
                    rn(Ht.current),
                    Fa(t)
                        ? ((n = t.stateNode),
                          (r = t.memoizedProps),
                          (n[br] = t),
                          n.nodeValue !== r && (t.flags |= 4))
                        : ((n = (
                              r.nodeType === 9 ? r : r.ownerDocument
                          ).createTextNode(n)),
                          (n[br] = t),
                          (t.stateNode = n))
            }
            return null
        case 13:
            return (
                xe(Ae),
                (n = t.memoizedState),
                (t.flags & 64) != 0
                    ? ((t.lanes = r), t)
                    : ((n = n !== null),
                      (r = !1),
                      e === null
                          ? t.memoizedProps.fallback !== void 0 && Fa(t)
                          : (r = e.memoizedState !== null),
                      n &&
                          !r &&
                          (t.mode & 2) != 0 &&
                          ((e === null &&
                              t.memoizedProps.unstable_avoidThisFallback !==
                                  !0) ||
                          (Ae.current & 1) != 0
                              ? He === 0 && (He = 3)
                              : ((He === 0 || He === 3) && (He = 4),
                                tt === null ||
                                    ((so & 134217727) == 0 &&
                                        (Kn & 134217727) == 0) ||
                                    Gn(tt, Qe))),
                      (n || r) && (t.flags |= 4),
                      null)
            )
        case 4:
            return (
                Wn(), Lu(t), e === null && wh(t.stateNode.containerInfo), null
            )
        case 10:
            return Cu(t), null
        case 17:
            return it(t.type) && Sa(), null
        case 19:
            if ((xe(Ae), (n = t.memoizedState), n === null)) return null
            if (((o = (t.flags & 64) != 0), (a = n.rendering), a === null))
                if (o) ao(n, !1)
                else {
                    if (He !== 0 || (e !== null && (e.flags & 64) != 0))
                        for (e = t.child; e !== null; ) {
                            if (((a = Pa(e)), a !== null)) {
                                for (
                                    t.flags |= 64,
                                        ao(n, !1),
                                        o = a.updateQueue,
                                        o !== null &&
                                            ((t.updateQueue = o),
                                            (t.flags |= 4)),
                                        n.lastEffect === null &&
                                            (t.firstEffect = null),
                                        t.lastEffect = n.lastEffect,
                                        n = r,
                                        r = t.child;
                                    r !== null;

                                )
                                    (o = r),
                                        (e = n),
                                        (o.flags &= 2),
                                        (o.nextEffect = null),
                                        (o.firstEffect = null),
                                        (o.lastEffect = null),
                                        (a = o.alternate),
                                        a === null
                                            ? ((o.childLanes = 0),
                                              (o.lanes = e),
                                              (o.child = null),
                                              (o.memoizedProps = null),
                                              (o.memoizedState = null),
                                              (o.updateQueue = null),
                                              (o.dependencies = null),
                                              (o.stateNode = null))
                                            : ((o.childLanes = a.childLanes),
                                              (o.lanes = a.lanes),
                                              (o.child = a.child),
                                              (o.memoizedProps =
                                                  a.memoizedProps),
                                              (o.memoizedState =
                                                  a.memoizedState),
                                              (o.updateQueue = a.updateQueue),
                                              (o.type = a.type),
                                              (e = a.dependencies),
                                              (o.dependencies =
                                                  e === null
                                                      ? null
                                                      : {
                                                            lanes: e.lanes,
                                                            firstContext:
                                                                e.firstContext,
                                                        })),
                                        (r = r.sibling)
                                return Te(Ae, (Ae.current & 1) | 2), t.child
                            }
                            e = e.sibling
                        }
                    n.tail !== null &&
                        Ye() > Ju &&
                        ((t.flags |= 64),
                        (o = !0),
                        ao(n, !1),
                        (t.lanes = 33554432))
                }
            else {
                if (!o)
                    if (((e = Pa(a)), e !== null)) {
                        if (
                            ((t.flags |= 64),
                            (o = !0),
                            (r = e.updateQueue),
                            r !== null && ((t.updateQueue = r), (t.flags |= 4)),
                            ao(n, !0),
                            n.tail === null &&
                                n.tailMode === 'hidden' &&
                                !a.alternate &&
                                !Vt)
                        )
                            return (
                                (t = t.lastEffect = n.lastEffect),
                                t !== null && (t.nextEffect = null),
                                null
                            )
                    } else
                        2 * Ye() - n.renderingStartTime > Ju &&
                            r !== 1073741824 &&
                            ((t.flags |= 64),
                            (o = !0),
                            ao(n, !1),
                            (t.lanes = 33554432))
                n.isBackwards
                    ? ((a.sibling = t.child), (t.child = a))
                    : ((r = n.last),
                      r !== null ? (r.sibling = a) : (t.child = a),
                      (n.last = a))
            }
            return n.tail !== null
                ? ((r = n.tail),
                  (n.rendering = r),
                  (n.tail = r.sibling),
                  (n.lastEffect = t.lastEffect),
                  (n.renderingStartTime = Ye()),
                  (r.sibling = null),
                  (t = Ae.current),
                  Te(Ae, o ? (t & 1) | 2 : t & 1),
                  r)
                : null
        case 23:
        case 24:
            return (
                ic(),
                e !== null &&
                    (e.memoizedState !== null) != (t.memoizedState !== null) &&
                    n.mode !== 'unstable-defer-without-hiding' &&
                    (t.flags |= 4),
                null
            )
    }
    throw Error(z(156, t.tag))
}
function u1(e) {
    switch (e.tag) {
        case 1:
            it(e.type) && Sa()
            var t = e.flags
            return t & 4096 ? ((e.flags = (t & -4097) | 64), e) : null
        case 3:
            if ((Wn(), xe(nt), xe(Ge), Ru(), (t = e.flags), (t & 64) != 0))
                throw Error(z(285))
            return (e.flags = (t & -4097) | 64), e
        case 5:
            return Tu(e), null
        case 13:
            return (
                xe(Ae),
                (t = e.flags),
                t & 4096 ? ((e.flags = (t & -4097) | 64), e) : null
            )
        case 19:
            return xe(Ae), null
        case 4:
            return Wn(), null
        case 10:
            return Cu(e), null
        case 23:
        case 24:
            return ic(), null
        default:
            return null
    }
}
function ju(e, t) {
    try {
        var r = '',
            n = t
        do (r += Wg(n)), (n = n.return)
        while (n)
        var i = r
    } catch (o) {
        i =
            `
Error generating stack: ` +
            o.message +
            `
` +
            o.stack
    }
    return { value: e, source: t, stack: i }
}
function Wu(e, t) {
    try {
        console.error(t.value)
    } catch (r) {
        setTimeout(function () {
            throw r
        })
    }
}
var c1 = typeof WeakMap == 'function' ? WeakMap : Map
function Tp(e, t, r) {
    ;(r = kr(-1, r)), (r.tag = 3), (r.payload = { element: null })
    var n = t.value
    return (
        (r.callback = function () {
            La || ((La = !0), (Zu = n)), Wu(e, t)
        }),
        r
    )
}
function Ap(e, t, r) {
    ;(r = kr(-1, r)), (r.tag = 3)
    var n = e.type.getDerivedStateFromError
    if (typeof n == 'function') {
        var i = t.value
        r.payload = function () {
            return Wu(e, t), n(i)
        }
    }
    var o = e.stateNode
    return (
        o !== null &&
            typeof o.componentDidCatch == 'function' &&
            (r.callback = function () {
                typeof n != 'function' &&
                    (qt === null ? (qt = new Set([this])) : qt.add(this),
                    Wu(e, t))
                var a = t.stack
                this.componentDidCatch(t.value, {
                    componentStack: a !== null ? a : '',
                })
            }),
        r
    )
}
var f1 = typeof WeakSet == 'function' ? WeakSet : Set
function Ip(e) {
    var t = e.ref
    if (t !== null)
        if (typeof t == 'function')
            try {
                t(null)
            } catch (r) {
                Dr(e, r)
            }
        else t.current = null
}
function d1(e, t) {
    switch (t.tag) {
        case 0:
        case 11:
        case 15:
        case 22:
            return
        case 1:
            if (t.flags & 256 && e !== null) {
                var r = e.memoizedProps,
                    n = e.memoizedState
                ;(e = t.stateNode),
                    (t = e.getSnapshotBeforeUpdate(
                        t.elementType === t.type ? r : Bt(t.type, r),
                        n
                    )),
                    (e.__reactInternalSnapshotBeforeUpdate = t)
            }
            return
        case 3:
            t.flags & 256 && hu(t.stateNode.containerInfo)
            return
        case 5:
        case 6:
        case 4:
        case 17:
            return
    }
    throw Error(z(163))
}
function h1(e, t, r) {
    switch (r.tag) {
        case 0:
        case 11:
        case 15:
        case 22:
            if (
                ((t = r.updateQueue),
                (t = t !== null ? t.lastEffect : null),
                t !== null)
            ) {
                e = t = t.next
                do {
                    if ((e.tag & 3) == 3) {
                        var n = e.create
                        e.destroy = n()
                    }
                    e = e.next
                } while (e !== t)
            }
            if (
                ((t = r.updateQueue),
                (t = t !== null ? t.lastEffect : null),
                t !== null)
            ) {
                e = t = t.next
                do {
                    var i = e
                    ;(n = i.next),
                        (i = i.tag),
                        (i & 4) != 0 && (i & 1) != 0 && (Hp(r, e), w1(r, e)),
                        (e = n)
                } while (e !== t)
            }
            return
        case 1:
            ;(e = r.stateNode),
                r.flags & 4 &&
                    (t === null
                        ? e.componentDidMount()
                        : ((n =
                              r.elementType === r.type
                                  ? t.memoizedProps
                                  : Bt(r.type, t.memoizedProps)),
                          e.componentDidUpdate(
                              n,
                              t.memoizedState,
                              e.__reactInternalSnapshotBeforeUpdate
                          ))),
                (t = r.updateQueue),
                t !== null && Vh(r, t, e)
            return
        case 3:
            if (((t = r.updateQueue), t !== null)) {
                if (((e = null), r.child !== null))
                    switch (r.child.tag) {
                        case 5:
                            e = r.child.stateNode
                            break
                        case 1:
                            e = r.child.stateNode
                    }
                Vh(r, t, e)
            }
            return
        case 5:
            ;(e = r.stateNode),
                t === null &&
                    r.flags & 4 &&
                    kh(r.type, r.memoizedProps) &&
                    e.focus()
            return
        case 6:
            return
        case 4:
            return
        case 12:
            return
        case 13:
            r.memoizedState === null &&
                ((r = r.alternate),
                r !== null &&
                    ((r = r.memoizedState),
                    r !== null && ((r = r.dehydrated), r !== null && Ld(r))))
            return
        case 19:
        case 17:
        case 20:
        case 21:
        case 23:
        case 24:
            return
    }
    throw Error(z(163))
}
function Rp(e, t) {
    for (var r = e; ; ) {
        if (r.tag === 5) {
            var n = r.stateNode
            if (t)
                (n = n.style),
                    typeof n.setProperty == 'function'
                        ? n.setProperty('display', 'none', 'important')
                        : (n.display = 'none')
            else {
                n = r.stateNode
                var i = r.memoizedProps.style
                ;(i =
                    i != null && i.hasOwnProperty('display')
                        ? i.display
                        : null),
                    (n.style.display = _d('display', i))
            }
        } else if (r.tag === 6) r.stateNode.nodeValue = t ? '' : r.memoizedProps
        else if (
            ((r.tag !== 23 && r.tag !== 24) ||
                r.memoizedState === null ||
                r === e) &&
            r.child !== null
        ) {
            ;(r.child.return = r), (r = r.child)
            continue
        }
        if (r === e) break
        for (; r.sibling === null; ) {
            if (r.return === null || r.return === e) return
            r = r.return
        }
        ;(r.sibling.return = r.return), (r = r.sibling)
    }
}
function Pp(e, t) {
    if (en && typeof en.onCommitFiberUnmount == 'function')
        try {
            en.onCommitFiberUnmount(vu, t)
        } catch {}
    switch (t.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
        case 22:
            if (
                ((e = t.updateQueue),
                e !== null && ((e = e.lastEffect), e !== null))
            ) {
                var r = (e = e.next)
                do {
                    var n = r,
                        i = n.destroy
                    if (((n = n.tag), i !== void 0))
                        if ((n & 4) != 0) Hp(t, r)
                        else {
                            n = t
                            try {
                                i()
                            } catch (o) {
                                Dr(n, o)
                            }
                        }
                    r = r.next
                } while (r !== e)
            }
            break
        case 1:
            if (
                (Ip(t),
                (e = t.stateNode),
                typeof e.componentWillUnmount == 'function')
            )
                try {
                    ;(e.props = t.memoizedProps),
                        (e.state = t.memoizedState),
                        e.componentWillUnmount()
                } catch (o) {
                    Dr(t, o)
                }
            break
        case 5:
            Ip(t)
            break
        case 4:
            Np(e, t)
    }
}
function Fp(e) {
    ;(e.alternate = null),
        (e.child = null),
        (e.dependencies = null),
        (e.firstEffect = null),
        (e.lastEffect = null),
        (e.memoizedProps = null),
        (e.memoizedState = null),
        (e.pendingProps = null),
        (e.return = null),
        (e.updateQueue = null)
}
function Dp(e) {
    return e.tag === 5 || e.tag === 3 || e.tag === 4
}
function Bp(e) {
    e: {
        for (var t = e.return; t !== null; ) {
            if (Dp(t)) break e
            t = t.return
        }
        throw Error(z(160))
    }
    var r = t
    switch (((t = r.stateNode), r.tag)) {
        case 5:
            var n = !1
            break
        case 3:
            ;(t = t.containerInfo), (n = !0)
            break
        case 4:
            ;(t = t.containerInfo), (n = !0)
            break
        default:
            throw Error(z(161))
    }
    r.flags & 16 && (Ti(t, ''), (r.flags &= -17))
    e: t: for (r = e; ; ) {
        for (; r.sibling === null; ) {
            if (r.return === null || Dp(r.return)) {
                r = null
                break e
            }
            r = r.return
        }
        for (
            r.sibling.return = r.return, r = r.sibling;
            r.tag !== 5 && r.tag !== 6 && r.tag !== 18;

        ) {
            if (r.flags & 2 || r.child === null || r.tag === 4) continue t
            ;(r.child.return = r), (r = r.child)
        }
        if (!(r.flags & 2)) {
            r = r.stateNode
            break e
        }
    }
    n ? Hu(e, r, t) : Vu(e, r, t)
}
function Hu(e, t, r) {
    var n = e.tag,
        i = n === 5 || n === 6
    if (i)
        (e = i ? e.stateNode : e.stateNode.instance),
            t
                ? r.nodeType === 8
                    ? r.parentNode.insertBefore(e, t)
                    : r.insertBefore(e, t)
                : (r.nodeType === 8
                      ? ((t = r.parentNode), t.insertBefore(e, r))
                      : ((t = r), t.appendChild(e)),
                  (r = r._reactRootContainer),
                  r != null || t.onclick !== null || (t.onclick = ma))
    else if (n !== 4 && ((e = e.child), e !== null))
        for (Hu(e, t, r), e = e.sibling; e !== null; )
            Hu(e, t, r), (e = e.sibling)
}
function Vu(e, t, r) {
    var n = e.tag,
        i = n === 5 || n === 6
    if (i)
        (e = i ? e.stateNode : e.stateNode.instance),
            t ? r.insertBefore(e, t) : r.appendChild(e)
    else if (n !== 4 && ((e = e.child), e !== null))
        for (Vu(e, t, r), e = e.sibling; e !== null; )
            Vu(e, t, r), (e = e.sibling)
}
function Np(e, t) {
    for (var r = t, n = !1, i, o; ; ) {
        if (!n) {
            n = r.return
            e: for (;;) {
                if (n === null) throw Error(z(160))
                switch (((i = n.stateNode), n.tag)) {
                    case 5:
                        o = !1
                        break e
                    case 3:
                        ;(i = i.containerInfo), (o = !0)
                        break e
                    case 4:
                        ;(i = i.containerInfo), (o = !0)
                        break e
                }
                n = n.return
            }
            n = !0
        }
        if (r.tag === 5 || r.tag === 6) {
            e: for (var a = e, s = r, l = s; ; )
                if ((Pp(a, l), l.child !== null && l.tag !== 4))
                    (l.child.return = l), (l = l.child)
                else {
                    if (l === s) break e
                    for (; l.sibling === null; ) {
                        if (l.return === null || l.return === s) break e
                        l = l.return
                    }
                    ;(l.sibling.return = l.return), (l = l.sibling)
                }
            o
                ? ((a = i),
                  (s = r.stateNode),
                  a.nodeType === 8
                      ? a.parentNode.removeChild(s)
                      : a.removeChild(s))
                : i.removeChild(r.stateNode)
        } else if (r.tag === 4) {
            if (r.child !== null) {
                ;(i = r.stateNode.containerInfo),
                    (o = !0),
                    (r.child.return = r),
                    (r = r.child)
                continue
            }
        } else if ((Pp(e, r), r.child !== null)) {
            ;(r.child.return = r), (r = r.child)
            continue
        }
        if (r === t) break
        for (; r.sibling === null; ) {
            if (r.return === null || r.return === t) return
            ;(r = r.return), r.tag === 4 && (n = !1)
        }
        ;(r.sibling.return = r.return), (r = r.sibling)
    }
}
function Ku(e, t) {
    switch (t.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
        case 22:
            var r = t.updateQueue
            if (((r = r !== null ? r.lastEffect : null), r !== null)) {
                var n = (r = r.next)
                do
                    (n.tag & 3) == 3 &&
                        ((e = n.destroy),
                        (n.destroy = void 0),
                        e !== void 0 && e()),
                        (n = n.next)
                while (n !== r)
            }
            return
        case 1:
            return
        case 5:
            if (((r = t.stateNode), r != null)) {
                n = t.memoizedProps
                var i = e !== null ? e.memoizedProps : n
                e = t.type
                var o = t.updateQueue
                if (((t.updateQueue = null), o !== null)) {
                    for (
                        r[ga] = n,
                            e === 'input' &&
                                n.type === 'radio' &&
                                n.name != null &&
                                gd(r, n),
                            Dl(e, i),
                            t = Dl(e, n),
                            i = 0;
                        i < o.length;
                        i += 2
                    ) {
                        var a = o[i],
                            s = o[i + 1]
                        a === 'style'
                            ? Ed(r, s)
                            : a === 'dangerouslySetInnerHTML'
                            ? Cd(r, s)
                            : a === 'children'
                            ? Ti(r, s)
                            : pl(r, a, s, t)
                    }
                    switch (e) {
                        case 'input':
                            kl(r, n)
                            break
                        case 'textarea':
                            xd(r, n)
                            break
                        case 'select':
                            ;(e = r._wrapperState.wasMultiple),
                                (r._wrapperState.wasMultiple = !!n.multiple),
                                (o = n.value),
                                o != null
                                    ? En(r, !!n.multiple, o, !1)
                                    : e !== !!n.multiple &&
                                      (n.defaultValue != null
                                          ? En(
                                                r,
                                                !!n.multiple,
                                                n.defaultValue,
                                                !0
                                            )
                                          : En(
                                                r,
                                                !!n.multiple,
                                                n.multiple ? [] : '',
                                                !1
                                            ))
                    }
                }
            }
            return
        case 6:
            if (t.stateNode === null) throw Error(z(162))
            t.stateNode.nodeValue = t.memoizedProps
            return
        case 3:
            ;(r = t.stateNode),
                r.hydrate && ((r.hydrate = !1), Ld(r.containerInfo))
            return
        case 12:
            return
        case 13:
            t.memoizedState !== null && ((Qu = Ye()), Rp(t.child, !0)), Up(t)
            return
        case 19:
            Up(t)
            return
        case 17:
            return
        case 23:
        case 24:
            Rp(t, t.memoizedState !== null)
            return
    }
    throw Error(z(163))
}
function Up(e) {
    var t = e.updateQueue
    if (t !== null) {
        e.updateQueue = null
        var r = e.stateNode
        r === null && (r = e.stateNode = new f1()),
            t.forEach(function (n) {
                var i = _1.bind(null, e, n)
                r.has(n) || (r.add(n), n.then(i, i))
            })
    }
}
function p1(e, t) {
    return e !== null &&
        ((e = e.memoizedState), e === null || e.dehydrated !== null)
        ? ((t = t.memoizedState), t !== null && t.dehydrated === null)
        : !1
}
var m1 = Math.ceil,
    $a = Gr.ReactCurrentDispatcher,
    qu = Gr.ReactCurrentOwner,
    X = 0,
    tt = null,
    Be = null,
    Qe = 0,
    an = 0,
    Gu = Cr(0),
    He = 0,
    za = null,
    Vn = 0,
    so = 0,
    Kn = 0,
    Yu = 0,
    Xu = null,
    Qu = 0,
    Ju = 1 / 0
function qn() {
    Ju = Ye() + 500
}
var H = null,
    La = !1,
    Zu = null,
    qt = null,
    Ir = !1,
    lo = null,
    uo = 90,
    ec = [],
    tc = [],
    ur = null,
    co = 0,
    rc = null,
    ja = -1,
    cr = 0,
    Wa = 0,
    fo = null,
    Ha = !1
function ht() {
    return (X & 48) != 0 ? Ye() : ja !== -1 ? ja : (ja = Ye())
}
function Rr(e) {
    if (((e = e.mode), (e & 2) == 0)) return 1
    if ((e & 4) == 0) return zn() === 99 ? 1 : 2
    if ((cr === 0 && (cr = Vn), r1.transition !== 0)) {
        Wa !== 0 && (Wa = Xu !== null ? Xu.pendingLanes : 0), (e = cr)
        var t = 4186112 & ~Wa
        return (
            (t &= -t),
            t === 0 &&
                ((e = 4186112 & ~e), (t = e & -e), t === 0 && (t = 8192)),
            t
        )
    }
    return (
        (e = zn()),
        (X & 4) != 0 && e === 98
            ? (e = aa(12, cr))
            : ((e = oy(e)), (e = aa(e, cr))),
        e
    )
}
function Pr(e, t, r) {
    if (50 < co) throw ((co = 0), (rc = null), Error(z(185)))
    if (((e = Va(e, t)), e === null)) return null
    sa(e, t, r), e === tt && ((Kn |= t), He === 4 && Gn(e, Qe))
    var n = zn()
    t === 1
        ? (X & 8) != 0 && (X & 48) == 0
            ? nc(e)
            : (Ct(e, r), X === 0 && (qn(), Wt()))
        : ((X & 4) == 0 ||
              (n !== 98 && n !== 99) ||
              (ur === null ? (ur = new Set([e])) : ur.add(e)),
          Ct(e, r)),
        (Xu = e)
}
function Va(e, t) {
    e.lanes |= t
    var r = e.alternate
    for (r !== null && (r.lanes |= t), r = e, e = e.return; e !== null; )
        (e.childLanes |= t),
            (r = e.alternate),
            r !== null && (r.childLanes |= t),
            (r = e),
            (e = e.return)
    return r.tag === 3 ? r.stateNode : null
}
function Ct(e, t) {
    for (
        var r = e.callbackNode,
            n = e.suspendedLanes,
            i = e.pingedLanes,
            o = e.expirationTimes,
            a = e.pendingLanes;
        0 < a;

    ) {
        var s = 31 - xr(a),
            l = 1 << s,
            u = o[s]
        if (u === -1) {
            if ((l & n) == 0 || (l & i) != 0) {
                ;(u = t), In(l)
                var d = ge
                o[s] = 10 <= d ? u + 250 : 6 <= d ? u + 5e3 : -1
            }
        } else u <= t && (e.expiredLanes |= l)
        a &= ~l
    }
    if (((n = Mi(e, e === tt ? Qe : 0)), (t = ge), n === 0))
        r !== null &&
            (r !== xu && yu(r),
            (e.callbackNode = null),
            (e.callbackPriority = 0))
    else {
        if (r !== null) {
            if (e.callbackPriority === t) return
            r !== xu && yu(r)
        }
        t === 15
            ? ((r = nc.bind(null, e)),
              ar === null ? ((ar = [r]), (ba = gu(wa, Lh))) : ar.push(r),
              (r = xu))
            : t === 14
            ? (r = Gi(99, nc.bind(null, e)))
            : ((r = ay(t)), (r = Gi(r, Mp.bind(null, e)))),
            (e.callbackPriority = t),
            (e.callbackNode = r)
    }
}
function Mp(e) {
    if (((ja = -1), (Wa = cr = 0), (X & 48) != 0)) throw Error(z(327))
    var t = e.callbackNode
    if (Fr() && e.callbackNode !== t) return null
    var r = Mi(e, e === tt ? Qe : 0)
    if (r === 0) return null
    var n = r,
        i = X
    X |= 16
    var o = Lp()
    ;(tt !== e || Qe !== n) && (qn(), Yn(e, n))
    do
        try {
            y1()
            break
        } catch (s) {
            zp(e, s)
        }
    while (1)
    if (
        (bu(),
        ($a.current = o),
        (X = i),
        Be !== null ? (n = 0) : ((tt = null), (Qe = 0), (n = He)),
        (Vn & Kn) != 0)
    )
        Yn(e, 0)
    else if (n !== 0) {
        if (
            (n === 2 &&
                ((X |= 64),
                e.hydrate && ((e.hydrate = !1), hu(e.containerInfo)),
                (r = Gd(e)),
                r !== 0 && (n = ho(e, r))),
            n === 1)
        )
            throw ((t = za), Yn(e, 0), Gn(e, r), Ct(e, Ye()), t)
        switch (
            ((e.finishedWork = e.current.alternate), (e.finishedLanes = r), n)
        ) {
            case 0:
            case 1:
                throw Error(z(345))
            case 2:
                sn(e)
                break
            case 3:
                if (
                    (Gn(e, r),
                    (r & 62914560) === r && ((n = Qu + 500 - Ye()), 10 < n))
                ) {
                    if (Mi(e, 0) !== 0) break
                    if (((i = e.suspendedLanes), (i & r) !== r)) {
                        ht(), (e.pingedLanes |= e.suspendedLanes & i)
                        break
                    }
                    e.timeoutHandle = Th(sn.bind(null, e), n)
                    break
                }
                sn(e)
                break
            case 4:
                if ((Gn(e, r), (r & 4186112) === r)) break
                for (n = e.eventTimes, i = -1; 0 < r; ) {
                    var a = 31 - xr(r)
                    ;(o = 1 << a), (a = n[a]), a > i && (i = a), (r &= ~o)
                }
                if (
                    ((r = i),
                    (r = Ye() - r),
                    (r =
                        (120 > r
                            ? 120
                            : 480 > r
                            ? 480
                            : 1080 > r
                            ? 1080
                            : 1920 > r
                            ? 1920
                            : 3e3 > r
                            ? 3e3
                            : 4320 > r
                            ? 4320
                            : 1960 * m1(r / 1960)) - r),
                    10 < r)
                ) {
                    e.timeoutHandle = Th(sn.bind(null, e), r)
                    break
                }
                sn(e)
                break
            case 5:
                sn(e)
                break
            default:
                throw Error(z(329))
        }
    }
    return Ct(e, Ye()), e.callbackNode === t ? Mp.bind(null, e) : null
}
function Gn(e, t) {
    for (
        t &= ~Yu,
            t &= ~Kn,
            e.suspendedLanes |= t,
            e.pingedLanes &= ~t,
            e = e.expirationTimes;
        0 < t;

    ) {
        var r = 31 - xr(t),
            n = 1 << r
        ;(e[r] = -1), (t &= ~n)
    }
}
function nc(e) {
    if ((X & 48) != 0) throw Error(z(327))
    if ((Fr(), e === tt && (e.expiredLanes & Qe) != 0)) {
        var t = Qe,
            r = ho(e, t)
        ;(Vn & Kn) != 0 && ((t = Mi(e, t)), (r = ho(e, t)))
    } else (t = Mi(e, 0)), (r = ho(e, t))
    if (
        (e.tag !== 0 &&
            r === 2 &&
            ((X |= 64),
            e.hydrate && ((e.hydrate = !1), hu(e.containerInfo)),
            (t = Gd(e)),
            t !== 0 && (r = ho(e, t))),
        r === 1)
    )
        throw ((r = za), Yn(e, 0), Gn(e, t), Ct(e, Ye()), r)
    return (
        (e.finishedWork = e.current.alternate),
        (e.finishedLanes = t),
        sn(e),
        Ct(e, Ye()),
        null
    )
}
function v1() {
    if (ur !== null) {
        var e = ur
        ;(ur = null),
            e.forEach(function (t) {
                ;(t.expiredLanes |= 24 & t.pendingLanes), Ct(t, Ye())
            })
    }
    Wt()
}
function Op(e, t) {
    var r = X
    X |= 1
    try {
        return e(t)
    } finally {
        ;(X = r), X === 0 && (qn(), Wt())
    }
}
function $p(e, t) {
    var r = X
    ;(X &= -2), (X |= 8)
    try {
        return e(t)
    } finally {
        ;(X = r), X === 0 && (qn(), Wt())
    }
}
function Ka(e, t) {
    Te(Gu, an), (an |= t), (Vn |= t)
}
function ic() {
    ;(an = Gu.current), xe(Gu)
}
function Yn(e, t) {
    ;(e.finishedWork = null), (e.finishedLanes = 0)
    var r = e.timeoutHandle
    if ((r !== -1 && ((e.timeoutHandle = -1), Xy(r)), Be !== null))
        for (r = Be.return; r !== null; ) {
            var n = r
            switch (n.tag) {
                case 1:
                    ;(n = n.type.childContextTypes), n != null && Sa()
                    break
                case 3:
                    Wn(), xe(nt), xe(Ge), Ru()
                    break
                case 5:
                    Tu(n)
                    break
                case 4:
                    Wn()
                    break
                case 13:
                    xe(Ae)
                    break
                case 19:
                    xe(Ae)
                    break
                case 10:
                    Cu(n)
                    break
                case 23:
                case 24:
                    ic()
            }
            r = r.return
        }
    ;(tt = e),
        (Be = Br(e.current, null)),
        (Qe = an = Vn = t),
        (He = 0),
        (za = null),
        (Yu = Kn = so = 0)
}
function zp(e, t) {
    do {
        var r = Be
        try {
            if ((bu(), (eo.current = Ma), Da)) {
                for (var n = Re.memoizedState; n !== null; ) {
                    var i = n.queue
                    i !== null && (i.pending = null), (n = n.next)
                }
                Da = !1
            }
            if (
                ((to = 0),
                (We = Xe = Re = null),
                (ro = !1),
                (qu.current = null),
                r === null || r.return === null)
            ) {
                ;(He = 1), (za = t), (Be = null)
                break
            }
            e: {
                var o = e,
                    a = r.return,
                    s = r,
                    l = t
                if (
                    ((t = Qe),
                    (s.flags |= 2048),
                    (s.firstEffect = s.lastEffect = null),
                    l !== null &&
                        typeof l == 'object' &&
                        typeof l.then == 'function')
                ) {
                    var u = l
                    if ((s.mode & 2) == 0) {
                        var d = s.alternate
                        d
                            ? ((s.updateQueue = d.updateQueue),
                              (s.memoizedState = d.memoizedState),
                              (s.lanes = d.lanes))
                            : ((s.updateQueue = null), (s.memoizedState = null))
                    }
                    var m = (Ae.current & 1) != 0,
                        p = a
                    do {
                        var x
                        if ((x = p.tag === 13)) {
                            var _ = p.memoizedState
                            if (_ !== null) x = _.dehydrated !== null
                            else {
                                var b = p.memoizedProps
                                x =
                                    b.fallback === void 0
                                        ? !1
                                        : b.unstable_avoidThisFallback !== !0
                                        ? !0
                                        : !m
                            }
                        }
                        if (x) {
                            var g = p.updateQueue
                            if (g === null) {
                                var v = new Set()
                                v.add(u), (p.updateQueue = v)
                            } else g.add(u)
                            if ((p.mode & 2) == 0) {
                                if (
                                    ((p.flags |= 64),
                                    (s.flags |= 16384),
                                    (s.flags &= -2981),
                                    s.tag === 1)
                                )
                                    if (s.alternate === null) s.tag = 17
                                    else {
                                        var h = kr(-1, 1)
                                        ;(h.tag = 2), Tr(s, h)
                                    }
                                s.lanes |= 1
                                break e
                            }
                            ;(l = void 0), (s = t)
                            var C = o.pingCache
                            if (
                                (C === null
                                    ? ((C = o.pingCache = new c1()),
                                      (l = new Set()),
                                      C.set(u, l))
                                    : ((l = C.get(u)),
                                      l === void 0 &&
                                          ((l = new Set()), C.set(u, l))),
                                !l.has(s))
                            ) {
                                l.add(s)
                                var E = C1.bind(null, o, u, s)
                                u.then(E, E)
                            }
                            ;(p.flags |= 4096), (p.lanes = t)
                            break e
                        }
                        p = p.return
                    } while (p !== null)
                    l = Error(
                        (_n(s.type) || 'A React component') +
                            ` suspended while rendering, but no fallback UI was specified.

Add a <Suspense fallback=...> component higher in the tree to provide a loading indicator or placeholder to display.`
                    )
                }
                He !== 5 && (He = 2), (l = ju(l, s)), (p = a)
                do {
                    switch (p.tag) {
                        case 3:
                            ;(o = l),
                                (p.flags |= 4096),
                                (t &= -t),
                                (p.lanes |= t)
                            var D = Tp(p, o, t)
                            Hh(p, D)
                            break e
                        case 1:
                            o = l
                            var P = p.type,
                                F = p.stateNode
                            if (
                                (p.flags & 64) == 0 &&
                                (typeof P.getDerivedStateFromError ==
                                    'function' ||
                                    (F !== null &&
                                        typeof F.componentDidCatch ==
                                            'function' &&
                                        (qt === null || !qt.has(F))))
                            ) {
                                ;(p.flags |= 4096), (t &= -t), (p.lanes |= t)
                                var O = Ap(p, o, t)
                                Hh(p, O)
                                break e
                            }
                    }
                    p = p.return
                } while (p !== null)
            }
            Wp(r)
        } catch (M) {
            ;(t = M), Be === r && r !== null && (Be = r = r.return)
            continue
        }
        break
    } while (1)
}
function Lp() {
    var e = $a.current
    return ($a.current = Ma), e === null ? Ma : e
}
function ho(e, t) {
    var r = X
    X |= 16
    var n = Lp()
    ;(tt === e && Qe === t) || Yn(e, t)
    do
        try {
            g1()
            break
        } catch (i) {
            zp(e, i)
        }
    while (1)
    if ((bu(), (X = r), ($a.current = n), Be !== null)) throw Error(z(261))
    return (tt = null), (Qe = 0), He
}
function g1() {
    for (; Be !== null; ) jp(Be)
}
function y1() {
    for (; Be !== null && !Zy(); ) jp(Be)
}
function jp(e) {
    var t = Kp(e.alternate, e, an)
    ;(e.memoizedProps = e.pendingProps),
        t === null ? Wp(e) : (Be = t),
        (qu.current = null)
}
function Wp(e) {
    var t = e
    do {
        var r = t.alternate
        if (((e = t.return), (t.flags & 2048) == 0)) {
            if (((r = l1(r, t, an)), r !== null)) {
                Be = r
                return
            }
            if (
                ((r = t),
                (r.tag !== 24 && r.tag !== 23) ||
                    r.memoizedState === null ||
                    (an & 1073741824) != 0 ||
                    (r.mode & 4) == 0)
            ) {
                for (var n = 0, i = r.child; i !== null; )
                    (n |= i.lanes | i.childLanes), (i = i.sibling)
                r.childLanes = n
            }
            e !== null &&
                (e.flags & 2048) == 0 &&
                (e.firstEffect === null && (e.firstEffect = t.firstEffect),
                t.lastEffect !== null &&
                    (e.lastEffect !== null &&
                        (e.lastEffect.nextEffect = t.firstEffect),
                    (e.lastEffect = t.lastEffect)),
                1 < t.flags &&
                    (e.lastEffect !== null
                        ? (e.lastEffect.nextEffect = t)
                        : (e.firstEffect = t),
                    (e.lastEffect = t)))
        } else {
            if (((r = u1(t)), r !== null)) {
                ;(r.flags &= 2047), (Be = r)
                return
            }
            e !== null &&
                ((e.firstEffect = e.lastEffect = null), (e.flags |= 2048))
        }
        if (((t = t.sibling), t !== null)) {
            Be = t
            return
        }
        Be = t = e
    } while (t !== null)
    He === 0 && (He = 5)
}
function sn(e) {
    var t = zn()
    return tn(99, S1.bind(null, e, t)), null
}
function S1(e, t) {
    do Fr()
    while (lo !== null)
    if ((X & 48) != 0) throw Error(z(327))
    var r = e.finishedWork
    if (r === null) return null
    if (((e.finishedWork = null), (e.finishedLanes = 0), r === e.current))
        throw Error(z(177))
    e.callbackNode = null
    var n = r.lanes | r.childLanes,
        i = n,
        o = e.pendingLanes & ~i
    ;(e.pendingLanes = i),
        (e.suspendedLanes = 0),
        (e.pingedLanes = 0),
        (e.expiredLanes &= i),
        (e.mutableReadLanes &= i),
        (e.entangledLanes &= i),
        (i = e.entanglements)
    for (var a = e.eventTimes, s = e.expirationTimes; 0 < o; ) {
        var l = 31 - xr(o),
            u = 1 << l
        ;(i[l] = 0), (a[l] = -1), (s[l] = -1), (o &= ~u)
    }
    if (
        (ur !== null && (n & 24) == 0 && ur.has(e) && ur.delete(e),
        e === tt && ((Be = tt = null), (Qe = 0)),
        1 < r.flags
            ? r.lastEffect !== null
                ? ((r.lastEffect.nextEffect = r), (n = r.firstEffect))
                : (n = r)
            : (n = r.firstEffect),
        n !== null)
    ) {
        if (
            ((i = X),
            (X |= 32),
            (qu.current = null),
            (cu = la),
            (a = ph()),
            au(a))
        ) {
            if ('selectionStart' in a)
                s = { start: a.selectionStart, end: a.selectionEnd }
            else
                e: if (
                    ((s = ((s = a.ownerDocument) && s.defaultView) || window),
                    (u = s.getSelection && s.getSelection()) &&
                        u.rangeCount !== 0)
                ) {
                    ;(s = u.anchorNode),
                        (o = u.anchorOffset),
                        (l = u.focusNode),
                        (u = u.focusOffset)
                    try {
                        s.nodeType, l.nodeType
                    } catch {
                        s = null
                        break e
                    }
                    var d = 0,
                        m = -1,
                        p = -1,
                        x = 0,
                        _ = 0,
                        b = a,
                        g = null
                    t: for (;;) {
                        for (
                            var v;
                            b !== s ||
                                (o !== 0 && b.nodeType !== 3) ||
                                (m = d + o),
                                b !== l ||
                                    (u !== 0 && b.nodeType !== 3) ||
                                    (p = d + u),
                                b.nodeType === 3 && (d += b.nodeValue.length),
                                (v = b.firstChild) !== null;

                        )
                            (g = b), (b = v)
                        for (;;) {
                            if (b === a) break t
                            if (
                                (g === s && ++x === o && (m = d),
                                g === l && ++_ === u && (p = d),
                                (v = b.nextSibling) !== null)
                            )
                                break
                            ;(b = g), (g = b.parentNode)
                        }
                        b = v
                    }
                    s = m === -1 || p === -1 ? null : { start: m, end: p }
                } else s = null
            s = s || { start: 0, end: 0 }
        } else s = null
        ;(fu = { focusedElem: a, selectionRange: s }),
            (la = !1),
            (fo = null),
            (Ha = !1),
            (H = n)
        do
            try {
                x1()
            } catch (M) {
                if (H === null) throw Error(z(330))
                Dr(H, M), (H = H.nextEffect)
            }
        while (H !== null)
        ;(fo = null), (H = n)
        do
            try {
                for (a = e; H !== null; ) {
                    var h = H.flags
                    if ((h & 16 && Ti(H.stateNode, ''), h & 128)) {
                        var C = H.alternate
                        if (C !== null) {
                            var E = C.ref
                            E !== null &&
                                (typeof E == 'function'
                                    ? E(null)
                                    : (E.current = null))
                        }
                    }
                    switch (h & 1038) {
                        case 2:
                            Bp(H), (H.flags &= -3)
                            break
                        case 6:
                            Bp(H), (H.flags &= -3), Ku(H.alternate, H)
                            break
                        case 1024:
                            H.flags &= -1025
                            break
                        case 1028:
                            ;(H.flags &= -1025), Ku(H.alternate, H)
                            break
                        case 4:
                            Ku(H.alternate, H)
                            break
                        case 8:
                            ;(s = H), Np(a, s)
                            var D = s.alternate
                            Fp(s), D !== null && Fp(D)
                    }
                    H = H.nextEffect
                }
            } catch (M) {
                if (H === null) throw Error(z(330))
                Dr(H, M), (H = H.nextEffect)
            }
        while (H !== null)
        if (
            ((E = fu),
            (C = ph()),
            (h = E.focusedElem),
            (a = E.selectionRange),
            C !== h &&
                h &&
                h.ownerDocument &&
                hh(h.ownerDocument.documentElement, h))
        ) {
            for (
                a !== null &&
                    au(h) &&
                    ((C = a.start),
                    (E = a.end),
                    E === void 0 && (E = C),
                    ('selectionStart' in h)
                        ? ((h.selectionStart = C),
                          (h.selectionEnd = Math.min(E, h.value.length)))
                        : ((E =
                              ((C = h.ownerDocument || document) &&
                                  C.defaultView) ||
                              window),
                          E.getSelection &&
                              ((E = E.getSelection()),
                              (s = h.textContent.length),
                              (D = Math.min(a.start, s)),
                              (a = a.end === void 0 ? D : Math.min(a.end, s)),
                              !E.extend && D > a && ((s = a), (a = D), (D = s)),
                              (s = dh(h, D)),
                              (o = dh(h, a)),
                              s &&
                                  o &&
                                  (E.rangeCount !== 1 ||
                                      E.anchorNode !== s.node ||
                                      E.anchorOffset !== s.offset ||
                                      E.focusNode !== o.node ||
                                      E.focusOffset !== o.offset) &&
                                  ((C = C.createRange()),
                                  C.setStart(s.node, s.offset),
                                  E.removeAllRanges(),
                                  D > a
                                      ? (E.addRange(C),
                                        E.extend(o.node, o.offset))
                                      : (C.setEnd(o.node, o.offset),
                                        E.addRange(C)))))),
                    C = [],
                    E = h;
                (E = E.parentNode);

            )
                E.nodeType === 1 &&
                    C.push({ element: E, left: E.scrollLeft, top: E.scrollTop })
            for (
                typeof h.focus == 'function' && h.focus(), h = 0;
                h < C.length;
                h++
            )
                (E = C[h]),
                    (E.element.scrollLeft = E.left),
                    (E.element.scrollTop = E.top)
        }
        ;(la = !!cu), (fu = cu = null), (e.current = r), (H = n)
        do
            try {
                for (h = e; H !== null; ) {
                    var P = H.flags
                    if ((P & 36 && h1(h, H.alternate, H), P & 128)) {
                        C = void 0
                        var F = H.ref
                        if (F !== null) {
                            var O = H.stateNode
                            switch (H.tag) {
                                case 5:
                                    C = O
                                    break
                                default:
                                    C = O
                            }
                            typeof F == 'function' ? F(C) : (F.current = C)
                        }
                    }
                    H = H.nextEffect
                }
            } catch (M) {
                if (H === null) throw Error(z(330))
                Dr(H, M), (H = H.nextEffect)
            }
        while (H !== null)
        ;(H = null), t1(), (X = i)
    } else e.current = r
    if (Ir) (Ir = !1), (lo = e), (uo = t)
    else
        for (H = n; H !== null; )
            (t = H.nextEffect),
                (H.nextEffect = null),
                H.flags & 8 &&
                    ((P = H), (P.sibling = null), (P.stateNode = null)),
                (H = t)
    if (
        ((n = e.pendingLanes),
        n === 0 && (qt = null),
        n === 1 ? (e === rc ? co++ : ((co = 0), (rc = e))) : (co = 0),
        (r = r.stateNode),
        en && typeof en.onCommitFiberRoot == 'function')
    )
        try {
            en.onCommitFiberRoot(vu, r, void 0, (r.current.flags & 64) == 64)
        } catch {}
    if ((Ct(e, Ye()), La)) throw ((La = !1), (e = Zu), (Zu = null), e)
    return (X & 8) != 0 || Wt(), null
}
function x1() {
    for (; H !== null; ) {
        var e = H.alternate
        Ha ||
            fo === null ||
            ((H.flags & 8) != 0
                ? Bd(H, fo) && (Ha = !0)
                : H.tag === 13 && p1(e, H) && Bd(H, fo) && (Ha = !0))
        var t = H.flags
        ;(t & 256) != 0 && d1(e, H),
            (t & 512) == 0 ||
                Ir ||
                ((Ir = !0),
                Gi(97, function () {
                    return Fr(), null
                })),
            (H = H.nextEffect)
    }
}
function Fr() {
    if (uo !== 90) {
        var e = 97 < uo ? 97 : uo
        return (uo = 90), tn(e, b1)
    }
    return !1
}
function w1(e, t) {
    ec.push(t, e),
        Ir ||
            ((Ir = !0),
            Gi(97, function () {
                return Fr(), null
            }))
}
function Hp(e, t) {
    tc.push(t, e),
        Ir ||
            ((Ir = !0),
            Gi(97, function () {
                return Fr(), null
            }))
}
function b1() {
    if (lo === null) return !1
    var e = lo
    if (((lo = null), (X & 48) != 0)) throw Error(z(331))
    var t = X
    X |= 32
    var r = tc
    tc = []
    for (var n = 0; n < r.length; n += 2) {
        var i = r[n],
            o = r[n + 1],
            a = i.destroy
        if (((i.destroy = void 0), typeof a == 'function'))
            try {
                a()
            } catch (l) {
                if (o === null) throw Error(z(330))
                Dr(o, l)
            }
    }
    for (r = ec, ec = [], n = 0; n < r.length; n += 2) {
        ;(i = r[n]), (o = r[n + 1])
        try {
            var s = i.create
            i.destroy = s()
        } catch (l) {
            if (o === null) throw Error(z(330))
            Dr(o, l)
        }
    }
    for (s = e.current.firstEffect; s !== null; )
        (e = s.nextEffect),
            (s.nextEffect = null),
            s.flags & 8 && ((s.sibling = null), (s.stateNode = null)),
            (s = e)
    return (X = t), Wt(), !0
}
function Vp(e, t, r) {
    ;(t = ju(r, t)),
        (t = Tp(e, t, 1)),
        Tr(e, t),
        (t = ht()),
        (e = Va(e, 1)),
        e !== null && (sa(e, 1, t), Ct(e, t))
}
function Dr(e, t) {
    if (e.tag === 3) Vp(e, e, t)
    else
        for (var r = e.return; r !== null; ) {
            if (r.tag === 3) {
                Vp(r, e, t)
                break
            } else if (r.tag === 1) {
                var n = r.stateNode
                if (
                    typeof r.type.getDerivedStateFromError == 'function' ||
                    (typeof n.componentDidCatch == 'function' &&
                        (qt === null || !qt.has(n)))
                ) {
                    e = ju(t, e)
                    var i = Ap(r, e, 1)
                    if ((Tr(r, i), (i = ht()), (r = Va(r, 1)), r !== null))
                        sa(r, 1, i), Ct(r, i)
                    else if (
                        typeof n.componentDidCatch == 'function' &&
                        (qt === null || !qt.has(n))
                    )
                        try {
                            n.componentDidCatch(t, e)
                        } catch {}
                    break
                }
            }
            r = r.return
        }
}
function C1(e, t, r) {
    var n = e.pingCache
    n !== null && n.delete(t),
        (t = ht()),
        (e.pingedLanes |= e.suspendedLanes & r),
        tt === e &&
            (Qe & r) === r &&
            (He === 4 || (He === 3 && (Qe & 62914560) === Qe && 500 > Ye() - Qu)
                ? Yn(e, 0)
                : (Yu |= r)),
        Ct(e, t)
}
function _1(e, t) {
    var r = e.stateNode
    r !== null && r.delete(t),
        (t = 0),
        t === 0 &&
            ((t = e.mode),
            (t & 2) == 0
                ? (t = 1)
                : (t & 4) == 0
                ? (t = zn() === 99 ? 1 : 2)
                : (cr === 0 && (cr = Vn),
                  (t = Rn(62914560 & ~cr)),
                  t === 0 && (t = 4194304))),
        (r = ht()),
        (e = Va(e, t)),
        e !== null && (sa(e, t, r), Ct(e, r))
}
var Kp
Kp = function (e, t, r) {
    var n = t.lanes
    if (e !== null)
        if (e.memoizedProps !== t.pendingProps || nt.current) Nt = !0
        else if ((r & n) != 0) Nt = (e.flags & 16384) != 0
        else {
            switch (((Nt = !1), t.tag)) {
                case 3:
                    gp(t), Iu()
                    break
                case 5:
                    Jh(t)
                    break
                case 1:
                    it(t.type) && xa(t)
                    break
                case 4:
                    ku(t, t.stateNode.containerInfo)
                    break
                case 10:
                    n = t.memoizedProps.value
                    var i = t.type._context
                    Te(Ca, i._currentValue), (i._currentValue = n)
                    break
                case 13:
                    if (t.memoizedState !== null)
                        return (r & t.child.childLanes) != 0
                            ? yp(e, t, r)
                            : (Te(Ae, Ae.current & 1),
                              (t = lr(e, t, r)),
                              t !== null ? t.sibling : null)
                    Te(Ae, Ae.current & 1)
                    break
                case 19:
                    if (((n = (r & t.childLanes) != 0), (e.flags & 64) != 0)) {
                        if (n) return Cp(e, t, r)
                        t.flags |= 64
                    }
                    if (
                        ((i = t.memoizedState),
                        i !== null &&
                            ((i.rendering = null),
                            (i.tail = null),
                            (i.lastEffect = null)),
                        Te(Ae, Ae.current),
                        n)
                    )
                        break
                    return null
                case 23:
                case 24:
                    return (t.lanes = 0), Mu(e, t, r)
            }
            return lr(e, t, r)
        }
    else Nt = !1
    switch (((t.lanes = 0), t.tag)) {
        case 2:
            if (
                ((n = t.type),
                e !== null &&
                    ((e.alternate = null),
                    (t.alternate = null),
                    (t.flags |= 2)),
                (e = t.pendingProps),
                (i = $n(t, Ge.current)),
                jn(t, r),
                (i = Fu(null, t, n, e, i, r)),
                (t.flags |= 1),
                typeof i == 'object' &&
                    i !== null &&
                    typeof i.render == 'function' &&
                    i.$$typeof === void 0)
            ) {
                if (
                    ((t.tag = 1),
                    (t.memoizedState = null),
                    (t.updateQueue = null),
                    it(n))
                ) {
                    var o = !0
                    xa(t)
                } else o = !1
                ;(t.memoizedState =
                    i.state !== null && i.state !== void 0 ? i.state : null),
                    _u(t)
                var a = n.getDerivedStateFromProps
                typeof a == 'function' && ka(t, n, a, e),
                    (i.updater = Ta),
                    (t.stateNode = i),
                    (i._reactInternals = t),
                    Eu(t, n, e, r),
                    (t = $u(null, t, n, !0, o, r))
            } else (t.tag = 0), at(null, t, i, r), (t = t.child)
            return t
        case 16:
            i = t.elementType
            e: {
                switch (
                    (e !== null &&
                        ((e.alternate = null),
                        (t.alternate = null),
                        (t.flags |= 2)),
                    (e = t.pendingProps),
                    (o = i._init),
                    (i = o(i._payload)),
                    (t.type = i),
                    (o = t.tag = k1(i)),
                    (e = Bt(i, e)),
                    o)
                ) {
                    case 0:
                        t = Ou(null, t, i, e, r)
                        break e
                    case 1:
                        t = vp(null, t, i, e, r)
                        break e
                    case 11:
                        t = dp(null, t, i, e, r)
                        break e
                    case 14:
                        t = hp(null, t, i, Bt(i.type, e), n, r)
                        break e
                }
                throw Error(z(306, i, ''))
            }
            return t
        case 0:
            return (
                (n = t.type),
                (i = t.pendingProps),
                (i = t.elementType === n ? i : Bt(n, i)),
                Ou(e, t, n, i, r)
            )
        case 1:
            return (
                (n = t.type),
                (i = t.pendingProps),
                (i = t.elementType === n ? i : Bt(n, i)),
                vp(e, t, n, i, r)
            )
        case 3:
            if ((gp(t), (n = t.updateQueue), e === null || n === null))
                throw Error(z(282))
            if (
                ((n = t.pendingProps),
                (i = t.memoizedState),
                (i = i !== null ? i.element : null),
                Wh(e, t),
                Yi(t, n, null, r),
                (n = t.memoizedState.element),
                n === i)
            )
                Iu(), (t = lr(e, t, r))
            else {
                if (
                    ((i = t.stateNode),
                    (o = i.hydrate) &&
                        ((Ar = Nn(t.stateNode.containerInfo.firstChild)),
                        (sr = t),
                        (o = Vt = !0)),
                    o)
                ) {
                    if (((e = i.mutableSourceEagerHydrationData), e != null))
                        for (i = 0; i < e.length; i += 2)
                            (o = e[i]),
                                (o._workInProgressVersionPrimary = e[i + 1]),
                                Hn.push(o)
                    for (r = Qh(t, null, n, r), t.child = r; r; )
                        (r.flags = (r.flags & -3) | 1024), (r = r.sibling)
                } else at(e, t, n, r), Iu()
                t = t.child
            }
            return t
        case 5:
            return (
                Jh(t),
                e === null && Au(t),
                (n = t.type),
                (i = t.pendingProps),
                (o = e !== null ? e.memoizedProps : null),
                (a = i.children),
                du(n, i)
                    ? (a = null)
                    : o !== null && du(n, o) && (t.flags |= 16),
                mp(e, t),
                at(e, t, a, r),
                t.child
            )
        case 6:
            return e === null && Au(t), null
        case 13:
            return yp(e, t, r)
        case 4:
            return (
                ku(t, t.stateNode.containerInfo),
                (n = t.pendingProps),
                e === null ? (t.child = Ra(t, null, n, r)) : at(e, t, n, r),
                t.child
            )
        case 11:
            return (
                (n = t.type),
                (i = t.pendingProps),
                (i = t.elementType === n ? i : Bt(n, i)),
                dp(e, t, n, i, r)
            )
        case 7:
            return at(e, t, t.pendingProps, r), t.child
        case 8:
            return at(e, t, t.pendingProps.children, r), t.child
        case 12:
            return at(e, t, t.pendingProps.children, r), t.child
        case 10:
            e: {
                ;(n = t.type._context),
                    (i = t.pendingProps),
                    (a = t.memoizedProps),
                    (o = i.value)
                var s = t.type._context
                if (
                    (Te(Ca, s._currentValue), (s._currentValue = o), a !== null)
                )
                    if (
                        ((s = a.value),
                        (o = xt(s, o)
                            ? 0
                            : (typeof n._calculateChangedBits == 'function'
                                  ? n._calculateChangedBits(s, o)
                                  : 1073741823) | 0),
                        o === 0)
                    ) {
                        if (a.children === i.children && !nt.current) {
                            t = lr(e, t, r)
                            break e
                        }
                    } else
                        for (
                            s = t.child, s !== null && (s.return = t);
                            s !== null;

                        ) {
                            var l = s.dependencies
                            if (l !== null) {
                                a = s.child
                                for (var u = l.firstContext; u !== null; ) {
                                    if (
                                        u.context === n &&
                                        (u.observedBits & o) != 0
                                    ) {
                                        s.tag === 1 &&
                                            ((u = kr(-1, r & -r)),
                                            (u.tag = 2),
                                            Tr(s, u)),
                                            (s.lanes |= r),
                                            (u = s.alternate),
                                            u !== null && (u.lanes |= r),
                                            jh(s.return, r),
                                            (l.lanes |= r)
                                        break
                                    }
                                    u = u.next
                                }
                            } else
                                a =
                                    s.tag === 10 && s.type === t.type
                                        ? null
                                        : s.child
                            if (a !== null) a.return = s
                            else
                                for (a = s; a !== null; ) {
                                    if (a === t) {
                                        a = null
                                        break
                                    }
                                    if (((s = a.sibling), s !== null)) {
                                        ;(s.return = a.return), (a = s)
                                        break
                                    }
                                    a = a.return
                                }
                            s = a
                        }
                at(e, t, i.children, r), (t = t.child)
            }
            return t
        case 9:
            return (
                (i = t.type),
                (o = t.pendingProps),
                (n = o.children),
                jn(t, r),
                (i = wt(i, o.unstable_observedBits)),
                (n = n(i)),
                (t.flags |= 1),
                at(e, t, n, r),
                t.child
            )
        case 14:
            return (
                (i = t.type),
                (o = Bt(i, t.pendingProps)),
                (o = Bt(i.type, o)),
                hp(e, t, i, o, n, r)
            )
        case 15:
            return pp(e, t, t.type, t.pendingProps, n, r)
        case 17:
            return (
                (n = t.type),
                (i = t.pendingProps),
                (i = t.elementType === n ? i : Bt(n, i)),
                e !== null &&
                    ((e.alternate = null),
                    (t.alternate = null),
                    (t.flags |= 2)),
                (t.tag = 1),
                it(n) ? ((e = !0), xa(t)) : (e = !1),
                jn(t, r),
                Gh(t, n, i),
                Eu(t, n, i, r),
                $u(null, t, n, !0, e, r)
            )
        case 19:
            return Cp(e, t, r)
        case 23:
            return Mu(e, t, r)
        case 24:
            return Mu(e, t, r)
    }
    throw Error(z(156, t.tag))
}
function E1(e, t, r, n) {
    ;(this.tag = e),
        (this.key = r),
        (this.sibling =
            this.child =
            this.return =
            this.stateNode =
            this.type =
            this.elementType =
                null),
        (this.index = 0),
        (this.ref = null),
        (this.pendingProps = t),
        (this.dependencies =
            this.memoizedState =
            this.updateQueue =
            this.memoizedProps =
                null),
        (this.mode = n),
        (this.flags = 0),
        (this.lastEffect = this.firstEffect = this.nextEffect = null),
        (this.childLanes = this.lanes = 0),
        (this.alternate = null)
}
function _t(e, t, r, n) {
    return new E1(e, t, r, n)
}
function oc(e) {
    return (e = e.prototype), !(!e || !e.isReactComponent)
}
function k1(e) {
    if (typeof e == 'function') return oc(e) ? 1 : 0
    if (e != null) {
        if (((e = e.$$typeof), e === Go)) return 11
        if (e === Xo) return 14
    }
    return 2
}
function Br(e, t) {
    var r = e.alternate
    return (
        r === null
            ? ((r = _t(e.tag, t, e.key, e.mode)),
              (r.elementType = e.elementType),
              (r.type = e.type),
              (r.stateNode = e.stateNode),
              (r.alternate = e),
              (e.alternate = r))
            : ((r.pendingProps = t),
              (r.type = e.type),
              (r.flags = 0),
              (r.nextEffect = null),
              (r.firstEffect = null),
              (r.lastEffect = null)),
        (r.childLanes = e.childLanes),
        (r.lanes = e.lanes),
        (r.child = e.child),
        (r.memoizedProps = e.memoizedProps),
        (r.memoizedState = e.memoizedState),
        (r.updateQueue = e.updateQueue),
        (t = e.dependencies),
        (r.dependencies =
            t === null
                ? null
                : { lanes: t.lanes, firstContext: t.firstContext }),
        (r.sibling = e.sibling),
        (r.index = e.index),
        (r.ref = e.ref),
        r
    )
}
function qa(e, t, r, n, i, o) {
    var a = 2
    if (((n = e), typeof e == 'function')) oc(e) && (a = 1)
    else if (typeof e == 'string') a = 5
    else
        e: switch (e) {
            case mr:
                return Xn(r.children, i, o, t)
            case dd:
                ;(a = 8), (i |= 16)
                break
            case ml:
                ;(a = 8), (i |= 1)
                break
            case Ci:
                return (
                    (e = _t(12, r, t, i | 8)),
                    (e.elementType = Ci),
                    (e.type = Ci),
                    (e.lanes = o),
                    e
                )
            case _i:
                return (
                    (e = _t(13, r, t, i)),
                    (e.type = _i),
                    (e.elementType = _i),
                    (e.lanes = o),
                    e
                )
            case Yo:
                return (
                    (e = _t(19, r, t, i)),
                    (e.elementType = Yo),
                    (e.lanes = o),
                    e
                )
            case wl:
                return ac(r, i, o, t)
            case bl:
                return (
                    (e = _t(24, r, t, i)),
                    (e.elementType = bl),
                    (e.lanes = o),
                    e
                )
            default:
                if (typeof e == 'object' && e !== null)
                    switch (e.$$typeof) {
                        case vl:
                            a = 10
                            break e
                        case gl:
                            a = 9
                            break e
                        case Go:
                            a = 11
                            break e
                        case Xo:
                            a = 14
                            break e
                        case yl:
                            ;(a = 16), (n = null)
                            break e
                        case Sl:
                            a = 22
                            break e
                    }
                throw Error(z(130, e == null ? e : typeof e, ''))
        }
    return (
        (t = _t(a, r, t, i)),
        (t.elementType = e),
        (t.type = n),
        (t.lanes = o),
        t
    )
}
function Xn(e, t, r, n) {
    return (e = _t(7, e, n, t)), (e.lanes = r), e
}
function ac(e, t, r, n) {
    return (e = _t(23, e, n, t)), (e.elementType = wl), (e.lanes = r), e
}
function sc(e, t, r) {
    return (e = _t(6, e, null, t)), (e.lanes = r), e
}
function lc(e, t, r) {
    return (
        (t = _t(4, e.children !== null ? e.children : [], e.key, t)),
        (t.lanes = r),
        (t.stateNode = {
            containerInfo: e.containerInfo,
            pendingChildren: null,
            implementation: e.implementation,
        }),
        t
    )
}
function T1(e, t, r) {
    ;(this.tag = t),
        (this.containerInfo = e),
        (this.finishedWork =
            this.pingCache =
            this.current =
            this.pendingChildren =
                null),
        (this.timeoutHandle = -1),
        (this.pendingContext = this.context = null),
        (this.hydrate = r),
        (this.callbackNode = null),
        (this.callbackPriority = 0),
        (this.eventTimes = Gl(0)),
        (this.expirationTimes = Gl(-1)),
        (this.entangledLanes =
            this.finishedLanes =
            this.mutableReadLanes =
            this.expiredLanes =
            this.pingedLanes =
            this.suspendedLanes =
            this.pendingLanes =
                0),
        (this.entanglements = Gl(0)),
        (this.mutableSourceEagerHydrationData = null)
}
function A1(e, t, r) {
    var n =
        3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null
    return {
        $$typeof: Yr,
        key: n == null ? null : '' + n,
        children: e,
        containerInfo: t,
        implementation: r,
    }
}
function Ga(e, t, r, n) {
    var i = t.current,
        o = ht(),
        a = Rr(i)
    e: if (r) {
        r = r._reactInternals
        t: {
            if (Qr(r) !== r || r.tag !== 1) throw Error(z(170))
            var s = r
            do {
                switch (s.tag) {
                    case 3:
                        s = s.stateNode.context
                        break t
                    case 1:
                        if (it(s.type)) {
                            s =
                                s.stateNode
                                    .__reactInternalMemoizedMergedChildContext
                            break t
                        }
                }
                s = s.return
            } while (s !== null)
            throw Error(z(171))
        }
        if (r.tag === 1) {
            var l = r.type
            if (it(l)) {
                r = Fh(r, l, s)
                break e
            }
        }
        r = s
    } else r = _r
    return (
        t.context === null ? (t.context = r) : (t.pendingContext = r),
        (t = kr(o, a)),
        (t.payload = { element: e }),
        (n = n === void 0 ? null : n),
        n !== null && (t.callback = n),
        Tr(i, t),
        Pr(i, a, o),
        a
    )
}
function uc(e) {
    if (((e = e.current), !e.child)) return null
    switch (e.child.tag) {
        case 5:
            return e.child.stateNode
        default:
            return e.child.stateNode
    }
}
function qp(e, t) {
    if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
        var r = e.retryLane
        e.retryLane = r !== 0 && r < t ? r : t
    }
}
function cc(e, t) {
    qp(e, t), (e = e.alternate) && qp(e, t)
}
function I1() {
    return null
}
function fc(e, t, r) {
    var n =
        (r != null &&
            r.hydrationOptions != null &&
            r.hydrationOptions.mutableSources) ||
        null
    if (
        ((r = new T1(e, t, r != null && r.hydrate === !0)),
        (t = _t(3, null, null, t === 2 ? 7 : t === 1 ? 3 : 0)),
        (r.current = t),
        (t.stateNode = r),
        _u(t),
        (e[Un] = r.current),
        wh(e.nodeType === 8 ? e.parentNode : e),
        n)
    )
        for (e = 0; e < n.length; e++) {
            t = n[e]
            var i = t._getVersion
            ;(i = i(t._source)),
                r.mutableSourceEagerHydrationData == null
                    ? (r.mutableSourceEagerHydrationData = [t, i])
                    : r.mutableSourceEagerHydrationData.push(t, i)
        }
    this._internalRoot = r
}
fc.prototype.render = function (e) {
    Ga(e, this._internalRoot, null, null)
}
fc.prototype.unmount = function () {
    var e = this._internalRoot,
        t = e.containerInfo
    Ga(null, e, null, function () {
        t[Un] = null
    })
}
function po(e) {
    return !(
        !e ||
        (e.nodeType !== 1 &&
            e.nodeType !== 9 &&
            e.nodeType !== 11 &&
            (e.nodeType !== 8 ||
                e.nodeValue !== ' react-mount-point-unstable '))
    )
}
function R1(e, t) {
    if (
        (t ||
            ((t = e
                ? e.nodeType === 9
                    ? e.documentElement
                    : e.firstChild
                : null),
            (t = !(
                !t ||
                t.nodeType !== 1 ||
                !t.hasAttribute('data-reactroot')
            ))),
        !t)
    )
        for (var r; (r = e.lastChild); ) e.removeChild(r)
    return new fc(e, 0, t ? { hydrate: !0 } : void 0)
}
function Ya(e, t, r, n, i) {
    var o = r._reactRootContainer
    if (o) {
        var a = o._internalRoot
        if (typeof i == 'function') {
            var s = i
            i = function () {
                var u = uc(a)
                s.call(u)
            }
        }
        Ga(t, a, e, i)
    } else {
        if (
            ((o = r._reactRootContainer = R1(r, n)),
            (a = o._internalRoot),
            typeof i == 'function')
        ) {
            var l = i
            i = function () {
                var u = uc(a)
                l.call(u)
            }
        }
        $p(function () {
            Ga(t, a, e, i)
        })
    }
    return uc(a)
}
Nd = function (e) {
    if (e.tag === 13) {
        var t = ht()
        Pr(e, 4, t), cc(e, 4)
    }
}
jl = function (e) {
    if (e.tag === 13) {
        var t = ht()
        Pr(e, 67108864, t), cc(e, 67108864)
    }
}
Ud = function (e) {
    if (e.tag === 13) {
        var t = ht(),
            r = Rr(e)
        Pr(e, r, t), cc(e, r)
    }
}
Md = function (e, t) {
    return t()
}
Nl = function (e, t, r) {
    switch (t) {
        case 'input':
            if ((kl(e, r), (t = r.name), r.type === 'radio' && t != null)) {
                for (r = e; r.parentNode; ) r = r.parentNode
                for (
                    r = r.querySelectorAll(
                        'input[name=' +
                            JSON.stringify('' + t) +
                            '][type="radio"]'
                    ),
                        t = 0;
                    t < r.length;
                    t++
                ) {
                    var n = r[t]
                    if (n !== e && n.form === e.form) {
                        var i = ya(n)
                        if (!i) throw Error(z(90))
                        md(n), kl(n, i)
                    }
                }
            }
            break
        case 'textarea':
            xd(e, r)
            break
        case 'select':
            ;(t = r.value), t != null && En(e, !!r.multiple, t, !1)
    }
}
Ul = Op
Id = function (e, t, r, n, i) {
    var o = X
    X |= 4
    try {
        return tn(98, e.bind(null, t, r, n, i))
    } finally {
        ;(X = o), X === 0 && (qn(), Wt())
    }
}
Ml = function () {
    ;(X & 49) == 0 && (v1(), Fr())
}
Rd = function (e, t) {
    var r = X
    X |= 2
    try {
        return e(t)
    } finally {
        ;(X = r), X === 0 && (qn(), Wt())
    }
}
function Gp(e, t) {
    var r =
        2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null
    if (!po(t)) throw Error(z(200))
    return A1(e, t, null, r)
}
var P1 = { Events: [qi, Mn, ya, Td, Ad, Fr, { current: !1 }] },
    mo = {
        findFiberByHostInstance: Jr,
        bundleType: 0,
        version: '17.0.2',
        rendererPackageName: 'react-dom',
    },
    F1 = {
        bundleType: mo.bundleType,
        version: mo.version,
        rendererPackageName: mo.rendererPackageName,
        rendererConfig: mo.rendererConfig,
        overrideHookState: null,
        overrideHookStateDeletePath: null,
        overrideHookStateRenamePath: null,
        overrideProps: null,
        overridePropsDeletePath: null,
        overridePropsRenamePath: null,
        setSuspenseHandler: null,
        scheduleUpdate: null,
        currentDispatcherRef: Gr.ReactCurrentDispatcher,
        findHostInstanceByFiber: function (e) {
            return (e = Dd(e)), e === null ? null : e.stateNode
        },
        findFiberByHostInstance: mo.findFiberByHostInstance || I1,
        findHostInstancesForRefresh: null,
        scheduleRefresh: null,
        scheduleRoot: null,
        setRefreshHandler: null,
        getCurrentFiber: null,
    }
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ != 'undefined') {
    var Xa = __REACT_DEVTOOLS_GLOBAL_HOOK__
    if (!Xa.isDisabled && Xa.supportsFiber)
        try {
            ;(vu = Xa.inject(F1)), (en = Xa)
        } catch {}
}
St.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = P1
St.createPortal = Gp
St.findDOMNode = function (e) {
    if (e == null) return null
    if (e.nodeType === 1) return e
    var t = e._reactInternals
    if (t === void 0)
        throw typeof e.render == 'function'
            ? Error(z(188))
            : Error(z(268, Object.keys(e)))
    return (e = Dd(t)), (e = e === null ? null : e.stateNode), e
}
St.flushSync = function (e, t) {
    var r = X
    if ((r & 48) != 0) return e(t)
    X |= 1
    try {
        if (e) return tn(99, e.bind(null, t))
    } finally {
        ;(X = r), Wt()
    }
}
St.hydrate = function (e, t, r) {
    if (!po(t)) throw Error(z(200))
    return Ya(null, e, t, !0, r)
}
St.render = function (e, t, r) {
    if (!po(t)) throw Error(z(200))
    return Ya(null, e, t, !1, r)
}
St.unmountComponentAtNode = function (e) {
    if (!po(e)) throw Error(z(40))
    return e._reactRootContainer
        ? ($p(function () {
              Ya(null, null, e, !1, function () {
                  ;(e._reactRootContainer = null), (e[Un] = null)
              })
          }),
          !0)
        : !1
}
St.unstable_batchedUpdates = Op
St.unstable_createPortal = function (e, t) {
    return Gp(
        e,
        t,
        2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null
    )
}
St.unstable_renderSubtreeIntoContainer = function (e, t, r, n) {
    if (!po(r)) throw Error(z(200))
    if (e == null || e._reactInternals === void 0) throw Error(z(38))
    return Ya(e, t, r, !1, n)
}
St.version = '17.0.2'
function Yp() {
    if (
        !(
            typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ == 'undefined' ||
            typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != 'function'
        )
    )
        try {
            __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Yp)
        } catch (e) {
            console.error(e)
        }
}
Yp(), (od.exports = St)
var X5 = od.exports
function D1(e) {
    if (e.sheet) return e.sheet
    for (var t = 0; t < document.styleSheets.length; t++)
        if (document.styleSheets[t].ownerNode === e)
            return document.styleSheets[t]
}
function B1(e) {
    var t = document.createElement('style')
    return (
        t.setAttribute('data-emotion', e.key),
        e.nonce !== void 0 && t.setAttribute('nonce', e.nonce),
        t.appendChild(document.createTextNode('')),
        t.setAttribute('data-s', ''),
        t
    )
}
var Xp = (function () {
        function e(r) {
            var n = this
            ;(this._insertTag = function (i) {
                var o
                n.tags.length === 0
                    ? (o = n.prepend ? n.container.firstChild : n.before)
                    : (o = n.tags[n.tags.length - 1].nextSibling),
                    n.container.insertBefore(i, o),
                    n.tags.push(i)
            }),
                (this.isSpeedy = r.speedy === void 0 ? !0 : r.speedy),
                (this.tags = []),
                (this.ctr = 0),
                (this.nonce = r.nonce),
                (this.key = r.key),
                (this.container = r.container),
                (this.prepend = r.prepend),
                (this.before = null)
        }
        var t = e.prototype
        return (
            (t.hydrate = function (n) {
                n.forEach(this._insertTag)
            }),
            (t.insert = function (n) {
                this.ctr % (this.isSpeedy ? 65e3 : 1) == 0 &&
                    this._insertTag(B1(this))
                var i = this.tags[this.tags.length - 1]
                if (this.isSpeedy) {
                    var o = D1(i)
                    try {
                        o.insertRule(n, o.cssRules.length)
                    } catch {}
                } else i.appendChild(document.createTextNode(n))
                this.ctr++
            }),
            (t.flush = function () {
                this.tags.forEach(function (n) {
                    return n.parentNode && n.parentNode.removeChild(n)
                }),
                    (this.tags = []),
                    (this.ctr = 0)
            }),
            e
        )
    })(),
    Je = '-ms-',
    Qa = '-moz-',
    ae = '-webkit-',
    Qp = 'comm',
    dc = 'rule',
    hc = 'decl',
    N1 = '@import',
    U1 = '@keyframes',
    M1 = Math.abs,
    Ja = String.fromCharCode
function O1(e, t) {
    return (
        (((((((t << 2) ^ st(e, 0)) << 2) ^ st(e, 1)) << 2) ^ st(e, 2)) << 2) ^
        st(e, 3)
    )
}
function Jp(e) {
    return e.trim()
}
function $1(e, t) {
    return (e = t.exec(e)) ? e[0] : e
}
function ue(e, t, r) {
    return e.replace(t, r)
}
function Zp(e, t) {
    return e.indexOf(t)
}
function st(e, t) {
    return e.charCodeAt(t) | 0
}
function vo(e, t, r) {
    return e.slice(t, r)
}
function Gt(e) {
    return e.length
}
function pc(e) {
    return e.length
}
function Za(e, t) {
    return t.push(e), e
}
function z1(e, t) {
    return e.map(t).join('')
}
var es = 1,
    Qn = 1,
    e0 = 0,
    lt = 0,
    De = 0,
    Jn = ''
function ts(e, t, r, n, i, o, a) {
    return {
        value: e,
        root: t,
        parent: r,
        type: n,
        props: i,
        children: o,
        line: es,
        column: Qn,
        length: a,
        return: '',
    }
}
function go(e, t, r) {
    return ts(e, t.root, t.parent, r, t.props, t.children, 0)
}
function L1() {
    return De
}
function j1() {
    return (
        (De = lt > 0 ? st(Jn, --lt) : 0),
        Qn--,
        De === 10 && ((Qn = 1), es--),
        De
    )
}
function pt() {
    return (
        (De = lt < e0 ? st(Jn, lt++) : 0),
        Qn++,
        De === 10 && ((Qn = 1), es++),
        De
    )
}
function Yt() {
    return st(Jn, lt)
}
function rs() {
    return lt
}
function yo(e, t) {
    return vo(Jn, e, t)
}
function So(e) {
    switch (e) {
        case 0:
        case 9:
        case 10:
        case 13:
        case 32:
            return 5
        case 33:
        case 43:
        case 44:
        case 47:
        case 62:
        case 64:
        case 126:
        case 59:
        case 123:
        case 125:
            return 4
        case 58:
            return 3
        case 34:
        case 39:
        case 40:
        case 91:
            return 2
        case 41:
        case 93:
            return 1
    }
    return 0
}
function t0(e) {
    return (es = Qn = 1), (e0 = Gt((Jn = e))), (lt = 0), []
}
function r0(e) {
    return (Jn = ''), e
}
function mc(e) {
    return Jp(yo(lt - 1, vc(e === 91 ? e + 2 : e === 40 ? e + 1 : e)))
}
function W1(e) {
    for (; (De = Yt()) && De < 33; ) pt()
    return So(e) > 2 || So(De) > 3 ? '' : ' '
}
function H1(e, t) {
    for (
        ;
        --t &&
        pt() &&
        !(De < 48 || De > 102 || (De > 57 && De < 65) || (De > 70 && De < 97));

    );
    return yo(e, rs() + (t < 6 && Yt() == 32 && pt() == 32))
}
function vc(e) {
    for (; pt(); )
        switch (De) {
            case e:
                return lt
            case 34:
            case 39:
                return vc(e === 34 || e === 39 ? e : De)
            case 40:
                e === 41 && vc(e)
                break
            case 92:
                pt()
                break
        }
    return lt
}
function V1(e, t) {
    for (; pt() && e + De !== 47 + 10; )
        if (e + De === 42 + 42 && Yt() === 47) break
    return '/*' + yo(t, lt - 1) + '*' + Ja(e === 47 ? e : pt())
}
function K1(e) {
    for (; !So(Yt()); ) pt()
    return yo(e, lt)
}
function q1(e) {
    return r0(ns('', null, null, null, [''], (e = t0(e)), 0, [0], e))
}
function ns(e, t, r, n, i, o, a, s, l) {
    for (
        var u = 0,
            d = 0,
            m = a,
            p = 0,
            x = 0,
            _ = 0,
            b = 1,
            g = 1,
            v = 1,
            h = 0,
            C = '',
            E = i,
            D = o,
            P = n,
            F = C;
        g;

    )
        switch (((_ = h), (h = pt()))) {
            case 34:
            case 39:
            case 91:
            case 40:
                F += mc(h)
                break
            case 9:
            case 10:
            case 13:
            case 32:
                F += W1(_)
                break
            case 92:
                F += H1(rs() - 1, 7)
                continue
            case 47:
                switch (Yt()) {
                    case 42:
                    case 47:
                        Za(G1(V1(pt(), rs()), t, r), l)
                        break
                    default:
                        F += '/'
                }
                break
            case 123 * b:
                s[u++] = Gt(F) * v
            case 125 * b:
            case 59:
            case 0:
                switch (h) {
                    case 0:
                    case 125:
                        g = 0
                    case 59 + d:
                        x > 0 &&
                            Gt(F) - m &&
                            Za(
                                x > 32
                                    ? i0(F + ';', n, r, m - 1)
                                    : i0(ue(F, ' ', '') + ';', n, r, m - 2),
                                l
                            )
                        break
                    case 59:
                        F += ';'
                    default:
                        if (
                            (Za(
                                (P = n0(
                                    F,
                                    t,
                                    r,
                                    u,
                                    d,
                                    i,
                                    s,
                                    C,
                                    (E = []),
                                    (D = []),
                                    m
                                )),
                                o
                            ),
                            h === 123)
                        )
                            if (d === 0) ns(F, t, P, P, E, o, m, s, D)
                            else
                                switch (p) {
                                    case 100:
                                    case 109:
                                    case 115:
                                        ns(
                                            e,
                                            P,
                                            P,
                                            n &&
                                                Za(
                                                    n0(
                                                        e,
                                                        P,
                                                        P,
                                                        0,
                                                        0,
                                                        i,
                                                        s,
                                                        C,
                                                        i,
                                                        (E = []),
                                                        m
                                                    ),
                                                    D
                                                ),
                                            i,
                                            D,
                                            m,
                                            s,
                                            n ? E : D
                                        )
                                        break
                                    default:
                                        ns(F, P, P, P, [''], D, m, s, D)
                                }
                }
                ;(u = d = x = 0), (b = v = 1), (C = F = ''), (m = a)
                break
            case 58:
                ;(m = 1 + Gt(F)), (x = _)
            default:
                if (b < 1) {
                    if (h == 123) --b
                    else if (h == 125 && b++ == 0 && j1() == 125) continue
                }
                switch (((F += Ja(h)), h * b)) {
                    case 38:
                        v = d > 0 ? 1 : ((F += '\f'), -1)
                        break
                    case 44:
                        ;(s[u++] = (Gt(F) - 1) * v), (v = 1)
                        break
                    case 64:
                        Yt() === 45 && (F += mc(pt())),
                            (p = Yt()),
                            (d = Gt((C = F += K1(rs())))),
                            h++
                        break
                    case 45:
                        _ === 45 && Gt(F) == 2 && (b = 0)
                }
        }
    return o
}
function n0(e, t, r, n, i, o, a, s, l, u, d) {
    for (
        var m = i - 1, p = i === 0 ? o : [''], x = pc(p), _ = 0, b = 0, g = 0;
        _ < n;
        ++_
    )
        for (
            var v = 0, h = vo(e, m + 1, (m = M1((b = a[_])))), C = e;
            v < x;
            ++v
        )
            (C = Jp(b > 0 ? p[v] + ' ' + h : ue(h, /&\f/g, p[v]))) &&
                (l[g++] = C)
    return ts(e, t, r, i === 0 ? dc : s, l, u, d)
}
function G1(e, t, r) {
    return ts(e, t, r, Qp, Ja(L1()), vo(e, 2, -2), 0)
}
function i0(e, t, r, n) {
    return ts(e, t, r, hc, vo(e, 0, n), vo(e, n + 1, -1), n)
}
function o0(e, t) {
    switch (O1(e, t)) {
        case 5103:
            return ae + 'print-' + e + e
        case 5737:
        case 4201:
        case 3177:
        case 3433:
        case 1641:
        case 4457:
        case 2921:
        case 5572:
        case 6356:
        case 5844:
        case 3191:
        case 6645:
        case 3005:
        case 6391:
        case 5879:
        case 5623:
        case 6135:
        case 4599:
        case 4855:
        case 4215:
        case 6389:
        case 5109:
        case 5365:
        case 5621:
        case 3829:
            return ae + e + e
        case 5349:
        case 4246:
        case 4810:
        case 6968:
        case 2756:
            return ae + e + Qa + e + Je + e + e
        case 6828:
        case 4268:
            return ae + e + Je + e + e
        case 6165:
            return ae + e + Je + 'flex-' + e + e
        case 5187:
            return (
                ae +
                e +
                ue(e, /(\w+).+(:[^]+)/, ae + 'box-$1$2' + Je + 'flex-$1$2') +
                e
            )
        case 5443:
            return ae + e + Je + 'flex-item-' + ue(e, /flex-|-self/, '') + e
        case 4675:
            return (
                ae +
                e +
                Je +
                'flex-line-pack' +
                ue(e, /align-content|flex-|-self/, '') +
                e
            )
        case 5548:
            return ae + e + Je + ue(e, 'shrink', 'negative') + e
        case 5292:
            return ae + e + Je + ue(e, 'basis', 'preferred-size') + e
        case 6060:
            return (
                ae +
                'box-' +
                ue(e, '-grow', '') +
                ae +
                e +
                Je +
                ue(e, 'grow', 'positive') +
                e
            )
        case 4554:
            return ae + ue(e, /([^-])(transform)/g, '$1' + ae + '$2') + e
        case 6187:
            return (
                ue(
                    ue(
                        ue(e, /(zoom-|grab)/, ae + '$1'),
                        /(image-set)/,
                        ae + '$1'
                    ),
                    e,
                    ''
                ) + e
            )
        case 5495:
        case 3959:
            return ue(e, /(image-set\([^]*)/, ae + '$1$`$1')
        case 4968:
            return (
                ue(
                    ue(
                        e,
                        /(.+:)(flex-)?(.*)/,
                        ae + 'box-pack:$3' + Je + 'flex-pack:$3'
                    ),
                    /s.+-b[^;]+/,
                    'justify'
                ) +
                ae +
                e +
                e
            )
        case 4095:
        case 3583:
        case 4068:
        case 2532:
            return ue(e, /(.+)-inline(.+)/, ae + '$1$2') + e
        case 8116:
        case 7059:
        case 5753:
        case 5535:
        case 5445:
        case 5701:
        case 4933:
        case 4677:
        case 5533:
        case 5789:
        case 5021:
        case 4765:
            if (Gt(e) - 1 - t > 6)
                switch (st(e, t + 1)) {
                    case 109:
                        if (st(e, t + 4) !== 45) break
                    case 102:
                        return (
                            ue(
                                e,
                                /(.+:)(.+)-([^]+)/,
                                '$1' +
                                    ae +
                                    '$2-$3$1' +
                                    Qa +
                                    (st(e, t + 3) == 108 ? '$3' : '$2-$3')
                            ) + e
                        )
                    case 115:
                        return ~Zp(e, 'stretch')
                            ? o0(ue(e, 'stretch', 'fill-available'), t) + e
                            : e
                }
            break
        case 4949:
            if (st(e, t + 1) !== 115) break
        case 6444:
            switch (st(e, Gt(e) - 3 - (~Zp(e, '!important') && 10))) {
                case 107:
                    return ue(e, ':', ':' + ae) + e
                case 101:
                    return (
                        ue(
                            e,
                            /(.+:)([^;!]+)(;|!.+)?/,
                            '$1' +
                                ae +
                                (st(e, 14) === 45 ? 'inline-' : '') +
                                'box$3$1' +
                                ae +
                                '$2$3$1' +
                                Je +
                                '$2box$3'
                        ) + e
                    )
            }
            break
        case 5936:
            switch (st(e, t + 11)) {
                case 114:
                    return ae + e + Je + ue(e, /[svh]\w+-[tblr]{2}/, 'tb') + e
                case 108:
                    return (
                        ae + e + Je + ue(e, /[svh]\w+-[tblr]{2}/, 'tb-rl') + e
                    )
                case 45:
                    return ae + e + Je + ue(e, /[svh]\w+-[tblr]{2}/, 'lr') + e
            }
            return ae + e + Je + e + e
    }
    return e
}
function xo(e, t) {
    for (var r = '', n = pc(e), i = 0; i < n; i++) r += t(e[i], i, e, t) || ''
    return r
}
function Y1(e, t, r, n) {
    switch (e.type) {
        case N1:
        case hc:
            return (e.return = e.return || e.value)
        case Qp:
            return ''
        case dc:
            e.value = e.props.join(',')
    }
    return Gt((r = xo(e.children, n)))
        ? (e.return = e.value + '{' + r + '}')
        : ''
}
function X1(e) {
    var t = pc(e)
    return function (r, n, i, o) {
        for (var a = '', s = 0; s < t; s++) a += e[s](r, n, i, o) || ''
        return a
    }
}
function Q1(e) {
    return function (t) {
        t.root || ((t = t.return) && e(t))
    }
}
function J1(e, t, r, n) {
    if (!e.return)
        switch (e.type) {
            case hc:
                e.return = o0(e.value, e.length)
                break
            case U1:
                return xo([go(ue(e.value, '@', '@' + ae), e, '')], n)
            case dc:
                if (e.length)
                    return z1(e.props, function (i) {
                        switch ($1(i, /(::plac\w+|:read-\w+)/)) {
                            case ':read-only':
                            case ':read-write':
                                return xo(
                                    [
                                        go(
                                            ue(
                                                i,
                                                /:(read-\w+)/,
                                                ':' + Qa + '$1'
                                            ),
                                            e,
                                            ''
                                        ),
                                    ],
                                    n
                                )
                            case '::placeholder':
                                return xo(
                                    [
                                        go(
                                            ue(
                                                i,
                                                /:(plac\w+)/,
                                                ':' + ae + 'input-$1'
                                            ),
                                            e,
                                            ''
                                        ),
                                        go(
                                            ue(
                                                i,
                                                /:(plac\w+)/,
                                                ':' + Qa + '$1'
                                            ),
                                            e,
                                            ''
                                        ),
                                        go(
                                            ue(
                                                i,
                                                /:(plac\w+)/,
                                                Je + 'input-$1'
                                            ),
                                            e,
                                            ''
                                        ),
                                    ],
                                    n
                                )
                        }
                        return ''
                    })
        }
}
var a0 = function (t) {
    var r = new WeakMap()
    return function (n) {
        if (r.has(n)) return r.get(n)
        var i = t(n)
        return r.set(n, i), i
    }
}
function s0(e) {
    var t = Object.create(null)
    return function (r) {
        return t[r] === void 0 && (t[r] = e(r)), t[r]
    }
}
var Z1 = function (t, r, n) {
        for (
            var i = 0, o = 0;
            (i = o), (o = Yt()), i === 38 && o === 12 && (r[n] = 1), !So(o);

        )
            pt()
        return yo(t, lt)
    },
    eS = function (t, r) {
        var n = -1,
            i = 44
        do
            switch (So(i)) {
                case 0:
                    i === 38 && Yt() === 12 && (r[n] = 1),
                        (t[n] += Z1(lt - 1, r, n))
                    break
                case 2:
                    t[n] += mc(i)
                    break
                case 4:
                    if (i === 44) {
                        ;(t[++n] = Yt() === 58 ? '&\f' : ''),
                            (r[n] = t[n].length)
                        break
                    }
                default:
                    t[n] += Ja(i)
            }
        while ((i = pt()))
        return t
    },
    tS = function (t, r) {
        return r0(eS(t0(t), r))
    },
    l0 = new WeakMap(),
    rS = function (t) {
        if (!(t.type !== 'rule' || !t.parent || !t.length)) {
            for (
                var r = t.value,
                    n = t.parent,
                    i = t.column === n.column && t.line === n.line;
                n.type !== 'rule';

            )
                if (((n = n.parent), !n)) return
            if (
                !(
                    t.props.length === 1 &&
                    r.charCodeAt(0) !== 58 &&
                    !l0.get(n)
                ) &&
                !i
            ) {
                l0.set(t, !0)
                for (
                    var o = [], a = tS(r, o), s = n.props, l = 0, u = 0;
                    l < a.length;
                    l++
                )
                    for (var d = 0; d < s.length; d++, u++)
                        t.props[u] = o[l]
                            ? a[l].replace(/&\f/g, s[d])
                            : s[d] + ' ' + a[l]
            }
        }
    },
    nS = function (t) {
        if (t.type === 'decl') {
            var r = t.value
            r.charCodeAt(0) === 108 &&
                r.charCodeAt(2) === 98 &&
                ((t.return = ''), (t.value = ''))
        }
    },
    iS = [J1],
    oS = function (t) {
        var r = t.key
        if (r === 'css') {
            var n = document.querySelectorAll(
                'style[data-emotion]:not([data-s])'
            )
            Array.prototype.forEach.call(n, function (b) {
                var g = b.getAttribute('data-emotion')
                g.indexOf(' ') !== -1 &&
                    (document.head.appendChild(b), b.setAttribute('data-s', ''))
            })
        }
        var i = t.stylisPlugins || iS,
            o = {},
            a,
            s = []
        ;(a = t.container || document.head),
            Array.prototype.forEach.call(
                document.querySelectorAll('style[data-emotion^="' + r + ' "]'),
                function (b) {
                    for (
                        var g = b.getAttribute('data-emotion').split(' '),
                            v = 1;
                        v < g.length;
                        v++
                    )
                        o[g[v]] = !0
                    s.push(b)
                }
            )
        var l,
            u = [rS, nS]
        {
            var d,
                m = [
                    Y1,
                    Q1(function (b) {
                        d.insert(b)
                    }),
                ],
                p = X1(u.concat(i, m)),
                x = function (g) {
                    return xo(q1(g), p)
                }
            l = function (g, v, h, C) {
                ;(d = h),
                    x(g ? g + '{' + v.styles + '}' : v.styles),
                    C && (_.inserted[v.name] = !0)
            }
        }
        var _ = {
            key: r,
            sheet: new Xp({
                key: r,
                container: a,
                nonce: t.nonce,
                speedy: t.speedy,
                prepend: t.prepend,
            }),
            nonce: t.nonce,
            inserted: o,
            registered: {},
            insert: l,
        }
        return _.sheet.hydrate(s), _
    }
function is() {
    return (
        (is =
            Object.assign ||
            function (e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = arguments[t]
                    for (var n in r)
                        Object.prototype.hasOwnProperty.call(r, n) &&
                            (e[n] = r[n])
                }
                return e
            }),
        is.apply(this, arguments)
    )
}
var u0 = { exports: {} },
    ce = {}
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var $e = typeof Symbol == 'function' && Symbol.for,
    gc = $e ? Symbol.for('react.element') : 60103,
    yc = $e ? Symbol.for('react.portal') : 60106,
    os = $e ? Symbol.for('react.fragment') : 60107,
    as = $e ? Symbol.for('react.strict_mode') : 60108,
    ss = $e ? Symbol.for('react.profiler') : 60114,
    ls = $e ? Symbol.for('react.provider') : 60109,
    us = $e ? Symbol.for('react.context') : 60110,
    Sc = $e ? Symbol.for('react.async_mode') : 60111,
    cs = $e ? Symbol.for('react.concurrent_mode') : 60111,
    fs = $e ? Symbol.for('react.forward_ref') : 60112,
    ds = $e ? Symbol.for('react.suspense') : 60113,
    aS = $e ? Symbol.for('react.suspense_list') : 60120,
    hs = $e ? Symbol.for('react.memo') : 60115,
    ps = $e ? Symbol.for('react.lazy') : 60116,
    sS = $e ? Symbol.for('react.block') : 60121,
    lS = $e ? Symbol.for('react.fundamental') : 60117,
    uS = $e ? Symbol.for('react.responder') : 60118,
    cS = $e ? Symbol.for('react.scope') : 60119
function mt(e) {
    if (typeof e == 'object' && e !== null) {
        var t = e.$$typeof
        switch (t) {
            case gc:
                switch (((e = e.type), e)) {
                    case Sc:
                    case cs:
                    case os:
                    case ss:
                    case as:
                    case ds:
                        return e
                    default:
                        switch (((e = e && e.$$typeof), e)) {
                            case us:
                            case fs:
                            case ps:
                            case hs:
                            case ls:
                                return e
                            default:
                                return t
                        }
                }
            case yc:
                return t
        }
    }
}
function c0(e) {
    return mt(e) === cs
}
ce.AsyncMode = Sc
ce.ConcurrentMode = cs
ce.ContextConsumer = us
ce.ContextProvider = ls
ce.Element = gc
ce.ForwardRef = fs
ce.Fragment = os
ce.Lazy = ps
ce.Memo = hs
ce.Portal = yc
ce.Profiler = ss
ce.StrictMode = as
ce.Suspense = ds
ce.isAsyncMode = function (e) {
    return c0(e) || mt(e) === Sc
}
ce.isConcurrentMode = c0
ce.isContextConsumer = function (e) {
    return mt(e) === us
}
ce.isContextProvider = function (e) {
    return mt(e) === ls
}
ce.isElement = function (e) {
    return typeof e == 'object' && e !== null && e.$$typeof === gc
}
ce.isForwardRef = function (e) {
    return mt(e) === fs
}
ce.isFragment = function (e) {
    return mt(e) === os
}
ce.isLazy = function (e) {
    return mt(e) === ps
}
ce.isMemo = function (e) {
    return mt(e) === hs
}
ce.isPortal = function (e) {
    return mt(e) === yc
}
ce.isProfiler = function (e) {
    return mt(e) === ss
}
ce.isStrictMode = function (e) {
    return mt(e) === as
}
ce.isSuspense = function (e) {
    return mt(e) === ds
}
ce.isValidElementType = function (e) {
    return (
        typeof e == 'string' ||
        typeof e == 'function' ||
        e === os ||
        e === cs ||
        e === ss ||
        e === as ||
        e === ds ||
        e === aS ||
        (typeof e == 'object' &&
            e !== null &&
            (e.$$typeof === ps ||
                e.$$typeof === hs ||
                e.$$typeof === ls ||
                e.$$typeof === us ||
                e.$$typeof === fs ||
                e.$$typeof === lS ||
                e.$$typeof === uS ||
                e.$$typeof === cS ||
                e.$$typeof === sS))
    )
}
ce.typeOf = mt
u0.exports = ce
var f0 = u0.exports,
    fS = {
        $$typeof: !0,
        render: !0,
        defaultProps: !0,
        displayName: !0,
        propTypes: !0,
    },
    dS = {
        $$typeof: !0,
        compare: !0,
        defaultProps: !0,
        displayName: !0,
        propTypes: !0,
        type: !0,
    },
    d0 = {}
d0[f0.ForwardRef] = fS
d0[f0.Memo] = dS
var hS = !0
function pS(e, t, r) {
    var n = ''
    return (
        r.split(' ').forEach(function (i) {
            e[i] !== void 0 ? t.push(e[i] + ';') : (n += i + ' ')
        }),
        n
    )
}
var h0 = function (t, r, n) {
    var i = t.key + '-' + r.name
    if (
        ((n === !1 || hS === !1) &&
            t.registered[i] === void 0 &&
            (t.registered[i] = r.styles),
        t.inserted[r.name] === void 0)
    ) {
        var o = r
        do t.insert(r === o ? '.' + i : '', o, t.sheet, !0), (o = o.next)
        while (o !== void 0)
    }
}
function mS(e) {
    for (var t = 0, r, n = 0, i = e.length; i >= 4; ++n, i -= 4)
        (r =
            (e.charCodeAt(n) & 255) |
            ((e.charCodeAt(++n) & 255) << 8) |
            ((e.charCodeAt(++n) & 255) << 16) |
            ((e.charCodeAt(++n) & 255) << 24)),
            (r = (r & 65535) * 1540483477 + (((r >>> 16) * 59797) << 16)),
            (r ^= r >>> 24),
            (t =
                ((r & 65535) * 1540483477 + (((r >>> 16) * 59797) << 16)) ^
                ((t & 65535) * 1540483477 + (((t >>> 16) * 59797) << 16)))
    switch (i) {
        case 3:
            t ^= (e.charCodeAt(n + 2) & 255) << 16
        case 2:
            t ^= (e.charCodeAt(n + 1) & 255) << 8
        case 1:
            ;(t ^= e.charCodeAt(n) & 255),
                (t = (t & 65535) * 1540483477 + (((t >>> 16) * 59797) << 16))
    }
    return (
        (t ^= t >>> 13),
        (t = (t & 65535) * 1540483477 + (((t >>> 16) * 59797) << 16)),
        ((t ^ (t >>> 15)) >>> 0).toString(36)
    )
}
var vS = {
        animationIterationCount: 1,
        borderImageOutset: 1,
        borderImageSlice: 1,
        borderImageWidth: 1,
        boxFlex: 1,
        boxFlexGroup: 1,
        boxOrdinalGroup: 1,
        columnCount: 1,
        columns: 1,
        flex: 1,
        flexGrow: 1,
        flexPositive: 1,
        flexShrink: 1,
        flexNegative: 1,
        flexOrder: 1,
        gridRow: 1,
        gridRowEnd: 1,
        gridRowSpan: 1,
        gridRowStart: 1,
        gridColumn: 1,
        gridColumnEnd: 1,
        gridColumnSpan: 1,
        gridColumnStart: 1,
        msGridRow: 1,
        msGridRowSpan: 1,
        msGridColumn: 1,
        msGridColumnSpan: 1,
        fontWeight: 1,
        lineHeight: 1,
        opacity: 1,
        order: 1,
        orphans: 1,
        tabSize: 1,
        widows: 1,
        zIndex: 1,
        zoom: 1,
        WebkitLineClamp: 1,
        fillOpacity: 1,
        floodOpacity: 1,
        stopOpacity: 1,
        strokeDasharray: 1,
        strokeDashoffset: 1,
        strokeMiterlimit: 1,
        strokeOpacity: 1,
        strokeWidth: 1,
    },
    gS = /[A-Z]|^ms/g,
    yS = /_EMO_([^_]+?)_([^]*?)_EMO_/g,
    p0 = function (t) {
        return t.charCodeAt(1) === 45
    },
    m0 = function (t) {
        return t != null && typeof t != 'boolean'
    },
    xc = s0(function (e) {
        return p0(e) ? e : e.replace(gS, '-$&').toLowerCase()
    }),
    v0 = function (t, r) {
        switch (t) {
            case 'animation':
            case 'animationName':
                if (typeof r == 'string')
                    return r.replace(yS, function (n, i, o) {
                        return (Xt = { name: i, styles: o, next: Xt }), i
                    })
        }
        return vS[t] !== 1 && !p0(t) && typeof r == 'number' && r !== 0
            ? r + 'px'
            : r
    }
function wo(e, t, r) {
    if (r == null) return ''
    if (r.__emotion_styles !== void 0) return r
    switch (typeof r) {
        case 'boolean':
            return ''
        case 'object': {
            if (r.anim === 1)
                return (
                    (Xt = { name: r.name, styles: r.styles, next: Xt }), r.name
                )
            if (r.styles !== void 0) {
                var n = r.next
                if (n !== void 0)
                    for (; n !== void 0; )
                        (Xt = { name: n.name, styles: n.styles, next: Xt }),
                            (n = n.next)
                var i = r.styles + ';'
                return i
            }
            return SS(e, t, r)
        }
        case 'function': {
            if (e !== void 0) {
                var o = Xt,
                    a = r(e)
                return (Xt = o), wo(e, t, a)
            }
            break
        }
    }
    if (t == null) return r
    var s = t[r]
    return s !== void 0 ? s : r
}
function SS(e, t, r) {
    var n = ''
    if (Array.isArray(r))
        for (var i = 0; i < r.length; i++) n += wo(e, t, r[i]) + ';'
    else
        for (var o in r) {
            var a = r[o]
            if (typeof a != 'object')
                t != null && t[a] !== void 0
                    ? (n += o + '{' + t[a] + '}')
                    : m0(a) && (n += xc(o) + ':' + v0(o, a) + ';')
            else if (
                Array.isArray(a) &&
                typeof a[0] == 'string' &&
                (t == null || t[a[0]] === void 0)
            )
                for (var s = 0; s < a.length; s++)
                    m0(a[s]) && (n += xc(o) + ':' + v0(o, a[s]) + ';')
            else {
                var l = wo(e, t, a)
                switch (o) {
                    case 'animation':
                    case 'animationName': {
                        n += xc(o) + ':' + l + ';'
                        break
                    }
                    default:
                        n += o + '{' + l + '}'
                }
            }
        }
    return n
}
var g0 = /label:\s*([^\s;\n{]+)\s*(;|$)/g,
    Xt,
    wc = function (t, r, n) {
        if (
            t.length === 1 &&
            typeof t[0] == 'object' &&
            t[0] !== null &&
            t[0].styles !== void 0
        )
            return t[0]
        var i = !0,
            o = ''
        Xt = void 0
        var a = t[0]
        a == null || a.raw === void 0
            ? ((i = !1), (o += wo(n, r, a)))
            : (o += a[0])
        for (var s = 1; s < t.length; s++)
            (o += wo(n, r, t[s])), i && (o += a[s])
        g0.lastIndex = 0
        for (var l = '', u; (u = g0.exec(o)) !== null; ) l += '-' + u[1]
        var d = mS(o) + l
        return { name: d, styles: o, next: Xt }
    },
    y0 = T.exports.createContext(
        typeof HTMLElement != 'undefined' ? oS({ key: 'css' }) : null
    )
y0.Provider
var S0 = function (t) {
        return T.exports.forwardRef(function (r, n) {
            var i = T.exports.useContext(y0)
            return t(r, i, n)
        })
    },
    bo = T.exports.createContext({}),
    xS = function (t, r) {
        if (typeof r == 'function') {
            var n = r(t)
            return n
        }
        return is({}, t, r)
    },
    wS = a0(function (e) {
        return a0(function (t) {
            return xS(e, t)
        })
    }),
    bS = function (t) {
        var r = T.exports.useContext(bo)
        return (
            t.theme !== r && (r = wS(r)(t.theme)),
            T.exports.createElement(bo.Provider, { value: r }, t.children)
        )
    },
    bc = S0(function (e, t) {
        var r = e.styles,
            n = wc([r], void 0, T.exports.useContext(bo)),
            i = T.exports.useRef()
        return (
            T.exports.useLayoutEffect(
                function () {
                    var o = t.key + '-global',
                        a = new Xp({
                            key: o,
                            nonce: t.sheet.nonce,
                            container: t.sheet.container,
                            speedy: t.sheet.isSpeedy,
                        }),
                        s = !1,
                        l = document.querySelector(
                            'style[data-emotion="' + o + ' ' + n.name + '"]'
                        )
                    return (
                        t.sheet.tags.length && (a.before = t.sheet.tags[0]),
                        l !== null &&
                            ((s = !0),
                            l.setAttribute('data-emotion', o),
                            a.hydrate([l])),
                        (i.current = [a, s]),
                        function () {
                            a.flush()
                        }
                    )
                },
                [t]
            ),
            T.exports.useLayoutEffect(
                function () {
                    var o = i.current,
                        a = o[0],
                        s = o[1]
                    if (s) {
                        o[1] = !1
                        return
                    }
                    if (
                        (n.next !== void 0 && h0(t, n.next, !0), a.tags.length)
                    ) {
                        var l = a.tags[a.tags.length - 1].nextElementSibling
                        ;(a.before = l), a.flush()
                    }
                    t.insert('', n, a, !1)
                },
                [t, n.name]
            ),
            null
        )
    })
function CS() {
    for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++)
        t[r] = arguments[r]
    return wc(t)
}
var x0 = function () {
        var t = CS.apply(void 0, arguments),
            r = 'animation-' + t.name
        return {
            name: r,
            styles: '@keyframes ' + r + '{' + t.styles + '}',
            anim: 1,
            toString: function () {
                return '_EMO_' + this.name + '_' + this.styles + '_EMO_'
            },
        }
    },
    _S = function () {
        return T.exports.createElement(bc, {
            styles: `
      html {
        line-height: 1.5;
        -webkit-text-size-adjust: 100%;
        font-family: system-ui, sans-serif;
        -webkit-font-smoothing: antialiased;
        text-rendering: optimizeLegibility;
        -moz-osx-font-smoothing: grayscale;
        touch-action: manipulation;
      }

      body {
        position: relative;
        min-height: 100%;
        font-feature-settings: 'kern';
      }

      *,
      *::before,
      *::after {
        border-width: 0;
        border-style: solid;
        box-sizing: border-box;
      }

      main {
        display: block;
      }

      hr {
        border-top-width: 1px;
        box-sizing: content-box;
        height: 0;
        overflow: visible;
      }

      pre,
      code,
      kbd,
      samp {
        font-family: SFMono-Regular,  Menlo, Monaco, Consolas, monospace;
        font-size: 1em;
      }

      a {
        background-color: transparent;
        color: inherit;
        text-decoration: inherit;
      }

      abbr[title] {
        border-bottom: none;
        text-decoration: underline;
        -webkit-text-decoration: underline dotted;
        text-decoration: underline dotted;
      }

      b,
      strong {
        font-weight: bold;
      }

      small {
        font-size: 80%;
      }

      sub,
      sup {
        font-size: 75%;
        line-height: 0;
        position: relative;
        vertical-align: baseline;
      }

      sub {
        bottom: -0.25em;
      }

      sup {
        top: -0.5em;
      }

      img {
        border-style: none;
      }

      button,
      input,
      optgroup,
      select,
      textarea {
        font-family: inherit;
        font-size: 100%;
        line-height: 1.15;
        margin: 0;
      }

      button,
      input {
        overflow: visible;
      }

      button,
      select {
        text-transform: none;
      }

      button::-moz-focus-inner,
      [type="button"]::-moz-focus-inner,
      [type="reset"]::-moz-focus-inner,
      [type="submit"]::-moz-focus-inner {
        border-style: none;
        padding: 0;
      }

      fieldset {
        padding: 0.35em 0.75em 0.625em;
      }

      legend {
        box-sizing: border-box;
        color: inherit;
        display: table;
        max-width: 100%;
        padding: 0;
        white-space: normal;
      }

      progress {
        vertical-align: baseline;
      }

      textarea {
        overflow: auto;
      }

      [type="checkbox"],
      [type="radio"] {
        box-sizing: border-box;
        padding: 0;
      }

      [type="number"]::-webkit-inner-spin-button,
      [type="number"]::-webkit-outer-spin-button {
        -webkit-appearance: none !important;
      }

      input[type="number"] {
        -moz-appearance: textfield;
      }

      [type="search"] {
        -webkit-appearance: textfield;
        outline-offset: -2px;
      }

      [type="search"]::-webkit-search-decoration {
        -webkit-appearance: none !important;
      }

      ::-webkit-file-upload-button {
        -webkit-appearance: button;
        font: inherit;
      }

      details {
        display: block;
      }

      summary {
        display: list-item;
      }

      template {
        display: none;
      }

      [hidden] {
        display: none !important;
      }

      body,
      blockquote,
      dl,
      dd,
      h1,
      h2,
      h3,
      h4,
      h5,
      h6,
      hr,
      figure,
      p,
      pre {
        margin: 0;
      }

      button {
        background: transparent;
        padding: 0;
      }

      fieldset {
        margin: 0;
        padding: 0;
      }

      ol,
      ul {
        margin: 0;
        padding: 0;
      }

      textarea {
        resize: vertical;
      }

      button,
      [role="button"] {
        cursor: pointer;
      }

      button::-moz-focus-inner {
        border: 0 !important;
      }

      table {
        border-collapse: collapse;
      }

      h1,
      h2,
      h3,
      h4,
      h5,
      h6 {
        font-size: inherit;
        font-weight: inherit;
      }

      button,
      input,
      optgroup,
      select,
      textarea {
        padding: 0;
        line-height: inherit;
        color: inherit;
      }

      img,
      svg,
      video,
      canvas,
      audio,
      iframe,
      embed,
      object {
        display: block;
      }

      img,
      video {
        max-width: 100%;
        height: auto;
      }

      [data-js-focus-visible] :focus:not([data-focus-visible-added]) {
        outline: none;
        box-shadow: none;
      }

      select::-ms-expand {
        display: none;
      }
    `,
        })
    },
    ES = _S,
    Cc = { exports: {} }
;(function (e, t) {
    var r = 200,
        n = '__lodash_hash_undefined__',
        i = 800,
        o = 16,
        a = 9007199254740991,
        s = '[object Arguments]',
        l = '[object Array]',
        u = '[object AsyncFunction]',
        d = '[object Boolean]',
        m = '[object Date]',
        p = '[object Error]',
        x = '[object Function]',
        _ = '[object GeneratorFunction]',
        b = '[object Map]',
        g = '[object Number]',
        v = '[object Null]',
        h = '[object Object]',
        C = '[object Proxy]',
        E = '[object RegExp]',
        D = '[object Set]',
        P = '[object String]',
        F = '[object Undefined]',
        O = '[object WeakMap]',
        M = '[object ArrayBuffer]',
        L = '[object DataView]',
        q = '[object Float32Array]',
        J = '[object Float64Array]',
        oe = '[object Int8Array]',
        Ue = '[object Int16Array]',
        Ke = '[object Int32Array]',
        Pt = '[object Uint8Array]',
        Lt = '[object Uint8ClampedArray]',
        tr = '[object Uint16Array]',
        Lr = '[object Uint32Array]',
        hi = /[\\^$.*+?()[\]{}|]/g,
        $ = /^\[object .+?Constructor\]$/,
        K = /^(?:0|[1-9]\d*)$/,
        j = {}
    ;(j[q] = j[J] = j[oe] = j[Ue] = j[Ke] = j[Pt] = j[Lt] = j[tr] = j[Lr] = !0),
        (j[s] =
            j[l] =
            j[M] =
            j[d] =
            j[L] =
            j[m] =
            j[p] =
            j[x] =
            j[b] =
            j[g] =
            j[h] =
            j[E] =
            j[D] =
            j[P] =
            j[O] =
                !1)
    var le = typeof Ze == 'object' && Ze && Ze.Object === Object && Ze,
        ke = typeof self == 'object' && self && self.Object === Object && self,
        qe = le || ke || Function('return this')(),
        ut = t && !t.nodeType && t,
        ct = ut && !0 && e && !e.nodeType && e,
        Ft = ct && ct.exports === ut,
        pi = Ft && le.process,
        Oo = (function () {
            try {
                var S = ct && ct.require && ct.require('util').types
                return S || (pi && pi.binding && pi.binding('util'))
            } catch {}
        })(),
        jr = Oo && Oo.isTypedArray
    function qs(S, k, R) {
        switch (R.length) {
            case 0:
                return S.call(k)
            case 1:
                return S.call(k, R[0])
            case 2:
                return S.call(k, R[0], R[1])
            case 3:
                return S.call(k, R[0], R[1], R[2])
        }
        return S.apply(k, R)
    }
    function Gs(S, k) {
        for (var R = -1, W = Array(S); ++R < S; ) W[R] = k(R)
        return W
    }
    function $o(S) {
        return function (k) {
            return S(k)
        }
    }
    function yn(S, k) {
        return S == null ? void 0 : S[k]
    }
    function Ys(S, k) {
        return function (R) {
            return S(k(R))
        }
    }
    var y = Array.prototype,
        c = Function.prototype,
        f = Object.prototype,
        w = qe['__core-js_shared__'],
        I = c.toString,
        B = f.hasOwnProperty,
        U = (function () {
            var S = /[^.]+$/.exec((w && w.keys && w.keys.IE_PROTO) || '')
            return S ? 'Symbol(src)_1.' + S : ''
        })(),
        Z = f.toString,
        de = I.call(Object),
        ve = RegExp(
            '^' +
                I.call(B)
                    .replace(hi, '\\$&')
                    .replace(
                        /hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,
                        '$1.*?'
                    ) +
                '$'
        ),
        Ie = Ft ? qe.Buffer : void 0,
        ye = qe.Symbol,
        Wr = qe.Uint8Array,
        mi = Ie ? Ie.allocUnsafe : void 0,
        vi = Ys(Object.getPrototypeOf, Object),
        If = Object.create,
        _v = f.propertyIsEnumerable,
        Ev = y.splice,
        Hr = ye ? ye.toStringTag : void 0,
        zo = (function () {
            try {
                var S = Js(Object, 'defineProperty')
                return S({}, '', {}), S
            } catch {}
        })(),
        kv = Ie ? Ie.isBuffer : void 0,
        Rf = Math.max,
        Tv = Date.now,
        Pf = Js(qe, 'Map'),
        gi = Js(Object, 'create'),
        Av = (function () {
            function S() {}
            return function (k) {
                if (!Kr(k)) return {}
                if (If) return If(k)
                S.prototype = k
                var R = new S()
                return (S.prototype = void 0), R
            }
        })()
    function Vr(S) {
        var k = -1,
            R = S == null ? 0 : S.length
        for (this.clear(); ++k < R; ) {
            var W = S[k]
            this.set(W[0], W[1])
        }
    }
    function Iv() {
        ;(this.__data__ = gi ? gi(null) : {}), (this.size = 0)
    }
    function Rv(S) {
        var k = this.has(S) && delete this.__data__[S]
        return (this.size -= k ? 1 : 0), k
    }
    function Pv(S) {
        var k = this.__data__
        if (gi) {
            var R = k[S]
            return R === n ? void 0 : R
        }
        return B.call(k, S) ? k[S] : void 0
    }
    function Fv(S) {
        var k = this.__data__
        return gi ? k[S] !== void 0 : B.call(k, S)
    }
    function Dv(S, k) {
        var R = this.__data__
        return (
            (this.size += this.has(S) ? 0 : 1),
            (R[S] = gi && k === void 0 ? n : k),
            this
        )
    }
    ;(Vr.prototype.clear = Iv),
        (Vr.prototype.delete = Rv),
        (Vr.prototype.get = Pv),
        (Vr.prototype.has = Fv),
        (Vr.prototype.set = Dv)
    function rr(S) {
        var k = -1,
            R = S == null ? 0 : S.length
        for (this.clear(); ++k < R; ) {
            var W = S[k]
            this.set(W[0], W[1])
        }
    }
    function Bv() {
        ;(this.__data__ = []), (this.size = 0)
    }
    function Nv(S) {
        var k = this.__data__,
            R = Lo(k, S)
        if (R < 0) return !1
        var W = k.length - 1
        return R == W ? k.pop() : Ev.call(k, R, 1), --this.size, !0
    }
    function Uv(S) {
        var k = this.__data__,
            R = Lo(k, S)
        return R < 0 ? void 0 : k[R][1]
    }
    function Mv(S) {
        return Lo(this.__data__, S) > -1
    }
    function Ov(S, k) {
        var R = this.__data__,
            W = Lo(R, S)
        return W < 0 ? (++this.size, R.push([S, k])) : (R[W][1] = k), this
    }
    ;(rr.prototype.clear = Bv),
        (rr.prototype.delete = Nv),
        (rr.prototype.get = Uv),
        (rr.prototype.has = Mv),
        (rr.prototype.set = Ov)
    function Sn(S) {
        var k = -1,
            R = S == null ? 0 : S.length
        for (this.clear(); ++k < R; ) {
            var W = S[k]
            this.set(W[0], W[1])
        }
    }
    function $v() {
        ;(this.size = 0),
            (this.__data__ = {
                hash: new Vr(),
                map: new (Pf || rr)(),
                string: new Vr(),
            })
    }
    function zv(S) {
        var k = Wo(this, S).delete(S)
        return (this.size -= k ? 1 : 0), k
    }
    function Lv(S) {
        return Wo(this, S).get(S)
    }
    function jv(S) {
        return Wo(this, S).has(S)
    }
    function Wv(S, k) {
        var R = Wo(this, S),
            W = R.size
        return R.set(S, k), (this.size += R.size == W ? 0 : 1), this
    }
    ;(Sn.prototype.clear = $v),
        (Sn.prototype.delete = zv),
        (Sn.prototype.get = Lv),
        (Sn.prototype.has = jv),
        (Sn.prototype.set = Wv)
    function xn(S) {
        var k = (this.__data__ = new rr(S))
        this.size = k.size
    }
    function Hv() {
        ;(this.__data__ = new rr()), (this.size = 0)
    }
    function Vv(S) {
        var k = this.__data__,
            R = k.delete(S)
        return (this.size = k.size), R
    }
    function Kv(S) {
        return this.__data__.get(S)
    }
    function qv(S) {
        return this.__data__.has(S)
    }
    function Gv(S, k) {
        var R = this.__data__
        if (R instanceof rr) {
            var W = R.__data__
            if (!Pf || W.length < r - 1)
                return W.push([S, k]), (this.size = ++R.size), this
            R = this.__data__ = new Sn(W)
        }
        return R.set(S, k), (this.size = R.size), this
    }
    ;(xn.prototype.clear = Hv),
        (xn.prototype.delete = Vv),
        (xn.prototype.get = Kv),
        (xn.prototype.has = qv),
        (xn.prototype.set = Gv)
    function Yv(S, k) {
        var R = tl(S),
            W = !R && el(S),
            re = !R && !W && Uf(S),
            he = !R && !W && !re && Of(S),
            be = R || W || re || he,
            ee = be ? Gs(S.length, String) : [],
            Ce = ee.length
        for (var yt in S)
            (k || B.call(S, yt)) &&
                !(
                    be &&
                    (yt == 'length' ||
                        (re && (yt == 'offset' || yt == 'parent')) ||
                        (he &&
                            (yt == 'buffer' ||
                                yt == 'byteLength' ||
                                yt == 'byteOffset')) ||
                        Bf(yt, Ce))
                ) &&
                ee.push(yt)
        return ee
    }
    function Xs(S, k, R) {
        ;((R !== void 0 && !Ho(S[k], R)) || (R === void 0 && !(k in S))) &&
            Qs(S, k, R)
    }
    function Xv(S, k, R) {
        var W = S[k]
        ;(!(B.call(S, k) && Ho(W, R)) || (R === void 0 && !(k in S))) &&
            Qs(S, k, R)
    }
    function Lo(S, k) {
        for (var R = S.length; R--; ) if (Ho(S[R][0], k)) return R
        return -1
    }
    function Qs(S, k, R) {
        k == '__proto__' && zo
            ? zo(S, k, {
                  configurable: !0,
                  enumerable: !0,
                  value: R,
                  writable: !0,
              })
            : (S[k] = R)
    }
    var Qv = cg()
    function jo(S) {
        return S == null
            ? S === void 0
                ? F
                : v
            : Hr && Hr in Object(S)
            ? fg(S)
            : gg(S)
    }
    function Ff(S) {
        return yi(S) && jo(S) == s
    }
    function Jv(S) {
        if (!Kr(S) || mg(S)) return !1
        var k = nl(S) ? ve : $
        return k.test(wg(S))
    }
    function Zv(S) {
        return yi(S) && Mf(S.length) && !!j[jo(S)]
    }
    function eg(S) {
        if (!Kr(S)) return vg(S)
        var k = Nf(S),
            R = []
        for (var W in S)
            (W == 'constructor' && (k || !B.call(S, W))) || R.push(W)
        return R
    }
    function Df(S, k, R, W, re) {
        S !== k &&
            Qv(
                k,
                function (he, be) {
                    if ((re || (re = new xn()), Kr(he)))
                        tg(S, k, be, R, Df, W, re)
                    else {
                        var ee = W
                            ? W(Zs(S, be), he, be + '', S, k, re)
                            : void 0
                        ee === void 0 && (ee = he), Xs(S, be, ee)
                    }
                },
                $f
            )
    }
    function tg(S, k, R, W, re, he, be) {
        var ee = Zs(S, R),
            Ce = Zs(k, R),
            yt = be.get(Ce)
        if (yt) {
            Xs(S, R, yt)
            return
        }
        var ft = he ? he(ee, Ce, R + '', S, k, be) : void 0,
            Si = ft === void 0
        if (Si) {
            var il = tl(Ce),
                ol = !il && Uf(Ce),
                Lf = !il && !ol && Of(Ce)
            ;(ft = Ce),
                il || ol || Lf
                    ? tl(ee)
                        ? (ft = ee)
                        : bg(ee)
                        ? (ft = sg(ee))
                        : ol
                        ? ((Si = !1), (ft = ig(Ce, !0)))
                        : Lf
                        ? ((Si = !1), (ft = ag(Ce, !0)))
                        : (ft = [])
                    : Cg(Ce) || el(Ce)
                    ? ((ft = ee),
                      el(ee)
                          ? (ft = _g(ee))
                          : (!Kr(ee) || nl(ee)) && (ft = dg(Ce)))
                    : (Si = !1)
        }
        Si && (be.set(Ce, ft), re(ft, Ce, W, he, be), be.delete(Ce)),
            Xs(S, R, ft)
    }
    function rg(S, k) {
        return Sg(yg(S, k, zf), S + '')
    }
    var ng = zo
        ? function (S, k) {
              return zo(S, 'toString', {
                  configurable: !0,
                  enumerable: !1,
                  value: kg(k),
                  writable: !0,
              })
          }
        : zf
    function ig(S, k) {
        if (k) return S.slice()
        var R = S.length,
            W = mi ? mi(R) : new S.constructor(R)
        return S.copy(W), W
    }
    function og(S) {
        var k = new S.constructor(S.byteLength)
        return new Wr(k).set(new Wr(S)), k
    }
    function ag(S, k) {
        var R = k ? og(S.buffer) : S.buffer
        return new S.constructor(R, S.byteOffset, S.length)
    }
    function sg(S, k) {
        var R = -1,
            W = S.length
        for (k || (k = Array(W)); ++R < W; ) k[R] = S[R]
        return k
    }
    function lg(S, k, R, W) {
        var re = !R
        R || (R = {})
        for (var he = -1, be = k.length; ++he < be; ) {
            var ee = k[he],
                Ce = W ? W(R[ee], S[ee], ee, R, S) : void 0
            Ce === void 0 && (Ce = S[ee]), re ? Qs(R, ee, Ce) : Xv(R, ee, Ce)
        }
        return R
    }
    function ug(S) {
        return rg(function (k, R) {
            var W = -1,
                re = R.length,
                he = re > 1 ? R[re - 1] : void 0,
                be = re > 2 ? R[2] : void 0
            for (
                he =
                    S.length > 3 && typeof he == 'function'
                        ? (re--, he)
                        : void 0,
                    be &&
                        hg(R[0], R[1], be) &&
                        ((he = re < 3 ? void 0 : he), (re = 1)),
                    k = Object(k);
                ++W < re;

            ) {
                var ee = R[W]
                ee && S(k, ee, W, he)
            }
            return k
        })
    }
    function cg(S) {
        return function (k, R, W) {
            for (
                var re = -1, he = Object(k), be = W(k), ee = be.length;
                ee--;

            ) {
                var Ce = be[S ? ee : ++re]
                if (R(he[Ce], Ce, he) === !1) break
            }
            return k
        }
    }
    function Wo(S, k) {
        var R = S.__data__
        return pg(k) ? R[typeof k == 'string' ? 'string' : 'hash'] : R.map
    }
    function Js(S, k) {
        var R = yn(S, k)
        return Jv(R) ? R : void 0
    }
    function fg(S) {
        var k = B.call(S, Hr),
            R = S[Hr]
        try {
            S[Hr] = void 0
            var W = !0
        } catch {}
        var re = Z.call(S)
        return W && (k ? (S[Hr] = R) : delete S[Hr]), re
    }
    function dg(S) {
        return typeof S.constructor == 'function' && !Nf(S) ? Av(vi(S)) : {}
    }
    function Bf(S, k) {
        var R = typeof S
        return (
            (k = k == null ? a : k),
            !!k &&
                (R == 'number' || (R != 'symbol' && K.test(S))) &&
                S > -1 &&
                S % 1 == 0 &&
                S < k
        )
    }
    function hg(S, k, R) {
        if (!Kr(R)) return !1
        var W = typeof k
        return (
            W == 'number' ? rl(R) && Bf(k, R.length) : W == 'string' && k in R
        )
            ? Ho(R[k], S)
            : !1
    }
    function pg(S) {
        var k = typeof S
        return k == 'string' || k == 'number' || k == 'symbol' || k == 'boolean'
            ? S !== '__proto__'
            : S === null
    }
    function mg(S) {
        return !!U && U in S
    }
    function Nf(S) {
        var k = S && S.constructor,
            R = (typeof k == 'function' && k.prototype) || f
        return S === R
    }
    function vg(S) {
        var k = []
        if (S != null) for (var R in Object(S)) k.push(R)
        return k
    }
    function gg(S) {
        return Z.call(S)
    }
    function yg(S, k, R) {
        return (
            (k = Rf(k === void 0 ? S.length - 1 : k, 0)),
            function () {
                for (
                    var W = arguments,
                        re = -1,
                        he = Rf(W.length - k, 0),
                        be = Array(he);
                    ++re < he;

                )
                    be[re] = W[k + re]
                re = -1
                for (var ee = Array(k + 1); ++re < k; ) ee[re] = W[re]
                return (ee[k] = R(be)), qs(S, this, ee)
            }
        )
    }
    function Zs(S, k) {
        if (
            !(k === 'constructor' && typeof S[k] == 'function') &&
            k != '__proto__'
        )
            return S[k]
    }
    var Sg = xg(ng)
    function xg(S) {
        var k = 0,
            R = 0
        return function () {
            var W = Tv(),
                re = o - (W - R)
            if (((R = W), re > 0)) {
                if (++k >= i) return arguments[0]
            } else k = 0
            return S.apply(void 0, arguments)
        }
    }
    function wg(S) {
        if (S != null) {
            try {
                return I.call(S)
            } catch {}
            try {
                return S + ''
            } catch {}
        }
        return ''
    }
    function Ho(S, k) {
        return S === k || (S !== S && k !== k)
    }
    var el = Ff(
            (function () {
                return arguments
            })()
        )
            ? Ff
            : function (S) {
                  return yi(S) && B.call(S, 'callee') && !_v.call(S, 'callee')
              },
        tl = Array.isArray
    function rl(S) {
        return S != null && Mf(S.length) && !nl(S)
    }
    function bg(S) {
        return yi(S) && rl(S)
    }
    var Uf = kv || Tg
    function nl(S) {
        if (!Kr(S)) return !1
        var k = jo(S)
        return k == x || k == _ || k == u || k == C
    }
    function Mf(S) {
        return typeof S == 'number' && S > -1 && S % 1 == 0 && S <= a
    }
    function Kr(S) {
        var k = typeof S
        return S != null && (k == 'object' || k == 'function')
    }
    function yi(S) {
        return S != null && typeof S == 'object'
    }
    function Cg(S) {
        if (!yi(S) || jo(S) != h) return !1
        var k = vi(S)
        if (k === null) return !0
        var R = B.call(k, 'constructor') && k.constructor
        return typeof R == 'function' && R instanceof R && I.call(R) == de
    }
    var Of = jr ? $o(jr) : Zv
    function _g(S) {
        return lg(S, $f(S))
    }
    function $f(S) {
        return rl(S) ? Yv(S, !0) : eg(S)
    }
    var Eg = ug(function (S, k, R, W) {
        Df(S, k, R, W)
    })
    function kg(S) {
        return function () {
            return S
        }
    }
    function zf(S) {
        return S
    }
    function Tg() {
        return !1
    }
    e.exports = Eg
})(Cc, Cc.exports)
var fr = Cc.exports
function kS(e) {
    var t = e == null ? 0 : e.length
    return t ? e[t - 1] : void 0
}
function Zn(e) {
    return typeof e == 'number'
}
function _c(e) {
    return Array.isArray(e)
}
function w0(e) {
    return typeof e == 'function'
}
function Ut(e) {
    var t = typeof e
    return e != null && (t === 'object' || t === 'function') && !_c(e)
}
function TS(e) {
    return Ut(e) && Object.keys(e).length === 0
}
function b0(e) {
    return e == null
}
function Ec(e) {
    return Object.prototype.toString.call(e) === '[object String]'
}
function C0(e) {
    return /^var\(--.+\)$/.test(e)
}
var G = !1
function _0(e, t) {
    var r = {}
    return (
        Object.keys(e).forEach(function (n) {
            t.includes(n) || (r[n] = e[n])
        }),
        r
    )
}
function AS(e, t) {
    var r = {}
    return (
        t.forEach(function (n) {
            n in e && (r[n] = e[n])
        }),
        r
    )
}
function IS(e, t, r, n) {
    var i = typeof t == 'string' ? t.split('.') : [t]
    for (n = 0; n < i.length && e; n += 1) e = e[i[n]]
    return e === void 0 ? r : e
}
var RS = function (t) {
        var r = new WeakMap(),
            n = function (o, a, s, l) {
                if (typeof o == 'undefined') return t(o, a, s)
                r.has(o) || r.set(o, new Map())
                var u = r.get(o)
                if (u.has(a)) return u.get(a)
                var d = t(o, a, s, l)
                return u.set(a, d), d
            }
        return n
    },
    ms = RS(IS)
function E0(e, t) {
    var r = {}
    return (
        Object.keys(e).forEach(function (n) {
            var i = e[n],
                o = t(i, n, e)
            o && (r[n] = i)
        }),
        r
    )
}
var vs = function (t) {
        return E0(t, function (r) {
            return r != null
        })
    },
    kc = function (t) {
        return Object.keys(t)
    },
    gs = function (t) {
        return t.reduce(function (r, n) {
            var i = n[0],
                o = n[1]
            return (r[i] = o), r
        }, {})
    }
function PS(e) {
    var t = parseFloat(e.toString()),
        r = e.toString().replace(String(t), '')
    return { unitless: !r, value: t, unit: r }
}
function Tc(e) {
    if (e == null) return e
    var t = PS(e),
        r = t.unitless
    return r || Zn(e) ? e + 'px' : e
}
var k0 = function (t, r) {
        return parseInt(t[1], 10) > parseInt(r[1], 10) ? 1 : -1
    },
    Ac = function (t) {
        return gs(Object.entries(t).sort(k0))
    }
function T0(e) {
    var t = Ac(e)
    return Object.assign(Object.values(t), t)
}
function FS(e) {
    var t = Object.keys(Ac(e))
    return new Set(t)
}
function DS(e) {
    var t
    if (!e) return e
    e = (t = Tc(e)) != null ? t : e
    var r = e.endsWith('px') ? -1 : -0.0635
    return Zn(e)
        ? '' + (e + r)
        : e.replace(/([0-9]+\.?[0-9]*)/, function (n) {
              return '' + (parseFloat(n) + r)
          })
}
function ys(e, t) {
    var r = []
    return (
        e && r.push('@media screen and (min-width: ' + Tc(e) + ')'),
        r.length > 0 && t && r.push('and'),
        t && r.push('@media screen and (max-width: ' + Tc(t) + ')'),
        r.join(' ')
    )
}
function BS(e) {
    var t
    if (!e) return null
    e.base = (t = e.base) != null ? t : '0px'
    var r = T0(e),
        n = Object.entries(e)
            .sort(k0)
            .map(function (a, s, l) {
                var u,
                    d = a[0],
                    m = a[1],
                    p = (u = l[s + 1]) != null ? u : [],
                    x = p[1]
                return (
                    (x = parseFloat(x) > 0 ? DS(x) : void 0),
                    {
                        breakpoint: d,
                        minW: m,
                        maxW: x,
                        maxWQuery: ys(null, x),
                        minWQuery: ys(m),
                        minMaxQuery: ys(m, x),
                    }
                )
            }),
        i = FS(e),
        o = Array.from(i.values())
    return {
        keys: i,
        normalized: r,
        isResponsive: function (s) {
            var l = Object.keys(s)
            return (
                l.length > 0 &&
                l.every(function (u) {
                    return i.has(u)
                })
            )
        },
        asObject: Ac(e),
        asArray: T0(e),
        details: n,
        media: [null].concat(
            r
                .map(function (a) {
                    return ys(a)
                })
                .slice(1)
        ),
        toArrayValue: function (s) {
            if (!Ut(s)) throw new Error('toArrayValue: value must be an object')
            for (
                var l = o.map(function (u) {
                    var d
                    return (d = s[u]) != null ? d : null
                });
                kS(l) === null;

            )
                l.pop()
            return l
        },
        toObjectValue: function (s) {
            if (!Array.isArray(s))
                throw new Error('toObjectValue: value must be an array')
            return s.reduce(function (l, u, d) {
                var m = o[d]
                return m != null && u != null && (l[m] = u), l
            }, {})
        },
    }
}
function NS() {
    return !!(
        typeof window != 'undefined' &&
        window.document &&
        window.document.createElement
    )
}
var Co = NS(),
    ei = function (t) {
        return t ? '' : void 0
    },
    Ic = function (t) {
        return t ? !0 : void 0
    },
    ie = function () {
        for (var t = arguments.length, r = new Array(t), n = 0; n < t; n++)
            r[n] = arguments[n]
        return r.filter(Boolean).join(' ')
    }
function Qt(e) {
    for (
        var t = arguments.length, r = new Array(t > 1 ? t - 1 : 0), n = 1;
        n < t;
        n++
    )
        r[n - 1] = arguments[n]
    return w0(e) ? e.apply(void 0, r) : e
}
function A0() {
    for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++)
        t[r] = arguments[r]
    return function (i) {
        t.some(function (o) {
            return o == null || o(i), i == null ? void 0 : i.defaultPrevented
        })
    }
}
function US(e) {
    var t
    return function () {
        if (e) {
            for (var n = arguments.length, i = new Array(n), o = 0; o < n; o++)
                i[o] = arguments[o]
            ;(t = e.apply(this, i)), (e = null)
        }
        return t
    }
}
var _o = function () {},
    MS = US(function (e) {
        return function () {
            var t = e.condition,
                r = e.message
            t && G && console.warn(r)
        }
    })
Object.freeze(['base', 'sm', 'md', 'lg', 'xl', '2xl'])
function ti(e, t) {
    return _c(e)
        ? e.map(function (r) {
              return r === null ? null : t(r)
          })
        : Ut(e)
        ? kc(e).reduce(function (r, n) {
              return (r[n] = t(e[n])), r
          }, {})
        : e != null
        ? t(e)
        : null
}
function OS(e, t) {
    function r(n, i) {
        return (
            i === void 0 && (i = []),
            _c(n)
                ? n.map(function (o, a) {
                      return r(o, [].concat(i, [String(a)]))
                  })
                : Ut(n)
                ? gs(
                      Object.entries(n).map(function (o) {
                          var a = o[0],
                              s = o[1]
                          return [a, r(s, [].concat(i, [a]))]
                      })
                  )
                : t(n, i)
        )
    }
    return r(e)
}
function $S(e, t) {
    if (e != null) {
        if (w0(e)) {
            e(t)
            return
        }
        try {
            e.current = t
        } catch {
            throw new Error(
                "Cannot assign value '" + t + "' to ref '" + e + "'"
            )
        }
    }
}
function I0() {
    for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++)
        t[r] = arguments[r]
    return function (n) {
        t.forEach(function (i) {
            return $S(i, n)
        })
    }
}
function Eo(e) {
    e === void 0 && (e = {})
    var t = e,
        r = t.strict,
        n = r === void 0 ? !0 : r,
        i = t.errorMessage,
        o =
            i === void 0
                ? 'useContext: `context` is undefined. Seems you forgot to wrap component within the Provider'
                : i,
        a = t.name,
        s = T.exports.createContext(void 0)
    s.displayName = a
    function l() {
        var u = T.exports.useContext(s)
        if (!u && n) {
            var d = new Error(o)
            throw (
                ((d.name = 'ContextError'),
                Error.captureStackTrace == null ||
                    Error.captureStackTrace(d, l),
                d)
            )
        }
        return u
    }
    return [s.Provider, l, s]
}
function Ss(e) {
    return T.exports.Children.toArray(e).filter(function (t) {
        return T.exports.isValidElement(t)
    })
}
function zS(e) {
    e === void 0 && (e = !1)
    var t = T.exports.useState(e),
        r = t[0],
        n = t[1],
        i = T.exports.useCallback(function () {
            n(!0)
        }, []),
        o = T.exports.useCallback(function () {
            n(!1)
        }, []),
        a = T.exports.useCallback(function () {
            n(function (s) {
                return !s
            })
        }, [])
    return [r, { on: i, off: o, toggle: a }]
}
var LS = Co ? T.exports.useLayoutEffect : T.exports.useEffect,
    R0 = { prefix: Math.round(Math.random() * 1e10), current: 0 },
    Rc = T.exports.createContext(R0),
    jS = T.exports.memo(function (e) {
        var t = e.children,
            r = T.exports.useContext(Rc),
            n = r === R0,
            i = T.exports.useMemo(
                function () {
                    return { prefix: n ? 0 : ++r.prefix, current: 0 }
                },
                [n, r]
            )
        return T.exports.createElement(Rc.Provider, { value: i }, t)
    })
function WS(e, t) {
    var r = T.exports.useContext(Rc)
    return T.exports.useMemo(
        function () {
            return e || [t, r.prefix, ++r.current].filter(Boolean).join('-')
        },
        [e, t]
    )
}
function HS(e, t) {
    if (e != null) {
        if (typeof e == 'function') {
            e(t)
            return
        }
        try {
            e.current = t
        } catch {
            throw new Error(
                "Cannot assign value '" + t + "' to ref '" + e + "'"
            )
        }
    }
}
function VS() {
    for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++)
        t[r] = arguments[r]
    return T.exports.useMemo(function () {
        return t.every(function (n) {
            return n == null
        })
            ? null
            : function (n) {
                  t.forEach(function (i) {
                      i && HS(i, n)
                  })
              }
    }, t)
}
var KS = Eo({ strict: !1, name: 'PortalManagerContext' }),
    qS = KS[0]
function GS(e) {
    var t = e.children,
        r = e.zIndex
    return T.exports.createElement(qS, { value: { zIndex: r } }, t)
}
Eo({ strict: !1, name: 'PortalContext' })
var YS = {
        body: { classList: { add: function () {}, remove: function () {} } },
        addEventListener: function () {},
        removeEventListener: function () {},
        activeElement: { blur: function () {}, nodeName: '' },
        querySelector: function () {
            return null
        },
        querySelectorAll: function () {
            return []
        },
        getElementById: function () {
            return null
        },
        createEvent: function () {
            return { initEvent: function () {} }
        },
        createElement: function () {
            return {
                children: [],
                childNodes: [],
                style: {},
                setAttribute: function () {},
                getElementsByTagName: function () {
                    return []
                },
            }
        },
    },
    P0 = YS,
    ri = function () {},
    XS = {
        document: P0,
        navigator: { userAgent: '' },
        CustomEvent: function () {
            return this
        },
        addEventListener: ri,
        removeEventListener: ri,
        getComputedStyle: function () {
            return {
                getPropertyValue: function () {
                    return ''
                },
            }
        },
        matchMedia: function () {
            return { matches: !1, addListener: ri, removeListener: ri }
        },
        requestAnimationFrame: function (t) {
            return typeof setTimeout == 'undefined'
                ? (t(), null)
                : setTimeout(t, 0)
        },
        cancelAnimationFrame: function (t) {
            typeof setTimeout != 'undefined' && clearTimeout(t)
        },
        setTimeout: function () {
            return 0
        },
        clearTimeout: ri,
        setInterval: function () {
            return 0
        },
        clearInterval: ri,
    },
    QS = XS,
    JS = { window: QS, document: P0 },
    F0 = Co ? { window, document } : JS,
    D0 = T.exports.createContext(F0)
function ZS() {
    return T.exports.useContext(D0)
}
function ex(e) {
    var t = e.children,
        r = e.environment,
        n = T.exports.useState(null),
        i = n[0],
        o = n[1],
        a = T.exports.useMemo(
            function () {
                var l,
                    u = i == null ? void 0 : i.ownerDocument,
                    d = i == null ? void 0 : i.ownerDocument.defaultView,
                    m = u ? { document: u, window: d } : void 0,
                    p = (l = r != null ? r : m) != null ? l : F0
                return p
            },
            [i, r]
        ),
        s = !i && !r
    return ir.createElement(
        D0.Provider,
        { value: a },
        t,
        s &&
            ir.createElement('span', {
                ref: function (u) {
                    u && o(u)
                },
            })
    )
}
var xs = { light: 'chakra-ui-light', dark: 'chakra-ui-dark' },
    tx = { classList: { add: _o, remove: _o } },
    rx = function (t) {
        return Co ? t.body : tx
    }
function nx(e, t) {
    var r = rx(t)
    r.classList.add(e ? xs.dark : xs.light),
        r.classList.remove(e ? xs.light : xs.dark)
}
function ix(e) {
    var t = window.matchMedia == null ? void 0 : window.matchMedia(e)
    if (!!t) return !!t.media === t.matches
}
var B0 = {
    light: '(prefers-color-scheme: light)',
    dark: '(prefers-color-scheme: dark)',
}
function ox(e) {
    var t,
        r = (t = ix(B0.dark)) != null ? t : e === 'dark'
    return r ? 'dark' : 'light'
}
function ax(e) {
    if (!('matchMedia' in window)) return _o
    var t = window.matchMedia(B0.dark),
        r = function () {
            e(t.matches ? 'dark' : 'light', !0)
        }
    return (
        t.addEventListener('change', r),
        function () {
            t.removeEventListener('change', r)
        }
    )
}
var N0 = {
        get: function () {
            return document.documentElement.style.getPropertyValue(
                '--chakra-ui-color-mode'
            )
        },
        set: function (t) {
            Co &&
                document.documentElement.style.setProperty(
                    '--chakra-ui-color-mode',
                    t
                )
        },
    },
    U0 = function () {
        return typeof Storage != 'undefined'
    },
    M0 = 'chakra-ui-color-mode',
    sx = {
        get: function (t) {
            if (!U0()) return t
            try {
                var r = localStorage.getItem(M0)
                return r != null ? r : t
            } catch {
                return t
            }
        },
        set: function (t) {
            if (!!U0())
                try {
                    localStorage.setItem(M0, t)
                } catch {}
        },
        type: 'localStorage',
    },
    O0 = T.exports.createContext({}),
    $0 = function () {
        var t = T.exports.useContext(O0)
        if (t === void 0)
            throw new Error(
                'useColorMode must be used within a ColorModeProvider'
            )
        return t
    }
function lx(e) {
    var t = e.value,
        r = e.children,
        n = e.options,
        i = n.useSystemColorMode,
        o = n.initialColorMode,
        a = e.colorModeManager,
        s = a === void 0 ? sx : a,
        l = o === 'dark' ? 'dark' : 'light',
        u = T.exports.useState(s.type === 'cookie' ? s.get(l) : l),
        d = u[0],
        m = u[1],
        p = ZS(),
        x = p.document
    T.exports.useEffect(
        function () {
            if (Co && s.type === 'localStorage') {
                var v = ox(l)
                if (i) return m(v)
                var h = N0.get(),
                    C = s.get()
                return m(h || C || (o === 'system' ? v : l))
            }
        },
        [s, i, l, o]
    ),
        T.exports.useEffect(
            function () {
                var v = d === 'dark'
                nx(v, x), N0.set(v ? 'dark' : 'light')
            },
            [d, x]
        )
    var _ = T.exports.useCallback(
            function (v, h) {
                if ((h === void 0 && (h = !1), !h)) s.set(v)
                else if (s.get() && !i) return
                m(v)
            },
            [s, i]
        ),
        b = T.exports.useCallback(
            function () {
                _(d === 'light' ? 'dark' : 'light')
            },
            [d, _]
        )
    T.exports.useEffect(
        function () {
            var v = i || o === 'system',
                h
            return (
                v && (h = ax(_)),
                function () {
                    h && v && h()
                }
            )
        },
        [_, i, o]
    )
    var g = T.exports.useMemo(
        function () {
            return {
                colorMode: t != null ? t : d,
                toggleColorMode: t ? _o : b,
                setColorMode: t ? _o : _,
            }
        },
        [d, _, b, t]
    )
    return T.exports.createElement(O0.Provider, { value: g }, r)
}
function ni() {
    return (
        (ni =
            Object.assign ||
            function (e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = arguments[t]
                    for (var n in r)
                        Object.prototype.hasOwnProperty.call(r, n) &&
                            (e[n] = r[n])
                }
                return e
            }),
        ni.apply(this, arguments)
    )
}
var z0 = function (t, r) {
    return function (n) {
        var i = String(r),
            o = t ? t + '.' + i : i
        return Ut(n.__cssMap) && o in n.__cssMap ? n.__cssMap[o].varRef : r
    }
}
function ko(e) {
    var t = e.scale,
        r = e.transform,
        n = e.compose,
        i = function (a, s) {
            var l,
                u = z0(t, a)(s),
                d = (l = r == null ? void 0 : r(u, s)) != null ? l : u
            return n && (d = n(d, s)), d
        }
    return i
}
function Mt(e, t) {
    return function (r) {
        var n = { property: r, scale: e }
        return (n.transform = ko({ scale: e, transform: t })), n
    }
}
var ux = function (t) {
    var r = t.rtl,
        n = t.ltr
    return function (i) {
        return i.direction === 'rtl' ? r : n
    }
}
function cx(e) {
    var t = e.property,
        r = e.scale,
        n = e.transform
    return {
        scale: r,
        property: ux(t),
        transform: r ? ko({ scale: r, compose: n }) : n,
    }
}
var Pc,
    Fc,
    L0 = [
        'rotate(var(--chakra-rotate, 0))',
        'scaleX(var(--chakra-scale-x, 1))',
        'scaleY(var(--chakra-scale-y, 1))',
        'skewX(var(--chakra-skew-x, 0))',
        'skewY(var(--chakra-skew-y, 0))',
    ]
function fx() {
    return [
        'translateX(var(--chakra-translate-x, 0))',
        'translateY(var(--chakra-translate-y, 0))',
    ]
        .concat(L0)
        .join(' ')
}
function dx() {
    return [
        'translate3d(var(--chakra-translate-x, 0), var(--chakra-translate-y, 0), 0)',
    ]
        .concat(L0)
        .join(' ')
}
var hx = {
        '--chakra-blur': 'var(--chakra-empty,/*!*/ /*!*/)',
        '--chakra-brightness': 'var(--chakra-empty,/*!*/ /*!*/)',
        '--chakra-contrast': 'var(--chakra-empty,/*!*/ /*!*/)',
        '--chakra-grayscale': 'var(--chakra-empty,/*!*/ /*!*/)',
        '--chakra-hue-rotate': 'var(--chakra-empty,/*!*/ /*!*/)',
        '--chakra-invert': 'var(--chakra-empty,/*!*/ /*!*/)',
        '--chakra-saturate': 'var(--chakra-empty,/*!*/ /*!*/)',
        '--chakra-sepia': 'var(--chakra-empty,/*!*/ /*!*/)',
        '--chakra-drop-shadow': 'var(--chakra-empty,/*!*/ /*!*/)',
        filter: [
            'var(--chakra-blur)',
            'var(--chakra-brightness)',
            'var(--chakra-contrast)',
            'var(--chakra-grayscale)',
            'var(--chakra-hue-rotate)',
            'var(--chakra-invert)',
            'var(--chakra-saturate)',
            'var(--chakra-sepia)',
            'var(--chakra-drop-shadow)',
        ].join(' '),
    },
    px = {
        backdropFilter: [
            'var(--chakra-backdrop-blur)',
            'var(--chakra-backdrop-brightness)',
            'var(--chakra-backdrop-contrast)',
            'var(--chakra-backdrop-grayscale)',
            'var(--chakra-backdrop-hue-rotate)',
            'var(--chakra-backdrop-invert)',
            'var(--chakra-backdrop-opacity)',
            'var(--chakra-backdrop-saturate)',
            'var(--chakra-backdrop-sepia)',
        ].join(' '),
        '--chakra-backdrop-blur': 'var(--chakra-empty,/*!*/ /*!*/)',
        '--chakra-backdrop-brightness': 'var(--chakra-empty,/*!*/ /*!*/)',
        '--chakra-backdrop-contrast': 'var(--chakra-empty,/*!*/ /*!*/)',
        '--chakra-backdrop-grayscale': 'var(--chakra-empty,/*!*/ /*!*/)',
        '--chakra-backdrop-hue-rotate': 'var(--chakra-empty,/*!*/ /*!*/)',
        '--chakra-backdrop-invert': 'var(--chakra-empty,/*!*/ /*!*/)',
        '--chakra-backdrop-opacity': 'var(--chakra-empty,/*!*/ /*!*/)',
        '--chakra-backdrop-saturate': 'var(--chakra-empty,/*!*/ /*!*/)',
        '--chakra-backdrop-sepia': 'var(--chakra-empty,/*!*/ /*!*/)',
    }
function mx(e) {
    return {
        '--chakra-ring-offset-shadow':
            'var(--chakra-ring-inset) 0 0 0 var(--chakra-ring-offset-width) var(--chakra-ring-offset-color)',
        '--chakra-ring-shadow':
            'var(--chakra-ring-inset) 0 0 0 calc(var(--chakra-ring-width) + var(--chakra-ring-offset-width)) var(--chakra-ring-color)',
        '--chakra-ring-width': e,
        boxShadow: [
            'var(--chakra-ring-offset-shadow)',
            'var(--chakra-ring-shadow)',
            'var(--chakra-shadow, 0 0 #0000)',
        ].join(', '),
    }
}
var vx = {
        'row-reverse': {
            space: '--chakra-space-x-reverse',
            divide: '--chakra-divide-x-reverse',
        },
        'column-reverse': {
            space: '--chakra-space-y-reverse',
            divide: '--chakra-divide-y-reverse',
        },
    },
    j0 = '& > :not(style) ~ :not(style)',
    gx =
        ((Pc = {}),
        (Pc[j0] = {
            marginInlineStart:
                'calc(var(--chakra-space-x) * calc(1 - var(--chakra-space-x-reverse)))',
            marginInlineEnd:
                'calc(var(--chakra-space-x) * var(--chakra-space-x-reverse))',
        }),
        Pc),
    yx =
        ((Fc = {}),
        (Fc[j0] = {
            marginTop:
                'calc(var(--chakra-space-y) * calc(1 - var(--chakra-space-y-reverse)))',
            marginBottom:
                'calc(var(--chakra-space-y) * var(--chakra-space-y-reverse))',
        }),
        Fc)
function ws(e, t) {
    return (
        (ws =
            Object.setPrototypeOf ||
            function (n, i) {
                return (n.__proto__ = i), n
            }),
        ws(e, t)
    )
}
function Sx(e, t) {
    if (typeof t != 'function' && t !== null)
        throw new TypeError(
            'Super expression must either be null or a function'
        )
    ;(e.prototype = Object.create(t && t.prototype, {
        constructor: { value: e, writable: !0, configurable: !0 },
    })),
        t && ws(e, t)
}
function Dc() {
    Dc = function (i, o) {
        return new r(i, void 0, o)
    }
    var e = RegExp.prototype,
        t = new WeakMap()
    function r(i, o, a) {
        var s = new RegExp(i, o)
        return t.set(s, a || t.get(i)), ws(s, r.prototype)
    }
    Sx(r, RegExp),
        (r.prototype.exec = function (i) {
            var o = e.exec.call(this, i)
            return o && (o.groups = n(o, this)), o
        }),
        (r.prototype[Symbol.replace] = function (i, o) {
            if (typeof o == 'string') {
                var a = t.get(this)
                return e[Symbol.replace].call(
                    this,
                    i,
                    o.replace(/\$<([^>]+)>/g, function (l, u) {
                        return '$' + a[u]
                    })
                )
            } else if (typeof o == 'function') {
                var s = this
                return e[Symbol.replace].call(this, i, function () {
                    var l = arguments
                    return (
                        typeof l[l.length - 1] != 'object' &&
                            ((l = [].slice.call(l)), l.push(n(l, s))),
                        o.apply(this, l)
                    )
                })
            } else return e[Symbol.replace].call(this, i, o)
        })
    function n(i, o) {
        var a = t.get(o)
        return Object.keys(a).reduce(function (s, l) {
            return (s[l] = i[a[l]]), s
        }, Object.create(null))
    }
    return Dc.apply(this, arguments)
}
var Bc = {
        'to-t': 'to top',
        'to-tr': 'to top right',
        'to-r': 'to right',
        'to-br': 'to bottom right',
        'to-b': 'to bottom',
        'to-bl': 'to bottom left',
        'to-l': 'to left',
        'to-tl': 'to top left',
    },
    xx = new Set(Object.values(Bc)),
    W0 = new Set([
        'none',
        '-moz-initial',
        'inherit',
        'initial',
        'revert',
        'unset',
    ]),
    wx = function (t) {
        return t.trim()
    }
function bx(e, t) {
    var r, n
    if (e == null || W0.has(e)) return e
    var i = Dc(/(^[\x2DA-Za-z]+)\(((.*))\)/g, { type: 1, values: 2 }),
        o = (r = (n = i.exec(e)) == null ? void 0 : n.groups) != null ? r : {},
        a = o.type,
        s = o.values
    if (!a || !s) return e
    var l = a.includes('-gradient') ? a : a + '-gradient',
        u = s.split(',').map(wx).filter(Boolean),
        d = u[0],
        m = u.slice(1)
    if ((m == null ? void 0 : m.length) === 0) return e
    var p = d in Bc ? Bc[d] : d
    m.unshift(p)
    var x = m.map(function (_) {
        if (xx.has(_)) return _
        var b = _.indexOf(' '),
            g = b !== -1 ? [_.substr(0, b), _.substr(b + 1)] : [_],
            v = g[0],
            h = g[1],
            C = H0(h) ? h : h && h.split(' '),
            E = 'colors.' + v,
            D = E in t.__cssMap ? t.__cssMap[E].varRef : v
        return C ? [D, C].join(' ') : D
    })
    return l + '(' + x.join(', ') + ')'
}
var H0 = function (t) {
        return Ec(t) && t.includes('(') && t.includes(')')
    },
    Cx = function (t, r) {
        return bx(t, r != null ? r : {})
    },
    _x = function (t) {
        var r = parseFloat(t.toString()),
            n = t.toString().replace(String(r), '')
        return { unitless: !n, value: r, unit: n }
    },
    Jt = function (t) {
        return function (r) {
            return t + '(' + r + ')'
        }
    },
    fe = {
        filter: function (t) {
            return t !== 'auto' ? t : hx
        },
        backdropFilter: function (t) {
            return t !== 'auto' ? t : px
        },
        ring: function (t) {
            return mx(fe.px(t))
        },
        bgClip: function (t) {
            return t === 'text'
                ? { color: 'transparent', backgroundClip: 'text' }
                : { backgroundClip: t }
        },
        transform: function (t) {
            return t === 'auto' ? fx() : t === 'auto-gpu' ? dx() : t
        },
        px: function (t) {
            if (t == null) return t
            var r = _x(t),
                n = r.unitless
            return n || Zn(t) ? t + 'px' : t
        },
        fraction: function (t) {
            return !Zn(t) || t > 1 ? t : t * 100 + '%'
        },
        float: function (t, r) {
            var n = { left: 'right', right: 'left' }
            return r.direction === 'rtl' ? n[t] : t
        },
        degree: function (t) {
            if (C0(t) || t == null) return t
            var r = Ec(t) && !t.endsWith('deg')
            return Zn(t) || r ? t + 'deg' : t
        },
        gradient: Cx,
        blur: Jt('blur'),
        opacity: Jt('opacity'),
        brightness: Jt('brightness'),
        contrast: Jt('contrast'),
        dropShadow: Jt('drop-shadow'),
        grayscale: Jt('grayscale'),
        hueRotate: Jt('hue-rotate'),
        invert: Jt('invert'),
        saturate: Jt('saturate'),
        sepia: Jt('sepia'),
        bgImage: function (t) {
            if (t == null) return t
            var r = H0(t) || W0.has(t)
            return r ? t : 'url(' + t + ')'
        },
        outline: function (t) {
            var r = String(t) === '0' || String(t) === 'none'
            return t !== null && r
                ? { outline: '2px solid transparent', outlineOffset: '2px' }
                : { outline: t }
        },
        flexDirection: function (t) {
            var r,
                n = (r = vx[t]) != null ? r : {},
                i = n.space,
                o = n.divide,
                a = { flexDirection: t }
            return i && (a[i] = 1), o && (a[o] = 1), a
        },
    },
    A = {
        borderWidths: Mt('borderWidths'),
        borderStyles: Mt('borderStyles'),
        colors: Mt('colors'),
        borders: Mt('borders'),
        radii: Mt('radii', fe.px),
        space: Mt('space', fe.px),
        spaceT: Mt('space', fe.px),
        degreeT: function (t) {
            return { property: t, transform: fe.degree }
        },
        prop: function (t, r, n) {
            return ni(
                { property: t, scale: r },
                r && { transform: ko({ scale: r, transform: n }) }
            )
        },
        propT: function (t, r) {
            return { property: t, transform: r }
        },
        sizes: Mt('sizes', fe.px),
        sizesT: Mt('sizes', fe.fraction),
        shadows: Mt('shadows'),
        logical: cx,
        blur: Mt('blur', fe.blur),
    },
    bs = {
        background: A.colors('background'),
        backgroundColor: A.colors('backgroundColor'),
        backgroundImage: A.propT('backgroundImage', fe.bgImage),
        backgroundSize: !0,
        backgroundPosition: !0,
        backgroundRepeat: !0,
        backgroundAttachment: !0,
        backgroundClip: { transform: fe.bgClip },
        bgSize: A.prop('backgroundSize'),
        bgPosition: A.prop('backgroundPosition'),
        bg: A.colors('background'),
        bgColor: A.colors('backgroundColor'),
        bgPos: A.prop('backgroundPosition'),
        bgRepeat: A.prop('backgroundRepeat'),
        bgAttachment: A.prop('backgroundAttachment'),
        bgGradient: A.propT('backgroundImage', fe.gradient),
        bgClip: { transform: fe.bgClip },
    }
Object.assign(bs, { bgImage: bs.backgroundImage, bgImg: bs.backgroundImage })
var se = {
    border: A.borders('border'),
    borderWidth: A.borderWidths('borderWidth'),
    borderStyle: A.borderStyles('borderStyle'),
    borderColor: A.colors('borderColor'),
    borderRadius: A.radii('borderRadius'),
    borderTop: A.borders('borderTop'),
    borderBlockStart: A.borders('borderBlockStart'),
    borderTopLeftRadius: A.radii('borderTopLeftRadius'),
    borderStartStartRadius: A.logical({
        scale: 'radii',
        property: { ltr: 'borderTopLeftRadius', rtl: 'borderTopRightRadius' },
    }),
    borderEndStartRadius: A.logical({
        scale: 'radii',
        property: {
            ltr: 'borderBottomLeftRadius',
            rtl: 'borderBottomRightRadius',
        },
    }),
    borderTopRightRadius: A.radii('borderTopRightRadius'),
    borderStartEndRadius: A.logical({
        scale: 'radii',
        property: { ltr: 'borderTopRightRadius', rtl: 'borderTopLeftRadius' },
    }),
    borderEndEndRadius: A.logical({
        scale: 'radii',
        property: {
            ltr: 'borderBottomRightRadius',
            rtl: 'borderBottomLeftRadius',
        },
    }),
    borderRight: A.borders('borderRight'),
    borderInlineEnd: A.borders('borderInlineEnd'),
    borderBottom: A.borders('borderBottom'),
    borderBlockEnd: A.borders('borderBlockEnd'),
    borderBottomLeftRadius: A.radii('borderBottomLeftRadius'),
    borderBottomRightRadius: A.radii('borderBottomRightRadius'),
    borderLeft: A.borders('borderLeft'),
    borderInlineStart: { property: 'borderInlineStart', scale: 'borders' },
    borderInlineStartRadius: A.logical({
        scale: 'radii',
        property: {
            ltr: ['borderTopLeftRadius', 'borderBottomLeftRadius'],
            rtl: ['borderTopRightRadius', 'borderBottomRightRadius'],
        },
    }),
    borderInlineEndRadius: A.logical({
        scale: 'radii',
        property: {
            ltr: ['borderTopRightRadius', 'borderBottomRightRadius'],
            rtl: ['borderTopLeftRadius', 'borderBottomLeftRadius'],
        },
    }),
    borderX: A.borders(['borderLeft', 'borderRight']),
    borderInline: A.borders('borderInline'),
    borderY: A.borders(['borderTop', 'borderBottom']),
    borderBlock: A.borders('borderBlock'),
    borderTopWidth: A.borderWidths('borderTopWidth'),
    borderBlockStartWidth: A.borderWidths('borderBlockStartWidth'),
    borderTopColor: A.colors('borderTopColor'),
    borderBlockStartColor: A.colors('borderBlockStartColor'),
    borderTopStyle: A.borderStyles('borderTopStyle'),
    borderBlockStartStyle: A.borderStyles('borderBlockStartStyle'),
    borderBottomWidth: A.borderWidths('borderBottomWidth'),
    borderBlockEndWidth: A.borderWidths('borderBlockEndWidth'),
    borderBottomColor: A.colors('borderBottomColor'),
    borderBlockEndColor: A.colors('borderBlockEndColor'),
    borderBottomStyle: A.borderStyles('borderBottomStyle'),
    borderBlockEndStyle: A.borderStyles('borderBlockEndStyle'),
    borderLeftWidth: A.borderWidths('borderLeftWidth'),
    borderInlineStartWidth: A.borderWidths('borderInlineStartWidth'),
    borderLeftColor: A.colors('borderLeftColor'),
    borderInlineStartColor: A.colors('borderInlineStartColor'),
    borderLeftStyle: A.borderStyles('borderLeftStyle'),
    borderInlineStartStyle: A.borderStyles('borderInlineStartStyle'),
    borderRightWidth: A.borderWidths('borderRightWidth'),
    borderInlineEndWidth: A.borderWidths('borderInlineEndWidth'),
    borderRightColor: A.colors('borderRightColor'),
    borderInlineEndColor: A.colors('borderInlineEndColor'),
    borderRightStyle: A.borderStyles('borderRightStyle'),
    borderInlineEndStyle: A.borderStyles('borderInlineEndStyle'),
    borderTopRadius: A.radii(['borderTopLeftRadius', 'borderTopRightRadius']),
    borderBottomRadius: A.radii([
        'borderBottomLeftRadius',
        'borderBottomRightRadius',
    ]),
    borderLeftRadius: A.radii([
        'borderTopLeftRadius',
        'borderBottomLeftRadius',
    ]),
    borderRightRadius: A.radii([
        'borderTopRightRadius',
        'borderBottomRightRadius',
    ]),
}
Object.assign(se, {
    rounded: se.borderRadius,
    roundedTop: se.borderTopRadius,
    roundedTopLeft: se.borderTopLeftRadius,
    roundedTopRight: se.borderTopRightRadius,
    roundedTopStart: se.borderStartStartRadius,
    roundedTopEnd: se.borderStartEndRadius,
    roundedBottom: se.borderBottomRadius,
    roundedBottomLeft: se.borderBottomLeftRadius,
    roundedBottomRight: se.borderBottomRightRadius,
    roundedBottomStart: se.borderEndStartRadius,
    roundedBottomEnd: se.borderEndEndRadius,
    roundedLeft: se.borderLeftRadius,
    roundedRight: se.borderRightRadius,
    roundedStart: se.borderInlineStartRadius,
    roundedEnd: se.borderInlineEndRadius,
    borderStart: se.borderInlineStart,
    borderEnd: se.borderInlineEnd,
    borderTopStartRadius: se.borderStartStartRadius,
    borderTopEndRadius: se.borderStartEndRadius,
    borderBottomStartRadius: se.borderEndStartRadius,
    borderBottomEndRadius: se.borderEndEndRadius,
    borderStartRadius: se.borderInlineStartRadius,
    borderEndRadius: se.borderInlineEndRadius,
    borderStartWidth: se.borderInlineStartWidth,
    borderEndWidth: se.borderInlineEndWidth,
    borderStartColor: se.borderInlineStartColor,
    borderEndColor: se.borderInlineEndColor,
    borderStartStyle: se.borderInlineStartStyle,
    borderEndStyle: se.borderInlineEndStyle,
})
var Ex = {
        color: A.colors('color'),
        textColor: A.colors('color'),
        fill: A.colors('fill'),
        stroke: A.colors('stroke'),
    },
    Nc = {
        boxShadow: A.shadows('boxShadow'),
        mixBlendMode: !0,
        blendMode: A.prop('mixBlendMode'),
        backgroundBlendMode: !0,
        bgBlendMode: A.prop('backgroundBlendMode'),
        opacity: !0,
    }
Object.assign(Nc, { shadow: Nc.boxShadow })
var kx = {
        filter: { transform: fe.filter },
        blur: A.blur('--chakra-blur'),
        brightness: A.propT('--chakra-brightness', fe.brightness),
        contrast: A.propT('--chakra-contrast', fe.contrast),
        hueRotate: A.degreeT('--chakra-hue-rotate'),
        invert: A.propT('--chakra-invert', fe.invert),
        saturate: A.propT('--chakra-saturate', fe.saturate),
        dropShadow: A.propT('--chakra-drop-shadow', fe.dropShadow),
        backdropFilter: { transform: fe.backdropFilter },
        backdropBlur: A.blur('--chakra-backdrop-blur'),
        backdropBrightness: A.propT(
            '--chakra-backdrop-brightness',
            fe.brightness
        ),
        backdropContrast: A.propT('--chakra-backdrop-contrast', fe.contrast),
        backdropHueRotate: A.degreeT('--chakra-backdrop-hue-rotate'),
        backdropInvert: A.propT('--chakra-backdrop-invert', fe.invert),
        backdropSaturate: A.propT('--chakra-backdrop-saturate', fe.saturate),
    },
    Cs = {
        alignItems: !0,
        alignContent: !0,
        justifyItems: !0,
        justifyContent: !0,
        flexWrap: !0,
        flexDirection: { transform: fe.flexDirection },
        experimental_spaceX: {
            static: gx,
            transform: ko({
                scale: 'space',
                transform: function (t) {
                    return t !== null ? { '--chakra-space-x': t } : null
                },
            }),
        },
        experimental_spaceY: {
            static: yx,
            transform: ko({
                scale: 'space',
                transform: function (t) {
                    return t != null ? { '--chakra-space-y': t } : null
                },
            }),
        },
        flex: !0,
        flexFlow: !0,
        flexGrow: !0,
        flexShrink: !0,
        flexBasis: A.sizes('flexBasis'),
        justifySelf: !0,
        alignSelf: !0,
        order: !0,
        placeItems: !0,
        placeContent: !0,
        placeSelf: !0,
    }
Object.assign(Cs, { flexDir: Cs.flexDirection })
var V0 = {
        gridGap: A.space('gridGap'),
        gridColumnGap: A.space('gridColumnGap'),
        gridRowGap: A.space('gridRowGap'),
        gridColumn: !0,
        gridRow: !0,
        gridAutoFlow: !0,
        gridAutoColumns: !0,
        gridColumnStart: !0,
        gridColumnEnd: !0,
        gridRowStart: !0,
        gridRowEnd: !0,
        gridAutoRows: !0,
        gridTemplate: !0,
        gridTemplateColumns: !0,
        gridTemplateRows: !0,
        gridTemplateAreas: !0,
        gridArea: !0,
    },
    Tx = {
        appearance: !0,
        cursor: !0,
        resize: !0,
        userSelect: !0,
        pointerEvents: !0,
        outline: { transform: fe.outline },
        outlineOffset: !0,
        outlineColor: A.colors('outlineColor'),
    },
    Et = {
        width: A.sizesT('width'),
        inlineSize: A.sizesT('inlineSize'),
        height: A.sizes('height'),
        blockSize: A.sizes('blockSize'),
        boxSize: A.sizes(['width', 'height']),
        minWidth: A.sizes('minWidth'),
        minInlineSize: A.sizes('minInlineSize'),
        minHeight: A.sizes('minHeight'),
        minBlockSize: A.sizes('minBlockSize'),
        maxWidth: A.sizes('maxWidth'),
        maxInlineSize: A.sizes('maxInlineSize'),
        maxHeight: A.sizes('maxHeight'),
        maxBlockSize: A.sizes('maxBlockSize'),
        d: A.prop('display'),
        overflow: !0,
        overflowX: !0,
        overflowY: !0,
        overscrollBehavior: !0,
        overscrollBehaviorX: !0,
        overscrollBehaviorY: !0,
        display: !0,
        verticalAlign: !0,
        boxSizing: !0,
        boxDecorationBreak: !0,
        float: A.propT('float', fe.float),
        objectFit: !0,
        objectPosition: !0,
        visibility: !0,
        isolation: !0,
    }
Object.assign(Et, {
    w: Et.width,
    h: Et.height,
    minW: Et.minWidth,
    maxW: Et.maxWidth,
    minH: Et.minHeight,
    maxH: Et.maxHeight,
    overscroll: Et.overscrollBehavior,
    overscrollX: Et.overscrollBehaviorX,
    overscrollY: Et.overscrollBehaviorY,
})
var Ax = {
        listStyleType: !0,
        listStylePosition: !0,
        listStylePos: A.prop('listStylePosition'),
        listStyleImage: !0,
        listStyleImg: A.prop('listStyleImage'),
    },
    Ix = {
        border: '0px',
        clip: 'rect(0, 0, 0, 0)',
        width: '1px',
        height: '1px',
        margin: '-1px',
        padding: '0px',
        overflow: 'hidden',
        whiteSpace: 'nowrap',
        position: 'absolute',
    },
    Rx = {
        position: 'static',
        width: 'auto',
        height: 'auto',
        clip: 'auto',
        padding: '0',
        margin: '0',
        overflow: 'visible',
        whiteSpace: 'normal',
    },
    Uc = function (t, r, n) {
        var i = {},
            o = ms(t, r, {})
        for (var a in o) {
            var s = a in n && n[a] != null
            s || (i[a] = o[a])
        }
        return i
    },
    Px = {
        srOnly: {
            transform: function (t) {
                return t === !0 ? Ix : t === 'focusable' ? Rx : {}
            },
        },
        layerStyle: {
            processResult: !0,
            transform: function (t, r, n) {
                return Uc(r, 'layerStyles.' + t, n)
            },
        },
        textStyle: {
            processResult: !0,
            transform: function (t, r, n) {
                return Uc(r, 'textStyles.' + t, n)
            },
        },
        apply: {
            processResult: !0,
            transform: function (t, r, n) {
                return Uc(r, t, n)
            },
        },
    },
    To = {
        position: !0,
        pos: A.prop('position'),
        zIndex: A.prop('zIndex', 'zIndices'),
        inset: A.spaceT(['top', 'right', 'bottom', 'left']),
        insetX: A.spaceT(['left', 'right']),
        insetInline: A.spaceT('insetInline'),
        insetY: A.spaceT(['top', 'bottom']),
        insetBlock: A.spaceT('insetBlock'),
        top: A.spaceT('top'),
        insetBlockStart: A.spaceT('insetBlockStart'),
        bottom: A.spaceT('bottom'),
        insetBlockEnd: A.spaceT('insetBlockEnd'),
        left: A.spaceT('left'),
        insetInlineStart: A.logical({
            scale: 'space',
            property: { ltr: 'left', rtl: 'right' },
        }),
        right: A.spaceT('right'),
        insetInlineEnd: A.logical({
            scale: 'space',
            property: { ltr: 'right', rtl: 'left' },
        }),
    }
Object.assign(To, {
    insetStart: To.insetInlineStart,
    insetEnd: To.insetInlineEnd,
})
var Fx = {
        ring: { transform: fe.ring },
        ringColor: A.colors('--chakra-ring-color'),
        ringOffset: A.prop('--chakra-ring-offset-width'),
        ringOffsetColor: A.colors('--chakra-ring-offset-color'),
        ringInset: A.prop('--chakra-ring-inset'),
    },
    we = {
        margin: A.spaceT('margin'),
        marginTop: A.spaceT('marginTop'),
        marginBlockStart: A.spaceT('marginBlockStart'),
        marginRight: A.spaceT('marginRight'),
        marginInlineEnd: A.spaceT('marginInlineEnd'),
        marginBottom: A.spaceT('marginBottom'),
        marginBlockEnd: A.spaceT('marginBlockEnd'),
        marginLeft: A.spaceT('marginLeft'),
        marginInlineStart: A.spaceT('marginInlineStart'),
        marginX: A.spaceT(['marginInlineStart', 'marginInlineEnd']),
        marginInline: A.spaceT('marginInline'),
        marginY: A.spaceT(['marginTop', 'marginBottom']),
        marginBlock: A.spaceT('marginBlock'),
        padding: A.space('padding'),
        paddingTop: A.space('paddingTop'),
        paddingBlockStart: A.space('paddingBlockStart'),
        paddingRight: A.space('paddingRight'),
        paddingBottom: A.space('paddingBottom'),
        paddingBlockEnd: A.space('paddingBlockEnd'),
        paddingLeft: A.space('paddingLeft'),
        paddingInlineStart: A.space('paddingInlineStart'),
        paddingInlineEnd: A.space('paddingInlineEnd'),
        paddingX: A.space(['paddingInlineStart', 'paddingInlineEnd']),
        paddingInline: A.space('paddingInline'),
        paddingY: A.space(['paddingTop', 'paddingBottom']),
        paddingBlock: A.space('paddingBlock'),
    }
Object.assign(we, {
    m: we.margin,
    mt: we.marginTop,
    mr: we.marginRight,
    me: we.marginInlineEnd,
    marginEnd: we.marginInlineEnd,
    mb: we.marginBottom,
    ml: we.marginLeft,
    ms: we.marginInlineStart,
    marginStart: we.marginInlineStart,
    mx: we.marginX,
    my: we.marginY,
    p: we.padding,
    pt: we.paddingTop,
    py: we.paddingY,
    px: we.paddingX,
    pb: we.paddingBottom,
    pl: we.paddingLeft,
    ps: we.paddingInlineStart,
    paddingStart: we.paddingInlineStart,
    pr: we.paddingRight,
    pe: we.paddingInlineEnd,
    paddingEnd: we.paddingInlineEnd,
})
var Dx = {
        textDecorationColor: A.colors('textDecorationColor'),
        textDecoration: !0,
        textDecor: { property: 'textDecoration' },
        textDecorationLine: !0,
        textDecorationStyle: !0,
        textDecorationThickness: !0,
        textUnderlineOffset: !0,
        textShadow: A.shadows('textShadow'),
    },
    Bx = {
        clipPath: !0,
        transform: A.propT('transform', fe.transform),
        transformOrigin: !0,
        translateX: A.spaceT('--chakra-translate-x'),
        translateY: A.spaceT('--chakra-translate-y'),
        skewX: A.degreeT('--chakra-skew-x'),
        skewY: A.degreeT('--chakra-skew-y'),
        scaleX: A.prop('--chakra-scale-x'),
        scaleY: A.prop('--chakra-scale-y'),
        scale: A.prop(['--chakra-scale-x', '--chakra-scale-y']),
        rotate: A.degreeT('--chakra-rotate'),
    },
    Nx = {
        transition: !0,
        transitionDelay: !0,
        animation: !0,
        willChange: !0,
        transitionDuration: A.prop('transitionDuration', 'transition.duration'),
        transitionProperty: A.prop('transitionProperty', 'transition.property'),
        transitionTimingFunction: A.prop(
            'transitionTimingFunction',
            'transition.easing'
        ),
    },
    Ux = {
        fontFamily: A.prop('fontFamily', 'fonts'),
        fontSize: A.prop('fontSize', 'fontSizes', fe.px),
        fontWeight: A.prop('fontWeight', 'fontWeights'),
        lineHeight: A.prop('lineHeight', 'lineHeights'),
        letterSpacing: A.prop('letterSpacing', 'letterSpacings'),
        textAlign: !0,
        fontStyle: !0,
        wordBreak: !0,
        overflowWrap: !0,
        textOverflow: !0,
        textTransform: !0,
        whiteSpace: !0,
        noOfLines: {
            static: {
                overflow: 'hidden',
                textOverflow: 'ellipsis',
                display: '-webkit-box',
                WebkitBoxOrient: 'vertical',
                WebkitLineClamp: 'var(--chakra-line-clamp)',
            },
            property: '--chakra-line-clamp',
        },
        isTruncated: {
            transform: function (t) {
                if (t === !0)
                    return {
                        overflow: 'hidden',
                        textOverflow: 'ellipsis',
                        whiteSpace: 'nowrap',
                    }
            },
        },
    }
function K0(e, t) {
    ;(t == null || t > e.length) && (t = e.length)
    for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r]
    return n
}
function Mx(e, t) {
    if (!!e) {
        if (typeof e == 'string') return K0(e, t)
        var r = Object.prototype.toString.call(e).slice(8, -1)
        if (
            (r === 'Object' && e.constructor && (r = e.constructor.name),
            r === 'Map' || r === 'Set')
        )
            return Array.from(e)
        if (
            r === 'Arguments' ||
            /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
        )
            return K0(e, t)
    }
}
function Ox(e, t) {
    var r =
        (typeof Symbol != 'undefined' && e[Symbol.iterator]) || e['@@iterator']
    if (r) return (r = r.call(e)).next.bind(r)
    if (
        Array.isArray(e) ||
        (r = Mx(e)) ||
        (t && e && typeof e.length == 'number')
    ) {
        r && (e = r)
        var n = 0
        return function () {
            return n >= e.length ? { done: !0 } : { done: !1, value: e[n++] }
        }
    }
    throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)
}
var ln = {
        hover: function (t) {
            return t + ':hover &, ' + t + '[data-hover] &'
        },
        focus: function (t) {
            return t + ':focus &, ' + t + '[data-focus] &'
        },
        focusVisible: function (t) {
            return t + ':focus-visible &'
        },
        active: function (t) {
            return t + ':active &, ' + t + '[data-active] &'
        },
        disabled: function (t) {
            return t + ':disabled &, ' + t + '[data-disabled] &'
        },
        invalid: function (t) {
            return t + ':invalid &, ' + t + '[data-invalid] &'
        },
        checked: function (t) {
            return t + ':checked &, ' + t + '[data-checked] &'
        },
        indeterminate: function (t) {
            return (
                t +
                ':indeterminate &, ' +
                t +
                '[aria-checked=mixed] &, ' +
                t +
                '[data-indeterminate] &'
            )
        },
        readOnly: function (t) {
            return (
                t +
                ':read-only &, ' +
                t +
                '[readonly] &, ' +
                t +
                '[data-read-only] &'
            )
        },
        expanded: function (t) {
            return (
                t +
                ':read-only &, ' +
                t +
                '[aria-expanded=true] &, ' +
                t +
                '[data-expanded] &'
            )
        },
    },
    un = function (t) {
        return $x(t, '[role=group]', '[data-group]', '.group')
    },
    $x = function (t) {
        for (
            var r = arguments.length, n = new Array(r > 1 ? r - 1 : 0), i = 1;
            i < r;
            i++
        )
            n[i - 1] = arguments[i]
        return n.map(t).join(', ')
    },
    Mc = {
        _hover: '&:hover, &[data-hover]',
        _active: '&:active, &[data-active]',
        _focus: '&:focus, &[data-focus]',
        _highlighted: '&[data-highlighted]',
        _focusWithin: '&:focus-within',
        _focusVisible: '&:focus-visible',
        _disabled: '&[disabled], &[aria-disabled=true], &[data-disabled]',
        _readOnly: '&[aria-readonly=true], &[readonly], &[data-readonly]',
        _before: '&::before',
        _after: '&::after',
        _empty: '&:empty',
        _expanded: '&[aria-expanded=true], &[data-expanded]',
        _checked: '&[aria-checked=true], &[data-checked]',
        _grabbed: '&[aria-grabbed=true], &[data-grabbed]',
        _pressed: '&[aria-pressed=true], &[data-pressed]',
        _invalid: '&[aria-invalid=true], &[data-invalid]',
        _valid: '&[data-valid], &[data-state=valid]',
        _loading: '&[data-loading], &[aria-busy=true]',
        _selected: '&[aria-selected=true], &[data-selected]',
        _hidden: '&[hidden], &[data-hidden]',
        _autofill: '&:-webkit-autofill',
        _even: '&:nth-of-type(even)',
        _odd: '&:nth-of-type(odd)',
        _first: '&:first-of-type',
        _last: '&:last-of-type',
        _notFirst: '&:not(:first-of-type)',
        _notLast: '&:not(:last-of-type)',
        _visited: '&:visited',
        _activeLink: '&[aria-current=page]',
        _activeStep: '&[aria-current=step]',
        _indeterminate:
            '&:indeterminate, &[aria-checked=mixed], &[data-indeterminate]',
        _groupHover: un(ln.hover),
        _groupFocus: un(ln.focus),
        _groupFocusVisible: un(ln.focusVisible),
        _groupActive: un(ln.active),
        _groupDisabled: un(ln.disabled),
        _groupInvalid: un(ln.invalid),
        _groupChecked: un(ln.checked),
        _placeholder: '&::placeholder',
        _fullScreen: '&:fullscreen',
        _selection: '&::selection',
        _rtl: '[dir=rtl] &',
        _mediaDark: '@media (prefers-color-scheme: dark)',
        _dark: '.chakra-ui-dark &, [data-theme=dark] &, &[data-theme=dark]',
        _light: '.chakra-ui-light &, [data-theme=light] &, &[data-theme=light]',
    },
    zx = kc(Mc),
    Oc = fr(
        {},
        bs,
        se,
        Ex,
        Cs,
        Et,
        kx,
        Fx,
        Tx,
        V0,
        Px,
        To,
        Nc,
        we,
        Ux,
        Dx,
        Bx,
        Ax,
        Nx
    )
Object.assign({}, we, Et, Cs, V0, To)
var Lx = [].concat(kc(Oc), zx),
    jx = ni({}, Oc, Mc),
    Wx = function (t) {
        return t in jx
    },
    Hx = function (t) {
        return function (r) {
            if (!r.__breakpoints) return t
            var n = r.__breakpoints,
                i = n.isResponsive,
                o = n.toArrayValue,
                a = n.media,
                s = {}
            for (var l in t) {
                var u = Qt(t[l], r)
                if (u != null) {
                    if (((u = Ut(u) && i(u) ? o(u) : u), !Array.isArray(u))) {
                        s[l] = u
                        continue
                    }
                    for (
                        var d = u.slice(0, a.length).length, m = 0;
                        m < d;
                        m += 1
                    ) {
                        var p = a == null ? void 0 : a[m]
                        if (!p) {
                            s[l] = u[m]
                            continue
                        }
                        ;(s[p] = s[p] || {}), u[m] != null && (s[p][l] = u[m])
                    }
                }
            }
            return s
        }
    },
    Vx = function (t, r) {
        return t.startsWith('--') && Ec(r) && !C0(r)
    },
    Kx = function (t, r) {
        var n, i
        if (r == null) return r
        var o = function (m) {
                var p, x
                return (p = t.__cssMap) == null || (x = p[m]) == null
                    ? void 0
                    : x.varRef
            },
            a = function (m) {
                var p
                return (p = o(m)) != null ? p : m
            },
            s = r.split(',').map(function (d) {
                return d.trim()
            }),
            l = s[0],
            u = s[1]
        return (r = (n = (i = o(l)) != null ? i : a(u)) != null ? n : a(r)), r
    }
function qx(e) {
    var t = e.configs,
        r = t === void 0 ? {} : t,
        n = e.pseudos,
        i = n === void 0 ? {} : n,
        o = e.theme,
        a = function s(l, u) {
            u === void 0 && (u = !1)
            var d = Qt(l, o),
                m = Hx(d)(o),
                p = {}
            for (var x in m) {
                var _,
                    b,
                    g,
                    v,
                    h,
                    C = m[x],
                    E = Qt(C, o)
                x in i && (x = i[x]), Vx(x, E) && (E = Kx(o, E))
                var D = r[x]
                if ((D === !0 && (D = { property: x }), Ut(E))) {
                    var P
                    ;(p[x] = (P = p[x]) != null ? P : {}),
                        (p[x] = fr({}, p[x], s(E, !0)))
                    continue
                }
                var F =
                    (_ =
                        (b = D) == null || b.transform == null
                            ? void 0
                            : b.transform(E, o, d)) != null
                        ? _
                        : E
                F = (g = D) != null && g.processResult ? s(F, !0) : F
                var O = Qt((v = D) == null ? void 0 : v.property, o)
                if (!u && (h = D) != null && h.static) {
                    var M = Qt(D.static, o)
                    p = fr({}, p, M)
                }
                if (O && Array.isArray(O)) {
                    for (var L = Ox(O), q; !(q = L()).done; ) {
                        var J = q.value
                        p[J] = F
                    }
                    continue
                }
                if (O) {
                    O === '&' && Ut(F) ? (p = fr({}, p, F)) : (p[O] = F)
                    continue
                }
                if (Ut(F)) {
                    p = fr({}, p, F)
                    continue
                }
                p[x] = F
            }
            return p
        }
    return a
}
var q0 = function (t) {
    return function (r) {
        var n = qx({ theme: r, pseudos: Mc, configs: Oc })
        return n(t)
    }
}
function G0(e) {
    return Ut(e) && e.reference ? e.reference : String(e)
}
var _s = function (t) {
        for (
            var r = arguments.length, n = new Array(r > 1 ? r - 1 : 0), i = 1;
            i < r;
            i++
        )
            n[i - 1] = arguments[i]
        return n
            .map(G0)
            .join(' ' + t + ' ')
            .replace(/calc/g, '')
    },
    Y0 = function () {
        for (var t = arguments.length, r = new Array(t), n = 0; n < t; n++)
            r[n] = arguments[n]
        return 'calc(' + _s.apply(void 0, ['+'].concat(r)) + ')'
    },
    X0 = function () {
        for (var t = arguments.length, r = new Array(t), n = 0; n < t; n++)
            r[n] = arguments[n]
        return 'calc(' + _s.apply(void 0, ['-'].concat(r)) + ')'
    },
    $c = function () {
        for (var t = arguments.length, r = new Array(t), n = 0; n < t; n++)
            r[n] = arguments[n]
        return 'calc(' + _s.apply(void 0, ['*'].concat(r)) + ')'
    },
    Q0 = function () {
        for (var t = arguments.length, r = new Array(t), n = 0; n < t; n++)
            r[n] = arguments[n]
        return 'calc(' + _s.apply(void 0, ['/'].concat(r)) + ')'
    },
    J0 = function (t) {
        var r = G0(t)
        return r != null && !Number.isNaN(parseFloat(r))
            ? String(r).startsWith('-')
                ? String(r).slice(1)
                : '-' + r
            : $c(r, -1)
    },
    cn = Object.assign(
        function (e) {
            return {
                add: function () {
                    for (
                        var r = arguments.length, n = new Array(r), i = 0;
                        i < r;
                        i++
                    )
                        n[i] = arguments[i]
                    return cn(Y0.apply(void 0, [e].concat(n)))
                },
                subtract: function () {
                    for (
                        var r = arguments.length, n = new Array(r), i = 0;
                        i < r;
                        i++
                    )
                        n[i] = arguments[i]
                    return cn(X0.apply(void 0, [e].concat(n)))
                },
                multiply: function () {
                    for (
                        var r = arguments.length, n = new Array(r), i = 0;
                        i < r;
                        i++
                    )
                        n[i] = arguments[i]
                    return cn($c.apply(void 0, [e].concat(n)))
                },
                divide: function () {
                    for (
                        var r = arguments.length, n = new Array(r), i = 0;
                        i < r;
                        i++
                    )
                        n[i] = arguments[i]
                    return cn(Q0.apply(void 0, [e].concat(n)))
                },
                negate: function () {
                    return cn(J0(e))
                },
                toString: function () {
                    return e.toString()
                },
            }
        },
        { add: Y0, subtract: X0, multiply: $c, divide: Q0, negate: J0 }
    )
function Gx(e, t) {
    return t === void 0 && (t = '-'), e.replace(/\s+/g, t)
}
function Z0(e) {
    var t = Gx(e.toString())
    if (t.includes('\\.')) return e
    var r = !Number.isInteger(parseFloat(e.toString()))
    return r ? t.replace('.', '\\.') : e
}
function Yx(e, t) {
    return t === void 0 && (t = ''), [t, Z0(e)].filter(Boolean).join('-')
}
function Xx(e, t) {
    return 'var(' + Z0(e) + (t ? ', ' + t : '') + ')'
}
function Qx(e, t) {
    return t === void 0 && (t = ''), '--' + Yx(e, t)
}
function em(e, t, r) {
    var n = Qx(e, r)
    return { variable: n, reference: Xx(n, t) }
}
function Jx(e, t) {
    var r = { cssMap: {}, cssVars: {} }
    return (
        OS(e, function (n, i) {
            var o,
                a = i[0],
                s = (o = zc[a]) != null ? o : zc.defaultHandler,
                l = s(i, n, t),
                u = l.cssVars,
                d = l.cssMap
            Object.assign(r.cssVars, u), Object.assign(r.cssMap, d)
        }),
        r
    )
}
var zc = {
    space: function (t, r, n) {
        var i,
            o = zc.defaultHandler(t, r, n),
            a = t[0],
            s = t.slice(1),
            l = a + '.-' + s.join('.'),
            u = t.join('-'),
            d = em(u, void 0, n.cssVarPrefix),
            m = d.variable,
            p = d.reference,
            x = cn.negate(r),
            _ = cn.negate(p)
        return {
            cssVars: o.cssVars,
            cssMap: ni(
                {},
                o.cssMap,
                ((i = {}),
                (i[l] = { value: '' + x, var: '' + m, varRef: _ }),
                i)
            ),
        }
    },
    defaultHandler: function (t, r, n) {
        var i,
            o,
            a = t.join('.'),
            s = t.join('-'),
            l = em(s, void 0, n.cssVarPrefix),
            u = l.variable,
            d = l.reference
        return {
            cssVars: ((i = {}), (i[u] = r), i),
            cssMap: ((o = {}), (o[a] = { value: r, var: u, varRef: d }), o),
        }
    },
}
function Zx(e, t) {
    if (e == null) return {}
    var r = {},
        n = Object.keys(e),
        i,
        o
    for (o = 0; o < n.length; o++)
        (i = n[o]), !(t.indexOf(i) >= 0) && (r[i] = e[i])
    return r
}
var ew = ['__cssMap', '__cssVars', '__breakpoints'],
    tw = [
        'colors',
        'borders',
        'borderWidths',
        'borderStyles',
        'fonts',
        'fontSizes',
        'fontWeights',
        'letterSpacings',
        'lineHeights',
        'radii',
        'space',
        'shadows',
        'sizes',
        'zIndices',
        'transition',
        'blur',
    ]
function rw(e) {
    var t = tw
    return AS(e, t)
}
function nw(e) {
    e.__cssMap, e.__cssVars, e.__breakpoints
    var t = Zx(e, ew)
    return t
}
function iw(e) {
    var t,
        r = nw(e),
        n = rw(r),
        i = (t = r.config) == null ? void 0 : t.cssVarPrefix,
        o = Jx(n, { cssVarPrefix: i }),
        a = o.cssMap,
        s = o.cssVars,
        l = {
            '--chakra-ring-inset': 'var(--chakra-empty,/*!*/ /*!*/)',
            '--chakra-ring-offset-width': '0px',
            '--chakra-ring-offset-color': '#fff',
            '--chakra-ring-color': 'rgba(66, 153, 225, 0.6)',
            '--chakra-ring-offset-shadow': '0 0 #0000',
            '--chakra-ring-shadow': '0 0 #0000',
            '--chakra-space-x-reverse': '0',
            '--chakra-space-y-reverse': '0',
        }
    return (
        Object.assign(r, {
            __cssVars: ni({}, l, s),
            __cssMap: a,
            __breakpoints: BS(r.breakpoints),
        }),
        r
    )
}
var ow = typeof Element != 'undefined',
    aw = typeof Map == 'function',
    sw = typeof Set == 'function',
    lw = typeof ArrayBuffer == 'function' && !!ArrayBuffer.isView
function Es(e, t) {
    if (e === t) return !0
    if (e && t && typeof e == 'object' && typeof t == 'object') {
        if (e.constructor !== t.constructor) return !1
        var r, n, i
        if (Array.isArray(e)) {
            if (((r = e.length), r != t.length)) return !1
            for (n = r; n-- != 0; ) if (!Es(e[n], t[n])) return !1
            return !0
        }
        var o
        if (aw && e instanceof Map && t instanceof Map) {
            if (e.size !== t.size) return !1
            for (o = e.entries(); !(n = o.next()).done; )
                if (!t.has(n.value[0])) return !1
            for (o = e.entries(); !(n = o.next()).done; )
                if (!Es(n.value[1], t.get(n.value[0]))) return !1
            return !0
        }
        if (sw && e instanceof Set && t instanceof Set) {
            if (e.size !== t.size) return !1
            for (o = e.entries(); !(n = o.next()).done; )
                if (!t.has(n.value[0])) return !1
            return !0
        }
        if (lw && ArrayBuffer.isView(e) && ArrayBuffer.isView(t)) {
            if (((r = e.length), r != t.length)) return !1
            for (n = r; n-- != 0; ) if (e[n] !== t[n]) return !1
            return !0
        }
        if (e.constructor === RegExp)
            return e.source === t.source && e.flags === t.flags
        if (e.valueOf !== Object.prototype.valueOf)
            return e.valueOf() === t.valueOf()
        if (e.toString !== Object.prototype.toString)
            return e.toString() === t.toString()
        if (((i = Object.keys(e)), (r = i.length), r !== Object.keys(t).length))
            return !1
        for (n = r; n-- != 0; )
            if (!Object.prototype.hasOwnProperty.call(t, i[n])) return !1
        if (ow && e instanceof Element) return !1
        for (n = r; n-- != 0; )
            if (
                !(
                    (i[n] === '_owner' || i[n] === '__v' || i[n] === '__o') &&
                    e.$$typeof
                ) &&
                !Es(e[i[n]], t[i[n]])
            )
                return !1
        return !0
    }
    return e !== e && t !== t
}
var uw = function (t, r) {
        try {
            return Es(t, r)
        } catch (n) {
            if ((n.message || '').match(/stack|recursion/i))
                return (
                    console.warn(
                        'react-fast-compare cannot handle circular refs'
                    ),
                    !1
                )
            throw n
        }
    },
    cw =
        /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,
    fw = s0(function (e) {
        return (
            cw.test(e) ||
            (e.charCodeAt(0) === 111 &&
                e.charCodeAt(1) === 110 &&
                e.charCodeAt(2) < 91)
        )
    }),
    dw = fw,
    hw = function (t) {
        return t !== 'theme'
    },
    tm = function (t) {
        return typeof t == 'string' && t.charCodeAt(0) > 96 ? dw : hw
    },
    rm = function (t, r, n) {
        var i
        if (r) {
            var o = r.shouldForwardProp
            i =
                t.__emotion_forwardProp && o
                    ? function (a) {
                          return t.__emotion_forwardProp(a) && o(a)
                      }
                    : o
        }
        return typeof i != 'function' && n && (i = t.__emotion_forwardProp), i
    },
    pw = function e(t, r) {
        var n = t.__emotion_real === t,
            i = (n && t.__emotion_base) || t,
            o,
            a
        r !== void 0 && ((o = r.label), (a = r.target))
        var s = rm(t, r, n),
            l = s || tm(i),
            u = !l('as')
        return function () {
            var d = arguments,
                m =
                    n && t.__emotion_styles !== void 0
                        ? t.__emotion_styles.slice(0)
                        : []
            if (
                (o !== void 0 && m.push('label:' + o + ';'),
                d[0] == null || d[0].raw === void 0)
            )
                m.push.apply(m, d)
            else {
                m.push(d[0][0])
                for (var p = d.length, x = 1; x < p; x++) m.push(d[x], d[0][x])
            }
            var _ = S0(function (b, g, v) {
                var h = (u && b.as) || i,
                    C = '',
                    E = [],
                    D = b
                if (b.theme == null) {
                    D = {}
                    for (var P in b) D[P] = b[P]
                    D.theme = T.exports.useContext(bo)
                }
                typeof b.className == 'string'
                    ? (C = pS(g.registered, E, b.className))
                    : b.className != null && (C = b.className + ' ')
                var F = wc(m.concat(E), g.registered, D)
                h0(g, F, typeof h == 'string'),
                    (C += g.key + '-' + F.name),
                    a !== void 0 && (C += ' ' + a)
                var O = u && s === void 0 ? tm(h) : l,
                    M = {}
                for (var L in b) (u && L === 'as') || (O(L) && (M[L] = b[L]))
                ;(M.className = C), (M.ref = v)
                var q = T.exports.createElement(h, M)
                return q
            })
            return (
                (_.displayName =
                    o !== void 0
                        ? o
                        : 'Styled(' +
                          (typeof i == 'string'
                              ? i
                              : i.displayName || i.name || 'Component') +
                          ')'),
                (_.defaultProps = t.defaultProps),
                (_.__emotion_real = _),
                (_.__emotion_base = i),
                (_.__emotion_styles = m),
                (_.__emotion_forwardProp = s),
                Object.defineProperty(_, 'toString', {
                    value: function () {
                        return '.' + a
                    },
                }),
                (_.withComponent = function (b, g) {
                    return e(
                        b,
                        is({}, r, g, { shouldForwardProp: rm(_, g, !0) })
                    ).apply(void 0, m)
                }),
                _
            )
        }
    },
    mw = [
        'a',
        'abbr',
        'address',
        'area',
        'article',
        'aside',
        'audio',
        'b',
        'base',
        'bdi',
        'bdo',
        'big',
        'blockquote',
        'body',
        'br',
        'button',
        'canvas',
        'caption',
        'cite',
        'code',
        'col',
        'colgroup',
        'data',
        'datalist',
        'dd',
        'del',
        'details',
        'dfn',
        'dialog',
        'div',
        'dl',
        'dt',
        'em',
        'embed',
        'fieldset',
        'figcaption',
        'figure',
        'footer',
        'form',
        'h1',
        'h2',
        'h3',
        'h4',
        'h5',
        'h6',
        'head',
        'header',
        'hgroup',
        'hr',
        'html',
        'i',
        'iframe',
        'img',
        'input',
        'ins',
        'kbd',
        'keygen',
        'label',
        'legend',
        'li',
        'link',
        'main',
        'map',
        'mark',
        'marquee',
        'menu',
        'menuitem',
        'meta',
        'meter',
        'nav',
        'noscript',
        'object',
        'ol',
        'optgroup',
        'option',
        'output',
        'p',
        'param',
        'picture',
        'pre',
        'progress',
        'q',
        'rp',
        'rt',
        'ruby',
        's',
        'samp',
        'script',
        'section',
        'select',
        'small',
        'source',
        'span',
        'strong',
        'style',
        'sub',
        'summary',
        'sup',
        'table',
        'tbody',
        'td',
        'textarea',
        'tfoot',
        'th',
        'thead',
        'time',
        'title',
        'tr',
        'track',
        'u',
        'ul',
        'var',
        'video',
        'wbr',
        'circle',
        'clipPath',
        'defs',
        'ellipse',
        'foreignObject',
        'g',
        'image',
        'line',
        'linearGradient',
        'mask',
        'path',
        'pattern',
        'polygon',
        'polyline',
        'radialGradient',
        'rect',
        'stop',
        'svg',
        'text',
        'tspan',
    ],
    Lc = pw.bind()
mw.forEach(function (e) {
    Lc[e] = Lc(e)
})
function jc() {
    return (
        (jc =
            Object.assign ||
            function (e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = arguments[t]
                    for (var n in r)
                        Object.prototype.hasOwnProperty.call(r, n) &&
                            (e[n] = r[n])
                }
                return e
            }),
        jc.apply(this, arguments)
    )
}
var vw = function (t) {
    var r = t.cssVarsRoot,
        n = r === void 0 ? ':host, :root' : r,
        i = t.theme,
        o = t.children,
        a = T.exports.useMemo(
            function () {
                return iw(i)
            },
            [i]
        )
    return T.exports.createElement(
        bS,
        { theme: a },
        T.exports.createElement(bc, {
            styles: function (l) {
                var u
                return (u = {}), (u[n] = l.__cssVars), u
            },
        }),
        o
    )
}
function gw() {
    var e = T.exports.useContext(bo)
    if (!e)
        throw Error(
            'useTheme: `theme` is undefined. Seems you forgot to wrap your app in `<ChakraProvider />` or `<ThemeProvider />`'
        )
    return e
}
var nm = Eo({
        name: 'StylesContext',
        errorMessage:
            'useStyles: `styles` is undefined. Seems you forgot to wrap the components in `<StylesProvider />` ',
    }),
    Ao = nm[0],
    dr = nm[1],
    yw = function () {
        var t = $0(),
            r = t.colorMode
        return T.exports.createElement(bc, {
            styles: function (i) {
                var o = ms(i, 'styles.global'),
                    a = Qt(o, { theme: i, colorMode: r })
                if (!!a) {
                    var s = q0(a)(i)
                    return s
                }
            },
        })
    },
    Sw = [
        'a',
        'b',
        'article',
        'aside',
        'blockquote',
        'button',
        'caption',
        'cite',
        'circle',
        'code',
        'dd',
        'div',
        'dl',
        'dt',
        'fieldset',
        'figcaption',
        'figure',
        'footer',
        'form',
        'h1',
        'h2',
        'h3',
        'h4',
        'h5',
        'h6',
        'header',
        'hr',
        'img',
        'input',
        'kbd',
        'label',
        'li',
        'main',
        'mark',
        'nav',
        'ol',
        'p',
        'path',
        'pre',
        'q',
        'rect',
        's',
        'svg',
        'section',
        'select',
        'strong',
        'small',
        'span',
        'sub',
        'sup',
        'table',
        'tbody',
        'td',
        'textarea',
        'tfoot',
        'th',
        'thead',
        'tr',
        'ul',
    ]
function ze(e) {
    return _0(e, ['styleConfig', 'size', 'variant', 'colorScheme'])
}
function xw() {
    var e = $0(),
        t = gw()
    return jc({}, e, { theme: t })
}
function Wc(e, t) {
    if (e == null) return {}
    var r = {},
        n = Object.keys(e),
        i,
        o
    for (o = 0; o < n.length; o++)
        (i = n[o]), !(t.indexOf(i) >= 0) && (r[i] = e[i])
    return r
}
var ww = new Set(
        [].concat(Lx, [
            'textStyle',
            'layerStyle',
            'apply',
            'isTruncated',
            'noOfLines',
            'focusBorderColor',
            'errorBorderColor',
            'as',
            '__css',
            'css',
            'sx',
        ])
    ),
    bw = new Set(['htmlWidth', 'htmlHeight', 'htmlSize']),
    Cw = function (t) {
        return bw.has(t) || !ww.has(t)
    },
    _w = ['theme', 'css', '__css', 'sx'],
    Ew = ['baseStyle'],
    kw = function (t) {
        var r = t.baseStyle
        return function (n) {
            n.theme
            var i = n.css,
                o = n.__css,
                a = n.sx,
                s = Wc(n, _w),
                l = E0(s, function (p, x) {
                    return Wx(x)
                }),
                u = Qt(r, n),
                d = Object.assign({}, o, u, vs(l), a),
                m = q0(d)(n.theme)
            return i ? [m, i] : m
        }
    }
function Tw(e, t) {
    var r = t != null ? t : {},
        n = r.baseStyle,
        i = Wc(r, Ew)
    i.shouldForwardProp || (i.shouldForwardProp = Cw)
    var o = kw({ baseStyle: n })
    return Lc(e, i)(o)
}
var Y = Tw
Sw.forEach(function (e) {
    Y[e] = Y(e)
})
function Q(e) {
    return T.exports.forwardRef(e)
}
var Aw = ['styleConfig']
function kt(e, t, r) {
    var n
    t === void 0 && (t = {}), r === void 0 && (r = {})
    var i = t,
        o = i.styleConfig,
        a = Wc(i, Aw),
        s = xw(),
        l = s.theme,
        u = s.colorMode,
        d = ms(l, 'components.' + e),
        m = o || d,
        p = fr(
            { theme: l, colorMode: u },
            (n = m == null ? void 0 : m.defaultProps) != null ? n : {},
            vs(_0(a, ['children']))
        ),
        x = T.exports.useRef({})
    if (m) {
        var _,
            b,
            g,
            v,
            h,
            C,
            E = Qt((_ = m.baseStyle) != null ? _ : {}, p),
            D = Qt(
                (b = (g = m.variants) == null ? void 0 : g[p.variant]) != null
                    ? b
                    : {},
                p
            ),
            P = Qt(
                (v = (h = m.sizes) == null ? void 0 : h[p.size]) != null
                    ? v
                    : {},
                p
            ),
            F = fr({}, E, P, D)
        ;(C = r) != null &&
            C.isMultiPart &&
            m.parts &&
            m.parts.forEach(function (M) {
                var L
                F[M] = (L = F[M]) != null ? L : {}
            })
        var O = uw(x.current, F)
        O || (x.current = F)
    }
    return x.current
}
function fn(e, t) {
    return kt(e, t, { isMultiPart: !0 })
}
var Iw = function (t) {
    var r = t.children,
        n = t.colorModeManager,
        i = t.portalZIndex,
        o = t.resetCSS,
        a = o === void 0 ? !0 : o,
        s = t.theme,
        l = s === void 0 ? {} : s,
        u = t.environment,
        d = t.cssVarsRoot,
        m = T.exports.createElement(ex, { environment: u }, r)
    return T.exports.createElement(
        jS,
        null,
        T.exports.createElement(
            vw,
            { theme: l, cssVarsRoot: d },
            T.exports.createElement(
                lx,
                { colorModeManager: n, options: l.config },
                a && T.exports.createElement(ES, null),
                T.exports.createElement(yw, null),
                i ? T.exports.createElement(GS, { zIndex: i }, m) : m
            )
        )
    )
}
function Ve(e, t) {
    Rw(e) && (e = '100%')
    var r = Pw(e)
    return (
        (e = t === 360 ? e : Math.min(t, Math.max(0, parseFloat(e)))),
        r && (e = parseInt(String(e * t), 10) / 100),
        Math.abs(e - t) < 1e-6
            ? 1
            : (t === 360
                  ? (e = (e < 0 ? (e % t) + t : e % t) / parseFloat(String(t)))
                  : (e = (e % t) / parseFloat(String(t))),
              e)
    )
}
function ks(e) {
    return Math.min(1, Math.max(0, e))
}
function Rw(e) {
    return typeof e == 'string' && e.indexOf('.') !== -1 && parseFloat(e) === 1
}
function Pw(e) {
    return typeof e == 'string' && e.indexOf('%') !== -1
}
function im(e) {
    return (e = parseFloat(e)), (isNaN(e) || e < 0 || e > 1) && (e = 1), e
}
function Ts(e) {
    return e <= 1 ? Number(e) * 100 + '%' : e
}
function dn(e) {
    return e.length === 1 ? '0' + e : String(e)
}
function Fw(e, t, r) {
    return { r: Ve(e, 255) * 255, g: Ve(t, 255) * 255, b: Ve(r, 255) * 255 }
}
function om(e, t, r) {
    ;(e = Ve(e, 255)), (t = Ve(t, 255)), (r = Ve(r, 255))
    var n = Math.max(e, t, r),
        i = Math.min(e, t, r),
        o = 0,
        a = 0,
        s = (n + i) / 2
    if (n === i) (a = 0), (o = 0)
    else {
        var l = n - i
        switch (((a = s > 0.5 ? l / (2 - n - i) : l / (n + i)), n)) {
            case e:
                o = (t - r) / l + (t < r ? 6 : 0)
                break
            case t:
                o = (r - e) / l + 2
                break
            case r:
                o = (e - t) / l + 4
                break
        }
        o /= 6
    }
    return { h: o, s: a, l: s }
}
function Hc(e, t, r) {
    return (
        r < 0 && (r += 1),
        r > 1 && (r -= 1),
        r < 1 / 6
            ? e + (t - e) * (6 * r)
            : r < 1 / 2
            ? t
            : r < 2 / 3
            ? e + (t - e) * (2 / 3 - r) * 6
            : e
    )
}
function Dw(e, t, r) {
    var n, i, o
    if (((e = Ve(e, 360)), (t = Ve(t, 100)), (r = Ve(r, 100)), t === 0))
        (i = r), (o = r), (n = r)
    else {
        var a = r < 0.5 ? r * (1 + t) : r + t - r * t,
            s = 2 * r - a
        ;(n = Hc(s, a, e + 1 / 3)), (i = Hc(s, a, e)), (o = Hc(s, a, e - 1 / 3))
    }
    return { r: n * 255, g: i * 255, b: o * 255 }
}
function am(e, t, r) {
    ;(e = Ve(e, 255)), (t = Ve(t, 255)), (r = Ve(r, 255))
    var n = Math.max(e, t, r),
        i = Math.min(e, t, r),
        o = 0,
        a = n,
        s = n - i,
        l = n === 0 ? 0 : s / n
    if (n === i) o = 0
    else {
        switch (n) {
            case e:
                o = (t - r) / s + (t < r ? 6 : 0)
                break
            case t:
                o = (r - e) / s + 2
                break
            case r:
                o = (e - t) / s + 4
                break
        }
        o /= 6
    }
    return { h: o, s: l, v: a }
}
function Bw(e, t, r) {
    ;(e = Ve(e, 360) * 6), (t = Ve(t, 100)), (r = Ve(r, 100))
    var n = Math.floor(e),
        i = e - n,
        o = r * (1 - t),
        a = r * (1 - i * t),
        s = r * (1 - (1 - i) * t),
        l = n % 6,
        u = [r, a, o, o, s, r][l],
        d = [s, r, r, a, o, o][l],
        m = [o, o, s, r, r, a][l]
    return { r: u * 255, g: d * 255, b: m * 255 }
}
function sm(e, t, r, n) {
    var i = [
        dn(Math.round(e).toString(16)),
        dn(Math.round(t).toString(16)),
        dn(Math.round(r).toString(16)),
    ]
    return n &&
        i[0].startsWith(i[0].charAt(1)) &&
        i[1].startsWith(i[1].charAt(1)) &&
        i[2].startsWith(i[2].charAt(1))
        ? i[0].charAt(0) + i[1].charAt(0) + i[2].charAt(0)
        : i.join('')
}
function Nw(e, t, r, n, i) {
    var o = [
        dn(Math.round(e).toString(16)),
        dn(Math.round(t).toString(16)),
        dn(Math.round(r).toString(16)),
        dn(Uw(n)),
    ]
    return i &&
        o[0].startsWith(o[0].charAt(1)) &&
        o[1].startsWith(o[1].charAt(1)) &&
        o[2].startsWith(o[2].charAt(1)) &&
        o[3].startsWith(o[3].charAt(1))
        ? o[0].charAt(0) + o[1].charAt(0) + o[2].charAt(0) + o[3].charAt(0)
        : o.join('')
}
function Uw(e) {
    return Math.round(parseFloat(e) * 255).toString(16)
}
function lm(e) {
    return vt(e) / 255
}
function vt(e) {
    return parseInt(e, 16)
}
function Mw(e) {
    return { r: e >> 16, g: (e & 65280) >> 8, b: e & 255 }
}
var Vc = {
    aliceblue: '#f0f8ff',
    antiquewhite: '#faebd7',
    aqua: '#00ffff',
    aquamarine: '#7fffd4',
    azure: '#f0ffff',
    beige: '#f5f5dc',
    bisque: '#ffe4c4',
    black: '#000000',
    blanchedalmond: '#ffebcd',
    blue: '#0000ff',
    blueviolet: '#8a2be2',
    brown: '#a52a2a',
    burlywood: '#deb887',
    cadetblue: '#5f9ea0',
    chartreuse: '#7fff00',
    chocolate: '#d2691e',
    coral: '#ff7f50',
    cornflowerblue: '#6495ed',
    cornsilk: '#fff8dc',
    crimson: '#dc143c',
    cyan: '#00ffff',
    darkblue: '#00008b',
    darkcyan: '#008b8b',
    darkgoldenrod: '#b8860b',
    darkgray: '#a9a9a9',
    darkgreen: '#006400',
    darkgrey: '#a9a9a9',
    darkkhaki: '#bdb76b',
    darkmagenta: '#8b008b',
    darkolivegreen: '#556b2f',
    darkorange: '#ff8c00',
    darkorchid: '#9932cc',
    darkred: '#8b0000',
    darksalmon: '#e9967a',
    darkseagreen: '#8fbc8f',
    darkslateblue: '#483d8b',
    darkslategray: '#2f4f4f',
    darkslategrey: '#2f4f4f',
    darkturquoise: '#00ced1',
    darkviolet: '#9400d3',
    deeppink: '#ff1493',
    deepskyblue: '#00bfff',
    dimgray: '#696969',
    dimgrey: '#696969',
    dodgerblue: '#1e90ff',
    firebrick: '#b22222',
    floralwhite: '#fffaf0',
    forestgreen: '#228b22',
    fuchsia: '#ff00ff',
    gainsboro: '#dcdcdc',
    ghostwhite: '#f8f8ff',
    goldenrod: '#daa520',
    gold: '#ffd700',
    gray: '#808080',
    green: '#008000',
    greenyellow: '#adff2f',
    grey: '#808080',
    honeydew: '#f0fff0',
    hotpink: '#ff69b4',
    indianred: '#cd5c5c',
    indigo: '#4b0082',
    ivory: '#fffff0',
    khaki: '#f0e68c',
    lavenderblush: '#fff0f5',
    lavender: '#e6e6fa',
    lawngreen: '#7cfc00',
    lemonchiffon: '#fffacd',
    lightblue: '#add8e6',
    lightcoral: '#f08080',
    lightcyan: '#e0ffff',
    lightgoldenrodyellow: '#fafad2',
    lightgray: '#d3d3d3',
    lightgreen: '#90ee90',
    lightgrey: '#d3d3d3',
    lightpink: '#ffb6c1',
    lightsalmon: '#ffa07a',
    lightseagreen: '#20b2aa',
    lightskyblue: '#87cefa',
    lightslategray: '#778899',
    lightslategrey: '#778899',
    lightsteelblue: '#b0c4de',
    lightyellow: '#ffffe0',
    lime: '#00ff00',
    limegreen: '#32cd32',
    linen: '#faf0e6',
    magenta: '#ff00ff',
    maroon: '#800000',
    mediumaquamarine: '#66cdaa',
    mediumblue: '#0000cd',
    mediumorchid: '#ba55d3',
    mediumpurple: '#9370db',
    mediumseagreen: '#3cb371',
    mediumslateblue: '#7b68ee',
    mediumspringgreen: '#00fa9a',
    mediumturquoise: '#48d1cc',
    mediumvioletred: '#c71585',
    midnightblue: '#191970',
    mintcream: '#f5fffa',
    mistyrose: '#ffe4e1',
    moccasin: '#ffe4b5',
    navajowhite: '#ffdead',
    navy: '#000080',
    oldlace: '#fdf5e6',
    olive: '#808000',
    olivedrab: '#6b8e23',
    orange: '#ffa500',
    orangered: '#ff4500',
    orchid: '#da70d6',
    palegoldenrod: '#eee8aa',
    palegreen: '#98fb98',
    paleturquoise: '#afeeee',
    palevioletred: '#db7093',
    papayawhip: '#ffefd5',
    peachpuff: '#ffdab9',
    peru: '#cd853f',
    pink: '#ffc0cb',
    plum: '#dda0dd',
    powderblue: '#b0e0e6',
    purple: '#800080',
    rebeccapurple: '#663399',
    red: '#ff0000',
    rosybrown: '#bc8f8f',
    royalblue: '#4169e1',
    saddlebrown: '#8b4513',
    salmon: '#fa8072',
    sandybrown: '#f4a460',
    seagreen: '#2e8b57',
    seashell: '#fff5ee',
    sienna: '#a0522d',
    silver: '#c0c0c0',
    skyblue: '#87ceeb',
    slateblue: '#6a5acd',
    slategray: '#708090',
    slategrey: '#708090',
    snow: '#fffafa',
    springgreen: '#00ff7f',
    steelblue: '#4682b4',
    tan: '#d2b48c',
    teal: '#008080',
    thistle: '#d8bfd8',
    tomato: '#ff6347',
    turquoise: '#40e0d0',
    violet: '#ee82ee',
    wheat: '#f5deb3',
    white: '#ffffff',
    whitesmoke: '#f5f5f5',
    yellow: '#ffff00',
    yellowgreen: '#9acd32',
}
function Ow(e) {
    var t = { r: 0, g: 0, b: 0 },
        r = 1,
        n = null,
        i = null,
        o = null,
        a = !1,
        s = !1
    return (
        typeof e == 'string' && (e = Lw(e)),
        typeof e == 'object' &&
            (hr(e.r) && hr(e.g) && hr(e.b)
                ? ((t = Fw(e.r, e.g, e.b)),
                  (a = !0),
                  (s = String(e.r).substr(-1) === '%' ? 'prgb' : 'rgb'))
                : hr(e.h) && hr(e.s) && hr(e.v)
                ? ((n = Ts(e.s)),
                  (i = Ts(e.v)),
                  (t = Bw(e.h, n, i)),
                  (a = !0),
                  (s = 'hsv'))
                : hr(e.h) &&
                  hr(e.s) &&
                  hr(e.l) &&
                  ((n = Ts(e.s)),
                  (o = Ts(e.l)),
                  (t = Dw(e.h, n, o)),
                  (a = !0),
                  (s = 'hsl')),
            Object.prototype.hasOwnProperty.call(e, 'a') && (r = e.a)),
        (r = im(r)),
        {
            ok: a,
            format: e.format || s,
            r: Math.min(255, Math.max(t.r, 0)),
            g: Math.min(255, Math.max(t.g, 0)),
            b: Math.min(255, Math.max(t.b, 0)),
            a: r,
        }
    )
}
var $w = '[-\\+]?\\d+%?',
    zw = '[-\\+]?\\d*\\.\\d+%?',
    Nr = '(?:' + zw + ')|(?:' + $w + ')',
    Kc =
        '[\\s|\\(]+(' +
        Nr +
        ')[,|\\s]+(' +
        Nr +
        ')[,|\\s]+(' +
        Nr +
        ')\\s*\\)?',
    qc =
        '[\\s|\\(]+(' +
        Nr +
        ')[,|\\s]+(' +
        Nr +
        ')[,|\\s]+(' +
        Nr +
        ')[,|\\s]+(' +
        Nr +
        ')\\s*\\)?',
    Ot = {
        CSS_UNIT: new RegExp(Nr),
        rgb: new RegExp('rgb' + Kc),
        rgba: new RegExp('rgba' + qc),
        hsl: new RegExp('hsl' + Kc),
        hsla: new RegExp('hsla' + qc),
        hsv: new RegExp('hsv' + Kc),
        hsva: new RegExp('hsva' + qc),
        hex3: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
        hex6: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,
        hex4: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
        hex8: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,
    }
function Lw(e) {
    if (((e = e.trim().toLowerCase()), e.length === 0)) return !1
    var t = !1
    if (Vc[e]) (e = Vc[e]), (t = !0)
    else if (e === 'transparent')
        return { r: 0, g: 0, b: 0, a: 0, format: 'name' }
    var r = Ot.rgb.exec(e)
    return r
        ? { r: r[1], g: r[2], b: r[3] }
        : ((r = Ot.rgba.exec(e)),
          r
              ? { r: r[1], g: r[2], b: r[3], a: r[4] }
              : ((r = Ot.hsl.exec(e)),
                r
                    ? { h: r[1], s: r[2], l: r[3] }
                    : ((r = Ot.hsla.exec(e)),
                      r
                          ? { h: r[1], s: r[2], l: r[3], a: r[4] }
                          : ((r = Ot.hsv.exec(e)),
                            r
                                ? { h: r[1], s: r[2], v: r[3] }
                                : ((r = Ot.hsva.exec(e)),
                                  r
                                      ? { h: r[1], s: r[2], v: r[3], a: r[4] }
                                      : ((r = Ot.hex8.exec(e)),
                                        r
                                            ? {
                                                  r: vt(r[1]),
                                                  g: vt(r[2]),
                                                  b: vt(r[3]),
                                                  a: lm(r[4]),
                                                  format: t ? 'name' : 'hex8',
                                              }
                                            : ((r = Ot.hex6.exec(e)),
                                              r
                                                  ? {
                                                        r: vt(r[1]),
                                                        g: vt(r[2]),
                                                        b: vt(r[3]),
                                                        format: t
                                                            ? 'name'
                                                            : 'hex',
                                                    }
                                                  : ((r = Ot.hex4.exec(e)),
                                                    r
                                                        ? {
                                                              r: vt(
                                                                  r[1] + r[1]
                                                              ),
                                                              g: vt(
                                                                  r[2] + r[2]
                                                              ),
                                                              b: vt(
                                                                  r[3] + r[3]
                                                              ),
                                                              a: lm(
                                                                  r[4] + r[4]
                                                              ),
                                                              format: t
                                                                  ? 'name'
                                                                  : 'hex8',
                                                          }
                                                        : ((r =
                                                              Ot.hex3.exec(e)),
                                                          r
                                                              ? {
                                                                    r: vt(
                                                                        r[1] +
                                                                            r[1]
                                                                    ),
                                                                    g: vt(
                                                                        r[2] +
                                                                            r[2]
                                                                    ),
                                                                    b: vt(
                                                                        r[3] +
                                                                            r[3]
                                                                    ),
                                                                    format: t
                                                                        ? 'name'
                                                                        : 'hex',
                                                                }
                                                              : !1)))))))))
}
function hr(e) {
    return Boolean(Ot.CSS_UNIT.exec(String(e)))
}
var Io = (function () {
    function e(t, r) {
        t === void 0 && (t = ''), r === void 0 && (r = {})
        var n
        if (t instanceof e) return t
        typeof t == 'number' && (t = Mw(t)), (this.originalInput = t)
        var i = Ow(t)
        ;(this.originalInput = t),
            (this.r = i.r),
            (this.g = i.g),
            (this.b = i.b),
            (this.a = i.a),
            (this.roundA = Math.round(100 * this.a) / 100),
            (this.format =
                (n = r.format) !== null && n !== void 0 ? n : i.format),
            (this.gradientType = r.gradientType),
            this.r < 1 && (this.r = Math.round(this.r)),
            this.g < 1 && (this.g = Math.round(this.g)),
            this.b < 1 && (this.b = Math.round(this.b)),
            (this.isValid = i.ok)
    }
    return (
        (e.prototype.isDark = function () {
            return this.getBrightness() < 128
        }),
        (e.prototype.isLight = function () {
            return !this.isDark()
        }),
        (e.prototype.getBrightness = function () {
            var t = this.toRgb()
            return (t.r * 299 + t.g * 587 + t.b * 114) / 1e3
        }),
        (e.prototype.getLuminance = function () {
            var t = this.toRgb(),
                r,
                n,
                i,
                o = t.r / 255,
                a = t.g / 255,
                s = t.b / 255
            return (
                o <= 0.03928
                    ? (r = o / 12.92)
                    : (r = Math.pow((o + 0.055) / 1.055, 2.4)),
                a <= 0.03928
                    ? (n = a / 12.92)
                    : (n = Math.pow((a + 0.055) / 1.055, 2.4)),
                s <= 0.03928
                    ? (i = s / 12.92)
                    : (i = Math.pow((s + 0.055) / 1.055, 2.4)),
                0.2126 * r + 0.7152 * n + 0.0722 * i
            )
        }),
        (e.prototype.getAlpha = function () {
            return this.a
        }),
        (e.prototype.setAlpha = function (t) {
            return (
                (this.a = im(t)),
                (this.roundA = Math.round(100 * this.a) / 100),
                this
            )
        }),
        (e.prototype.toHsv = function () {
            var t = am(this.r, this.g, this.b)
            return { h: t.h * 360, s: t.s, v: t.v, a: this.a }
        }),
        (e.prototype.toHsvString = function () {
            var t = am(this.r, this.g, this.b),
                r = Math.round(t.h * 360),
                n = Math.round(t.s * 100),
                i = Math.round(t.v * 100)
            return this.a === 1
                ? 'hsv(' + r + ', ' + n + '%, ' + i + '%)'
                : 'hsva(' + r + ', ' + n + '%, ' + i + '%, ' + this.roundA + ')'
        }),
        (e.prototype.toHsl = function () {
            var t = om(this.r, this.g, this.b)
            return { h: t.h * 360, s: t.s, l: t.l, a: this.a }
        }),
        (e.prototype.toHslString = function () {
            var t = om(this.r, this.g, this.b),
                r = Math.round(t.h * 360),
                n = Math.round(t.s * 100),
                i = Math.round(t.l * 100)
            return this.a === 1
                ? 'hsl(' + r + ', ' + n + '%, ' + i + '%)'
                : 'hsla(' + r + ', ' + n + '%, ' + i + '%, ' + this.roundA + ')'
        }),
        (e.prototype.toHex = function (t) {
            return t === void 0 && (t = !1), sm(this.r, this.g, this.b, t)
        }),
        (e.prototype.toHexString = function (t) {
            return t === void 0 && (t = !1), '#' + this.toHex(t)
        }),
        (e.prototype.toHex8 = function (t) {
            return (
                t === void 0 && (t = !1), Nw(this.r, this.g, this.b, this.a, t)
            )
        }),
        (e.prototype.toHex8String = function (t) {
            return t === void 0 && (t = !1), '#' + this.toHex8(t)
        }),
        (e.prototype.toRgb = function () {
            return {
                r: Math.round(this.r),
                g: Math.round(this.g),
                b: Math.round(this.b),
                a: this.a,
            }
        }),
        (e.prototype.toRgbString = function () {
            var t = Math.round(this.r),
                r = Math.round(this.g),
                n = Math.round(this.b)
            return this.a === 1
                ? 'rgb(' + t + ', ' + r + ', ' + n + ')'
                : 'rgba(' + t + ', ' + r + ', ' + n + ', ' + this.roundA + ')'
        }),
        (e.prototype.toPercentageRgb = function () {
            var t = function (r) {
                return Math.round(Ve(r, 255) * 100) + '%'
            }
            return { r: t(this.r), g: t(this.g), b: t(this.b), a: this.a }
        }),
        (e.prototype.toPercentageRgbString = function () {
            var t = function (r) {
                return Math.round(Ve(r, 255) * 100)
            }
            return this.a === 1
                ? 'rgb(' +
                      t(this.r) +
                      '%, ' +
                      t(this.g) +
                      '%, ' +
                      t(this.b) +
                      '%)'
                : 'rgba(' +
                      t(this.r) +
                      '%, ' +
                      t(this.g) +
                      '%, ' +
                      t(this.b) +
                      '%, ' +
                      this.roundA +
                      ')'
        }),
        (e.prototype.toName = function () {
            if (this.a === 0) return 'transparent'
            if (this.a < 1) return !1
            for (
                var t = '#' + sm(this.r, this.g, this.b, !1),
                    r = 0,
                    n = Object.entries(Vc);
                r < n.length;
                r++
            ) {
                var i = n[r],
                    o = i[0],
                    a = i[1]
                if (t === a) return o
            }
            return !1
        }),
        (e.prototype.toString = function (t) {
            var r = Boolean(t)
            t = t != null ? t : this.format
            var n = !1,
                i = this.a < 1 && this.a >= 0,
                o = !r && i && (t.startsWith('hex') || t === 'name')
            return o
                ? t === 'name' && this.a === 0
                    ? this.toName()
                    : this.toRgbString()
                : (t === 'rgb' && (n = this.toRgbString()),
                  t === 'prgb' && (n = this.toPercentageRgbString()),
                  (t === 'hex' || t === 'hex6') && (n = this.toHexString()),
                  t === 'hex3' && (n = this.toHexString(!0)),
                  t === 'hex4' && (n = this.toHex8String(!0)),
                  t === 'hex8' && (n = this.toHex8String()),
                  t === 'name' && (n = this.toName()),
                  t === 'hsl' && (n = this.toHslString()),
                  t === 'hsv' && (n = this.toHsvString()),
                  n || this.toHexString())
        }),
        (e.prototype.toNumber = function () {
            return (
                (Math.round(this.r) << 16) +
                (Math.round(this.g) << 8) +
                Math.round(this.b)
            )
        }),
        (e.prototype.clone = function () {
            return new e(this.toString())
        }),
        (e.prototype.lighten = function (t) {
            t === void 0 && (t = 10)
            var r = this.toHsl()
            return (r.l += t / 100), (r.l = ks(r.l)), new e(r)
        }),
        (e.prototype.brighten = function (t) {
            t === void 0 && (t = 10)
            var r = this.toRgb()
            return (
                (r.r = Math.max(
                    0,
                    Math.min(255, r.r - Math.round(255 * -(t / 100)))
                )),
                (r.g = Math.max(
                    0,
                    Math.min(255, r.g - Math.round(255 * -(t / 100)))
                )),
                (r.b = Math.max(
                    0,
                    Math.min(255, r.b - Math.round(255 * -(t / 100)))
                )),
                new e(r)
            )
        }),
        (e.prototype.darken = function (t) {
            t === void 0 && (t = 10)
            var r = this.toHsl()
            return (r.l -= t / 100), (r.l = ks(r.l)), new e(r)
        }),
        (e.prototype.tint = function (t) {
            return t === void 0 && (t = 10), this.mix('white', t)
        }),
        (e.prototype.shade = function (t) {
            return t === void 0 && (t = 10), this.mix('black', t)
        }),
        (e.prototype.desaturate = function (t) {
            t === void 0 && (t = 10)
            var r = this.toHsl()
            return (r.s -= t / 100), (r.s = ks(r.s)), new e(r)
        }),
        (e.prototype.saturate = function (t) {
            t === void 0 && (t = 10)
            var r = this.toHsl()
            return (r.s += t / 100), (r.s = ks(r.s)), new e(r)
        }),
        (e.prototype.greyscale = function () {
            return this.desaturate(100)
        }),
        (e.prototype.spin = function (t) {
            var r = this.toHsl(),
                n = (r.h + t) % 360
            return (r.h = n < 0 ? 360 + n : n), new e(r)
        }),
        (e.prototype.mix = function (t, r) {
            r === void 0 && (r = 50)
            var n = this.toRgb(),
                i = new e(t).toRgb(),
                o = r / 100,
                a = {
                    r: (i.r - n.r) * o + n.r,
                    g: (i.g - n.g) * o + n.g,
                    b: (i.b - n.b) * o + n.b,
                    a: (i.a - n.a) * o + n.a,
                }
            return new e(a)
        }),
        (e.prototype.analogous = function (t, r) {
            t === void 0 && (t = 6), r === void 0 && (r = 30)
            var n = this.toHsl(),
                i = 360 / r,
                o = [this]
            for (n.h = (n.h - ((i * t) >> 1) + 720) % 360; --t; )
                (n.h = (n.h + i) % 360), o.push(new e(n))
            return o
        }),
        (e.prototype.complement = function () {
            var t = this.toHsl()
            return (t.h = (t.h + 180) % 360), new e(t)
        }),
        (e.prototype.monochromatic = function (t) {
            t === void 0 && (t = 6)
            for (
                var r = this.toHsv(),
                    n = r.h,
                    i = r.s,
                    o = r.v,
                    a = [],
                    s = 1 / t;
                t--;

            )
                a.push(new e({ h: n, s: i, v: o })), (o = (o + s) % 1)
            return a
        }),
        (e.prototype.splitcomplement = function () {
            var t = this.toHsl(),
                r = t.h
            return [
                this,
                new e({ h: (r + 72) % 360, s: t.s, l: t.l }),
                new e({ h: (r + 216) % 360, s: t.s, l: t.l }),
            ]
        }),
        (e.prototype.onBackground = function (t) {
            var r = this.toRgb(),
                n = new e(t).toRgb()
            return new e({
                r: n.r + (r.r - n.r) * r.a,
                g: n.g + (r.g - n.g) * r.a,
                b: n.b + (r.b - n.b) * r.a,
            })
        }),
        (e.prototype.triad = function () {
            return this.polyad(3)
        }),
        (e.prototype.tetrad = function () {
            return this.polyad(4)
        }),
        (e.prototype.polyad = function (t) {
            for (
                var r = this.toHsl(), n = r.h, i = [this], o = 360 / t, a = 1;
                a < t;
                a++
            )
                i.push(new e({ h: (n + a * o) % 360, s: r.s, l: r.l }))
            return i
        }),
        (e.prototype.equals = function (t) {
            return this.toRgbString() === new e(t).toRgbString()
        }),
        e
    )
})()
function um(e) {
    if ((e === void 0 && (e = {}), e.count !== void 0 && e.count !== null)) {
        var t = e.count,
            r = []
        for (e.count = void 0; t > r.length; )
            (e.count = null), e.seed && (e.seed += 1), r.push(um(e))
        return (e.count = t), r
    }
    var n = jw(e.hue, e.seed),
        i = Ww(n, e),
        o = Hw(n, i, e),
        a = { h: n, s: i, v: o }
    return e.alpha !== void 0 && (a.a = e.alpha), new Io(a)
}
function jw(e, t) {
    var r = Kw(e),
        n = As(r, t)
    return n < 0 && (n = 360 + n), n
}
function Ww(e, t) {
    if (t.hue === 'monochrome') return 0
    if (t.luminosity === 'random') return As([0, 100], t.seed)
    var r = cm(e).saturationRange,
        n = r[0],
        i = r[1]
    switch (t.luminosity) {
        case 'bright':
            n = 55
            break
        case 'dark':
            n = i - 10
            break
        case 'light':
            i = 55
            break
    }
    return As([n, i], t.seed)
}
function Hw(e, t, r) {
    var n = Vw(e, t),
        i = 100
    switch (r.luminosity) {
        case 'dark':
            i = n + 20
            break
        case 'light':
            n = (i + n) / 2
            break
        case 'random':
            ;(n = 0), (i = 100)
            break
    }
    return As([n, i], r.seed)
}
function Vw(e, t) {
    for (var r = cm(e).lowerBounds, n = 0; n < r.length - 1; n++) {
        var i = r[n][0],
            o = r[n][1],
            a = r[n + 1][0],
            s = r[n + 1][1]
        if (t >= i && t <= a) {
            var l = (s - o) / (a - i),
                u = o - l * i
            return l * t + u
        }
    }
    return 0
}
function Kw(e) {
    var t = parseInt(e, 10)
    if (!Number.isNaN(t) && t < 360 && t > 0) return [t, t]
    if (typeof e == 'string') {
        var r = dm.find(function (a) {
            return a.name === e
        })
        if (r) {
            var n = fm(r)
            if (n.hueRange) return n.hueRange
        }
        var i = new Io(e)
        if (i.isValid) {
            var o = i.toHsv().h
            return [o, o]
        }
    }
    return [0, 360]
}
function cm(e) {
    e >= 334 && e <= 360 && (e -= 360)
    for (var t = 0, r = dm; t < r.length; t++) {
        var n = r[t],
            i = fm(n)
        if (i.hueRange && e >= i.hueRange[0] && e <= i.hueRange[1]) return i
    }
    throw Error('Color not found')
}
function As(e, t) {
    if (t === void 0)
        return Math.floor(e[0] + Math.random() * (e[1] + 1 - e[0]))
    var r = e[1] || 1,
        n = e[0] || 0
    t = (t * 9301 + 49297) % 233280
    var i = t / 233280
    return Math.floor(n + i * (r - n))
}
function fm(e) {
    var t = e.lowerBounds[0][0],
        r = e.lowerBounds[e.lowerBounds.length - 1][0],
        n = e.lowerBounds[e.lowerBounds.length - 1][1],
        i = e.lowerBounds[0][1]
    return {
        name: e.name,
        hueRange: e.hueRange,
        lowerBounds: e.lowerBounds,
        saturationRange: [t, r],
        brightnessRange: [n, i],
    }
}
var dm = [
        {
            name: 'monochrome',
            hueRange: null,
            lowerBounds: [
                [0, 0],
                [100, 0],
            ],
        },
        {
            name: 'red',
            hueRange: [-26, 18],
            lowerBounds: [
                [20, 100],
                [30, 92],
                [40, 89],
                [50, 85],
                [60, 78],
                [70, 70],
                [80, 60],
                [90, 55],
                [100, 50],
            ],
        },
        {
            name: 'orange',
            hueRange: [19, 46],
            lowerBounds: [
                [20, 100],
                [30, 93],
                [40, 88],
                [50, 86],
                [60, 85],
                [70, 70],
                [100, 70],
            ],
        },
        {
            name: 'yellow',
            hueRange: [47, 62],
            lowerBounds: [
                [25, 100],
                [40, 94],
                [50, 89],
                [60, 86],
                [70, 84],
                [80, 82],
                [90, 80],
                [100, 75],
            ],
        },
        {
            name: 'green',
            hueRange: [63, 178],
            lowerBounds: [
                [30, 100],
                [40, 90],
                [50, 85],
                [60, 81],
                [70, 74],
                [80, 64],
                [90, 50],
                [100, 40],
            ],
        },
        {
            name: 'blue',
            hueRange: [179, 257],
            lowerBounds: [
                [20, 100],
                [30, 86],
                [40, 80],
                [50, 74],
                [60, 60],
                [70, 52],
                [80, 44],
                [90, 39],
                [100, 35],
            ],
        },
        {
            name: 'purple',
            hueRange: [258, 282],
            lowerBounds: [
                [20, 100],
                [30, 87],
                [40, 79],
                [50, 70],
                [60, 65],
                [70, 59],
                [80, 52],
                [90, 45],
                [100, 42],
            ],
        },
        {
            name: 'pink',
            hueRange: [283, 334],
            lowerBounds: [
                [20, 100],
                [30, 90],
                [40, 86],
                [60, 84],
                [80, 80],
                [90, 75],
                [100, 73],
            ],
        },
    ],
    Ne = function (t, r, n) {
        var i = ms(t, 'colors.' + r, r),
            o = new Io(i),
            a = o.isValid
        return a ? i : n
    },
    qw = function (t) {
        return function (r) {
            var n = Ne(r, t),
                i = new Io(n).isDark()
            return i ? 'dark' : 'light'
        }
    },
    Gw = function (t) {
        return function (r) {
            return qw(t)(r) === 'dark'
        }
    },
    ii = function (t, r) {
        return function (n) {
            var i = Ne(n, t)
            return new Io(i).setAlpha(r).toRgbString()
        }
    }
function hm(e, t) {
    return (
        e === void 0 && (e = '1rem'),
        t === void 0 && (t = 'rgba(255, 255, 255, 0.15)'),
        {
            backgroundImage:
                `linear-gradient(
    45deg,
    ` +
                t +
                ` 25%,
    transparent 25%,
    transparent 50%,
    ` +
                t +
                ` 50%,
    ` +
                t +
                ` 75%,
    transparent 75%,
    transparent
  )`,
            backgroundSize: e + ' ' + e,
        }
    )
}
function Yw(e) {
    var t = um().toHexString()
    return !e || TS(e)
        ? t
        : e.string && e.colors
        ? Qw(e.string, e.colors)
        : e.string && !e.colors
        ? Xw(e.string)
        : e.colors && !e.string
        ? Jw(e.colors)
        : t
}
function Xw(e) {
    var t = 0
    if (e.length === 0) return t.toString()
    for (var r = 0; r < e.length; r += 1)
        (t = e.charCodeAt(r) + ((t << 5) - t)), (t = t & t)
    for (var n = '#', i = 0; i < 3; i += 1) {
        var o = (t >> (i * 8)) & 255
        n += ('00' + o.toString(16)).substr(-2)
    }
    return n
}
function Qw(e, t) {
    var r = 0
    if (e.length === 0) return t[0]
    for (var n = 0; n < e.length; n += 1)
        (r = e.charCodeAt(n) + ((r << 5) - r)), (r = r & r)
    return (r = ((r % t.length) + t.length) % t.length), t[r]
}
function Jw(e) {
    return e[Math.floor(Math.random() * e.length)]
}
function N(e, t) {
    return function (r) {
        return r.colorMode === 'dark' ? t : e
    }
}
function Ro(e) {
    var t = e.orientation,
        r = e.vertical,
        n = e.horizontal
    return t ? (t === 'vertical' ? r : n) : {}
}
function Gc() {
    return (
        (Gc =
            Object.assign ||
            function (e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = arguments[t]
                    for (var n in r)
                        Object.prototype.hasOwnProperty.call(r, n) &&
                            (e[n] = r[n])
                }
                return e
            }),
        Gc.apply(this, arguments)
    )
}
var Zw = function (t) {
    return (
        MS({
            condition: !0,
            message: [
                '[chakra-ui]: createBreakpoints(...) will be deprecated pretty soon',
                'simply pass the breakpoints as an object. Remove the createBreakpoint(..) call',
            ].join(''),
        }),
        Gc({ base: '0em' }, t)
    )
}
function pm(e, t) {
    for (var r = 0; r < t.length; r++) {
        var n = t[r]
        ;(n.enumerable = n.enumerable || !1),
            (n.configurable = !0),
            'value' in n && (n.writable = !0),
            Object.defineProperty(e, n.key, n)
    }
}
function eb(e, t, r) {
    return t && pm(e.prototype, t), r && pm(e, r), e
}
var tb = (function () {
    function e(t) {
        var r = this
        ;(this.map = {}),
            (this.called = !1),
            (this.assert = function () {
                if (!r.called) {
                    r.called = !0
                    return
                }
                throw new Error(
                    '[anatomy] .part(...) should only be called once. Did you mean to use .extend(...) ?'
                )
            }),
            (this.parts = function () {
                r.assert()
                for (
                    var n = arguments.length, i = new Array(n), o = 0;
                    o < n;
                    o++
                )
                    i[o] = arguments[o]
                for (var a = 0, s = i; a < s.length; a++) {
                    var l = s[a]
                    r.map[l] = r.toPart(l)
                }
                return r
            }),
            (this.extend = function () {
                for (
                    var n = arguments.length, i = new Array(n), o = 0;
                    o < n;
                    o++
                )
                    i[o] = arguments[o]
                for (var a = 0, s = i; a < s.length; a++) {
                    var l = s[a]
                    l in r.map || (r.map[l] = r.toPart(l))
                }
                return r
            }),
            (this.toPart = function (n) {
                var i = ['container', 'root'].includes(n != null ? n : '')
                        ? [r.name]
                        : [r.name, n],
                    o = i.filter(Boolean).join('__'),
                    a = 'chakra-' + o,
                    s = {
                        className: a,
                        selector: '.' + a,
                        toString: function () {
                            return n
                        },
                    }
                return s
            }),
            (this.__type = {})
    }
    return (
        eb(e, [
            {
                key: 'selectors',
                get: function () {
                    var r = gs(
                        Object.entries(this.map).map(function (n) {
                            var i = n[0],
                                o = n[1]
                            return [i, o.selector]
                        })
                    )
                    return r
                },
            },
            {
                key: 'classNames',
                get: function () {
                    var r = gs(
                        Object.entries(this.map).map(function (n) {
                            var i = n[0],
                                o = n[1]
                            return [i, o.className]
                        })
                    )
                    return r
                },
            },
            {
                key: 'keys',
                get: function () {
                    return Object.keys(this.map)
                },
            },
        ]),
        e
    )
})()
function pe(e) {
    return new tb(e)
}
function mm(e) {
    return Ut(e) && e.reference ? e.reference : String(e)
}
var Is = function (t) {
        for (
            var r = arguments.length, n = new Array(r > 1 ? r - 1 : 0), i = 1;
            i < r;
            i++
        )
            n[i - 1] = arguments[i]
        return n
            .map(mm)
            .join(' ' + t + ' ')
            .replace(/calc/g, '')
    },
    vm = function () {
        for (var t = arguments.length, r = new Array(t), n = 0; n < t; n++)
            r[n] = arguments[n]
        return 'calc(' + Is.apply(void 0, ['+'].concat(r)) + ')'
    },
    gm = function () {
        for (var t = arguments.length, r = new Array(t), n = 0; n < t; n++)
            r[n] = arguments[n]
        return 'calc(' + Is.apply(void 0, ['-'].concat(r)) + ')'
    },
    Yc = function () {
        for (var t = arguments.length, r = new Array(t), n = 0; n < t; n++)
            r[n] = arguments[n]
        return 'calc(' + Is.apply(void 0, ['*'].concat(r)) + ')'
    },
    ym = function () {
        for (var t = arguments.length, r = new Array(t), n = 0; n < t; n++)
            r[n] = arguments[n]
        return 'calc(' + Is.apply(void 0, ['/'].concat(r)) + ')'
    },
    Sm = function (t) {
        var r = mm(t)
        return r != null && !Number.isNaN(parseFloat(r))
            ? String(r).startsWith('-')
                ? String(r).slice(1)
                : '-' + r
            : Yc(r, -1)
    },
    pr = Object.assign(
        function (e) {
            return {
                add: function () {
                    for (
                        var r = arguments.length, n = new Array(r), i = 0;
                        i < r;
                        i++
                    )
                        n[i] = arguments[i]
                    return pr(vm.apply(void 0, [e].concat(n)))
                },
                subtract: function () {
                    for (
                        var r = arguments.length, n = new Array(r), i = 0;
                        i < r;
                        i++
                    )
                        n[i] = arguments[i]
                    return pr(gm.apply(void 0, [e].concat(n)))
                },
                multiply: function () {
                    for (
                        var r = arguments.length, n = new Array(r), i = 0;
                        i < r;
                        i++
                    )
                        n[i] = arguments[i]
                    return pr(Yc.apply(void 0, [e].concat(n)))
                },
                divide: function () {
                    for (
                        var r = arguments.length, n = new Array(r), i = 0;
                        i < r;
                        i++
                    )
                        n[i] = arguments[i]
                    return pr(ym.apply(void 0, [e].concat(n)))
                },
                negate: function () {
                    return pr(Sm(e))
                },
                toString: function () {
                    return e.toString()
                },
            }
        },
        { add: vm, subtract: gm, multiply: Yc, divide: ym, negate: Sm }
    )
function rb(e) {
    return !Number.isInteger(parseFloat(e.toString()))
}
function nb(e, t) {
    return t === void 0 && (t = '-'), e.replace(/\s+/g, t)
}
function xm(e) {
    var t = nb(e.toString())
    return t.includes('\\.') ? e : rb(e) ? t.replace('.', '\\.') : e
}
function ib(e, t) {
    return t === void 0 && (t = ''), [t, xm(e)].filter(Boolean).join('-')
}
function ob(e, t) {
    return 'var(' + xm(e) + (t ? ', ' + t : '') + ')'
}
function ab(e, t) {
    return t === void 0 && (t = ''), '--' + ib(e, t)
}
function gt(e, t) {
    var r = ab(e, t == null ? void 0 : t.prefix)
    return {
        variable: r,
        reference: ob(r, sb(t == null ? void 0 : t.fallback)),
    }
}
function sb(e) {
    return typeof e == 'string' ? e : e == null ? void 0 : e.reference
}
var lb = pe('accordion')
        .parts('container', 'item', 'button', 'panel')
        .extend('icon'),
    ub = pe('alert').parts('title', 'description', 'container').extend('icon'),
    cb = pe('avatar')
        .parts('label', 'badge', 'container')
        .extend('excessLabel', 'group'),
    fb = pe('breadcrumb').parts('link', 'item', 'container').extend('separator')
pe('button').parts()
var db = pe('checkbox').parts('control', 'icon', 'container').extend('label')
pe('progress').parts('track', 'filledTrack').extend('label')
var hb = pe('drawer')
        .parts('overlay', 'dialogContainer', 'dialog')
        .extend('header', 'closeButton', 'body', 'footer'),
    pb = pe('editable').parts('preview', 'input'),
    mb = pe('form').parts('container', 'requiredIndicator', 'helperText'),
    vb = pe('formError').parts('text', 'icon'),
    gb = pe('input').parts('addon', 'field', 'element'),
    yb = pe('list').parts('container', 'item', 'icon'),
    Sb = pe('menu')
        .parts('button', 'list', 'item')
        .extend('groupTitle', 'command', 'divider'),
    xb = pe('modal')
        .parts('overlay', 'dialogContainer', 'dialog')
        .extend('header', 'closeButton', 'body', 'footer'),
    wb = pe('numberinput').parts('root', 'field', 'stepperGroup', 'stepper')
pe('pininput').parts('field')
var bb = pe('popover')
        .parts('content', 'header', 'body', 'footer')
        .extend('popper', 'arrow', 'closeButton'),
    Cb = pe('progress').parts('label', 'filledTrack', 'track'),
    _b = pe('radio').parts('container', 'control', 'label'),
    Eb = pe('select').parts('field', 'icon'),
    kb = pe('slider').parts('container', 'track', 'thumb', 'filledTrack'),
    Tb = pe('stat').parts('container', 'label', 'helpText', 'number', 'icon'),
    Ab = pe('switch').parts('container', 'track', 'thumb'),
    Ib = pe('table').parts(
        'table',
        'thead',
        'tbody',
        'tr',
        'th',
        'td',
        'tfoot',
        'caption'
    ),
    Rb = pe('tabs').parts(
        'root',
        'tab',
        'tablist',
        'tabpanel',
        'tabpanels',
        'indicator'
    ),
    Pb = pe('tag').parts('container', 'label', 'closeButton')
function Pe() {
    return (
        (Pe =
            Object.assign ||
            function (e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = arguments[t]
                    for (var n in r)
                        Object.prototype.hasOwnProperty.call(r, n) &&
                            (e[n] = r[n])
                }
                return e
            }),
        Pe.apply(this, arguments)
    )
}
var Fb = {
        borderTopWidth: '1px',
        borderColor: 'inherit',
        _last: { borderBottomWidth: '1px' },
    },
    Db = {
        transitionProperty: 'common',
        transitionDuration: 'normal',
        fontSize: '1rem',
        _focus: { boxShadow: 'outline' },
        _hover: { bg: 'blackAlpha.50' },
        _disabled: { opacity: 0.4, cursor: 'not-allowed' },
        px: 4,
        py: 2,
    },
    Bb = { pt: 2, px: 4, pb: 5 },
    Nb = { fontSize: '1.25em' },
    Ub = { container: Fb, button: Db, panel: Bb, icon: Nb },
    Mb = { parts: lb.keys, baseStyle: Ub },
    Ob = {
        container: { px: 4, py: 3 },
        title: { fontWeight: 'bold', lineHeight: 6, marginEnd: 2 },
        description: { lineHeight: 6 },
        icon: { flexShrink: 0, marginEnd: 3, w: 5, h: 6 },
    }
function Xc(e) {
    var t = e.theme,
        r = e.colorScheme,
        n = Ne(t, r + '.100', r),
        i = ii(r + '.200', 0.16)(t)
    return N(n, i)(e)
}
var $b = function (t) {
        var r = t.colorScheme
        return {
            container: { bg: Xc(t) },
            icon: { color: N(r + '.500', r + '.200')(t) },
        }
    },
    zb = function (t) {
        var r = t.colorScheme
        return {
            container: {
                paddingStart: 3,
                borderStartWidth: '4px',
                borderStartColor: N(r + '.500', r + '.200')(t),
                bg: Xc(t),
            },
            icon: { color: N(r + '.500', r + '.200')(t) },
        }
    },
    Lb = function (t) {
        var r = t.colorScheme
        return {
            container: {
                pt: 2,
                borderTopWidth: '4px',
                borderTopColor: N(r + '.500', r + '.200')(t),
                bg: Xc(t),
            },
            icon: { color: N(r + '.500', r + '.200')(t) },
        }
    },
    jb = function (t) {
        var r = t.colorScheme
        return {
            container: {
                bg: N(r + '.500', r + '.200')(t),
                color: N('white', 'gray.900')(t),
            },
        }
    },
    Wb = { subtle: $b, 'left-accent': zb, 'top-accent': Lb, solid: jb },
    Hb = { variant: 'subtle', colorScheme: 'blue' },
    Vb = { parts: ub.keys, baseStyle: Ob, variants: Wb, defaultProps: Hb },
    wm = {
        px: '1px',
        0.5: '0.125rem',
        1: '0.25rem',
        1.5: '0.375rem',
        2: '0.5rem',
        2.5: '0.625rem',
        3: '0.75rem',
        3.5: '0.875rem',
        4: '1rem',
        5: '1.25rem',
        6: '1.5rem',
        7: '1.75rem',
        8: '2rem',
        9: '2.25rem',
        10: '2.5rem',
        12: '3rem',
        14: '3.5rem',
        16: '4rem',
        20: '5rem',
        24: '6rem',
        28: '7rem',
        32: '8rem',
        36: '9rem',
        40: '10rem',
        44: '11rem',
        48: '12rem',
        52: '13rem',
        56: '14rem',
        60: '15rem',
        64: '16rem',
        72: '18rem',
        80: '20rem',
        96: '24rem',
    },
    Kb = {
        max: 'max-content',
        min: 'min-content',
        full: '100%',
        '3xs': '14rem',
        '2xs': '16rem',
        xs: '20rem',
        sm: '24rem',
        md: '28rem',
        lg: '32rem',
        xl: '36rem',
        '2xl': '42rem',
        '3xl': '48rem',
        '4xl': '56rem',
        '5xl': '64rem',
        '6xl': '72rem',
        '7xl': '80rem',
        '8xl': '90rem',
    },
    qb = { sm: '640px', md: '768px', lg: '1024px', xl: '1280px' },
    Gb = Pe({}, wm, Kb, { container: qb }),
    bm = Gb,
    Yb = function (t) {
        return {
            transform: 'translate(25%, 25%)',
            borderRadius: 'full',
            border: '0.2em solid',
            borderColor: N('white', 'gray.800')(t),
        }
    },
    Xb = function (t) {
        return { bg: N('gray.200', 'whiteAlpha.400')(t) }
    },
    Qb = function (t) {
        var r = t.name,
            n = t.theme,
            i = r ? Yw({ string: r }) : 'gray.400',
            o = Gw(i)(n),
            a = 'white'
        o || (a = 'gray.800')
        var s = N('white', 'gray.800')(t)
        return { bg: i, color: a, borderColor: s, verticalAlign: 'top' }
    },
    Jb = function (t) {
        return { badge: Yb(t), excessLabel: Xb(t), container: Qb(t) }
    }
function Ur(e) {
    var t = bm[e]
    return {
        container: {
            width: e,
            height: e,
            fontSize: 'calc(' + (t != null ? t : e) + ' / 2.5)',
        },
        excessLabel: { width: e, height: e },
        label: {
            fontSize: 'calc(' + (t != null ? t : e) + ' / 2.5)',
            lineHeight: e !== '100%' ? (t != null ? t : e) : void 0,
        },
    }
}
var Zb = {
        '2xs': Ur('4'),
        xs: Ur('6'),
        sm: Ur('8'),
        md: Ur('12'),
        lg: Ur('16'),
        xl: Ur('24'),
        '2xl': Ur('32'),
        full: Ur('100%'),
    },
    eC = { size: 'md' },
    tC = { parts: cb.keys, baseStyle: Jb, sizes: Zb, defaultProps: eC },
    rC = {
        px: 1,
        textTransform: 'uppercase',
        fontSize: 'xs',
        borderRadius: 'sm',
        fontWeight: 'bold',
    },
    nC = function (t) {
        var r = t.colorScheme,
            n = t.theme,
            i = ii(r + '.500', 0.6)(n)
        return {
            bg: N(r + '.500', i)(t),
            color: N('white', 'whiteAlpha.800')(t),
        }
    },
    iC = function (t) {
        var r = t.colorScheme,
            n = t.theme,
            i = ii(r + '.200', 0.16)(n)
        return { bg: N(r + '.100', i)(t), color: N(r + '.800', r + '.200')(t) }
    },
    oC = function (t) {
        var r = t.colorScheme,
            n = t.theme,
            i = ii(r + '.200', 0.8)(n),
            o = Ne(n, r + '.500'),
            a = N(o, i)(t)
        return { color: a, boxShadow: 'inset 0 0 0px 1px ' + a }
    },
    aC = { solid: nC, subtle: iC, outline: oC },
    sC = { variant: 'subtle', colorScheme: 'gray' },
    oi = { baseStyle: rC, variants: aC, defaultProps: sC },
    lC = {
        transitionProperty: 'common',
        transitionDuration: 'fast',
        transitionTimingFunction: 'ease-out',
        cursor: 'pointer',
        textDecoration: 'none',
        outline: 'none',
        color: 'inherit',
        _hover: { textDecoration: 'underline' },
        _focus: { boxShadow: 'outline' },
    },
    uC = { link: lC },
    cC = { parts: fb.keys, baseStyle: uC },
    fC = {
        lineHeight: '1.2',
        borderRadius: 'md',
        fontWeight: 'semibold',
        transitionProperty: 'common',
        transitionDuration: 'normal',
        _focus: { boxShadow: 'outline' },
        _disabled: { opacity: 0.4, cursor: 'not-allowed', boxShadow: 'none' },
        _hover: { _disabled: { bg: 'initial' } },
    },
    Cm = function (t) {
        var r = t.colorScheme,
            n = t.theme
        if (r === 'gray')
            return {
                color: N('inherit', 'whiteAlpha.900')(t),
                _hover: { bg: N('gray.100', 'whiteAlpha.200')(t) },
                _active: { bg: N('gray.200', 'whiteAlpha.300')(t) },
            }
        var i = ii(r + '.200', 0.12)(n),
            o = ii(r + '.200', 0.24)(n)
        return {
            color: N(r + '.600', r + '.200')(t),
            bg: 'transparent',
            _hover: { bg: N(r + '.50', i)(t) },
            _active: { bg: N(r + '.100', o)(t) },
        }
    },
    dC = function (t) {
        var r = t.colorScheme,
            n = N('gray.200', 'whiteAlpha.300')(t)
        return Pe(
            {
                border: '1px solid',
                borderColor: r === 'gray' ? n : 'currentColor',
            },
            Cm(t)
        )
    },
    hC = {
        yellow: {
            bg: 'yellow.400',
            color: 'black',
            hoverBg: 'yellow.500',
            activeBg: 'yellow.600',
        },
        cyan: {
            bg: 'cyan.400',
            color: 'black',
            hoverBg: 'cyan.500',
            activeBg: 'cyan.600',
        },
    },
    pC = function (t) {
        var r,
            n = t.colorScheme
        if (n === 'gray') {
            var i = N('gray.100', 'whiteAlpha.200')(t)
            return {
                bg: i,
                _hover: {
                    bg: N('gray.200', 'whiteAlpha.300')(t),
                    _disabled: { bg: i },
                },
                _active: { bg: N('gray.300', 'whiteAlpha.400')(t) },
            }
        }
        var o = (r = hC[n]) != null ? r : {},
            a = o.bg,
            s = a === void 0 ? n + '.500' : a,
            l = o.color,
            u = l === void 0 ? 'white' : l,
            d = o.hoverBg,
            m = d === void 0 ? n + '.600' : d,
            p = o.activeBg,
            x = p === void 0 ? n + '.700' : p,
            _ = N(s, n + '.200')(t)
        return {
            bg: _,
            color: N(u, 'gray.800')(t),
            _hover: { bg: N(m, n + '.300')(t), _disabled: { bg: _ } },
            _active: { bg: N(x, n + '.400')(t) },
        }
    },
    mC = function (t) {
        var r = t.colorScheme
        return {
            padding: 0,
            height: 'auto',
            lineHeight: 'normal',
            verticalAlign: 'baseline',
            color: N(r + '.500', r + '.200')(t),
            _hover: {
                textDecoration: 'underline',
                _disabled: { textDecoration: 'none' },
            },
            _active: { color: N(r + '.700', r + '.500')(t) },
        }
    },
    vC = {
        bg: 'none',
        color: 'inherit',
        display: 'inline',
        lineHeight: 'inherit',
        m: 0,
        p: 0,
    },
    gC = { ghost: Cm, outline: dC, solid: pC, link: mC, unstyled: vC },
    yC = {
        lg: { h: 12, minW: 12, fontSize: 'lg', px: 6 },
        md: { h: 10, minW: 10, fontSize: 'md', px: 4 },
        sm: { h: 8, minW: 8, fontSize: 'sm', px: 3 },
        xs: { h: 6, minW: 6, fontSize: 'xs', px: 2 },
    },
    SC = { variant: 'solid', size: 'md', colorScheme: 'gray' },
    xC = { baseStyle: fC, variants: gC, sizes: yC, defaultProps: SC },
    wC = function (t) {
        var r = t.colorScheme
        return {
            w: '100%',
            transitionProperty: 'box-shadow',
            transitionDuration: 'normal',
            border: '2px solid',
            borderRadius: 'sm',
            borderColor: 'inherit',
            color: 'white',
            _checked: {
                bg: N(r + '.500', r + '.200')(t),
                borderColor: N(r + '.500', r + '.200')(t),
                color: N('white', 'gray.900')(t),
                _hover: {
                    bg: N(r + '.600', r + '.300')(t),
                    borderColor: N(r + '.600', r + '.300')(t),
                },
                _disabled: {
                    borderColor: N('gray.200', 'transparent')(t),
                    bg: N('gray.200', 'whiteAlpha.300')(t),
                    color: N('gray.500', 'whiteAlpha.500')(t),
                },
            },
            _indeterminate: {
                bg: N(r + '.500', r + '.200')(t),
                borderColor: N(r + '.500', r + '.200')(t),
                color: N('white', 'gray.900')(t),
            },
            _disabled: {
                bg: N('gray.100', 'whiteAlpha.100')(t),
                borderColor: N('gray.100', 'transparent')(t),
            },
            _focus: { boxShadow: 'outline' },
            _invalid: { borderColor: N('red.500', 'red.300')(t) },
        }
    },
    bC = { userSelect: 'none', _disabled: { opacity: 0.4 } },
    CC = { transitionProperty: 'transform', transitionDuration: 'normal' },
    _C = function (t) {
        return { icon: CC, control: wC(t), label: bC }
    },
    EC = {
        sm: {
            control: { h: 3, w: 3 },
            label: { fontSize: 'sm' },
            icon: { fontSize: '0.45rem' },
        },
        md: {
            control: { w: 4, h: 4 },
            label: { fontSize: 'md' },
            icon: { fontSize: '0.625rem' },
        },
        lg: {
            control: { w: 5, h: 5 },
            label: { fontSize: 'lg' },
            icon: { fontSize: '0.625rem' },
        },
    },
    kC = { size: 'md', colorScheme: 'blue' },
    Qc = { parts: db.keys, baseStyle: _C, sizes: EC, defaultProps: kC },
    Rs,
    Ps,
    Fs,
    Po = gt('close-button-size'),
    TC = function (t) {
        var r = N('blackAlpha.100', 'whiteAlpha.100')(t),
            n = N('blackAlpha.200', 'whiteAlpha.200')(t)
        return {
            w: [Po.reference],
            h: [Po.reference],
            borderRadius: 'md',
            transitionProperty: 'common',
            transitionDuration: 'normal',
            _disabled: {
                opacity: 0.4,
                cursor: 'not-allowed',
                boxShadow: 'none',
            },
            _hover: { bg: r },
            _active: { bg: n },
            _focus: { boxShadow: 'outline' },
        }
    },
    AC = {
        lg: ((Rs = {}), (Rs[Po.variable] = '40px'), (Rs.fontSize = '16px'), Rs),
        md: ((Ps = {}), (Ps[Po.variable] = '32px'), (Ps.fontSize = '12px'), Ps),
        sm: ((Fs = {}), (Fs[Po.variable] = '24px'), (Fs.fontSize = '10px'), Fs),
    },
    IC = { size: 'md' },
    RC = { baseStyle: TC, sizes: AC, defaultProps: IC },
    PC = oi.variants,
    FC = oi.defaultProps,
    DC = {
        fontFamily: 'mono',
        fontSize: 'sm',
        px: '0.2em',
        borderRadius: 'sm',
    },
    BC = { baseStyle: DC, variants: PC, defaultProps: FC },
    NC = { w: '100%', mx: 'auto', maxW: '60ch', px: '1rem' },
    UC = { baseStyle: NC },
    MC = { opacity: 0.6, borderColor: 'inherit' },
    OC = { borderStyle: 'solid' },
    $C = { borderStyle: 'dashed' },
    zC = { solid: OC, dashed: $C },
    LC = { variant: 'solid' },
    jC = { baseStyle: MC, variants: zC, defaultProps: LC }
function ai(e) {
    return e === 'full'
        ? { dialog: { maxW: '100vw', h: '100vh' } }
        : { dialog: { maxW: e } }
}
var WC = { bg: 'blackAlpha.600', zIndex: 'overlay' },
    HC = { display: 'flex', zIndex: 'modal', justifyContent: 'center' },
    VC = function (t) {
        var r = t.isFullHeight
        return Pe({}, r && { height: '100vh' }, {
            zIndex: 'modal',
            maxH: '100vh',
            bg: N('white', 'gray.700')(t),
            color: 'inherit',
            boxShadow: N('lg', 'dark-lg')(t),
        })
    },
    KC = { px: 6, py: 4, fontSize: 'xl', fontWeight: 'semibold' },
    qC = { position: 'absolute', top: 2, insetEnd: 3 },
    GC = { px: 6, py: 2, flex: 1, overflow: 'auto' },
    YC = { px: 6, py: 4 },
    XC = function (t) {
        return {
            overlay: WC,
            dialogContainer: HC,
            dialog: VC(t),
            header: KC,
            closeButton: qC,
            body: GC,
            footer: YC,
        }
    },
    QC = {
        xs: ai('xs'),
        sm: ai('md'),
        md: ai('lg'),
        lg: ai('2xl'),
        xl: ai('4xl'),
        full: ai('full'),
    },
    JC = { size: 'xs' },
    ZC = { parts: hb.keys, baseStyle: XC, sizes: QC, defaultProps: JC },
    e2 = {
        borderRadius: 'md',
        py: '3px',
        transitionProperty: 'common',
        transitionDuration: 'normal',
    },
    t2 = {
        borderRadius: 'md',
        py: '3px',
        transitionProperty: 'common',
        transitionDuration: 'normal',
        width: 'full',
        _focus: { boxShadow: 'outline' },
        _placeholder: { opacity: 0.6 },
    },
    r2 = { preview: e2, input: t2 },
    n2 = { parts: pb.keys, baseStyle: r2 },
    i2 = function (t) {
        return { marginStart: 1, color: N('red.500', 'red.300')(t) }
    },
    o2 = function (t) {
        return {
            mt: 2,
            color: N('gray.500', 'whiteAlpha.600')(t),
            lineHeight: 'normal',
            fontSize: 'sm',
        }
    },
    a2 = function (t) {
        return {
            container: { width: '100%', position: 'relative' },
            requiredIndicator: i2(t),
            helperText: o2(t),
        }
    },
    s2 = { parts: mb.keys, baseStyle: a2 },
    l2 = {
        fontSize: 'md',
        marginEnd: 3,
        mb: 2,
        fontWeight: 'medium',
        transitionProperty: 'common',
        transitionDuration: 'normal',
        opacity: 1,
        _disabled: { opacity: 0.4 },
    },
    u2 = { baseStyle: l2 },
    c2 = { fontFamily: 'heading', fontWeight: 'bold' },
    f2 = {
        '4xl': { fontSize: ['6xl', null, '7xl'], lineHeight: 1 },
        '3xl': { fontSize: ['5xl', null, '6xl'], lineHeight: 1 },
        '2xl': { fontSize: ['4xl', null, '5xl'], lineHeight: [1.2, null, 1] },
        xl: { fontSize: ['3xl', null, '4xl'], lineHeight: [1.33, null, 1.2] },
        lg: { fontSize: ['2xl', null, '3xl'], lineHeight: [1.33, null, 1.2] },
        md: { fontSize: 'xl', lineHeight: 1.2 },
        sm: { fontSize: 'md', lineHeight: 1.2 },
        xs: { fontSize: 'sm', lineHeight: 1.2 },
    },
    d2 = { size: 'xl' },
    h2 = { baseStyle: c2, sizes: f2, defaultProps: d2 },
    p2 = {
        field: {
            width: '100%',
            minWidth: 0,
            outline: 0,
            position: 'relative',
            appearance: 'none',
            transitionProperty: 'common',
            transitionDuration: 'normal',
        },
    },
    Mr = {
        lg: { fontSize: 'lg', px: 4, h: 12, borderRadius: 'md' },
        md: { fontSize: 'md', px: 4, h: 10, borderRadius: 'md' },
        sm: { fontSize: 'sm', px: 3, h: 8, borderRadius: 'sm' },
        xs: { fontSize: 'xs', px: 2, h: 6, borderRadius: 'sm' },
    },
    m2 = {
        lg: { field: Mr.lg, addon: Mr.lg },
        md: { field: Mr.md, addon: Mr.md },
        sm: { field: Mr.sm, addon: Mr.sm },
        xs: { field: Mr.xs, addon: Mr.xs },
    }
function Jc(e) {
    var t = e.focusBorderColor,
        r = e.errorBorderColor
    return {
        focusBorderColor: t || N('blue.500', 'blue.300')(e),
        errorBorderColor: r || N('red.500', 'red.300')(e),
    }
}
var v2 = function (t) {
        var r = t.theme,
            n = Jc(t),
            i = n.focusBorderColor,
            o = n.errorBorderColor
        return {
            field: {
                border: '1px solid',
                borderColor: 'inherit',
                bg: 'inherit',
                _hover: { borderColor: N('gray.300', 'whiteAlpha.400')(t) },
                _readOnly: { boxShadow: 'none !important', userSelect: 'all' },
                _disabled: { opacity: 0.4, cursor: 'not-allowed' },
                _invalid: {
                    borderColor: Ne(r, o),
                    boxShadow: '0 0 0 1px ' + Ne(r, o),
                },
                _focus: {
                    zIndex: 1,
                    borderColor: Ne(r, i),
                    boxShadow: '0 0 0 1px ' + Ne(r, i),
                },
            },
            addon: {
                border: '1px solid',
                borderColor: N('inherit', 'whiteAlpha.50')(t),
                bg: N('gray.100', 'whiteAlpha.300')(t),
            },
        }
    },
    g2 = function (t) {
        var r = t.theme,
            n = Jc(t),
            i = n.focusBorderColor,
            o = n.errorBorderColor
        return {
            field: {
                border: '2px solid',
                borderColor: 'transparent',
                bg: N('gray.100', 'whiteAlpha.50')(t),
                _hover: { bg: N('gray.200', 'whiteAlpha.100')(t) },
                _readOnly: { boxShadow: 'none !important', userSelect: 'all' },
                _disabled: { opacity: 0.4, cursor: 'not-allowed' },
                _invalid: { borderColor: Ne(r, o) },
                _focus: { bg: 'transparent', borderColor: Ne(r, i) },
            },
            addon: {
                border: '2px solid',
                borderColor: 'transparent',
                bg: N('gray.100', 'whiteAlpha.50')(t),
            },
        }
    },
    y2 = function (t) {
        var r = t.theme,
            n = Jc(t),
            i = n.focusBorderColor,
            o = n.errorBorderColor
        return {
            field: {
                borderBottom: '1px solid',
                borderColor: 'inherit',
                borderRadius: 0,
                px: 0,
                bg: 'transparent',
                _readOnly: { boxShadow: 'none !important', userSelect: 'all' },
                _invalid: {
                    borderColor: Ne(r, o),
                    boxShadow: '0px 1px 0px 0px ' + Ne(r, o),
                },
                _focus: {
                    borderColor: Ne(r, i),
                    boxShadow: '0px 1px 0px 0px ' + Ne(r, i),
                },
            },
            addon: {
                borderBottom: '2px solid',
                borderColor: 'inherit',
                borderRadius: 0,
                px: 0,
                bg: 'transparent',
            },
        }
    },
    S2 = {
        field: { bg: 'transparent', px: 0, height: 'auto' },
        addon: { bg: 'transparent', px: 0, height: 'auto' },
    },
    x2 = { outline: v2, filled: g2, flushed: y2, unstyled: S2 },
    w2 = { size: 'md', variant: 'outline' },
    Ee = {
        parts: gb.keys,
        baseStyle: p2,
        sizes: m2,
        variants: x2,
        defaultProps: w2,
    },
    b2 = function (t) {
        return {
            bg: N('gray.100', 'whiteAlpha')(t),
            borderRadius: 'md',
            borderWidth: '1px',
            borderBottomWidth: '3px',
            fontSize: '0.8em',
            fontWeight: 'bold',
            lineHeight: 'normal',
            px: '0.4em',
            whiteSpace: 'nowrap',
        }
    },
    C2 = { baseStyle: b2 },
    _2 = {
        transitionProperty: 'common',
        transitionDuration: 'fast',
        transitionTimingFunction: 'ease-out',
        cursor: 'pointer',
        textDecoration: 'none',
        outline: 'none',
        color: 'inherit',
        _hover: { textDecoration: 'underline' },
        _focus: { boxShadow: 'outline' },
    },
    E2 = { baseStyle: _2 },
    k2 = {
        marginEnd: '0.5rem',
        display: 'inline',
        verticalAlign: 'text-bottom',
    },
    T2 = { container: {}, item: {}, icon: k2 },
    A2 = { parts: yb.keys, baseStyle: T2 },
    I2 = function (t) {
        return {
            bg: N('#fff', 'gray.700')(t),
            boxShadow: N('sm', 'dark-lg')(t),
            color: 'inherit',
            minW: '3xs',
            py: '2',
            zIndex: 1,
            borderRadius: 'md',
            borderWidth: '1px',
        }
    },
    R2 = function (t) {
        return {
            py: '0.4rem',
            px: '0.8rem',
            transitionProperty: 'background',
            transitionDuration: 'ultra-fast',
            transitionTimingFunction: 'ease-in',
            _focus: { bg: N('gray.100', 'whiteAlpha.100')(t) },
            _active: { bg: N('gray.200', 'whiteAlpha.200')(t) },
            _expanded: { bg: N('gray.100', 'whiteAlpha.100')(t) },
            _disabled: { opacity: 0.4, cursor: 'not-allowed' },
        }
    },
    P2 = { mx: 4, my: 2, fontWeight: 'semibold', fontSize: 'sm' },
    F2 = { opacity: 0.6 },
    D2 = {
        border: 0,
        borderBottom: '1px solid',
        borderColor: 'inherit',
        my: '0.5rem',
        opacity: 0.6,
    },
    B2 = { transitionProperty: 'common', transitionDuration: 'normal' },
    N2 = function (t) {
        return {
            button: B2,
            list: I2(t),
            item: R2(t),
            groupTitle: P2,
            command: F2,
            divider: D2,
        }
    },
    U2 = { parts: Sb.keys, baseStyle: N2 },
    M2 = { bg: 'blackAlpha.600', zIndex: 'modal' },
    O2 = function (t) {
        var r = t.isCentered,
            n = t.scrollBehavior
        return {
            display: 'flex',
            zIndex: 'modal',
            justifyContent: 'center',
            alignItems: r ? 'center' : 'flex-start',
            overflow: n === 'inside' ? 'hidden' : 'auto',
        }
    },
    $2 = function (t) {
        var r = t.scrollBehavior
        return {
            borderRadius: 'md',
            bg: N('white', 'gray.700')(t),
            color: 'inherit',
            my: '3.75rem',
            zIndex: 'modal',
            maxH: r === 'inside' ? 'calc(100% - 7.5rem)' : void 0,
            boxShadow: N('lg', 'dark-lg')(t),
        }
    },
    z2 = { px: 6, py: 4, fontSize: 'xl', fontWeight: 'semibold' },
    L2 = { position: 'absolute', top: 2, insetEnd: 3 },
    j2 = function (t) {
        var r = t.scrollBehavior
        return {
            px: 6,
            py: 2,
            flex: 1,
            overflow: r === 'inside' ? 'auto' : void 0,
        }
    },
    W2 = { px: 6, py: 4 },
    H2 = function (t) {
        return {
            overlay: M2,
            dialogContainer: O2(t),
            dialog: $2(t),
            header: z2,
            closeButton: L2,
            body: j2(t),
            footer: W2,
        }
    }
function $t(e) {
    return e === 'full'
        ? { dialog: { maxW: '100vw', minH: '100vh', my: 0 } }
        : { dialog: { maxW: e } }
}
var V2 = {
        xs: $t('xs'),
        sm: $t('sm'),
        md: $t('md'),
        lg: $t('lg'),
        xl: $t('xl'),
        '2xl': $t('2xl'),
        '3xl': $t('3xl'),
        '4xl': $t('4xl'),
        '5xl': $t('5xl'),
        '6xl': $t('6xl'),
        full: $t('full'),
    },
    K2 = { size: 'md' },
    q2 = { parts: xb.keys, baseStyle: H2, sizes: V2, defaultProps: K2 },
    G2 = {
        letterSpacings: {
            tighter: '-0.05em',
            tight: '-0.025em',
            normal: '0',
            wide: '0.025em',
            wider: '0.05em',
            widest: '0.1em',
        },
        lineHeights: {
            normal: 'normal',
            none: 1,
            shorter: 1.25,
            short: 1.375,
            base: 1.5,
            tall: 1.625,
            taller: '2',
            3: '.75rem',
            4: '1rem',
            5: '1.25rem',
            6: '1.5rem',
            7: '1.75rem',
            8: '2rem',
            9: '2.25rem',
            10: '2.5rem',
        },
        fontWeights: {
            hairline: 100,
            thin: 200,
            light: 300,
            normal: 400,
            medium: 500,
            semibold: 600,
            bold: 700,
            extrabold: 800,
            black: 900,
        },
        fonts: {
            heading:
                '-apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
            body: '-apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
            mono: 'SFMono-Regular,Menlo,Monaco,Consolas,"Liberation Mono","Courier New",monospace',
        },
        fontSizes: {
            xs: '0.75rem',
            sm: '0.875rem',
            md: '1rem',
            lg: '1.125rem',
            xl: '1.25rem',
            '2xl': '1.5rem',
            '3xl': '1.875rem',
            '4xl': '2.25rem',
            '5xl': '3rem',
            '6xl': '3.75rem',
            '7xl': '4.5rem',
            '8xl': '6rem',
            '9xl': '8rem',
        },
    },
    _m = G2,
    Ds,
    Em,
    km,
    Y2 = Ee.variants,
    X2 = Ee.defaultProps,
    Zc = gt('number-input-stepper-width'),
    Tm = gt('number-input-input-padding'),
    Q2 = pr(Zc).add('0.5rem').toString(),
    J2 = ((Ds = {}), (Ds[Zc.variable] = '24px'), (Ds[Tm.variable] = Q2), Ds),
    Z2 =
        (Em = (km = Ee.baseStyle) == null ? void 0 : km.field) != null
            ? Em
            : {},
    e_ = { width: [Zc.reference] },
    t_ = function (t) {
        return {
            borderStart: '1px solid',
            borderStartColor: N('inherit', 'whiteAlpha.300')(t),
            color: N('inherit', 'whiteAlpha.800')(t),
            _active: { bg: N('gray.200', 'whiteAlpha.300')(t) },
            _disabled: { opacity: 0.4, cursor: 'not-allowed' },
        }
    },
    r_ = function (t) {
        return { root: J2, field: Z2, stepperGroup: e_, stepper: t_(t) }
    }
function Bs(e) {
    var t,
        r,
        n = Ee.sizes[e],
        i = { lg: 'md', md: 'md', sm: 'sm', xs: 'sm' },
        o =
            (t = (r = n.field) == null ? void 0 : r.fontSize) != null
                ? t
                : 'md',
        a = _m.fontSizes[o.toString()]
    return {
        field: Pe({}, n.field, {
            paddingInlineEnd: Tm.reference,
            verticalAlign: 'top',
        }),
        stepper: {
            fontSize: pr(a).multiply(0.75).toString(),
            _first: { borderTopEndRadius: i[e] },
            _last: {
                borderBottomEndRadius: i[e],
                mt: '-1px',
                borderTopWidth: 1,
            },
        },
    }
}
var n_ = { xs: Bs('xs'), sm: Bs('sm'), md: Bs('md'), lg: Bs('lg') },
    i_ = {
        parts: wb.keys,
        baseStyle: r_,
        sizes: n_,
        variants: Y2,
        defaultProps: X2,
    },
    Am,
    o_ = Pe({}, Ee.baseStyle.field, { textAlign: 'center' }),
    a_ = {
        lg: { fontSize: 'lg', w: 12, h: 12, borderRadius: 'md' },
        md: { fontSize: 'md', w: 10, h: 10, borderRadius: 'md' },
        sm: { fontSize: 'sm', w: 8, h: 8, borderRadius: 'sm' },
        xs: { fontSize: 'xs', w: 6, h: 6, borderRadius: 'sm' },
    },
    s_ = {
        outline: function (t) {
            var r
            return (r = Ee.variants.outline(t).field) != null ? r : {}
        },
        flushed: function (t) {
            var r
            return (r = Ee.variants.flushed(t).field) != null ? r : {}
        },
        filled: function (t) {
            var r
            return (r = Ee.variants.filled(t).field) != null ? r : {}
        },
        unstyled: (Am = Ee.variants.unstyled.field) != null ? Am : {},
    },
    l_ = Ee.defaultProps,
    u_ = { baseStyle: o_, sizes: a_, variants: s_, defaultProps: l_ },
    ef = gt('popper-bg'),
    c_ = gt('popper-arrow-bg'),
    f_ = gt('popper-arrow-shadow-color'),
    d_ = { zIndex: 10 },
    h_ = function (t) {
        var r,
            n = N('white', 'gray.700')(t),
            i = N('gray.200', 'whiteAlpha.300')(t)
        return (
            (r = {}),
            (r[ef.variable] = 'colors.' + n),
            (r.bg = ef.reference),
            (r[c_.variable] = ef.reference),
            (r[f_.variable] = 'colors.' + i),
            (r.width = 'xs'),
            (r.border = '1px solid'),
            (r.borderColor = 'inherit'),
            (r.borderRadius = 'md'),
            (r.boxShadow = 'sm'),
            (r.zIndex = 'inherit'),
            (r._focus = { outline: 0, boxShadow: 'outline' }),
            r
        )
    },
    p_ = { px: 3, py: 2, borderBottomWidth: '1px' },
    m_ = { px: 3, py: 2 },
    v_ = { px: 3, py: 2, borderTopWidth: '1px' },
    g_ = {
        position: 'absolute',
        borderRadius: 'md',
        top: 1,
        insetEnd: 2,
        padding: 2,
    },
    y_ = function (t) {
        return {
            popper: d_,
            content: h_(t),
            header: p_,
            body: m_,
            footer: v_,
            arrow: {},
            closeButton: g_,
        }
    },
    S_ = { parts: bb.keys, baseStyle: y_ }
function x_(e) {
    var t = e.colorScheme,
        r = e.theme,
        n = e.isIndeterminate,
        i = e.hasStripe,
        o = N(hm(), hm('1rem', 'rgba(0,0,0,0.1)'))(e),
        a = N(t + '.500', t + '.200')(e),
        s =
            `linear-gradient(
    to right,
    transparent 0%,
    ` +
            Ne(r, a) +
            ` 50%,
    transparent 100%
  )`,
        l = !n && i
    return Pe({}, l && o, n ? { bgImage: s } : { bgColor: a })
}
var w_ = {
        lineHeight: '1',
        fontSize: '0.25em',
        fontWeight: 'bold',
        color: 'white',
    },
    b_ = function (t) {
        return { bg: N('gray.100', 'whiteAlpha.300')(t) }
    },
    C_ = function (t) {
        return Pe(
            { transitionProperty: 'common', transitionDuration: 'slow' },
            x_(t)
        )
    },
    __ = function (t) {
        return { label: w_, filledTrack: C_(t), track: b_(t) }
    },
    E_ = {
        xs: { track: { h: '0.25rem' } },
        sm: { track: { h: '0.5rem' } },
        md: { track: { h: '0.75rem' } },
        lg: { track: { h: '1rem' } },
    },
    k_ = { size: 'md', colorScheme: 'blue' },
    T_ = { parts: Cb.keys, sizes: E_, baseStyle: __, defaultProps: k_ },
    A_ = function (t) {
        var r = Qc.baseStyle(t),
            n = r.control,
            i = n === void 0 ? {} : n
        return Pe({}, i, {
            borderRadius: 'full',
            _checked: Pe({}, i._checked, {
                _before: {
                    content: '""',
                    display: 'inline-block',
                    pos: 'relative',
                    w: '50%',
                    h: '50%',
                    borderRadius: '50%',
                    bg: 'currentColor',
                },
            }),
        })
    },
    I_ = function (t) {
        return { label: Qc.baseStyle(t).label, control: A_(t) }
    },
    R_ = {
        md: { control: { w: 4, h: 4 }, label: { fontSize: 'md' } },
        lg: { control: { w: 5, h: 5 }, label: { fontSize: 'lg' } },
        sm: { control: { width: 3, height: 3 }, label: { fontSize: 'sm' } },
    },
    P_ = { size: 'md', colorScheme: 'blue' },
    F_ = { parts: _b.keys, baseStyle: I_, sizes: R_, defaultProps: P_ },
    D_ = function (t) {
        return Pe({}, Ee.baseStyle.field, {
            bg: N('white', 'gray.700')(t),
            appearance: 'none',
            paddingBottom: '1px',
            lineHeight: 'normal',
            '> option, > optgroup': { bg: N('white', 'gray.700')(t) },
        })
    },
    B_ = {
        width: '1.5rem',
        height: '100%',
        insetEnd: '0.5rem',
        position: 'relative',
        color: 'currentColor',
        fontSize: '1.25rem',
        _disabled: { opacity: 0.5 },
    },
    N_ = function (t) {
        return { field: D_(t), icon: B_ }
    },
    Ns = { paddingInlineEnd: '2rem' },
    U_ = fr({}, Ee.sizes, {
        lg: { field: Ns },
        md: { field: Ns },
        sm: { field: Ns },
        xs: { field: Ns, icon: { insetEnd: '0.25rem' } },
    }),
    M_ = {
        parts: Eb.keys,
        baseStyle: N_,
        sizes: U_,
        variants: Ee.variants,
        defaultProps: Ee.defaultProps,
    },
    O_ = function (t, r) {
        return x0({
            from: { borderColor: t, background: t },
            to: { borderColor: r, background: r },
        })
    },
    $_ = function (t) {
        var r = N('gray.100', 'gray.800')(t),
            n = N('gray.400', 'gray.600')(t),
            i = t.startColor,
            o = i === void 0 ? r : i,
            a = t.endColor,
            s = a === void 0 ? n : a,
            l = t.speed,
            u = t.theme,
            d = Ne(u, o),
            m = Ne(u, s)
        return {
            opacity: 0.7,
            borderRadius: '2px',
            borderColor: d,
            background: m,
            animation: l + 's linear infinite alternate ' + O_(d, m),
        }
    },
    z_ = { baseStyle: $_ },
    L_ = function (t) {
        return {
            borderRadius: 'md',
            fontWeight: 'semibold',
            _focus: {
                boxShadow: 'outline',
                padding: '1rem',
                position: 'fixed',
                top: '1.5rem',
                insetStart: '1.5rem',
                bg: N('white', 'gray.700')(t),
            },
        }
    },
    j_ = { baseStyle: L_ }
function W_(e) {
    return Ro({
        orientation: e.orientation,
        vertical: {
            left: '50%',
            transform: 'translateX(-50%)',
            _active: { transform: 'translateX(-50%) scale(1.15)' },
        },
        horizontal: {
            top: '50%',
            transform: 'translateY(-50%)',
            _active: { transform: 'translateY(-50%) scale(1.15)' },
        },
    })
}
var H_ = function (t) {
        var r = t.orientation
        return Pe(
            {
                display: 'inline-block',
                position: 'relative',
                cursor: 'pointer',
                _disabled: {
                    opacity: 0.6,
                    cursor: 'default',
                    pointerEvents: 'none',
                },
            },
            Ro({
                orientation: r,
                vertical: { h: '100%' },
                horizontal: { w: '100%' },
            })
        )
    },
    V_ = function (t) {
        return {
            overflow: 'hidden',
            borderRadius: 'sm',
            bg: N('gray.200', 'whiteAlpha.200')(t),
            _disabled: { bg: N('gray.300', 'whiteAlpha.300')(t) },
        }
    },
    K_ = function (t) {
        return Pe(
            {
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                position: 'absolute',
                outline: 0,
                zIndex: 1,
                borderRadius: 'full',
                bg: 'white',
                boxShadow: 'base',
                border: '1px solid',
                borderColor: 'transparent',
                transitionProperty: 'transform',
                transitionDuration: 'normal',
                _focus: { boxShadow: 'outline' },
                _disabled: { bg: 'gray.300' },
            },
            W_(t)
        )
    },
    q_ = function (t) {
        var r = t.colorScheme
        return {
            width: 'inherit',
            height: 'inherit',
            bg: N(r + '.500', r + '.200')(t),
        }
    },
    G_ = function (t) {
        return {
            container: H_(t),
            track: V_(t),
            thumb: K_(t),
            filledTrack: q_(t),
        }
    },
    Y_ = function (t) {
        return {
            thumb: { w: '16px', h: '16px' },
            track: Ro({
                orientation: t.orientation,
                horizontal: { h: '4px' },
                vertical: { w: '4px' },
            }),
        }
    },
    X_ = function (t) {
        return {
            thumb: { w: '14px', h: '14px' },
            track: Ro({
                orientation: t.orientation,
                horizontal: { h: '4px' },
                vertical: { w: '4px' },
            }),
        }
    },
    Q_ = function (t) {
        return {
            thumb: { w: '10px', h: '10px' },
            track: Ro({
                orientation: t.orientation,
                horizontal: { h: '2px' },
                vertical: { w: '2px' },
            }),
        }
    },
    J_ = { lg: Y_, md: X_, sm: Q_ },
    Z_ = { size: 'md', colorScheme: 'blue' },
    eE = { parts: kb.keys, sizes: J_, baseStyle: G_, defaultProps: Z_ },
    tf,
    rf,
    nf,
    of,
    af,
    hn = gt('spinner-size'),
    tE = { width: [hn.reference], height: [hn.reference] },
    rE = {
        xs: ((tf = {}), (tf[hn.variable] = '0.75rem'), tf),
        sm: ((rf = {}), (rf[hn.variable] = '1rem'), rf),
        md: ((nf = {}), (nf[hn.variable] = '1.5rem'), nf),
        lg: ((of = {}), (of[hn.variable] = '2rem'), of),
        xl: ((af = {}), (af[hn.variable] = '3rem'), af),
    },
    nE = { size: 'md' },
    iE = { baseStyle: tE, sizes: rE, defaultProps: nE },
    oE = { fontWeight: 'medium' },
    aE = { opacity: 0.8, marginBottom: 2 },
    sE = { verticalAlign: 'baseline', fontWeight: 'semibold' },
    lE = { marginEnd: 1, w: '14px', h: '14px', verticalAlign: 'middle' },
    uE = { container: {}, label: oE, helpText: aE, number: sE, icon: lE },
    cE = {
        md: {
            label: { fontSize: 'sm' },
            helpText: { fontSize: 'sm' },
            number: { fontSize: '2xl' },
        },
    },
    fE = { size: 'md' },
    dE = { parts: Tb.keys, baseStyle: uE, sizes: cE, defaultProps: fE },
    Us,
    Ms,
    Os,
    Fo = gt('switch-track-width'),
    pn = gt('switch-track-height'),
    sf = gt('switch-track-diff'),
    hE = pr.subtract(Fo, pn),
    lf = gt('switch-thumb-x'),
    pE = function (t) {
        var r = t.colorScheme
        return {
            borderRadius: 'full',
            p: '2px',
            width: [Fo.reference],
            height: [pn.reference],
            transitionProperty: 'common',
            transitionDuration: 'fast',
            bg: N('gray.300', 'whiteAlpha.400')(t),
            _focus: { boxShadow: 'outline' },
            _disabled: { opacity: 0.4, cursor: 'not-allowed' },
            _checked: { bg: N(r + '.500', r + '.200')(t) },
        }
    },
    mE = {
        bg: 'white',
        transitionProperty: 'transform',
        transitionDuration: 'normal',
        borderRadius: 'inherit',
        width: [pn.reference],
        height: [pn.reference],
        _checked: { transform: 'translateX(' + lf.reference + ')' },
    },
    vE = function (t) {
        var r, n
        return {
            container:
                ((n = {}),
                (n[sf.variable] = hE),
                (n[lf.variable] = sf.reference),
                (n._rtl =
                    ((r = {}),
                    (r[lf.variable] = pr(sf).negate().toString()),
                    r)),
                n),
            track: pE(t),
            thumb: mE,
        }
    },
    gE = {
        sm: {
            container:
                ((Us = {}),
                (Us[Fo.variable] = '1.375rem'),
                (Us[pn.variable] = '0.75rem'),
                Us),
        },
        md: {
            container:
                ((Ms = {}),
                (Ms[Fo.variable] = '1.875rem'),
                (Ms[pn.variable] = '1rem'),
                Ms),
        },
        lg: {
            container:
                ((Os = {}),
                (Os[Fo.variable] = '2.875rem'),
                (Os[pn.variable] = '1.5rem'),
                Os),
        },
    },
    yE = { size: 'md', colorScheme: 'blue' },
    SE = { parts: Ab.keys, baseStyle: vE, sizes: gE, defaultProps: yE },
    xE = {
        table: {
            fontVariantNumeric: 'lining-nums tabular-nums',
            borderCollapse: 'collapse',
            width: 'full',
        },
        th: {
            fontFamily: 'heading',
            fontWeight: 'bold',
            textTransform: 'uppercase',
            letterSpacing: 'wider',
            textAlign: 'start',
        },
        td: { textAlign: 'start' },
        caption: {
            mt: 4,
            fontFamily: 'heading',
            textAlign: 'center',
            fontWeight: 'medium',
        },
    },
    $s = { '&[data-is-numeric=true]': { textAlign: 'end' } },
    wE = function (t) {
        var r = t.colorScheme
        return {
            th: Pe(
                {
                    color: N('gray.600', 'gray.400')(t),
                    borderBottom: '1px',
                    borderColor: N(r + '.100', r + '.700')(t),
                },
                $s
            ),
            td: Pe(
                {
                    borderBottom: '1px',
                    borderColor: N(r + '.100', r + '.700')(t),
                },
                $s
            ),
            caption: { color: N('gray.600', 'gray.100')(t) },
            tfoot: {
                tr: { '&:last-of-type': { th: { borderBottomWidth: 0 } } },
            },
        }
    },
    bE = function (t) {
        var r = t.colorScheme
        return {
            th: Pe(
                {
                    color: N('gray.600', 'gray.400')(t),
                    borderBottom: '1px',
                    borderColor: N(r + '.100', r + '.700')(t),
                },
                $s
            ),
            td: Pe(
                {
                    borderBottom: '1px',
                    borderColor: N(r + '.100', r + '.700')(t),
                },
                $s
            ),
            caption: { color: N('gray.600', 'gray.100')(t) },
            tbody: {
                tr: {
                    '&:nth-of-type(odd)': {
                        'th, td': {
                            borderBottomWidth: '1px',
                            borderColor: N(r + '.100', r + '.700')(t),
                        },
                        td: { background: N(r + '.100', r + '.700')(t) },
                    },
                },
            },
            tfoot: {
                tr: { '&:last-of-type': { th: { borderBottomWidth: 0 } } },
            },
        }
    },
    CE = { simple: wE, striped: bE, unstyled: {} },
    _E = {
        sm: {
            th: { px: '4', py: '1', lineHeight: '4', fontSize: 'xs' },
            td: { px: '4', py: '2', fontSize: 'sm', lineHeight: '4' },
            caption: { px: '4', py: '2', fontSize: 'xs' },
        },
        md: {
            th: { px: '6', py: '3', lineHeight: '4', fontSize: 'xs' },
            td: { px: '6', py: '4', lineHeight: '5' },
            caption: { px: '6', py: '2', fontSize: 'sm' },
        },
        lg: {
            th: { px: '8', py: '4', lineHeight: '5', fontSize: 'sm' },
            td: { px: '8', py: '5', lineHeight: '6' },
            caption: { px: '6', py: '2', fontSize: 'md' },
        },
    },
    EE = { variant: 'simple', size: 'md', colorScheme: 'gray' },
    kE = {
        parts: Ib.keys,
        baseStyle: xE,
        variants: CE,
        sizes: _E,
        defaultProps: EE,
    },
    TE = function (t) {
        var r = t.orientation
        return { display: r === 'vertical' ? 'flex' : 'block' }
    },
    AE = function (t) {
        var r = t.isFitted
        return {
            flex: r ? 1 : void 0,
            transitionProperty: 'common',
            transitionDuration: 'normal',
            _focus: { zIndex: 1, boxShadow: 'outline' },
        }
    },
    IE = function (t) {
        var r = t.align,
            n = r === void 0 ? 'start' : r,
            i = t.orientation,
            o = { end: 'flex-end', center: 'center', start: 'flex-start' }
        return {
            justifyContent: o[n],
            flexDirection: i === 'vertical' ? 'column' : 'row',
        }
    },
    RE = { p: 4 },
    PE = function (t) {
        return { root: TE(t), tab: AE(t), tablist: IE(t), tabpanel: RE }
    },
    FE = {
        sm: { tab: { py: 1, px: 4, fontSize: 'sm' } },
        md: { tab: { fontSize: 'md', py: 2, px: 4 } },
        lg: { tab: { fontSize: 'lg', py: 3, px: 4 } },
    },
    DE = function (t) {
        var r,
            n,
            i = t.colorScheme,
            o = t.orientation,
            a = o === 'vertical',
            s = o === 'vertical' ? 'borderStart' : 'borderBottom',
            l = a ? 'marginStart' : 'marginBottom'
        return {
            tablist:
                ((r = {}),
                (r[s] = '2px solid'),
                (r.borderColor = 'inherit'),
                r),
            tab:
                ((n = {}),
                (n[s] = '2px solid'),
                (n.borderColor = 'transparent'),
                (n[l] = '-2px'),
                (n._selected = {
                    color: N(i + '.600', i + '.300')(t),
                    borderColor: 'currentColor',
                }),
                (n._active = { bg: N('gray.200', 'whiteAlpha.300')(t) }),
                (n._disabled = { opacity: 0.4, cursor: 'not-allowed' }),
                n),
        }
    },
    BE = function (t) {
        var r = t.colorScheme
        return {
            tab: {
                borderTopRadius: 'md',
                border: '1px solid',
                borderColor: 'transparent',
                mb: '-1px',
                _selected: {
                    color: N(r + '.600', r + '.300')(t),
                    borderColor: 'inherit',
                    borderBottomColor: N('white', 'gray.800')(t),
                },
            },
            tablist: {
                mb: '-1px',
                borderBottom: '1px solid',
                borderColor: 'inherit',
            },
        }
    },
    NE = function (t) {
        var r = t.colorScheme
        return {
            tab: {
                border: '1px solid',
                borderColor: 'inherit',
                bg: N('gray.50', 'whiteAlpha.50')(t),
                mb: '-1px',
                _notLast: { marginEnd: '-1px' },
                _selected: {
                    bg: N('#fff', 'gray.800')(t),
                    color: N(r + '.600', r + '.300')(t),
                    borderColor: 'inherit',
                    borderTopColor: 'currentColor',
                    borderBottomColor: 'transparent',
                },
            },
            tablist: {
                mb: '-1px',
                borderBottom: '1px solid',
                borderColor: 'inherit',
            },
        }
    },
    UE = function (t) {
        var r = t.colorScheme,
            n = t.theme
        return {
            tab: {
                borderRadius: 'full',
                fontWeight: 'semibold',
                color: 'gray.600',
                _selected: { color: Ne(n, r + '.700'), bg: Ne(n, r + '.100') },
            },
        }
    },
    ME = function (t) {
        var r = t.colorScheme
        return {
            tab: {
                borderRadius: 'full',
                fontWeight: 'semibold',
                color: N('gray.600', 'inherit')(t),
                _selected: {
                    color: N('#fff', 'gray.800')(t),
                    bg: N(r + '.600', r + '.300')(t),
                },
            },
        }
    },
    OE = {},
    $E = {
        line: DE,
        enclosed: BE,
        'enclosed-colored': NE,
        'soft-rounded': UE,
        'solid-rounded': ME,
        unstyled: OE,
    },
    zE = { size: 'md', variant: 'line', colorScheme: 'blue' },
    LE = {
        parts: Rb.keys,
        baseStyle: PE,
        sizes: FE,
        variants: $E,
        defaultProps: zE,
    },
    jE = {
        fontWeight: 'medium',
        lineHeight: 1.2,
        outline: 0,
        _focus: { boxShadow: 'outline' },
    },
    WE = { lineHeight: 1.2, overflow: 'visible' },
    HE = {
        fontSize: '18px',
        w: '1.25rem',
        h: '1.25rem',
        transitionProperty: 'common',
        transitionDuration: 'normal',
        borderRadius: 'full',
        marginStart: '0.375rem',
        marginEnd: '-1',
        opacity: 0.5,
        _disabled: { opacity: 0.4 },
        _focus: { boxShadow: 'outline', bg: 'rgba(0, 0, 0, 0.14)' },
        _hover: { opacity: 0.8 },
        _active: { opacity: 1 },
    },
    VE = { container: jE, label: WE, closeButton: HE },
    KE = {
        sm: {
            container: {
                minH: '1.25rem',
                minW: '1.25rem',
                fontSize: 'xs',
                px: 2,
                borderRadius: 'md',
            },
            closeButton: { marginEnd: '-2px', marginStart: '0.35rem' },
        },
        md: {
            container: {
                minH: '1.5rem',
                minW: '1.5rem',
                fontSize: 'sm',
                borderRadius: 'md',
                px: 2,
            },
        },
        lg: {
            container: {
                minH: 8,
                minW: 8,
                fontSize: 'md',
                borderRadius: 'md',
                px: 3,
            },
        },
    },
    qE = {
        subtle: function (t) {
            return { container: oi.variants.subtle(t) }
        },
        solid: function (t) {
            return { container: oi.variants.solid(t) }
        },
        outline: function (t) {
            return { container: oi.variants.outline(t) }
        },
    },
    GE = { size: 'md', variant: 'subtle', colorScheme: 'gray' },
    YE = {
        parts: Pb.keys,
        variants: qE,
        baseStyle: VE,
        sizes: KE,
        defaultProps: GE,
    },
    Im,
    Rm,
    Pm,
    Fm,
    Dm,
    XE = Pe({}, Ee.baseStyle.field, {
        paddingY: '8px',
        minHeight: '80px',
        lineHeight: 'short',
        verticalAlign: 'top',
    }),
    QE = {
        outline: function (t) {
            var r
            return (r = Ee.variants.outline(t).field) != null ? r : {}
        },
        flushed: function (t) {
            var r
            return (r = Ee.variants.flushed(t).field) != null ? r : {}
        },
        filled: function (t) {
            var r
            return (r = Ee.variants.filled(t).field) != null ? r : {}
        },
        unstyled: (Im = Ee.variants.unstyled.field) != null ? Im : {},
    },
    JE = {
        xs: (Rm = Ee.sizes.xs.field) != null ? Rm : {},
        sm: (Pm = Ee.sizes.sm.field) != null ? Pm : {},
        md: (Fm = Ee.sizes.md.field) != null ? Fm : {},
        lg: (Dm = Ee.sizes.lg.field) != null ? Dm : {},
    },
    ZE = { size: 'md', variant: 'outline' },
    ek = { baseStyle: XE, sizes: JE, variants: QE, defaultProps: ZE },
    uf = gt('tooltip-bg'),
    tk = gt('popper-arrow-bg'),
    rk = function (t) {
        var r,
            n = N('gray.700', 'gray.300')(t)
        return (
            (r = {}),
            (r[uf.variable] = 'colors.' + n),
            (r.px = '8px'),
            (r.py = '2px'),
            (r.bg = [uf.reference]),
            (r[tk.variable] = [uf.reference]),
            (r.color = N('whiteAlpha.900', 'gray.900')(t)),
            (r.borderRadius = 'sm'),
            (r.fontWeight = 'medium'),
            (r.fontSize = 'sm'),
            (r.boxShadow = 'md'),
            (r.maxW = '320px'),
            (r.zIndex = 'tooltip'),
            r
        )
    },
    nk = { baseStyle: rk },
    ik = function (t) {
        return { color: N('red.500', 'red.300')(t), mt: 2, fontSize: 'sm' }
    },
    ok = function (t) {
        return { marginEnd: '0.5em', color: N('red.500', 'red.300')(t) }
    },
    ak = function (t) {
        return { text: ik(t), icon: ok(t) }
    },
    sk = { parts: vb.keys, baseStyle: ak },
    lk = {
        Accordion: Mb,
        Alert: Vb,
        Avatar: tC,
        Badge: oi,
        Breadcrumb: cC,
        Button: xC,
        Checkbox: Qc,
        CloseButton: RC,
        Code: BC,
        Container: UC,
        Divider: jC,
        Drawer: ZC,
        Editable: n2,
        Form: s2,
        FormLabel: u2,
        Heading: h2,
        Input: Ee,
        Kbd: C2,
        Link: E2,
        List: A2,
        Menu: U2,
        Modal: q2,
        NumberInput: i_,
        PinInput: u_,
        Popover: S_,
        Progress: T_,
        Radio: F_,
        Select: M_,
        Skeleton: z_,
        SkipLink: j_,
        Slider: eE,
        Spinner: iE,
        Stat: dE,
        Switch: SE,
        Table: kE,
        Tabs: LE,
        Tag: YE,
        Textarea: ek,
        Tooltip: nk,
        FormError: sk,
    },
    uk = {
        none: 0,
        '1px': '1px solid',
        '2px': '2px solid',
        '4px': '4px solid',
        '8px': '8px solid',
    },
    ck = uk,
    fk = Zw({ sm: '30em', md: '48em', lg: '62em', xl: '80em', '2xl': '96em' }),
    dk = fk,
    hk = {
        transparent: 'transparent',
        current: 'currentColor',
        black: '#000000',
        white: '#FFFFFF',
        whiteAlpha: {
            50: 'rgba(255, 255, 255, 0.04)',
            100: 'rgba(255, 255, 255, 0.06)',
            200: 'rgba(255, 255, 255, 0.08)',
            300: 'rgba(255, 255, 255, 0.16)',
            400: 'rgba(255, 255, 255, 0.24)',
            500: 'rgba(255, 255, 255, 0.36)',
            600: 'rgba(255, 255, 255, 0.48)',
            700: 'rgba(255, 255, 255, 0.64)',
            800: 'rgba(255, 255, 255, 0.80)',
            900: 'rgba(255, 255, 255, 0.92)',
        },
        blackAlpha: {
            50: 'rgba(0, 0, 0, 0.04)',
            100: 'rgba(0, 0, 0, 0.06)',
            200: 'rgba(0, 0, 0, 0.08)',
            300: 'rgba(0, 0, 0, 0.16)',
            400: 'rgba(0, 0, 0, 0.24)',
            500: 'rgba(0, 0, 0, 0.36)',
            600: 'rgba(0, 0, 0, 0.48)',
            700: 'rgba(0, 0, 0, 0.64)',
            800: 'rgba(0, 0, 0, 0.80)',
            900: 'rgba(0, 0, 0, 0.92)',
        },
        gray: {
            50: '#F7FAFC',
            100: '#EDF2F7',
            200: '#E2E8F0',
            300: '#CBD5E0',
            400: '#A0AEC0',
            500: '#718096',
            600: '#4A5568',
            700: '#2D3748',
            800: '#1A202C',
            900: '#171923',
        },
        red: {
            50: '#FFF5F5',
            100: '#FED7D7',
            200: '#FEB2B2',
            300: '#FC8181',
            400: '#F56565',
            500: '#E53E3E',
            600: '#C53030',
            700: '#9B2C2C',
            800: '#822727',
            900: '#63171B',
        },
        orange: {
            50: '#FFFAF0',
            100: '#FEEBC8',
            200: '#FBD38D',
            300: '#F6AD55',
            400: '#ED8936',
            500: '#DD6B20',
            600: '#C05621',
            700: '#9C4221',
            800: '#7B341E',
            900: '#652B19',
        },
        yellow: {
            50: '#FFFFF0',
            100: '#FEFCBF',
            200: '#FAF089',
            300: '#F6E05E',
            400: '#ECC94B',
            500: '#D69E2E',
            600: '#B7791F',
            700: '#975A16',
            800: '#744210',
            900: '#5F370E',
        },
        green: {
            50: '#F0FFF4',
            100: '#C6F6D5',
            200: '#9AE6B4',
            300: '#68D391',
            400: '#48BB78',
            500: '#38A169',
            600: '#2F855A',
            700: '#276749',
            800: '#22543D',
            900: '#1C4532',
        },
        teal: {
            50: '#E6FFFA',
            100: '#B2F5EA',
            200: '#81E6D9',
            300: '#4FD1C5',
            400: '#38B2AC',
            500: '#319795',
            600: '#2C7A7B',
            700: '#285E61',
            800: '#234E52',
            900: '#1D4044',
        },
        blue: {
            50: '#ebf8ff',
            100: '#bee3f8',
            200: '#90cdf4',
            300: '#63b3ed',
            400: '#4299e1',
            500: '#3182ce',
            600: '#2b6cb0',
            700: '#2c5282',
            800: '#2a4365',
            900: '#1A365D',
        },
        cyan: {
            50: '#EDFDFD',
            100: '#C4F1F9',
            200: '#9DECF9',
            300: '#76E4F7',
            400: '#0BC5EA',
            500: '#00B5D8',
            600: '#00A3C4',
            700: '#0987A0',
            800: '#086F83',
            900: '#065666',
        },
        purple: {
            50: '#FAF5FF',
            100: '#E9D8FD',
            200: '#D6BCFA',
            300: '#B794F4',
            400: '#9F7AEA',
            500: '#805AD5',
            600: '#6B46C1',
            700: '#553C9A',
            800: '#44337A',
            900: '#322659',
        },
        pink: {
            50: '#FFF5F7',
            100: '#FED7E2',
            200: '#FBB6CE',
            300: '#F687B3',
            400: '#ED64A6',
            500: '#D53F8C',
            600: '#B83280',
            700: '#97266D',
            800: '#702459',
            900: '#521B41',
        },
        linkedin: {
            50: '#E8F4F9',
            100: '#CFEDFB',
            200: '#9BDAF3',
            300: '#68C7EC',
            400: '#34B3E4',
            500: '#00A0DC',
            600: '#008CC9',
            700: '#0077B5',
            800: '#005E93',
            900: '#004471',
        },
        facebook: {
            50: '#E8F4F9',
            100: '#D9DEE9',
            200: '#B7C2DA',
            300: '#6482C0',
            400: '#4267B2',
            500: '#385898',
            600: '#314E89',
            700: '#29487D',
            800: '#223B67',
            900: '#1E355B',
        },
        messenger: {
            50: '#D0E6FF',
            100: '#B9DAFF',
            200: '#A2CDFF',
            300: '#7AB8FF',
            400: '#2E90FF',
            500: '#0078FF',
            600: '#0063D1',
            700: '#0052AC',
            800: '#003C7E',
            900: '#002C5C',
        },
        whatsapp: {
            50: '#dffeec',
            100: '#b9f5d0',
            200: '#90edb3',
            300: '#65e495',
            400: '#3cdd78',
            500: '#22c35e',
            600: '#179848',
            700: '#0c6c33',
            800: '#01421c',
            900: '#001803',
        },
        twitter: {
            50: '#E5F4FD',
            100: '#C8E9FB',
            200: '#A8DCFA',
            300: '#83CDF7',
            400: '#57BBF5',
            500: '#1DA1F2',
            600: '#1A94DA',
            700: '#1681BF',
            800: '#136B9E',
            900: '#0D4D71',
        },
        telegram: {
            50: '#E3F2F9',
            100: '#C5E4F3',
            200: '#A2D4EC',
            300: '#7AC1E4',
            400: '#47A9DA',
            500: '#0088CC',
            600: '#007AB8',
            700: '#006BA1',
            800: '#005885',
            900: '#003F5E',
        },
    },
    pk = hk,
    mk = {
        none: '0',
        sm: '0.125rem',
        base: '0.25rem',
        md: '0.375rem',
        lg: '0.5rem',
        xl: '0.75rem',
        '2xl': '1rem',
        '3xl': '1.5rem',
        full: '9999px',
    },
    vk = mk,
    gk = {
        xs: '0 0 0 1px rgba(0, 0, 0, 0.05)',
        sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
        base: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
        md: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
        lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
        xl: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
        '2xl': '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
        outline: '0 0 0 3px rgba(66, 153, 225, 0.6)',
        inner: 'inset 0 2px 4px 0 rgba(0,0,0,0.06)',
        none: 'none',
        'dark-lg':
            'rgba(0, 0, 0, 0.1) 0px 0px 0px 1px, rgba(0, 0, 0, 0.2) 0px 5px 10px, rgba(0, 0, 0, 0.4) 0px 15px 40px',
    },
    yk = gk,
    Sk = {
        common: 'background-color, border-color, color, fill, stroke, opacity, box-shadow, transform',
        colors: 'background-color, border-color, color, fill, stroke',
        dimensions: 'width, height',
        position: 'left, right, top, bottom',
        background: 'background-color, background-image, background-position',
    },
    xk = {
        'ease-in': 'cubic-bezier(0.4, 0, 1, 1)',
        'ease-out': 'cubic-bezier(0, 0, 0.2, 1)',
        'ease-in-out': 'cubic-bezier(0.4, 0, 0.2, 1)',
    },
    wk = {
        'ultra-fast': '50ms',
        faster: '100ms',
        fast: '150ms',
        normal: '200ms',
        slow: '300ms',
        slower: '400ms',
        'ultra-slow': '500ms',
    },
    bk = { property: Sk, easing: xk, duration: wk },
    Ck = bk,
    _k = {
        hide: -1,
        auto: 'auto',
        base: 0,
        docked: 10,
        dropdown: 1e3,
        sticky: 1100,
        banner: 1200,
        overlay: 1300,
        modal: 1400,
        popover: 1500,
        skipLink: 1600,
        toast: 1700,
        tooltip: 1800,
    },
    Ek = _k,
    kk = {
        none: 0,
        sm: '4px',
        base: '8px',
        md: '12px',
        lg: '16px',
        xl: '24px',
        '2xl': '40px',
        '3xl': '64px',
    },
    Tk = kk,
    Ak = Pe(
        { breakpoints: dk, zIndices: Ek, radii: vk, blur: Tk, colors: pk },
        _m,
        { sizes: bm, shadows: yk, space: wm, borders: ck, transition: Ck }
    ),
    Ik = Ak,
    Rk = {
        global: function (t) {
            return {
                body: {
                    fontFamily: 'body',
                    color: N('gray.800', 'whiteAlpha.900')(t),
                    bg: N('white', 'gray.800')(t),
                    transitionProperty: 'background-color',
                    transitionDuration: 'normal',
                    lineHeight: 'base',
                },
                '*::placeholder': { color: N('gray.400', 'whiteAlpha.400')(t) },
                '*, *::before, &::after': {
                    borderColor: N('gray.200', 'whiteAlpha.300')(t),
                    wordWrap: 'break-word',
                },
            }
        },
    },
    Pk = Rk,
    Fk = 'ltr',
    Dk = {
        useSystemColorMode: !1,
        initialColorMode: 'light',
        cssVarPrefix: 'chakra',
    },
    Bk = Pe({ direction: Fk }, Ik, { components: lk, styles: Pk, config: Dk })
function Do() {
    return (
        (Do =
            Object.assign ||
            function (e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = arguments[t]
                    for (var n in r)
                        Object.prototype.hasOwnProperty.call(r, n) &&
                            (e[n] = r[n])
                }
                return e
            }),
        Do.apply(this, arguments)
    )
}
function Nk(e, t) {
    if (e == null) return {}
    var r = {},
        n = Object.keys(e),
        i,
        o
    for (o = 0; o < n.length; o++)
        (i = n[o]), !(t.indexOf(i) >= 0) && (r[i] = e[i])
    return r
}
var Uk = [
        'as',
        'viewBox',
        'color',
        'focusable',
        'children',
        'className',
        '__css',
    ],
    Bm = {
        path: T.exports.createElement(
            'g',
            { stroke: 'currentColor', strokeWidth: '1.5' },
            T.exports.createElement('path', {
                strokeLinecap: 'round',
                fill: 'none',
                d: 'M9,9a3,3,0,1,1,4,2.829,1.5,1.5,0,0,0-1,1.415V14.25',
            }),
            T.exports.createElement('path', {
                fill: 'currentColor',
                strokeLinecap: 'round',
                d: 'M12,17.25a.375.375,0,1,0,.375.375A.375.375,0,0,0,12,17.25h0',
            }),
            T.exports.createElement('circle', {
                fill: 'none',
                strokeMiterlimit: '10',
                cx: '12',
                cy: '12',
                r: '11.25',
            })
        ),
        viewBox: '0 0 24 24',
    },
    Nm = Q(function (e, t) {
        var r = e.as,
            n = e.viewBox,
            i = e.color,
            o = i === void 0 ? 'currentColor' : i,
            a = e.focusable,
            s = a === void 0 ? !1 : a,
            l = e.children,
            u = e.className,
            d = e.__css,
            m = Nk(e, Uk),
            p = ie('chakra-icon', u),
            x = Do(
                {
                    w: '1em',
                    h: '1em',
                    display: 'inline-block',
                    lineHeight: '1em',
                    flexShrink: 0,
                    color: o,
                },
                d
            ),
            _ = { ref: t, focusable: s, className: p, __css: x },
            b = n != null ? n : Bm.viewBox
        if (r && typeof r != 'string')
            return T.exports.createElement(Y.svg, Do({ as: r }, _, m))
        var g = l != null ? l : Bm.path
        return T.exports.createElement(
            Y.svg,
            Do({ verticalAlign: 'middle', viewBox: b }, _, m),
            g
        )
    }),
    Mk = Nm
function Ok(e) {
    var t = e.loading,
        r = e.src,
        n = e.srcSet,
        i = e.onLoad,
        o = e.onError,
        a = e.crossOrigin,
        s = e.sizes,
        l = e.ignoreFallback,
        u = T.exports.useState('pending'),
        d = u[0],
        m = u[1]
    T.exports.useEffect(
        function () {
            m(r ? 'loading' : 'pending')
        },
        [r]
    )
    var p = T.exports.useRef(),
        x = T.exports.useCallback(
            function () {
                if (!!r) {
                    _()
                    var b = new Image()
                    ;(b.src = r),
                        a && (b.crossOrigin = a),
                        n && (b.srcset = n),
                        s && (b.sizes = s),
                        t && (b.loading = t),
                        (b.onload = function (g) {
                            _(), m('loaded'), i == null || i(g)
                        }),
                        (b.onerror = function (g) {
                            _(), m('failed'), o == null || o(g)
                        }),
                        (p.current = b)
                }
            },
            [r, a, n, s, i, o, t]
        ),
        _ = function () {
            p.current &&
                ((p.current.onload = null),
                (p.current.onerror = null),
                (p.current = null))
        }
    return (
        LS(
            function () {
                if (!l)
                    return (
                        d === 'loading' && x(),
                        function () {
                            _()
                        }
                    )
            },
            [d, x, l]
        ),
        l ? 'loaded' : d
    )
}
function cf(e, t) {
    if (e == null) return {}
    var r = {},
        n = Object.keys(e),
        i,
        o
    for (o = 0; o < n.length; o++)
        (i = n[o]), !(t.indexOf(i) >= 0) && (r[i] = e[i])
    return r
}
function Zt() {
    return (
        (Zt =
            Object.assign ||
            function (e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = arguments[t]
                    for (var n in r)
                        Object.prototype.hasOwnProperty.call(r, n) &&
                            (e[n] = r[n])
                }
                return e
            }),
        Zt.apply(this, arguments)
    )
}
var $k = ['name', 'getInitials'],
    zk = [
        'src',
        'name',
        'showBorder',
        'borderRadius',
        'onError',
        'getInitials',
        'icon',
        'iconLabel',
        'loading',
        'children',
        'borderColor',
        'ignoreFallback',
    ],
    Lk = Q(function (e, t) {
        var r = dr(),
            n = Zt(
                {
                    position: 'absolute',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    insetEnd: '0',
                    bottom: '0',
                },
                r.badge
            )
        return T.exports.createElement(
            Y.div,
            Zt({ ref: t }, e, {
                className: ie('chakra-avatar__badge', e.className),
                __css: n,
            })
        )
    })
G && (Lk.displayName = 'AvatarBadge')
function jk(e) {
    var t = e.split(' '),
        r = t[0],
        n = t[1]
    return r && n ? '' + r.charAt(0) + n.charAt(0) : r.charAt(0)
}
var Wk = function (t) {
        var r = t.name,
            n = t.getInitials,
            i = cf(t, $k),
            o = dr()
        return T.exports.createElement(
            Y.div,
            Zt({ role: 'img', 'aria-label': r }, i, { __css: o.label }),
            r ? (n == null ? void 0 : n(r)) : null
        )
    },
    Um = function (t) {
        return T.exports.createElement(
            Y.svg,
            Zt(
                {
                    viewBox: '0 0 128 128',
                    color: '#fff',
                    width: '100%',
                    height: '100%',
                    className: 'chakra-avatar__svg',
                },
                t
            ),
            T.exports.createElement('path', {
                fill: 'currentColor',
                d: 'M103,102.1388 C93.094,111.92 79.3504,118 64.1638,118 C48.8056,118 34.9294,111.768 25,101.7892 L25,95.2 C25,86.8096 31.981,80 40.6,80 L87.4,80 C96.019,80 103,86.8096 103,95.2 L103,102.1388 Z',
            }),
            T.exports.createElement('path', {
                fill: 'currentColor',
                d: 'M63.9961647,24 C51.2938136,24 41,34.2938136 41,46.9961647 C41,59.7061864 51.2938136,70 63.9961647,70 C76.6985159,70 87,59.7061864 87,46.9961647 C87,34.2938136 76.6985159,24 63.9961647,24',
            })
        )
    },
    Mm = {
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        textTransform: 'uppercase',
        fontWeight: 'medium',
        position: 'relative',
        flexShrink: 0,
    },
    Hk = Q(function (e, t) {
        var r = fn('Avatar', e),
            n = ze(e),
            i = n.src,
            o = n.name,
            a = n.showBorder,
            s = n.borderRadius,
            l = s === void 0 ? 'full' : s,
            u = n.onError,
            d = n.getInitials,
            m = d === void 0 ? jk : d,
            p = n.icon,
            x = p === void 0 ? T.exports.createElement(Um, null) : p,
            _ = n.iconLabel,
            b = _ === void 0 ? ' avatar' : _,
            g = n.loading,
            v = n.children,
            h = n.borderColor,
            C = n.ignoreFallback,
            E = cf(n, zk),
            D = Zt(
                { borderRadius: l, borderWidth: a ? '2px' : void 0 },
                Mm,
                r.container
            )
        return (
            h && (D.borderColor = h),
            T.exports.createElement(
                Y.span,
                Zt({ ref: t }, E, {
                    className: ie('chakra-avatar', e.className),
                    __css: D,
                }),
                T.exports.createElement(
                    Ao,
                    { value: r },
                    T.exports.createElement(Om, {
                        src: i,
                        loading: g,
                        onError: u,
                        getInitials: m,
                        name: o,
                        borderRadius: l,
                        icon: x,
                        iconLabel: b,
                        ignoreFallback: C,
                    }),
                    v
                )
            )
        )
    })
G && (Hk.displayName = 'Avatar')
var Om = function (t) {
    var r = t.src,
        n = t.onError,
        i = t.getInitials,
        o = t.name,
        a = t.borderRadius,
        s = t.loading,
        l = t.iconLabel,
        u = t.icon,
        d = u === void 0 ? T.exports.createElement(Um, null) : u,
        m = t.ignoreFallback,
        p = Ok({ src: r, onError: n, ignoreFallback: m }),
        x = p === 'loaded',
        _ = !r || !x
    return _
        ? o
            ? T.exports.createElement(Wk, {
                  className: 'chakra-avatar__initials',
                  getInitials: i,
                  name: o,
              })
            : T.exports.cloneElement(d, { role: 'img', 'aria-label': l })
        : T.exports.createElement(Y.img, {
              src: r,
              alt: o,
              className: 'chakra-avatar__img',
              loading: s,
              __css: {
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  borderRadius: a,
              },
          })
}
G && (Om.displayName = 'AvatarImage')
var Vk = ['children', 'borderColor', 'max', 'spacing', 'borderRadius'],
    Kk = Q(function (e, t) {
        var r = fn('Avatar', e),
            n = ze(e),
            i = n.children,
            o = n.borderColor,
            a = n.max,
            s = n.spacing,
            l = s === void 0 ? '-0.75rem' : s,
            u = n.borderRadius,
            d = u === void 0 ? 'full' : u,
            m = cf(n, Vk),
            p = Ss(i),
            x = a ? p.slice(0, a) : p,
            _ = a != null && p.length - a,
            b = x.reverse(),
            g = b.map(function (C, E) {
                var D,
                    P = E === 0,
                    F = {
                        marginEnd: P ? 0 : l,
                        size: e.size,
                        borderColor: (D = C.props.borderColor) != null ? D : o,
                        showBorder: !0,
                    }
                return T.exports.cloneElement(C, vs(F))
            }),
            v = {
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'flex-end',
                flexDirection: 'row-reverse',
            },
            h = Zt({ borderRadius: d, marginStart: l }, Mm, r.excessLabel)
        return T.exports.createElement(
            Y.div,
            Zt({ ref: t, role: 'group', __css: v }, m, {
                className: ie('chakra-avatar__group', e.className),
            }),
            _ > 0 &&
                T.exports.createElement(
                    Y.span,
                    { className: 'chakra-avatar__excess', __css: h },
                    '+' + _
                ),
            g
        )
    })
G && (Kk.displayName = 'AvatarGroup')
var $m = {
        border: '0px',
        clip: 'rect(0px, 0px, 0px, 0px)',
        height: '1px',
        width: '1px',
        margin: '-1px',
        padding: '0px',
        overflow: 'hidden',
        whiteSpace: 'nowrap',
        position: 'absolute',
    },
    qk = Y('span', { baseStyle: $m })
Y('input', { baseStyle: $m })
function zs() {
    return (
        (zs =
            Object.assign ||
            function (e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = arguments[t]
                    for (var n in r)
                        Object.prototype.hasOwnProperty.call(r, n) &&
                            (e[n] = r[n])
                }
                return e
            }),
        zs.apply(this, arguments)
    )
}
function Gk(e, t) {
    if (e == null) return {}
    var r = {},
        n = Object.keys(e),
        i,
        o
    for (o = 0; o < n.length; o++)
        (i = n[o]), !(t.indexOf(i) >= 0) && (r[i] = e[i])
    return r
}
var Yk = ['label', 'thickness', 'speed', 'emptyColor', 'className'],
    Xk = x0({
        '0%': { transform: 'rotate(0deg)' },
        '100%': { transform: 'rotate(360deg)' },
    }),
    Qk = Q(function (e, t) {
        var r = kt('Spinner', e),
            n = ze(e),
            i = n.label,
            o = i === void 0 ? 'Loading...' : i,
            a = n.thickness,
            s = a === void 0 ? '2px' : a,
            l = n.speed,
            u = l === void 0 ? '0.45s' : l,
            d = n.emptyColor,
            m = d === void 0 ? 'transparent' : d,
            p = n.className,
            x = Gk(n, Yk),
            _ = ie('chakra-spinner', p),
            b = zs(
                {
                    display: 'inline-block',
                    borderColor: 'currentColor',
                    borderStyle: 'solid',
                    borderRadius: '99999px',
                    borderWidth: s,
                    borderBottomColor: m,
                    borderLeftColor: m,
                    animation: Xk + ' ' + u + ' linear infinite',
                },
                r
            )
        return T.exports.createElement(
            Y.div,
            zs({ ref: t, __css: b, className: _ }, x),
            o && T.exports.createElement(qk, null, o)
        )
    })
function Bo(e, t) {
    if (e == null) return {}
    var r = {},
        n = Object.keys(e),
        i,
        o
    for (o = 0; o < n.length; o++)
        (i = n[o]), !(t.indexOf(i) >= 0) && (r[i] = e[i])
    return r
}
function Tt() {
    return (
        (Tt =
            Object.assign ||
            function (e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = arguments[t]
                    for (var n in r)
                        Object.prototype.hasOwnProperty.call(r, n) &&
                            (e[n] = r[n])
                }
                return e
            }),
        Tt.apply(this, arguments)
    )
}
var Jk = [
        'size',
        'colorScheme',
        'variant',
        'className',
        'spacing',
        'isAttached',
        'isDisabled',
    ],
    zm = Eo({ strict: !1, name: 'ButtonGroupContext' }),
    Zk = zm[0],
    eT = zm[1],
    tT = Q(function (e, t) {
        var r = e.size,
            n = e.colorScheme,
            i = e.variant,
            o = e.className,
            a = e.spacing,
            s = a === void 0 ? '0.5rem' : a,
            l = e.isAttached,
            u = e.isDisabled,
            d = Bo(e, Jk),
            m = ie('chakra-button__group', o),
            p = T.exports.useMemo(
                function () {
                    return {
                        size: r,
                        colorScheme: n,
                        variant: i,
                        isDisabled: u,
                    }
                },
                [r, n, i, u]
            ),
            x = { display: 'inline-flex' }
        return (
            l
                ? (x = Tt({}, x, {
                      '> *:first-of-type:not(:last-of-type)': {
                          borderEndRadius: 0,
                      },
                      '> *:not(:first-of-type):not(:last-of-type)': {
                          borderRadius: 0,
                      },
                      '> *:not(:first-of-type):last-of-type': {
                          borderStartRadius: 0,
                      },
                  }))
                : (x = Tt({}, x, {
                      '& > *:not(style) ~ *:not(style)': { marginStart: s },
                  })),
            T.exports.createElement(
                Zk,
                { value: p },
                T.exports.createElement(
                    Y.div,
                    Tt({ ref: t, role: 'group', __css: x, className: m }, d)
                )
            )
        )
    })
G && (tT.displayName = 'ButtonGroup')
var rT = ['label', 'placement', 'spacing', 'children', 'className', '__css'],
    ff = function (t) {
        var r = t.label,
            n = t.placement
        t.spacing
        var i = t.children,
            o =
                i === void 0
                    ? T.exports.createElement(Qk, {
                          color: 'currentColor',
                          width: '1em',
                          height: '1em',
                      })
                    : i,
            a = t.className,
            s = t.__css,
            l = Bo(t, rT),
            u = ie('chakra-button__spinner', a),
            d = n === 'start' ? 'marginEnd' : 'marginStart',
            m = T.exports.useMemo(
                function () {
                    var p
                    return Tt(
                        ((p = {
                            display: 'flex',
                            alignItems: 'center',
                            position: r ? 'relative' : 'absolute',
                        }),
                        (p[d] = r ? '0.5rem' : 0),
                        (p.fontSize = '1em'),
                        (p.lineHeight = 'normal'),
                        p),
                        s
                    )
                },
                [s, r, d]
            )
        return T.exports.createElement(
            Y.div,
            Tt({ className: u }, l, { __css: m }),
            o
        )
    }
G && (ff.displayName = 'ButtonSpinner')
var nT = ['children', 'className'],
    df = function (t) {
        var r = t.children,
            n = t.className,
            i = Bo(t, nT),
            o = T.exports.isValidElement(r)
                ? T.exports.cloneElement(r, {
                      'aria-hidden': !0,
                      focusable: !1,
                  })
                : r,
            a = ie('chakra-button__icon', n)
        return T.exports.createElement(
            Y.span,
            Tt(
                { display: 'inline-flex', alignSelf: 'center', flexShrink: 0 },
                i,
                { className: a }
            ),
            o
        )
    }
G && (df.displayName = 'ButtonIcon')
function iT(e) {
    var t = T.exports.useState(!e),
        r = t[0],
        n = t[1],
        i = T.exports.useCallback(function (a) {
            !a || n(a.tagName === 'BUTTON')
        }, []),
        o = r ? 'button' : void 0
    return { ref: i, type: o }
}
var oT = [
        'isDisabled',
        'isLoading',
        'isActive',
        'isFullWidth',
        'children',
        'leftIcon',
        'rightIcon',
        'loadingText',
        'iconSpacing',
        'type',
        'spinner',
        'spinnerPlacement',
        'className',
        'as',
    ],
    Lm = Q(function (e, t) {
        var r = eT(),
            n = kt('Button', Tt({}, r, e)),
            i = ze(e),
            o = i.isDisabled,
            a = o === void 0 ? (r == null ? void 0 : r.isDisabled) : o,
            s = i.isLoading,
            l = i.isActive,
            u = i.isFullWidth,
            d = i.children,
            m = i.leftIcon,
            p = i.rightIcon,
            x = i.loadingText,
            _ = i.iconSpacing,
            b = _ === void 0 ? '0.5rem' : _,
            g = i.type,
            v = i.spinner,
            h = i.spinnerPlacement,
            C = h === void 0 ? 'start' : h,
            E = i.className,
            D = i.as,
            P = Bo(i, oT),
            F = T.exports.useMemo(
                function () {
                    var J,
                        oe = fr(
                            {},
                            (J = n == null ? void 0 : n._focus) != null
                                ? J
                                : {},
                            { zIndex: 1 }
                        )
                    return Tt(
                        {
                            display: 'inline-flex',
                            appearance: 'none',
                            alignItems: 'center',
                            justifyContent: 'center',
                            userSelect: 'none',
                            position: 'relative',
                            whiteSpace: 'nowrap',
                            verticalAlign: 'middle',
                            outline: 'none',
                            width: u ? '100%' : 'auto',
                        },
                        n,
                        !!r && { _focus: oe }
                    )
                },
                [n, r, u]
            ),
            O = iT(D),
            M = O.ref,
            L = O.type,
            q = { rightIcon: p, leftIcon: m, iconSpacing: b, children: d }
        return T.exports.createElement(
            Y.button,
            Tt(
                {
                    disabled: a || s,
                    ref: VS(t, M),
                    as: D,
                    type: g != null ? g : L,
                    'data-active': ei(l),
                    'data-loading': ei(s),
                    __css: F,
                    className: ie('chakra-button', E),
                },
                P
            ),
            s &&
                C === 'start' &&
                T.exports.createElement(
                    ff,
                    {
                        className: 'chakra-button__spinner--start',
                        label: x,
                        placement: 'start',
                    },
                    v
                ),
            s
                ? x ||
                      T.exports.createElement(
                          Y.span,
                          { opacity: 0 },
                          T.exports.createElement(jm, q)
                      )
                : T.exports.createElement(jm, q),
            s &&
                C === 'end' &&
                T.exports.createElement(
                    ff,
                    {
                        className: 'chakra-button__spinner--end',
                        label: x,
                        placement: 'end',
                    },
                    v
                )
        )
    })
G && (Lm.displayName = 'Button')
function jm(e) {
    var t = e.leftIcon,
        r = e.rightIcon,
        n = e.children,
        i = e.iconSpacing
    return T.exports.createElement(
        T.exports.Fragment,
        null,
        t && T.exports.createElement(df, { marginEnd: i }, t),
        n,
        r && T.exports.createElement(df, { marginStart: i }, r)
    )
}
var aT = ['icon', 'children', 'isRound', 'aria-label'],
    sT = Q(function (e, t) {
        var r = e.icon,
            n = e.children,
            i = e.isRound,
            o = e['aria-label'],
            a = Bo(e, aT),
            s = r || n,
            l = T.exports.isValidElement(s)
                ? T.exports.cloneElement(s, {
                      'aria-hidden': !0,
                      focusable: !1,
                  })
                : null
        return T.exports.createElement(
            Lm,
            Tt(
                {
                    padding: '0',
                    borderRadius: i ? 'full' : void 0,
                    ref: t,
                    'aria-label': o,
                },
                a
            ),
            l
        )
    })
G && (sT.displayName = 'IconButton')
function Le() {
    return (
        (Le =
            Object.assign ||
            function (e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = arguments[t]
                    for (var n in r)
                        Object.prototype.hasOwnProperty.call(r, n) &&
                            (e[n] = r[n])
                }
                return e
            }),
        Le.apply(this, arguments)
    )
}
function No(e, t) {
    if (e == null) return {}
    var r = {},
        n = Object.keys(e),
        i,
        o
    for (o = 0; o < n.length; o++)
        (i = n[o]), !(t.indexOf(i) >= 0) && (r[i] = e[i])
    return r
}
var lT = ['id', 'isRequired', 'isInvalid', 'isDisabled', 'isReadOnly'],
    uT = ['getRootProps', 'htmlProps'],
    Wm = Eo({ strict: !1, name: 'FormControlContext' }),
    cT = Wm[0],
    si = Wm[1]
function fT(e) {
    var t = e.id,
        r = e.isRequired,
        n = e.isInvalid,
        i = e.isDisabled,
        o = e.isReadOnly,
        a = No(e, lT),
        s = WS(),
        l = t || 'field-' + s,
        u = l + '-label',
        d = l + '-feedback',
        m = l + '-helptext',
        p = T.exports.useState(!1),
        x = p[0],
        _ = p[1],
        b = T.exports.useState(!1),
        g = b[0],
        v = b[1],
        h = zS(),
        C = h[0],
        E = h[1],
        D = T.exports.useCallback(
            function (L, q) {
                return (
                    L === void 0 && (L = {}),
                    q === void 0 && (q = null),
                    Le({ id: m }, L, {
                        ref: I0(q, function (J) {
                            !J || v(!0)
                        }),
                    })
                )
            },
            [m]
        ),
        P = T.exports.useCallback(
            function (L, q) {
                var J, oe
                return (
                    L === void 0 && (L = {}),
                    q === void 0 && (q = null),
                    Le({}, L, {
                        ref: q,
                        'data-focus': ei(C),
                        'data-disabled': ei(i),
                        'data-invalid': ei(n),
                        'data-readonly': ei(o),
                        id: (J = L.id) != null ? J : u,
                        htmlFor: (oe = L.htmlFor) != null ? oe : l,
                    })
                )
            },
            [l, i, C, n, o, u]
        ),
        F = T.exports.useCallback(
            function (L, q) {
                return (
                    L === void 0 && (L = {}),
                    q === void 0 && (q = null),
                    Le({ id: d }, L, {
                        ref: I0(q, function (J) {
                            !J || _(!0)
                        }),
                        'aria-live': 'polite',
                    })
                )
            },
            [d]
        ),
        O = T.exports.useCallback(
            function (L, q) {
                return (
                    L === void 0 && (L = {}),
                    q === void 0 && (q = null),
                    Le({}, L, a, { ref: q, role: 'group' })
                )
            },
            [a]
        ),
        M = T.exports.useCallback(function (L, q) {
            return (
                L === void 0 && (L = {}),
                q === void 0 && (q = null),
                Le({}, L, {
                    ref: q,
                    role: 'presentation',
                    'aria-hidden': !0,
                    children: L.children || '*',
                })
            )
        }, [])
    return {
        isRequired: !!r,
        isInvalid: !!n,
        isReadOnly: !!o,
        isDisabled: !!i,
        isFocused: !!C,
        onFocus: E.on,
        onBlur: E.off,
        hasFeedbackText: x,
        setHasFeedbackText: _,
        hasHelpText: g,
        setHasHelpText: v,
        id: l,
        labelId: u,
        feedbackId: d,
        helpTextId: m,
        htmlProps: a,
        getHelpTextProps: D,
        getErrorMessageProps: F,
        getRootProps: O,
        getLabelProps: P,
        getRequiredIndicatorProps: M,
    }
}
var dT = Q(function (e, t) {
    var r = fn('Form', e),
        n = ze(e),
        i = fT(n),
        o = i.getRootProps
    i.htmlProps
    var a = No(i, uT),
        s = ie('chakra-form-control', e.className),
        l = T.exports.useMemo(
            function () {
                return a
            },
            [a]
        )
    return T.exports.createElement(
        cT,
        { value: l },
        T.exports.createElement(
            Ao,
            { value: r },
            T.exports.createElement(
                Y.div,
                Le({}, o({}, t), { className: s, __css: r.container })
            )
        )
    )
})
G && (dT.displayName = 'FormControl')
var hT = Q(function (e, t) {
    var r = si(),
        n = dr(),
        i = ie('chakra-form__helper-text', e.className)
    return T.exports.createElement(
        Y.div,
        Le({}, r == null ? void 0 : r.getHelpTextProps(e, t), {
            __css: n.helperText,
            className: i,
        })
    )
})
G && (hT.displayName = 'FormHelperText')
var pT = ['isDisabled', 'isInvalid', 'isReadOnly', 'isRequired'],
    mT = [
        'id',
        'disabled',
        'readOnly',
        'required',
        'isRequired',
        'isInvalid',
        'isReadOnly',
        'isDisabled',
        'onFocus',
        'onBlur',
    ]
function vT(e) {
    var t = gT(e),
        r = t.isDisabled,
        n = t.isInvalid,
        i = t.isReadOnly,
        o = t.isRequired,
        a = No(t, pT)
    return Le({}, a, {
        disabled: r,
        readOnly: i,
        required: o,
        'aria-invalid': Ic(n),
        'aria-required': Ic(o),
        'aria-readonly': Ic(i),
    })
}
function gT(e) {
    var t,
        r,
        n,
        i = si(),
        o = e.id,
        a = e.disabled,
        s = e.readOnly,
        l = e.required,
        u = e.isRequired,
        d = e.isInvalid,
        m = e.isReadOnly,
        p = e.isDisabled,
        x = e.onFocus,
        _ = e.onBlur,
        b = No(e, mT),
        g = e['aria-describedby'] ? [e['aria-describedby']] : []
    return (
        i != null &&
            i.hasFeedbackText &&
            i != null &&
            i.isInvalid &&
            g.push(i.feedbackId),
        i != null && i.hasHelpText && g.push(i.helpTextId),
        Le({}, b, {
            'aria-describedby': g.join(' ') || void 0,
            id: o != null ? o : i == null ? void 0 : i.id,
            isDisabled:
                (t = a != null ? a : p) != null
                    ? t
                    : i == null
                    ? void 0
                    : i.isDisabled,
            isReadOnly:
                (r = s != null ? s : m) != null
                    ? r
                    : i == null
                    ? void 0
                    : i.isReadOnly,
            isRequired:
                (n = l != null ? l : u) != null
                    ? n
                    : i == null
                    ? void 0
                    : i.isRequired,
            isInvalid: d != null ? d : i == null ? void 0 : i.isInvalid,
            onFocus: A0(i == null ? void 0 : i.onFocus, x),
            onBlur: A0(i == null ? void 0 : i.onBlur, _),
        })
    )
}
var yT = Q(function (e, t) {
    var r = fn('FormError', e),
        n = ze(e),
        i = si()
    return i != null && i.isInvalid
        ? T.exports.createElement(
              Ao,
              { value: r },
              T.exports.createElement(
                  Y.div,
                  Le({}, i == null ? void 0 : i.getErrorMessageProps(n, t), {
                      className: ie('chakra-form__error-message', e.className),
                      __css: Le(
                          { display: 'flex', alignItems: 'center' },
                          r.text
                      ),
                  })
              )
          )
        : null
})
G && (yT.displayName = 'FormErrorMessage')
var ST = Q(function (e, t) {
    var r = dr(),
        n = si()
    if (!(n != null && n.isInvalid)) return null
    var i = ie('chakra-form__error-icon', e.className)
    return T.exports.createElement(
        Mk,
        Le({ ref: t, 'aria-hidden': !0 }, e, { __css: r.icon, className: i }),
        T.exports.createElement('path', {
            fill: 'currentColor',
            d: 'M11.983,0a12.206,12.206,0,0,0-8.51,3.653A11.8,11.8,0,0,0,0,12.207,11.779,11.779,0,0,0,11.8,24h.214A12.111,12.111,0,0,0,24,11.791h0A11.766,11.766,0,0,0,11.983,0ZM10.5,16.542a1.476,1.476,0,0,1,1.449-1.53h.027a1.527,1.527,0,0,1,1.523,1.47,1.475,1.475,0,0,1-1.449,1.53h-.027A1.529,1.529,0,0,1,10.5,16.542ZM11,12.5v-6a1,1,0,0,1,2,0v6a1,1,0,1,1-2,0Z',
        })
    )
})
G && (ST.displayName = 'FormErrorIcon')
var xT = ['className', 'children', 'requiredIndicator'],
    wT = Q(function (e, t) {
        var r,
            n = kt('FormLabel', e),
            i = ze(e)
        i.className
        var o = i.children,
            a = i.requiredIndicator,
            s = a === void 0 ? T.exports.createElement(Hm, null) : a,
            l = No(i, xT),
            u = si(),
            d =
                (r = u == null ? void 0 : u.getLabelProps(l, t)) != null
                    ? r
                    : Le({ ref: t }, l)
        return T.exports.createElement(
            Y.label,
            Le({}, d, {
                className: ie('chakra-form__label', i.className),
                __css: Le({ display: 'block', textAlign: 'start' }, n),
            }),
            o,
            u != null && u.isRequired ? s : null
        )
    })
G && (wT.displayName = 'FormLabel')
var Hm = Q(function (e, t) {
    var r = si(),
        n = dr()
    if (!(r != null && r.isRequired)) return null
    var i = ie('chakra-form__required-indicator', e.className)
    return T.exports.createElement(
        Y.span,
        Le({}, r == null ? void 0 : r.getRequiredIndicatorProps(e, t), {
            __css: n.requiredIndicator,
            className: i,
        })
    )
})
G && (Hm.displayName = 'RequiredIndicator')
function zt() {
    return (
        (zt =
            Object.assign ||
            function (e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = arguments[t]
                    for (var n in r)
                        Object.prototype.hasOwnProperty.call(r, n) &&
                            (e[n] = r[n])
                }
                return e
            }),
        zt.apply(this, arguments)
    )
}
var Vm = Q(function (e, t) {
    var r = fn('Input', e),
        n = ze(e),
        i = vT(n),
        o = ie('chakra-input', e.className)
    return T.exports.createElement(
        Y.input,
        zt({}, i, { __css: r.field, ref: t, className: o })
    )
})
G && (Vm.displayName = 'Input')
Vm.id = 'Input'
function Uo(e, t) {
    if (e == null) return {}
    var r = {},
        n = Object.keys(e),
        i,
        o
    for (o = 0; o < n.length; o++)
        (i = n[o]), !(t.indexOf(i) >= 0) && (r[i] = e[i])
    return r
}
var bT = ['placement'],
    CT = {
        left: {
            marginEnd: '-1px',
            borderEndRadius: 0,
            borderEndColor: 'transparent',
        },
        right: {
            marginStart: '-1px',
            borderStartRadius: 0,
            borderStartColor: 'transparent',
        },
    },
    _T = Y('div', {
        baseStyle: {
            flex: '0 0 auto',
            width: 'auto',
            display: 'flex',
            alignItems: 'center',
            whiteSpace: 'nowrap',
        },
    }),
    hf = Q(function (e, t) {
        var r,
            n = e.placement,
            i = n === void 0 ? 'left' : n,
            o = Uo(e, bT),
            a = (r = CT[i]) != null ? r : {},
            s = dr()
        return T.exports.createElement(
            _T,
            zt({ ref: t }, o, { __css: zt({}, s.addon, a) })
        )
    })
G && (hf.displayName = 'InputAddon')
var Km = Q(function (e, t) {
    return T.exports.createElement(
        hf,
        zt({ ref: t, placement: 'left' }, e, {
            className: ie('chakra-input__left-addon', e.className),
        })
    )
})
G && (Km.displayName = 'InputLeftAddon')
Km.id = 'InputLeftAddon'
var qm = Q(function (e, t) {
    return T.exports.createElement(
        hf,
        zt({ ref: t, placement: 'right' }, e, {
            className: ie('chakra-input__right-addon', e.className),
        })
    )
})
G && (qm.displayName = 'InputRightAddon')
qm.id = 'InputRightAddon'
var ET = ['children', 'className'],
    kT = Q(function (e, t) {
        var r = fn('Input', e),
            n = ze(e),
            i = n.children,
            o = n.className,
            a = Uo(n, ET),
            s = ie('chakra-input__group', o),
            l = {},
            u = Ss(i),
            d = r.field
        u.forEach(function (p) {
            if (!!r) {
                if (d && p.type.id === 'InputLeftElement') {
                    var x
                    l.paddingStart = (x = d.height) != null ? x : d.h
                }
                if (d && p.type.id === 'InputRightElement') {
                    var _
                    l.paddingEnd = (_ = d.height) != null ? _ : d.h
                }
                p.type.id === 'InputRightAddon' && (l.borderEndRadius = 0),
                    p.type.id === 'InputLeftAddon' && (l.borderStartRadius = 0)
            }
        })
        var m = u.map(function (p) {
            var x,
                _,
                b = {
                    size: ((x = p.props) == null ? void 0 : x.size) || e.size,
                    variant:
                        ((_ = p.props) == null ? void 0 : _.variant) ||
                        e.variant,
                }
            return p.type.id !== 'Input'
                ? T.exports.cloneElement(p, b)
                : T.exports.cloneElement(p, Object.assign(b, l, p.props))
        })
        return T.exports.createElement(
            Y.div,
            zt(
                {
                    className: s,
                    ref: t,
                    __css: {
                        width: '100%',
                        display: 'flex',
                        position: 'relative',
                    },
                },
                a
            ),
            T.exports.createElement(Ao, { value: r }, m)
        )
    })
G && (kT.displayName = 'InputGroup')
var TT = ['placement'],
    AT = ['className'],
    IT = ['className'],
    RT = Y('div', {
        baseStyle: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            position: 'absolute',
            top: '0',
            zIndex: 2,
        },
    }),
    Ls = Q(function (e, t) {
        var r,
            n,
            i,
            o = e.placement,
            a = o === void 0 ? 'left' : o,
            s = Uo(e, TT),
            l = dr(),
            u = l.field,
            d = a === 'left' ? 'insetStart' : 'insetEnd',
            m =
                ((i = {}),
                (i[d] = '0'),
                (i.width =
                    (r = u == null ? void 0 : u.height) != null
                        ? r
                        : u == null
                        ? void 0
                        : u.h),
                (i.height =
                    (n = u == null ? void 0 : u.height) != null
                        ? n
                        : u == null
                        ? void 0
                        : u.h),
                (i.fontSize = u == null ? void 0 : u.fontSize),
                i)
        return T.exports.createElement(RT, zt({ ref: t, __css: m }, s))
    })
Ls.id = 'InputElement'
G && (Ls.displayName = 'InputElement')
var Gm = Q(function (e, t) {
    var r = e.className,
        n = Uo(e, AT),
        i = ie('chakra-input__left-element', r)
    return T.exports.createElement(
        Ls,
        zt({ ref: t, placement: 'left', className: i }, n)
    )
})
Gm.id = 'InputLeftElement'
G && (Gm.displayName = 'InputLeftElement')
var Ym = Q(function (e, t) {
    var r = e.className,
        n = Uo(e, IT),
        i = ie('chakra-input__right-element', r)
    return T.exports.createElement(
        Ls,
        zt({ ref: t, placement: 'right', className: i }, n)
    )
})
Ym.id = 'InputRightElement'
G && (Ym.displayName = 'InputRightElement')
function te() {
    return (
        (te =
            Object.assign ||
            function (e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = arguments[t]
                    for (var n in r)
                        Object.prototype.hasOwnProperty.call(r, n) &&
                            (e[n] = r[n])
                }
                return e
            }),
        te.apply(this, arguments)
    )
}
function Fe(e, t) {
    if (e == null) return {}
    var r = {},
        n = Object.keys(e),
        i,
        o
    for (o = 0; o < n.length; o++)
        (i = n[o]), !(t.indexOf(i) >= 0) && (r[i] = e[i])
    return r
}
var PT = ['ratio', 'children', 'className'],
    FT = Q(function (e, t) {
        var r = e.ratio,
            n = r === void 0 ? 4 / 3 : r,
            i = e.children,
            o = e.className,
            a = Fe(e, PT),
            s = T.exports.Children.only(i),
            l = ie('chakra-aspect-ratio', o)
        return T.exports.createElement(
            Y.div,
            te(
                {
                    ref: t,
                    position: 'relative',
                    className: l,
                    _before: {
                        height: 0,
                        content: '""',
                        display: 'block',
                        paddingBottom: ti(n, function (u) {
                            return (1 / u) * 100 + '%'
                        }),
                    },
                    __css: {
                        '& > *:not(style)': {
                            overflow: 'hidden',
                            position: 'absolute',
                            top: '0',
                            right: '0',
                            bottom: '0',
                            left: '0',
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            width: '100%',
                            height: '100%',
                        },
                        '& > img, & > video': { objectFit: 'cover' },
                    },
                },
                a
            ),
            s
        )
    })
G && (FT.displayName = 'AspectRatio')
var DT = ['className'],
    BT = Q(function (e, t) {
        var r = kt('Badge', e),
            n = ze(e)
        n.className
        var i = Fe(n, DT)
        return T.exports.createElement(
            Y.span,
            te({ ref: t, className: ie('chakra-badge', e.className) }, i, {
                __css: te(
                    {
                        display: 'inline-block',
                        whiteSpace: 'nowrap',
                        verticalAlign: 'middle',
                    },
                    r
                ),
            })
        )
    })
G && (BT.displayName = 'Badge')
var NT = ['size', 'centerContent'],
    UT = ['size'],
    Xm = Y('div')
G && (Xm.displayName = 'Box')
var Qm = Q(function (e, t) {
    var r = e.size,
        n = e.centerContent,
        i = n === void 0 ? !0 : n,
        o = Fe(e, NT),
        a = i
            ? {
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
              }
            : {}
    return T.exports.createElement(
        Xm,
        te(
            {
                ref: t,
                boxSize: r,
                __css: te({}, a, { flexShrink: 0, flexGrow: 0 }),
            },
            o
        )
    )
})
G && (Qm.displayName = 'Square')
var MT = Q(function (e, t) {
    var r = e.size,
        n = Fe(e, UT)
    return T.exports.createElement(
        Qm,
        te({ size: r, ref: t, borderRadius: '9999px' }, n)
    )
})
G && (MT.displayName = 'Circle')
var OT = Y('div', {
    baseStyle: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
})
G && (OT.displayName = 'Center')
var $T = ['className'],
    zT = Q(function (e, t) {
        var r = kt('Code', e),
            n = ze(e)
        n.className
        var i = Fe(n, $T)
        return T.exports.createElement(
            Y.code,
            te({ ref: t, className: ie('chakra-code', e.className) }, i, {
                __css: te({ display: 'inline-block' }, r),
            })
        )
    })
G && (zT.displayName = 'Code')
var LT = ['className', 'centerContent'],
    jT = Q(function (e, t) {
        var r = ze(e),
            n = r.className,
            i = r.centerContent,
            o = Fe(r, LT),
            a = kt('Container', e)
        return T.exports.createElement(
            Y.div,
            te({ ref: t, className: ie('chakra-container', n) }, o, {
                __css: te(
                    {},
                    a,
                    i && {
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }
                ),
            })
        )
    })
G && (jT.displayName = 'Container')
var WT = [
        'borderLeftWidth',
        'borderBottomWidth',
        'borderTopWidth',
        'borderRightWidth',
        'borderWidth',
        'borderStyle',
        'borderColor',
    ],
    HT = ['className', 'orientation', '__css'],
    VT = Q(function (e, t) {
        var r = kt('Divider', e),
            n = r.borderLeftWidth,
            i = r.borderBottomWidth,
            o = r.borderTopWidth,
            a = r.borderRightWidth,
            s = r.borderWidth,
            l = r.borderStyle,
            u = r.borderColor,
            d = Fe(r, WT),
            m = ze(e),
            p = m.className,
            x = m.orientation,
            _ = x === void 0 ? 'horizontal' : x,
            b = m.__css,
            g = Fe(m, HT),
            v = {
                vertical: {
                    borderLeftWidth: n || a || s || '1px',
                    height: '100%',
                },
                horizontal: {
                    borderBottomWidth: i || o || s || '1px',
                    width: '100%',
                },
            }
        return T.exports.createElement(
            Y.hr,
            te({ ref: t, 'aria-orientation': _ }, g, {
                __css: te(
                    {},
                    d,
                    { border: '0', borderColor: u, borderStyle: l },
                    v[_],
                    b
                ),
                className: ie('chakra-divider', p),
            })
        )
    })
G && (VT.displayName = 'Divider')
var KT = ['direction', 'align', 'justify', 'wrap', 'basis', 'grow', 'shrink'],
    qT = Q(function (e, t) {
        var r = e.direction,
            n = e.align,
            i = e.justify,
            o = e.wrap,
            a = e.basis,
            s = e.grow,
            l = e.shrink,
            u = Fe(e, KT),
            d = {
                display: 'flex',
                flexDirection: r,
                alignItems: n,
                justifyContent: i,
                flexWrap: o,
                flexBasis: a,
                flexGrow: s,
                flexShrink: l,
            }
        return T.exports.createElement(Y.div, te({ ref: t, __css: d }, u))
    })
G && (qT.displayName = 'Flex')
var GT = [
        'area',
        'templateAreas',
        'gap',
        'rowGap',
        'columnGap',
        'column',
        'row',
        'autoFlow',
        'autoRows',
        'templateRows',
        'autoColumns',
        'templateColumns',
    ],
    Jm = Q(function (e, t) {
        var r = e.area,
            n = e.templateAreas,
            i = e.gap,
            o = e.rowGap,
            a = e.columnGap,
            s = e.column,
            l = e.row,
            u = e.autoFlow,
            d = e.autoRows,
            m = e.templateRows,
            p = e.autoColumns,
            x = e.templateColumns,
            _ = Fe(e, GT),
            b = {
                display: 'grid',
                gridArea: r,
                gridTemplateAreas: n,
                gridGap: i,
                gridRowGap: o,
                gridColumnGap: a,
                gridAutoColumns: p,
                gridColumn: s,
                gridRow: l,
                gridAutoFlow: u,
                gridAutoRows: d,
                gridTemplateRows: m,
                gridTemplateColumns: x,
            }
        return T.exports.createElement(Y.div, te({ ref: t, __css: b }, _))
    })
G && (Jm.displayName = 'Grid')
var YT = ['className'],
    XT = Q(function (e, t) {
        var r = kt('Heading', e),
            n = ze(e)
        n.className
        var i = Fe(n, YT)
        return T.exports.createElement(
            Y.h2,
            te({ ref: t, className: ie('chakra-heading', e.className) }, i, {
                __css: r,
            })
        )
    })
G && (XT.displayName = 'Heading')
var QT = ['className'],
    JT = Q(function (e, t) {
        var r = kt('Kbd', e),
            n = ze(e),
            i = n.className,
            o = Fe(n, QT)
        return T.exports.createElement(
            Y.kbd,
            te({ ref: t, className: ie('chakra-kbd', i) }, o, {
                __css: te({ fontFamily: 'mono' }, r),
            })
        )
    })
G && (JT.displayName = 'Kbd')
var ZT = ['className', 'isExternal'],
    eA = Q(function (e, t) {
        var r = kt('Link', e),
            n = ze(e),
            i = n.className,
            o = n.isExternal,
            a = Fe(n, ZT)
        return T.exports.createElement(
            Y.a,
            te(
                {
                    target: o ? '_blank' : void 0,
                    rel: o ? 'noopener noreferrer' : void 0,
                    ref: t,
                    className: ie('chakra-link', i),
                },
                a,
                { __css: r }
            )
        )
    })
G && (eA.displayName = 'Link')
var tA = ['children', 'styleType', 'stylePosition', 'spacing'],
    rA = ['as'],
    nA = ['as'],
    pf = Q(function (e, t) {
        var r,
            n = fn('List', e),
            i = ze(e),
            o = i.children,
            a = i.styleType,
            s = a === void 0 ? 'none' : a,
            l = i.stylePosition,
            u = i.spacing,
            d = Fe(i, tA),
            m = Ss(o),
            p = '& > *:not(style) ~ *:not(style)',
            x = u ? ((r = {}), (r[p] = { mt: u }), r) : {}
        return T.exports.createElement(
            Ao,
            { value: n },
            T.exports.createElement(
                Y.ul,
                te(
                    {
                        ref: t,
                        listStyleType: s,
                        listStylePosition: l,
                        role: 'list',
                        __css: te({}, n.container, x),
                    },
                    d
                ),
                m
            )
        )
    })
G && (pf.displayName = 'List')
var iA = Q(function (e, t) {
    e.as
    var r = Fe(e, rA)
    return T.exports.createElement(
        pf,
        te({ ref: t, as: 'ol', styleType: 'decimal', marginStart: '1em' }, r)
    )
})
G && (iA.displayName = 'OrderedList')
var oA = Q(function (e, t) {
    e.as
    var r = Fe(e, nA)
    return T.exports.createElement(
        pf,
        te({ ref: t, as: 'ul', styleType: 'initial', marginStart: '1em' }, r)
    )
})
G && (oA.displayName = 'UnorderedList')
var aA = Q(function (e, t) {
    var r = dr()
    return T.exports.createElement(Y.li, te({ ref: t }, e, { __css: r.item }))
})
G && (aA.displayName = 'ListItem')
var sA = Q(function (e, t) {
    var r = dr()
    return T.exports.createElement(
        Nm,
        te({ ref: t, role: 'presentation' }, e, { __css: r.icon })
    )
})
G && (sA.displayName = 'ListIcon')
var lA = ['columns', 'spacingX', 'spacingY', 'spacing', 'minChildWidth'],
    uA = Q(function (e, t) {
        var r = e.columns,
            n = e.spacingX,
            i = e.spacingY,
            o = e.spacing,
            a = e.minChildWidth,
            s = Fe(e, lA),
            l = a ? fA(a) : dA(r)
        return T.exports.createElement(
            Jm,
            te(
                { ref: t, gap: o, columnGap: n, rowGap: i, templateColumns: l },
                s
            )
        )
    })
G && (uA.displayName = 'SimpleGrid')
function cA(e) {
    return Zn(e) ? e + 'px' : e
}
function fA(e) {
    return ti(e, function (t) {
        return b0(t) ? null : 'repeat(auto-fit, minmax(' + cA(t) + ', 1fr))'
    })
}
function dA(e) {
    return ti(e, function (t) {
        return b0(t) ? null : 'repeat(' + t + ', minmax(0, 1fr))'
    })
}
var hA = Y('div', {
    baseStyle: { flex: 1, justifySelf: 'stretch', alignSelf: 'stretch' },
})
G && (hA.displayName = 'Spacer')
var mf = '& > *:not(style) ~ *:not(style)'
function pA(e) {
    var t,
        r = e.spacing,
        n = e.direction,
        i = {
            column: {
                marginTop: r,
                marginEnd: 0,
                marginBottom: 0,
                marginStart: 0,
            },
            row: {
                marginTop: 0,
                marginEnd: 0,
                marginBottom: 0,
                marginStart: r,
            },
            'column-reverse': {
                marginTop: 0,
                marginEnd: 0,
                marginBottom: r,
                marginStart: 0,
            },
            'row-reverse': {
                marginTop: 0,
                marginEnd: r,
                marginBottom: 0,
                marginStart: 0,
            },
        }
    return (
        (t = { flexDirection: n }),
        (t[mf] = ti(n, function (o) {
            return i[o]
        })),
        t
    )
}
function mA(e) {
    var t = e.spacing,
        r = e.direction,
        n = {
            column: {
                my: t,
                mx: 0,
                borderLeftWidth: 0,
                borderBottomWidth: '1px',
            },
            'column-reverse': {
                my: t,
                mx: 0,
                borderLeftWidth: 0,
                borderBottomWidth: '1px',
            },
            row: { mx: t, my: 0, borderLeftWidth: '1px', borderBottomWidth: 0 },
            'row-reverse': {
                mx: t,
                my: 0,
                borderLeftWidth: '1px',
                borderBottomWidth: 0,
            },
        }
    return {
        '&': ti(r, function (i) {
            return n[i]
        }),
    }
}
var vA = [
        'isInline',
        'direction',
        'align',
        'justify',
        'spacing',
        'wrap',
        'children',
        'divider',
        'className',
        'shouldWrapChildren',
    ],
    gA = function (t) {
        return T.exports.createElement(
            Y.div,
            te({ className: 'chakra-stack__item' }, t, {
                __css: te(
                    { display: 'inline-block', flex: '0 0 auto', minWidth: 0 },
                    t.__css
                ),
            })
        )
    },
    vf = Q(function (e, t) {
        var r,
            n = e.isInline,
            i = e.direction,
            o = e.align,
            a = e.justify,
            s = e.spacing,
            l = s === void 0 ? '0.5rem' : s,
            u = e.wrap,
            d = e.children,
            m = e.divider,
            p = e.className,
            x = e.shouldWrapChildren,
            _ = Fe(e, vA),
            b = n ? 'row' : i != null ? i : 'column',
            g = T.exports.useMemo(
                function () {
                    return pA({ direction: b, spacing: l })
                },
                [b, l]
            ),
            v = T.exports.useMemo(
                function () {
                    return mA({ spacing: l, direction: b })
                },
                [l, b]
            ),
            h = !!m,
            C = !x && !h,
            E = Ss(d),
            D = C
                ? E
                : E.map(function (F, O) {
                      var M = typeof F.key != 'undefined' ? F.key : O,
                          L = O + 1 === E.length,
                          q = T.exports.createElement(gA, { key: M }, F),
                          J = x ? q : F
                      if (!h) return J
                      var oe = T.exports.cloneElement(m, { __css: v }),
                          Ue = L ? null : oe
                      return T.exports.createElement(
                          T.exports.Fragment,
                          { key: M },
                          J,
                          Ue
                      )
                  }),
            P = ie('chakra-stack', p)
        return T.exports.createElement(
            Y.div,
            te(
                {
                    ref: t,
                    display: 'flex',
                    alignItems: o,
                    justifyContent: a,
                    flexDirection: g.flexDirection,
                    flexWrap: u,
                    className: P,
                    __css: h ? {} : ((r = {}), (r[mf] = g[mf]), r),
                },
                _
            ),
            D
        )
    })
G && (vf.displayName = 'Stack')
var yA = Q(function (e, t) {
    return T.exports.createElement(
        vf,
        te({ align: 'center' }, e, { direction: 'row', ref: t })
    )
})
G && (yA.displayName = 'HStack')
var SA = Q(function (e, t) {
    return T.exports.createElement(
        vf,
        te({ align: 'center' }, e, { direction: 'column', ref: t })
    )
})
G && (SA.displayName = 'VStack')
var xA = ['className', 'align', 'decoration', 'casing'],
    wA = Q(function (e, t) {
        var r = kt('Text', e),
            n = ze(e)
        n.className, n.align, n.decoration, n.casing
        var i = Fe(n, xA),
            o = vs({
                textAlign: e.align,
                textDecoration: e.decoration,
                textTransform: e.casing,
            })
        return T.exports.createElement(
            Y.p,
            te({ ref: t, className: ie('chakra-text', e.className) }, o, i, {
                __css: r,
            })
        )
    })
G && (wA.displayName = 'Text')
var bA = [
        'spacing',
        'children',
        'justify',
        'direction',
        'align',
        'className',
        'shouldWrapChildren',
    ],
    CA = ['className'],
    _A = Q(function (e, t) {
        var r = e.spacing,
            n = r === void 0 ? '0.5rem' : r,
            i = e.children,
            o = e.justify,
            a = e.direction,
            s = e.align,
            l = e.className,
            u = e.shouldWrapChildren,
            d = Fe(e, bA),
            m = T.exports.useMemo(
                function () {
                    return {
                        '--chakra-wrap-spacing': function (_) {
                            return ti(n, function (b) {
                                return z0('space', b)(_)
                            })
                        },
                        '--wrap-spacing':
                            'calc(var(--chakra-wrap-spacing) / 2)',
                        display: 'flex',
                        flexWrap: 'wrap',
                        justifyContent: o,
                        alignItems: s,
                        flexDirection: a,
                        listStyleType: 'none',
                        padding: '0',
                        margin: 'calc(var(--wrap-spacing) * -1)',
                        '& > *:not(style)': { margin: 'var(--wrap-spacing)' },
                    }
                },
                [n, o, s, a]
            ),
            p = u
                ? T.exports.Children.map(i, function (x, _) {
                      return T.exports.createElement(Zm, { key: _ }, x)
                  })
                : i
        return T.exports.createElement(
            Y.div,
            te({ ref: t, className: ie('chakra-wrap', l) }, d),
            T.exports.createElement(
                Y.ul,
                { className: 'chakra-wrap__list', __css: m },
                p
            )
        )
    })
G && (_A.displayName = 'Wrap')
var Zm = Q(function (e, t) {
    var r = e.className,
        n = Fe(e, CA)
    return T.exports.createElement(
        Y.li,
        te(
            {
                ref: t,
                __css: { display: 'flex', alignItems: 'flex-start' },
                className: ie('chakra-wrap__listitem', r),
            },
            n
        )
    )
})
G && (Zm.displayName = 'WrapItem')
var EA = Iw
EA.defaultProps = { theme: Bk }
var ev = {
        color: void 0,
        size: void 0,
        className: void 0,
        style: void 0,
        attr: void 0,
    },
    tv = ir.createContext && ir.createContext(ev),
    Or =
        (globalThis && globalThis.__assign) ||
        function () {
            return (
                (Or =
                    Object.assign ||
                    function (e) {
                        for (var t, r = 1, n = arguments.length; r < n; r++) {
                            t = arguments[r]
                            for (var i in t)
                                Object.prototype.hasOwnProperty.call(t, i) &&
                                    (e[i] = t[i])
                        }
                        return e
                    }),
                Or.apply(this, arguments)
            )
        },
    kA =
        (globalThis && globalThis.__rest) ||
        function (e, t) {
            var r = {}
            for (var n in e)
                Object.prototype.hasOwnProperty.call(e, n) &&
                    t.indexOf(n) < 0 &&
                    (r[n] = e[n])
            if (e != null && typeof Object.getOwnPropertySymbols == 'function')
                for (
                    var i = 0, n = Object.getOwnPropertySymbols(e);
                    i < n.length;
                    i++
                )
                    t.indexOf(n[i]) < 0 &&
                        Object.prototype.propertyIsEnumerable.call(e, n[i]) &&
                        (r[n[i]] = e[n[i]])
            return r
        }
function rv(e) {
    return (
        e &&
        e.map(function (t, r) {
            return ir.createElement(t.tag, Or({ key: r }, t.attr), rv(t.child))
        })
    )
}
function nv(e) {
    return function (t) {
        return ir.createElement(
            TA,
            Or({ attr: Or({}, e.attr) }, t),
            rv(e.child)
        )
    }
}
function TA(e) {
    var t = function (r) {
        var n = e.attr,
            i = e.size,
            o = e.title,
            a = kA(e, ['attr', 'size', 'title']),
            s = i || r.size || '1em',
            l
        return (
            r.className && (l = r.className),
            e.className && (l = (l ? l + ' ' : '') + e.className),
            ir.createElement(
                'svg',
                Or(
                    {
                        stroke: 'currentColor',
                        fill: 'currentColor',
                        strokeWidth: '0',
                    },
                    r.attr,
                    n,
                    a,
                    {
                        className: l,
                        style: Or(
                            Or({ color: e.color || r.color }, r.style),
                            e.style
                        ),
                        height: s,
                        width: s,
                        xmlns: 'http://www.w3.org/2000/svg',
                    }
                ),
                o && ir.createElement('title', null, o),
                e.children
            )
        )
    }
    return tv !== void 0
        ? ir.createElement(tv.Consumer, null, function (r) {
              return t(r)
          })
        : t(ev)
}
function Q5(e) {
    return nv({
        tag: 'svg',
        attr: { viewBox: '0 0 448 512' },
        child: [
            {
                tag: 'path',
                attr: {
                    d: 'M400 224h-24v-72C376 68.2 307.8 0 224 0S72 68.2 72 152v72H48c-26.5 0-48 21.5-48 48v192c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V272c0-26.5-21.5-48-48-48zm-104 0H152v-72c0-39.7 32.3-72 72-72s72 32.3 72 72v72z',
                },
            },
        ],
    })(e)
}
function J5(e) {
    return nv({
        tag: 'svg',
        attr: { viewBox: '0 0 512 512' },
        child: [
            {
                tag: 'path',
                attr: {
                    d: 'M256 288c79.5 0 144-64.5 144-144S335.5 0 256 0 112 64.5 112 144s64.5 144 144 144zm128 32h-55.1c-22.2 10.2-46.9 16-72.9 16s-50.6-5.8-72.9-16H128C57.3 320 0 377.3 0 448v16c0 26.5 21.5 48 48 48h416c26.5 0 48-21.5 48-48v-16c0-70.7-57.3-128-128-128z',
                },
            },
        ],
    })(e)
}
/*!
 * Copyright 2016 Amazon.com,
 * Inc. or its affiliates. All Rights Reserved.
 *
 * Licensed under the Amazon Software License (the "License").
 * You may not use this file except in compliance with the
 * License. A copy of the License is located at
 *
 *     http://aws.amazon.com/asl/
 *
 * or in the "license" file accompanying this file. This file is
 * distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR
 * CONDITIONS OF ANY KIND, express or implied. See the License
 * for the specific language governing permissions and
 * limitations under the License.
 */ var Z5 = (function () {
        function e(r) {
            var n = r || {},
                i = n.ValidationData,
                o = n.Username,
                a = n.Password,
                s = n.AuthParameters,
                l = n.ClientMetadata
            ;(this.validationData = i || {}),
                (this.authParameters = s || {}),
                (this.clientMetadata = l || {}),
                (this.username = o),
                (this.password = a)
        }
        var t = e.prototype
        return (
            (t.getUsername = function () {
                return this.username
            }),
            (t.getPassword = function () {
                return this.password
            }),
            (t.getValidationData = function () {
                return this.validationData
            }),
            (t.getAuthParameters = function () {
                return this.authParameters
            }),
            (t.getClientMetadata = function () {
                return this.clientMetadata
            }),
            e
        )
    })(),
    me = {},
    js = {}
js.byteLength = RA
js.toByteArray = FA
js.fromByteArray = NA
var er = [],
    At = [],
    AA = typeof Uint8Array != 'undefined' ? Uint8Array : Array,
    gf = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/'
for (var li = 0, IA = gf.length; li < IA; ++li)
    (er[li] = gf[li]), (At[gf.charCodeAt(li)] = li)
At['-'.charCodeAt(0)] = 62
At['_'.charCodeAt(0)] = 63
function iv(e) {
    var t = e.length
    if (t % 4 > 0)
        throw new Error('Invalid string. Length must be a multiple of 4')
    var r = e.indexOf('=')
    r === -1 && (r = t)
    var n = r === t ? 0 : 4 - (r % 4)
    return [r, n]
}
function RA(e) {
    var t = iv(e),
        r = t[0],
        n = t[1]
    return ((r + n) * 3) / 4 - n
}
function PA(e, t, r) {
    return ((t + r) * 3) / 4 - r
}
function FA(e) {
    var t,
        r = iv(e),
        n = r[0],
        i = r[1],
        o = new AA(PA(e, n, i)),
        a = 0,
        s = i > 0 ? n - 4 : n,
        l
    for (l = 0; l < s; l += 4)
        (t =
            (At[e.charCodeAt(l)] << 18) |
            (At[e.charCodeAt(l + 1)] << 12) |
            (At[e.charCodeAt(l + 2)] << 6) |
            At[e.charCodeAt(l + 3)]),
            (o[a++] = (t >> 16) & 255),
            (o[a++] = (t >> 8) & 255),
            (o[a++] = t & 255)
    return (
        i === 2 &&
            ((t = (At[e.charCodeAt(l)] << 2) | (At[e.charCodeAt(l + 1)] >> 4)),
            (o[a++] = t & 255)),
        i === 1 &&
            ((t =
                (At[e.charCodeAt(l)] << 10) |
                (At[e.charCodeAt(l + 1)] << 4) |
                (At[e.charCodeAt(l + 2)] >> 2)),
            (o[a++] = (t >> 8) & 255),
            (o[a++] = t & 255)),
        o
    )
}
function DA(e) {
    return (
        er[(e >> 18) & 63] + er[(e >> 12) & 63] + er[(e >> 6) & 63] + er[e & 63]
    )
}
function BA(e, t, r) {
    for (var n, i = [], o = t; o < r; o += 3)
        (n =
            ((e[o] << 16) & 16711680) +
            ((e[o + 1] << 8) & 65280) +
            (e[o + 2] & 255)),
            i.push(DA(n))
    return i.join('')
}
function NA(e) {
    for (
        var t, r = e.length, n = r % 3, i = [], o = 16383, a = 0, s = r - n;
        a < s;
        a += o
    )
        i.push(BA(e, a, a + o > s ? s : a + o))
    return (
        n === 1
            ? ((t = e[r - 1]), i.push(er[t >> 2] + er[(t << 4) & 63] + '=='))
            : n === 2 &&
              ((t = (e[r - 2] << 8) + e[r - 1]),
              i.push(
                  er[t >> 10] + er[(t >> 4) & 63] + er[(t << 2) & 63] + '='
              )),
        i.join('')
    )
}
var yf = {}
/*! ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> */ yf.read =
    function (e, t, r, n, i) {
        var o,
            a,
            s = i * 8 - n - 1,
            l = (1 << s) - 1,
            u = l >> 1,
            d = -7,
            m = r ? i - 1 : 0,
            p = r ? -1 : 1,
            x = e[t + m]
        for (
            m += p, o = x & ((1 << -d) - 1), x >>= -d, d += s;
            d > 0;
            o = o * 256 + e[t + m], m += p, d -= 8
        );
        for (
            a = o & ((1 << -d) - 1), o >>= -d, d += n;
            d > 0;
            a = a * 256 + e[t + m], m += p, d -= 8
        );
        if (o === 0) o = 1 - u
        else {
            if (o === l) return a ? NaN : (x ? -1 : 1) * (1 / 0)
            ;(a = a + Math.pow(2, n)), (o = o - u)
        }
        return (x ? -1 : 1) * a * Math.pow(2, o - n)
    }
yf.write = function (e, t, r, n, i, o) {
    var a,
        s,
        l,
        u = o * 8 - i - 1,
        d = (1 << u) - 1,
        m = d >> 1,
        p = i === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0,
        x = n ? 0 : o - 1,
        _ = n ? 1 : -1,
        b = t < 0 || (t === 0 && 1 / t < 0) ? 1 : 0
    for (
        t = Math.abs(t),
            isNaN(t) || t === 1 / 0
                ? ((s = isNaN(t) ? 1 : 0), (a = d))
                : ((a = Math.floor(Math.log(t) / Math.LN2)),
                  t * (l = Math.pow(2, -a)) < 1 && (a--, (l *= 2)),
                  a + m >= 1 ? (t += p / l) : (t += p * Math.pow(2, 1 - m)),
                  t * l >= 2 && (a++, (l /= 2)),
                  a + m >= d
                      ? ((s = 0), (a = d))
                      : a + m >= 1
                      ? ((s = (t * l - 1) * Math.pow(2, i)), (a = a + m))
                      : ((s = t * Math.pow(2, m - 1) * Math.pow(2, i)),
                        (a = 0)));
        i >= 8;
        e[r + x] = s & 255, x += _, s /= 256, i -= 8
    );
    for (
        a = (a << i) | s, u += i;
        u > 0;
        e[r + x] = a & 255, x += _, a /= 256, u -= 8
    );
    e[r + x - _] |= b * 128
}
var UA = {}.toString,
    MA =
        Array.isArray ||
        function (e) {
            return UA.call(e) == '[object Array]'
        }
/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <http://feross.org>
 * @license  MIT
 */ ;(function (e) {
    var t = js,
        r = yf,
        n = MA
    ;(e.Buffer = s),
        (e.SlowBuffer = v),
        (e.INSPECT_MAX_BYTES = 50),
        (s.TYPED_ARRAY_SUPPORT =
            Ze.TYPED_ARRAY_SUPPORT !== void 0 ? Ze.TYPED_ARRAY_SUPPORT : i()),
        (e.kMaxLength = o())
    function i() {
        try {
            var y = new Uint8Array(1)
            return (
                (y.__proto__ = {
                    __proto__: Uint8Array.prototype,
                    foo: function () {
                        return 42
                    },
                }),
                y.foo() === 42 &&
                    typeof y.subarray == 'function' &&
                    y.subarray(1, 1).byteLength === 0
            )
        } catch {
            return !1
        }
    }
    function o() {
        return s.TYPED_ARRAY_SUPPORT ? 2147483647 : 1073741823
    }
    function a(y, c) {
        if (o() < c) throw new RangeError('Invalid typed array length')
        return (
            s.TYPED_ARRAY_SUPPORT
                ? ((y = new Uint8Array(c)), (y.__proto__ = s.prototype))
                : (y === null && (y = new s(c)), (y.length = c)),
            y
        )
    }
    function s(y, c, f) {
        if (!s.TYPED_ARRAY_SUPPORT && !(this instanceof s))
            return new s(y, c, f)
        if (typeof y == 'number') {
            if (typeof c == 'string')
                throw new Error(
                    'If encoding is specified then the first argument must be a string'
                )
            return m(this, y)
        }
        return l(this, y, c, f)
    }
    ;(s.poolSize = 8192),
        (s._augment = function (y) {
            return (y.__proto__ = s.prototype), y
        })
    function l(y, c, f, w) {
        if (typeof c == 'number')
            throw new TypeError('"value" argument must not be a number')
        return typeof ArrayBuffer != 'undefined' && c instanceof ArrayBuffer
            ? _(y, c, f, w)
            : typeof c == 'string'
            ? p(y, c, f)
            : b(y, c)
    }
    ;(s.from = function (y, c, f) {
        return l(null, y, c, f)
    }),
        s.TYPED_ARRAY_SUPPORT &&
            ((s.prototype.__proto__ = Uint8Array.prototype),
            (s.__proto__ = Uint8Array),
            typeof Symbol != 'undefined' &&
                Symbol.species &&
                s[Symbol.species] === s &&
                Object.defineProperty(s, Symbol.species, {
                    value: null,
                    configurable: !0,
                }))
    function u(y) {
        if (typeof y != 'number')
            throw new TypeError('"size" argument must be a number')
        if (y < 0) throw new RangeError('"size" argument must not be negative')
    }
    function d(y, c, f, w) {
        return (
            u(c),
            c <= 0
                ? a(y, c)
                : f !== void 0
                ? typeof w == 'string'
                    ? a(y, c).fill(f, w)
                    : a(y, c).fill(f)
                : a(y, c)
        )
    }
    s.alloc = function (y, c, f) {
        return d(null, y, c, f)
    }
    function m(y, c) {
        if ((u(c), (y = a(y, c < 0 ? 0 : g(c) | 0)), !s.TYPED_ARRAY_SUPPORT))
            for (var f = 0; f < c; ++f) y[f] = 0
        return y
    }
    ;(s.allocUnsafe = function (y) {
        return m(null, y)
    }),
        (s.allocUnsafeSlow = function (y) {
            return m(null, y)
        })
    function p(y, c, f) {
        if (
            ((typeof f != 'string' || f === '') && (f = 'utf8'),
            !s.isEncoding(f))
        )
            throw new TypeError('"encoding" must be a valid string encoding')
        var w = h(c, f) | 0
        y = a(y, w)
        var I = y.write(c, f)
        return I !== w && (y = y.slice(0, I)), y
    }
    function x(y, c) {
        var f = c.length < 0 ? 0 : g(c.length) | 0
        y = a(y, f)
        for (var w = 0; w < f; w += 1) y[w] = c[w] & 255
        return y
    }
    function _(y, c, f, w) {
        if ((c.byteLength, f < 0 || c.byteLength < f))
            throw new RangeError("'offset' is out of bounds")
        if (c.byteLength < f + (w || 0))
            throw new RangeError("'length' is out of bounds")
        return (
            f === void 0 && w === void 0
                ? (c = new Uint8Array(c))
                : w === void 0
                ? (c = new Uint8Array(c, f))
                : (c = new Uint8Array(c, f, w)),
            s.TYPED_ARRAY_SUPPORT
                ? ((y = c), (y.__proto__ = s.prototype))
                : (y = x(y, c)),
            y
        )
    }
    function b(y, c) {
        if (s.isBuffer(c)) {
            var f = g(c.length) | 0
            return (y = a(y, f)), y.length === 0 || c.copy(y, 0, 0, f), y
        }
        if (c) {
            if (
                (typeof ArrayBuffer != 'undefined' &&
                    c.buffer instanceof ArrayBuffer) ||
                'length' in c
            )
                return typeof c.length != 'number' || Ys(c.length)
                    ? a(y, 0)
                    : x(y, c)
            if (c.type === 'Buffer' && n(c.data)) return x(y, c.data)
        }
        throw new TypeError(
            'First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.'
        )
    }
    function g(y) {
        if (y >= o())
            throw new RangeError(
                'Attempt to allocate Buffer larger than maximum size: 0x' +
                    o().toString(16) +
                    ' bytes'
            )
        return y | 0
    }
    function v(y) {
        return +y != y && (y = 0), s.alloc(+y)
    }
    ;(s.isBuffer = function (c) {
        return !!(c != null && c._isBuffer)
    }),
        (s.compare = function (c, f) {
            if (!s.isBuffer(c) || !s.isBuffer(f))
                throw new TypeError('Arguments must be Buffers')
            if (c === f) return 0
            for (
                var w = c.length, I = f.length, B = 0, U = Math.min(w, I);
                B < U;
                ++B
            )
                if (c[B] !== f[B]) {
                    ;(w = c[B]), (I = f[B])
                    break
                }
            return w < I ? -1 : I < w ? 1 : 0
        }),
        (s.isEncoding = function (c) {
            switch (String(c).toLowerCase()) {
                case 'hex':
                case 'utf8':
                case 'utf-8':
                case 'ascii':
                case 'latin1':
                case 'binary':
                case 'base64':
                case 'ucs2':
                case 'ucs-2':
                case 'utf16le':
                case 'utf-16le':
                    return !0
                default:
                    return !1
            }
        }),
        (s.concat = function (c, f) {
            if (!n(c))
                throw new TypeError(
                    '"list" argument must be an Array of Buffers'
                )
            if (c.length === 0) return s.alloc(0)
            var w
            if (f === void 0)
                for (f = 0, w = 0; w < c.length; ++w) f += c[w].length
            var I = s.allocUnsafe(f),
                B = 0
            for (w = 0; w < c.length; ++w) {
                var U = c[w]
                if (!s.isBuffer(U))
                    throw new TypeError(
                        '"list" argument must be an Array of Buffers'
                    )
                U.copy(I, B), (B += U.length)
            }
            return I
        })
    function h(y, c) {
        if (s.isBuffer(y)) return y.length
        if (
            typeof ArrayBuffer != 'undefined' &&
            typeof ArrayBuffer.isView == 'function' &&
            (ArrayBuffer.isView(y) || y instanceof ArrayBuffer)
        )
            return y.byteLength
        typeof y != 'string' && (y = '' + y)
        var f = y.length
        if (f === 0) return 0
        for (var w = !1; ; )
            switch (c) {
                case 'ascii':
                case 'latin1':
                case 'binary':
                    return f
                case 'utf8':
                case 'utf-8':
                case void 0:
                    return jr(y).length
                case 'ucs2':
                case 'ucs-2':
                case 'utf16le':
                case 'utf-16le':
                    return f * 2
                case 'hex':
                    return f >>> 1
                case 'base64':
                    return $o(y).length
                default:
                    if (w) return jr(y).length
                    ;(c = ('' + c).toLowerCase()), (w = !0)
            }
    }
    s.byteLength = h
    function C(y, c, f) {
        var w = !1
        if (
            ((c === void 0 || c < 0) && (c = 0),
            c > this.length ||
                ((f === void 0 || f > this.length) && (f = this.length),
                f <= 0) ||
                ((f >>>= 0), (c >>>= 0), f <= c))
        )
            return ''
        for (y || (y = 'utf8'); ; )
            switch (y) {
                case 'hex':
                    return Lr(this, c, f)
                case 'utf8':
                case 'utf-8':
                    return Ue(this, c, f)
                case 'ascii':
                    return Lt(this, c, f)
                case 'latin1':
                case 'binary':
                    return tr(this, c, f)
                case 'base64':
                    return oe(this, c, f)
                case 'ucs2':
                case 'ucs-2':
                case 'utf16le':
                case 'utf-16le':
                    return hi(this, c, f)
                default:
                    if (w) throw new TypeError('Unknown encoding: ' + y)
                    ;(y = (y + '').toLowerCase()), (w = !0)
            }
    }
    s.prototype._isBuffer = !0
    function E(y, c, f) {
        var w = y[c]
        ;(y[c] = y[f]), (y[f] = w)
    }
    ;(s.prototype.swap16 = function () {
        var c = this.length
        if (c % 2 != 0)
            throw new RangeError('Buffer size must be a multiple of 16-bits')
        for (var f = 0; f < c; f += 2) E(this, f, f + 1)
        return this
    }),
        (s.prototype.swap32 = function () {
            var c = this.length
            if (c % 4 != 0)
                throw new RangeError(
                    'Buffer size must be a multiple of 32-bits'
                )
            for (var f = 0; f < c; f += 4)
                E(this, f, f + 3), E(this, f + 1, f + 2)
            return this
        }),
        (s.prototype.swap64 = function () {
            var c = this.length
            if (c % 8 != 0)
                throw new RangeError(
                    'Buffer size must be a multiple of 64-bits'
                )
            for (var f = 0; f < c; f += 8)
                E(this, f, f + 7),
                    E(this, f + 1, f + 6),
                    E(this, f + 2, f + 5),
                    E(this, f + 3, f + 4)
            return this
        }),
        (s.prototype.toString = function () {
            var c = this.length | 0
            return c === 0
                ? ''
                : arguments.length === 0
                ? Ue(this, 0, c)
                : C.apply(this, arguments)
        }),
        (s.prototype.equals = function (c) {
            if (!s.isBuffer(c)) throw new TypeError('Argument must be a Buffer')
            return this === c ? !0 : s.compare(this, c) === 0
        }),
        (s.prototype.inspect = function () {
            var c = '',
                f = e.INSPECT_MAX_BYTES
            return (
                this.length > 0 &&
                    ((c = this.toString('hex', 0, f).match(/.{2}/g).join(' ')),
                    this.length > f && (c += ' ... ')),
                '<Buffer ' + c + '>'
            )
        }),
        (s.prototype.compare = function (c, f, w, I, B) {
            if (!s.isBuffer(c)) throw new TypeError('Argument must be a Buffer')
            if (
                (f === void 0 && (f = 0),
                w === void 0 && (w = c ? c.length : 0),
                I === void 0 && (I = 0),
                B === void 0 && (B = this.length),
                f < 0 || w > c.length || I < 0 || B > this.length)
            )
                throw new RangeError('out of range index')
            if (I >= B && f >= w) return 0
            if (I >= B) return -1
            if (f >= w) return 1
            if (((f >>>= 0), (w >>>= 0), (I >>>= 0), (B >>>= 0), this === c))
                return 0
            for (
                var U = B - I,
                    Z = w - f,
                    de = Math.min(U, Z),
                    ve = this.slice(I, B),
                    Ie = c.slice(f, w),
                    ye = 0;
                ye < de;
                ++ye
            )
                if (ve[ye] !== Ie[ye]) {
                    ;(U = ve[ye]), (Z = Ie[ye])
                    break
                }
            return U < Z ? -1 : Z < U ? 1 : 0
        })
    function D(y, c, f, w, I) {
        if (y.length === 0) return -1
        if (
            (typeof f == 'string'
                ? ((w = f), (f = 0))
                : f > 2147483647
                ? (f = 2147483647)
                : f < -2147483648 && (f = -2147483648),
            (f = +f),
            isNaN(f) && (f = I ? 0 : y.length - 1),
            f < 0 && (f = y.length + f),
            f >= y.length)
        ) {
            if (I) return -1
            f = y.length - 1
        } else if (f < 0)
            if (I) f = 0
            else return -1
        if ((typeof c == 'string' && (c = s.from(c, w)), s.isBuffer(c)))
            return c.length === 0 ? -1 : P(y, c, f, w, I)
        if (typeof c == 'number')
            return (
                (c = c & 255),
                s.TYPED_ARRAY_SUPPORT &&
                typeof Uint8Array.prototype.indexOf == 'function'
                    ? I
                        ? Uint8Array.prototype.indexOf.call(y, c, f)
                        : Uint8Array.prototype.lastIndexOf.call(y, c, f)
                    : P(y, [c], f, w, I)
            )
        throw new TypeError('val must be string, number or Buffer')
    }
    function P(y, c, f, w, I) {
        var B = 1,
            U = y.length,
            Z = c.length
        if (
            w !== void 0 &&
            ((w = String(w).toLowerCase()),
            w === 'ucs2' ||
                w === 'ucs-2' ||
                w === 'utf16le' ||
                w === 'utf-16le')
        ) {
            if (y.length < 2 || c.length < 2) return -1
            ;(B = 2), (U /= 2), (Z /= 2), (f /= 2)
        }
        function de(mi, vi) {
            return B === 1 ? mi[vi] : mi.readUInt16BE(vi * B)
        }
        var ve
        if (I) {
            var Ie = -1
            for (ve = f; ve < U; ve++)
                if (de(y, ve) === de(c, Ie === -1 ? 0 : ve - Ie)) {
                    if ((Ie === -1 && (Ie = ve), ve - Ie + 1 === Z))
                        return Ie * B
                } else Ie !== -1 && (ve -= ve - Ie), (Ie = -1)
        } else
            for (f + Z > U && (f = U - Z), ve = f; ve >= 0; ve--) {
                for (var ye = !0, Wr = 0; Wr < Z; Wr++)
                    if (de(y, ve + Wr) !== de(c, Wr)) {
                        ye = !1
                        break
                    }
                if (ye) return ve
            }
        return -1
    }
    ;(s.prototype.includes = function (c, f, w) {
        return this.indexOf(c, f, w) !== -1
    }),
        (s.prototype.indexOf = function (c, f, w) {
            return D(this, c, f, w, !0)
        }),
        (s.prototype.lastIndexOf = function (c, f, w) {
            return D(this, c, f, w, !1)
        })
    function F(y, c, f, w) {
        f = Number(f) || 0
        var I = y.length - f
        w ? ((w = Number(w)), w > I && (w = I)) : (w = I)
        var B = c.length
        if (B % 2 != 0) throw new TypeError('Invalid hex string')
        w > B / 2 && (w = B / 2)
        for (var U = 0; U < w; ++U) {
            var Z = parseInt(c.substr(U * 2, 2), 16)
            if (isNaN(Z)) return U
            y[f + U] = Z
        }
        return U
    }
    function O(y, c, f, w) {
        return yn(jr(c, y.length - f), y, f, w)
    }
    function M(y, c, f, w) {
        return yn(qs(c), y, f, w)
    }
    function L(y, c, f, w) {
        return M(y, c, f, w)
    }
    function q(y, c, f, w) {
        return yn($o(c), y, f, w)
    }
    function J(y, c, f, w) {
        return yn(Gs(c, y.length - f), y, f, w)
    }
    ;(s.prototype.write = function (c, f, w, I) {
        if (f === void 0) (I = 'utf8'), (w = this.length), (f = 0)
        else if (w === void 0 && typeof f == 'string')
            (I = f), (w = this.length), (f = 0)
        else if (isFinite(f))
            (f = f | 0),
                isFinite(w)
                    ? ((w = w | 0), I === void 0 && (I = 'utf8'))
                    : ((I = w), (w = void 0))
        else
            throw new Error(
                'Buffer.write(string, encoding, offset[, length]) is no longer supported'
            )
        var B = this.length - f
        if (
            ((w === void 0 || w > B) && (w = B),
            (c.length > 0 && (w < 0 || f < 0)) || f > this.length)
        )
            throw new RangeError('Attempt to write outside buffer bounds')
        I || (I = 'utf8')
        for (var U = !1; ; )
            switch (I) {
                case 'hex':
                    return F(this, c, f, w)
                case 'utf8':
                case 'utf-8':
                    return O(this, c, f, w)
                case 'ascii':
                    return M(this, c, f, w)
                case 'latin1':
                case 'binary':
                    return L(this, c, f, w)
                case 'base64':
                    return q(this, c, f, w)
                case 'ucs2':
                case 'ucs-2':
                case 'utf16le':
                case 'utf-16le':
                    return J(this, c, f, w)
                default:
                    if (U) throw new TypeError('Unknown encoding: ' + I)
                    ;(I = ('' + I).toLowerCase()), (U = !0)
            }
    }),
        (s.prototype.toJSON = function () {
            return {
                type: 'Buffer',
                data: Array.prototype.slice.call(this._arr || this, 0),
            }
        })
    function oe(y, c, f) {
        return c === 0 && f === y.length
            ? t.fromByteArray(y)
            : t.fromByteArray(y.slice(c, f))
    }
    function Ue(y, c, f) {
        f = Math.min(y.length, f)
        for (var w = [], I = c; I < f; ) {
            var B = y[I],
                U = null,
                Z = B > 239 ? 4 : B > 223 ? 3 : B > 191 ? 2 : 1
            if (I + Z <= f) {
                var de, ve, Ie, ye
                switch (Z) {
                    case 1:
                        B < 128 && (U = B)
                        break
                    case 2:
                        ;(de = y[I + 1]),
                            (de & 192) == 128 &&
                                ((ye = ((B & 31) << 6) | (de & 63)),
                                ye > 127 && (U = ye))
                        break
                    case 3:
                        ;(de = y[I + 1]),
                            (ve = y[I + 2]),
                            (de & 192) == 128 &&
                                (ve & 192) == 128 &&
                                ((ye =
                                    ((B & 15) << 12) |
                                    ((de & 63) << 6) |
                                    (ve & 63)),
                                ye > 2047 &&
                                    (ye < 55296 || ye > 57343) &&
                                    (U = ye))
                        break
                    case 4:
                        ;(de = y[I + 1]),
                            (ve = y[I + 2]),
                            (Ie = y[I + 3]),
                            (de & 192) == 128 &&
                                (ve & 192) == 128 &&
                                (Ie & 192) == 128 &&
                                ((ye =
                                    ((B & 15) << 18) |
                                    ((de & 63) << 12) |
                                    ((ve & 63) << 6) |
                                    (Ie & 63)),
                                ye > 65535 && ye < 1114112 && (U = ye))
                }
            }
            U === null
                ? ((U = 65533), (Z = 1))
                : U > 65535 &&
                  ((U -= 65536),
                  w.push(((U >>> 10) & 1023) | 55296),
                  (U = 56320 | (U & 1023))),
                w.push(U),
                (I += Z)
        }
        return Pt(w)
    }
    var Ke = 4096
    function Pt(y) {
        var c = y.length
        if (c <= Ke) return String.fromCharCode.apply(String, y)
        for (var f = '', w = 0; w < c; )
            f += String.fromCharCode.apply(String, y.slice(w, (w += Ke)))
        return f
    }
    function Lt(y, c, f) {
        var w = ''
        f = Math.min(y.length, f)
        for (var I = c; I < f; ++I) w += String.fromCharCode(y[I] & 127)
        return w
    }
    function tr(y, c, f) {
        var w = ''
        f = Math.min(y.length, f)
        for (var I = c; I < f; ++I) w += String.fromCharCode(y[I])
        return w
    }
    function Lr(y, c, f) {
        var w = y.length
        ;(!c || c < 0) && (c = 0), (!f || f < 0 || f > w) && (f = w)
        for (var I = '', B = c; B < f; ++B) I += Oo(y[B])
        return I
    }
    function hi(y, c, f) {
        for (var w = y.slice(c, f), I = '', B = 0; B < w.length; B += 2)
            I += String.fromCharCode(w[B] + w[B + 1] * 256)
        return I
    }
    s.prototype.slice = function (c, f) {
        var w = this.length
        ;(c = ~~c),
            (f = f === void 0 ? w : ~~f),
            c < 0 ? ((c += w), c < 0 && (c = 0)) : c > w && (c = w),
            f < 0 ? ((f += w), f < 0 && (f = 0)) : f > w && (f = w),
            f < c && (f = c)
        var I
        if (s.TYPED_ARRAY_SUPPORT)
            (I = this.subarray(c, f)), (I.__proto__ = s.prototype)
        else {
            var B = f - c
            I = new s(B, void 0)
            for (var U = 0; U < B; ++U) I[U] = this[U + c]
        }
        return I
    }
    function $(y, c, f) {
        if (y % 1 != 0 || y < 0) throw new RangeError('offset is not uint')
        if (y + c > f)
            throw new RangeError('Trying to access beyond buffer length')
    }
    ;(s.prototype.readUIntLE = function (c, f, w) {
        ;(c = c | 0), (f = f | 0), w || $(c, f, this.length)
        for (var I = this[c], B = 1, U = 0; ++U < f && (B *= 256); )
            I += this[c + U] * B
        return I
    }),
        (s.prototype.readUIntBE = function (c, f, w) {
            ;(c = c | 0), (f = f | 0), w || $(c, f, this.length)
            for (var I = this[c + --f], B = 1; f > 0 && (B *= 256); )
                I += this[c + --f] * B
            return I
        }),
        (s.prototype.readUInt8 = function (c, f) {
            return f || $(c, 1, this.length), this[c]
        }),
        (s.prototype.readUInt16LE = function (c, f) {
            return f || $(c, 2, this.length), this[c] | (this[c + 1] << 8)
        }),
        (s.prototype.readUInt16BE = function (c, f) {
            return f || $(c, 2, this.length), (this[c] << 8) | this[c + 1]
        }),
        (s.prototype.readUInt32LE = function (c, f) {
            return (
                f || $(c, 4, this.length),
                (this[c] | (this[c + 1] << 8) | (this[c + 2] << 16)) +
                    this[c + 3] * 16777216
            )
        }),
        (s.prototype.readUInt32BE = function (c, f) {
            return (
                f || $(c, 4, this.length),
                this[c] * 16777216 +
                    ((this[c + 1] << 16) | (this[c + 2] << 8) | this[c + 3])
            )
        }),
        (s.prototype.readIntLE = function (c, f, w) {
            ;(c = c | 0), (f = f | 0), w || $(c, f, this.length)
            for (var I = this[c], B = 1, U = 0; ++U < f && (B *= 256); )
                I += this[c + U] * B
            return (B *= 128), I >= B && (I -= Math.pow(2, 8 * f)), I
        }),
        (s.prototype.readIntBE = function (c, f, w) {
            ;(c = c | 0), (f = f | 0), w || $(c, f, this.length)
            for (var I = f, B = 1, U = this[c + --I]; I > 0 && (B *= 256); )
                U += this[c + --I] * B
            return (B *= 128), U >= B && (U -= Math.pow(2, 8 * f)), U
        }),
        (s.prototype.readInt8 = function (c, f) {
            return (
                f || $(c, 1, this.length),
                this[c] & 128 ? (255 - this[c] + 1) * -1 : this[c]
            )
        }),
        (s.prototype.readInt16LE = function (c, f) {
            f || $(c, 2, this.length)
            var w = this[c] | (this[c + 1] << 8)
            return w & 32768 ? w | 4294901760 : w
        }),
        (s.prototype.readInt16BE = function (c, f) {
            f || $(c, 2, this.length)
            var w = this[c + 1] | (this[c] << 8)
            return w & 32768 ? w | 4294901760 : w
        }),
        (s.prototype.readInt32LE = function (c, f) {
            return (
                f || $(c, 4, this.length),
                this[c] |
                    (this[c + 1] << 8) |
                    (this[c + 2] << 16) |
                    (this[c + 3] << 24)
            )
        }),
        (s.prototype.readInt32BE = function (c, f) {
            return (
                f || $(c, 4, this.length),
                (this[c] << 24) |
                    (this[c + 1] << 16) |
                    (this[c + 2] << 8) |
                    this[c + 3]
            )
        }),
        (s.prototype.readFloatLE = function (c, f) {
            return f || $(c, 4, this.length), r.read(this, c, !0, 23, 4)
        }),
        (s.prototype.readFloatBE = function (c, f) {
            return f || $(c, 4, this.length), r.read(this, c, !1, 23, 4)
        }),
        (s.prototype.readDoubleLE = function (c, f) {
            return f || $(c, 8, this.length), r.read(this, c, !0, 52, 8)
        }),
        (s.prototype.readDoubleBE = function (c, f) {
            return f || $(c, 8, this.length), r.read(this, c, !1, 52, 8)
        })
    function K(y, c, f, w, I, B) {
        if (!s.isBuffer(y))
            throw new TypeError('"buffer" argument must be a Buffer instance')
        if (c > I || c < B)
            throw new RangeError('"value" argument is out of bounds')
        if (f + w > y.length) throw new RangeError('Index out of range')
    }
    ;(s.prototype.writeUIntLE = function (c, f, w, I) {
        if (((c = +c), (f = f | 0), (w = w | 0), !I)) {
            var B = Math.pow(2, 8 * w) - 1
            K(this, c, f, w, B, 0)
        }
        var U = 1,
            Z = 0
        for (this[f] = c & 255; ++Z < w && (U *= 256); )
            this[f + Z] = (c / U) & 255
        return f + w
    }),
        (s.prototype.writeUIntBE = function (c, f, w, I) {
            if (((c = +c), (f = f | 0), (w = w | 0), !I)) {
                var B = Math.pow(2, 8 * w) - 1
                K(this, c, f, w, B, 0)
            }
            var U = w - 1,
                Z = 1
            for (this[f + U] = c & 255; --U >= 0 && (Z *= 256); )
                this[f + U] = (c / Z) & 255
            return f + w
        }),
        (s.prototype.writeUInt8 = function (c, f, w) {
            return (
                (c = +c),
                (f = f | 0),
                w || K(this, c, f, 1, 255, 0),
                s.TYPED_ARRAY_SUPPORT || (c = Math.floor(c)),
                (this[f] = c & 255),
                f + 1
            )
        })
    function j(y, c, f, w) {
        c < 0 && (c = 65535 + c + 1)
        for (var I = 0, B = Math.min(y.length - f, 2); I < B; ++I)
            y[f + I] =
                (c & (255 << (8 * (w ? I : 1 - I)))) >>> ((w ? I : 1 - I) * 8)
    }
    ;(s.prototype.writeUInt16LE = function (c, f, w) {
        return (
            (c = +c),
            (f = f | 0),
            w || K(this, c, f, 2, 65535, 0),
            s.TYPED_ARRAY_SUPPORT
                ? ((this[f] = c & 255), (this[f + 1] = c >>> 8))
                : j(this, c, f, !0),
            f + 2
        )
    }),
        (s.prototype.writeUInt16BE = function (c, f, w) {
            return (
                (c = +c),
                (f = f | 0),
                w || K(this, c, f, 2, 65535, 0),
                s.TYPED_ARRAY_SUPPORT
                    ? ((this[f] = c >>> 8), (this[f + 1] = c & 255))
                    : j(this, c, f, !1),
                f + 2
            )
        })
    function le(y, c, f, w) {
        c < 0 && (c = 4294967295 + c + 1)
        for (var I = 0, B = Math.min(y.length - f, 4); I < B; ++I)
            y[f + I] = (c >>> ((w ? I : 3 - I) * 8)) & 255
    }
    ;(s.prototype.writeUInt32LE = function (c, f, w) {
        return (
            (c = +c),
            (f = f | 0),
            w || K(this, c, f, 4, 4294967295, 0),
            s.TYPED_ARRAY_SUPPORT
                ? ((this[f + 3] = c >>> 24),
                  (this[f + 2] = c >>> 16),
                  (this[f + 1] = c >>> 8),
                  (this[f] = c & 255))
                : le(this, c, f, !0),
            f + 4
        )
    }),
        (s.prototype.writeUInt32BE = function (c, f, w) {
            return (
                (c = +c),
                (f = f | 0),
                w || K(this, c, f, 4, 4294967295, 0),
                s.TYPED_ARRAY_SUPPORT
                    ? ((this[f] = c >>> 24),
                      (this[f + 1] = c >>> 16),
                      (this[f + 2] = c >>> 8),
                      (this[f + 3] = c & 255))
                    : le(this, c, f, !1),
                f + 4
            )
        }),
        (s.prototype.writeIntLE = function (c, f, w, I) {
            if (((c = +c), (f = f | 0), !I)) {
                var B = Math.pow(2, 8 * w - 1)
                K(this, c, f, w, B - 1, -B)
            }
            var U = 0,
                Z = 1,
                de = 0
            for (this[f] = c & 255; ++U < w && (Z *= 256); )
                c < 0 && de === 0 && this[f + U - 1] !== 0 && (de = 1),
                    (this[f + U] = (((c / Z) >> 0) - de) & 255)
            return f + w
        }),
        (s.prototype.writeIntBE = function (c, f, w, I) {
            if (((c = +c), (f = f | 0), !I)) {
                var B = Math.pow(2, 8 * w - 1)
                K(this, c, f, w, B - 1, -B)
            }
            var U = w - 1,
                Z = 1,
                de = 0
            for (this[f + U] = c & 255; --U >= 0 && (Z *= 256); )
                c < 0 && de === 0 && this[f + U + 1] !== 0 && (de = 1),
                    (this[f + U] = (((c / Z) >> 0) - de) & 255)
            return f + w
        }),
        (s.prototype.writeInt8 = function (c, f, w) {
            return (
                (c = +c),
                (f = f | 0),
                w || K(this, c, f, 1, 127, -128),
                s.TYPED_ARRAY_SUPPORT || (c = Math.floor(c)),
                c < 0 && (c = 255 + c + 1),
                (this[f] = c & 255),
                f + 1
            )
        }),
        (s.prototype.writeInt16LE = function (c, f, w) {
            return (
                (c = +c),
                (f = f | 0),
                w || K(this, c, f, 2, 32767, -32768),
                s.TYPED_ARRAY_SUPPORT
                    ? ((this[f] = c & 255), (this[f + 1] = c >>> 8))
                    : j(this, c, f, !0),
                f + 2
            )
        }),
        (s.prototype.writeInt16BE = function (c, f, w) {
            return (
                (c = +c),
                (f = f | 0),
                w || K(this, c, f, 2, 32767, -32768),
                s.TYPED_ARRAY_SUPPORT
                    ? ((this[f] = c >>> 8), (this[f + 1] = c & 255))
                    : j(this, c, f, !1),
                f + 2
            )
        }),
        (s.prototype.writeInt32LE = function (c, f, w) {
            return (
                (c = +c),
                (f = f | 0),
                w || K(this, c, f, 4, 2147483647, -2147483648),
                s.TYPED_ARRAY_SUPPORT
                    ? ((this[f] = c & 255),
                      (this[f + 1] = c >>> 8),
                      (this[f + 2] = c >>> 16),
                      (this[f + 3] = c >>> 24))
                    : le(this, c, f, !0),
                f + 4
            )
        }),
        (s.prototype.writeInt32BE = function (c, f, w) {
            return (
                (c = +c),
                (f = f | 0),
                w || K(this, c, f, 4, 2147483647, -2147483648),
                c < 0 && (c = 4294967295 + c + 1),
                s.TYPED_ARRAY_SUPPORT
                    ? ((this[f] = c >>> 24),
                      (this[f + 1] = c >>> 16),
                      (this[f + 2] = c >>> 8),
                      (this[f + 3] = c & 255))
                    : le(this, c, f, !1),
                f + 4
            )
        })
    function ke(y, c, f, w, I, B) {
        if (f + w > y.length) throw new RangeError('Index out of range')
        if (f < 0) throw new RangeError('Index out of range')
    }
    function qe(y, c, f, w, I) {
        return I || ke(y, c, f, 4), r.write(y, c, f, w, 23, 4), f + 4
    }
    ;(s.prototype.writeFloatLE = function (c, f, w) {
        return qe(this, c, f, !0, w)
    }),
        (s.prototype.writeFloatBE = function (c, f, w) {
            return qe(this, c, f, !1, w)
        })
    function ut(y, c, f, w, I) {
        return I || ke(y, c, f, 8), r.write(y, c, f, w, 52, 8), f + 8
    }
    ;(s.prototype.writeDoubleLE = function (c, f, w) {
        return ut(this, c, f, !0, w)
    }),
        (s.prototype.writeDoubleBE = function (c, f, w) {
            return ut(this, c, f, !1, w)
        }),
        (s.prototype.copy = function (c, f, w, I) {
            if (
                (w || (w = 0),
                !I && I !== 0 && (I = this.length),
                f >= c.length && (f = c.length),
                f || (f = 0),
                I > 0 && I < w && (I = w),
                I === w || c.length === 0 || this.length === 0)
            )
                return 0
            if (f < 0) throw new RangeError('targetStart out of bounds')
            if (w < 0 || w >= this.length)
                throw new RangeError('sourceStart out of bounds')
            if (I < 0) throw new RangeError('sourceEnd out of bounds')
            I > this.length && (I = this.length),
                c.length - f < I - w && (I = c.length - f + w)
            var B = I - w,
                U
            if (this === c && w < f && f < I)
                for (U = B - 1; U >= 0; --U) c[U + f] = this[U + w]
            else if (B < 1e3 || !s.TYPED_ARRAY_SUPPORT)
                for (U = 0; U < B; ++U) c[U + f] = this[U + w]
            else Uint8Array.prototype.set.call(c, this.subarray(w, w + B), f)
            return B
        }),
        (s.prototype.fill = function (c, f, w, I) {
            if (typeof c == 'string') {
                if (
                    (typeof f == 'string'
                        ? ((I = f), (f = 0), (w = this.length))
                        : typeof w == 'string' && ((I = w), (w = this.length)),
                    c.length === 1)
                ) {
                    var B = c.charCodeAt(0)
                    B < 256 && (c = B)
                }
                if (I !== void 0 && typeof I != 'string')
                    throw new TypeError('encoding must be a string')
                if (typeof I == 'string' && !s.isEncoding(I))
                    throw new TypeError('Unknown encoding: ' + I)
            } else typeof c == 'number' && (c = c & 255)
            if (f < 0 || this.length < f || this.length < w)
                throw new RangeError('Out of range index')
            if (w <= f) return this
            ;(f = f >>> 0),
                (w = w === void 0 ? this.length : w >>> 0),
                c || (c = 0)
            var U
            if (typeof c == 'number') for (U = f; U < w; ++U) this[U] = c
            else {
                var Z = s.isBuffer(c) ? c : jr(new s(c, I).toString()),
                    de = Z.length
                for (U = 0; U < w - f; ++U) this[U + f] = Z[U % de]
            }
            return this
        })
    var ct = /[^+\/0-9A-Za-z-_]/g
    function Ft(y) {
        if (((y = pi(y).replace(ct, '')), y.length < 2)) return ''
        for (; y.length % 4 != 0; ) y = y + '='
        return y
    }
    function pi(y) {
        return y.trim ? y.trim() : y.replace(/^\s+|\s+$/g, '')
    }
    function Oo(y) {
        return y < 16 ? '0' + y.toString(16) : y.toString(16)
    }
    function jr(y, c) {
        c = c || 1 / 0
        for (var f, w = y.length, I = null, B = [], U = 0; U < w; ++U) {
            if (((f = y.charCodeAt(U)), f > 55295 && f < 57344)) {
                if (!I) {
                    if (f > 56319) {
                        ;(c -= 3) > -1 && B.push(239, 191, 189)
                        continue
                    } else if (U + 1 === w) {
                        ;(c -= 3) > -1 && B.push(239, 191, 189)
                        continue
                    }
                    I = f
                    continue
                }
                if (f < 56320) {
                    ;(c -= 3) > -1 && B.push(239, 191, 189), (I = f)
                    continue
                }
                f = (((I - 55296) << 10) | (f - 56320)) + 65536
            } else I && (c -= 3) > -1 && B.push(239, 191, 189)
            if (((I = null), f < 128)) {
                if ((c -= 1) < 0) break
                B.push(f)
            } else if (f < 2048) {
                if ((c -= 2) < 0) break
                B.push((f >> 6) | 192, (f & 63) | 128)
            } else if (f < 65536) {
                if ((c -= 3) < 0) break
                B.push((f >> 12) | 224, ((f >> 6) & 63) | 128, (f & 63) | 128)
            } else if (f < 1114112) {
                if ((c -= 4) < 0) break
                B.push(
                    (f >> 18) | 240,
                    ((f >> 12) & 63) | 128,
                    ((f >> 6) & 63) | 128,
                    (f & 63) | 128
                )
            } else throw new Error('Invalid code point')
        }
        return B
    }
    function qs(y) {
        for (var c = [], f = 0; f < y.length; ++f) c.push(y.charCodeAt(f) & 255)
        return c
    }
    function Gs(y, c) {
        for (var f, w, I, B = [], U = 0; U < y.length && !((c -= 2) < 0); ++U)
            (f = y.charCodeAt(U)),
                (w = f >> 8),
                (I = f % 256),
                B.push(I),
                B.push(w)
        return B
    }
    function $o(y) {
        return t.toByteArray(Ft(y))
    }
    function yn(y, c, f, w) {
        for (var I = 0; I < w && !(I + f >= c.length || I >= y.length); ++I)
            c[I + f] = y[I]
        return I
    }
    function Ys(y) {
        return y !== y
    }
})(me)
var mn = { exports: {} }
;(function (e, t) {
    ;(function (r, n) {
        e.exports = n()
    })(Ze, function () {
        var r =
            r ||
            (function (n, i) {
                var o
                if (
                    (typeof window != 'undefined' &&
                        window.crypto &&
                        (o = window.crypto),
                    typeof self != 'undefined' &&
                        self.crypto &&
                        (o = self.crypto),
                    typeof globalThis != 'undefined' &&
                        globalThis.crypto &&
                        (o = globalThis.crypto),
                    !o &&
                        typeof window != 'undefined' &&
                        window.msCrypto &&
                        (o = window.msCrypto),
                    !o &&
                        typeof Ze != 'undefined' &&
                        Ze.crypto &&
                        (o = Ze.crypto),
                    !o && typeof Ig == 'function')
                )
                    try {
                        o = require('crypto')
                    } catch {}
                var a = function () {
                        if (o) {
                            if (typeof o.getRandomValues == 'function')
                                try {
                                    return o.getRandomValues(
                                        new Uint32Array(1)
                                    )[0]
                                } catch {}
                            if (typeof o.randomBytes == 'function')
                                try {
                                    return o.randomBytes(4).readInt32LE()
                                } catch {}
                        }
                        throw new Error(
                            'Native crypto module could not be used to get secure random number.'
                        )
                    },
                    s =
                        Object.create ||
                        (function () {
                            function h() {}
                            return function (C) {
                                var E
                                return (
                                    (h.prototype = C),
                                    (E = new h()),
                                    (h.prototype = null),
                                    E
                                )
                            }
                        })(),
                    l = {},
                    u = (l.lib = {}),
                    d = (u.Base = (function () {
                        return {
                            extend: function (h) {
                                var C = s(this)
                                return (
                                    h && C.mixIn(h),
                                    (!C.hasOwnProperty('init') ||
                                        this.init === C.init) &&
                                        (C.init = function () {
                                            C.$super.init.apply(this, arguments)
                                        }),
                                    (C.init.prototype = C),
                                    (C.$super = this),
                                    C
                                )
                            },
                            create: function () {
                                var h = this.extend()
                                return h.init.apply(h, arguments), h
                            },
                            init: function () {},
                            mixIn: function (h) {
                                for (var C in h)
                                    h.hasOwnProperty(C) && (this[C] = h[C])
                                h.hasOwnProperty('toString') &&
                                    (this.toString = h.toString)
                            },
                            clone: function () {
                                return this.init.prototype.extend(this)
                            },
                        }
                    })()),
                    m = (u.WordArray = d.extend({
                        init: function (h, C) {
                            ;(h = this.words = h || []),
                                C != i
                                    ? (this.sigBytes = C)
                                    : (this.sigBytes = h.length * 4)
                        },
                        toString: function (h) {
                            return (h || x).stringify(this)
                        },
                        concat: function (h) {
                            var C = this.words,
                                E = h.words,
                                D = this.sigBytes,
                                P = h.sigBytes
                            if ((this.clamp(), D % 4))
                                for (var F = 0; F < P; F++) {
                                    var O =
                                        (E[F >>> 2] >>> (24 - (F % 4) * 8)) &
                                        255
                                    C[(D + F) >>> 2] |=
                                        O << (24 - ((D + F) % 4) * 8)
                                }
                            else
                                for (var M = 0; M < P; M += 4)
                                    C[(D + M) >>> 2] = E[M >>> 2]
                            return (this.sigBytes += P), this
                        },
                        clamp: function () {
                            var h = this.words,
                                C = this.sigBytes
                            ;(h[C >>> 2] &= 4294967295 << (32 - (C % 4) * 8)),
                                (h.length = n.ceil(C / 4))
                        },
                        clone: function () {
                            var h = d.clone.call(this)
                            return (h.words = this.words.slice(0)), h
                        },
                        random: function (h) {
                            for (var C = [], E = 0; E < h; E += 4) C.push(a())
                            return new m.init(C, h)
                        },
                    })),
                    p = (l.enc = {}),
                    x = (p.Hex = {
                        stringify: function (h) {
                            for (
                                var C = h.words, E = h.sigBytes, D = [], P = 0;
                                P < E;
                                P++
                            ) {
                                var F =
                                    (C[P >>> 2] >>> (24 - (P % 4) * 8)) & 255
                                D.push((F >>> 4).toString(16)),
                                    D.push((F & 15).toString(16))
                            }
                            return D.join('')
                        },
                        parse: function (h) {
                            for (var C = h.length, E = [], D = 0; D < C; D += 2)
                                E[D >>> 3] |=
                                    parseInt(h.substr(D, 2), 16) <<
                                    (24 - (D % 8) * 4)
                            return new m.init(E, C / 2)
                        },
                    }),
                    _ = (p.Latin1 = {
                        stringify: function (h) {
                            for (
                                var C = h.words, E = h.sigBytes, D = [], P = 0;
                                P < E;
                                P++
                            ) {
                                var F =
                                    (C[P >>> 2] >>> (24 - (P % 4) * 8)) & 255
                                D.push(String.fromCharCode(F))
                            }
                            return D.join('')
                        },
                        parse: function (h) {
                            for (var C = h.length, E = [], D = 0; D < C; D++)
                                E[D >>> 2] |=
                                    (h.charCodeAt(D) & 255) <<
                                    (24 - (D % 4) * 8)
                            return new m.init(E, C)
                        },
                    }),
                    b = (p.Utf8 = {
                        stringify: function (h) {
                            try {
                                return decodeURIComponent(
                                    escape(_.stringify(h))
                                )
                            } catch {
                                throw new Error('Malformed UTF-8 data')
                            }
                        },
                        parse: function (h) {
                            return _.parse(unescape(encodeURIComponent(h)))
                        },
                    }),
                    g = (u.BufferedBlockAlgorithm = d.extend({
                        reset: function () {
                            ;(this._data = new m.init()), (this._nDataBytes = 0)
                        },
                        _append: function (h) {
                            typeof h == 'string' && (h = b.parse(h)),
                                this._data.concat(h),
                                (this._nDataBytes += h.sigBytes)
                        },
                        _process: function (h) {
                            var C,
                                E = this._data,
                                D = E.words,
                                P = E.sigBytes,
                                F = this.blockSize,
                                O = F * 4,
                                M = P / O
                            h
                                ? (M = n.ceil(M))
                                : (M = n.max((M | 0) - this._minBufferSize, 0))
                            var L = M * F,
                                q = n.min(L * 4, P)
                            if (L) {
                                for (var J = 0; J < L; J += F)
                                    this._doProcessBlock(D, J)
                                ;(C = D.splice(0, L)), (E.sigBytes -= q)
                            }
                            return new m.init(C, q)
                        },
                        clone: function () {
                            var h = d.clone.call(this)
                            return (h._data = this._data.clone()), h
                        },
                        _minBufferSize: 0,
                    }))
                u.Hasher = g.extend({
                    cfg: d.extend(),
                    init: function (h) {
                        ;(this.cfg = this.cfg.extend(h)), this.reset()
                    },
                    reset: function () {
                        g.reset.call(this), this._doReset()
                    },
                    update: function (h) {
                        return this._append(h), this._process(), this
                    },
                    finalize: function (h) {
                        h && this._append(h)
                        var C = this._doFinalize()
                        return C
                    },
                    blockSize: 512 / 32,
                    _createHelper: function (h) {
                        return function (C, E) {
                            return new h.init(E).finalize(C)
                        }
                    },
                    _createHmacHelper: function (h) {
                        return function (C, E) {
                            return new v.HMAC.init(h, E).finalize(C)
                        }
                    },
                })
                var v = (l.algo = {})
                return l
            })(Math)
        return r
    })
})(mn)
var $r = mn.exports,
    OA = { exports: {} }
;(function (e, t) {
    ;(function (r, n) {
        e.exports = n(mn.exports)
    })(Ze, function (r) {
        return (
            (function () {
                if (typeof ArrayBuffer == 'function') {
                    var n = r,
                        i = n.lib,
                        o = i.WordArray,
                        a = o.init,
                        s = (o.init = function (l) {
                            if (
                                (l instanceof ArrayBuffer &&
                                    (l = new Uint8Array(l)),
                                (l instanceof Int8Array ||
                                    (typeof Uint8ClampedArray != 'undefined' &&
                                        l instanceof Uint8ClampedArray) ||
                                    l instanceof Int16Array ||
                                    l instanceof Uint16Array ||
                                    l instanceof Int32Array ||
                                    l instanceof Uint32Array ||
                                    l instanceof Float32Array ||
                                    l instanceof Float64Array) &&
                                    (l = new Uint8Array(
                                        l.buffer,
                                        l.byteOffset,
                                        l.byteLength
                                    )),
                                l instanceof Uint8Array)
                            ) {
                                for (
                                    var u = l.byteLength, d = [], m = 0;
                                    m < u;
                                    m++
                                )
                                    d[m >>> 2] |= l[m] << (24 - (m % 4) * 8)
                                a.call(this, d, u)
                            } else a.apply(this, arguments)
                        })
                    s.prototype = o
                }
            })(),
            r.lib.WordArray
        )
    })
})(OA)
var Sf = { exports: {} }
;(function (e, t) {
    ;(function (r, n) {
        e.exports = n(mn.exports)
    })(Ze, function (r) {
        return (
            (function (n) {
                var i = r,
                    o = i.lib,
                    a = o.WordArray,
                    s = o.Hasher,
                    l = i.algo,
                    u = [],
                    d = []
                ;(function () {
                    function x(v) {
                        for (var h = n.sqrt(v), C = 2; C <= h; C++)
                            if (!(v % C)) return !1
                        return !0
                    }
                    function _(v) {
                        return ((v - (v | 0)) * 4294967296) | 0
                    }
                    for (var b = 2, g = 0; g < 64; )
                        x(b) &&
                            (g < 8 && (u[g] = _(n.pow(b, 1 / 2))),
                            (d[g] = _(n.pow(b, 1 / 3))),
                            g++),
                            b++
                })()
                var m = [],
                    p = (l.SHA256 = s.extend({
                        _doReset: function () {
                            this._hash = new a.init(u.slice(0))
                        },
                        _doProcessBlock: function (x, _) {
                            for (
                                var b = this._hash.words,
                                    g = b[0],
                                    v = b[1],
                                    h = b[2],
                                    C = b[3],
                                    E = b[4],
                                    D = b[5],
                                    P = b[6],
                                    F = b[7],
                                    O = 0;
                                O < 64;
                                O++
                            ) {
                                if (O < 16) m[O] = x[_ + O] | 0
                                else {
                                    var M = m[O - 15],
                                        L =
                                            ((M << 25) | (M >>> 7)) ^
                                            ((M << 14) | (M >>> 18)) ^
                                            (M >>> 3),
                                        q = m[O - 2],
                                        J =
                                            ((q << 15) | (q >>> 17)) ^
                                            ((q << 13) | (q >>> 19)) ^
                                            (q >>> 10)
                                    m[O] = L + m[O - 7] + J + m[O - 16]
                                }
                                var oe = (E & D) ^ (~E & P),
                                    Ue = (g & v) ^ (g & h) ^ (v & h),
                                    Ke =
                                        ((g << 30) | (g >>> 2)) ^
                                        ((g << 19) | (g >>> 13)) ^
                                        ((g << 10) | (g >>> 22)),
                                    Pt =
                                        ((E << 26) | (E >>> 6)) ^
                                        ((E << 21) | (E >>> 11)) ^
                                        ((E << 7) | (E >>> 25)),
                                    Lt = F + Pt + oe + d[O] + m[O],
                                    tr = Ke + Ue
                                ;(F = P),
                                    (P = D),
                                    (D = E),
                                    (E = (C + Lt) | 0),
                                    (C = h),
                                    (h = v),
                                    (v = g),
                                    (g = (Lt + tr) | 0)
                            }
                            ;(b[0] = (b[0] + g) | 0),
                                (b[1] = (b[1] + v) | 0),
                                (b[2] = (b[2] + h) | 0),
                                (b[3] = (b[3] + C) | 0),
                                (b[4] = (b[4] + E) | 0),
                                (b[5] = (b[5] + D) | 0),
                                (b[6] = (b[6] + P) | 0),
                                (b[7] = (b[7] + F) | 0)
                        },
                        _doFinalize: function () {
                            var x = this._data,
                                _ = x.words,
                                b = this._nDataBytes * 8,
                                g = x.sigBytes * 8
                            return (
                                (_[g >>> 5] |= 128 << (24 - (g % 32))),
                                (_[(((g + 64) >>> 9) << 4) + 14] = n.floor(
                                    b / 4294967296
                                )),
                                (_[(((g + 64) >>> 9) << 4) + 15] = b),
                                (x.sigBytes = _.length * 4),
                                this._process(),
                                this._hash
                            )
                        },
                        clone: function () {
                            var x = s.clone.call(this)
                            return (x._hash = this._hash.clone()), x
                        },
                    }))
                ;(i.SHA256 = s._createHelper(p)),
                    (i.HmacSHA256 = s._createHmacHelper(p))
            })(Math),
            r.SHA256
        )
    })
})(Sf)
var $A = Sf.exports,
    ov = { exports: {} },
    av = { exports: {} }
;(function (e, t) {
    ;(function (r, n) {
        e.exports = n(mn.exports)
    })(Ze, function (r) {
        ;(function () {
            var n = r,
                i = n.lib,
                o = i.Base,
                a = n.enc,
                s = a.Utf8,
                l = n.algo
            l.HMAC = o.extend({
                init: function (u, d) {
                    ;(u = this._hasher = new u.init()),
                        typeof d == 'string' && (d = s.parse(d))
                    var m = u.blockSize,
                        p = m * 4
                    d.sigBytes > p && (d = u.finalize(d)), d.clamp()
                    for (
                        var x = (this._oKey = d.clone()),
                            _ = (this._iKey = d.clone()),
                            b = x.words,
                            g = _.words,
                            v = 0;
                        v < m;
                        v++
                    )
                        (b[v] ^= 1549556828), (g[v] ^= 909522486)
                    ;(x.sigBytes = _.sigBytes = p), this.reset()
                },
                reset: function () {
                    var u = this._hasher
                    u.reset(), u.update(this._iKey)
                },
                update: function (u) {
                    return this._hasher.update(u), this
                },
                finalize: function (u) {
                    var d = this._hasher,
                        m = d.finalize(u)
                    d.reset()
                    var p = d.finalize(this._oKey.clone().concat(m))
                    return p
                },
            })
        })()
    })
})(av)
;(function (e, t) {
    ;(function (r, n, i) {
        e.exports = n(mn.exports, Sf.exports, av.exports)
    })(Ze, function (r) {
        return r.HmacSHA256
    })
})(ov)
var Ws = ov.exports,
    It
typeof window != 'undefined' && window.crypto && (It = window.crypto)
!It && typeof window != 'undefined' && window.msCrypto && (It = window.msCrypto)
!It && typeof global != 'undefined' && global.crypto && (It = global.crypto)
if (!It && typeof require == 'function')
    try {
        It = require('crypto')
    } catch {}
function zA() {
    if (It) {
        if (typeof It.getRandomValues == 'function')
            try {
                return It.getRandomValues(new Uint32Array(1))[0]
            } catch {}
        if (typeof It.randomBytes == 'function')
            try {
                return It.randomBytes(4).readInt32LE()
            } catch {}
    }
    throw new Error(
        'Native crypto module could not be used to get secure random number.'
    )
}
function LA(e) {
    for (var t = e.words, r = e.sigBytes, n = [], i = 0; i < r; i++) {
        var o = (t[i >>> 2] >>> (24 - (i % 4) * 8)) & 255
        n.push((o >>> 4).toString(16)), n.push((o & 15).toString(16))
    }
    return n.join('')
}
var jA = (function () {
    function e(r, n) {
        ;(r = this.words = r || []),
            n != null ? (this.sigBytes = n) : (this.sigBytes = r.length * 4)
    }
    var t = e.prototype
    return (
        (t.random = function (n) {
            for (var i = [], o = 0; o < n; o += 4) i.push(zA())
            return new e(i, n)
        }),
        (t.toString = function () {
            return LA(this)
        }),
        e
    )
})()
function V(e, t) {
    e != null && this.fromString(e, t)
}
function rt() {
    return new V(null)
}
var zr,
    WA = 244837814094590,
    sv = (WA & 16777215) == 15715070
function HA(e, t, r, n, i, o) {
    for (; --o >= 0; ) {
        var a = t * this[e++] + r[n] + i
        ;(i = Math.floor(a / 67108864)), (r[n++] = a & 67108863)
    }
    return i
}
function VA(e, t, r, n, i, o) {
    for (var a = t & 32767, s = t >> 15; --o >= 0; ) {
        var l = this[e] & 32767,
            u = this[e++] >> 15,
            d = s * l + u * a
        ;(l = a * l + ((d & 32767) << 15) + r[n] + (i & 1073741823)),
            (i = (l >>> 30) + (d >>> 15) + s * u + (i >>> 30)),
            (r[n++] = l & 1073741823)
    }
    return i
}
function KA(e, t, r, n, i, o) {
    for (var a = t & 16383, s = t >> 14; --o >= 0; ) {
        var l = this[e] & 16383,
            u = this[e++] >> 14,
            d = s * l + u * a
        ;(l = a * l + ((d & 16383) << 14) + r[n] + i),
            (i = (l >> 28) + (d >> 14) + s * u),
            (r[n++] = l & 268435455)
    }
    return i
}
var lv = typeof navigator != 'undefined'
lv && sv && navigator.appName == 'Microsoft Internet Explorer'
    ? ((V.prototype.am = VA), (zr = 30))
    : lv && sv && navigator.appName != 'Netscape'
    ? ((V.prototype.am = HA), (zr = 26))
    : ((V.prototype.am = KA), (zr = 28))
V.prototype.DB = zr
V.prototype.DM = (1 << zr) - 1
V.prototype.DV = 1 << zr
var xf = 52
V.prototype.FV = Math.pow(2, xf)
V.prototype.F1 = xf - zr
V.prototype.F2 = 2 * zr - xf
var qA = '0123456789abcdefghijklmnopqrstuvwxyz',
    Hs = new Array(),
    ui,
    Rt
ui = '0'.charCodeAt(0)
for (Rt = 0; Rt <= 9; ++Rt) Hs[ui++] = Rt
ui = 'a'.charCodeAt(0)
for (Rt = 10; Rt < 36; ++Rt) Hs[ui++] = Rt
ui = 'A'.charCodeAt(0)
for (Rt = 10; Rt < 36; ++Rt) Hs[ui++] = Rt
function uv(e) {
    return qA.charAt(e)
}
function GA(e, t) {
    var r = Hs[e.charCodeAt(t)]
    return r == null ? -1 : r
}
function YA(e) {
    for (var t = this.t - 1; t >= 0; --t) e[t] = this[t]
    ;(e.t = this.t), (e.s = this.s)
}
function XA(e) {
    ;(this.t = 1),
        (this.s = e < 0 ? -1 : 0),
        e > 0 ? (this[0] = e) : e < -1 ? (this[0] = e + this.DV) : (this.t = 0)
}
function wf(e) {
    var t = rt()
    return t.fromInt(e), t
}
function QA(e, t) {
    var r
    if (t == 16) r = 4
    else if (t == 8) r = 3
    else if (t == 2) r = 1
    else if (t == 32) r = 5
    else if (t == 4) r = 2
    else throw new Error('Only radix 2, 4, 8, 16, 32 are supported')
    ;(this.t = 0), (this.s = 0)
    for (var n = e.length, i = !1, o = 0; --n >= 0; ) {
        var a = GA(e, n)
        if (a < 0) {
            e.charAt(n) == '-' && (i = !0)
            continue
        }
        ;(i = !1),
            o == 0
                ? (this[this.t++] = a)
                : o + r > this.DB
                ? ((this[this.t - 1] |= (a & ((1 << (this.DB - o)) - 1)) << o),
                  (this[this.t++] = a >> (this.DB - o)))
                : (this[this.t - 1] |= a << o),
            (o += r),
            o >= this.DB && (o -= this.DB)
    }
    this.clamp(), i && V.ZERO.subTo(this, this)
}
function JA() {
    for (var e = this.s & this.DM; this.t > 0 && this[this.t - 1] == e; )
        --this.t
}
function ZA(e) {
    if (this.s < 0) return '-' + this.negate().toString(e)
    var t
    if (e == 16) t = 4
    else if (e == 8) t = 3
    else if (e == 2) t = 1
    else if (e == 32) t = 5
    else if (e == 4) t = 2
    else throw new Error('Only radix 2, 4, 8, 16, 32 are supported')
    var r = (1 << t) - 1,
        n,
        i = !1,
        o = '',
        a = this.t,
        s = this.DB - ((a * this.DB) % t)
    if (a-- > 0)
        for (
            s < this.DB && (n = this[a] >> s) > 0 && ((i = !0), (o = uv(n)));
            a >= 0;

        )
            s < t
                ? ((n = (this[a] & ((1 << s) - 1)) << (t - s)),
                  (n |= this[--a] >> (s += this.DB - t)))
                : ((n = (this[a] >> (s -= t)) & r),
                  s <= 0 && ((s += this.DB), --a)),
                n > 0 && (i = !0),
                i && (o += uv(n))
    return i ? o : '0'
}
function e5() {
    var e = rt()
    return V.ZERO.subTo(this, e), e
}
function t5() {
    return this.s < 0 ? this.negate() : this
}
function r5(e) {
    var t = this.s - e.s
    if (t != 0) return t
    var r = this.t
    if (((t = r - e.t), t != 0)) return this.s < 0 ? -t : t
    for (; --r >= 0; ) if ((t = this[r] - e[r]) != 0) return t
    return 0
}
function bf(e) {
    var t = 1,
        r
    return (
        (r = e >>> 16) != 0 && ((e = r), (t += 16)),
        (r = e >> 8) != 0 && ((e = r), (t += 8)),
        (r = e >> 4) != 0 && ((e = r), (t += 4)),
        (r = e >> 2) != 0 && ((e = r), (t += 2)),
        (r = e >> 1) != 0 && ((e = r), (t += 1)),
        t
    )
}
function n5() {
    return this.t <= 0
        ? 0
        : this.DB * (this.t - 1) + bf(this[this.t - 1] ^ (this.s & this.DM))
}
function i5(e, t) {
    var r
    for (r = this.t - 1; r >= 0; --r) t[r + e] = this[r]
    for (r = e - 1; r >= 0; --r) t[r] = 0
    ;(t.t = this.t + e), (t.s = this.s)
}
function o5(e, t) {
    for (var r = e; r < this.t; ++r) t[r - e] = this[r]
    ;(t.t = Math.max(this.t - e, 0)), (t.s = this.s)
}
function a5(e, t) {
    var r = e % this.DB,
        n = this.DB - r,
        i = (1 << n) - 1,
        o = Math.floor(e / this.DB),
        a = (this.s << r) & this.DM,
        s
    for (s = this.t - 1; s >= 0; --s)
        (t[s + o + 1] = (this[s] >> n) | a), (a = (this[s] & i) << r)
    for (s = o - 1; s >= 0; --s) t[s] = 0
    ;(t[o] = a), (t.t = this.t + o + 1), (t.s = this.s), t.clamp()
}
function s5(e, t) {
    t.s = this.s
    var r = Math.floor(e / this.DB)
    if (r >= this.t) {
        t.t = 0
        return
    }
    var n = e % this.DB,
        i = this.DB - n,
        o = (1 << n) - 1
    t[0] = this[r] >> n
    for (var a = r + 1; a < this.t; ++a)
        (t[a - r - 1] |= (this[a] & o) << i), (t[a - r] = this[a] >> n)
    n > 0 && (t[this.t - r - 1] |= (this.s & o) << i),
        (t.t = this.t - r),
        t.clamp()
}
function l5(e, t) {
    for (var r = 0, n = 0, i = Math.min(e.t, this.t); r < i; )
        (n += this[r] - e[r]), (t[r++] = n & this.DM), (n >>= this.DB)
    if (e.t < this.t) {
        for (n -= e.s; r < this.t; )
            (n += this[r]), (t[r++] = n & this.DM), (n >>= this.DB)
        n += this.s
    } else {
        for (n += this.s; r < e.t; )
            (n -= e[r]), (t[r++] = n & this.DM), (n >>= this.DB)
        n -= e.s
    }
    ;(t.s = n < 0 ? -1 : 0),
        n < -1 ? (t[r++] = this.DV + n) : n > 0 && (t[r++] = n),
        (t.t = r),
        t.clamp()
}
function u5(e, t) {
    var r = this.abs(),
        n = e.abs(),
        i = r.t
    for (t.t = i + n.t; --i >= 0; ) t[i] = 0
    for (i = 0; i < n.t; ++i) t[i + r.t] = r.am(0, n[i], t, i, 0, r.t)
    ;(t.s = 0), t.clamp(), this.s != e.s && V.ZERO.subTo(t, t)
}
function c5(e) {
    for (var t = this.abs(), r = (e.t = 2 * t.t); --r >= 0; ) e[r] = 0
    for (r = 0; r < t.t - 1; ++r) {
        var n = t.am(r, t[r], e, 2 * r, 0, 1)
        ;(e[r + t.t] += t.am(r + 1, 2 * t[r], e, 2 * r + 1, n, t.t - r - 1)) >=
            t.DV && ((e[r + t.t] -= t.DV), (e[r + t.t + 1] = 1))
    }
    e.t > 0 && (e[e.t - 1] += t.am(r, t[r], e, 2 * r, 0, 1)),
        (e.s = 0),
        e.clamp()
}
function f5(e, t, r) {
    var n = e.abs()
    if (!(n.t <= 0)) {
        var i = this.abs()
        if (i.t < n.t) {
            t != null && t.fromInt(0), r != null && this.copyTo(r)
            return
        }
        r == null && (r = rt())
        var o = rt(),
            a = this.s,
            s = e.s,
            l = this.DB - bf(n[n.t - 1])
        l > 0
            ? (n.lShiftTo(l, o), i.lShiftTo(l, r))
            : (n.copyTo(o), i.copyTo(r))
        var u = o.t,
            d = o[u - 1]
        if (d != 0) {
            var m = d * (1 << this.F1) + (u > 1 ? o[u - 2] >> this.F2 : 0),
                p = this.FV / m,
                x = (1 << this.F1) / m,
                _ = 1 << this.F2,
                b = r.t,
                g = b - u,
                v = t == null ? rt() : t
            for (
                o.dlShiftTo(g, v),
                    r.compareTo(v) >= 0 && ((r[r.t++] = 1), r.subTo(v, r)),
                    V.ONE.dlShiftTo(u, v),
                    v.subTo(o, o);
                o.t < u;

            )
                o[o.t++] = 0
            for (; --g >= 0; ) {
                var h =
                    r[--b] == d
                        ? this.DM
                        : Math.floor(r[b] * p + (r[b - 1] + _) * x)
                if ((r[b] += o.am(0, h, r, g, 0, u)) < h)
                    for (o.dlShiftTo(g, v), r.subTo(v, r); r[b] < --h; )
                        r.subTo(v, r)
            }
            t != null && (r.drShiftTo(u, t), a != s && V.ZERO.subTo(t, t)),
                (r.t = u),
                r.clamp(),
                l > 0 && r.rShiftTo(l, r),
                a < 0 && V.ZERO.subTo(r, r)
        }
    }
}
function d5(e) {
    var t = rt()
    return (
        this.abs().divRemTo(e, null, t),
        this.s < 0 && t.compareTo(V.ZERO) > 0 && e.subTo(t, t),
        t
    )
}
function h5() {
    if (this.t < 1) return 0
    var e = this[0]
    if ((e & 1) == 0) return 0
    var t = e & 3
    return (
        (t = (t * (2 - (e & 15) * t)) & 15),
        (t = (t * (2 - (e & 255) * t)) & 255),
        (t = (t * (2 - (((e & 65535) * t) & 65535))) & 65535),
        (t = (t * (2 - ((e * t) % this.DV))) % this.DV),
        t > 0 ? this.DV - t : -t
    )
}
function p5(e) {
    return this.compareTo(e) == 0
}
function m5(e, t) {
    for (var r = 0, n = 0, i = Math.min(e.t, this.t); r < i; )
        (n += this[r] + e[r]), (t[r++] = n & this.DM), (n >>= this.DB)
    if (e.t < this.t) {
        for (n += e.s; r < this.t; )
            (n += this[r]), (t[r++] = n & this.DM), (n >>= this.DB)
        n += this.s
    } else {
        for (n += this.s; r < e.t; )
            (n += e[r]), (t[r++] = n & this.DM), (n >>= this.DB)
        n += e.s
    }
    ;(t.s = n < 0 ? -1 : 0),
        n > 0 ? (t[r++] = n) : n < -1 && (t[r++] = this.DV + n),
        (t.t = r),
        t.clamp()
}
function v5(e) {
    var t = rt()
    return this.addTo(e, t), t
}
function g5(e) {
    var t = rt()
    return this.subTo(e, t), t
}
function y5(e) {
    var t = rt()
    return this.multiplyTo(e, t), t
}
function S5(e) {
    var t = rt()
    return this.divRemTo(e, t, null), t
}
function ci(e) {
    ;(this.m = e),
        (this.mp = e.invDigit()),
        (this.mpl = this.mp & 32767),
        (this.mph = this.mp >> 15),
        (this.um = (1 << (e.DB - 15)) - 1),
        (this.mt2 = 2 * e.t)
}
function x5(e) {
    var t = rt()
    return (
        e.abs().dlShiftTo(this.m.t, t),
        t.divRemTo(this.m, null, t),
        e.s < 0 && t.compareTo(V.ZERO) > 0 && this.m.subTo(t, t),
        t
    )
}
function w5(e) {
    var t = rt()
    return e.copyTo(t), this.reduce(t), t
}
function b5(e) {
    for (; e.t <= this.mt2; ) e[e.t++] = 0
    for (var t = 0; t < this.m.t; ++t) {
        var r = e[t] & 32767,
            n =
                (r * this.mpl +
                    (((r * this.mph + (e[t] >> 15) * this.mpl) & this.um) <<
                        15)) &
                e.DM
        for (
            r = t + this.m.t, e[r] += this.m.am(0, n, e, t, 0, this.m.t);
            e[r] >= e.DV;

        )
            (e[r] -= e.DV), e[++r]++
    }
    e.clamp(),
        e.drShiftTo(this.m.t, e),
        e.compareTo(this.m) >= 0 && e.subTo(this.m, e)
}
function C5(e, t) {
    e.squareTo(t), this.reduce(t)
}
function _5(e, t, r) {
    e.multiplyTo(t, r), this.reduce(r)
}
ci.prototype.convert = x5
ci.prototype.revert = w5
ci.prototype.reduce = b5
ci.prototype.mulTo = _5
ci.prototype.sqrTo = C5
function E5(e, t, r) {
    var n = e.bitLength(),
        i,
        o = wf(1),
        a = new ci(t)
    if (n <= 0) return o
    n < 18
        ? (i = 1)
        : n < 48
        ? (i = 3)
        : n < 144
        ? (i = 4)
        : n < 768
        ? (i = 5)
        : (i = 6)
    var s = new Array(),
        l = 3,
        u = i - 1,
        d = (1 << i) - 1
    if (((s[1] = a.convert(this)), i > 1)) {
        var m = rt()
        for (a.sqrTo(s[1], m); l <= d; )
            (s[l] = rt()), a.mulTo(m, s[l - 2], s[l]), (l += 2)
    }
    var p = e.t - 1,
        x,
        _ = !0,
        b = rt(),
        g
    for (n = bf(e[p]) - 1; p >= 0; ) {
        for (
            n >= u
                ? (x = (e[p] >> (n - u)) & d)
                : ((x = (e[p] & ((1 << (n + 1)) - 1)) << (u - n)),
                  p > 0 && (x |= e[p - 1] >> (this.DB + n - u))),
                l = i;
            (x & 1) == 0;

        )
            (x >>= 1), --l
        if (((n -= l) < 0 && ((n += this.DB), --p), _)) s[x].copyTo(o), (_ = !1)
        else {
            for (; l > 1; ) a.sqrTo(o, b), a.sqrTo(b, o), (l -= 2)
            l > 0 ? a.sqrTo(o, b) : ((g = o), (o = b), (b = g)),
                a.mulTo(b, s[x], o)
        }
        for (; p >= 0 && (e[p] & (1 << n)) == 0; )
            a.sqrTo(o, b),
                (g = o),
                (o = b),
                (b = g),
                --n < 0 && ((n = this.DB - 1), --p)
    }
    var v = a.revert(o)
    return r(null, v), v
}
V.prototype.copyTo = YA
V.prototype.fromInt = XA
V.prototype.fromString = QA
V.prototype.clamp = JA
V.prototype.dlShiftTo = i5
V.prototype.drShiftTo = o5
V.prototype.lShiftTo = a5
V.prototype.rShiftTo = s5
V.prototype.subTo = l5
V.prototype.multiplyTo = u5
V.prototype.squareTo = c5
V.prototype.divRemTo = f5
V.prototype.invDigit = h5
V.prototype.addTo = m5
V.prototype.toString = ZA
V.prototype.negate = e5
V.prototype.abs = t5
V.prototype.compareTo = r5
V.prototype.bitLength = n5
V.prototype.mod = d5
V.prototype.equals = p5
V.prototype.add = v5
V.prototype.subtract = g5
V.prototype.multiply = y5
V.prototype.divide = S5
V.prototype.modPow = E5
V.ZERO = wf(0)
V.ONE = wf(1)
/*!
 * Copyright 2016 Amazon.com,
 * Inc. or its affiliates. All Rights Reserved.
 *
 * Licensed under the Amazon Software License (the "License").
 * You may not use this file except in compliance with the
 * License. A copy of the License is located at
 *
 *     http://aws.amazon.com/asl/
 *
 * or in the "license" file accompanying this file. This file is
 * distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR
 * CONDITIONS OF ANY KIND, express or implied. See the License
 * for the specific language governing permissions and
 * limitations under the License.
 */ function Cf(e) {
    return me.Buffer.from(new jA().random(e).toString(), 'hex')
}
var k5 = /^[89a-f]/i,
    T5 =
        'FFFFFFFFFFFFFFFFC90FDAA22168C234C4C6628B80DC1CD129024E088A67CC74020BBEA63B139B22514A08798E3404DDEF9519B3CD3A431B302B0A6DF25F14374FE1356D6D51C245E485B576625E7EC6F44C42E9A637ED6B0BFF5CB6F406B7EDEE386BFB5A899FA5AE9F24117C4B1FE649286651ECE45B3DC2007CB8A163BF0598DA48361C55D39A69163FA8FD24CF5F83655D23DCA3AD961C62F356208552BB9ED529077096966D670C354E4ABC9804F1746C08CA18217C32905E462E36CE3BE39E772C180E86039B2783A2EC07A28FB5C55DF06F4C52C9DE2BCBF6955817183995497CEA956AE515D2261898FA051015728E5A8AAAC42DAD33170D04507A33A85521ABDF1CBA64ECFB850458DBEF0A8AEA71575D060C7DB3970F85A6E1E4C7ABF5AE8CDB0933D71E8C94E04A25619DCEE3D2261AD2EE6BF12FFA06D98A0864D87602733EC86A64521F2B18177B200CBBE117577A615D6C770988C0BAD946E208E24FA074E5AB3143DB5BFCE0FD108E4B82D120A93AD2CAFFFFFFFFFFFFFFFF',
    A5 = 'userAttributes.',
    fi = (function () {
        function e(r) {
            ;(this.N = new V(T5, 16)),
                (this.g = new V('2', 16)),
                (this.k = new V(
                    this.hexHash(
                        '' + this.padHex(this.N) + this.padHex(this.g)
                    ),
                    16
                )),
                (this.smallAValue = this.generateRandomSmallA()),
                this.getLargeAValue(function () {}),
                (this.infoBits = me.Buffer.from('Caldera Derived Key', 'utf8')),
                (this.poolName = r)
        }
        var t = e.prototype
        return (
            (t.getSmallAValue = function () {
                return this.smallAValue
            }),
            (t.getLargeAValue = function (n) {
                var i = this
                this.largeAValue
                    ? n(null, this.largeAValue)
                    : this.calculateA(this.smallAValue, function (o, a) {
                          o && n(o, null),
                              (i.largeAValue = a),
                              n(null, i.largeAValue)
                      })
            }),
            (t.generateRandomSmallA = function () {
                var n = Cf(128).toString('hex'),
                    i = new V(n, 16)
                return i
            }),
            (t.generateRandomString = function () {
                return Cf(40).toString('base64')
            }),
            (t.getRandomPassword = function () {
                return this.randomPassword
            }),
            (t.getSaltDevices = function () {
                return this.SaltToHashDevices
            }),
            (t.getVerifierDevices = function () {
                return this.verifierDevices
            }),
            (t.generateHashDevice = function (n, i, o) {
                var a = this
                this.randomPassword = this.generateRandomString()
                var s = '' + n + i + ':' + this.randomPassword,
                    l = this.hash(s),
                    u = Cf(16).toString('hex')
                ;(this.SaltToHashDevices = this.padHex(new V(u, 16))),
                    this.g.modPow(
                        new V(this.hexHash(this.SaltToHashDevices + l), 16),
                        this.N,
                        function (d, m) {
                            d && o(d, null),
                                (a.verifierDevices = a.padHex(m)),
                                o(null, null)
                        }
                    )
            }),
            (t.calculateA = function (n, i) {
                var o = this
                this.g.modPow(n, this.N, function (a, s) {
                    a && i(a, null),
                        s.mod(o.N).equals(V.ZERO) &&
                            i(
                                new Error(
                                    'Illegal paramater. A mod N cannot be 0.'
                                ),
                                null
                            ),
                        i(null, s)
                })
            }),
            (t.calculateU = function (n, i) {
                this.UHexHash = this.hexHash(this.padHex(n) + this.padHex(i))
                var o = new V(this.UHexHash, 16)
                return o
            }),
            (t.hash = function (n) {
                var i = n instanceof me.Buffer ? $r.lib.WordArray.create(n) : n,
                    o = $A(i).toString()
                return new Array(64 - o.length).join('0') + o
            }),
            (t.hexHash = function (n) {
                return this.hash(me.Buffer.from(n, 'hex'))
            }),
            (t.computehkdf = function (n, i) {
                var o = $r.lib.WordArray.create(
                        me.Buffer.concat([
                            this.infoBits,
                            me.Buffer.from(String.fromCharCode(1), 'utf8'),
                        ])
                    ),
                    a = n instanceof me.Buffer ? $r.lib.WordArray.create(n) : n,
                    s = i instanceof me.Buffer ? $r.lib.WordArray.create(i) : i,
                    l = Ws(a, s),
                    u = Ws(o, l)
                return me.Buffer.from(u.toString(), 'hex').slice(0, 16)
            }),
            (t.getPasswordAuthenticationKey = function (n, i, o, a, s) {
                var l = this
                if (o.mod(this.N).equals(V.ZERO))
                    throw new Error('B cannot be zero.')
                if (
                    ((this.UValue = this.calculateU(this.largeAValue, o)),
                    this.UValue.equals(V.ZERO))
                )
                    throw new Error('U cannot be zero.')
                var u = '' + this.poolName + n + ':' + i,
                    d = this.hash(u),
                    m = new V(this.hexHash(this.padHex(a) + d), 16)
                this.calculateS(m, o, function (p, x) {
                    p && s(p, null)
                    var _ = l.computehkdf(
                        me.Buffer.from(l.padHex(x), 'hex'),
                        me.Buffer.from(l.padHex(l.UValue), 'hex')
                    )
                    s(null, _)
                })
            }),
            (t.calculateS = function (n, i, o) {
                var a = this
                this.g.modPow(n, this.N, function (s, l) {
                    s && o(s, null)
                    var u = i.subtract(a.k.multiply(l))
                    u.modPow(
                        a.smallAValue.add(a.UValue.multiply(n)),
                        a.N,
                        function (d, m) {
                            d && o(d, null), o(null, m.mod(a.N))
                        }
                    )
                })
            }),
            (t.getNewPasswordRequiredChallengeUserAttributePrefix =
                function () {
                    return A5
                }),
            (t.padHex = function (n) {
                if (!(n instanceof V)) throw new Error('Not a BigInteger')
                var i = n.compareTo(V.ZERO) < 0,
                    o = n.abs().toString(16)
                if (
                    ((o = o.length % 2 != 0 ? '0' + o : o),
                    (o = k5.test(o) ? '00' + o : o),
                    i)
                ) {
                    var a = o
                            .split('')
                            .map(function (l) {
                                var u = ~parseInt(l, 16) & 15
                                return '0123456789ABCDEF'.charAt(u)
                            })
                            .join(''),
                        s = new V(a, 16).add(V.ONE)
                    ;(o = s.toString(16)),
                        o.toUpperCase().startsWith('FF8') &&
                            (o = o.substring(2))
                }
                return o
            }),
            e
        )
    })()
/*!
 * Copyright 2016 Amazon.com,
 * Inc. or its affiliates. All Rights Reserved.
 *
 * Licensed under the Amazon Software License (the "License").
 * You may not use this file except in compliance with the
 * License. A copy of the License is located at
 *
 *     http://aws.amazon.com/asl/
 *
 * or in the "license" file accompanying this file. This file is
 * distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR
 * CONDITIONS OF ANY KIND, express or implied. See the License
 * for the specific language governing permissions and
 * limitations under the License.
 */ var cv = (function () {
    function e(r) {
        ;(this.jwtToken = r || ''), (this.payload = this.decodePayload())
    }
    var t = e.prototype
    return (
        (t.getJwtToken = function () {
            return this.jwtToken
        }),
        (t.getExpiration = function () {
            return this.payload.exp
        }),
        (t.getIssuedAt = function () {
            return this.payload.iat
        }),
        (t.decodePayload = function () {
            var n = this.jwtToken.split('.')[1]
            try {
                return JSON.parse(me.Buffer.from(n, 'base64').toString('utf8'))
            } catch {
                return {}
            }
        }),
        e
    )
})()
function I5(e, t) {
    ;(e.prototype = Object.create(t.prototype)),
        (e.prototype.constructor = e),
        _f(e, t)
}
function _f(e, t) {
    return (
        (_f =
            Object.setPrototypeOf ||
            function (n, i) {
                return (n.__proto__ = i), n
            }),
        _f(e, t)
    )
}
var fv = (function (e) {
    I5(t, e)
    function t(r) {
        var n = r === void 0 ? {} : r,
            i = n.AccessToken
        return e.call(this, i || '') || this
    }
    return t
})(cv)
function R5(e, t) {
    ;(e.prototype = Object.create(t.prototype)),
        (e.prototype.constructor = e),
        Ef(e, t)
}
function Ef(e, t) {
    return (
        (Ef =
            Object.setPrototypeOf ||
            function (n, i) {
                return (n.__proto__ = i), n
            }),
        Ef(e, t)
    )
}
var dv = (function (e) {
    R5(t, e)
    function t(r) {
        var n = r === void 0 ? {} : r,
            i = n.IdToken
        return e.call(this, i || '') || this
    }
    return t
})(cv)
/*!
 * Copyright 2016 Amazon.com,
 * Inc. or its affiliates. All Rights Reserved.
 *
 * Licensed under the Amazon Software License (the "License").
 * You may not use this file except in compliance with the
 * License. A copy of the License is located at
 *
 *     http://aws.amazon.com/asl/
 *
 * or in the "license" file accompanying this file. This file is
 * distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR
 * CONDITIONS OF ANY KIND, express or implied. See the License
 * for the specific language governing permissions and
 * limitations under the License.
 */ var hv = (function () {
        function e(r) {
            var n = r === void 0 ? {} : r,
                i = n.RefreshToken
            this.token = i || ''
        }
        var t = e.prototype
        return (
            (t.getToken = function () {
                return this.token
            }),
            e
        )
    })(),
    pv = { exports: {} }
;(function (e, t) {
    ;(function (r, n) {
        e.exports = n(mn.exports)
    })(Ze, function (r) {
        return (
            (function () {
                var n = r,
                    i = n.lib,
                    o = i.WordArray,
                    a = n.enc
                a.Base64 = {
                    stringify: function (l) {
                        var u = l.words,
                            d = l.sigBytes,
                            m = this._map
                        l.clamp()
                        for (var p = [], x = 0; x < d; x += 3)
                            for (
                                var _ =
                                        (u[x >>> 2] >>> (24 - (x % 4) * 8)) &
                                        255,
                                    b =
                                        (u[(x + 1) >>> 2] >>>
                                            (24 - ((x + 1) % 4) * 8)) &
                                        255,
                                    g =
                                        (u[(x + 2) >>> 2] >>>
                                            (24 - ((x + 2) % 4) * 8)) &
                                        255,
                                    v = (_ << 16) | (b << 8) | g,
                                    h = 0;
                                h < 4 && x + h * 0.75 < d;
                                h++
                            )
                                p.push(m.charAt((v >>> (6 * (3 - h))) & 63))
                        var C = m.charAt(64)
                        if (C) for (; p.length % 4; ) p.push(C)
                        return p.join('')
                    },
                    parse: function (l) {
                        var u = l.length,
                            d = this._map,
                            m = this._reverseMap
                        if (!m) {
                            m = this._reverseMap = []
                            for (var p = 0; p < d.length; p++)
                                m[d.charCodeAt(p)] = p
                        }
                        var x = d.charAt(64)
                        if (x) {
                            var _ = l.indexOf(x)
                            _ !== -1 && (u = _)
                        }
                        return s(l, u, m)
                    },
                    _map: 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=',
                }
                function s(l, u, d) {
                    for (var m = [], p = 0, x = 0; x < u; x++)
                        if (x % 4) {
                            var _ = d[l.charCodeAt(x - 1)] << ((x % 4) * 2),
                                b = d[l.charCodeAt(x)] >>> (6 - (x % 4) * 2),
                                g = _ | b
                            ;(m[p >>> 2] |= g << (24 - (p % 4) * 8)), p++
                        }
                    return o.create(m, p)
                }
            })(),
            r.enc.Base64
        )
    })
})(pv)
var mv = pv.exports
/*!
 * Copyright 2016 Amazon.com,
 * Inc. or its affiliates. All Rights Reserved.
 *
 * Licensed under the Amazon Software License (the "License").
 * You may not use this file except in compliance with the
 * License. A copy of the License is located at
 *
 *     http://aws.amazon.com/asl/
 *
 * or in the "license" file accompanying this file. This file is
 * distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR
 * CONDITIONS OF ANY KIND, express or implied. See the License
 * for the specific language governing permissions and
 * limitations under the License.
 */ var vv = (function () {
    function e(r) {
        var n = r === void 0 ? {} : r,
            i = n.IdToken,
            o = n.RefreshToken,
            a = n.AccessToken,
            s = n.ClockDrift
        if (a == null || i == null)
            throw new Error('Id token and Access Token must be present.')
        ;(this.idToken = i),
            (this.refreshToken = o),
            (this.accessToken = a),
            (this.clockDrift = s === void 0 ? this.calculateClockDrift() : s)
    }
    var t = e.prototype
    return (
        (t.getIdToken = function () {
            return this.idToken
        }),
        (t.getRefreshToken = function () {
            return this.refreshToken
        }),
        (t.getAccessToken = function () {
            return this.accessToken
        }),
        (t.getClockDrift = function () {
            return this.clockDrift
        }),
        (t.calculateClockDrift = function () {
            var n = Math.floor(new Date() / 1e3),
                i = Math.min(
                    this.accessToken.getIssuedAt(),
                    this.idToken.getIssuedAt()
                )
            return n - i
        }),
        (t.isValid = function () {
            var n = Math.floor(new Date() / 1e3),
                i = n - this.clockDrift
            return (
                i < this.accessToken.getExpiration() &&
                i < this.idToken.getExpiration()
            )
        }),
        e
    )
})()
/*!
 * Copyright 2016 Amazon.com,
 * Inc. or its affiliates. All Rights Reserved.
 *
 * Licensed under the Amazon Software License (the "License").
 * You may not use this file except in compliance with the
 * License. A copy of the License is located at
 *
 *     http://aws.amazon.com/asl/
 *
 * or in the "license" file accompanying this file. This file is
 * distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR
 * CONDITIONS OF ANY KIND, express or implied. See the License
 * for the specific language governing permissions and
 * limitations under the License.
 */ var P5 = [
        'Jan',
        'Feb',
        'Mar',
        'Apr',
        'May',
        'Jun',
        'Jul',
        'Aug',
        'Sep',
        'Oct',
        'Nov',
        'Dec',
    ],
    F5 = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
    gv = (function () {
        function e() {}
        var t = e.prototype
        return (
            (t.getNowString = function () {
                var n = new Date(),
                    i = F5[n.getUTCDay()],
                    o = P5[n.getUTCMonth()],
                    a = n.getUTCDate(),
                    s = n.getUTCHours()
                s < 10 && (s = '0' + s)
                var l = n.getUTCMinutes()
                l < 10 && (l = '0' + l)
                var u = n.getUTCSeconds()
                u < 10 && (u = '0' + u)
                var d = n.getUTCFullYear(),
                    m =
                        i +
                        ' ' +
                        o +
                        ' ' +
                        a +
                        ' ' +
                        s +
                        ':' +
                        l +
                        ':' +
                        u +
                        ' UTC ' +
                        d
                return m
            }),
            e
        )
    })()
/*!
 * Copyright 2016 Amazon.com,
 * Inc. or its affiliates. All Rights Reserved.
 *
 * Licensed under the Amazon Software License (the "License").
 * You may not use this file except in compliance with the
 * License. A copy of the License is located at
 *
 *     http://aws.amazon.com/asl/
 *
 * or in the "license" file accompanying this file. This file is
 * distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR
 * CONDITIONS OF ANY KIND, express or implied. See the License
 * for the specific language governing permissions and
 * limitations under the License.
 */ var D5 = (function () {
    function e(r) {
        var n = r === void 0 ? {} : r,
            i = n.Name,
            o = n.Value
        ;(this.Name = i || ''), (this.Value = o || '')
    }
    var t = e.prototype
    return (
        (t.getValue = function () {
            return this.Value
        }),
        (t.setValue = function (n) {
            return (this.Value = n), this
        }),
        (t.getName = function () {
            return this.Name
        }),
        (t.setName = function (n) {
            return (this.Name = n), this
        }),
        (t.toString = function () {
            return JSON.stringify(this)
        }),
        (t.toJSON = function () {
            return { Name: this.Name, Value: this.Value }
        }),
        e
    )
})()
/*!
 * Copyright 2016 Amazon.com,
 * Inc. or its affiliates. All Rights Reserved.
 *
 * Licensed under the Amazon Software License (the "License").
 * You may not use this file except in compliance with the
 * License. A copy of the License is located at
 *
 *     http://aws.amazon.com/asl/
 *
 * or in the "license" file accompanying this file. This file is
 * distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR
 * CONDITIONS OF ANY KIND, express or implied. See the License
 * for the specific language governing permissions and
 * limitations under the License.
 */ var vn = {},
    B5 = (function () {
        function e() {}
        return (
            (e.setItem = function (r, n) {
                return (vn[r] = n), vn[r]
            }),
            (e.getItem = function (r) {
                return Object.prototype.hasOwnProperty.call(vn, r)
                    ? vn[r]
                    : void 0
            }),
            (e.removeItem = function (r) {
                return delete vn[r]
            }),
            (e.clear = function () {
                return (vn = {}), vn
            }),
            e
        )
    })(),
    yv = (function () {
        function e() {
            try {
                ;(this.storageWindow = window.localStorage),
                    this.storageWindow.setItem('aws.cognito.test-ls', 1),
                    this.storageWindow.removeItem('aws.cognito.test-ls')
            } catch {
                this.storageWindow = B5
            }
        }
        var t = e.prototype
        return (
            (t.getStorage = function () {
                return this.storageWindow
            }),
            e
        )
    })()
/*!
 * Copyright 2016 Amazon.com,
 * Inc. or its affiliates. All Rights Reserved.
 *
 * Licensed under the Amazon Software License (the "License").
 * You may not use this file except in compliance with the
 * License. A copy of the License is located at
 *
 *     http://aws.amazon.com/asl/
 *
 * or in the "license" file accompanying this file. This file is
 * distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR
 * CONDITIONS OF ANY KIND, express or implied. See the License
 * for the specific language governing permissions and
 * limitations under the License.
 */ var N5 = typeof navigator != 'undefined',
    Sv = N5 ? navigator.userAgent : 'nodejs',
    xv = (function () {
        function e(r) {
            if (r == null || r.Username == null || r.Pool == null)
                throw new Error('Username and Pool information are required.')
            ;(this.username = r.Username || ''),
                (this.pool = r.Pool),
                (this.Session = null),
                (this.client = r.Pool.client),
                (this.signInUserSession = null),
                (this.authenticationFlowType = 'USER_SRP_AUTH'),
                (this.storage = r.Storage || new yv().getStorage()),
                (this.keyPrefix =
                    'CognitoIdentityServiceProvider.' +
                    this.pool.getClientId()),
                (this.userDataKey =
                    this.keyPrefix + '.' + this.username + '.userData')
        }
        var t = e.prototype
        return (
            (t.setSignInUserSession = function (n) {
                this.clearCachedUserData(),
                    (this.signInUserSession = n),
                    this.cacheTokens()
            }),
            (t.getSignInUserSession = function () {
                return this.signInUserSession
            }),
            (t.getUsername = function () {
                return this.username
            }),
            (t.getAuthenticationFlowType = function () {
                return this.authenticationFlowType
            }),
            (t.setAuthenticationFlowType = function (n) {
                this.authenticationFlowType = n
            }),
            (t.initiateAuth = function (n, i) {
                var o = this,
                    a = n.getAuthParameters()
                a.USERNAME = this.username
                var s =
                        Object.keys(n.getValidationData()).length !== 0
                            ? n.getValidationData()
                            : n.getClientMetadata(),
                    l = {
                        AuthFlow: 'CUSTOM_AUTH',
                        ClientId: this.pool.getClientId(),
                        AuthParameters: a,
                        ClientMetadata: s,
                    }
                this.getUserContextData() &&
                    (l.UserContextData = this.getUserContextData()),
                    this.client.request('InitiateAuth', l, function (u, d) {
                        if (u) return i.onFailure(u)
                        var m = d.ChallengeName,
                            p = d.ChallengeParameters
                        return m === 'CUSTOM_CHALLENGE'
                            ? ((o.Session = d.Session), i.customChallenge(p))
                            : ((o.signInUserSession = o.getCognitoUserSession(
                                  d.AuthenticationResult
                              )),
                              o.cacheTokens(),
                              i.onSuccess(o.signInUserSession))
                    })
            }),
            (t.authenticateUser = function (n, i) {
                return this.authenticationFlowType === 'USER_PASSWORD_AUTH'
                    ? this.authenticateUserPlainUsernamePassword(n, i)
                    : this.authenticationFlowType === 'USER_SRP_AUTH' ||
                      this.authenticationFlowType === 'CUSTOM_AUTH'
                    ? this.authenticateUserDefaultAuth(n, i)
                    : i.onFailure(
                          new Error('Authentication flow type is invalid.')
                      )
            }),
            (t.authenticateUserDefaultAuth = function (n, i) {
                var o = this,
                    a = new fi(this.pool.getUserPoolId().split('_')[1]),
                    s = new gv(),
                    l,
                    u,
                    d = {}
                this.deviceKey != null && (d.DEVICE_KEY = this.deviceKey),
                    (d.USERNAME = this.username),
                    a.getLargeAValue(function (m, p) {
                        m && i.onFailure(m),
                            (d.SRP_A = p.toString(16)),
                            o.authenticationFlowType === 'CUSTOM_AUTH' &&
                                (d.CHALLENGE_NAME = 'SRP_A')
                        var x =
                                Object.keys(n.getValidationData()).length !== 0
                                    ? n.getValidationData()
                                    : n.getClientMetadata(),
                            _ = {
                                AuthFlow: o.authenticationFlowType,
                                ClientId: o.pool.getClientId(),
                                AuthParameters: d,
                                ClientMetadata: x,
                            }
                        o.getUserContextData(o.username) &&
                            (_.UserContextData = o.getUserContextData(
                                o.username
                            )),
                            o.client.request(
                                'InitiateAuth',
                                _,
                                function (b, g) {
                                    if (b) return i.onFailure(b)
                                    var v = g.ChallengeParameters
                                    ;(o.username = v.USER_ID_FOR_SRP),
                                        (o.userDataKey =
                                            o.keyPrefix +
                                            '.' +
                                            o.username +
                                            '.userData'),
                                        (l = new V(v.SRP_B, 16)),
                                        (u = new V(v.SALT, 16)),
                                        o.getCachedDeviceKeyAndPassword(),
                                        a.getPasswordAuthenticationKey(
                                            o.username,
                                            n.getPassword(),
                                            l,
                                            u,
                                            function (h, C) {
                                                h && i.onFailure(h)
                                                var E = s.getNowString(),
                                                    D = $r.lib.WordArray.create(
                                                        me.Buffer.concat([
                                                            me.Buffer.from(
                                                                o.pool
                                                                    .getUserPoolId()
                                                                    .split(
                                                                        '_'
                                                                    )[1],
                                                                'utf8'
                                                            ),
                                                            me.Buffer.from(
                                                                o.username,
                                                                'utf8'
                                                            ),
                                                            me.Buffer.from(
                                                                v.SECRET_BLOCK,
                                                                'base64'
                                                            ),
                                                            me.Buffer.from(
                                                                E,
                                                                'utf8'
                                                            ),
                                                        ])
                                                    ),
                                                    P =
                                                        $r.lib.WordArray.create(
                                                            C
                                                        ),
                                                    F = mv.stringify(Ws(D, P)),
                                                    O = {}
                                                ;(O.USERNAME = o.username),
                                                    (O.PASSWORD_CLAIM_SECRET_BLOCK =
                                                        v.SECRET_BLOCK),
                                                    (O.TIMESTAMP = E),
                                                    (O.PASSWORD_CLAIM_SIGNATURE =
                                                        F),
                                                    o.deviceKey != null &&
                                                        (O.DEVICE_KEY =
                                                            o.deviceKey)
                                                var M = function q(J, oe) {
                                                        return o.client.request(
                                                            'RespondToAuthChallenge',
                                                            J,
                                                            function (Ue, Ke) {
                                                                return Ue &&
                                                                    Ue.code ===
                                                                        'ResourceNotFoundException' &&
                                                                    Ue.message
                                                                        .toLowerCase()
                                                                        .indexOf(
                                                                            'device'
                                                                        ) !== -1
                                                                    ? ((O.DEVICE_KEY =
                                                                          null),
                                                                      (o.deviceKey =
                                                                          null),
                                                                      (o.randomPassword =
                                                                          null),
                                                                      (o.deviceGroupKey =
                                                                          null),
                                                                      o.clearCachedDeviceKeyAndPassword(),
                                                                      q(J, oe))
                                                                    : oe(Ue, Ke)
                                                            }
                                                        )
                                                    },
                                                    L = {
                                                        ChallengeName:
                                                            'PASSWORD_VERIFIER',
                                                        ClientId:
                                                            o.pool.getClientId(),
                                                        ChallengeResponses: O,
                                                        Session: g.Session,
                                                        ClientMetadata: x,
                                                    }
                                                o.getUserContextData() &&
                                                    (L.UserContextData =
                                                        o.getUserContextData()),
                                                    M(L, function (q, J) {
                                                        return q
                                                            ? i.onFailure(q)
                                                            : o.authenticateUserInternal(
                                                                  J,
                                                                  a,
                                                                  i
                                                              )
                                                    })
                                            }
                                        )
                                }
                            )
                    })
            }),
            (t.authenticateUserPlainUsernamePassword = function (n, i) {
                var o = this,
                    a = {}
                if (
                    ((a.USERNAME = this.username),
                    (a.PASSWORD = n.getPassword()),
                    !a.PASSWORD)
                ) {
                    i.onFailure(new Error('PASSWORD parameter is required'))
                    return
                }
                var s = new fi(this.pool.getUserPoolId().split('_')[1])
                this.getCachedDeviceKeyAndPassword(),
                    this.deviceKey != null && (a.DEVICE_KEY = this.deviceKey)
                var l =
                        Object.keys(n.getValidationData()).length !== 0
                            ? n.getValidationData()
                            : n.getClientMetadata(),
                    u = {
                        AuthFlow: 'USER_PASSWORD_AUTH',
                        ClientId: this.pool.getClientId(),
                        AuthParameters: a,
                        ClientMetadata: l,
                    }
                this.getUserContextData(this.username) &&
                    (u.UserContextData = this.getUserContextData(
                        this.username
                    )),
                    this.client.request('InitiateAuth', u, function (d, m) {
                        return d
                            ? i.onFailure(d)
                            : o.authenticateUserInternal(m, s, i)
                    })
            }),
            (t.authenticateUserInternal = function (n, i, o) {
                var a = this,
                    s = n.ChallengeName,
                    l = n.ChallengeParameters
                if (s === 'SMS_MFA')
                    return (this.Session = n.Session), o.mfaRequired(s, l)
                if (s === 'SELECT_MFA_TYPE')
                    return (this.Session = n.Session), o.selectMFAType(s, l)
                if (s === 'MFA_SETUP')
                    return (this.Session = n.Session), o.mfaSetup(s, l)
                if (s === 'SOFTWARE_TOKEN_MFA')
                    return (this.Session = n.Session), o.totpRequired(s, l)
                if (s === 'CUSTOM_CHALLENGE')
                    return (this.Session = n.Session), o.customChallenge(l)
                if (s === 'NEW_PASSWORD_REQUIRED') {
                    this.Session = n.Session
                    var u = null,
                        d = null,
                        m = [],
                        p =
                            i.getNewPasswordRequiredChallengeUserAttributePrefix()
                    if (
                        (l &&
                            ((u = JSON.parse(
                                n.ChallengeParameters.userAttributes
                            )),
                            (d = JSON.parse(
                                n.ChallengeParameters.requiredAttributes
                            ))),
                        d)
                    )
                        for (var x = 0; x < d.length; x++)
                            m[x] = d[x].substr(p.length)
                    return o.newPasswordRequired(u, m)
                }
                if (s === 'DEVICE_SRP_AUTH') {
                    ;(this.Session = n.Session), this.getDeviceResponse(o)
                    return
                }
                ;(this.signInUserSession = this.getCognitoUserSession(
                    n.AuthenticationResult
                )),
                    (this.challengeName = s),
                    this.cacheTokens()
                var _ = n.AuthenticationResult.NewDeviceMetadata
                if (_ == null) return o.onSuccess(this.signInUserSession)
                i.generateHashDevice(
                    n.AuthenticationResult.NewDeviceMetadata.DeviceGroupKey,
                    n.AuthenticationResult.NewDeviceMetadata.DeviceKey,
                    function (b) {
                        if (b) return o.onFailure(b)
                        var g = {
                            Salt: me.Buffer.from(
                                i.getSaltDevices(),
                                'hex'
                            ).toString('base64'),
                            PasswordVerifier: me.Buffer.from(
                                i.getVerifierDevices(),
                                'hex'
                            ).toString('base64'),
                        }
                        ;(a.verifierDevices = g.PasswordVerifier),
                            (a.deviceGroupKey = _.DeviceGroupKey),
                            (a.randomPassword = i.getRandomPassword()),
                            a.client.request(
                                'ConfirmDevice',
                                {
                                    DeviceKey: _.DeviceKey,
                                    AccessToken: a.signInUserSession
                                        .getAccessToken()
                                        .getJwtToken(),
                                    DeviceSecretVerifierConfig: g,
                                    DeviceName: Sv,
                                },
                                function (v, h) {
                                    return v
                                        ? o.onFailure(v)
                                        : ((a.deviceKey =
                                              n.AuthenticationResult.NewDeviceMetadata.DeviceKey),
                                          a.cacheDeviceKeyAndPassword(),
                                          h.UserConfirmationNecessary === !0
                                              ? o.onSuccess(
                                                    a.signInUserSession,
                                                    h.UserConfirmationNecessary
                                                )
                                              : o.onSuccess(
                                                    a.signInUserSession
                                                ))
                                }
                            )
                    }
                )
            }),
            (t.completeNewPasswordChallenge = function (n, i, o, a) {
                var s = this
                if (!n)
                    return o.onFailure(new Error('New password is required.'))
                var l = new fi(this.pool.getUserPoolId().split('_')[1]),
                    u = l.getNewPasswordRequiredChallengeUserAttributePrefix(),
                    d = {}
                i &&
                    Object.keys(i).forEach(function (p) {
                        d[u + p] = i[p]
                    }),
                    (d.NEW_PASSWORD = n),
                    (d.USERNAME = this.username)
                var m = {
                    ChallengeName: 'NEW_PASSWORD_REQUIRED',
                    ClientId: this.pool.getClientId(),
                    ChallengeResponses: d,
                    Session: this.Session,
                    ClientMetadata: a,
                }
                this.getUserContextData() &&
                    (m.UserContextData = this.getUserContextData()),
                    this.client.request(
                        'RespondToAuthChallenge',
                        m,
                        function (p, x) {
                            return p
                                ? o.onFailure(p)
                                : s.authenticateUserInternal(x, l, o)
                        }
                    )
            }),
            (t.getDeviceResponse = function (n, i) {
                var o = this,
                    a = new fi(this.deviceGroupKey),
                    s = new gv(),
                    l = {}
                ;(l.USERNAME = this.username),
                    (l.DEVICE_KEY = this.deviceKey),
                    a.getLargeAValue(function (u, d) {
                        u && n.onFailure(u), (l.SRP_A = d.toString(16))
                        var m = {
                            ChallengeName: 'DEVICE_SRP_AUTH',
                            ClientId: o.pool.getClientId(),
                            ChallengeResponses: l,
                            ClientMetadata: i,
                            Session: o.Session,
                        }
                        o.getUserContextData() &&
                            (m.UserContextData = o.getUserContextData()),
                            o.client.request(
                                'RespondToAuthChallenge',
                                m,
                                function (p, x) {
                                    if (p) return n.onFailure(p)
                                    var _ = x.ChallengeParameters,
                                        b = new V(_.SRP_B, 16),
                                        g = new V(_.SALT, 16)
                                    a.getPasswordAuthenticationKey(
                                        o.deviceKey,
                                        o.randomPassword,
                                        b,
                                        g,
                                        function (v, h) {
                                            if (v) return n.onFailure(v)
                                            var C = s.getNowString(),
                                                E = $r.lib.WordArray.create(
                                                    me.Buffer.concat([
                                                        me.Buffer.from(
                                                            o.deviceGroupKey,
                                                            'utf8'
                                                        ),
                                                        me.Buffer.from(
                                                            o.deviceKey,
                                                            'utf8'
                                                        ),
                                                        me.Buffer.from(
                                                            _.SECRET_BLOCK,
                                                            'base64'
                                                        ),
                                                        me.Buffer.from(
                                                            C,
                                                            'utf8'
                                                        ),
                                                    ])
                                                ),
                                                D = $r.lib.WordArray.create(h),
                                                P = mv.stringify(Ws(E, D)),
                                                F = {}
                                            ;(F.USERNAME = o.username),
                                                (F.PASSWORD_CLAIM_SECRET_BLOCK =
                                                    _.SECRET_BLOCK),
                                                (F.TIMESTAMP = C),
                                                (F.PASSWORD_CLAIM_SIGNATURE =
                                                    P),
                                                (F.DEVICE_KEY = o.deviceKey)
                                            var O = {
                                                ChallengeName:
                                                    'DEVICE_PASSWORD_VERIFIER',
                                                ClientId: o.pool.getClientId(),
                                                ChallengeResponses: F,
                                                Session: x.Session,
                                            }
                                            o.getUserContextData() &&
                                                (O.UserContextData =
                                                    o.getUserContextData()),
                                                o.client.request(
                                                    'RespondToAuthChallenge',
                                                    O,
                                                    function (M, L) {
                                                        return M
                                                            ? n.onFailure(M)
                                                            : ((o.signInUserSession =
                                                                  o.getCognitoUserSession(
                                                                      L.AuthenticationResult
                                                                  )),
                                                              o.cacheTokens(),
                                                              n.onSuccess(
                                                                  o.signInUserSession
                                                              ))
                                                    }
                                                )
                                        }
                                    )
                                }
                            )
                    })
            }),
            (t.confirmRegistration = function (n, i, o, a) {
                var s = {
                    ClientId: this.pool.getClientId(),
                    ConfirmationCode: n,
                    Username: this.username,
                    ForceAliasCreation: i,
                    ClientMetadata: a,
                }
                this.getUserContextData() &&
                    (s.UserContextData = this.getUserContextData()),
                    this.client.request('ConfirmSignUp', s, function (l) {
                        return l ? o(l, null) : o(null, 'SUCCESS')
                    })
            }),
            (t.sendCustomChallengeAnswer = function (n, i, o) {
                var a = this,
                    s = {}
                ;(s.USERNAME = this.username), (s.ANSWER = n)
                var l = new fi(this.pool.getUserPoolId().split('_')[1])
                this.getCachedDeviceKeyAndPassword(),
                    this.deviceKey != null && (s.DEVICE_KEY = this.deviceKey)
                var u = {
                    ChallengeName: 'CUSTOM_CHALLENGE',
                    ChallengeResponses: s,
                    ClientId: this.pool.getClientId(),
                    Session: this.Session,
                    ClientMetadata: o,
                }
                this.getUserContextData() &&
                    (u.UserContextData = this.getUserContextData()),
                    this.client.request(
                        'RespondToAuthChallenge',
                        u,
                        function (d, m) {
                            return d
                                ? i.onFailure(d)
                                : a.authenticateUserInternal(m, l, i)
                        }
                    )
            }),
            (t.sendMFACode = function (n, i, o, a) {
                var s = this,
                    l = {}
                ;(l.USERNAME = this.username), (l.SMS_MFA_CODE = n)
                var u = o || 'SMS_MFA'
                u === 'SOFTWARE_TOKEN_MFA' && (l.SOFTWARE_TOKEN_MFA_CODE = n),
                    this.deviceKey != null && (l.DEVICE_KEY = this.deviceKey)
                var d = {
                    ChallengeName: u,
                    ChallengeResponses: l,
                    ClientId: this.pool.getClientId(),
                    Session: this.Session,
                    ClientMetadata: a,
                }
                this.getUserContextData() &&
                    (d.UserContextData = this.getUserContextData()),
                    this.client.request(
                        'RespondToAuthChallenge',
                        d,
                        function (m, p) {
                            if (m) return i.onFailure(m)
                            var x = p.ChallengeName
                            if (x === 'DEVICE_SRP_AUTH') {
                                s.getDeviceResponse(i)
                                return
                            }
                            if (
                                ((s.signInUserSession = s.getCognitoUserSession(
                                    p.AuthenticationResult
                                )),
                                s.cacheTokens(),
                                p.AuthenticationResult.NewDeviceMetadata ==
                                    null)
                            )
                                return i.onSuccess(s.signInUserSession)
                            var _ = new fi(s.pool.getUserPoolId().split('_')[1])
                            _.generateHashDevice(
                                p.AuthenticationResult.NewDeviceMetadata
                                    .DeviceGroupKey,
                                p.AuthenticationResult.NewDeviceMetadata
                                    .DeviceKey,
                                function (b) {
                                    if (b) return i.onFailure(b)
                                    var g = {
                                        Salt: me.Buffer.from(
                                            _.getSaltDevices(),
                                            'hex'
                                        ).toString('base64'),
                                        PasswordVerifier: me.Buffer.from(
                                            _.getVerifierDevices(),
                                            'hex'
                                        ).toString('base64'),
                                    }
                                    ;(s.verifierDevices = g.PasswordVerifier),
                                        (s.deviceGroupKey =
                                            p.AuthenticationResult.NewDeviceMetadata.DeviceGroupKey),
                                        (s.randomPassword =
                                            _.getRandomPassword()),
                                        s.client.request(
                                            'ConfirmDevice',
                                            {
                                                DeviceKey:
                                                    p.AuthenticationResult
                                                        .NewDeviceMetadata
                                                        .DeviceKey,
                                                AccessToken: s.signInUserSession
                                                    .getAccessToken()
                                                    .getJwtToken(),
                                                DeviceSecretVerifierConfig: g,
                                                DeviceName: Sv,
                                            },
                                            function (v, h) {
                                                return v
                                                    ? i.onFailure(v)
                                                    : ((s.deviceKey =
                                                          p.AuthenticationResult.NewDeviceMetadata.DeviceKey),
                                                      s.cacheDeviceKeyAndPassword(),
                                                      h.UserConfirmationNecessary ===
                                                      !0
                                                          ? i.onSuccess(
                                                                s.signInUserSession,
                                                                h.UserConfirmationNecessary
                                                            )
                                                          : i.onSuccess(
                                                                s.signInUserSession
                                                            ))
                                            }
                                        )
                                }
                            )
                        }
                    )
            }),
            (t.changePassword = function (n, i, o, a) {
                if (
                    !(
                        this.signInUserSession != null &&
                        this.signInUserSession.isValid()
                    )
                )
                    return o(new Error('User is not authenticated'), null)
                this.client.request(
                    'ChangePassword',
                    {
                        PreviousPassword: n,
                        ProposedPassword: i,
                        AccessToken: this.signInUserSession
                            .getAccessToken()
                            .getJwtToken(),
                        ClientMetadata: a,
                    },
                    function (s) {
                        return s ? o(s, null) : o(null, 'SUCCESS')
                    }
                )
            }),
            (t.enableMFA = function (n) {
                if (
                    this.signInUserSession == null ||
                    !this.signInUserSession.isValid()
                )
                    return n(new Error('User is not authenticated'), null)
                var i = [],
                    o = { DeliveryMedium: 'SMS', AttributeName: 'phone_number' }
                i.push(o),
                    this.client.request(
                        'SetUserSettings',
                        {
                            MFAOptions: i,
                            AccessToken: this.signInUserSession
                                .getAccessToken()
                                .getJwtToken(),
                        },
                        function (a) {
                            return a ? n(a, null) : n(null, 'SUCCESS')
                        }
                    )
            }),
            (t.setUserMfaPreference = function (n, i, o) {
                if (
                    this.signInUserSession == null ||
                    !this.signInUserSession.isValid()
                )
                    return o(new Error('User is not authenticated'), null)
                this.client.request(
                    'SetUserMFAPreference',
                    {
                        SMSMfaSettings: n,
                        SoftwareTokenMfaSettings: i,
                        AccessToken: this.signInUserSession
                            .getAccessToken()
                            .getJwtToken(),
                    },
                    function (a) {
                        return a ? o(a, null) : o(null, 'SUCCESS')
                    }
                )
            }),
            (t.disableMFA = function (n) {
                if (
                    this.signInUserSession == null ||
                    !this.signInUserSession.isValid()
                )
                    return n(new Error('User is not authenticated'), null)
                var i = []
                this.client.request(
                    'SetUserSettings',
                    {
                        MFAOptions: i,
                        AccessToken: this.signInUserSession
                            .getAccessToken()
                            .getJwtToken(),
                    },
                    function (o) {
                        return o ? n(o, null) : n(null, 'SUCCESS')
                    }
                )
            }),
            (t.deleteUser = function (n, i) {
                var o = this
                if (
                    this.signInUserSession == null ||
                    !this.signInUserSession.isValid()
                )
                    return n(new Error('User is not authenticated'), null)
                this.client.request(
                    'DeleteUser',
                    {
                        AccessToken: this.signInUserSession
                            .getAccessToken()
                            .getJwtToken(),
                        ClientMetadata: i,
                    },
                    function (a) {
                        return a
                            ? n(a, null)
                            : (o.clearCachedUser(), n(null, 'SUCCESS'))
                    }
                )
            }),
            (t.updateAttributes = function (n, i, o) {
                var a = this
                if (
                    this.signInUserSession == null ||
                    !this.signInUserSession.isValid()
                )
                    return i(new Error('User is not authenticated'), null)
                this.client.request(
                    'UpdateUserAttributes',
                    {
                        AccessToken: this.signInUserSession
                            .getAccessToken()
                            .getJwtToken(),
                        UserAttributes: n,
                        ClientMetadata: o,
                    },
                    function (s) {
                        return s
                            ? i(s, null)
                            : a.getUserData(
                                  function () {
                                      return i(null, 'SUCCESS')
                                  },
                                  { bypassCache: !0 }
                              )
                    }
                )
            }),
            (t.getUserAttributes = function (n) {
                if (
                    !(
                        this.signInUserSession != null &&
                        this.signInUserSession.isValid()
                    )
                )
                    return n(new Error('User is not authenticated'), null)
                this.client.request(
                    'GetUser',
                    {
                        AccessToken: this.signInUserSession
                            .getAccessToken()
                            .getJwtToken(),
                    },
                    function (i, o) {
                        if (i) return n(i, null)
                        for (
                            var a = [], s = 0;
                            s < o.UserAttributes.length;
                            s++
                        ) {
                            var l = {
                                    Name: o.UserAttributes[s].Name,
                                    Value: o.UserAttributes[s].Value,
                                },
                                u = new D5(l)
                            a.push(u)
                        }
                        return n(null, a)
                    }
                )
            }),
            (t.getMFAOptions = function (n) {
                if (
                    !(
                        this.signInUserSession != null &&
                        this.signInUserSession.isValid()
                    )
                )
                    return n(new Error('User is not authenticated'), null)
                this.client.request(
                    'GetUser',
                    {
                        AccessToken: this.signInUserSession
                            .getAccessToken()
                            .getJwtToken(),
                    },
                    function (i, o) {
                        return i ? n(i, null) : n(null, o.MFAOptions)
                    }
                )
            }),
            (t.createGetUserRequest = function () {
                return this.client.promisifyRequest('GetUser', {
                    AccessToken: this.signInUserSession
                        .getAccessToken()
                        .getJwtToken(),
                })
            }),
            (t.refreshSessionIfPossible = function (n) {
                var i = this
                return (
                    n === void 0 && (n = {}),
                    new Promise(function (o) {
                        var a = i.signInUserSession.getRefreshToken()
                        a && a.getToken()
                            ? i.refreshSession(a, o, n.clientMetadata)
                            : o()
                    })
                )
            }),
            (t.getUserData = function (n, i) {
                var o = this
                if (
                    !(
                        this.signInUserSession != null &&
                        this.signInUserSession.isValid()
                    )
                )
                    return (
                        this.clearCachedUserData(),
                        n(new Error('User is not authenticated'), null)
                    )
                var a = this.getUserDataFromCache()
                if (!a) {
                    this.fetchUserData()
                        .then(function (s) {
                            n(null, s)
                        })
                        .catch(n)
                    return
                }
                if (this.isFetchUserDataAndTokenRequired(i)) {
                    this.fetchUserData()
                        .then(function (s) {
                            return o
                                .refreshSessionIfPossible(i)
                                .then(function () {
                                    return s
                                })
                        })
                        .then(function (s) {
                            return n(null, s)
                        })
                        .catch(n)
                    return
                }
                try {
                    n(null, JSON.parse(a))
                    return
                } catch (s) {
                    this.clearCachedUserData(), n(s, null)
                    return
                }
            }),
            (t.getUserDataFromCache = function () {
                var n = this.storage.getItem(this.userDataKey)
                return n
            }),
            (t.isFetchUserDataAndTokenRequired = function (n) {
                var i = n || {},
                    o = i.bypassCache,
                    a = o === void 0 ? !1 : o
                return a
            }),
            (t.fetchUserData = function () {
                var n = this
                return this.createGetUserRequest().then(function (i) {
                    return n.cacheUserData(i), i
                })
            }),
            (t.deleteAttributes = function (n, i) {
                var o = this
                if (
                    !(
                        this.signInUserSession != null &&
                        this.signInUserSession.isValid()
                    )
                )
                    return i(new Error('User is not authenticated'), null)
                this.client.request(
                    'DeleteUserAttributes',
                    {
                        UserAttributeNames: n,
                        AccessToken: this.signInUserSession
                            .getAccessToken()
                            .getJwtToken(),
                    },
                    function (a) {
                        return a
                            ? i(a, null)
                            : o.getUserData(
                                  function () {
                                      return i(null, 'SUCCESS')
                                  },
                                  { bypassCache: !0 }
                              )
                    }
                )
            }),
            (t.resendConfirmationCode = function (n, i) {
                var o = {
                    ClientId: this.pool.getClientId(),
                    Username: this.username,
                    ClientMetadata: i,
                }
                this.client.request(
                    'ResendConfirmationCode',
                    o,
                    function (a, s) {
                        return a ? n(a, null) : n(null, s)
                    }
                )
            }),
            (t.getSession = function (n, i) {
                if ((i === void 0 && (i = {}), this.username == null))
                    return n(
                        new Error(
                            'Username is null. Cannot retrieve a new session'
                        ),
                        null
                    )
                if (
                    this.signInUserSession != null &&
                    this.signInUserSession.isValid()
                )
                    return n(null, this.signInUserSession)
                var o =
                        'CognitoIdentityServiceProvider.' +
                        this.pool.getClientId() +
                        '.' +
                        this.username,
                    a = o + '.idToken',
                    s = o + '.accessToken',
                    l = o + '.refreshToken',
                    u = o + '.clockDrift'
                if (this.storage.getItem(a)) {
                    var d = new dv({ IdToken: this.storage.getItem(a) }),
                        m = new fv({ AccessToken: this.storage.getItem(s) }),
                        p = new hv({ RefreshToken: this.storage.getItem(l) }),
                        x = parseInt(this.storage.getItem(u), 0) || 0,
                        _ = {
                            IdToken: d,
                            AccessToken: m,
                            RefreshToken: p,
                            ClockDrift: x,
                        },
                        b = new vv(_)
                    if (b.isValid())
                        return (
                            (this.signInUserSession = b),
                            n(null, this.signInUserSession)
                        )
                    if (!p.getToken())
                        return n(
                            new Error(
                                'Cannot retrieve a new session. Please authenticate.'
                            ),
                            null
                        )
                    this.refreshSession(p, n, i.clientMetadata)
                } else
                    n(
                        new Error(
                            'Local storage is missing an ID Token, Please authenticate'
                        ),
                        null
                    )
            }),
            (t.refreshSession = function (n, i, o) {
                var a = this,
                    s = this.pool.wrapRefreshSessionCallback
                        ? this.pool.wrapRefreshSessionCallback(i)
                        : i,
                    l = {}
                l.REFRESH_TOKEN = n.getToken()
                var u =
                        'CognitoIdentityServiceProvider.' +
                        this.pool.getClientId(),
                    d = u + '.LastAuthUser'
                if (this.storage.getItem(d)) {
                    this.username = this.storage.getItem(d)
                    var m = u + '.' + this.username + '.deviceKey'
                    ;(this.deviceKey = this.storage.getItem(m)),
                        (l.DEVICE_KEY = this.deviceKey)
                }
                var p = {
                    ClientId: this.pool.getClientId(),
                    AuthFlow: 'REFRESH_TOKEN_AUTH',
                    AuthParameters: l,
                    ClientMetadata: o,
                }
                this.getUserContextData() &&
                    (p.UserContextData = this.getUserContextData()),
                    this.client.request('InitiateAuth', p, function (x, _) {
                        if (x)
                            return (
                                x.code === 'NotAuthorizedException' &&
                                    a.clearCachedUser(),
                                s(x, null)
                            )
                        if (_) {
                            var b = _.AuthenticationResult
                            return (
                                Object.prototype.hasOwnProperty.call(
                                    b,
                                    'RefreshToken'
                                ) || (b.RefreshToken = n.getToken()),
                                (a.signInUserSession =
                                    a.getCognitoUserSession(b)),
                                a.cacheTokens(),
                                s(null, a.signInUserSession)
                            )
                        }
                    })
            }),
            (t.cacheTokens = function () {
                var n =
                        'CognitoIdentityServiceProvider.' +
                        this.pool.getClientId(),
                    i = n + '.' + this.username + '.idToken',
                    o = n + '.' + this.username + '.accessToken',
                    a = n + '.' + this.username + '.refreshToken',
                    s = n + '.' + this.username + '.clockDrift',
                    l = n + '.LastAuthUser'
                this.storage.setItem(
                    i,
                    this.signInUserSession.getIdToken().getJwtToken()
                ),
                    this.storage.setItem(
                        o,
                        this.signInUserSession.getAccessToken().getJwtToken()
                    ),
                    this.storage.setItem(
                        a,
                        this.signInUserSession.getRefreshToken().getToken()
                    ),
                    this.storage.setItem(
                        s,
                        '' + this.signInUserSession.getClockDrift()
                    ),
                    this.storage.setItem(l, this.username)
            }),
            (t.cacheUserData = function (n) {
                this.storage.setItem(this.userDataKey, JSON.stringify(n))
            }),
            (t.clearCachedUserData = function () {
                this.storage.removeItem(this.userDataKey)
            }),
            (t.clearCachedUser = function () {
                this.clearCachedTokens(), this.clearCachedUserData()
            }),
            (t.cacheDeviceKeyAndPassword = function () {
                var n =
                        'CognitoIdentityServiceProvider.' +
                        this.pool.getClientId() +
                        '.' +
                        this.username,
                    i = n + '.deviceKey',
                    o = n + '.randomPasswordKey',
                    a = n + '.deviceGroupKey'
                this.storage.setItem(i, this.deviceKey),
                    this.storage.setItem(o, this.randomPassword),
                    this.storage.setItem(a, this.deviceGroupKey)
            }),
            (t.getCachedDeviceKeyAndPassword = function () {
                var n =
                        'CognitoIdentityServiceProvider.' +
                        this.pool.getClientId() +
                        '.' +
                        this.username,
                    i = n + '.deviceKey',
                    o = n + '.randomPasswordKey',
                    a = n + '.deviceGroupKey'
                this.storage.getItem(i) &&
                    ((this.deviceKey = this.storage.getItem(i)),
                    (this.randomPassword = this.storage.getItem(o)),
                    (this.deviceGroupKey = this.storage.getItem(a)))
            }),
            (t.clearCachedDeviceKeyAndPassword = function () {
                var n =
                        'CognitoIdentityServiceProvider.' +
                        this.pool.getClientId() +
                        '.' +
                        this.username,
                    i = n + '.deviceKey',
                    o = n + '.randomPasswordKey',
                    a = n + '.deviceGroupKey'
                this.storage.removeItem(i),
                    this.storage.removeItem(o),
                    this.storage.removeItem(a)
            }),
            (t.clearCachedTokens = function () {
                var n =
                        'CognitoIdentityServiceProvider.' +
                        this.pool.getClientId(),
                    i = n + '.' + this.username + '.idToken',
                    o = n + '.' + this.username + '.accessToken',
                    a = n + '.' + this.username + '.refreshToken',
                    s = n + '.LastAuthUser',
                    l = n + '.' + this.username + '.clockDrift'
                this.storage.removeItem(i),
                    this.storage.removeItem(o),
                    this.storage.removeItem(a),
                    this.storage.removeItem(s),
                    this.storage.removeItem(l)
            }),
            (t.getCognitoUserSession = function (n) {
                var i = new dv(n),
                    o = new fv(n),
                    a = new hv(n),
                    s = { IdToken: i, AccessToken: o, RefreshToken: a }
                return new vv(s)
            }),
            (t.forgotPassword = function (n, i) {
                var o = {
                    ClientId: this.pool.getClientId(),
                    Username: this.username,
                    ClientMetadata: i,
                }
                this.getUserContextData() &&
                    (o.UserContextData = this.getUserContextData()),
                    this.client.request('ForgotPassword', o, function (a, s) {
                        return a
                            ? n.onFailure(a)
                            : typeof n.inputVerificationCode == 'function'
                            ? n.inputVerificationCode(s)
                            : n.onSuccess(s)
                    })
            }),
            (t.confirmPassword = function (n, i, o, a) {
                var s = {
                    ClientId: this.pool.getClientId(),
                    Username: this.username,
                    ConfirmationCode: n,
                    Password: i,
                    ClientMetadata: a,
                }
                this.getUserContextData() &&
                    (s.UserContextData = this.getUserContextData()),
                    this.client.request(
                        'ConfirmForgotPassword',
                        s,
                        function (l) {
                            return l ? o.onFailure(l) : o.onSuccess('SUCCESS')
                        }
                    )
            }),
            (t.getAttributeVerificationCode = function (n, i, o) {
                if (
                    this.signInUserSession == null ||
                    !this.signInUserSession.isValid()
                )
                    return i.onFailure(new Error('User is not authenticated'))
                this.client.request(
                    'GetUserAttributeVerificationCode',
                    {
                        AttributeName: n,
                        AccessToken: this.signInUserSession
                            .getAccessToken()
                            .getJwtToken(),
                        ClientMetadata: o,
                    },
                    function (a, s) {
                        return a
                            ? i.onFailure(a)
                            : typeof i.inputVerificationCode == 'function'
                            ? i.inputVerificationCode(s)
                            : i.onSuccess('SUCCESS')
                    }
                )
            }),
            (t.verifyAttribute = function (n, i, o) {
                if (
                    this.signInUserSession == null ||
                    !this.signInUserSession.isValid()
                )
                    return o.onFailure(new Error('User is not authenticated'))
                this.client.request(
                    'VerifyUserAttribute',
                    {
                        AttributeName: n,
                        Code: i,
                        AccessToken: this.signInUserSession
                            .getAccessToken()
                            .getJwtToken(),
                    },
                    function (a) {
                        return a ? o.onFailure(a) : o.onSuccess('SUCCESS')
                    }
                )
            }),
            (t.getDevice = function (n) {
                if (
                    this.signInUserSession == null ||
                    !this.signInUserSession.isValid()
                )
                    return n.onFailure(new Error('User is not authenticated'))
                this.client.request(
                    'GetDevice',
                    {
                        AccessToken: this.signInUserSession
                            .getAccessToken()
                            .getJwtToken(),
                        DeviceKey: this.deviceKey,
                    },
                    function (i, o) {
                        return i ? n.onFailure(i) : n.onSuccess(o)
                    }
                )
            }),
            (t.forgetSpecificDevice = function (n, i) {
                if (
                    this.signInUserSession == null ||
                    !this.signInUserSession.isValid()
                )
                    return i.onFailure(new Error('User is not authenticated'))
                this.client.request(
                    'ForgetDevice',
                    {
                        AccessToken: this.signInUserSession
                            .getAccessToken()
                            .getJwtToken(),
                        DeviceKey: n,
                    },
                    function (o) {
                        return o ? i.onFailure(o) : i.onSuccess('SUCCESS')
                    }
                )
            }),
            (t.forgetDevice = function (n) {
                var i = this
                this.forgetSpecificDevice(this.deviceKey, {
                    onFailure: n.onFailure,
                    onSuccess: function (a) {
                        return (
                            (i.deviceKey = null),
                            (i.deviceGroupKey = null),
                            (i.randomPassword = null),
                            i.clearCachedDeviceKeyAndPassword(),
                            n.onSuccess(a)
                        )
                    },
                })
            }),
            (t.setDeviceStatusRemembered = function (n) {
                if (
                    this.signInUserSession == null ||
                    !this.signInUserSession.isValid()
                )
                    return n.onFailure(new Error('User is not authenticated'))
                this.client.request(
                    'UpdateDeviceStatus',
                    {
                        AccessToken: this.signInUserSession
                            .getAccessToken()
                            .getJwtToken(),
                        DeviceKey: this.deviceKey,
                        DeviceRememberedStatus: 'remembered',
                    },
                    function (i) {
                        return i ? n.onFailure(i) : n.onSuccess('SUCCESS')
                    }
                )
            }),
            (t.setDeviceStatusNotRemembered = function (n) {
                if (
                    this.signInUserSession == null ||
                    !this.signInUserSession.isValid()
                )
                    return n.onFailure(new Error('User is not authenticated'))
                this.client.request(
                    'UpdateDeviceStatus',
                    {
                        AccessToken: this.signInUserSession
                            .getAccessToken()
                            .getJwtToken(),
                        DeviceKey: this.deviceKey,
                        DeviceRememberedStatus: 'not_remembered',
                    },
                    function (i) {
                        return i ? n.onFailure(i) : n.onSuccess('SUCCESS')
                    }
                )
            }),
            (t.listDevices = function (n, i, o) {
                if (
                    this.signInUserSession == null ||
                    !this.signInUserSession.isValid()
                )
                    return o.onFailure(new Error('User is not authenticated'))
                var a = {
                    AccessToken: this.signInUserSession
                        .getAccessToken()
                        .getJwtToken(),
                    Limit: n,
                }
                i && (a.PaginationToken = i),
                    this.client.request('ListDevices', a, function (s, l) {
                        return s ? o.onFailure(s) : o.onSuccess(l)
                    })
            }),
            (t.globalSignOut = function (n) {
                var i = this
                if (
                    this.signInUserSession == null ||
                    !this.signInUserSession.isValid()
                )
                    return n.onFailure(new Error('User is not authenticated'))
                this.client.request(
                    'GlobalSignOut',
                    {
                        AccessToken: this.signInUserSession
                            .getAccessToken()
                            .getJwtToken(),
                    },
                    function (o) {
                        return o
                            ? n.onFailure(o)
                            : (i.clearCachedUser(), n.onSuccess('SUCCESS'))
                    }
                )
            }),
            (t.signOut = function (n) {
                var i = this
                if (!n || typeof n != 'function') {
                    this.cleanClientData()
                    return
                }
                this.getSession(function (o, a) {
                    if (o) return n(o)
                    i.revokeTokens(function (s) {
                        i.cleanClientData(), n(s)
                    })
                })
            }),
            (t.revokeTokens = function (n) {
                if (
                    (n === void 0 && (n = function () {}),
                    typeof n != 'function')
                )
                    throw new Error(
                        'Invalid revokeTokenCallback. It should be a function.'
                    )
                if (!this.signInUserSession) {
                    var i = new Error('User is not authenticated')
                    return n(i)
                }
                if (!this.signInUserSession.getAccessToken()) {
                    var o = new Error('No Access token available')
                    return n(o)
                }
                var a = this.signInUserSession.getRefreshToken().getToken(),
                    s = this.signInUserSession.getAccessToken()
                if (this.isSessionRevocable(s) && a)
                    return this.revokeToken({ token: a, callback: n })
                n()
            }),
            (t.isSessionRevocable = function (n) {
                if (n && typeof n.decodePayload == 'function')
                    try {
                        var i = n.decodePayload(),
                            o = i.origin_jti
                        return !!o
                    } catch {}
                return !1
            }),
            (t.cleanClientData = function () {
                ;(this.signInUserSession = null), this.clearCachedUser()
            }),
            (t.revokeToken = function (n) {
                var i = n.token,
                    o = n.callback
                this.client.requestWithRetry(
                    'RevokeToken',
                    { Token: i, ClientId: this.pool.getClientId() },
                    function (a) {
                        if (a) return o(a)
                        o()
                    }
                )
            }),
            (t.sendMFASelectionAnswer = function (n, i) {
                var o = this,
                    a = {}
                ;(a.USERNAME = this.username), (a.ANSWER = n)
                var s = {
                    ChallengeName: 'SELECT_MFA_TYPE',
                    ChallengeResponses: a,
                    ClientId: this.pool.getClientId(),
                    Session: this.Session,
                }
                this.getUserContextData() &&
                    (s.UserContextData = this.getUserContextData()),
                    this.client.request(
                        'RespondToAuthChallenge',
                        s,
                        function (l, u) {
                            if (l) return i.onFailure(l)
                            if (((o.Session = u.Session), n === 'SMS_MFA'))
                                return i.mfaRequired(
                                    u.ChallengeName,
                                    u.ChallengeParameters
                                )
                            if (n === 'SOFTWARE_TOKEN_MFA')
                                return i.totpRequired(
                                    u.ChallengeName,
                                    u.ChallengeParameters
                                )
                        }
                    )
            }),
            (t.getUserContextData = function () {
                var n = this.pool
                return n.getUserContextData(this.username)
            }),
            (t.associateSoftwareToken = function (n) {
                var i = this
                this.signInUserSession != null &&
                this.signInUserSession.isValid()
                    ? this.client.request(
                          'AssociateSoftwareToken',
                          {
                              AccessToken: this.signInUserSession
                                  .getAccessToken()
                                  .getJwtToken(),
                          },
                          function (o, a) {
                              return o
                                  ? n.onFailure(o)
                                  : n.associateSecretCode(a.SecretCode)
                          }
                      )
                    : this.client.request(
                          'AssociateSoftwareToken',
                          { Session: this.Session },
                          function (o, a) {
                              return o
                                  ? n.onFailure(o)
                                  : ((i.Session = a.Session),
                                    n.associateSecretCode(a.SecretCode))
                          }
                      )
            }),
            (t.verifySoftwareToken = function (n, i, o) {
                var a = this
                this.signInUserSession != null &&
                this.signInUserSession.isValid()
                    ? this.client.request(
                          'VerifySoftwareToken',
                          {
                              AccessToken: this.signInUserSession
                                  .getAccessToken()
                                  .getJwtToken(),
                              UserCode: n,
                              FriendlyDeviceName: i,
                          },
                          function (s, l) {
                              return s ? o.onFailure(s) : o.onSuccess(l)
                          }
                      )
                    : this.client.request(
                          'VerifySoftwareToken',
                          {
                              Session: this.Session,
                              UserCode: n,
                              FriendlyDeviceName: i,
                          },
                          function (s, l) {
                              if (s) return o.onFailure(s)
                              a.Session = l.Session
                              var u = {}
                              u.USERNAME = a.username
                              var d = {
                                  ChallengeName: 'MFA_SETUP',
                                  ClientId: a.pool.getClientId(),
                                  ChallengeResponses: u,
                                  Session: a.Session,
                              }
                              a.getUserContextData() &&
                                  (d.UserContextData = a.getUserContextData()),
                                  a.client.request(
                                      'RespondToAuthChallenge',
                                      d,
                                      function (m, p) {
                                          return m
                                              ? o.onFailure(m)
                                              : ((a.signInUserSession =
                                                    a.getCognitoUserSession(
                                                        p.AuthenticationResult
                                                    )),
                                                a.cacheTokens(),
                                                o.onSuccess(
                                                    a.signInUserSession
                                                ))
                                      }
                                  )
                          }
                      )
            }),
            e
        )
    })()
function U5(e, t) {
    return (
        (t = t || {}),
        new Promise(function (r, n) {
            var i = new XMLHttpRequest(),
                o = [],
                a = [],
                s = {},
                l = function () {
                    return {
                        ok: ((i.status / 100) | 0) == 2,
                        statusText: i.statusText,
                        status: i.status,
                        url: i.responseURL,
                        text: function () {
                            return Promise.resolve(i.responseText)
                        },
                        json: function () {
                            return Promise.resolve(i.responseText).then(
                                JSON.parse
                            )
                        },
                        blob: function () {
                            return Promise.resolve(new Blob([i.response]))
                        },
                        clone: l,
                        headers: {
                            keys: function () {
                                return o
                            },
                            entries: function () {
                                return a
                            },
                            get: function (d) {
                                return s[d.toLowerCase()]
                            },
                            has: function (d) {
                                return d.toLowerCase() in s
                            },
                        },
                    }
                }
            for (var u in (i.open(t.method || 'get', e, !0),
            (i.onload = function () {
                i
                    .getAllResponseHeaders()
                    .replace(
                        /^(.*?):[^\S\n]*([\s\S]*?)$/gm,
                        function (d, m, p) {
                            o.push((m = m.toLowerCase())),
                                a.push([m, p]),
                                (s[m] = s[m] ? s[m] + ',' + p : p)
                        }
                    ),
                    r(l())
            }),
            (i.onerror = n),
            (i.withCredentials = t.credentials == 'include'),
            t.headers))
                i.setRequestHeader(u, t.headers[u])
            i.send(t.body || null)
        })
    )
}
var M5 = Object.freeze({
        __proto__: null,
        [Symbol.toStringTag]: 'Module',
        default: U5,
    }),
    wv = Ag(M5)
self.fetch || (self.fetch = wv.default || wv)
var O5 = '5.0.4',
    kf = 'aws-amplify/' + O5,
    gn = {
        userAgent: kf + ' js',
        product: '',
        navigator: null,
        isReactNative: !1,
    }
if (typeof navigator != 'undefined' && navigator.product)
    switch (
        ((gn.product = navigator.product || ''),
        (gn.navigator = navigator || null),
        navigator.product)
    ) {
        case 'ReactNative':
            ;(gn.userAgent = kf + ' react-native'), (gn.isReactNative = !0)
            break
        default:
            ;(gn.userAgent = kf + ' js'), (gn.isReactNative = !1)
            break
    }
var $5 = function () {
    return gn.userAgent
}
function bv() {}
bv.prototype.userAgent = $5()
function z5(e, t) {
    ;(e.prototype = Object.create(t.prototype)),
        (e.prototype.constructor = e),
        Mo(e, t)
}
function Tf(e) {
    var t = typeof Map == 'function' ? new Map() : void 0
    return (
        (Tf = function (n) {
            if (n === null || !j5(n)) return n
            if (typeof n != 'function')
                throw new TypeError(
                    'Super expression must either be null or a function'
                )
            if (typeof t != 'undefined') {
                if (t.has(n)) return t.get(n)
                t.set(n, i)
            }
            function i() {
                return Vs(n, arguments, Af(this).constructor)
            }
            return (
                (i.prototype = Object.create(n.prototype, {
                    constructor: {
                        value: i,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0,
                    },
                })),
                Mo(i, n)
            )
        }),
        Tf(e)
    )
}
function Vs(e, t, r) {
    return (
        L5()
            ? (Vs = Reflect.construct)
            : (Vs = function (i, o, a) {
                  var s = [null]
                  s.push.apply(s, o)
                  var l = Function.bind.apply(i, s),
                      u = new l()
                  return a && Mo(u, a.prototype), u
              }),
        Vs.apply(null, arguments)
    )
}
function L5() {
    if (
        typeof Reflect == 'undefined' ||
        !Reflect.construct ||
        Reflect.construct.sham
    )
        return !1
    if (typeof Proxy == 'function') return !0
    try {
        return (
            Boolean.prototype.valueOf.call(
                Reflect.construct(Boolean, [], function () {})
            ),
            !0
        )
    } catch {
        return !1
    }
}
function j5(e) {
    return Function.toString.call(e).indexOf('[native code]') !== -1
}
function Mo(e, t) {
    return (
        (Mo =
            Object.setPrototypeOf ||
            function (n, i) {
                return (n.__proto__ = i), n
            }),
        Mo(e, t)
    )
}
function Af(e) {
    return (
        (Af = Object.setPrototypeOf
            ? Object.getPrototypeOf
            : function (r) {
                  return r.__proto__ || Object.getPrototypeOf(r)
              }),
        Af(e)
    )
}
var W5 = (function (e) {
        z5(t, e)
        function t(r, n, i, o) {
            var a
            return (
                (a = e.call(this, r) || this),
                (a.code = n),
                (a.name = i),
                (a.statusCode = o),
                a
            )
        }
        return t
    })(Tf(Error)),
    H5 = (function () {
        function e(r, n, i) {
            this.endpoint = n || 'https://cognito-idp.' + r + '.amazonaws.com/'
            var o = i || {},
                a = o.credentials
            this.fetchOptions = a ? { credentials: a } : {}
        }
        var t = e.prototype
        return (
            (t.promisifyRequest = function (n, i) {
                var o = this
                return new Promise(function (a, s) {
                    o.request(n, i, function (l, u) {
                        l
                            ? s(new W5(l.message, l.code, l.name, l.statusCode))
                            : a(u)
                    })
                })
            }),
            (t.requestWithRetry = function (n, i, o) {
                var a = this,
                    s = 5 * 1e3
                G5(
                    function (l) {
                        return new Promise(function (u, d) {
                            a.request(n, l, function (m, p) {
                                m ? d(m) : u(p)
                            })
                        })
                    },
                    [i],
                    s
                )
                    .then(function (l) {
                        return o(null, l)
                    })
                    .catch(function (l) {
                        return o(l)
                    })
            }),
            (t.request = function (n, i, o) {
                var a = {
                        'Content-Type': 'application/x-amz-json-1.1',
                        'X-Amz-Target':
                            'AWSCognitoIdentityProviderService.' + n,
                        'X-Amz-User-Agent': bv.prototype.userAgent,
                    },
                    s = Object.assign({}, this.fetchOptions, {
                        headers: a,
                        method: 'POST',
                        mode: 'cors',
                        cache: 'no-cache',
                        body: JSON.stringify(i),
                    }),
                    l
                fetch(this.endpoint, s)
                    .then(
                        function (u) {
                            return (l = u), u
                        },
                        function (u) {
                            throw u instanceof TypeError
                                ? new Error('Network error')
                                : u
                        }
                    )
                    .then(function (u) {
                        return u.json().catch(function () {
                            return {}
                        })
                    })
                    .then(function (u) {
                        if (l.ok) return o(null, u)
                        var d = (u.__type || u.code).split('#').pop(),
                            m = new Error(u.message || u.Message || null)
                        return (m.name = d), (m.code = d), o(m)
                    })
                    .catch(function (u) {
                        if (l && l.headers && l.headers.get('x-amzn-errortype'))
                            try {
                                var d = l.headers
                                        .get('x-amzn-errortype')
                                        .split(':')[0],
                                    m = new Error(
                                        l.status ? l.status.toString() : null
                                    )
                                return (
                                    (m.code = d),
                                    (m.name = d),
                                    (m.statusCode = l.status),
                                    o(m)
                                )
                            } catch {
                                return o(u)
                            }
                        else
                            u instanceof Error &&
                                u.message === 'Network error' &&
                                (u.code = 'NetworkError')
                        return o(u)
                    })
            }),
            e
        )
    })(),
    Ks = { debug: function () {} },
    V5 = function (t) {
        var r = 'nonRetryable'
        return t && t[r]
    }
function Cv(e, t, r, n) {
    if ((n === void 0 && (n = 1), typeof e != 'function'))
        throw Error('functionToRetry must be a function')
    return (
        Ks.debug(
            e.name + ' attempt #' + n + ' with args: ' + JSON.stringify(t)
        ),
        e.apply(void 0, t).catch(function (i) {
            if ((Ks.debug('error on ' + e.name, i), V5(i)))
                throw (Ks.debug(e.name + ' non retryable error', i), i)
            var o = r(n, t, i)
            if ((Ks.debug(e.name + ' retrying in ' + o + ' ms'), o !== !1))
                return new Promise(function (a) {
                    return setTimeout(a, o)
                }).then(function () {
                    return Cv(e, t, r, n + 1)
                })
            throw i
        })
    )
}
function K5(e) {
    var t = 100,
        r = 100
    return function (n) {
        var i = Math.pow(2, n) * t + r * Math.random()
        return i > e ? !1 : i
    }
}
var q5 = 5 * 60 * 1e3
function G5(e, t, r) {
    return r === void 0 && (r = q5), Cv(e, t, K5(r))
}
/*!
 * Copyright 2016 Amazon.com,
 * Inc. or its affiliates. All Rights Reserved.
 *
 * Licensed under the Amazon Software License (the "License").
 * You may not use this file except in compliance with the
 * License. A copy of the License is located at
 *
 *     http://aws.amazon.com/asl/
 *
 * or in the "license" file accompanying this file. This file is
 * distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR
 * CONDITIONS OF ANY KIND, express or implied. See the License
 * for the specific language governing permissions and
 * limitations under the License.
 */ var Y5 = 55,
    eI = (function () {
        function e(r, n) {
            var i = r || {},
                o = i.UserPoolId,
                a = i.ClientId,
                s = i.endpoint,
                l = i.fetchOptions,
                u = i.AdvancedSecurityDataCollectionFlag
            if (!o || !a)
                throw new Error('Both UserPoolId and ClientId are required.')
            if (o.length > Y5 || !/^[\w-]+_[0-9a-zA-Z]+$/.test(o))
                throw new Error('Invalid UserPoolId format.')
            var d = o.split('_')[0]
            ;(this.userPoolId = o),
                (this.clientId = a),
                (this.client = new H5(d, s, l)),
                (this.advancedSecurityDataCollectionFlag = u !== !1),
                (this.storage = r.Storage || new yv().getStorage()),
                n && (this.wrapRefreshSessionCallback = n)
        }
        var t = e.prototype
        return (
            (t.getUserPoolId = function () {
                return this.userPoolId
            }),
            (t.getClientId = function () {
                return this.clientId
            }),
            (t.signUp = function (n, i, o, a, s, l) {
                var u = this,
                    d = {
                        ClientId: this.clientId,
                        Username: n,
                        Password: i,
                        UserAttributes: o,
                        ValidationData: a,
                        ClientMetadata: l,
                    }
                this.getUserContextData(n) &&
                    (d.UserContextData = this.getUserContextData(n)),
                    this.client.request('SignUp', d, function (m, p) {
                        if (m) return s(m, null)
                        var x = { Username: n, Pool: u, Storage: u.storage },
                            _ = {
                                user: new xv(x),
                                userConfirmed: p.UserConfirmed,
                                userSub: p.UserSub,
                                codeDeliveryDetails: p.CodeDeliveryDetails,
                            }
                        return s(null, _)
                    })
            }),
            (t.getCurrentUser = function () {
                var n =
                        'CognitoIdentityServiceProvider.' +
                        this.clientId +
                        '.LastAuthUser',
                    i = this.storage.getItem(n)
                if (i) {
                    var o = { Username: i, Pool: this, Storage: this.storage }
                    return new xv(o)
                }
                return null
            }),
            (t.getUserContextData = function (n) {
                if (typeof AmazonCognitoAdvancedSecurityData != 'undefined') {
                    var i = AmazonCognitoAdvancedSecurityData
                    if (this.advancedSecurityDataCollectionFlag) {
                        var o = i.getData(n, this.userPoolId, this.clientId)
                        if (o) {
                            var a = { EncodedData: o }
                            return a
                        }
                    }
                    return {}
                }
            }),
            e
        )
    })(),
    di = { exports: {} }
/*!
 * JavaScript Cookie v2.2.1
 * https://github.com/js-cookie/js-cookie
 *
 * Copyright 2006, 2015 Klaus Hartl & Fagner Brack
 * Released under the MIT license
 */ ;(function (e, t) {
    ;(function (r) {
        var n
        if (((e.exports = r()), (n = !0), !n)) {
            var i = window.Cookies,
                o = (window.Cookies = r())
            o.noConflict = function () {
                return (window.Cookies = i), o
            }
        }
    })(function () {
        function r() {
            for (var o = 0, a = {}; o < arguments.length; o++) {
                var s = arguments[o]
                for (var l in s) a[l] = s[l]
            }
            return a
        }
        function n(o) {
            return o.replace(/(%[0-9A-Z]{2})+/g, decodeURIComponent)
        }
        function i(o) {
            function a() {}
            function s(u, d, m) {
                if (typeof document != 'undefined') {
                    ;(m = r({ path: '/' }, a.defaults, m)),
                        typeof m.expires == 'number' &&
                            (m.expires = new Date(
                                new Date() * 1 + m.expires * 864e5
                            )),
                        (m.expires = m.expires ? m.expires.toUTCString() : '')
                    try {
                        var p = JSON.stringify(d)
                        ;/^[\{\[]/.test(p) && (d = p)
                    } catch {}
                    ;(d = o.write
                        ? o.write(d, u)
                        : encodeURIComponent(String(d)).replace(
                              /%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g,
                              decodeURIComponent
                          )),
                        (u = encodeURIComponent(String(u))
                            .replace(
                                /%(23|24|26|2B|5E|60|7C)/g,
                                decodeURIComponent
                            )
                            .replace(/[\(\)]/g, escape))
                    var x = ''
                    for (var _ in m)
                        !m[_] ||
                            ((x += '; ' + _),
                            m[_] !== !0 && (x += '=' + m[_].split(';')[0]))
                    return (document.cookie = u + '=' + d + x)
                }
            }
            function l(u, d) {
                if (typeof document != 'undefined') {
                    for (
                        var m = {},
                            p = document.cookie
                                ? document.cookie.split('; ')
                                : [],
                            x = 0;
                        x < p.length;
                        x++
                    ) {
                        var _ = p[x].split('='),
                            b = _.slice(1).join('=')
                        !d && b.charAt(0) === '"' && (b = b.slice(1, -1))
                        try {
                            var g = n(_[0])
                            if (((b = (o.read || o)(b, g) || n(b)), d))
                                try {
                                    b = JSON.parse(b)
                                } catch {}
                            if (((m[g] = b), u === g)) break
                        } catch {}
                    }
                    return u ? m[u] : m
                }
            }
            return (
                (a.set = s),
                (a.get = function (u) {
                    return l(u, !1)
                }),
                (a.getJSON = function (u) {
                    return l(u, !0)
                }),
                (a.remove = function (u, d) {
                    s(u, '', r(d, { expires: -1 }))
                }),
                (a.defaults = {}),
                (a.withConverter = i),
                a
            )
        }
        return i(function () {})
    })
})(di)
var tI = (function () {
    function e(r) {
        if (r.domain) this.domain = r.domain
        else
            throw new Error('The domain of cookieStorage can not be undefined.')
        if (
            (r.path ? (this.path = r.path) : (this.path = '/'),
            Object.prototype.hasOwnProperty.call(r, 'expires')
                ? (this.expires = r.expires)
                : (this.expires = 365),
            Object.prototype.hasOwnProperty.call(r, 'secure')
                ? (this.secure = r.secure)
                : (this.secure = !0),
            Object.prototype.hasOwnProperty.call(r, 'sameSite'))
        ) {
            if (!['strict', 'lax', 'none'].includes(r.sameSite))
                throw new Error(
                    'The sameSite value of cookieStorage must be "lax", "strict" or "none".'
                )
            if (r.sameSite === 'none' && !this.secure)
                throw new Error(
                    'sameSite = None requires the Secure attribute in latest browser versions.'
                )
            this.sameSite = r.sameSite
        } else this.sameSite = null
    }
    var t = e.prototype
    return (
        (t.setItem = function (n, i) {
            var o = {
                path: this.path,
                expires: this.expires,
                domain: this.domain,
                secure: this.secure,
            }
            return (
                this.sameSite && (o.sameSite = this.sameSite),
                di.exports.set(n, i, o),
                di.exports.get(n)
            )
        }),
        (t.getItem = function (n) {
            return di.exports.get(n)
        }),
        (t.removeItem = function (n) {
            var i = {
                path: this.path,
                expires: this.expires,
                domain: this.domain,
                secure: this.secure,
            }
            return (
                this.sameSite && (i.sameSite = this.sameSite),
                di.exports.remove(n, i)
            )
        }),
        (t.clear = function () {
            for (
                var n = di.exports.get(), i = Object.keys(n).length, o = 0;
                o < i;
                ++o
            )
                this.removeItem(Object.keys(n)[o])
            return {}
        }),
        e
    )
})()
export {
    Z5 as A,
    Xm as B,
    tI as C,
    J5 as F,
    XT as H,
    kT as I,
    eA as L,
    ir as R,
    vf as S,
    eI as a,
    xv as b,
    D5 as c,
    Y as d,
    Q5 as e,
    dT as f,
    Gm as g,
    Vm as h,
    Ym as i,
    Lm as j,
    hT as k,
    qT as l,
    Hk as m,
    X5 as n,
    EA as o,
    T as r,
}
