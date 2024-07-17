(function () {
    const t = document.createElement("link").relList;
    if (t && t.supports && t.supports("modulepreload")) return;
    for (const r of document.querySelectorAll('link[rel="modulepreload"]')) s(r);
    new MutationObserver(r => {
        for (const o of r) if (o.type === "childList") for (const i of o.addedNodes) i.tagName === "LINK" && i.rel === "modulepreload" && s(i)
    }).observe(document, {childList: !0, subtree: !0});

    function n(r) {
        const o = {};
        return r.integrity && (o.integrity = r.integrity), r.referrerPolicy && (o.referrerPolicy = r.referrerPolicy), r.crossOrigin === "use-credentials" ? o.credentials = "include" : r.crossOrigin === "anonymous" ? o.credentials = "omit" : o.credentials = "same-origin", o
    }

    function s(r) {
        if (r.ep) return;
        r.ep = !0;
        const o = n(r);
        fetch(r.href, o)
    }
})();

/**
 * @vue/shared v3.4.21
 * (c) 2018-present Yuxi (Evan) You and Vue contributors
 * @license MIT
 **/function os(e, t) {
    const n = new Set(e.split(","));
    return t ? s => n.has(s.toLowerCase()) : s => n.has(s)
}

const J = {}, yt = [], ve = () => {
    }, Ko = () => !1,
    hn = e => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && (e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97),
    is = e => e.startsWith("onUpdate:"), oe = Object.assign, ls = (e, t) => {
        const n = e.indexOf(t);
        n > -1 && e.splice(n, 1)
    }, Wo = Object.prototype.hasOwnProperty, D = (e, t) => Wo.call(e, t), H = Array.isArray,
    vt = e => pn(e) === "[object Map]", Tr = e => pn(e) === "[object Set]", j = e => typeof e == "function",
    te = e => typeof e == "string", St = e => typeof e == "symbol", Z = e => e !== null && typeof e == "object",
    Mr = e => (Z(e) || j(e)) && j(e.then) && j(e.catch), $r = Object.prototype.toString, pn = e => $r.call(e),
    Qo = e => pn(e).slice(8, -1), Nr = e => pn(e) === "[object Object]",
    cs = e => te(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e,
    $t = os(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),
    gn = e => {
        const t = Object.create(null);
        return n => t[n] || (t[n] = e(n))
    }, qo = /-(\w)/g, Te = gn(e => e.replace(qo, (t, n) => n ? n.toUpperCase() : "")), Go = /\B([A-Z])/g,
    Ct = gn(e => e.replace(Go, "-$1").toLowerCase()), mn = gn(e => e.charAt(0).toUpperCase() + e.slice(1)),
    Pn = gn(e => e ? `on${mn(e)}` : ""), Je = (e, t) => !Object.is(e, t), On = (e, t) => {
        for (let n = 0; n < e.length; n++) e[n](t)
    }, cn = (e, t, n) => {
        Object.defineProperty(e, t, {configurable: !0, enumerable: !1, value: n})
    }, Jo = e => {
        const t = parseFloat(e);
        return isNaN(t) ? e : t
    };
let Ts;
const Hr = () => Ts || (Ts = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});

function us(e) {
    if (H(e)) {
        const t = {};
        for (let n = 0; n < e.length; n++) {
            const s = e[n], r = te(s) ? ei(s) : us(s);
            if (r) for (const o in r) t[o] = r[o]
        }
        return t
    } else if (te(e) || Z(e)) return e
}

const Yo = /;(?![^(]*\))/g, Xo = /:([^]+)/, Zo = /\/\*[^]*?\*\//g;

function ei(e) {
    const t = {};
    return e.replace(Zo, "").split(Yo).forEach(n => {
        if (n) {
            const s = n.split(Xo);
            s.length > 1 && (t[s[0].trim()] = s[1].trim())
        }
    }), t
}

function fs(e) {
    let t = "";
    if (te(e)) t = e; else if (H(e)) for (let n = 0; n < e.length; n++) {
        const s = fs(e[n]);
        s && (t += s + " ")
    } else if (Z(e)) for (const n in e) e[n] && (t += n + " ");
    return t.trim()
}

const ti = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly", ni = os(ti);

function Fr(e) {
    return !!e || e === ""
}

const si = e => te(e) ? e : e == null ? "" : H(e) || Z(e) && (e.toString === $r || !j(e.toString)) ? JSON.stringify(e, jr, 2) : String(e),
    jr = (e, t) => t && t.__v_isRef ? jr(e, t.value) : vt(t) ? {[`Map(${t.size})`]: [...t.entries()].reduce((n, [s, r], o) => (n[Ln(s, o) + " =>"] = r, n), {})} : Tr(t) ? {[`Set(${t.size})`]: [...t.values()].map(n => Ln(n))} : St(t) ? Ln(t) : Z(t) && !H(t) && !Nr(t) ? String(t) : t,
    Ln = (e, t = "") => {
        var n;
        return St(e) ? `Symbol(${(n = e.description) != null ? n : t})` : e
    };
/**
 * @vue/reactivity v3.4.21
 * (c) 2018-present Yuxi (Evan) You and Vue contributors
 * @license MIT
 **/let Ae;

class ri {
    constructor(t = !1) {
        this.detached = t, this._active = !0, this.effects = [], this.cleanups = [], this.parent = Ae, !t && Ae && (this.index = (Ae.scopes || (Ae.scopes = [])).push(this) - 1)
    }

    get active() {
        return this._active
    }

    run(t) {
        if (this._active) {
            const n = Ae;
            try {
                return Ae = this, t()
            } finally {
                Ae = n
            }
        }
    }

    on() {
        Ae = this
    }

    off() {
        Ae = this.parent
    }

    stop(t) {
        if (this._active) {
            let n, s;
            for (n = 0, s = this.effects.length; n < s; n++) this.effects[n].stop();
            for (n = 0, s = this.cleanups.length; n < s; n++) this.cleanups[n]();
            if (this.scopes) for (n = 0, s = this.scopes.length; n < s; n++) this.scopes[n].stop(!0);
            if (!this.detached && this.parent && !t) {
                const r = this.parent.scopes.pop();
                r && r !== this && (this.parent.scopes[this.index] = r, r.index = this.index)
            }
            this.parent = void 0, this._active = !1
        }
    }
}

function oi(e, t = Ae) {
    t && t.active && t.effects.push(e)
}

function ii() {
    return Ae
}

let it;

class as {
    constructor(t, n, s, r) {
        this.fn = t, this.trigger = n, this.scheduler = s, this.active = !0, this.deps = [], this._dirtyLevel = 4, this._trackId = 0, this._runnings = 0, this._shouldSchedule = !1, this._depsLength = 0, oi(this, r)
    }

    get dirty() {
        if (this._dirtyLevel === 2 || this._dirtyLevel === 3) {
            this._dirtyLevel = 1, ut();
            for (let t = 0; t < this._depsLength; t++) {
                const n = this.deps[t];
                if (n.computed && (li(n.computed), this._dirtyLevel >= 4)) break
            }
            this._dirtyLevel === 1 && (this._dirtyLevel = 0), ft()
        }
        return this._dirtyLevel >= 4
    }

    set dirty(t) {
        this._dirtyLevel = t ? 4 : 0
    }

    run() {
        if (this._dirtyLevel = 0, !this.active) return this.fn();
        let t = qe, n = it;
        try {
            return qe = !0, it = this, this._runnings++, Ms(this), this.fn()
        } finally {
            $s(this), this._runnings--, it = n, qe = t
        }
    }

    stop() {
        var t;
        this.active && (Ms(this), $s(this), (t = this.onStop) == null || t.call(this), this.active = !1)
    }
}

function li(e) {
    return e.value
}

function Ms(e) {
    e._trackId++, e._depsLength = 0
}

function $s(e) {
    if (e.deps.length > e._depsLength) {
        for (let t = e._depsLength; t < e.deps.length; t++) Br(e.deps[t], e);
        e.deps.length = e._depsLength
    }
}

function Br(e, t) {
    const n = e.get(t);
    n !== void 0 && t._trackId !== n && (e.delete(t), e.size === 0 && e.cleanup())
}

let qe = !0, Dn = 0;
const Ur = [];

function ut() {
    Ur.push(qe), qe = !1
}

function ft() {
    const e = Ur.pop();
    qe = e === void 0 ? !0 : e
}

function ds() {
    Dn++
}

function hs() {
    for (Dn--; !Dn && Vn.length;) Vn.shift()()
}

function kr(e, t, n) {
    if (t.get(e) !== e._trackId) {
        t.set(e, e._trackId);
        const s = e.deps[e._depsLength];
        s !== t ? (s && Br(s, e), e.deps[e._depsLength++] = t) : e._depsLength++
    }
}

const Vn = [];

function Dr(e, t, n) {
    ds();
    for (const s of e.keys()) {
        let r;
        s._dirtyLevel < t && (r ?? (r = e.get(s) === s._trackId)) && (s._shouldSchedule || (s._shouldSchedule = s._dirtyLevel === 0), s._dirtyLevel = t), s._shouldSchedule && (r ?? (r = e.get(s) === s._trackId)) && (s.trigger(), (!s._runnings || s.allowRecurse) && s._dirtyLevel !== 2 && (s._shouldSchedule = !1, s.scheduler && Vn.push(s.scheduler)))
    }
    hs()
}

const Vr = (e, t) => {
    const n = new Map;
    return n.cleanup = e, n.computed = t, n
}, zn = new WeakMap, lt = Symbol(""), Kn = Symbol("");

function pe(e, t, n) {
    if (qe && it) {
        let s = zn.get(e);
        s || zn.set(e, s = new Map);
        let r = s.get(n);
        r || s.set(n, r = Vr(() => s.delete(n))), kr(it, r)
    }
}

function He(e, t, n, s, r, o) {
    const i = zn.get(e);
    if (!i) return;
    let c = [];
    if (t === "clear") c = [...i.values()]; else if (n === "length" && H(e)) {
        const l = Number(s);
        i.forEach((a, f) => {
            (f === "length" || !St(f) && f >= l) && c.push(a)
        })
    } else switch (n !== void 0 && c.push(i.get(n)), t) {
        case"add":
            H(e) ? cs(n) && c.push(i.get("length")) : (c.push(i.get(lt)), vt(e) && c.push(i.get(Kn)));
            break;
        case"delete":
            H(e) || (c.push(i.get(lt)), vt(e) && c.push(i.get(Kn)));
            break;
        case"set":
            vt(e) && c.push(i.get(lt));
            break
    }
    ds();
    for (const l of c) l && Dr(l, 4);
    hs()
}

const ci = os("__proto__,__v_isRef,__isVue"),
    zr = new Set(Object.getOwnPropertyNames(Symbol).filter(e => e !== "arguments" && e !== "caller").map(e => Symbol[e]).filter(St)),
    Ns = ui();

function ui() {
    const e = {};
    return ["includes", "indexOf", "lastIndexOf"].forEach(t => {
        e[t] = function (...n) {
            const s = V(this);
            for (let o = 0, i = this.length; o < i; o++) pe(s, "get", o + "");
            const r = s[t](...n);
            return r === -1 || r === !1 ? s[t](...n.map(V)) : r
        }
    }), ["push", "pop", "shift", "unshift", "splice"].forEach(t => {
        e[t] = function (...n) {
            ut(), ds();
            const s = V(this)[t].apply(this, n);
            return hs(), ft(), s
        }
    }), e
}

function fi(e) {
    const t = V(this);
    return pe(t, "has", e), t.hasOwnProperty(e)
}

class Kr {
    constructor(t = !1, n = !1) {
        this._isReadonly = t, this._isShallow = n
    }

    get(t, n, s) {
        const r = this._isReadonly, o = this._isShallow;
        if (n === "__v_isReactive") return !r;
        if (n === "__v_isReadonly") return r;
        if (n === "__v_isShallow") return o;
        if (n === "__v_raw") return s === (r ? o ? wi : Gr : o ? qr : Qr).get(t) || Object.getPrototypeOf(t) === Object.getPrototypeOf(s) ? t : void 0;
        const i = H(t);
        if (!r) {
            if (i && D(Ns, n)) return Reflect.get(Ns, n, s);
            if (n === "hasOwnProperty") return fi
        }
        const c = Reflect.get(t, n, s);
        return (St(n) ? zr.has(n) : ci(n)) || (r || pe(t, "get", n), o) ? c : ge(c) ? i && cs(n) ? c : c.value : Z(c) ? r ? Yr(c) : Ye(c) : c
    }
}

class Wr extends Kr {
    constructor(t = !1) {
        super(!1, t)
    }

    set(t, n, s, r) {
        let o = t[n];
        if (!this._isShallow) {
            const l = Et(o);
            if (!un(s) && !Et(s) && (o = V(o), s = V(s)), !H(t) && ge(o) && !ge(s)) return l ? !1 : (o.value = s, !0)
        }
        const i = H(t) && cs(n) ? Number(n) < t.length : D(t, n), c = Reflect.set(t, n, s, r);
        return t === V(r) && (i ? Je(s, o) && He(t, "set", n, s) : He(t, "add", n, s)), c
    }

    deleteProperty(t, n) {
        const s = D(t, n);
        t[n];
        const r = Reflect.deleteProperty(t, n);
        return r && s && He(t, "delete", n, void 0), r
    }

    has(t, n) {
        const s = Reflect.has(t, n);
        return (!St(n) || !zr.has(n)) && pe(t, "has", n), s
    }

    ownKeys(t) {
        return pe(t, "iterate", H(t) ? "length" : lt), Reflect.ownKeys(t)
    }
}

class ai extends Kr {
    constructor(t = !1) {
        super(!0, t)
    }

    set(t, n) {
        return !0
    }

    deleteProperty(t, n) {
        return !0
    }
}

const di = new Wr, hi = new ai, pi = new Wr(!0), ps = e => e, _n = e => Reflect.getPrototypeOf(e);

function Jt(e, t, n = !1, s = !1) {
    e = e.__v_raw;
    const r = V(e), o = V(t);
    n || (Je(t, o) && pe(r, "get", t), pe(r, "get", o));
    const {has: i} = _n(r), c = s ? ps : n ? _s : kt;
    if (i.call(r, t)) return c(e.get(t));
    if (i.call(r, o)) return c(e.get(o));
    e !== r && e.get(t)
}

function Yt(e, t = !1) {
    const n = this.__v_raw, s = V(n), r = V(e);
    return t || (Je(e, r) && pe(s, "has", e), pe(s, "has", r)), e === r ? n.has(e) : n.has(e) || n.has(r)
}

function Xt(e, t = !1) {
    return e = e.__v_raw, !t && pe(V(e), "iterate", lt), Reflect.get(e, "size", e)
}

function Hs(e) {
    e = V(e);
    const t = V(this);
    return _n(t).has.call(t, e) || (t.add(e), He(t, "add", e, e)), this
}

function Fs(e, t) {
    t = V(t);
    const n = V(this), {has: s, get: r} = _n(n);
    let o = s.call(n, e);
    o || (e = V(e), o = s.call(n, e));
    const i = r.call(n, e);
    return n.set(e, t), o ? Je(t, i) && He(n, "set", e, t) : He(n, "add", e, t), this
}

function js(e) {
    const t = V(this), {has: n, get: s} = _n(t);
    let r = n.call(t, e);
    r || (e = V(e), r = n.call(t, e)), s && s.call(t, e);
    const o = t.delete(e);
    return r && He(t, "delete", e, void 0), o
}

function Bs() {
    const e = V(this), t = e.size !== 0, n = e.clear();
    return t && He(e, "clear", void 0, void 0), n
}

function Zt(e, t) {
    return function (s, r) {
        const o = this, i = o.__v_raw, c = V(i), l = t ? ps : e ? _s : kt;
        return !e && pe(c, "iterate", lt), i.forEach((a, f) => s.call(r, l(a), l(f), o))
    }
}

function en(e, t, n) {
    return function (...s) {
        const r = this.__v_raw, o = V(r), i = vt(o), c = e === "entries" || e === Symbol.iterator && i,
            l = e === "keys" && i, a = r[e](...s), f = n ? ps : t ? _s : kt;
        return !t && pe(o, "iterate", l ? Kn : lt), {
            next() {
                const {value: h, done: p} = a.next();
                return p ? {value: h, done: p} : {value: c ? [f(h[0]), f(h[1])] : f(h), done: p}
            }, [Symbol.iterator]() {
                return this
            }
        }
    }
}

function De(e) {
    return function (...t) {
        return e === "delete" ? !1 : e === "clear" ? void 0 : this
    }
}

function gi() {
    const e = {
        get(o) {
            return Jt(this, o)
        }, get size() {
            return Xt(this)
        }, has: Yt, add: Hs, set: Fs, delete: js, clear: Bs, forEach: Zt(!1, !1)
    }, t = {
        get(o) {
            return Jt(this, o, !1, !0)
        }, get size() {
            return Xt(this)
        }, has: Yt, add: Hs, set: Fs, delete: js, clear: Bs, forEach: Zt(!1, !0)
    }, n = {
        get(o) {
            return Jt(this, o, !0)
        }, get size() {
            return Xt(this, !0)
        }, has(o) {
            return Yt.call(this, o, !0)
        }, add: De("add"), set: De("set"), delete: De("delete"), clear: De("clear"), forEach: Zt(!0, !1)
    }, s = {
        get(o) {
            return Jt(this, o, !0, !0)
        }, get size() {
            return Xt(this, !0)
        }, has(o) {
            return Yt.call(this, o, !0)
        }, add: De("add"), set: De("set"), delete: De("delete"), clear: De("clear"), forEach: Zt(!0, !0)
    };
    return ["keys", "values", "entries", Symbol.iterator].forEach(o => {
        e[o] = en(o, !1, !1), n[o] = en(o, !0, !1), t[o] = en(o, !1, !0), s[o] = en(o, !0, !0)
    }), [e, n, t, s]
}

const [mi, _i, yi, vi] = gi();

function gs(e, t) {
    const n = t ? e ? vi : yi : e ? _i : mi;
    return (s, r, o) => r === "__v_isReactive" ? !e : r === "__v_isReadonly" ? e : r === "__v_raw" ? s : Reflect.get(D(n, r) && r in s ? n : s, r, o)
}

const bi = {get: gs(!1, !1)}, Ai = {get: gs(!1, !0)}, Ei = {get: gs(!0, !1)}, Qr = new WeakMap, qr = new WeakMap,
    Gr = new WeakMap, wi = new WeakMap;

function xi(e) {
    switch (e) {
        case"Object":
        case"Array":
            return 1;
        case"Map":
        case"Set":
        case"WeakMap":
        case"WeakSet":
            return 2;
        default:
            return 0
    }
}

function Ri(e) {
    return e.__v_skip || !Object.isExtensible(e) ? 0 : xi(Qo(e))
}

function Ye(e) {
    return Et(e) ? e : ms(e, !1, di, bi, Qr)
}

function Jr(e) {
    return ms(e, !1, pi, Ai, qr)
}

function Yr(e) {
    return ms(e, !0, hi, Ei, Gr)
}

function ms(e, t, n, s, r) {
    if (!Z(e) || e.__v_raw && !(t && e.__v_isReactive)) return e;
    const o = r.get(e);
    if (o) return o;
    const i = Ri(e);
    if (i === 0) return e;
    const c = new Proxy(e, i === 2 ? s : n);
    return r.set(e, c), c
}

function bt(e) {
    return Et(e) ? bt(e.__v_raw) : !!(e && e.__v_isReactive)
}

function Et(e) {
    return !!(e && e.__v_isReadonly)
}

function un(e) {
    return !!(e && e.__v_isShallow)
}

function Xr(e) {
    return bt(e) || Et(e)
}

function V(e) {
    const t = e && e.__v_raw;
    return t ? V(t) : e
}

function Zr(e) {
    return Object.isExtensible(e) && cn(e, "__v_skip", !0), e
}

const kt = e => Z(e) ? Ye(e) : e, _s = e => Z(e) ? Yr(e) : e;

class eo {
    constructor(t, n, s, r) {
        this.getter = t, this._setter = n, this.dep = void 0, this.__v_isRef = !0, this.__v_isReadonly = !1, this.effect = new as(() => t(this._value), () => nn(this, this.effect._dirtyLevel === 2 ? 2 : 3)), this.effect.computed = this, this.effect.active = this._cacheable = !r, this.__v_isReadonly = s
    }

    get value() {
        const t = V(this);
        return (!t._cacheable || t.effect.dirty) && Je(t._value, t._value = t.effect.run()) && nn(t, 4), to(t), t.effect._dirtyLevel >= 2 && nn(t, 2), t._value
    }

    set value(t) {
        this._setter(t)
    }

    get _dirty() {
        return this.effect.dirty
    }

    set _dirty(t) {
        this.effect.dirty = t
    }
}

function Si(e, t, n = !1) {
    let s, r;
    const o = j(e);
    return o ? (s = e, r = ve) : (s = e.get, r = e.set), new eo(s, r, o || !r, n)
}

function to(e) {
    var t;
    qe && it && (e = V(e), kr(it, (t = e.dep) != null ? t : e.dep = Vr(() => e.dep = void 0, e instanceof eo ? e : void 0)))
}

function nn(e, t = 4, n) {
    e = V(e);
    const s = e.dep;
    s && Dr(s, t)
}

function ge(e) {
    return !!(e && e.__v_isRef === !0)
}

function Dt(e) {
    return no(e, !1)
}

function Ci(e) {
    return no(e, !0)
}

function no(e, t) {
    return ge(e) ? e : new Pi(e, t)
}

class Pi {
    constructor(t, n) {
        this.__v_isShallow = n, this.dep = void 0, this.__v_isRef = !0, this._rawValue = n ? t : V(t), this._value = n ? t : kt(t)
    }

    get value() {
        return to(this), this._value
    }

    set value(t) {
        const n = this.__v_isShallow || un(t) || Et(t);
        t = n ? t : V(t), Je(t, this._rawValue) && (this._rawValue = t, this._value = n ? t : kt(t), nn(this, 4))
    }
}

function Fe(e) {
    return ge(e) ? e.value : e
}

const Oi = {
    get: (e, t, n) => Fe(Reflect.get(e, t, n)), set: (e, t, n, s) => {
        const r = e[t];
        return ge(r) && !ge(n) ? (r.value = n, !0) : Reflect.set(e, t, n, s)
    }
};

function so(e) {
    return bt(e) ? e : new Proxy(e, Oi)
}

/**
 * @vue/runtime-core v3.4.21
 * (c) 2018-present Yuxi (Evan) You and Vue contributors
 * @license MIT
 **/function Ge(e, t, n, s) {
    try {
        return s ? e(...s) : e()
    } catch (r) {
        yn(r, t, n)
    }
}

function we(e, t, n, s) {
    if (j(e)) {
        const o = Ge(e, t, n, s);
        return o && Mr(o) && o.catch(i => {
            yn(i, t, n)
        }), o
    }
    const r = [];
    for (let o = 0; o < e.length; o++) r.push(we(e[o], t, n, s));
    return r
}

function yn(e, t, n, s = !0) {
    const r = t ? t.vnode : null;
    if (t) {
        let o = t.parent;
        const i = t.proxy, c = `https://vuejs.org/error-reference/#runtime-${n}`;
        for (; o;) {
            const a = o.ec;
            if (a) {
                for (let f = 0; f < a.length; f++) if (a[f](e, i, c) === !1) return
            }
            o = o.parent
        }
        const l = t.appContext.config.errorHandler;
        if (l) {
            Ge(l, null, 10, [e, i, c]);
            return
        }
    }
    Li(e, n, r, s)
}

function Li(e, t, n, s = !0) {
    console.error(e)
}

let Vt = !1, Wn = !1;
const le = [];
let Ie = 0;
const At = [];
let ze = null, rt = 0;
const ro = Promise.resolve();
let ys = null;

function mt(e) {
    const t = ys || ro;
    return e ? t.then(this ? e.bind(this) : e) : t
}

function Ii(e) {
    let t = Ie + 1, n = le.length;
    for (; t < n;) {
        const s = t + n >>> 1, r = le[s], o = zt(r);
        o < e || o === e && r.pre ? t = s + 1 : n = s
    }
    return t
}

function vs(e) {
    (!le.length || !le.includes(e, Vt && e.allowRecurse ? Ie + 1 : Ie)) && (e.id == null ? le.push(e) : le.splice(Ii(e.id), 0, e), oo())
}

function oo() {
    !Vt && !Wn && (Wn = !0, ys = ro.then(lo))
}

function Ti(e) {
    const t = le.indexOf(e);
    t > Ie && le.splice(t, 1)
}

function Mi(e) {
    H(e) ? At.push(...e) : (!ze || !ze.includes(e, e.allowRecurse ? rt + 1 : rt)) && At.push(e), oo()
}

function Us(e, t, n = Vt ? Ie + 1 : 0) {
    for (; n < le.length; n++) {
        const s = le[n];
        if (s && s.pre) {
            if (e && s.id !== e.uid) continue;
            le.splice(n, 1), n--, s()
        }
    }
}

function io(e) {
    if (At.length) {
        const t = [...new Set(At)].sort((n, s) => zt(n) - zt(s));
        if (At.length = 0, ze) {
            ze.push(...t);
            return
        }
        for (ze = t, rt = 0; rt < ze.length; rt++) ze[rt]();
        ze = null, rt = 0
    }
}

const zt = e => e.id == null ? 1 / 0 : e.id, $i = (e, t) => {
    const n = zt(e) - zt(t);
    if (n === 0) {
        if (e.pre && !t.pre) return -1;
        if (t.pre && !e.pre) return 1
    }
    return n
};

function lo(e) {
    Wn = !1, Vt = !0, le.sort($i);
    try {
        for (Ie = 0; Ie < le.length; Ie++) {
            const t = le[Ie];
            t && t.active !== !1 && Ge(t, null, 14)
        }
    } finally {
        Ie = 0, le.length = 0, io(), Vt = !1, ys = null, (le.length || At.length) && lo()
    }
}

function Ni(e, t, ...n) {
    if (e.isUnmounted) return;
    const s = e.vnode.props || J;
    let r = n;
    const o = t.startsWith("update:"), i = o && t.slice(7);
    if (i && i in s) {
        const f = `${i === "modelValue" ? "model" : i}Modifiers`, {number: h, trim: p} = s[f] || J;
        p && (r = n.map(v => te(v) ? v.trim() : v)), h && (r = n.map(Jo))
    }
    let c, l = s[c = Pn(t)] || s[c = Pn(Te(t))];
    !l && o && (l = s[c = Pn(Ct(t))]), l && we(l, e, 6, r);
    const a = s[c + "Once"];
    if (a) {
        if (!e.emitted) e.emitted = {}; else if (e.emitted[c]) return;
        e.emitted[c] = !0, we(a, e, 6, r)
    }
}

function co(e, t, n = !1) {
    const s = t.emitsCache, r = s.get(e);
    if (r !== void 0) return r;
    const o = e.emits;
    let i = {}, c = !1;
    if (!j(e)) {
        const l = a => {
            const f = co(a, t, !0);
            f && (c = !0, oe(i, f))
        };
        !n && t.mixins.length && t.mixins.forEach(l), e.extends && l(e.extends), e.mixins && e.mixins.forEach(l)
    }
    return !o && !c ? (Z(e) && s.set(e, null), null) : (H(o) ? o.forEach(l => i[l] = null) : oe(i, o), Z(e) && s.set(e, i), i)
}

function vn(e, t) {
    return !e || !hn(t) ? !1 : (t = t.slice(2).replace(/Once$/, ""), D(e, t[0].toLowerCase() + t.slice(1)) || D(e, Ct(t)) || D(e, t))
}

let he = null, uo = null;

function fn(e) {
    const t = he;
    return he = e, uo = e && e.type.__scopeId || null, t
}

function Hi(e, t = he, n) {
    if (!t || e._n) return e;
    const s = (...r) => {
        s._d && Ys(-1);
        const o = fn(t);
        let i;
        try {
            i = e(...r)
        } finally {
            fn(o), s._d && Ys(1)
        }
        return i
    };
    return s._n = !0, s._c = !0, s._d = !0, s
}

function In(e) {
    const {
        type: t,
        vnode: n,
        proxy: s,
        withProxy: r,
        props: o,
        propsOptions: [i],
        slots: c,
        attrs: l,
        emit: a,
        render: f,
        renderCache: h,
        data: p,
        setupState: v,
        ctx: P,
        inheritAttrs: M
    } = e;
    let F, L;
    const $ = fn(e);
    try {
        if (n.shapeFlag & 4) {
            const z = r || s, ee = z;
            F = Le(f.call(ee, z, h, o, v, p, P)), L = l
        } else {
            const z = t;
            F = Le(z.length > 1 ? z(o, {attrs: l, slots: c, emit: a}) : z(o, null)), L = t.props ? l : Fi(l)
        }
    } catch (z) {
        jt.length = 0, yn(z, e, 1), F = re(ct)
    }
    let B = F;
    if (L && M !== !1) {
        const z = Object.keys(L), {shapeFlag: ee} = B;
        z.length && ee & 7 && (i && z.some(is) && (L = ji(L, i)), B = wt(B, L))
    }
    return n.dirs && (B = wt(B), B.dirs = B.dirs ? B.dirs.concat(n.dirs) : n.dirs), n.transition && (B.transition = n.transition), F = B, fn($), F
}

const Fi = e => {
    let t;
    for (const n in e) (n === "class" || n === "style" || hn(n)) && ((t || (t = {}))[n] = e[n]);
    return t
}, ji = (e, t) => {
    const n = {};
    for (const s in e) (!is(s) || !(s.slice(9) in t)) && (n[s] = e[s]);
    return n
};

function Bi(e, t, n) {
    const {props: s, children: r, component: o} = e, {props: i, children: c, patchFlag: l} = t, a = o.emitsOptions;
    if (t.dirs || t.transition) return !0;
    if (n && l >= 0) {
        if (l & 1024) return !0;
        if (l & 16) return s ? ks(s, i, a) : !!i;
        if (l & 8) {
            const f = t.dynamicProps;
            for (let h = 0; h < f.length; h++) {
                const p = f[h];
                if (i[p] !== s[p] && !vn(a, p)) return !0
            }
        }
    } else return (r || c) && (!c || !c.$stable) ? !0 : s === i ? !1 : s ? i ? ks(s, i, a) : !0 : !!i;
    return !1
}

function ks(e, t, n) {
    const s = Object.keys(t);
    if (s.length !== Object.keys(e).length) return !0;
    for (let r = 0; r < s.length; r++) {
        const o = s[r];
        if (t[o] !== e[o] && !vn(n, o)) return !0
    }
    return !1
}

function Ui({vnode: e, parent: t}, n) {
    for (; t;) {
        const s = t.subTree;
        if (s.suspense && s.suspense.activeBranch === e && (s.el = e.el), s === e) (e = t.vnode).el = n, t = t.parent; else break
    }
}

const fo = "components", ki = "directives";

function Di(e, t) {
    return ao(fo, e, !0, t) || e
}

const Vi = Symbol.for("v-ndc");

function Gu(e) {
    return ao(ki, e)
}

function ao(e, t, n = !0, s = !1) {
    const r = he || ce;
    if (r) {
        const o = r.type;
        if (e === fo) {
            const c = Fl(o, !1);
            if (c && (c === t || c === Te(t) || c === mn(Te(t)))) return o
        }
        const i = Ds(r[e] || o[e], t) || Ds(r.appContext[e], t);
        return !i && s ? o : i
    }
}

function Ds(e, t) {
    return e && (e[t] || e[Te(t)] || e[mn(Te(t))])
}

const zi = e => e.__isSuspense;

function Ki(e, t) {
    t && t.pendingBranch ? H(e) ? t.effects.push(...e) : t.effects.push(e) : Mi(e)
}

const Wi = Symbol.for("v-scx"), Qi = () => je(Wi), tn = {};

function Nt(e, t, n) {
    return ho(e, t, n)
}

function ho(e, t, {immediate: n, deep: s, flush: r, once: o, onTrack: i, onTrigger: c} = J) {
    if (t && o) {
        const U = t;
        t = (...ue) => {
            U(...ue), ee()
        }
    }
    const l = ce, a = U => s === !0 ? U : ot(U, s === !1 ? 1 : void 0);
    let f, h = !1, p = !1;
    if (ge(e) ? (f = () => e.value, h = un(e)) : bt(e) ? (f = () => a(e), h = !0) : H(e) ? (p = !0, h = e.some(U => bt(U) || un(U)), f = () => e.map(U => {
        if (ge(U)) return U.value;
        if (bt(U)) return a(U);
        if (j(U)) return Ge(U, l, 2)
    })) : j(e) ? t ? f = () => Ge(e, l, 2) : f = () => (v && v(), we(e, l, 3, [P])) : f = ve, t && s) {
        const U = f;
        f = () => ot(U())
    }
    let v, P = U => {
        v = B.onStop = () => {
            Ge(U, l, 4), v = B.onStop = void 0
        }
    }, M;
    if (Rn) if (P = ve, t ? n && we(t, l, 3, [f(), p ? [] : void 0, P]) : f(), r === "sync") {
        const U = Qi();
        M = U.__watcherHandles || (U.__watcherHandles = [])
    } else return ve;
    let F = p ? new Array(e.length).fill(tn) : tn;
    const L = () => {
        if (!(!B.active || !B.dirty)) if (t) {
            const U = B.run();
            (s || h || (p ? U.some((ue, ye) => Je(ue, F[ye])) : Je(U, F))) && (v && v(), we(t, l, 3, [U, F === tn ? void 0 : p && F[0] === tn ? [] : F, P]), F = U)
        } else B.run()
    };
    L.allowRecurse = !!t;
    let $;
    r === "sync" ? $ = L : r === "post" ? $ = () => de(L, l && l.suspense) : (L.pre = !0, l && (L.id = l.uid), $ = () => vs(L));
    const B = new as(f, ve, $), z = ii(), ee = () => {
        B.stop(), z && ls(z.effects, B)
    };
    return t ? n ? L() : F = B.run() : r === "post" ? de(B.run.bind(B), l && l.suspense) : B.run(), M && M.push(ee), ee
}

function qi(e, t, n) {
    const s = this.proxy, r = te(e) ? e.includes(".") ? po(s, e) : () => s[e] : e.bind(s, s);
    let o;
    j(t) ? o = t : (o = t.handler, n = t);
    const i = qt(this), c = ho(r, o.bind(s), n);
    return i(), c
}

function po(e, t) {
    const n = t.split(".");
    return () => {
        let s = e;
        for (let r = 0; r < n.length && s; r++) s = s[n[r]];
        return s
    }
}

function ot(e, t, n = 0, s) {
    if (!Z(e) || e.__v_skip) return e;
    if (t && t > 0) {
        if (n >= t) return e;
        n++
    }
    if (s = s || new Set, s.has(e)) return e;
    if (s.add(e), ge(e)) ot(e.value, t, n, s); else if (H(e)) for (let r = 0; r < e.length; r++) ot(e[r], t, n, s); else if (Tr(e) || vt(e)) e.forEach(r => {
        ot(r, t, n, s)
    }); else if (Nr(e)) for (const r in e) ot(e[r], t, n, s);
    return e
}

function Ju(e, t) {
    if (he === null) return e;
    const n = Sn(he) || he.proxy, s = e.dirs || (e.dirs = []);
    for (let r = 0; r < t.length; r++) {
        let [o, i, c, l = J] = t[r];
        o && (j(o) && (o = {mounted: o, updated: o}), o.deep && ot(i), s.push({
            dir: o,
            instance: n,
            value: i,
            oldValue: void 0,
            arg: c,
            modifiers: l
        }))
    }
    return e
}

function tt(e, t, n, s) {
    const r = e.dirs, o = t && t.dirs;
    for (let i = 0; i < r.length; i++) {
        const c = r[i];
        o && (c.oldValue = o[i].value);
        let l = c.dir[s];
        l && (ut(), we(l, n, 8, [e.el, c, e, t]), ft())
    }
}/*! #__NO_SIDE_EFFECTS__ */
function bn(e, t) {
    return j(e) ? oe({name: e.name}, t, {setup: e}) : e
}

const sn = e => !!e.type.__asyncLoader, go = e => e.type.__isKeepAlive;

function Gi(e, t) {
    mo(e, "a", t)
}

function Ji(e, t) {
    mo(e, "da", t)
}

function mo(e, t, n = ce) {
    const s = e.__wdc || (e.__wdc = () => {
        let r = n;
        for (; r;) {
            if (r.isDeactivated) return;
            r = r.parent
        }
        return e()
    });
    if (An(t, s, n), n) {
        let r = n.parent;
        for (; r && r.parent;) go(r.parent.vnode) && Yi(s, t, n, r), r = r.parent
    }
}

function Yi(e, t, n, s) {
    const r = An(t, e, s, !0);
    En(() => {
        ls(s[t], r)
    }, n)
}

function An(e, t, n = ce, s = !1) {
    if (n) {
        const r = n[e] || (n[e] = []), o = t.__weh || (t.__weh = (...i) => {
            if (n.isUnmounted) return;
            ut();
            const c = qt(n), l = we(t, n, e, i);
            return c(), ft(), l
        });
        return s ? r.unshift(o) : r.push(o), o
    }
}

const Be = e => (t, n = ce) => (!Rn || e === "sp") && An(e, (...s) => t(...s), n), Xi = Be("bm"), bs = Be("m"),
    Zi = Be("bu"), el = Be("u"), tl = Be("bum"), En = Be("um"), nl = Be("sp"), sl = Be("rtg"), rl = Be("rtc");

function ol(e, t = ce) {
    An("ec", e, t)
}

function Yu(e, t, n, s) {
    let r;
    const o = n && n[s];
    if (H(e) || te(e)) {
        r = new Array(e.length);
        for (let i = 0, c = e.length; i < c; i++) r[i] = t(e[i], i, void 0, o && o[i])
    } else if (typeof e == "number") {
        r = new Array(e);
        for (let i = 0; i < e; i++) r[i] = t(i + 1, i, void 0, o && o[i])
    } else if (Z(e)) if (e[Symbol.iterator]) r = Array.from(e, (i, c) => t(i, c, void 0, o && o[c])); else {
        const i = Object.keys(e);
        r = new Array(i.length);
        for (let c = 0, l = i.length; c < l; c++) {
            const a = i[c];
            r[c] = t(e[a], a, c, o && o[c])
        }
    } else r = [];
    return n && (n[s] = r), r
}

const Qn = e => e ? Oo(e) ? Sn(e) || e.proxy : Qn(e.parent) : null, Ht = oe(Object.create(null), {
    $: e => e,
    $el: e => e.vnode.el,
    $data: e => e.data,
    $props: e => e.props,
    $attrs: e => e.attrs,
    $slots: e => e.slots,
    $refs: e => e.refs,
    $parent: e => Qn(e.parent),
    $root: e => Qn(e.root),
    $emit: e => e.emit,
    $options: e => As(e),
    $forceUpdate: e => e.f || (e.f = () => {
        e.effect.dirty = !0, vs(e.update)
    }),
    $nextTick: e => e.n || (e.n = mt.bind(e.proxy)),
    $watch: e => qi.bind(e)
}), Tn = (e, t) => e !== J && !e.__isScriptSetup && D(e, t), il = {
    get({_: e}, t) {
        const {ctx: n, setupState: s, data: r, props: o, accessCache: i, type: c, appContext: l} = e;
        let a;
        if (t[0] !== "$") {
            const v = i[t];
            if (v !== void 0) switch (v) {
                case 1:
                    return s[t];
                case 2:
                    return r[t];
                case 4:
                    return n[t];
                case 3:
                    return o[t]
            } else {
                if (Tn(s, t)) return i[t] = 1, s[t];
                if (r !== J && D(r, t)) return i[t] = 2, r[t];
                if ((a = e.propsOptions[0]) && D(a, t)) return i[t] = 3, o[t];
                if (n !== J && D(n, t)) return i[t] = 4, n[t];
                qn && (i[t] = 0)
            }
        }
        const f = Ht[t];
        let h, p;
        if (f) return t === "$attrs" && pe(e, "get", t), f(e);
        if ((h = c.__cssModules) && (h = h[t])) return h;
        if (n !== J && D(n, t)) return i[t] = 4, n[t];
        if (p = l.config.globalProperties, D(p, t)) return p[t]
    }, set({_: e}, t, n) {
        const {data: s, setupState: r, ctx: o} = e;
        return Tn(r, t) ? (r[t] = n, !0) : s !== J && D(s, t) ? (s[t] = n, !0) : D(e.props, t) || t[0] === "$" && t.slice(1) in e ? !1 : (o[t] = n, !0)
    }, has({_: {data: e, setupState: t, accessCache: n, ctx: s, appContext: r, propsOptions: o}}, i) {
        let c;
        return !!n[i] || e !== J && D(e, i) || Tn(t, i) || (c = o[0]) && D(c, i) || D(s, i) || D(Ht, i) || D(r.config.globalProperties, i)
    }, defineProperty(e, t, n) {
        return n.get != null ? e._.accessCache[t] = 0 : D(n, "value") && this.set(e, t, n.value, null), Reflect.defineProperty(e, t, n)
    }
};

function Vs(e) {
    return H(e) ? e.reduce((t, n) => (t[n] = null, t), {}) : e
}

let qn = !0;

function ll(e) {
    const t = As(e), n = e.proxy, s = e.ctx;
    qn = !1, t.beforeCreate && zs(t.beforeCreate, e, "bc");
    const {
        data: r,
        computed: o,
        methods: i,
        watch: c,
        provide: l,
        inject: a,
        created: f,
        beforeMount: h,
        mounted: p,
        beforeUpdate: v,
        updated: P,
        activated: M,
        deactivated: F,
        beforeDestroy: L,
        beforeUnmount: $,
        destroyed: B,
        unmounted: z,
        render: ee,
        renderTracked: U,
        renderTriggered: ue,
        errorCaptured: ye,
        serverPrefetch: Ze,
        expose: Re,
        inheritAttrs: Ue,
        components: et,
        directives: Se,
        filters: Pt
    } = t;
    if (a && cl(a, s, null), i) for (const q in i) {
        const K = i[q];
        j(K) && (s[q] = K.bind(n))
    }
    if (r) {
        const q = r.call(n, n);
        Z(q) && (e.data = Ye(q))
    }
    if (qn = !0, o) for (const q in o) {
        const K = o[q], Me = j(K) ? K.bind(n, n) : j(K.get) ? K.get.bind(n, n) : ve,
            ke = !j(K) && j(K.set) ? K.set.bind(n) : ve, Ce = _e({get: Me, set: ke});
        Object.defineProperty(s, q, {enumerable: !0, configurable: !0, get: () => Ce.value, set: ae => Ce.value = ae})
    }
    if (c) for (const q in c) _o(c[q], s, n, q);
    if (l) {
        const q = j(l) ? l.call(n) : l;
        Reflect.ownKeys(q).forEach(K => {
            rn(K, q[K])
        })
    }
    f && zs(f, e, "c");

    function ne(q, K) {
        H(K) ? K.forEach(Me => q(Me.bind(n))) : K && q(K.bind(n))
    }

    if (ne(Xi, h), ne(bs, p), ne(Zi, v), ne(el, P), ne(Gi, M), ne(Ji, F), ne(ol, ye), ne(rl, U), ne(sl, ue), ne(tl, $), ne(En, z), ne(nl, Ze), H(Re)) if (Re.length) {
        const q = e.exposed || (e.exposed = {});
        Re.forEach(K => {
            Object.defineProperty(q, K, {get: () => n[K], set: Me => n[K] = Me})
        })
    } else e.exposed || (e.exposed = {});
    ee && e.render === ve && (e.render = ee), Ue != null && (e.inheritAttrs = Ue), et && (e.components = et), Se && (e.directives = Se)
}

function cl(e, t, n = ve) {
    H(e) && (e = Gn(e));
    for (const s in e) {
        const r = e[s];
        let o;
        Z(r) ? "default" in r ? o = je(r.from || s, r.default, !0) : o = je(r.from || s) : o = je(r), ge(o) ? Object.defineProperty(t, s, {
            enumerable: !0,
            configurable: !0,
            get: () => o.value,
            set: i => o.value = i
        }) : t[s] = o
    }
}

function zs(e, t, n) {
    we(H(e) ? e.map(s => s.bind(t.proxy)) : e.bind(t.proxy), t, n)
}

function _o(e, t, n, s) {
    const r = s.includes(".") ? po(n, s) : () => n[s];
    if (te(e)) {
        const o = t[e];
        j(o) && Nt(r, o)
    } else if (j(e)) Nt(r, e.bind(n)); else if (Z(e)) if (H(e)) e.forEach(o => _o(o, t, n, s)); else {
        const o = j(e.handler) ? e.handler.bind(n) : t[e.handler];
        j(o) && Nt(r, o, e)
    }
}

function As(e) {
    const t = e.type, {mixins: n, extends: s} = t, {
        mixins: r,
        optionsCache: o,
        config: {optionMergeStrategies: i}
    } = e.appContext, c = o.get(t);
    let l;
    return c ? l = c : !r.length && !n && !s ? l = t : (l = {}, r.length && r.forEach(a => an(l, a, i, !0)), an(l, t, i)), Z(t) && o.set(t, l), l
}

function an(e, t, n, s = !1) {
    const {mixins: r, extends: o} = t;
    o && an(e, o, n, !0), r && r.forEach(i => an(e, i, n, !0));
    for (const i in t) if (!(s && i === "expose")) {
        const c = ul[i] || n && n[i];
        e[i] = c ? c(e[i], t[i]) : t[i]
    }
    return e
}

const ul = {
    data: Ks,
    props: Ws,
    emits: Ws,
    methods: Tt,
    computed: Tt,
    beforeCreate: fe,
    created: fe,
    beforeMount: fe,
    mounted: fe,
    beforeUpdate: fe,
    updated: fe,
    beforeDestroy: fe,
    beforeUnmount: fe,
    destroyed: fe,
    unmounted: fe,
    activated: fe,
    deactivated: fe,
    errorCaptured: fe,
    serverPrefetch: fe,
    components: Tt,
    directives: Tt,
    watch: al,
    provide: Ks,
    inject: fl
};

function Ks(e, t) {
    return t ? e ? function () {
        return oe(j(e) ? e.call(this, this) : e, j(t) ? t.call(this, this) : t)
    } : t : e
}

function fl(e, t) {
    return Tt(Gn(e), Gn(t))
}

function Gn(e) {
    if (H(e)) {
        const t = {};
        for (let n = 0; n < e.length; n++) t[e[n]] = e[n];
        return t
    }
    return e
}

function fe(e, t) {
    return e ? [...new Set([].concat(e, t))] : t
}

function Tt(e, t) {
    return e ? oe(Object.create(null), e, t) : t
}

function Ws(e, t) {
    return e ? H(e) && H(t) ? [...new Set([...e, ...t])] : oe(Object.create(null), Vs(e), Vs(t ?? {})) : t
}

function al(e, t) {
    if (!e) return t;
    if (!t) return e;
    const n = oe(Object.create(null), e);
    for (const s in t) n[s] = fe(e[s], t[s]);
    return n
}

function yo() {
    return {
        app: null,
        config: {
            isNativeTag: Ko,
            performance: !1,
            globalProperties: {},
            optionMergeStrategies: {},
            errorHandler: void 0,
            warnHandler: void 0,
            compilerOptions: {}
        },
        mixins: [],
        components: {},
        directives: {},
        provides: Object.create(null),
        optionsCache: new WeakMap,
        propsCache: new WeakMap,
        emitsCache: new WeakMap
    }
}

let dl = 0;

function hl(e, t) {
    return function (s, r = null) {
        j(s) || (s = oe({}, s)), r != null && !Z(r) && (r = null);
        const o = yo(), i = new WeakSet;
        let c = !1;
        const l = o.app = {
            _uid: dl++,
            _component: s,
            _props: r,
            _container: null,
            _context: o,
            _instance: null,
            version: Bl,
            get config() {
                return o.config
            },
            set config(a) {
            },
            use(a, ...f) {
                return i.has(a) || (a && j(a.install) ? (i.add(a), a.install(l, ...f)) : j(a) && (i.add(a), a(l, ...f))), l
            },
            mixin(a) {
                return o.mixins.includes(a) || o.mixins.push(a), l
            },
            component(a, f) {
                return f ? (o.components[a] = f, l) : o.components[a]
            },
            directive(a, f) {
                return f ? (o.directives[a] = f, l) : o.directives[a]
            },
            mount(a, f, h) {
                if (!c) {
                    const p = re(s, r);
                    return p.appContext = o, h === !0 ? h = "svg" : h === !1 && (h = void 0), f && t ? t(p, a) : e(p, a, h), c = !0, l._container = a, a.__vue_app__ = l, Sn(p.component) || p.component.proxy
                }
            },
            unmount() {
                c && (e(null, l._container), delete l._container.__vue_app__)
            },
            provide(a, f) {
                return o.provides[a] = f, l
            },
            runWithContext(a) {
                const f = Ft;
                Ft = l;
                try {
                    return a()
                } finally {
                    Ft = f
                }
            }
        };
        return l
    }
}

let Ft = null;

function rn(e, t) {
    if (ce) {
        let n = ce.provides;
        const s = ce.parent && ce.parent.provides;
        s === n && (n = ce.provides = Object.create(s)), n[e] = t
    }
}

function je(e, t, n = !1) {
    const s = ce || he;
    if (s || Ft) {
        const r = s ? s.parent == null ? s.vnode.appContext && s.vnode.appContext.provides : s.parent.provides : Ft._context.provides;
        if (r && e in r) return r[e];
        if (arguments.length > 1) return n && j(t) ? t.call(s && s.proxy) : t
    }
}

function pl(e, t, n, s = !1) {
    const r = {}, o = {};
    cn(o, xn, 1), e.propsDefaults = Object.create(null), vo(e, t, r, o);
    for (const i in e.propsOptions[0]) i in r || (r[i] = void 0);
    n ? e.props = s ? r : Jr(r) : e.type.props ? e.props = r : e.props = o, e.attrs = o
}

function gl(e, t, n, s) {
    const {props: r, attrs: o, vnode: {patchFlag: i}} = e, c = V(r), [l] = e.propsOptions;
    let a = !1;
    if ((s || i > 0) && !(i & 16)) {
        if (i & 8) {
            const f = e.vnode.dynamicProps;
            for (let h = 0; h < f.length; h++) {
                let p = f[h];
                if (vn(e.emitsOptions, p)) continue;
                const v = t[p];
                if (l) if (D(o, p)) v !== o[p] && (o[p] = v, a = !0); else {
                    const P = Te(p);
                    r[P] = Jn(l, c, P, v, e, !1)
                } else v !== o[p] && (o[p] = v, a = !0)
            }
        }
    } else {
        vo(e, t, r, o) && (a = !0);
        let f;
        for (const h in c) (!t || !D(t, h) && ((f = Ct(h)) === h || !D(t, f))) && (l ? n && (n[h] !== void 0 || n[f] !== void 0) && (r[h] = Jn(l, c, h, void 0, e, !0)) : delete r[h]);
        if (o !== c) for (const h in o) (!t || !D(t, h)) && (delete o[h], a = !0)
    }
    a && He(e, "set", "$attrs")
}

function vo(e, t, n, s) {
    const [r, o] = e.propsOptions;
    let i = !1, c;
    if (t) for (let l in t) {
        if ($t(l)) continue;
        const a = t[l];
        let f;
        r && D(r, f = Te(l)) ? !o || !o.includes(f) ? n[f] = a : (c || (c = {}))[f] = a : vn(e.emitsOptions, l) || (!(l in s) || a !== s[l]) && (s[l] = a, i = !0)
    }
    if (o) {
        const l = V(n), a = c || J;
        for (let f = 0; f < o.length; f++) {
            const h = o[f];
            n[h] = Jn(r, l, h, a[h], e, !D(a, h))
        }
    }
    return i
}

function Jn(e, t, n, s, r, o) {
    const i = e[n];
    if (i != null) {
        const c = D(i, "default");
        if (c && s === void 0) {
            const l = i.default;
            if (i.type !== Function && !i.skipFactory && j(l)) {
                const {propsDefaults: a} = r;
                if (n in a) s = a[n]; else {
                    const f = qt(r);
                    s = a[n] = l.call(null, t), f()
                }
            } else s = l
        }
        i[0] && (o && !c ? s = !1 : i[1] && (s === "" || s === Ct(n)) && (s = !0))
    }
    return s
}

function bo(e, t, n = !1) {
    const s = t.propsCache, r = s.get(e);
    if (r) return r;
    const o = e.props, i = {}, c = [];
    let l = !1;
    if (!j(e)) {
        const f = h => {
            l = !0;
            const [p, v] = bo(h, t, !0);
            oe(i, p), v && c.push(...v)
        };
        !n && t.mixins.length && t.mixins.forEach(f), e.extends && f(e.extends), e.mixins && e.mixins.forEach(f)
    }
    if (!o && !l) return Z(e) && s.set(e, yt), yt;
    if (H(o)) for (let f = 0; f < o.length; f++) {
        const h = Te(o[f]);
        Qs(h) && (i[h] = J)
    } else if (o) for (const f in o) {
        const h = Te(f);
        if (Qs(h)) {
            const p = o[f], v = i[h] = H(p) || j(p) ? {type: p} : oe({}, p);
            if (v) {
                const P = Js(Boolean, v.type), M = Js(String, v.type);
                v[0] = P > -1, v[1] = M < 0 || P < M, (P > -1 || D(v, "default")) && c.push(h)
            }
        }
    }
    const a = [i, c];
    return Z(e) && s.set(e, a), a
}

function Qs(e) {
    return e[0] !== "$" && !$t(e)
}

function qs(e) {
    return e === null ? "null" : typeof e == "function" ? e.name || "" : typeof e == "object" && e.constructor && e.constructor.name || ""
}

function Gs(e, t) {
    return qs(e) === qs(t)
}

function Js(e, t) {
    return H(t) ? t.findIndex(n => Gs(n, e)) : j(t) && Gs(t, e) ? 0 : -1
}

const Ao = e => e[0] === "_" || e === "$stable", Es = e => H(e) ? e.map(Le) : [Le(e)], ml = (e, t, n) => {
    if (t._n) return t;
    const s = Hi((...r) => Es(t(...r)), n);
    return s._c = !1, s
}, Eo = (e, t, n) => {
    const s = e._ctx;
    for (const r in e) {
        if (Ao(r)) continue;
        const o = e[r];
        if (j(o)) t[r] = ml(r, o, s); else if (o != null) {
            const i = Es(o);
            t[r] = () => i
        }
    }
}, wo = (e, t) => {
    const n = Es(t);
    e.slots.default = () => n
}, _l = (e, t) => {
    if (e.vnode.shapeFlag & 32) {
        const n = t._;
        n ? (e.slots = V(t), cn(t, "_", n)) : Eo(t, e.slots = {})
    } else e.slots = {}, t && wo(e, t);
    cn(e.slots, xn, 1)
}, yl = (e, t, n) => {
    const {vnode: s, slots: r} = e;
    let o = !0, i = J;
    if (s.shapeFlag & 32) {
        const c = t._;
        c ? n && c === 1 ? o = !1 : (oe(r, t), !n && c === 1 && delete r._) : (o = !t.$stable, Eo(t, r)), i = t
    } else t && (wo(e, t), i = {default: 1});
    if (o) for (const c in r) !Ao(c) && i[c] == null && delete r[c]
};

function Yn(e, t, n, s, r = !1) {
    if (H(e)) {
        e.forEach((p, v) => Yn(p, t && (H(t) ? t[v] : t), n, s, r));
        return
    }
    if (sn(s) && !r) return;
    const o = s.shapeFlag & 4 ? Sn(s.component) || s.component.proxy : s.el, i = r ? null : o, {i: c, r: l} = e,
        a = t && t.r, f = c.refs === J ? c.refs = {} : c.refs, h = c.setupState;
    if (a != null && a !== l && (te(a) ? (f[a] = null, D(h, a) && (h[a] = null)) : ge(a) && (a.value = null)), j(l)) Ge(l, c, 12, [i, f]); else {
        const p = te(l), v = ge(l);
        if (p || v) {
            const P = () => {
                if (e.f) {
                    const M = p ? D(h, l) ? h[l] : f[l] : l.value;
                    r ? H(M) && ls(M, o) : H(M) ? M.includes(o) || M.push(o) : p ? (f[l] = [o], D(h, l) && (h[l] = f[l])) : (l.value = [o], e.k && (f[e.k] = l.value))
                } else p ? (f[l] = i, D(h, l) && (h[l] = i)) : v && (l.value = i, e.k && (f[e.k] = i))
            };
            i ? (P.id = -1, de(P, n)) : P()
        }
    }
}

const de = Ki;

function vl(e) {
    return bl(e)
}

function bl(e, t) {
    const n = Hr();
    n.__VUE__ = !0;
    const {
        insert: s,
        remove: r,
        patchProp: o,
        createElement: i,
        createText: c,
        createComment: l,
        setText: a,
        setElementText: f,
        parentNode: h,
        nextSibling: p,
        setScopeId: v = ve,
        insertStaticContent: P
    } = e, M = (u, d, g, y = null, m = null, E = null, R = void 0, A = null, w = !!d.dynamicChildren) => {
        if (u === d) return;
        u && !Lt(u, d) && (y = _(u), ae(u, m, E, !0), u = null), d.patchFlag === -2 && (w = !1, d.dynamicChildren = null);
        const {type: b, ref: C, shapeFlag: T} = d;
        switch (b) {
            case wn:
                F(u, d, g, y);
                break;
            case ct:
                L(u, d, g, y);
                break;
            case $n:
                u == null && $(d, g, y, R);
                break;
            case Ne:
                et(u, d, g, y, m, E, R, A, w);
                break;
            default:
                T & 1 ? ee(u, d, g, y, m, E, R, A, w) : T & 6 ? Se(u, d, g, y, m, E, R, A, w) : (T & 64 || T & 128) && b.process(u, d, g, y, m, E, R, A, w, O)
        }
        C != null && m && Yn(C, u && u.ref, E, d || u, !d)
    }, F = (u, d, g, y) => {
        if (u == null) s(d.el = c(d.children), g, y); else {
            const m = d.el = u.el;
            d.children !== u.children && a(m, d.children)
        }
    }, L = (u, d, g, y) => {
        u == null ? s(d.el = l(d.children || ""), g, y) : d.el = u.el
    }, $ = (u, d, g, y) => {
        [u.el, u.anchor] = P(u.children, d, g, y, u.el, u.anchor)
    }, B = ({el: u, anchor: d}, g, y) => {
        let m;
        for (; u && u !== d;) m = p(u), s(u, g, y), u = m;
        s(d, g, y)
    }, z = ({el: u, anchor: d}) => {
        let g;
        for (; u && u !== d;) g = p(u), r(u), u = g;
        r(d)
    }, ee = (u, d, g, y, m, E, R, A, w) => {
        d.type === "svg" ? R = "svg" : d.type === "math" && (R = "mathml"), u == null ? U(d, g, y, m, E, R, A, w) : Ze(u, d, m, E, R, A, w)
    }, U = (u, d, g, y, m, E, R, A) => {
        let w, b;
        const {props: C, shapeFlag: T, transition: I, dirs: N} = u;
        if (w = u.el = i(u.type, E, C && C.is, C), T & 8 ? f(w, u.children) : T & 16 && ye(u.children, w, null, y, m, Mn(u, E), R, A), N && tt(u, null, y, "created"), ue(w, u, u.scopeId, R, y), C) {
            for (const G in C) G !== "value" && !$t(G) && o(w, G, null, C[G], E, u.children, y, m, ie);
            "value" in C && o(w, "value", null, C.value, E), (b = C.onVnodeBeforeMount) && Oe(b, y, u)
        }
        N && tt(u, null, y, "beforeMount");
        const k = Al(m, I);
        k && I.beforeEnter(w), s(w, d, g), ((b = C && C.onVnodeMounted) || k || N) && de(() => {
            b && Oe(b, y, u), k && I.enter(w), N && tt(u, null, y, "mounted")
        }, m)
    }, ue = (u, d, g, y, m) => {
        if (g && v(u, g), y) for (let E = 0; E < y.length; E++) v(u, y[E]);
        if (m) {
            let E = m.subTree;
            if (d === E) {
                const R = m.vnode;
                ue(u, R, R.scopeId, R.slotScopeIds, m.parent)
            }
        }
    }, ye = (u, d, g, y, m, E, R, A, w = 0) => {
        for (let b = w; b < u.length; b++) {
            const C = u[b] = A ? Ke(u[b]) : Le(u[b]);
            M(null, C, d, g, y, m, E, R, A)
        }
    }, Ze = (u, d, g, y, m, E, R) => {
        const A = d.el = u.el;
        let {patchFlag: w, dynamicChildren: b, dirs: C} = d;
        w |= u.patchFlag & 16;
        const T = u.props || J, I = d.props || J;
        let N;
        if (g && nt(g, !1), (N = I.onVnodeBeforeUpdate) && Oe(N, g, d, u), C && tt(d, u, g, "beforeUpdate"), g && nt(g, !0), b ? Re(u.dynamicChildren, b, A, g, y, Mn(d, m), E) : R || K(u, d, A, null, g, y, Mn(d, m), E, !1), w > 0) {
            if (w & 16) Ue(A, d, T, I, g, y, m); else if (w & 2 && T.class !== I.class && o(A, "class", null, I.class, m), w & 4 && o(A, "style", T.style, I.style, m), w & 8) {
                const k = d.dynamicProps;
                for (let G = 0; G < k.length; G++) {
                    const X = k[G], se = T[X], be = I[X];
                    (be !== se || X === "value") && o(A, X, se, be, m, u.children, g, y, ie)
                }
            }
            w & 1 && u.children !== d.children && f(A, d.children)
        } else !R && b == null && Ue(A, d, T, I, g, y, m);
        ((N = I.onVnodeUpdated) || C) && de(() => {
            N && Oe(N, g, d, u), C && tt(d, u, g, "updated")
        }, y)
    }, Re = (u, d, g, y, m, E, R) => {
        for (let A = 0; A < d.length; A++) {
            const w = u[A], b = d[A], C = w.el && (w.type === Ne || !Lt(w, b) || w.shapeFlag & 70) ? h(w.el) : g;
            M(w, b, C, null, y, m, E, R, !0)
        }
    }, Ue = (u, d, g, y, m, E, R) => {
        if (g !== y) {
            if (g !== J) for (const A in g) !$t(A) && !(A in y) && o(u, A, g[A], null, R, d.children, m, E, ie);
            for (const A in y) {
                if ($t(A)) continue;
                const w = y[A], b = g[A];
                w !== b && A !== "value" && o(u, A, b, w, R, d.children, m, E, ie)
            }
            "value" in y && o(u, "value", g.value, y.value, R)
        }
    }, et = (u, d, g, y, m, E, R, A, w) => {
        const b = d.el = u ? u.el : c(""), C = d.anchor = u ? u.anchor : c("");
        let {patchFlag: T, dynamicChildren: I, slotScopeIds: N} = d;
        N && (A = A ? A.concat(N) : N), u == null ? (s(b, g, y), s(C, g, y), ye(d.children || [], g, C, m, E, R, A, w)) : T > 0 && T & 64 && I && u.dynamicChildren ? (Re(u.dynamicChildren, I, g, m, E, R, A), (d.key != null || m && d === m.subTree) && xo(u, d, !0)) : K(u, d, g, C, m, E, R, A, w)
    }, Se = (u, d, g, y, m, E, R, A, w) => {
        d.slotScopeIds = A, u == null ? d.shapeFlag & 512 ? m.ctx.activate(d, g, y, R, w) : Pt(d, g, y, m, E, R, w) : at(u, d, w)
    }, Pt = (u, d, g, y, m, E, R) => {
        const A = u.component = Tl(u, y, m);
        if (go(u) && (A.ctx.renderer = O), Ml(A), A.asyncDep) {
            if (m && m.registerDep(A, ne), !u.el) {
                const w = A.subTree = re(ct);
                L(null, w, d, g)
            }
        } else ne(A, u, d, g, m, E, R)
    }, at = (u, d, g) => {
        const y = d.component = u.component;
        if (Bi(u, d, g)) if (y.asyncDep && !y.asyncResolved) {
            q(y, d, g);
            return
        } else y.next = d, Ti(y.update), y.effect.dirty = !0, y.update(); else d.el = u.el, y.vnode = d
    }, ne = (u, d, g, y, m, E, R) => {
        const A = () => {
            if (u.isMounted) {
                let {next: C, bu: T, u: I, parent: N, vnode: k} = u;
                {
                    const pt = Ro(u);
                    if (pt) {
                        C && (C.el = k.el, q(u, C, R)), pt.asyncDep.then(() => {
                            u.isUnmounted || A()
                        });
                        return
                    }
                }
                let G = C, X;
                nt(u, !1), C ? (C.el = k.el, q(u, C, R)) : C = k, T && On(T), (X = C.props && C.props.onVnodeBeforeUpdate) && Oe(X, N, C, k), nt(u, !0);
                const se = In(u), be = u.subTree;
                u.subTree = se, M(be, se, h(be.el), _(be), u, m, E), C.el = se.el, G === null && Ui(u, se.el), I && de(I, m), (X = C.props && C.props.onVnodeUpdated) && de(() => Oe(X, N, C, k), m)
            } else {
                let C;
                const {el: T, props: I} = d, {bm: N, m: k, parent: G} = u, X = sn(d);
                if (nt(u, !1), N && On(N), !X && (C = I && I.onVnodeBeforeMount) && Oe(C, G, d), nt(u, !0), T && Y) {
                    const se = () => {
                        u.subTree = In(u), Y(T, u.subTree, u, m, null)
                    };
                    X ? d.type.__asyncLoader().then(() => !u.isUnmounted && se()) : se()
                } else {
                    const se = u.subTree = In(u);
                    M(null, se, g, y, u, m, E), d.el = se.el
                }
                if (k && de(k, m), !X && (C = I && I.onVnodeMounted)) {
                    const se = d;
                    de(() => Oe(C, G, se), m)
                }
                (d.shapeFlag & 256 || G && sn(G.vnode) && G.vnode.shapeFlag & 256) && u.a && de(u.a, m), u.isMounted = !0, d = g = y = null
            }
        }, w = u.effect = new as(A, ve, () => vs(b), u.scope), b = u.update = () => {
            w.dirty && w.run()
        };
        b.id = u.uid, nt(u, !0), b()
    }, q = (u, d, g) => {
        d.component = u;
        const y = u.vnode.props;
        u.vnode = d, u.next = null, gl(u, d.props, y, g), yl(u, d.children, g), ut(), Us(u), ft()
    }, K = (u, d, g, y, m, E, R, A, w = !1) => {
        const b = u && u.children, C = u ? u.shapeFlag : 0, T = d.children, {patchFlag: I, shapeFlag: N} = d;
        if (I > 0) {
            if (I & 128) {
                ke(b, T, g, y, m, E, R, A, w);
                return
            } else if (I & 256) {
                Me(b, T, g, y, m, E, R, A, w);
                return
            }
        }
        N & 8 ? (C & 16 && ie(b, m, E), T !== b && f(g, T)) : C & 16 ? N & 16 ? ke(b, T, g, y, m, E, R, A, w) : ie(b, m, E, !0) : (C & 8 && f(g, ""), N & 16 && ye(T, g, y, m, E, R, A, w))
    }, Me = (u, d, g, y, m, E, R, A, w) => {
        u = u || yt, d = d || yt;
        const b = u.length, C = d.length, T = Math.min(b, C);
        let I;
        for (I = 0; I < T; I++) {
            const N = d[I] = w ? Ke(d[I]) : Le(d[I]);
            M(u[I], N, g, null, m, E, R, A, w)
        }
        b > C ? ie(u, m, E, !0, !1, T) : ye(d, g, y, m, E, R, A, w, T)
    }, ke = (u, d, g, y, m, E, R, A, w) => {
        let b = 0;
        const C = d.length;
        let T = u.length - 1, I = C - 1;
        for (; b <= T && b <= I;) {
            const N = u[b], k = d[b] = w ? Ke(d[b]) : Le(d[b]);
            if (Lt(N, k)) M(N, k, g, null, m, E, R, A, w); else break;
            b++
        }
        for (; b <= T && b <= I;) {
            const N = u[T], k = d[I] = w ? Ke(d[I]) : Le(d[I]);
            if (Lt(N, k)) M(N, k, g, null, m, E, R, A, w); else break;
            T--, I--
        }
        if (b > T) {
            if (b <= I) {
                const N = I + 1, k = N < C ? d[N].el : y;
                for (; b <= I;) M(null, d[b] = w ? Ke(d[b]) : Le(d[b]), g, k, m, E, R, A, w), b++
            }
        } else if (b > I) for (; b <= T;) ae(u[b], m, E, !0), b++; else {
            const N = b, k = b, G = new Map;
            for (b = k; b <= I; b++) {
                const me = d[b] = w ? Ke(d[b]) : Le(d[b]);
                me.key != null && G.set(me.key, b)
            }
            let X, se = 0;
            const be = I - k + 1;
            let pt = !1, Os = 0;
            const Ot = new Array(be);
            for (b = 0; b < be; b++) Ot[b] = 0;
            for (b = N; b <= T; b++) {
                const me = u[b];
                if (se >= be) {
                    ae(me, m, E, !0);
                    continue
                }
                let Pe;
                if (me.key != null) Pe = G.get(me.key); else for (X = k; X <= I; X++) if (Ot[X - k] === 0 && Lt(me, d[X])) {
                    Pe = X;
                    break
                }
                Pe === void 0 ? ae(me, m, E, !0) : (Ot[Pe - k] = b + 1, Pe >= Os ? Os = Pe : pt = !0, M(me, d[Pe], g, null, m, E, R, A, w), se++)
            }
            const Ls = pt ? El(Ot) : yt;
            for (X = Ls.length - 1, b = be - 1; b >= 0; b--) {
                const me = k + b, Pe = d[me], Is = me + 1 < C ? d[me + 1].el : y;
                Ot[b] === 0 ? M(null, Pe, g, Is, m, E, R, A, w) : pt && (X < 0 || b !== Ls[X] ? Ce(Pe, g, Is, 2) : X--)
            }
        }
    }, Ce = (u, d, g, y, m = null) => {
        const {el: E, type: R, transition: A, children: w, shapeFlag: b} = u;
        if (b & 6) {
            Ce(u.component.subTree, d, g, y);
            return
        }
        if (b & 128) {
            u.suspense.move(d, g, y);
            return
        }
        if (b & 64) {
            R.move(u, d, g, O);
            return
        }
        if (R === Ne) {
            s(E, d, g);
            for (let T = 0; T < w.length; T++) Ce(w[T], d, g, y);
            s(u.anchor, d, g);
            return
        }
        if (R === $n) {
            B(u, d, g);
            return
        }
        if (y !== 2 && b & 1 && A) if (y === 0) A.beforeEnter(E), s(E, d, g), de(() => A.enter(E), m); else {
            const {leave: T, delayLeave: I, afterLeave: N} = A, k = () => s(E, d, g), G = () => {
                T(E, () => {
                    k(), N && N()
                })
            };
            I ? I(E, k, G) : G()
        } else s(E, d, g)
    }, ae = (u, d, g, y = !1, m = !1) => {
        const {type: E, props: R, ref: A, children: w, dynamicChildren: b, shapeFlag: C, patchFlag: T, dirs: I} = u;
        if (A != null && Yn(A, null, g, u, !0), C & 256) {
            d.ctx.deactivate(u);
            return
        }
        const N = C & 1 && I, k = !sn(u);
        let G;
        if (k && (G = R && R.onVnodeBeforeUnmount) && Oe(G, d, u), C & 6) Gt(u.component, g, y); else {
            if (C & 128) {
                u.suspense.unmount(g, y);
                return
            }
            N && tt(u, null, d, "beforeUnmount"), C & 64 ? u.type.remove(u, d, g, m, O, y) : b && (E !== Ne || T > 0 && T & 64) ? ie(b, d, g, !1, !0) : (E === Ne && T & 384 || !m && C & 16) && ie(w, d, g), y && dt(u)
        }
        (k && (G = R && R.onVnodeUnmounted) || N) && de(() => {
            G && Oe(G, d, u), N && tt(u, null, d, "unmounted")
        }, g)
    }, dt = u => {
        const {type: d, el: g, anchor: y, transition: m} = u;
        if (d === Ne) {
            ht(g, y);
            return
        }
        if (d === $n) {
            z(u);
            return
        }
        const E = () => {
            r(g), m && !m.persisted && m.afterLeave && m.afterLeave()
        };
        if (u.shapeFlag & 1 && m && !m.persisted) {
            const {leave: R, delayLeave: A} = m, w = () => R(g, E);
            A ? A(u.el, E, w) : w()
        } else E()
    }, ht = (u, d) => {
        let g;
        for (; u !== d;) g = p(u), r(u), u = g;
        r(d)
    }, Gt = (u, d, g) => {
        const {bum: y, scope: m, update: E, subTree: R, um: A} = u;
        y && On(y), m.stop(), E && (E.active = !1, ae(R, u, d, g)), A && de(A, d), de(() => {
            u.isUnmounted = !0
        }, d), d && d.pendingBranch && !d.isUnmounted && u.asyncDep && !u.asyncResolved && u.suspenseId === d.pendingId && (d.deps--, d.deps === 0 && d.resolve())
    }, ie = (u, d, g, y = !1, m = !1, E = 0) => {
        for (let R = E; R < u.length; R++) ae(u[R], d, g, y, m)
    }, _ = u => u.shapeFlag & 6 ? _(u.component.subTree) : u.shapeFlag & 128 ? u.suspense.next() : p(u.anchor || u.el);
    let S = !1;
    const x = (u, d, g) => {
        u == null ? d._vnode && ae(d._vnode, null, null, !0) : M(d._vnode || null, u, d, null, null, null, g), S || (S = !0, Us(), io(), S = !1), d._vnode = u
    }, O = {p: M, um: ae, m: Ce, r: dt, mt: Pt, mc: ye, pc: K, pbc: Re, n: _, o: e};
    let W, Y;
    return t && ([W, Y] = t(O)), {render: x, hydrate: W, createApp: hl(x, W)}
}

function Mn({type: e, props: t}, n) {
    return n === "svg" && e === "foreignObject" || n === "mathml" && e === "annotation-xml" && t && t.encoding && t.encoding.includes("html") ? void 0 : n
}

function nt({effect: e, update: t}, n) {
    e.allowRecurse = t.allowRecurse = n
}

function Al(e, t) {
    return (!e || e && !e.pendingBranch) && t && !t.persisted
}

function xo(e, t, n = !1) {
    const s = e.children, r = t.children;
    if (H(s) && H(r)) for (let o = 0; o < s.length; o++) {
        const i = s[o];
        let c = r[o];
        c.shapeFlag & 1 && !c.dynamicChildren && ((c.patchFlag <= 0 || c.patchFlag === 32) && (c = r[o] = Ke(r[o]), c.el = i.el), n || xo(i, c)), c.type === wn && (c.el = i.el)
    }
}

function El(e) {
    const t = e.slice(), n = [0];
    let s, r, o, i, c;
    const l = e.length;
    for (s = 0; s < l; s++) {
        const a = e[s];
        if (a !== 0) {
            if (r = n[n.length - 1], e[r] < a) {
                t[s] = r, n.push(s);
                continue
            }
            for (o = 0, i = n.length - 1; o < i;) c = o + i >> 1, e[n[c]] < a ? o = c + 1 : i = c;
            a < e[n[o]] && (o > 0 && (t[s] = n[o - 1]), n[o] = s)
        }
    }
    for (o = n.length, i = n[o - 1]; o-- > 0;) n[o] = i, i = t[i];
    return n
}

function Ro(e) {
    const t = e.subTree.component;
    if (t) return t.asyncDep && !t.asyncResolved ? t : Ro(t)
}

const wl = e => e.__isTeleport, Ne = Symbol.for("v-fgt"), wn = Symbol.for("v-txt"), ct = Symbol.for("v-cmt"),
    $n = Symbol.for("v-stc"), jt = [];
let Ee = null;

function ws(e = !1) {
    jt.push(Ee = e ? null : [])
}

function xl() {
    jt.pop(), Ee = jt[jt.length - 1] || null
}

let Kt = 1;

function Ys(e) {
    Kt += e
}

function So(e) {
    return e.dynamicChildren = Kt > 0 ? Ee || yt : null, xl(), Kt > 0 && Ee && Ee.push(e), e
}

function Co(e, t, n, s, r, o) {
    return So(_t(e, t, n, s, r, o, !0))
}

function Rl(e, t, n, s, r) {
    return So(re(e, t, n, s, r, !0))
}

function Xn(e) {
    return e ? e.__v_isVNode === !0 : !1
}

function Lt(e, t) {
    return e.type === t.type && e.key === t.key
}

const xn = "__vInternal", Po = ({key: e}) => e ?? null, on = ({
                                                                  ref: e,
                                                                  ref_key: t,
                                                                  ref_for: n
                                                              }) => (typeof e == "number" && (e = "" + e), e != null ? te(e) || ge(e) || j(e) ? {
    i: he,
    r: e,
    k: t,
    f: !!n
} : e : null);

function _t(e, t = null, n = null, s = 0, r = null, o = e === Ne ? 0 : 1, i = !1, c = !1) {
    const l = {
        __v_isVNode: !0,
        __v_skip: !0,
        type: e,
        props: t,
        key: t && Po(t),
        ref: t && on(t),
        scopeId: uo,
        slotScopeIds: null,
        children: n,
        component: null,
        suspense: null,
        ssContent: null,
        ssFallback: null,
        dirs: null,
        transition: null,
        el: null,
        anchor: null,
        target: null,
        targetAnchor: null,
        staticCount: 0,
        shapeFlag: o,
        patchFlag: s,
        dynamicProps: r,
        dynamicChildren: null,
        appContext: null,
        ctx: he
    };
    return c ? (xs(l, n), o & 128 && e.normalize(l)) : n && (l.shapeFlag |= te(n) ? 8 : 16), Kt > 0 && !i && Ee && (l.patchFlag > 0 || o & 6) && l.patchFlag !== 32 && Ee.push(l), l
}

const re = Sl;

function Sl(e, t = null, n = null, s = 0, r = null, o = !1) {
    if ((!e || e === Vi) && (e = ct), Xn(e)) {
        const c = wt(e, t, !0);
        return n && xs(c, n), Kt > 0 && !o && Ee && (c.shapeFlag & 6 ? Ee[Ee.indexOf(e)] = c : Ee.push(c)), c.patchFlag |= -2, c
    }
    if (jl(e) && (e = e.__vccOpts), t) {
        t = Cl(t);
        let {class: c, style: l} = t;
        c && !te(c) && (t.class = fs(c)), Z(l) && (Xr(l) && !H(l) && (l = oe({}, l)), t.style = us(l))
    }
    const i = te(e) ? 1 : zi(e) ? 128 : wl(e) ? 64 : Z(e) ? 4 : j(e) ? 2 : 0;
    return _t(e, t, n, s, r, i, o, !0)
}

function Cl(e) {
    return e ? Xr(e) || xn in e ? oe({}, e) : e : null
}

function wt(e, t, n = !1) {
    const {props: s, ref: r, patchFlag: o, children: i} = e, c = t ? Ol(s || {}, t) : s;
    return {
        __v_isVNode: !0,
        __v_skip: !0,
        type: e.type,
        props: c,
        key: c && Po(c),
        ref: t && t.ref ? n && r ? H(r) ? r.concat(on(t)) : [r, on(t)] : on(t) : r,
        scopeId: e.scopeId,
        slotScopeIds: e.slotScopeIds,
        children: i,
        target: e.target,
        targetAnchor: e.targetAnchor,
        staticCount: e.staticCount,
        shapeFlag: e.shapeFlag,
        patchFlag: t && e.type !== Ne ? o === -1 ? 16 : o | 16 : o,
        dynamicProps: e.dynamicProps,
        dynamicChildren: e.dynamicChildren,
        appContext: e.appContext,
        dirs: e.dirs,
        transition: e.transition,
        component: e.component,
        suspense: e.suspense,
        ssContent: e.ssContent && wt(e.ssContent),
        ssFallback: e.ssFallback && wt(e.ssFallback),
        el: e.el,
        anchor: e.anchor,
        ctx: e.ctx,
        ce: e.ce
    }
}

function Pl(e = " ", t = 0) {
    return re(wn, null, e, t)
}

function Xu(e = "", t = !1) {
    return t ? (ws(), Rl(ct, null, e)) : re(ct, null, e)
}

function Le(e) {
    return e == null || typeof e == "boolean" ? re(ct) : H(e) ? re(Ne, null, e.slice()) : typeof e == "object" ? Ke(e) : re(wn, null, String(e))
}

function Ke(e) {
    return e.el === null && e.patchFlag !== -1 || e.memo ? e : wt(e)
}

function xs(e, t) {
    let n = 0;
    const {shapeFlag: s} = e;
    if (t == null) t = null; else if (H(t)) n = 16; else if (typeof t == "object") if (s & 65) {
        const r = t.default;
        r && (r._c && (r._d = !1), xs(e, r()), r._c && (r._d = !0));
        return
    } else {
        n = 32;
        const r = t._;
        !r && !(xn in t) ? t._ctx = he : r === 3 && he && (he.slots._ === 1 ? t._ = 1 : (t._ = 2, e.patchFlag |= 1024))
    } else j(t) ? (t = {default: t, _ctx: he}, n = 32) : (t = String(t), s & 64 ? (n = 16, t = [Pl(t)]) : n = 8);
    e.children = t, e.shapeFlag |= n
}

function Ol(...e) {
    const t = {};
    for (let n = 0; n < e.length; n++) {
        const s = e[n];
        for (const r in s) if (r === "class") t.class !== s.class && (t.class = fs([t.class, s.class])); else if (r === "style") t.style = us([t.style, s.style]); else if (hn(r)) {
            const o = t[r], i = s[r];
            i && o !== i && !(H(o) && o.includes(i)) && (t[r] = o ? [].concat(o, i) : i)
        } else r !== "" && (t[r] = s[r])
    }
    return t
}

function Oe(e, t, n, s = null) {
    we(e, t, 7, [n, s])
}

const Ll = yo();
let Il = 0;

function Tl(e, t, n) {
    const s = e.type, r = (t ? t.appContext : e.appContext) || Ll, o = {
        uid: Il++,
        vnode: e,
        type: s,
        parent: t,
        appContext: r,
        root: null,
        next: null,
        subTree: null,
        effect: null,
        update: null,
        scope: new ri(!0),
        render: null,
        proxy: null,
        exposed: null,
        exposeProxy: null,
        withProxy: null,
        provides: t ? t.provides : Object.create(r.provides),
        accessCache: null,
        renderCache: [],
        components: null,
        directives: null,
        propsOptions: bo(s, r),
        emitsOptions: co(s, r),
        emit: null,
        emitted: null,
        propsDefaults: J,
        inheritAttrs: s.inheritAttrs,
        ctx: J,
        data: J,
        props: J,
        attrs: J,
        slots: J,
        refs: J,
        setupState: J,
        setupContext: null,
        attrsProxy: null,
        slotsProxy: null,
        suspense: n,
        suspenseId: n ? n.pendingId : 0,
        asyncDep: null,
        asyncResolved: !1,
        isMounted: !1,
        isUnmounted: !1,
        isDeactivated: !1,
        bc: null,
        c: null,
        bm: null,
        m: null,
        bu: null,
        u: null,
        um: null,
        bum: null,
        da: null,
        a: null,
        rtg: null,
        rtc: null,
        ec: null,
        sp: null
    };
    return o.ctx = {_: o}, o.root = t ? t.root : o, o.emit = Ni.bind(null, o), e.ce && e.ce(o), o
}

let ce = null, dn, Zn;
{
    const e = Hr(), t = (n, s) => {
        let r;
        return (r = e[n]) || (r = e[n] = []), r.push(s), o => {
            r.length > 1 ? r.forEach(i => i(o)) : r[0](o)
        }
    };
    dn = t("__VUE_INSTANCE_SETTERS__", n => ce = n), Zn = t("__VUE_SSR_SETTERS__", n => Rn = n)
}
const qt = e => {
    const t = ce;
    return dn(e), e.scope.on(), () => {
        e.scope.off(), dn(t)
    }
}, Xs = () => {
    ce && ce.scope.off(), dn(null)
};

function Oo(e) {
    return e.vnode.shapeFlag & 4
}

let Rn = !1;

function Ml(e, t = !1) {
    t && Zn(t);
    const {props: n, children: s} = e.vnode, r = Oo(e);
    pl(e, n, r, t), _l(e, s);
    const o = r ? $l(e, t) : void 0;
    return t && Zn(!1), o
}

function $l(e, t) {
    const n = e.type;
    e.accessCache = Object.create(null), e.proxy = Zr(new Proxy(e.ctx, il));
    const {setup: s} = n;
    if (s) {
        const r = e.setupContext = s.length > 1 ? Hl(e) : null, o = qt(e);
        ut();
        const i = Ge(s, e, 0, [e.props, r]);
        if (ft(), o(), Mr(i)) {
            if (i.then(Xs, Xs), t) return i.then(c => {
                Zs(e, c, t)
            }).catch(c => {
                yn(c, e, 0)
            });
            e.asyncDep = i
        } else Zs(e, i, t)
    } else Lo(e, t)
}

function Zs(e, t, n) {
    j(t) ? e.type.__ssrInlineRender ? e.ssrRender = t : e.render = t : Z(t) && (e.setupState = so(t)), Lo(e, n)
}

let er;

function Lo(e, t, n) {
    const s = e.type;
    if (!e.render) {
        if (!t && er && !s.render) {
            const r = s.template || As(e).template;
            if (r) {
                const {isCustomElement: o, compilerOptions: i} = e.appContext.config, {
                    delimiters: c,
                    compilerOptions: l
                } = s, a = oe(oe({isCustomElement: o, delimiters: c}, i), l);
                s.render = er(r, a)
            }
        }
        e.render = s.render || ve
    }
    {
        const r = qt(e);
        ut();
        try {
            ll(e)
        } finally {
            ft(), r()
        }
    }
}

function Nl(e) {
    return e.attrsProxy || (e.attrsProxy = new Proxy(e.attrs, {
        get(t, n) {
            return pe(e, "get", "$attrs"), t[n]
        }
    }))
}

function Hl(e) {
    const t = n => {
        e.exposed = n || {}
    };
    return {
        get attrs() {
            return Nl(e)
        }, slots: e.slots, emit: e.emit, expose: t
    }
}

function Sn(e) {
    if (e.exposed) return e.exposeProxy || (e.exposeProxy = new Proxy(so(Zr(e.exposed)), {
        get(t, n) {
            if (n in t) return t[n];
            if (n in Ht) return Ht[n](e)
        }, has(t, n) {
            return n in t || n in Ht
        }
    }))
}

function Fl(e, t = !0) {
    return j(e) ? e.displayName || e.name : e.name || t && e.__name
}

function jl(e) {
    return j(e) && "__vccOpts" in e
}

const _e = (e, t) => Si(e, t, Rn);

function Io(e, t, n) {
    const s = arguments.length;
    return s === 2 ? Z(t) && !H(t) ? Xn(t) ? re(e, null, [t]) : re(e, t) : re(e, null, t) : (s > 3 ? n = Array.prototype.slice.call(arguments, 2) : s === 3 && Xn(n) && (n = [n]), re(e, t, n))
}

const Bl = "3.4.21";
/**
 * @vue/runtime-dom v3.4.21
 * (c) 2018-present Yuxi (Evan) You and Vue contributors
 * @license MIT
 **/const Ul = "http://www.w3.org/2000/svg", kl = "http://www.w3.org/1998/Math/MathML",
    We = typeof document < "u" ? document : null, tr = We && We.createElement("template"), Dl = {
        insert: (e, t, n) => {
            t.insertBefore(e, n || null)
        },
        remove: e => {
            const t = e.parentNode;
            t && t.removeChild(e)
        },
        createElement: (e, t, n, s) => {
            const r = t === "svg" ? We.createElementNS(Ul, e) : t === "mathml" ? We.createElementNS(kl, e) : We.createElement(e, n ? {is: n} : void 0);
            return e === "select" && s && s.multiple != null && r.setAttribute("multiple", s.multiple), r
        },
        createText: e => We.createTextNode(e),
        createComment: e => We.createComment(e),
        setText: (e, t) => {
            e.nodeValue = t
        },
        setElementText: (e, t) => {
            e.textContent = t
        },
        parentNode: e => e.parentNode,
        nextSibling: e => e.nextSibling,
        querySelector: e => We.querySelector(e),
        setScopeId(e, t) {
            e.setAttribute(t, "")
        },
        insertStaticContent(e, t, n, s, r, o) {
            const i = n ? n.previousSibling : t.lastChild;
            if (r && (r === o || r.nextSibling)) for (; t.insertBefore(r.cloneNode(!0), n), !(r === o || !(r = r.nextSibling));) ; else {
                tr.innerHTML = s === "svg" ? `<svg>${e}</svg>` : s === "mathml" ? `<math>${e}</math>` : e;
                const c = tr.content;
                if (s === "svg" || s === "mathml") {
                    const l = c.firstChild;
                    for (; l.firstChild;) c.appendChild(l.firstChild);
                    c.removeChild(l)
                }
                t.insertBefore(c, n)
            }
            return [i ? i.nextSibling : t.firstChild, n ? n.previousSibling : t.lastChild]
        }
    }, Vl = Symbol("_vtc");

function zl(e, t, n) {
    const s = e[Vl];
    s && (t = (t ? [t, ...s] : [...s]).join(" ")), t == null ? e.removeAttribute("class") : n ? e.setAttribute("class", t) : e.className = t
}

const nr = Symbol("_vod"), Kl = Symbol("_vsh"), Wl = Symbol(""), Ql = /(^|;)\s*display\s*:/;

function ql(e, t, n) {
    const s = e.style, r = te(n);
    let o = !1;
    if (n && !r) {
        if (t) if (te(t)) for (const i of t.split(";")) {
            const c = i.slice(0, i.indexOf(":")).trim();
            n[c] == null && ln(s, c, "")
        } else for (const i in t) n[i] == null && ln(s, i, "");
        for (const i in n) i === "display" && (o = !0), ln(s, i, n[i])
    } else if (r) {
        if (t !== n) {
            const i = s[Wl];
            i && (n += ";" + i), s.cssText = n, o = Ql.test(n)
        }
    } else t && e.removeAttribute("style");
    nr in e && (e[nr] = o ? s.display : "", e[Kl] && (s.display = "none"))
}

const sr = /\s*!important$/;

function ln(e, t, n) {
    if (H(n)) n.forEach(s => ln(e, t, s)); else if (n == null && (n = ""), t.startsWith("--")) e.setProperty(t, n); else {
        const s = Gl(e, t);
        sr.test(n) ? e.setProperty(Ct(s), n.replace(sr, ""), "important") : e[s] = n
    }
}

const rr = ["Webkit", "Moz", "ms"], Nn = {};

function Gl(e, t) {
    const n = Nn[t];
    if (n) return n;
    let s = Te(t);
    if (s !== "filter" && s in e) return Nn[t] = s;
    s = mn(s);
    for (let r = 0; r < rr.length; r++) {
        const o = rr[r] + s;
        if (o in e) return Nn[t] = o
    }
    return t
}

const or = "http://www.w3.org/1999/xlink";

function Jl(e, t, n, s, r) {
    if (s && t.startsWith("xlink:")) n == null ? e.removeAttributeNS(or, t.slice(6, t.length)) : e.setAttributeNS(or, t, n); else {
        const o = ni(t);
        n == null || o && !Fr(n) ? e.removeAttribute(t) : e.setAttribute(t, o ? "" : n)
    }
}

function Yl(e, t, n, s, r, o, i) {
    if (t === "innerHTML" || t === "textContent") {
        s && i(s, r, o), e[t] = n ?? "";
        return
    }
    const c = e.tagName;
    if (t === "value" && c !== "PROGRESS" && !c.includes("-")) {
        const a = c === "OPTION" ? e.getAttribute("value") || "" : e.value, f = n ?? "";
        (a !== f || !("_value" in e)) && (e.value = f), n == null && e.removeAttribute(t), e._value = n;
        return
    }
    let l = !1;
    if (n === "" || n == null) {
        const a = typeof e[t];
        a === "boolean" ? n = Fr(n) : n == null && a === "string" ? (n = "", l = !0) : a === "number" && (n = 0, l = !0)
    }
    try {
        e[t] = n
    } catch {
    }
    l && e.removeAttribute(t)
}

function Xl(e, t, n, s) {
    e.addEventListener(t, n, s)
}

function Zl(e, t, n, s) {
    e.removeEventListener(t, n, s)
}

const ir = Symbol("_vei");

function ec(e, t, n, s, r = null) {
    const o = e[ir] || (e[ir] = {}), i = o[t];
    if (s && i) i.value = s; else {
        const [c, l] = tc(t);
        if (s) {
            const a = o[t] = rc(s, r);
            Xl(e, c, a, l)
        } else i && (Zl(e, c, i, l), o[t] = void 0)
    }
}

const lr = /(?:Once|Passive|Capture)$/;

function tc(e) {
    let t;
    if (lr.test(e)) {
        t = {};
        let s;
        for (; s = e.match(lr);) e = e.slice(0, e.length - s[0].length), t[s[0].toLowerCase()] = !0
    }
    return [e[2] === ":" ? e.slice(3) : Ct(e.slice(2)), t]
}

let Hn = 0;
const nc = Promise.resolve(), sc = () => Hn || (nc.then(() => Hn = 0), Hn = Date.now());

function rc(e, t) {
    const n = s => {
        if (!s._vts) s._vts = Date.now(); else if (s._vts <= n.attached) return;
        we(oc(s, n.value), t, 5, [s])
    };
    return n.value = e, n.attached = sc(), n
}

function oc(e, t) {
    if (H(t)) {
        const n = e.stopImmediatePropagation;
        return e.stopImmediatePropagation = () => {
            n.call(e), e._stopped = !0
        }, t.map(s => r => !r._stopped && s && s(r))
    } else return t
}

const cr = e => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && e.charCodeAt(2) > 96 && e.charCodeAt(2) < 123,
    ic = (e, t, n, s, r, o, i, c, l) => {
        const a = r === "svg";
        t === "class" ? zl(e, s, a) : t === "style" ? ql(e, n, s) : hn(t) ? is(t) || ec(e, t, n, s, i) : (t[0] === "." ? (t = t.slice(1), !0) : t[0] === "^" ? (t = t.slice(1), !1) : lc(e, t, s, a)) ? Yl(e, t, s, o, i, c, l) : (t === "true-value" ? e._trueValue = s : t === "false-value" && (e._falseValue = s), Jl(e, t, s, a))
    };

function lc(e, t, n, s) {
    if (s) return !!(t === "innerHTML" || t === "textContent" || t in e && cr(t) && j(n));
    if (t === "spellcheck" || t === "draggable" || t === "translate" || t === "form" || t === "list" && e.tagName === "INPUT" || t === "type" && e.tagName === "TEXTAREA") return !1;
    if (t === "width" || t === "height") {
        const r = e.tagName;
        if (r === "IMG" || r === "VIDEO" || r === "CANVAS" || r === "SOURCE") return !1
    }
    return cr(t) && te(n) ? !1 : t in e
}

const cc = oe({patchProp: ic}, Dl);
let ur;

function uc() {
    return ur || (ur = vl(cc))
}

const fc = (...e) => {
    const t = uc().createApp(...e), {mount: n} = t;
    return t.mount = s => {
        const r = dc(s);
        if (!r) return;
        const o = t._component;
        !j(o) && !o.render && !o.template && (o.template = r.innerHTML), r.innerHTML = "";
        const i = n(r, !1, ac(r));
        return r instanceof Element && (r.removeAttribute("v-cloak"), r.setAttribute("data-v-app", "")), i
    }, t
};

function ac(e) {
    if (e instanceof SVGElement) return "svg";
    if (typeof MathMLElement == "function" && e instanceof MathMLElement) return "mathml"
}

function dc(e) {
    return te(e) ? document.querySelector(e) : e
}/*!
 * Vue-Lazyload.js v3.0.0
 * (c) 2023 Awe <hilongjw@gmail.com>
 * Released under the MIT License.
 */
function To(e, t) {
    return t = {exports: {}}, e(t, t.exports), t.exports
}

var es = To(function (e) {
    const t = Object.prototype.toString, n = Object.prototype.propertyIsEnumerable, s = Object.getOwnPropertySymbols;
    e.exports = (o, ...i) => {
        if (!r(o)) throw new TypeError("expected the first argument to be an object");
        if (i.length === 0 || typeof Symbol != "function" || typeof s != "function") return o;
        for (let c of i) {
            let l = s(c);
            for (let a of l) n.call(c, a) && (o[a] = c[a])
        }
        return o
    };

    function r(o) {
        return typeof o == "function" || t.call(o) === "[object Object]" || Array.isArray(o)
    }
}), fr = Object.freeze({__proto__: null, default: es, __moduleExports: es}), hc = fr && es || fr, ar = To(function (e) {
    const t = Object.prototype.toString, n = i => i !== "__proto__" && i !== "constructor" && i !== "prototype",
        s = e.exports = (i, ...c) => {
            let l = 0;
            for (o(i) && (i = c[l++]), i || (i = {}); l < c.length; l++) if (r(c[l])) {
                for (const a of Object.keys(c[l])) n(a) && (r(i[a]) && r(c[l][a]) ? s(i[a], c[l][a]) : i[a] = c[l][a]);
                hc(i, c[l])
            }
            return i
        };

    function r(i) {
        return typeof i == "function" || t.call(i) === "[object Object]"
    }

    function o(i) {
        return typeof i == "object" ? i === null : typeof i != "function"
    }
});
const Xe = typeof window < "u" && window !== null, dr = pc();

function pc() {
    return Xe && "IntersectionObserver" in window && "IntersectionObserverEntry" in window && "intersectionRatio" in window.IntersectionObserverEntry.prototype ? ("isIntersecting" in window.IntersectionObserverEntry.prototype || Object.defineProperty(window.IntersectionObserverEntry.prototype, "isIntersecting", {
        get: function () {
            return this.intersectionRatio > 0
        }
    }), !0) : !1
}

const st = {event: "event", observer: "observer"};

function Mt(e, t) {
    if (!e.length) return;
    const n = e.indexOf(t);
    if (n > -1) return e.splice(n, 1)
}

function hr(e, t) {
    if (e.tagName !== "IMG" || !e.getAttribute("data-srcset")) return "";
    let n = e.getAttribute("data-srcset").trim().split(",");
    const s = [], o = e.parentNode.offsetWidth * t;
    let i, c, l;
    n.forEach(h => {
        h = h.trim(), i = h.lastIndexOf(" "), i === -1 ? (c = h, l = 99999) : (c = h.substr(0, i), l = parseInt(h.substr(i + 1, h.length - i - 2), 10)), s.push([l, c])
    }), s.sort((h, p) => {
        if (h[0] < p[0]) return 1;
        if (h[0] > p[0]) return -1;
        if (h[0] === p[0]) {
            if (p[1].indexOf(".webp", p[1].length - 5) !== -1) return 1;
            if (h[1].indexOf(".webp", h[1].length - 5) !== -1) return -1
        }
        return 0
    });
    let a = "", f;
    for (let h = 0; h < s.length; h++) {
        f = s[h], a = f[1];
        const p = s[h + 1];
        if (p && p[0] < o) {
            a = f[1];
            break
        } else if (!p) {
            a = f[1];
            break
        }
    }
    return a
}

const gc = (e = 1) => Xe && window.devicePixelRatio || e;

function mc() {
    if (!Xe) return !1;
    let e = !0;

    function t(n, s) {
        const r = {
            lossy: "UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",
            lossless: "UklGRhoAAABXRUJQVlA4TA0AAAAvAAAAEAcQERGIiP4HAA==",
            alpha: "UklGRkoAAABXRUJQVlA4WAoAAAAQAAAAAAAAAAAAQUxQSAwAAAARBxAR/Q9ERP8DAABWUDggGAAAABQBAJ0BKgEAAQAAAP4AAA3AAP7mtQAAAA==",
            animation: "UklGRlIAAABXRUJQVlA4WAoAAAASAAAAAAAAAAAAQU5JTQYAAAD/////AABBTk1GJgAAAAAAAAAAAAAAAAAAAGQAAABWUDhMDQAAAC8AAAAQBxAREYiI/gcA"
        }, o = new Image;
        o.onload = function () {
            const i = o.width > 0 && o.height > 0;
            s(i)
        }, o.onerror = function () {
            s(!1)
        }, o.src = "data:image/webp;base64," + r[n]
    }

    return t("lossy", n => {
        e = n
    }), t("lossless", n => {
        e = n
    }), t("alpha", n => {
        e = n
    }), t("animation", n => {
        e = n
    }), e
}

function _c(e, t) {
    let n = null, s = 0;
    return function () {
        if (n) return;
        const r = Date.now() - s, o = this, i = arguments, c = function () {
            s = Date.now(), n = !1, e.apply(o, i)
        };
        r >= t ? c() : n = setTimeout(c, t)
    }
}

function yc() {
    if (!Xe) return !1;
    let e = !1;
    try {
        const t = Object.defineProperty({}, "passive", {
            get: function () {
                e = !0
            }
        });
        window.addEventListener("test", Rs, t)
    } catch {
    }
    return e
}

const vc = yc(), bc = {
        on(e, t, n, s = !1) {
            vc ? e.addEventListener(t, n, {capture: s, passive: !0}) : e.addEventListener(t, n, s)
        }, off(e, t, n, s = !1) {
            e.removeEventListener(t, n, s)
        }
    }, ts = (e, t, n) => {
        let s = new Image;
        if (!e || !e.src) {
            const r = new Error("image src is required");
            return n(r)
        }
        e.cors && (s.crossOrigin = e.cors), s.src = e.src, s.onload = function () {
            t({naturalHeight: s.naturalHeight, naturalWidth: s.naturalWidth, src: s.src}), s = null
        }, s.onerror = function (r) {
            n(r)
        }
    }, Fn = (e, t) => typeof getComputedStyle < "u" ? getComputedStyle(e, null).getPropertyValue(t) : e.style[t],
    Ac = e => Fn(e, "overflow") + Fn(e, "overflowY") + Fn(e, "overflowX"), Ec = e => {
        if (!Xe) return;
        if (!(e instanceof Element)) return window;
        let t = e;
        for (; t && !(t === document.body || t === document.documentElement || !t.parentNode);) {
            if (/(scroll|auto)/.test(Ac(t))) return t;
            t = t.parentNode
        }
        return window
    };

function wc(e) {
    return e !== null && typeof e == "object"
}

function Rs() {
}

class xc {
    constructor(t) {
        this.max = t || 100, this._caches = []
    }

    has(t) {
        return this._caches.indexOf(t) > -1
    }

    add(t) {
        this.has(t) || (this._caches.push(t), this._caches.length > this.max && this.free())
    }

    free() {
        this._caches.shift()
    }
}

class Rc {
    constructor(t, n, s, r, o, i, c, l, a, f) {
        this.el = t, this.src = n, this.error = s, this.loading = r, this.bindType = o, this.attempt = 0, this.cors = l, this.naturalHeight = 0, this.naturalWidth = 0, this.options = c, this.rect = {}, this.$parent = i, this.elRenderer = a, this._imageCache = f, this.performanceData = {
            init: Date.now(),
            loadStart: 0,
            loadEnd: 0
        }, this.filter(), this.initState(), this.render("loading", !1)
    }

    initState() {
        "dataset" in this.el ? this.el.dataset.src = this.src : this.el.setAttribute("data-src", this.src), this.state = {
            loading: !1,
            error: !1,
            loaded: !1,
            rendered: !1
        }
    }

    record(t) {
        this.performanceData[t] = Date.now()
    }

    update(t) {
        const n = this.src;
        this.src = t.src, this.loading = t.loading, this.error = t.error, this.filter(), n !== this.src && (this.attempt = 0, this.initState())
    }

    getRect() {
        this.rect = this.el.getBoundingClientRect()
    }

    checkInView() {
        return this.getRect(), this.rect.top < window.innerHeight * this.options.preLoad && this.rect.bottom > this.options.preLoadTop && this.rect.left < window.innerWidth * this.options.preLoad && this.rect.right > 0
    }

    filter() {
        for (const t in this.options.filter) this.options.filter[t](this, this.options)
    }

    renderLoading(t) {
        this.state.loading = !0, ts({src: this.loading, cors: this.cors}, () => {
            this.render("loading", !1), this.state.loading = !1, t()
        }, () => {
            t(), this.state.loading = !1, this.options.silent || console.warn(`VueLazyload log: load failed with loading image(${this.loading})`)
        })
    }

    load(t = Rs) {
        if (this.attempt > this.options.attempt - 1 && this.state.error) {
            this.options.silent || console.log(`VueLazyload log: ${this.src} tried too more than ${this.options.attempt} times`), t();
            return
        }
        if (!(this.state.rendered && this.state.loaded)) {
            if (this._imageCache.has(this.src)) return this.state.loaded = !0, this.render("loaded", !0), this.state.rendered = !0, t();
            this.renderLoading(() => {
                this.attempt++, this.options.adapter.beforeLoad && this.options.adapter.beforeLoad(this, this.options), this.record("loadStart"), ts({
                    src: this.src,
                    cors: this.cors
                }, n => {
                    this.naturalHeight = n.naturalHeight, this.naturalWidth = n.naturalWidth, this.state.loaded = !0, this.state.error = !1, this.record("loadEnd"), this.render("loaded", !1), this.state.rendered = !0, this._imageCache.add(this.src), t()
                }, n => {
                    !this.options.silent && console.error(n), this.state.error = !0, this.state.loaded = !1, this.render("error", !1)
                })
            })
        }
    }

    render(t, n) {
        this.elRenderer(this, t, n)
    }

    performance() {
        let t = "loading", n = 0;
        return this.state.loaded && (t = "loaded", n = (this.performanceData.loadEnd - this.performanceData.loadStart) / 1e3), this.state.error && (t = "error"), {
            src: this.src,
            state: t,
            time: n
        }
    }

    $destroy() {
        this.el = null, this.src = "", this.error = null, this.loading = "", this.bindType = null, this.attempt = 0
    }
}

const pr = "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7",
    Sc = ["scroll", "wheel", "mousewheel", "resize", "animationend", "transitionend", "touchmove"],
    Cc = {rootMargin: "0px", threshold: 0};

class Pc {
    constructor({
                    preLoad: t,
                    error: n,
                    throttleWait: s,
                    preLoadTop: r,
                    dispatchEvent: o,
                    loading: i,
                    attempt: c,
                    silent: l = !0,
                    scale: a,
                    listenEvents: f,
                    filter: h,
                    adapter: p,
                    observer: v,
                    observerOptions: P
                }) {
        this.version = '"3.0.0"', this.lazyContainerMananger = null, this.mode = st.event, this.ListenerQueue = [], this.TargetIndex = 0, this.TargetQueue = [], this.options = {
            silent: l,
            dispatchEvent: !!o,
            throttleWait: s || 200,
            preLoad: t || 1.3,
            preLoadTop: r || 0,
            error: n || pr,
            loading: i || pr,
            attempt: c || 3,
            scale: a || gc(a),
            listenEvents: f || Sc,
            supportWebp: mc(),
            filter: h || {},
            adapter: p || {},
            observer: !!v,
            observerOptions: P || Cc
        }, this._initEvent(), this._imageCache = new xc(200), this.lazyLoadHandler = _c(this._lazyLoadHandler.bind(this), this.options.throttleWait), this.setMode(this.options.observer ? st.observer : st.event)
    }

    performance() {
        const t = [];
        return this.ListenerQueue.map(n => t.push(n.performance())), t
    }

    addLazyBox(t) {
        this.ListenerQueue.push(t), Xe && (this._addListenerTarget(window), this._observer && this._observer.observe(t.el), t.$el && t.$el.parentNode && this._addListenerTarget(t.$el.parentNode))
    }

    add(t, n, s) {
        if (this.ListenerQueue.some(l => l.el === t)) return this.update(t, n), mt(this.lazyLoadHandler);
        let {src: r, loading: o, error: i, cors: c} = this._valueFormatter(n.value);
        mt(() => {
            r = hr(t, this.options.scale) || r, this._observer && this._observer.observe(t);
            const l = Object.keys(n.modifiers)[0];
            let a;
            l && (a = n.instance.$refs[l], a = a ? a.el || a : document.getElementById(l)), a || (a = Ec(t));
            const f = new Rc(t, r, i, o, n.arg, a, this.options, c, this._elRenderer.bind(this), this._imageCache);
            this.ListenerQueue.push(f), Xe && (this._addListenerTarget(window), this._addListenerTarget(a)), mt(this.lazyLoadHandler)
        })
    }

    update(t, n, s) {
        let {src: r, loading: o, error: i} = this._valueFormatter(n.value);
        r = hr(t, this.options.scale) || r;
        const c = this.ListenerQueue.find(l => l.el === t);
        c ? c.update({
            src: r,
            loading: o,
            error: i
        }) : (t.getAttribute("lazy") !== "loaded" || t.dataset.src !== r) && this.add(t, n, s), this._observer && (this._observer.unobserve(t), this._observer.observe(t)), mt(this.lazyLoadHandler)
    }

    remove(t) {
        if (!t) return;
        this._observer && this._observer.unobserve(t);
        const n = this.ListenerQueue.find(s => s.el === t);
        n && (this._removeListenerTarget(n.$parent), this._removeListenerTarget(window), Mt(this.ListenerQueue, n), n.$destroy && n.$destroy())
    }

    removeComponent(t) {
        t && (Mt(this.ListenerQueue, t), this._observer && this._observer.unobserve(t.el), t.$parent && t.$el.parentNode && this._removeListenerTarget(t.$el.parentNode), this._removeListenerTarget(window))
    }

    setMode(t) {
        !dr && t === st.observer && (t = st.event), this.mode = t, t === st.event ? (this._observer && (this.ListenerQueue.forEach(n => {
            this._observer.unobserve(n.el)
        }), this._observer = null), this.TargetQueue.forEach(n => {
            this._initListen(n.el, !0)
        })) : (this.TargetQueue.forEach(n => {
            this._initListen(n.el, !1)
        }), this._initIntersectionObserver())
    }

    _addListenerTarget(t) {
        if (!t) return;
        let n = this.TargetQueue.find(s => s.el === t);
        return n ? n.childrenCount++ : (n = {
            el: t,
            id: ++this.TargetIndex,
            childrenCount: 1,
            listened: !0
        }, this.mode === st.event && this._initListen(n.el, !0), this.TargetQueue.push(n)), this.TargetIndex
    }

    _removeListenerTarget(t) {
        this.TargetQueue.forEach((n, s) => {
            n.el === t && (n.childrenCount--, n.childrenCount || (this._initListen(n.el, !1), this.TargetQueue.splice(s, 1), n = null))
        })
    }

    _initListen(t, n) {
        this.options.listenEvents.forEach(s => bc[n ? "on" : "off"](t, s, this.lazyLoadHandler))
    }

    _initEvent() {
        this.Event = {listeners: {loading: [], loaded: [], error: []}}, this.$on = (t, n) => {
            this.Event.listeners[t] || (this.Event.listeners[t] = []), this.Event.listeners[t].push(n)
        }, this.$once = (t, n) => {
            const s = this;

            function r() {
                s.$off(t, r), n.apply(s, arguments)
            }

            this.$on(t, r)
        }, this.$off = (t, n) => {
            if (!n) {
                if (!this.Event.listeners[t]) return;
                this.Event.listeners[t].length = 0;
                return
            }
            Mt(this.Event.listeners[t], n)
        }, this.$emit = (t, n, s) => {
            this.Event.listeners[t] && this.Event.listeners[t].forEach(r => r(n, s))
        }
    }

    _lazyLoadHandler() {
        const t = [];
        this.ListenerQueue.forEach((n, s) => {
            (!n.el || !n.el.parentNode || n.state.loaded) && t.push(n), n.checkInView() && (n.state.loaded || n.load())
        }), t.forEach(n => {
            Mt(this.ListenerQueue, n), n.$destroy && n.$destroy()
        })
    }

    _initIntersectionObserver() {
        dr && (this._observer = new IntersectionObserver(this._observerHandler.bind(this), this.options.observerOptions), this.ListenerQueue.length && this.ListenerQueue.forEach(t => {
            this._observer.observe(t.el)
        }))
    }

    _observerHandler(t) {
        t.forEach(n => {
            n.isIntersecting && this.ListenerQueue.forEach(s => {
                if (s.el === n.target) {
                    if (s.state.loaded) return this._observer.unobserve(s.el);
                    s.load()
                }
            })
        })
    }

    _elRenderer(t, n, s) {
        if (!t.el) return;
        const {el: r, bindType: o} = t;
        let i;
        switch (n) {
            case"loading":
                i = t.loading;
                break;
            case"error":
                i = t.error;
                break;
            default:
                i = t.src;
                break
        }
        if (o ? r.style[o] = 'url("' + i + '")' : r.getAttribute("src") !== i && r.setAttribute("src", i), r.setAttribute("lazy", n), this.$emit(n, t, s), this.options.adapter[n] && this.options.adapter[n](t, this.options), this.options.dispatchEvent) {
            const c = new CustomEvent(n, {detail: t});
            r.dispatchEvent(c)
        }
    }

    _valueFormatter(t) {
        return wc(t) ? (!t.src && !this.options.silent && console.error("Vue Lazyload warning: miss src with " + t), {
            src: t.src,
            loading: t.loading || this.options.loading,
            error: t.error || this.options.error,
            cors: this.options.cors
        }) : {src: t, loading: this.options.loading, error: this.options.error, cors: this.options.cors}
    }
}

const Mo = (e, t) => {
    let n = Ye({});
    const s = () => {
        n = e.value.getBoundingClientRect()
    };
    return {
        rect: n,
        checkInView: () => (s(), Xe && n.top < window.innerHeight * t && n.bottom > 0 && n.left < window.innerWidth * t && n.right > 0)
    }
};
var Oc = e => bn({
    props: {tag: {type: String, default: "div"}}, emits: ["show"], setup(t, {emit: n, slots: s}) {
        const r = Dt(), o = Ye({loaded: !1, error: !1, attempt: 0}), i = Dt(!1), {
            rect: c,
            checkInView: l
        } = Mo(r, e.options.preLoad), a = () => {
            i.value = !0, o.loaded = !0, n("show", i.value)
        }, f = _e(() => ({el: r.value, rect: c, checkInView: l, load: a, state: o}));
        return bs(() => {
            e.addLazyBox(f.value), e.lazyLoadHandler()
        }), En(() => {
            e.removeComponent(f.value)
        }), () => {
            var h;
            return re(t.tag, {ref: r}, [i.value && ((h = s.default) === null || h === void 0 ? void 0 : h.call(s))])
        }
    }
});

class Lc {
    constructor(t) {
        this.lazy = t, t.lazyContainerMananger = this, this._queue = []
    }

    bind(t, n, s) {
        const r = new Tc(t, n, s, this.lazy);
        this._queue.push(r)
    }

    update(t, n, s) {
        const r = this._queue.find(o => o.el === t);
        r && r.update(t, n)
    }

    unbind(t, n, s) {
        const r = this._queue.find(o => o.el === t);
        r && (r.clear(), Mt(this._queue, r))
    }
}

const Ic = {selector: "img", error: "", loading: ""};

class Tc {
    constructor(t, n, s, r) {
        this.el = t, this.vnode = s, this.binding = n, this.options = {}, this.lazy = r, this._queue = [], this.update(t, n)
    }

    update(t, n) {
        this.el = t, this.options = ar({}, Ic, n.value), this.getImgs().forEach(r => {
            this.lazy.add(r, ar({}, this.binding, {
                value: {
                    src: r.getAttribute("data-src") || r.dataset.src,
                    error: r.getAttribute("data-error") || r.dataset.error || this.options.error,
                    loading: r.getAttribute("data-loading") || r.dataset.loading || this.options.loading
                }
            }), this.vnode)
        })
    }

    getImgs() {
        return Array.from(this.el.querySelectorAll(this.options.selector))
    }

    clear() {
        this.getImgs().forEach(n => this.lazy.remove(n)), this.vnode = null, this.binding = null, this.lazy = null
    }
}

var Mc = e => bn({
    setup(t, {slots: n}) {
        const s = Dt(), r = Ye({src: "", error: "", loading: "", attempt: e.options.attempt}),
            o = Ye({loaded: !1, error: !1, attempt: 0}), {rect: i, checkInView: c} = Mo(s, e.options.preLoad),
            l = Dt(""), a = (p = Rs) => {
                if (o.attempt > r.attempt - 1 && o.error) return e.options.silent || console.log(`VueLazyload log: ${r.src} tried too more than ${r.attempt} times`), p();
                const v = r.src;
                ts({src: v}, ({src: P}) => {
                    l.value = P, o.loaded = !0
                }, () => {
                    o.attempt++, l.value = r.error, o.error = !0
                })
            }, f = _e(() => ({el: s.value, rect: i, checkInView: c, load: a, state: o}));
        bs(() => {
            e.addLazyBox(f.value), e.lazyLoadHandler()
        }), En(() => {
            e.removeComponent(f.value)
        });
        const h = () => {
            const {src: p, loading: v, error: P} = e._valueFormatter(t.src);
            o.loaded = !1, r.src = p, r.error = P, r.loading = v, l.value = r.loading
        };
        return Nt(() => t.src, () => {
            h(), e.addLazyBox(f.value), e.lazyLoadHandler()
        }, {immediate: !0}), () => {
            var p;
            return re(t.tag || "img", {
                src: l.value,
                ref: s
            }, [(p = n.default) === null || p === void 0 ? void 0 : p.call(n)])
        }
    }
}), $c = {
    install(e, t = {}) {
        const n = new Pc(t), s = new Lc(n);
        if (Number(e.version.split(".")[0]) < 3) return new Error("Vue version at least 3.0");
        e.config.globalProperties.$Lazyload = n, e.provide("Lazyload", n), t.lazyComponent && e.component("lazy-component", Oc(n)), t.lazyImage && e.component("lazy-image", Mc(n)), e.directive("lazy", {
            beforeMount: n.add.bind(n),
            beforeUpdate: n.update.bind(n),
            updated: n.lazyLoadHandler.bind(n),
            unmounted: n.remove.bind(n)
        }), e.directive("lazy-container", {
            beforeMount: s.bind.bind(s),
            updated: s.update.bind(s),
            unmounted: s.unbind.bind(s)
        })
    }
};
const jn = {isChinese: !0, avatar: "logo.png", title: "ChainCat", link: "https://chaincat.top"},
    Nc = {"px-6": "", "py-3": "", "f-b-c": "", "h-20": ""}, Hc = ["href"],
    Fc = {"inline-flex": "", "gap-5": "", "items-center": ""}, jc = ["src"], Bc = {"text-6": "", "font-bold": ""},
    Uc = {
        __name: "Header", setup(e) {
            return (t, n) => (ws(), Co("div", Nc, [_t("a", {href: Fe(jn).link}, [_t("div", Fc, [_t("img", {
                "h-6": "",
                "w-6": "",
                src: Fe(jn).avatar,
                alt: "avatar"
            }, null, 8, jc), _t("div", Bc, si(Fe(jn).title), 1)])], 8, Hc)]))
        }
    }, kc = {
        __name: "App", setup(e) {
            return (t, n) => {
                const s = Di("RouterView");
                return ws(), Co("div", null, [re(Uc), re(s)])
            }
        }
    }, Dc = "modulepreload", Vc = function (e) {
        return "/lx-camera/" + e
    }, gr = {}, zc = function (t, n, s) {
        let r = Promise.resolve();
        if (n && n.length > 0) {
            const o = document.getElementsByTagName("link");
            r = Promise.all(n.map(i => {
                if (i = Vc(i), i in gr) return;
                gr[i] = !0;
                const c = i.endsWith(".css"), l = c ? '[rel="stylesheet"]' : "";
                if (!!s) for (let h = o.length - 1; h >= 0; h--) {
                    const p = o[h];
                    if (p.href === i && (!c || p.rel === "stylesheet")) return
                } else if (document.querySelector(`link[href="${i}"]${l}`)) return;
                const f = document.createElement("link");
                if (f.rel = c ? "stylesheet" : Dc, c || (f.as = "script", f.crossOrigin = ""), f.href = i, document.head.appendChild(f), c) return new Promise((h, p) => {
                    f.addEventListener("load", h), f.addEventListener("error", () => p(new Error(`Unable to preload CSS for ${i}`)))
                })
            }))
        }
        return r.then(() => t()).catch(o => {
            const i = new Event("vite:preloadError", {cancelable: !0});
            if (i.payload = o, window.dispatchEvent(i), !i.defaultPrevented) throw o
        })
    };/*!
  * vue-router v4.3.0
  * (c) 2024 Eduardo San Martin Morote
  * @license MIT
  */
const gt = typeof document < "u";

function Kc(e) {
    return e.__esModule || e[Symbol.toStringTag] === "Module"
}

const Q = Object.assign;

function Bn(e, t) {
    const n = {};
    for (const s in t) {
        const r = t[s];
        n[s] = xe(r) ? r.map(e) : e(r)
    }
    return n
}

const Bt = () => {
    }, xe = Array.isArray, $o = /#/g, Wc = /&/g, Qc = /\//g, qc = /=/g, Gc = /\?/g, No = /\+/g, Jc = /%5B/g, Yc = /%5D/g,
    Ho = /%5E/g, Xc = /%60/g, Fo = /%7B/g, Zc = /%7C/g, jo = /%7D/g, eu = /%20/g;

function Ss(e) {
    return encodeURI("" + e).replace(Zc, "|").replace(Jc, "[").replace(Yc, "]")
}

function tu(e) {
    return Ss(e).replace(Fo, "{").replace(jo, "}").replace(Ho, "^")
}

function ns(e) {
    return Ss(e).replace(No, "%2B").replace(eu, "+").replace($o, "%23").replace(Wc, "%26").replace(Xc, "`").replace(Fo, "{").replace(jo, "}").replace(Ho, "^")
}

function nu(e) {
    return ns(e).replace(qc, "%3D")
}

function su(e) {
    return Ss(e).replace($o, "%23").replace(Gc, "%3F")
}

function ru(e) {
    return e == null ? "" : su(e).replace(Qc, "%2F")
}

function Wt(e) {
    try {
        return decodeURIComponent("" + e)
    } catch {
    }
    return "" + e
}

const ou = /\/$/, iu = e => e.replace(ou, "");

function Un(e, t, n = "/") {
    let s, r = {}, o = "", i = "";
    const c = t.indexOf("#");
    let l = t.indexOf("?");
    return c < l && c >= 0 && (l = -1), l > -1 && (s = t.slice(0, l), o = t.slice(l + 1, c > -1 ? c : t.length), r = e(o)), c > -1 && (s = s || t.slice(0, c), i = t.slice(c, t.length)), s = fu(s ?? t, n), {
        fullPath: s + (o && "?") + o + i,
        path: s,
        query: r,
        hash: Wt(i)
    }
}

function lu(e, t) {
    const n = t.query ? e(t.query) : "";
    return t.path + (n && "?") + n + (t.hash || "")
}

function mr(e, t) {
    return !t || !e.toLowerCase().startsWith(t.toLowerCase()) ? e : e.slice(t.length) || "/"
}

function cu(e, t, n) {
    const s = t.matched.length - 1, r = n.matched.length - 1;
    return s > -1 && s === r && xt(t.matched[s], n.matched[r]) && Bo(t.params, n.params) && e(t.query) === e(n.query) && t.hash === n.hash
}

function xt(e, t) {
    return (e.aliasOf || e) === (t.aliasOf || t)
}

function Bo(e, t) {
    if (Object.keys(e).length !== Object.keys(t).length) return !1;
    for (const n in e) if (!uu(e[n], t[n])) return !1;
    return !0
}

function uu(e, t) {
    return xe(e) ? _r(e, t) : xe(t) ? _r(t, e) : e === t
}

function _r(e, t) {
    return xe(t) ? e.length === t.length && e.every((n, s) => n === t[s]) : e.length === 1 && e[0] === t
}

function fu(e, t) {
    if (e.startsWith("/")) return e;
    if (!e) return t;
    const n = t.split("/"), s = e.split("/"), r = s[s.length - 1];
    (r === ".." || r === ".") && s.push("");
    let o = n.length - 1, i, c;
    for (i = 0; i < s.length; i++) if (c = s[i], c !== ".") if (c === "..") o > 1 && o--; else break;
    return n.slice(0, o).join("/") + "/" + s.slice(i).join("/")
}

var Qt;
(function (e) {
    e.pop = "pop", e.push = "push"
})(Qt || (Qt = {}));
var Ut;
(function (e) {
    e.back = "back", e.forward = "forward", e.unknown = ""
})(Ut || (Ut = {}));

function au(e) {
    if (!e) if (gt) {
        const t = document.querySelector("base");
        e = t && t.getAttribute("href") || "/", e = e.replace(/^\w+:\/\/[^\/]+/, "")
    } else e = "/";
    return e[0] !== "/" && e[0] !== "#" && (e = "/" + e), iu(e)
}

const du = /^[^#]+#/;

function hu(e, t) {
    return e.replace(du, "#") + t
}

function pu(e, t) {
    const n = document.documentElement.getBoundingClientRect(), s = e.getBoundingClientRect();
    return {behavior: t.behavior, left: s.left - n.left - (t.left || 0), top: s.top - n.top - (t.top || 0)}
}

const Cn = () => ({left: window.scrollX, top: window.scrollY});

function gu(e) {
    let t;
    if ("el" in e) {
        const n = e.el, s = typeof n == "string" && n.startsWith("#"),
            r = typeof n == "string" ? s ? document.getElementById(n.slice(1)) : document.querySelector(n) : n;
        if (!r) return;
        t = pu(r, e)
    } else t = e;
    "scrollBehavior" in document.documentElement.style ? window.scrollTo(t) : window.scrollTo(t.left != null ? t.left : window.scrollX, t.top != null ? t.top : window.scrollY)
}

function yr(e, t) {
    return (history.state ? history.state.position - t : -1) + e
}

const ss = new Map;

function mu(e, t) {
    ss.set(e, t)
}

function _u(e) {
    const t = ss.get(e);
    return ss.delete(e), t
}

let yu = () => location.protocol + "//" + location.host;

function Uo(e, t) {
    const {pathname: n, search: s, hash: r} = t, o = e.indexOf("#");
    if (o > -1) {
        let c = r.includes(e.slice(o)) ? e.slice(o).length : 1, l = r.slice(c);
        return l[0] !== "/" && (l = "/" + l), mr(l, "")
    }
    return mr(n, e) + s + r
}

function vu(e, t, n, s) {
    let r = [], o = [], i = null;
    const c = ({state: p}) => {
        const v = Uo(e, location), P = n.value, M = t.value;
        let F = 0;
        if (p) {
            if (n.value = v, t.value = p, i && i === P) {
                i = null;
                return
            }
            F = M ? p.position - M.position : 0
        } else s(v);
        r.forEach(L => {
            L(n.value, P, {delta: F, type: Qt.pop, direction: F ? F > 0 ? Ut.forward : Ut.back : Ut.unknown})
        })
    };

    function l() {
        i = n.value
    }

    function a(p) {
        r.push(p);
        const v = () => {
            const P = r.indexOf(p);
            P > -1 && r.splice(P, 1)
        };
        return o.push(v), v
    }

    function f() {
        const {history: p} = window;
        p.state && p.replaceState(Q({}, p.state, {scroll: Cn()}), "")
    }

    function h() {
        for (const p of o) p();
        o = [], window.removeEventListener("popstate", c), window.removeEventListener("beforeunload", f)
    }

    return window.addEventListener("popstate", c), window.addEventListener("beforeunload", f, {passive: !0}), {
        pauseListeners: l,
        listen: a,
        destroy: h
    }
}

function vr(e, t, n, s = !1, r = !1) {
    return {back: e, current: t, forward: n, replaced: s, position: window.history.length, scroll: r ? Cn() : null}
}

function bu(e) {
    const {history: t, location: n} = window, s = {value: Uo(e, n)}, r = {value: t.state};
    r.value || o(s.value, {
        back: null,
        current: s.value,
        forward: null,
        position: t.length - 1,
        replaced: !0,
        scroll: null
    }, !0);

    function o(l, a, f) {
        const h = e.indexOf("#"),
            p = h > -1 ? (n.host && document.querySelector("base") ? e : e.slice(h)) + l : yu() + e + l;
        try {
            t[f ? "replaceState" : "pushState"](a, "", p), r.value = a
        } catch (v) {
            console.error(v), n[f ? "replace" : "assign"](p)
        }
    }

    function i(l, a) {
        const f = Q({}, t.state, vr(r.value.back, l, r.value.forward, !0), a, {position: r.value.position});
        o(l, f, !0), s.value = l
    }

    function c(l, a) {
        const f = Q({}, r.value, t.state, {forward: l, scroll: Cn()});
        o(f.current, f, !0);
        const h = Q({}, vr(s.value, l, null), {position: f.position + 1}, a);
        o(l, h, !1), s.value = l
    }

    return {location: s, state: r, push: c, replace: i}
}

function Au(e) {
    e = au(e);
    const t = bu(e), n = vu(e, t.state, t.location, t.replace);

    function s(o, i = !0) {
        i || n.pauseListeners(), history.go(o)
    }

    const r = Q({location: "", base: e, go: s, createHref: hu.bind(null, e)}, t, n);
    return Object.defineProperty(r, "location", {
        enumerable: !0,
        get: () => t.location.value
    }), Object.defineProperty(r, "state", {enumerable: !0, get: () => t.state.value}), r
}

function Eu(e) {
    return typeof e == "string" || e && typeof e == "object"
}

function ko(e) {
    return typeof e == "string" || typeof e == "symbol"
}

const Ve = {
    path: "/",
    name: void 0,
    params: {},
    query: {},
    hash: "",
    fullPath: "/",
    matched: [],
    meta: {},
    redirectedFrom: void 0
}, Do = Symbol("");
var br;
(function (e) {
    e[e.aborted = 4] = "aborted", e[e.cancelled = 8] = "cancelled", e[e.duplicated = 16] = "duplicated"
})(br || (br = {}));

function Rt(e, t) {
    return Q(new Error, {type: e, [Do]: !0}, t)
}

function $e(e, t) {
    return e instanceof Error && Do in e && (t == null || !!(e.type & t))
}

const Ar = "[^/]+?", wu = {sensitive: !1, strict: !1, start: !0, end: !0}, xu = /[.+*?^${}()[\]/\\]/g;

function Ru(e, t) {
    const n = Q({}, wu, t), s = [];
    let r = n.start ? "^" : "";
    const o = [];
    for (const a of e) {
        const f = a.length ? [] : [90];
        n.strict && !a.length && (r += "/");
        for (let h = 0; h < a.length; h++) {
            const p = a[h];
            let v = 40 + (n.sensitive ? .25 : 0);
            if (p.type === 0) h || (r += "/"), r += p.value.replace(xu, "\\$&"), v += 40; else if (p.type === 1) {
                const {value: P, repeatable: M, optional: F, regexp: L} = p;
                o.push({name: P, repeatable: M, optional: F});
                const $ = L || Ar;
                if ($ !== Ar) {
                    v += 10;
                    try {
                        new RegExp(`(${$})`)
                    } catch (z) {
                        throw new Error(`Invalid custom RegExp for param "${P}" (${$}): ` + z.message)
                    }
                }
                let B = M ? `((?:${$})(?:/(?:${$}))*)` : `(${$})`;
                h || (B = F && a.length < 2 ? `(?:/${B})` : "/" + B), F && (B += "?"), r += B, v += 20, F && (v += -8), M && (v += -20), $ === ".*" && (v += -50)
            }
            f.push(v)
        }
        s.push(f)
    }
    if (n.strict && n.end) {
        const a = s.length - 1;
        s[a][s[a].length - 1] += .7000000000000001
    }
    n.strict || (r += "/?"), n.end ? r += "$" : n.strict && (r += "(?:/|$)");
    const i = new RegExp(r, n.sensitive ? "" : "i");

    function c(a) {
        const f = a.match(i), h = {};
        if (!f) return null;
        for (let p = 1; p < f.length; p++) {
            const v = f[p] || "", P = o[p - 1];
            h[P.name] = v && P.repeatable ? v.split("/") : v
        }
        return h
    }

    function l(a) {
        let f = "", h = !1;
        for (const p of e) {
            (!h || !f.endsWith("/")) && (f += "/"), h = !1;
            for (const v of p) if (v.type === 0) f += v.value; else if (v.type === 1) {
                const {value: P, repeatable: M, optional: F} = v, L = P in a ? a[P] : "";
                if (xe(L) && !M) throw new Error(`Provided param "${P}" is an array but it is not repeatable (* or + modifiers)`);
                const $ = xe(L) ? L.join("/") : L;
                if (!$) if (F) p.length < 2 && (f.endsWith("/") ? f = f.slice(0, -1) : h = !0); else throw new Error(`Missing required param "${P}"`);
                f += $
            }
        }
        return f || "/"
    }

    return {re: i, score: s, keys: o, parse: c, stringify: l}
}

function Su(e, t) {
    let n = 0;
    for (; n < e.length && n < t.length;) {
        const s = t[n] - e[n];
        if (s) return s;
        n++
    }
    return e.length < t.length ? e.length === 1 && e[0] === 80 ? -1 : 1 : e.length > t.length ? t.length === 1 && t[0] === 80 ? 1 : -1 : 0
}

function Cu(e, t) {
    let n = 0;
    const s = e.score, r = t.score;
    for (; n < s.length && n < r.length;) {
        const o = Su(s[n], r[n]);
        if (o) return o;
        n++
    }
    if (Math.abs(r.length - s.length) === 1) {
        if (Er(s)) return 1;
        if (Er(r)) return -1
    }
    return r.length - s.length
}

function Er(e) {
    const t = e[e.length - 1];
    return e.length > 0 && t[t.length - 1] < 0
}

const Pu = {type: 0, value: ""}, Ou = /[a-zA-Z0-9_]/;

function Lu(e) {
    if (!e) return [[]];
    if (e === "/") return [[Pu]];
    if (!e.startsWith("/")) throw new Error(`Invalid path "${e}"`);

    function t(v) {
        throw new Error(`ERR (${n})/"${a}": ${v}`)
    }

    let n = 0, s = n;
    const r = [];
    let o;

    function i() {
        o && r.push(o), o = []
    }

    let c = 0, l, a = "", f = "";

    function h() {
        a && (n === 0 ? o.push({
            type: 0,
            value: a
        }) : n === 1 || n === 2 || n === 3 ? (o.length > 1 && (l === "*" || l === "+") && t(`A repeatable param (${a}) must be alone in its segment. eg: '/:ids+.`), o.push({
            type: 1,
            value: a,
            regexp: f,
            repeatable: l === "*" || l === "+",
            optional: l === "*" || l === "?"
        })) : t("Invalid state to consume buffer"), a = "")
    }

    function p() {
        a += l
    }

    for (; c < e.length;) {
        if (l = e[c++], l === "\\" && n !== 2) {
            s = n, n = 4;
            continue
        }
        switch (n) {
            case 0:
                l === "/" ? (a && h(), i()) : l === ":" ? (h(), n = 1) : p();
                break;
            case 4:
                p(), n = s;
                break;
            case 1:
                l === "(" ? n = 2 : Ou.test(l) ? p() : (h(), n = 0, l !== "*" && l !== "?" && l !== "+" && c--);
                break;
            case 2:
                l === ")" ? f[f.length - 1] == "\\" ? f = f.slice(0, -1) + l : n = 3 : f += l;
                break;
            case 3:
                h(), n = 0, l !== "*" && l !== "?" && l !== "+" && c--, f = "";
                break;
            default:
                t("Unknown state");
                break
        }
    }
    return n === 2 && t(`Unfinished custom RegExp for param "${a}"`), h(), i(), r
}

function Iu(e, t, n) {
    const s = Ru(Lu(e.path), n), r = Q(s, {record: e, parent: t, children: [], alias: []});
    return t && !r.record.aliasOf == !t.record.aliasOf && t.children.push(r), r
}

function Tu(e, t) {
    const n = [], s = new Map;
    t = Rr({strict: !1, end: !0, sensitive: !1}, t);

    function r(f) {
        return s.get(f)
    }

    function o(f, h, p) {
        const v = !p, P = Mu(f);
        P.aliasOf = p && p.record;
        const M = Rr(t, f), F = [P];
        if ("alias" in f) {
            const B = typeof f.alias == "string" ? [f.alias] : f.alias;
            for (const z of B) F.push(Q({}, P, {
                components: p ? p.record.components : P.components,
                path: z,
                aliasOf: p ? p.record : P
            }))
        }
        let L, $;
        for (const B of F) {
            const {path: z} = B;
            if (h && z[0] !== "/") {
                const ee = h.record.path, U = ee[ee.length - 1] === "/" ? "" : "/";
                B.path = h.record.path + (z && U + z)
            }
            if (L = Iu(B, h, M), p ? p.alias.push(L) : ($ = $ || L, $ !== L && $.alias.push(L), v && f.name && !xr(L) && i(f.name)), P.children) {
                const ee = P.children;
                for (let U = 0; U < ee.length; U++) o(ee[U], L, p && p.children[U])
            }
            p = p || L, (L.record.components && Object.keys(L.record.components).length || L.record.name || L.record.redirect) && l(L)
        }
        return $ ? () => {
            i($)
        } : Bt
    }

    function i(f) {
        if (ko(f)) {
            const h = s.get(f);
            h && (s.delete(f), n.splice(n.indexOf(h), 1), h.children.forEach(i), h.alias.forEach(i))
        } else {
            const h = n.indexOf(f);
            h > -1 && (n.splice(h, 1), f.record.name && s.delete(f.record.name), f.children.forEach(i), f.alias.forEach(i))
        }
    }

    function c() {
        return n
    }

    function l(f) {
        let h = 0;
        for (; h < n.length && Cu(f, n[h]) >= 0 && (f.record.path !== n[h].record.path || !Vo(f, n[h]));) h++;
        n.splice(h, 0, f), f.record.name && !xr(f) && s.set(f.record.name, f)
    }

    function a(f, h) {
        let p, v = {}, P, M;
        if ("name" in f && f.name) {
            if (p = s.get(f.name), !p) throw Rt(1, {location: f});
            M = p.record.name, v = Q(wr(h.params, p.keys.filter($ => !$.optional).concat(p.parent ? p.parent.keys.filter($ => $.optional) : []).map($ => $.name)), f.params && wr(f.params, p.keys.map($ => $.name))), P = p.stringify(v)
        } else if (f.path != null) P = f.path, p = n.find($ => $.re.test(P)), p && (v = p.parse(P), M = p.record.name); else {
            if (p = h.name ? s.get(h.name) : n.find($ => $.re.test(h.path)), !p) throw Rt(1, {
                location: f,
                currentLocation: h
            });
            M = p.record.name, v = Q({}, h.params, f.params), P = p.stringify(v)
        }
        const F = [];
        let L = p;
        for (; L;) F.unshift(L.record), L = L.parent;
        return {name: M, path: P, params: v, matched: F, meta: Nu(F)}
    }

    return e.forEach(f => o(f)), {addRoute: o, resolve: a, removeRoute: i, getRoutes: c, getRecordMatcher: r}
}

function wr(e, t) {
    const n = {};
    for (const s of t) s in e && (n[s] = e[s]);
    return n
}

function Mu(e) {
    return {
        path: e.path,
        redirect: e.redirect,
        name: e.name,
        meta: e.meta || {},
        aliasOf: void 0,
        beforeEnter: e.beforeEnter,
        props: $u(e),
        children: e.children || [],
        instances: {},
        leaveGuards: new Set,
        updateGuards: new Set,
        enterCallbacks: {},
        components: "components" in e ? e.components || null : e.component && {default: e.component}
    }
}

function $u(e) {
    const t = {}, n = e.props || !1;
    if ("component" in e) t.default = n; else for (const s in e.components) t[s] = typeof n == "object" ? n[s] : n;
    return t
}

function xr(e) {
    for (; e;) {
        if (e.record.aliasOf) return !0;
        e = e.parent
    }
    return !1
}

function Nu(e) {
    return e.reduce((t, n) => Q(t, n.meta), {})
}

function Rr(e, t) {
    const n = {};
    for (const s in e) n[s] = s in t ? t[s] : e[s];
    return n
}

function Vo(e, t) {
    return t.children.some(n => n === e || Vo(e, n))
}

function Hu(e) {
    const t = {};
    if (e === "" || e === "?") return t;
    const s = (e[0] === "?" ? e.slice(1) : e).split("&");
    for (let r = 0; r < s.length; ++r) {
        const o = s[r].replace(No, " "), i = o.indexOf("="), c = Wt(i < 0 ? o : o.slice(0, i)),
            l = i < 0 ? null : Wt(o.slice(i + 1));
        if (c in t) {
            let a = t[c];
            xe(a) || (a = t[c] = [a]), a.push(l)
        } else t[c] = l
    }
    return t
}

function Sr(e) {
    let t = "";
    for (let n in e) {
        const s = e[n];
        if (n = nu(n), s == null) {
            s !== void 0 && (t += (t.length ? "&" : "") + n);
            continue
        }
        (xe(s) ? s.map(o => o && ns(o)) : [s && ns(s)]).forEach(o => {
            o !== void 0 && (t += (t.length ? "&" : "") + n, o != null && (t += "=" + o))
        })
    }
    return t
}

function Fu(e) {
    const t = {};
    for (const n in e) {
        const s = e[n];
        s !== void 0 && (t[n] = xe(s) ? s.map(r => r == null ? null : "" + r) : s == null ? s : "" + s)
    }
    return t
}

const ju = Symbol(""), Cr = Symbol(""), Cs = Symbol(""), zo = Symbol(""), rs = Symbol("");

function It() {
    let e = [];

    function t(s) {
        return e.push(s), () => {
            const r = e.indexOf(s);
            r > -1 && e.splice(r, 1)
        }
    }

    function n() {
        e = []
    }

    return {add: t, list: () => e.slice(), reset: n}
}

function Qe(e, t, n, s, r, o = i => i()) {
    const i = s && (s.enterCallbacks[r] = s.enterCallbacks[r] || []);
    return () => new Promise((c, l) => {
        const a = p => {
            p === !1 ? l(Rt(4, {from: n, to: t})) : p instanceof Error ? l(p) : Eu(p) ? l(Rt(2, {
                from: t,
                to: p
            })) : (i && s.enterCallbacks[r] === i && typeof p == "function" && i.push(p), c())
        }, f = o(() => e.call(s && s.instances[r], t, n, a));
        let h = Promise.resolve(f);
        e.length < 3 && (h = h.then(a)), h.catch(p => l(p))
    })
}

function kn(e, t, n, s, r = o => o()) {
    const o = [];
    for (const i of e) for (const c in i.components) {
        let l = i.components[c];
        if (!(t !== "beforeRouteEnter" && !i.instances[c])) if (Bu(l)) {
            const f = (l.__vccOpts || l)[t];
            f && o.push(Qe(f, n, s, i, c, r))
        } else {
            let a = l();
            o.push(() => a.then(f => {
                if (!f) return Promise.reject(new Error(`Couldn't resolve component "${c}" at "${i.path}"`));
                const h = Kc(f) ? f.default : f;
                i.components[c] = h;
                const v = (h.__vccOpts || h)[t];
                return v && Qe(v, n, s, i, c, r)()
            }))
        }
    }
    return o
}

function Bu(e) {
    return typeof e == "object" || "displayName" in e || "props" in e || "__vccOpts" in e
}

function Pr(e) {
    const t = je(Cs), n = je(zo), s = _e(() => t.resolve(Fe(e.to))), r = _e(() => {
            const {matched: l} = s.value, {length: a} = l, f = l[a - 1], h = n.matched;
            if (!f || !h.length) return -1;
            const p = h.findIndex(xt.bind(null, f));
            if (p > -1) return p;
            const v = Or(l[a - 2]);
            return a > 1 && Or(f) === v && h[h.length - 1].path !== v ? h.findIndex(xt.bind(null, l[a - 2])) : p
        }), o = _e(() => r.value > -1 && Vu(n.params, s.value.params)),
        i = _e(() => r.value > -1 && r.value === n.matched.length - 1 && Bo(n.params, s.value.params));

    function c(l = {}) {
        return Du(l) ? t[Fe(e.replace) ? "replace" : "push"](Fe(e.to)).catch(Bt) : Promise.resolve()
    }

    return {route: s, href: _e(() => s.value.href), isActive: o, isExactActive: i, navigate: c}
}

const Uu = bn({
    name: "RouterLink",
    compatConfig: {MODE: 3},
    props: {
        to: {type: [String, Object], required: !0},
        replace: Boolean,
        activeClass: String,
        exactActiveClass: String,
        custom: Boolean,
        ariaCurrentValue: {type: String, default: "page"}
    },
    useLink: Pr,
    setup(e, {slots: t}) {
        const n = Ye(Pr(e)), {options: s} = je(Cs), r = _e(() => ({
            [Lr(e.activeClass, s.linkActiveClass, "router-link-active")]: n.isActive,
            [Lr(e.exactActiveClass, s.linkExactActiveClass, "router-link-exact-active")]: n.isExactActive
        }));
        return () => {
            const o = t.default && t.default(n);
            return e.custom ? o : Io("a", {
                "aria-current": n.isExactActive ? e.ariaCurrentValue : null,
                href: n.href,
                onClick: n.navigate,
                class: r.value
            }, o)
        }
    }
}), ku = Uu;

function Du(e) {
    if (!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey) && !e.defaultPrevented && !(e.button !== void 0 && e.button !== 0)) {
        if (e.currentTarget && e.currentTarget.getAttribute) {
            const t = e.currentTarget.getAttribute("target");
            if (/\b_blank\b/i.test(t)) return
        }
        return e.preventDefault && e.preventDefault(), !0
    }
}

function Vu(e, t) {
    for (const n in t) {
        const s = t[n], r = e[n];
        if (typeof s == "string") {
            if (s !== r) return !1
        } else if (!xe(r) || r.length !== s.length || s.some((o, i) => o !== r[i])) return !1
    }
    return !0
}

function Or(e) {
    return e ? e.aliasOf ? e.aliasOf.path : e.path : ""
}

const Lr = (e, t, n) => e ?? t ?? n, zu = bn({
    name: "RouterView",
    inheritAttrs: !1,
    props: {name: {type: String, default: "default"}, route: Object},
    compatConfig: {MODE: 3},
    setup(e, {attrs: t, slots: n}) {
        const s = je(rs), r = _e(() => e.route || s.value), o = je(Cr, 0), i = _e(() => {
            let a = Fe(o);
            const {matched: f} = r.value;
            let h;
            for (; (h = f[a]) && !h.components;) a++;
            return a
        }), c = _e(() => r.value.matched[i.value]);
        rn(Cr, _e(() => i.value + 1)), rn(ju, c), rn(rs, r);
        const l = Dt();
        return Nt(() => [l.value, c.value, e.name], ([a, f, h], [p, v, P]) => {
            f && (f.instances[h] = a, v && v !== f && a && a === p && (f.leaveGuards.size || (f.leaveGuards = v.leaveGuards), f.updateGuards.size || (f.updateGuards = v.updateGuards))), a && f && (!v || !xt(f, v) || !p) && (f.enterCallbacks[h] || []).forEach(M => M(a))
        }, {flush: "post"}), () => {
            const a = r.value, f = e.name, h = c.value, p = h && h.components[f];
            if (!p) return Ir(n.default, {Component: p, route: a});
            const v = h.props[f], P = v ? v === !0 ? a.params : typeof v == "function" ? v(a) : v : null,
                F = Io(p, Q({}, P, t, {
                    onVnodeUnmounted: L => {
                        L.component.isUnmounted && (h.instances[f] = null)
                    }, ref: l
                }));
            return Ir(n.default, {Component: F, route: a}) || F
        }
    }
});

function Ir(e, t) {
    if (!e) return null;
    const n = e(t);
    return n.length === 1 ? n[0] : n
}

const Ku = zu;

function Wu(e) {
    const t = Tu(e.routes, e), n = e.parseQuery || Hu, s = e.stringifyQuery || Sr, r = e.history, o = It(), i = It(),
        c = It(), l = Ci(Ve);
    let a = Ve;
    gt && e.scrollBehavior && "scrollRestoration" in history && (history.scrollRestoration = "manual");
    const f = Bn.bind(null, _ => "" + _), h = Bn.bind(null, ru), p = Bn.bind(null, Wt);

    function v(_, S) {
        let x, O;
        return ko(_) ? (x = t.getRecordMatcher(_), O = S) : O = _, t.addRoute(O, x)
    }

    function P(_) {
        const S = t.getRecordMatcher(_);
        S && t.removeRoute(S)
    }

    function M() {
        return t.getRoutes().map(_ => _.record)
    }

    function F(_) {
        return !!t.getRecordMatcher(_)
    }

    function L(_, S) {
        if (S = Q({}, S || l.value), typeof _ == "string") {
            const d = Un(n, _, S.path), g = t.resolve({path: d.path}, S), y = r.createHref(d.fullPath);
            return Q(d, g, {params: p(g.params), hash: Wt(d.hash), redirectedFrom: void 0, href: y})
        }
        let x;
        if (_.path != null) x = Q({}, _, {path: Un(n, _.path, S.path).path}); else {
            const d = Q({}, _.params);
            for (const g in d) d[g] == null && delete d[g];
            x = Q({}, _, {params: h(d)}), S.params = h(S.params)
        }
        const O = t.resolve(x, S), W = _.hash || "";
        O.params = f(p(O.params));
        const Y = lu(s, Q({}, _, {hash: tu(W), path: O.path})), u = r.createHref(Y);
        return Q({fullPath: Y, hash: W, query: s === Sr ? Fu(_.query) : _.query || {}}, O, {
            redirectedFrom: void 0,
            href: u
        })
    }

    function $(_) {
        return typeof _ == "string" ? Un(n, _, l.value.path) : Q({}, _)
    }

    function B(_, S) {
        if (a !== _) return Rt(8, {from: S, to: _})
    }

    function z(_) {
        return ue(_)
    }

    function ee(_) {
        return z(Q($(_), {replace: !0}))
    }

    function U(_) {
        const S = _.matched[_.matched.length - 1];
        if (S && S.redirect) {
            const {redirect: x} = S;
            let O = typeof x == "function" ? x(_) : x;
            return typeof O == "string" && (O = O.includes("?") || O.includes("#") ? O = $(O) : {path: O}, O.params = {}), Q({
                query: _.query,
                hash: _.hash,
                params: O.path != null ? {} : _.params
            }, O)
        }
    }

    function ue(_, S) {
        const x = a = L(_), O = l.value, W = _.state, Y = _.force, u = _.replace === !0, d = U(x);
        if (d) return ue(Q($(d), {state: typeof d == "object" ? Q({}, W, d.state) : W, force: Y, replace: u}), S || x);
        const g = x;
        g.redirectedFrom = S;
        let y;
        return !Y && cu(s, O, x) && (y = Rt(16, {
            to: g,
            from: O
        }), Ce(O, O, !0, !1)), (y ? Promise.resolve(y) : Re(g, O)).catch(m => $e(m) ? $e(m, 2) ? m : ke(m) : K(m, g, O)).then(m => {
            if (m) {
                if ($e(m, 2)) return ue(Q({replace: u}, $(m.to), {
                    state: typeof m.to == "object" ? Q({}, W, m.to.state) : W,
                    force: Y
                }), S || g)
            } else m = et(g, O, !0, u, W);
            return Ue(g, O, m), m
        })
    }

    function ye(_, S) {
        const x = B(_, S);
        return x ? Promise.reject(x) : Promise.resolve()
    }

    function Ze(_) {
        const S = ht.values().next().value;
        return S && typeof S.runWithContext == "function" ? S.runWithContext(_) : _()
    }

    function Re(_, S) {
        let x;
        const [O, W, Y] = Qu(_, S);
        x = kn(O.reverse(), "beforeRouteLeave", _, S);
        for (const d of O) d.leaveGuards.forEach(g => {
            x.push(Qe(g, _, S))
        });
        const u = ye.bind(null, _, S);
        return x.push(u), ie(x).then(() => {
            x = [];
            for (const d of o.list()) x.push(Qe(d, _, S));
            return x.push(u), ie(x)
        }).then(() => {
            x = kn(W, "beforeRouteUpdate", _, S);
            for (const d of W) d.updateGuards.forEach(g => {
                x.push(Qe(g, _, S))
            });
            return x.push(u), ie(x)
        }).then(() => {
            x = [];
            for (const d of Y) if (d.beforeEnter) if (xe(d.beforeEnter)) for (const g of d.beforeEnter) x.push(Qe(g, _, S)); else x.push(Qe(d.beforeEnter, _, S));
            return x.push(u), ie(x)
        }).then(() => (_.matched.forEach(d => d.enterCallbacks = {}), x = kn(Y, "beforeRouteEnter", _, S, Ze), x.push(u), ie(x))).then(() => {
            x = [];
            for (const d of i.list()) x.push(Qe(d, _, S));
            return x.push(u), ie(x)
        }).catch(d => $e(d, 8) ? d : Promise.reject(d))
    }

    function Ue(_, S, x) {
        c.list().forEach(O => Ze(() => O(_, S, x)))
    }

    function et(_, S, x, O, W) {
        const Y = B(_, S);
        if (Y) return Y;
        const u = S === Ve, d = gt ? history.state : {};
        x && (O || u ? r.replace(_.fullPath, Q({scroll: u && d && d.scroll}, W)) : r.push(_.fullPath, W)), l.value = _, Ce(_, S, x, u), ke()
    }

    let Se;

    function Pt() {
        Se || (Se = r.listen((_, S, x) => {
            if (!Gt.listening) return;
            const O = L(_), W = U(O);
            if (W) {
                ue(Q(W, {replace: !0}), O).catch(Bt);
                return
            }
            a = O;
            const Y = l.value;
            gt && mu(yr(Y.fullPath, x.delta), Cn()), Re(O, Y).catch(u => $e(u, 12) ? u : $e(u, 2) ? (ue(u.to, O).then(d => {
                $e(d, 20) && !x.delta && x.type === Qt.pop && r.go(-1, !1)
            }).catch(Bt), Promise.reject()) : (x.delta && r.go(-x.delta, !1), K(u, O, Y))).then(u => {
                u = u || et(O, Y, !1), u && (x.delta && !$e(u, 8) ? r.go(-x.delta, !1) : x.type === Qt.pop && $e(u, 20) && r.go(-1, !1)), Ue(O, Y, u)
            }).catch(Bt)
        }))
    }

    let at = It(), ne = It(), q;

    function K(_, S, x) {
        ke(_);
        const O = ne.list();
        return O.length ? O.forEach(W => W(_, S, x)) : console.error(_), Promise.reject(_)
    }

    function Me() {
        return q && l.value !== Ve ? Promise.resolve() : new Promise((_, S) => {
            at.add([_, S])
        })
    }

    function ke(_) {
        return q || (q = !_, Pt(), at.list().forEach(([S, x]) => _ ? x(_) : S()), at.reset()), _
    }

    function Ce(_, S, x, O) {
        const {scrollBehavior: W} = e;
        if (!gt || !W) return Promise.resolve();
        const Y = !x && _u(yr(_.fullPath, 0)) || (O || !x) && history.state && history.state.scroll || null;
        return mt().then(() => W(_, S, Y)).then(u => u && gu(u)).catch(u => K(u, _, S))
    }

    const ae = _ => r.go(_);
    let dt;
    const ht = new Set, Gt = {
        currentRoute: l,
        listening: !0,
        addRoute: v,
        removeRoute: P,
        hasRoute: F,
        getRoutes: M,
        resolve: L,
        options: e,
        push: z,
        replace: ee,
        go: ae,
        back: () => ae(-1),
        forward: () => ae(1),
        beforeEach: o.add,
        beforeResolve: i.add,
        afterEach: c.add,
        onError: ne.add,
        isReady: Me,
        install(_) {
            const S = this;
            _.component("RouterLink", ku), _.component("RouterView", Ku), _.config.globalProperties.$router = S, Object.defineProperty(_.config.globalProperties, "$route", {
                enumerable: !0,
                get: () => Fe(l)
            }), gt && !dt && l.value === Ve && (dt = !0, z(r.location).catch(W => {
            }));
            const x = {};
            for (const W in Ve) Object.defineProperty(x, W, {get: () => l.value[W], enumerable: !0});
            _.provide(Cs, S), _.provide(zo, Jr(x)), _.provide(rs, l);
            const O = _.unmount;
            ht.add(_), _.unmount = function () {
                ht.delete(_), ht.size < 1 && (a = Ve, Se && Se(), Se = null, l.value = Ve, dt = !1, q = !1), O()
            }
        }
    };

    function ie(_) {
        return _.reduce((S, x) => S.then(() => Ze(x)), Promise.resolve())
    }

    return Gt
}

function Qu(e, t) {
    const n = [], s = [], r = [], o = Math.max(t.matched.length, e.matched.length);
    for (let i = 0; i < o; i++) {
        const c = t.matched[i];
        c && (e.matched.find(a => xt(a, c)) ? s.push(c) : n.push(c));
        const l = e.matched[i];
        l && (t.matched.find(a => xt(a, l)) || r.push(l))
    }
    return [n, s, r]
}

const qu = Wu({
    history: Au("/lx-camera/"),
    routes: [{
        path: "/",
        name: "index",
        component: () => zc(() => import("./PictureView-DwMuSe3w.js"), __vite__mapDeps([]))
    }]
}), Ps = fc(kc);
Ps.use(qu);
Ps.use($c, {preLoad: 1, loading: "loading.gif", attempt: 1});
Ps.mount("#app");
export {Ne as F, _t as a, Xu as b, Co as c, Yu as d, Gu as e, ws as o, Dt as r, si as t, Fe as u, Ju as w};

function __vite__mapDeps(indexes) {
    if (!__vite__mapDeps.viteFileDeps) {
        __vite__mapDeps.viteFileDeps = []
    }
    return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
