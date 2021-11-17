import {
    C as x,
    a as U,
    b as A,
    A as I,
    c as D,
    d,
    F as S,
    e as C,
    r as i,
    R as e,
    B as b,
    S as v,
    f as p,
    I as h,
    g as E,
    h as w,
    i as P,
    j as f,
    k as R,
    L as k,
    l as j,
    m as N,
    H,
    n as O,
    o as q,
} from './vendor.22e0a3b3.js'
const B = function () {
    const r = document.createElement('link').relList
    if (r && r.supports && r.supports('modulepreload')) return
    for (const t of document.querySelectorAll('link[rel="modulepreload"]')) s(t)
    new MutationObserver((t) => {
        for (const o of t)
            if (o.type === 'childList')
                for (const c of o.addedNodes)
                    c.tagName === 'LINK' && c.rel === 'modulepreload' && s(c)
    }).observe(document, { childList: !0, subtree: !0 })
    function l(t) {
        const o = {}
        return (
            t.integrity && (o.integrity = t.integrity),
            t.referrerpolicy && (o.referrerPolicy = t.referrerpolicy),
            t.crossorigin === 'use-credentials'
                ? (o.credentials = 'include')
                : t.crossorigin === 'anonymous'
                ? (o.credentials = 'omit')
                : (o.credentials = 'same-origin'),
            o
        )
    }
    function s(t) {
        if (t.ep) return
        t.ep = !0
        const o = l(t)
        fetch(t.href, o)
    }
}
B()
const M = {
    UserPoolId: 'ap-southeast-2_gw39jNQMX',
    ClientId: '58nmodulq3fcf1juh3gmjgfvog',
    Storage: new x({
        secure: !1,
        domain:
            window.location.hostname === 'localhost'
                ? 'localhost'
                : 'lawnman.club',
    }),
}
var L = new U(M)
const W = async (n, r) =>
        await new Promise((l, s) => {
            const t = {
                    Username: n,
                    Password: r,
                    Pool: L,
                    Storage: new x({
                        secure: !1,
                        domain:
                            window.location.hostname === 'localhost'
                                ? 'localhost'
                                : 'lawnman.club',
                    }),
                },
                o = new A(t),
                c = new I({ Username: n, Password: r })
            o.authenticateUser(c, {
                onSuccess: (a) => {
                    console.log('onSuccess: ', a), l(a)
                },
                onFailure: (a) => {
                    console.log('onFailure: ', a), s(a)
                },
                newPasswordRequired: (a) => {
                    console.log('newPasswordRequired: ', a), l(a)
                },
            })
        }),
    $ = async (n, r, l) => {
        const s = new D({ Name: 'name', Value: l })
        L.signUp(n, r, [s], [], (t, o) => {
            t && console.error(t), console.log(o)
        })
    },
    z = d(S),
    G = d(C)
function K() {
    const [n, r] = i.exports.useState(!1),
        l = () => r(!n),
        [s, t] = i.exports.useState(''),
        [o, c] = i.exports.useState(''),
        a = async (m) => {
            m.preventDefault()
            try {
                const g = await W(s, o)
                console.log('Logged In: ', g),
                    window.location.replace('http://stackoverflow.com')
            } catch (g) {
                console.error('Failed to Login: ', g)
            }
        }
    return e.createElement(
        b,
        { minW: { base: '90%', md: '468px' } },
        e.createElement(
            'form',
            { onSubmit: a },
            e.createElement(
                v,
                {
                    spacing: 4,
                    p: '1rem',
                    backgroundColor: 'whiteAlpha.900',
                    boxShadow: 'md',
                },
                e.createElement(
                    p,
                    null,
                    e.createElement(
                        h,
                        null,
                        e.createElement(E, {
                            pointerEvents: 'none',
                            children: e.createElement(z, { color: 'gray.300' }),
                        }),
                        e.createElement(w, {
                            type: 'email',
                            placeholder: 'email address',
                            onChange: (m) => t(m.target.value),
                        })
                    )
                ),
                e.createElement(
                    p,
                    null,
                    e.createElement(
                        h,
                        null,
                        e.createElement(E, {
                            pointerEvents: 'none',
                            color: 'gray.300',
                            children: e.createElement(G, { color: 'gray.300' }),
                        }),
                        e.createElement(w, {
                            type: n ? 'text' : 'password',
                            placeholder: 'Password',
                            onChange: (m) => c(m.target.value),
                        }),
                        e.createElement(
                            P,
                            { width: '4.5rem' },
                            e.createElement(
                                f,
                                { h: '1.75rem', size: 'sm', onClick: l },
                                n ? 'Hide' : 'Show'
                            )
                        )
                    ),
                    e.createElement(
                        R,
                        { textAlign: 'right' },
                        e.createElement(k, null, 'forgot password?')
                    )
                ),
                e.createElement(
                    f,
                    {
                        borderRadius: 0,
                        type: 'submit',
                        variant: 'solid',
                        colorScheme: 'teal',
                        width: 'full',
                    },
                    'Login'
                )
            )
        )
    )
}
const F = d(S),
    Q = d(C)
function T() {
    const [n, r] = i.exports.useState(!1),
        l = () => r(!n),
        [s, t] = i.exports.useState(''),
        [o, c] = i.exports.useState(''),
        [a, m] = i.exports.useState(''),
        g = async (u) => {
            u.preventDefault()
            try {
                const y = await $(o, a, s)
                console.log('Signed Up: ', y)
            } catch (y) {
                console.error('Failed to SignUp: ', y)
            }
        }
    return e.createElement(
        b,
        { minW: { base: '90%', md: '468px' } },
        e.createElement(
            'form',
            { onSubmit: g },
            e.createElement(
                v,
                {
                    spacing: 4,
                    p: '1rem',
                    backgroundColor: 'whiteAlpha.900',
                    boxShadow: 'md',
                },
                e.createElement(
                    p,
                    null,
                    e.createElement(
                        h,
                        null,
                        e.createElement(E, {
                            pointerEvents: 'none',
                            children: e.createElement(F, { color: 'gray.300' }),
                        }),
                        e.createElement(w, {
                            type: 'text',
                            placeholder: 'username',
                            onChange: (u) => t(u.target.value),
                        })
                    )
                ),
                e.createElement(
                    p,
                    null,
                    e.createElement(
                        h,
                        null,
                        e.createElement(E, {
                            pointerEvents: 'none',
                            children: e.createElement(F, { color: 'gray.300' }),
                        }),
                        e.createElement(w, {
                            type: 'email',
                            placeholder: 'email address',
                            onChange: (u) => c(u.target.value),
                        })
                    )
                ),
                e.createElement(
                    p,
                    null,
                    e.createElement(
                        h,
                        null,
                        e.createElement(E, {
                            pointerEvents: 'none',
                            color: 'gray.300',
                            children: e.createElement(Q, { color: 'gray.300' }),
                        }),
                        e.createElement(w, {
                            type: n ? 'text' : 'password',
                            placeholder: 'Password',
                            onChange: (u) => m(u.target.value),
                        }),
                        e.createElement(
                            P,
                            { width: '4.5rem' },
                            e.createElement(
                                f,
                                { h: '1.75rem', size: 'sm', onClick: l },
                                n ? 'Hide' : 'Show'
                            )
                        )
                    )
                ),
                e.createElement(
                    f,
                    {
                        borderRadius: 0,
                        type: 'submit',
                        variant: 'solid',
                        colorScheme: 'teal',
                        width: 'full',
                    },
                    'Signup'
                )
            )
        )
    )
}
d(S)
d(C)
const V = () => {
    const [n, r] = i.exports.useState(!1)
    return e.createElement(
        j,
        {
            flexDirection: 'column',
            width: '100wh',
            height: '100vh',
            backgroundColor: 'gray.200',
            justifyContent: 'center',
            alignItems: 'center',
        },
        e.createElement(
            v,
            {
                flexDir: 'column',
                mb: '2',
                justifyContent: 'center',
                alignItems: 'center',
            },
            e.createElement(N, { bg: 'teal.500' }),
            e.createElement(H, { color: 'teal.400' }, 'Welcome'),
            n ? e.createElement(T, null) : e.createElement(K, null)
        ),
        e.createElement(
            b,
            null,
            n ? 'Go back to ' : 'New to us? ',
            e.createElement(
                k,
                { color: 'teal.500', href: '#', onClick: () => r(!n) },
                n ? 'Login' : 'Sign Up'
            )
        )
    )
}
O.render(
    e.createElement(
        i.exports.StrictMode,
        null,
        e.createElement(q, null, e.createElement(V, null))
    ),
    document.getElementById('root')
)
