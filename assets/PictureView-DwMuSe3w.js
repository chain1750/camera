import {
    r as o,
    c as s,
    a as c,
    t as p,
    b as g,
    F as h,
    d as y,
    u as z,
    o as e,
    w as _,
    e as v
} from "./index-mNaPpPgO.js";

const j = [{
        url: "/camera/img/2024052003.jpeg",
        desc: ""
    }, {
        url: "/camera/img/2024052002.jpeg",
        desc: ""
    }, {
        url: "/camera/img/2024052001.jpeg",
        desc: ""
    }, {
        url: "/camera/img/2024051204.jpeg",
        desc: ""
    }, {
        url: "/camera/img/2024051203.jpeg",
        desc: ""
    }, {
        url: "/camera/img/2024051202.jpeg",
        desc: ""
    }, {
        url: "/camera/img/2024051201.jpeg",
        desc: ""
    }, {
        url: "/camera/img/2024041303.jpeg",
        desc: ""
    }, {
        url: "/camera/img/2024041302.jpeg",
        desc: ""
    }, {
        url: "/camera/img/2024041301.jpeg",
        desc: ""
    }, {
        url: "/camera/img/2024032202.jpeg",
        desc: ""
    }, {
        url: "/camera/img/2024032201.jpeg",
        desc: ""
    }, {
        url: "/camera/img/2024030204.jpeg",
        desc: ""
    }, {
        url: "/camera/img/2024030203.jpeg",
        desc: ""
    }, {
        url: "/camera/img/2024030202.jpeg",
        desc: ""
    }, {
        url: "/camera/img/2024030201.jpeg",
        desc: ""
    }, {
        url: "/camera/img/2024030109.jpeg",
        desc: ""
    }, {
        url: "/camera/img/2024030108.jpeg",
        desc: ""
    }, {
        url: "/camera/img/2024030107.jpeg",
        desc: ""
    }, {
        url: "/camera/img/2024030106.jpeg",
        desc: ""
    }, {
        url: "/camera/img/2024030105.jpeg",
        desc: ""
    }, {
        url: "/camera/img/2024030104.jpeg",
        desc: ""
    }, {
        url: "/camera/img/2024030103.jpeg",
        desc: ""
    }, {
        url: "/camera/img/2024030102.jpg",
        desc: ""
    }],
    f = c("div", {"bg-black": "", class: "opacity-80 absolute fixed h-[100%] wh-full top-0 z-1"}, null, -1),
    b = {flex: "", "flex-col": "", absolute: "", fixed: "", "w-full": "", "items-center": "", "z-50": ""}, x = ["src"],
    k = {"mt-2": "", style: {color: "white"}}, w = c("div", {
        class: "text-white dark:text-blue-500",
        "f-c-c": "",
        absolute: "",
        "w-full": "",
        "bottom-5vh": "",
        "z-50": ""
    }, null, -1), B = {
        "mx-3": "",
        "gap-4": "",
        absolute: "",
        "columns-1": "",
        "lg:columns-4": "",
        "md:columns-3": "",
        "sm:columns-2": "",
        "xl:columns-5": ""
    }, C = ["onClick"], D = {"mb-2": "", rounded: "", "w-full": ""}, L = {
        __name: "PictureView", setup(V) {
            const i = j, n = o({}), a = o(!1);

            function u(t) {
                n.value = t, a.value = !0
            }

            function r() {
                a.value = !1
            }

            return (t, E) => {
                const m = v("lazy");
                return e(), s(h, null, [a.value ? (e(), s("div", {
                    key: 0,
                    onClick: r
                }, [f, c("div", null, [c("div", b, [c("div", null, [c("img", {
                    src: n.value.url,
                    "rounded-lg": "",
                    "h-75vh": "",
                    alt: ""
                }, null, 8, x)]), c("div", k, p(n.value.desc), 1)]), w])])) : g("", !0), c("div", B, [(e(!0), s(h, null, y(z(i), (l, d) => (e(), s("div", {
                    key: d,
                    onClick: F => u(l)
                }, [_(c("img", D, null, 512), [[m, l.url]])], 8, C))), 128))])], 64)
            }
        }
    };
export {L as default};
