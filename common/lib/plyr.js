!function(e, t) {
    "use strict";
    "object" == typeof module && "object" == typeof module.exports ? module.exports = t(e, document) : "function" == typeof define && define.amd ? define([], function() {
        return t(e, document)
    }) : e.plyr = t(e, document)
}("undefined" != typeof window ? window : this, function(e, t) {
    "use strict";
    function n() {
        var e, n, r, a = navigator.userAgent, s = navigator.appName, o = "" + parseFloat(navigator.appVersion), i = parseInt(navigator.appVersion, 10), l = !1, u = !1, c = !1, d = !1;
        return navigator.appVersion.indexOf("Windows NT") !== -1 && navigator.appVersion.indexOf("rv:11") !== -1 ? (l = !0,
        s = "IE",
        o = "11") : (n = a.indexOf("MSIE")) !== -1 ? (l = !0,
        s = "IE",
        o = a.substring(n + 5)) : (n = a.indexOf("Chrome")) !== -1 ? (c = !0,
        s = "Chrome",
        o = a.substring(n + 7)) : (n = a.indexOf("Safari")) !== -1 ? (d = !0,
        s = "Safari",
        o = a.substring(n + 7),
        (n = a.indexOf("Version")) !== -1 && (o = a.substring(n + 8))) : (n = a.indexOf("Firefox")) !== -1 ? (u = !0,
        s = "Firefox",
        o = a.substring(n + 8)) : (e = a.lastIndexOf(" ") + 1) < (n = a.lastIndexOf("/")) && (s = a.substring(e, n),
        o = a.substring(n + 1),
        s.toLowerCase() === s.toUpperCase() && (s = navigator.appName)),
        (r = o.indexOf(";")) !== -1 && (o = o.substring(0, r)),
        (r = o.indexOf(" ")) !== -1 && (o = o.substring(0, r)),
        i = parseInt("" + o, 10),
        isNaN(i) && (o = "" + parseFloat(navigator.appVersion),
        i = parseInt(navigator.appVersion, 10)),
        {
            name: s,
            version: i,
            isIE: l,
            isFirefox: u,
            isChrome: c,
            isSafari: d,
            isIos: /(iPad|iPhone|iPod)/g.test(navigator.platform),
            isIphone: /(iPhone|iPod)/g.test(navigator.userAgent),
            isTouch: "ontouchstart"in t.documentElement
        }
    }
    function r(e, t) {
        var n = e.media;
        if ("video" === e.type)
            switch (t) {
            case "video/webm":
                return !(!n.canPlayType || !n.canPlayType('video/webm; codecs="vp8, vorbis"').replace(/no/, ""));
            case "video/mp4":
                return !(!n.canPlayType || !n.canPlayType('video/mp4; codecs="avc1.42E01E, mp4a.40.2"').replace(/no/, ""));
            case "video/ogg":
                return !(!n.canPlayType || !n.canPlayType('video/ogg; codecs="theora"').replace(/no/, ""))
            }
        else if ("audio" === e.type)
            switch (t) {
            case "audio/mpeg":
                return !(!n.canPlayType || !n.canPlayType("audio/mpeg;").replace(/no/, ""));
            case "audio/ogg":
                return !(!n.canPlayType || !n.canPlayType('audio/ogg; codecs="vorbis"').replace(/no/, ""));
            case "audio/wav":
                return !(!n.canPlayType || !n.canPlayType('audio/wav; codecs="1"').replace(/no/, ""))
            }
        return !1
    }
    function a(e) {
        if (!t.querySelectorAll('script[src="' + e + '"]').length) {
            var n = t.createElement("script");
            n.src = e;
            var r = t.getElementsByTagName("script")[0];
            r.parentNode.insertBefore(n, r)
        }
    }
    function s(e, t) {
        return Array.prototype.indexOf && e.indexOf(t) !== -1
    }
    function o(e, t, n) {
        return e.replace(new RegExp(t.replace(/([.*+?\^=!:${}()|\[\]\/\\])/g, "\\$1"),"g"), n)
    }
    function i(e, t) {
        e.length || (e = [e]);
        for (var n = e.length - 1; n >= 0; n--) {
            var r = n > 0 ? t.cloneNode(!0) : t
              , a = e[n]
              , s = a.parentNode
              , o = a.nextSibling;
            return r.appendChild(a),
            o ? s.insertBefore(r, o) : s.appendChild(r),
            r
        }
    }
    function l(e) {
        e && e.parentNode.removeChild(e)
    }
    function u(e, t) {
        e.insertBefore(t, e.firstChild)
    }
    function c(e, t) {
        for (var n in t)
            e.setAttribute(n, O.boolean(t[n]) && t[n] ? "" : t[n])
    }
    function d(e, n, r) {
        var a = t.createElement(e);
        c(a, r),
        u(n, a)
    }
    function p(e) {
        return e.replace(".", "")
    }
    function m(e, t, n) {
        if (e)
            if (e.classList)
                e.classList[n ? "add" : "remove"](t);
            else {
                var r = (" " + e.className + " ").replace(/\s+/g, " ").replace(" " + t + " ", "");
                e.className = r + (n ? " " + t : "")
            }
    }
    function f(e, t) {
        return !!e && (e.classList ? e.classList.contains(t) : new RegExp("(\\s|^)" + t + "(\\s|$)").test(e.className))
    }
    function y(e, n) {
        var r = Element.prototype
          , a = r.matches || r.webkitMatchesSelector || r.mozMatchesSelector || r.msMatchesSelector || function(e) {
            return [].indexOf.call(t.querySelectorAll(e), this) !== -1
        }
        ;
        return a.call(e, n)
    }
    function b(e, t, n, r, a) {
        g(e, t, function(t) {
            n && n.apply(e, [t]),
            r.apply(e, [t])
        }, a)
    }
    function v(e, t, n, r, a) {
        var s = t.split(" ");
        if (O.boolean(a) || (a = !1),
        e instanceof NodeList)
            for (var o = 0; o < e.length; o++)
                e[o]instanceof Node && v(e[o], arguments[1], arguments[2], arguments[3]);
        else
            for (var i = 0; i < s.length; i++)
                e[r ? "addEventListener" : "removeEventListener"](s[i], n, a)
    }
    function g(e, t, n, r) {
        e && v(e, t, n, !0, r)
    }
    function h(e, t, n, r) {
        if (e && t) {
            O.boolean(n) || (n = !1);
            var a = new CustomEvent(t,{
                bubbles: n,
                detail: r
            });
            e.dispatchEvent(a)
        }
    }
    function k(e, t) {
        if (e)
            return t = O.boolean(t) ? t : !e.getAttribute("aria-pressed"),
            e.setAttribute("aria-pressed", t),
            t
    }
    function w(e, t) {
        return 0 === e || 0 === t || isNaN(e) || isNaN(t) ? 0 : (e / t * 100).toFixed(2)
    }
    function x() {
        var e = arguments;
        if (e.length) {
            if (1 === e.length)
                return e[0];
            for (var t = Array.prototype.shift.call(e), n = e.length, r = 0; r < n; r++) {
                var a = e[r];
                for (var s in a)
                    a[s] && a[s].constructor && a[s].constructor === Object ? (t[s] = t[s] || {},
                    x(t[s], a[s])) : t[s] = a[s]
            }
            return t
        }
    }
    function T(e) {
        var t = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
        return e.match(t) ? RegExp.$2 : e
    }
    function S(e) {
        var t = /^.*(vimeo.com\/|video\/)(\d+).*/;
        return e.match(t) ? RegExp.$2 : e
    }
    function _() {
        var e = {
            supportsFullScreen: !1,
            isFullScreen: function() {
                return !1
            },
            requestFullScreen: function() {},
            cancelFullScreen: function() {},
            fullScreenEventName: "",
            element: null,
            prefix: ""
        }
          , n = "webkit o moz ms khtml".split(" ");
        if (O.undefined(t.cancelFullScreen))
            for (var r = 0, a = n.length; r < a; r++) {
                if (e.prefix = n[r],
                !O.undefined(t[e.prefix + "CancelFullScreen"])) {
                    e.supportsFullScreen = !0;
                    break
                }
                if (!O.undefined(t.msExitFullscreen) && t.msFullscreenEnabled) {
                    e.prefix = "ms",
                    e.supportsFullScreen = !0;
                    break
                }
            }
        else
            e.supportsFullScreen = !0;
        return e.supportsFullScreen && (e.fullScreenEventName = "ms" === e.prefix ? "MSFullscreenChange" : e.prefix + "fullscreenchange",
        e.isFullScreen = function(e) {
            switch (O.undefined(e) && (e = t.body),
            this.prefix) {
            case "":
                return t.fullscreenElement === e;
            case "moz":
                return t.mozFullScreenElement === e;
            default:
                return t[this.prefix + "FullscreenElement"] === e
            }
        }
        ,
        e.requestFullScreen = function(e) {
            return O.undefined(e) && (e = t.body),
            "" === this.prefix ? e.requestFullScreen() : e[this.prefix + ("ms" === this.prefix ? "RequestFullscreen" : "RequestFullScreen")]()
        }
        ,
        e.cancelFullScreen = function() {
            return "" === this.prefix ? t.cancelFullScreen() : t[this.prefix + ("ms" === this.prefix ? "ExitFullscreen" : "CancelFullScreen")]()
        }
        ,
        e.element = function() {
            return "" === this.prefix ? t.fullscreenElement : t[this.prefix + "FullscreenElement"]
        }
        ),
        e
    }
    function E(v, E) {
        function A(e, t, n, r) {
            h(e, t, n, x({}, r, {
                plyr: Ue
            }))
        }
        function j(t, n) {
            E.debug && e.console && (n = Array.prototype.slice.call(n),
            O.string(E.logPrefix) && E.logPrefix.length && n.unshift(E.logPrefix),
            console[t].apply(console, n))
        }
        function V() {
            return {
                url: E.iconUrl,
                absolute: 0 === E.iconUrl.indexOf("http") || Be.browser.isIE
            }
        }
        function R() {
            var e = []
              , t = V()
              , n = (t.absolute ? "" : t.url) + "#" + E.iconPrefix;
            return s(E.controls, "play-large") && e.push('<button type="button" data-plyr="play" class="plyr__play-large">', '<svg><use xlink:href="' + n + '-play" /></svg>', '<span class="plyr__sr-only">' + E.i18n.play + "</span>", "</button>"),
            e.push('<div class="plyr__controls">'),
            s(E.controls, "restart") && e.push('<button type="button" data-plyr="restart">', '<svg><use xlink:href="' + n + '-restart" /></svg>', '<span class="plyr__sr-only">' + E.i18n.restart + "</span>", "</button>"),
            s(E.controls, "rewind") && e.push('<button type="button" data-plyr="rewind">', '<svg><use xlink:href="' + n + '-rewind" /></svg>', '<span class="plyr__sr-only">' + E.i18n.rewind + "</span>", "</button>"),
            s(E.controls, "play") && e.push('<button type="button" data-plyr="play">', '<svg><use xlink:href="' + n + '-play" /></svg>', '<span class="plyr__sr-only">' + E.i18n.play + "</span>", "</button>", '<button type="button" data-plyr="pause">', '<svg><use xlink:href="' + n + '-pause" /></svg>', '<span class="plyr__sr-only">' + E.i18n.pause + "</span>", "</button>"),
            s(E.controls, "fast-forward") && e.push('<button type="button" data-plyr="fast-forward">', '<svg><use xlink:href="' + n + '-fast-forward" /></svg>', '<span class="plyr__sr-only">' + E.i18n.forward + "</span>", "</button>"),
            s(E.controls, "progress") && (e.push('<span class="plyr__progress">', '<label for="seek{id}" class="plyr__sr-only">Seek</label>', '<input id="seek{id}" class="plyr__progress--seek" type="range" min="0" max="100" step="0.1" value="0" data-plyr="seek">', '<progress class="plyr__progress--played" max="100" value="0" role="presentation"></progress>', '<progress class="plyr__progress--buffer" max="100" value="0">', "<span>0</span>% " + E.i18n.buffered, "</progress>"),
            E.tooltips.seek && e.push('<span class="plyr__tooltip">00:00</span>'),
            e.push("</span>")),
            s(E.controls, "current-time") && e.push('<span class="plyr__time">', '<span class="plyr__sr-only">' + E.i18n.currentTime + "</span>", '<span class="plyr__time--current">00:00</span>', "</span>"),
            s(E.controls, "duration") && e.push('<span class="plyr__time">', '<span class="plyr__sr-only">' + E.i18n.duration + "</span>", '<span class="plyr__time--duration">00:00</span>', "</span>"),
            s(E.controls, "mute") && e.push('<button type="button" data-plyr="mute">', '<svg class="icon--muted"><use xlink:href="' + n + '-muted" /></svg>', '<svg><use xlink:href="' + n + '-volume" /></svg>', '<span class="plyr__sr-only">' + E.i18n.toggleMute + "</span>", "</button>"),
            s(E.controls, "volume") && e.push('<span class="plyr__volume">', '<label for="volume{id}" class="plyr__sr-only">' + E.i18n.volume + "</label>", '<input id="volume{id}" class="plyr__volume--input" type="range" min="' + E.volumeMin + '" max="' + E.volumeMax + '" value="' + E.volume + '" data-plyr="volume">', '<progress class="plyr__volume--display" max="' + E.volumeMax + '" value="' + E.volumeMin + '" role="presentation"></progress>', "</span>"),
            s(E.controls, "captions") && e.push('<button type="button" data-plyr="captions">', '<svg class="icon--captions-on"><use xlink:href="' + n + '-captions-on" /></svg>', '<svg><use xlink:href="' + n + '-captions-off" /></svg>', '<span class="plyr__sr-only">' + E.i18n.toggleCaptions + "</span>", "</button>"),
            s(E.controls, "fullscreen") && e.push('<button type="button" data-plyr="fullscreen">', '<svg class="icon--exit-fullscreen"><use xlink:href="' + n + '-exit-fullscreen" /></svg>', '<svg><use xlink:href="' + n + '-enter-fullscreen" /></svg>', '<span class="plyr__sr-only">' + E.i18n.toggleFullscreen + "</span>", "</button>"),
            e.push("</div>"),
            e.join("")
        }
        function q() {
            if (Be.supported.full && ("audio" !== Be.type || E.fullscreen.allowAudio) && E.fullscreen.enabled) {
                var e = N.supportsFullScreen;
                e || E.fullscreen.fallback && !X() ? (Je((e ? "Native" : "Fallback") + " fullscreen enabled"),
                m(Be.container, E.classes.fullscreen.enabled, !0)) : Je("Fullscreen not supported and fallback disabled"),
                Be.buttons && Be.buttons.fullscreen && k(Be.buttons.fullscreen, !1),
                $()
            }
        }
        function D() {
            if ("video" === Be.type) {
                B(E.selectors.captions) || Be.videoContainer.insertAdjacentHTML("afterbegin", '<div class="' + p(E.selectors.captions) + '"></div>'),
                Be.usingTextTracks = !1,
                Be.media.textTracks && (Be.usingTextTracks = !0);
                for (var e, t = "", n = Be.media.childNodes, r = 0; r < n.length; r++)
                    "track" === n[r].nodeName.toLowerCase() && (e = n[r].kind,
                    "captions" !== e && "subtitles" !== e || (t = n[r].getAttribute("src")));
                if (Be.captionExists = !0,
                "" === t ? (Be.captionExists = !1,
                Je("No caption track found")) : Je("Caption track found; URI: " + t),
                Be.captionExists) {
                    for (var a = Be.media.textTracks, s = 0; s < a.length; s++)
                        a[s].mode = "hidden";
                    if (Y(Be),
                    (Be.browser.isIE && Be.browser.version >= 10 || Be.browser.isFirefox && Be.browser.version >= 31) && (Je("Detected browser with known TextTrack issues - using manual fallback"),
                    Be.usingTextTracks = !1),
                    Be.usingTextTracks) {
                        Je("TextTracks supported");
                        for (var o = 0; o < a.length; o++) {
                            var i = a[o];
                            "captions" !== i.kind && "subtitles" !== i.kind || g(i, "cuechange", function() {
                                this.activeCues[0] && "text"in this.activeCues[0] ? H(this.activeCues[0].getCueAsHTML()) : H()
                            })
                        }
                    } else if (Je("TextTracks not supported so rendering captions manually"),
                    Be.currentCaption = "",
                    Be.captions = [],
                    "" !== t) {
                        var l = new XMLHttpRequest;
                        l.onreadystatechange = function() {
                            if (4 === l.readyState)
                                if (200 === l.status) {
                                    var e, t = [], n = l.responseText, r = "\r\n";
                                    n.indexOf(r + r) === -1 && (r = n.indexOf("\r\r") !== -1 ? "\r" : "\n"),
                                    t = n.split(r + r);
                                    for (var a = 0; a < t.length; a++) {
                                        e = t[a],
                                        Be.captions[a] = [];
                                        var s = e.split(r)
                                          , o = 0;
                                        s[o].indexOf(":") === -1 && (o = 1),
                                        Be.captions[a] = [s[o], s[o + 1]]
                                    }
                                    Be.captions.shift(),
                                    Je("Successfully loaded the caption file via AJAX")
                                } else
                                    ze(E.logPrefix + "There was a problem loading the caption file via AJAX")
                        }
                        ,
                        l.open("get", t, !0),
                        l.send()
                    }
                } else
                    m(Be.container, E.classes.captions.enabled)
            }
        }
        function H(e) {
            var n = B(E.selectors.captions)
              , r = t.createElement("span");
            n.innerHTML = "",
            O.undefined(e) && (e = ""),
            O.string(e) ? r.innerHTML = e.trim() : r.appendChild(e),
            n.appendChild(r);
            n.offsetHeight
        }
        function W(e) {
            function t(e, t) {
                var n = [];
                n = e.split(" --> ");
                for (var r = 0; r < n.length; r++)
                    n[r] = n[r].replace(/(\d+:\d+:\d+\.\d+).*/, "$1");
                return a(n[t])
            }
            function n(e) {
                return t(e, 0)
            }
            function r(e) {
                return t(e, 1)
            }
            function a(e) {
                if (null === e || void 0 === e)
                    return 0;
                var t, n = [], r = [];
                return n = e.split(","),
                r = n[0].split(":"),
                t = Math.floor(60 * r[0] * 60) + Math.floor(60 * r[1]) + Math.floor(r[2])
            }
            if (!Be.usingTextTracks && "video" === Be.type && Be.supported.full && (Be.subcount = 0,
            e = O.number(e) ? e : Be.media.currentTime,
            Be.captions[Be.subcount])) {
                for (; r(Be.captions[Be.subcount][0]) < e.toFixed(1); )
                    if (Be.subcount++,
                    Be.subcount > Be.captions.length - 1) {
                        Be.subcount = Be.captions.length - 1;
                        break
                    }
                Be.media.currentTime.toFixed(1) >= n(Be.captions[Be.subcount][0]) && Be.media.currentTime.toFixed(1) <= r(Be.captions[Be.subcount][0]) ? (Be.currentCaption = Be.captions[Be.subcount][1],
                H(Be.currentCaption)) : H()
            }
        }
        function Y() {
            if (Be.buttons.captions) {
                m(Be.container, E.classes.captions.enabled, !0);
                var e = Be.storage.captionsEnabled;
                O.boolean(e) || (e = E.captions.defaultActive),
                e && (m(Be.container, E.classes.captions.active, !0),
                k(Be.buttons.captions, !0))
            }
        }
        function U(e) {
            return Be.container.querySelectorAll(e)
        }
        function B(e) {
            return U(e)[0]
        }
        function X() {
            try {
                return e.self !== e.top
            } catch (e) {
                return !0
            }
        }
        function $() {
            function e(e) {
                9 === e.which && Be.isFullscreen && (e.target !== r || e.shiftKey ? e.target === n && e.shiftKey && (e.preventDefault(),
                r.focus()) : (e.preventDefault(),
                n.focus()))
            }
            var t = U("input:not([disabled]), button:not([disabled])")
              , n = t[0]
              , r = t[t.length - 1];
            g(Be.container, "keydown", e)
        }
        function J(e, t) {
            if (O.string(t))
                d(e, Be.media, {
                    src: t
                });
            else if (t.constructor === Array)
                for (var n = t.length - 1; n >= 0; n--)
                    d(e, Be.media, t[n])
        }
        function z() {
            if (E.loadSprite) {
                var e = V();
                e.absolute ? (Je("AJAX loading absolute SVG sprite" + (Be.browser.isIE ? " (due to IE)" : "")),
                C(e.url, "sprite-plyr")) : Je("Sprite will be used as external resource directly")
            }
            var n = E.html;
            Je("Injecting custom controls"),
            n || (n = R()),
            n = o(n, "{seektime}", E.seekTime),
            n = o(n, "{id}", Math.floor(1e4 * Math.random()));
            var r;
            if (O.string(E.selectors.controls.container) && (r = t.querySelector(E.selectors.controls.container)),
            O.htmlElement(r) || (r = Be.container),
            r.insertAdjacentHTML("beforeend", n),
            E.tooltips.controls)
                for (var a = U([E.selectors.controls.wrapper, " ", E.selectors.labels, " .", E.classes.hidden].join("")), s = a.length - 1; s >= 0; s--) {
                    var i = a[s];
                    m(i, E.classes.hidden, !1),
                    m(i, E.classes.tooltip, !0)
                }
        }
        function G() {
            try {
                return Be.controls = B(E.selectors.controls.wrapper),
                Be.buttons = {},
                Be.buttons.seek = B(E.selectors.buttons.seek),
                Be.buttons.play = U(E.selectors.buttons.play),
                Be.buttons.pause = B(E.selectors.buttons.pause),
                Be.buttons.restart = B(E.selectors.buttons.restart),
                Be.buttons.rewind = B(E.selectors.buttons.rewind),
                Be.buttons.forward = B(E.selectors.buttons.forward),
                Be.buttons.fullscreen = B(E.selectors.buttons.fullscreen),
                Be.buttons.mute = B(E.selectors.buttons.mute),
                Be.buttons.captions = B(E.selectors.buttons.captions),
                Be.progress = {},
                Be.progress.container = B(E.selectors.progress.container),
                Be.progress.buffer = {},
                Be.progress.buffer.bar = B(E.selectors.progress.buffer),
                Be.progress.buffer.text = Be.progress.buffer.bar && Be.progress.buffer.bar.getElementsByTagName("span")[0],
                Be.progress.played = B(E.selectors.progress.played),
                Be.progress.tooltip = Be.progress.container && Be.progress.container.querySelector("." + E.classes.tooltip),
                Be.volume = {},
                Be.volume.input = B(E.selectors.volume.input),
                Be.volume.display = B(E.selectors.volume.display),
                Be.duration = B(E.selectors.duration),
                Be.currentTime = B(E.selectors.currentTime),
                Be.seekTime = U(E.selectors.seekTime),
                !0
            } catch (e) {
                return ze("It looks like there is a problem with your controls HTML"),
                Q(!0),
                !1
            }
        }
        function K() {
            m(Be.container, E.selectors.container.replace(".", ""), Be.supported.full)
        }
        function Q(e) {
            e && s(E.types.html5, Be.type) ? Be.media.setAttribute("controls", "") : Be.media.removeAttribute("controls")
        }
        function Z(e) {
            var t = E.i18n.play;
            if (O.string(E.title) && E.title.length && (t += ", " + E.title,
            Be.container.setAttribute("aria-label", E.title)),
            Be.supported.full && Be.buttons.play)
                for (var n = Be.buttons.play.length - 1; n >= 0; n--)
                    Be.buttons.play[n].setAttribute("aria-label", t);
            O.htmlElement(e) && e.setAttribute("title", E.i18n.frameTitle.replace("{title}", E.title))
        }
        function ee() {
            var t = null;
            Be.storage = {},
            L.supported && E.storage.enabled && (e.localStorage.removeItem("plyr-volume"),
            t = e.localStorage.getItem(E.storage.key),
            t && (/^\d+(\.\d+)?$/.test(t) ? te({
                volume: parseFloat(t)
            }) : Be.storage = JSON.parse(t)))
        }
        function te(t) {
            L.supported && E.storage.enabled && (x(Be.storage, t),
            e.localStorage.setItem(E.storage.key, JSON.stringify(Be.storage)))
        }
        function ne() {
            if (!Be.media)
                return void ze("No media element found!");
            if (Be.supported.full && (m(Be.container, E.classes.type.replace("{0}", Be.type), !0),
            s(E.types.embed, Be.type) && m(Be.container, E.classes.type.replace("{0}", "video"), !0),
            m(Be.container, E.classes.stopped, E.autoplay),
            m(Be.container, E.classes.isIos, Be.browser.isIos),
            m(Be.container, E.classes.isTouch, Be.browser.isTouch),
            "video" === Be.type)) {
                var e = t.createElement("div");
                e.setAttribute("class", E.classes.videoWrapper),
                i(Be.media, e),
                Be.videoContainer = e
            }
            s(E.types.embed, Be.type) && re()
        }
        function re() {
            var n, r = t.createElement("div"), s = Be.type + "-" + Math.floor(1e4 * Math.random());
            switch (Be.type) {
            case "youtube":
                n = T(Be.embedId);
                break;
            case "vimeo":
                n = S(Be.embedId);
                break;
            default:
                n = Be.embedId
            }
            for (var o = U('[id^="' + Be.type + '-"]'), i = o.length - 1; i >= 0; i--)
                l(o[i]);
            if (m(Be.media, E.classes.videoWrapper, !0),
            m(Be.media, E.classes.embedWrapper, !0),
            "youtube" === Be.type)
                Be.media.appendChild(r),
                r.setAttribute("id", s),
                O.object(e.YT) ? se(n, r) : (a(E.urls.youtube.api),
                e.onYouTubeReadyCallbacks = e.onYouTubeReadyCallbacks || [],
                e.onYouTubeReadyCallbacks.push(function() {
                    se(n, r)
                }),
                e.onYouTubeIframeAPIReady = function() {
                    e.onYouTubeReadyCallbacks.forEach(function(e) {
                        e()
                    })
                }
                );
            else if ("vimeo" === Be.type)
                if (Be.supported.full ? Be.media.appendChild(r) : r = Be.media,
                r.setAttribute("id", s),
                O.object(e.Vimeo))
                    oe(n, r);
                else {
                    a(E.urls.vimeo.api);
                    var u = e.setInterval(function() {
                        O.object(e.Vimeo) && (e.clearInterval(u),
                        oe(n, r))
                    }, 50)
                }
            else if ("soundcloud" === Be.type) {
                var d = t.createElement("iframe");
                d.loaded = !1,
                g(d, "load", function() {
                    d.loaded = !0
                }),
                c(d, {
                    src: "https://w.soundcloud.com/player/?url=https://api.soundcloud.com/tracks/" + n,
                    id: s
                }),
                r.appendChild(d),
                Be.media.appendChild(r),
                e.SC || a(E.urls.soundcloud.api);
                var p = e.setInterval(function() {
                    e.SC && d.loaded && (e.clearInterval(p),
                    ie.call(d))
                }, 50)
            }
        }
        function ae() {
            Be.supported.full && (We(),
            Ye()),
            Z(B("iframe"))
        }
        function se(t, n) {
            Be.embed = new e.YT.Player(n.id,{
                videoId: t,
                playerVars: {
                    autoplay: E.autoplay ? 1 : 0,
                    controls: Be.supported.full ? 0 : 1,
                    rel: 0,
                    showinfo: 0,
                    iv_load_policy: 3,
                    cc_load_policy: E.captions.defaultActive ? 1 : 0,
                    cc_lang_pref: "en",
                    wmode: "transparent",
                    modestbranding: 1,
                    disablekb: 1,
                    origin: "*"
                },
                events: {
                    onError: function(e) {
                        A(Be.container, "error", !0, {
                            code: e.data,
                            embed: e.target
                        })
                    },
                    onReady: function(t) {
                        var n = t.target;
                        Be.media.play = function() {
                            n.playVideo(),
                            Be.media.paused = !1
                        }
                        ,
                        Be.media.pause = function() {
                            n.pauseVideo(),
                            Be.media.paused = !0
                        }
                        ,
                        Be.media.stop = function() {
                            n.stopVideo(),
                            Be.media.paused = !0
                        }
                        ,
                        Be.media.duration = n.getDuration(),
                        Be.media.paused = !0,
                        Be.media.currentTime = 0,
                        Be.media.muted = n.isMuted(),
                        E.title = n.getVideoData().title,
                        Be.supported.full && Be.media.querySelector("iframe").setAttribute("tabindex", "-999999"),
                        ae(),
                        A(Be.media, "timeupdate"),
                        A(Be.media, "durationchange"),
                        e.clearInterval(Xe.buffering),
                        Xe.buffering = e.setInterval(function() {
                            Be.media.buffered = n.getVideoLoadedFraction(),
                            (null === Be.media.lastBuffered || Be.media.lastBuffered < Be.media.buffered) && A(Be.media, "progress"),
                            Be.media.lastBuffered = Be.media.buffered,
                            1 === Be.media.buffered && (e.clearInterval(Xe.buffering),
                            A(Be.media, "canplaythrough"))
                        }, 200)
                    },
                    onStateChange: function(t) {
                        var n = t.target;
                        switch (e.clearInterval(Xe.playing),
                        t.data) {
                        case 0:
                            Be.media.paused = !0,
                            A(Be.media, "ended");
                            break;
                        case 1:
                            Be.media.paused = !1,
                            Be.media.seeking && A(Be.media, "seeked"),
                            Be.media.seeking = !1,
                            A(Be.media, "play"),
                            A(Be.media, "playing"),
                            Xe.playing = e.setInterval(function() {
                                Be.media.currentTime = n.getCurrentTime(),
                                A(Be.media, "timeupdate")
                            }, 100),
                            Be.media.duration !== n.getDuration() && (Be.media.duration = n.getDuration(),
                            A(Be.media, "durationchange"));
                            break;
                        case 2:
                            Be.media.paused = !0,
                            A(Be.media, "pause")
                        }
                        A(Be.container, "statechange", !1, {
                            code: t.data
                        })
                    }
                }
            })
        }
        function oe(t, n) {
            Be.embed = new e.Vimeo.Player(n,{
                id: parseInt(t),
                loop: E.loop,
                autoplay: E.autoplay,
                byline: !1,
                portrait: !1,
                title: !1
            }),
            Be.media.play = function() {
                Be.embed.play(),
                Be.media.paused = !1
            }
            ,
            Be.media.pause = function() {
                Be.embed.pause(),
                Be.media.paused = !0
            }
            ,
            Be.media.stop = function() {
                Be.embed.stop(),
                Be.media.paused = !0
            }
            ,
            Be.media.paused = !0,
            Be.media.currentTime = 0,
            ae(),
            Be.embed.getCurrentTime().then(function(e) {
                Be.media.currentTime = e,
                A(Be.media, "timeupdate")
            }),
            Be.embed.getDuration().then(function(e) {
                Be.media.duration = e,
                A(Be.media, "durationchange")
            }),
            Be.embed.on("loaded", function() {
                O.htmlElement(Be.embed.element) && Be.supported.full && Be.embed.element.setAttribute("tabindex", "-999999")
            }),
            Be.embed.on("play", function() {
                Be.media.paused = !1,
                A(Be.media, "play"),
                A(Be.media, "playing")
            }),
            Be.embed.on("pause", function() {
                Be.media.paused = !0,
                A(Be.media, "pause")
            }),
            Be.embed.on("timeupdate", function(e) {
                Be.media.seeking = !1,
                Be.media.currentTime = e.seconds,
                A(Be.media, "timeupdate")
            }),
            Be.embed.on("progress", function(e) {
                Be.media.buffered = e.percent,
                A(Be.media, "progress"),
                1 === parseInt(e.percent) && A(Be.media, "canplaythrough")
            }),
            Be.embed.on("seeked", function() {
                Be.media.seeking = !1,
                A(Be.media, "seeked"),
                A(Be.media, "play")
            }),
            Be.embed.on("ended", function() {
                Be.media.paused = !0,
                A(Be.media, "ended")
            })
        }
        function ie() {
            Be.embed = e.SC.Widget(this),
            Be.embed.bind(e.SC.Widget.Events.READY, function() {
                Be.media.play = function() {
                    Be.embed.play(),
                    Be.media.paused = !1
                }
                ,
                Be.media.pause = function() {
                    Be.embed.pause(),
                    Be.media.paused = !0
                }
                ,
                Be.media.stop = function() {
                    Be.embed.seekTo(0),
                    Be.embed.pause(),
                    Be.media.paused = !0
                }
                ,
                Be.media.paused = !0,
                Be.media.currentTime = 0,
                Be.embed.getDuration(function(e) {
                    Be.media.duration = e / 1e3,
                    ae()
                }),
                Be.embed.getPosition(function(e) {
                    Be.media.currentTime = e,
                    A(Be.media, "timeupdate")
                }),
                Be.embed.bind(e.SC.Widget.Events.PLAY, function() {
                    Be.media.paused = !1,
                    A(Be.media, "play"),
                    A(Be.media, "playing")
                }),
                Be.embed.bind(e.SC.Widget.Events.PAUSE, function() {
                    Be.media.paused = !0,
                    A(Be.media, "pause")
                }),
                Be.embed.bind(e.SC.Widget.Events.PLAY_PROGRESS, function(e) {
                    Be.media.seeking = !1,
                    Be.media.currentTime = e.currentPosition / 1e3,
                    A(Be.media, "timeupdate")
                }),
                Be.embed.bind(e.SC.Widget.Events.LOAD_PROGRESS, function(e) {
                    Be.media.buffered = e.loadProgress,
                    A(Be.media, "progress"),
                    1 === parseInt(e.loadProgress) && A(Be.media, "canplaythrough")
                }),
                Be.embed.bind(e.SC.Widget.Events.FINISH, function() {
                    Be.media.paused = !0,
                    A(Be.media, "ended")
                })
            })
        }
        function le() {
            "play"in Be.media && Be.media.play()
        }
        function ue() {
            "pause"in Be.media && Be.media.pause()
        }
        function ce(e) {
            return O.boolean(e) || (e = Be.media.paused),
            e ? le() : ue(),
            e
        }
        function de(e) {
            O.number(e) || (e = E.seekTime),
            me(Be.media.currentTime - e)
        }
        function pe(e) {
            O.number(e) || (e = E.seekTime),
            me(Be.media.currentTime + e)
        }
        function me(e) {
            var t = 0
              , n = Be.media.paused
              , r = fe();
            O.number(e) ? t = e : O.object(e) && s(["input", "change"], e.type) && (t = e.target.value / e.target.max * r),
            t < 0 ? t = 0 : t > r && (t = r),
            Ne(t);
            try {
                Be.media.currentTime = t.toFixed(4)
            } catch (e) {}
            if (s(E.types.embed, Be.type)) {
                switch (Be.type) {
                case "youtube":
                    Be.embed.seekTo(t);
                    break;
                case "vimeo":
                    Be.embed.setCurrentTime(t.toFixed(0));
                    break;
                case "soundcloud":
                    Be.embed.seekTo(1e3 * t)
                }
                n && ue(),
                A(Be.media, "timeupdate"),
                Be.media.seeking = !0,
                A(Be.media, "seeking")
            }
            Je("Seeking to " + Be.media.currentTime + " seconds"),
            W(t)
        }
        function fe() {
            var e = parseInt(E.duration)
              , t = 0;
            return null === Be.media.duration || isNaN(Be.media.duration) || (t = Be.media.duration),
            isNaN(e) ? t : e
        }
        function ye() {
            m(Be.container, E.classes.playing, !Be.media.paused),
            m(Be.container, E.classes.stopped, Be.media.paused),
            Me(Be.media.paused)
        }
        function be() {
            P = {
                x: e.pageXOffset || 0,
                y: e.pageYOffset || 0
            }
        }
        function ve() {
            e.scrollTo(P.x, P.y)
        }
        function ge(e) {
            var n = N.supportsFullScreen;
            if (n) {
                if (!e || e.type !== N.fullScreenEventName)
                    return N.isFullScreen(Be.container) ? N.cancelFullScreen() : (be(),
                    N.requestFullScreen(Be.container)),
                    void (Be.isFullscreen = N.isFullScreen(Be.container));
                Be.isFullscreen = N.isFullScreen(Be.container)
            } else
                Be.isFullscreen = !Be.isFullscreen,
                t.body.style.overflow = Be.isFullscreen ? "hidden" : "";
            m(Be.container, E.classes.fullscreen.active, Be.isFullscreen),
            $(Be.isFullscreen),
            Be.buttons && Be.buttons.fullscreen && k(Be.buttons.fullscreen, Be.isFullscreen),
            A(Be.container, Be.isFullscreen ? "enterfullscreen" : "exitfullscreen", !0),
            !Be.isFullscreen && n && ve()
        }
        function he(e) {
            if (O.boolean(e) || (e = !Be.media.muted),
            k(Be.buttons.mute, e),
            Be.media.muted = e,
            0 === Be.media.volume && ke(E.volume),
            s(E.types.embed, Be.type)) {
                switch (Be.type) {
                case "youtube":
                    Be.embed[Be.media.muted ? "mute" : "unMute"]();
                    break;
                case "vimeo":
                case "soundcloud":
                    Be.embed.setVolume(Be.media.muted ? 0 : parseFloat(E.volume / E.volumeMax))
                }
                A(Be.media, "volumechange")
            }
        }
        function ke(e) {
            var t = E.volumeMax
              , n = E.volumeMin;
            if (O.undefined(e) && (e = Be.storage.volume),
            (null === e || isNaN(e)) && (e = E.volume),
            e > t && (e = t),
            e < n && (e = n),
            Be.media.volume = parseFloat(e / t),
            Be.volume.display && (Be.volume.display.value = e),
            s(E.types.embed, Be.type)) {
                switch (Be.type) {
                case "youtube":
                    Be.embed.setVolume(100 * Be.media.volume);
                    break;
                case "vimeo":
                case "soundcloud":
                    Be.embed.setVolume(Be.media.volume)
                }
                A(Be.media, "volumechange")
            }
            0 === e ? Be.media.muted = !0 : Be.media.muted && e > 0 && he()
        }
        function we(e) {
            var t = Be.media.muted ? 0 : Be.media.volume * E.volumeMax;
            O.number(e) || (e = E.volumeStep),
            ke(t + e)
        }
        function xe(e) {
            var t = Be.media.muted ? 0 : Be.media.volume * E.volumeMax;
            O.number(e) || (e = E.volumeStep),
            ke(t - e)
        }
        function Te() {
            var e = Be.media.muted ? 0 : Be.media.volume * E.volumeMax;
            Be.supported.full && (Be.volume.input && (Be.volume.input.value = e),
            Be.volume.display && (Be.volume.display.value = e)),
            te({
                volume: e
            }),
            m(Be.container, E.classes.muted, 0 === e),
            Be.supported.full && Be.buttons.mute && k(Be.buttons.mute, 0 === e)
        }
        function Se(e) {
            Be.supported.full && Be.buttons.captions && (O.boolean(e) || (e = Be.container.className.indexOf(E.classes.captions.active) === -1),
            Be.captionsEnabled = e,
            k(Be.buttons.captions, Be.captionsEnabled),
            m(Be.container, E.classes.captions.active, Be.captionsEnabled),
            A(Be.container, Be.captionsEnabled ? "captionsenabled" : "captionsdisabled", !0),
            te({
                captionsEnabled: Be.captionsEnabled
            }))
        }
        function _e(e) {
            var t = "waiting" === e.type;
            clearTimeout(Xe.loading),
            Xe.loading = setTimeout(function() {
                m(Be.container, E.classes.loading, t),
                Me(t)
            }, t ? 250 : 0)
        }
        function Ee(e) {
            if (Be.supported.full) {
                var t = Be.progress.played
                  , n = 0
                  , r = fe();
                if (e)
                    switch (e.type) {
                    case "timeupdate":
                    case "seeking":
                        if (Be.controls.pressed)
                            return;
                        n = w(Be.media.currentTime, r),
                        "timeupdate" === e.type && Be.buttons.seek && (Be.buttons.seek.value = n);
                        break;
                    case "playing":
                    case "progress":
                        t = Be.progress.buffer,
                        n = function() {
                            var e = Be.media.buffered;
                            return e && e.length ? w(e.end(0), r) : O.number(e) ? 100 * e : 0
                        }()
                    }
                Ce(t, n)
            }
        }
        function Ce(e, t) {
            if (Be.supported.full) {
                if (O.undefined(t) && (t = 0),
                O.undefined(e)) {
                    if (!Be.progress || !Be.progress.buffer)
                        return;
                    e = Be.progress.buffer
                }
                O.htmlElement(e) ? e.value = t : e && (e.bar && (e.bar.value = t),
                e.text && (e.text.innerHTML = t))
            }
        }
        function Fe(e, t) {
            if (t) {
                isNaN(e) && (e = 0),
                Be.secs = parseInt(e % 60),
                Be.mins = parseInt(e / 60 % 60),
                Be.hours = parseInt(e / 60 / 60 % 60);
                var n = parseInt(fe() / 60 / 60 % 60) > 0;
                Be.secs = ("0" + Be.secs).slice(-2),
                Be.mins = ("0" + Be.mins).slice(-2),
                t.innerHTML = (n ? Be.hours + ":" : "") + Be.mins + ":" + Be.secs
            }
        }
        function Ae() {
            if (Be.supported.full) {
                var e = fe() || 0;
                !Be.duration && E.displayDuration && Be.media.paused && Fe(e, Be.currentTime),
                Be.duration && Fe(e, Be.duration),
                Pe()
            }
        }
        function Ie(e) {
            Fe(Be.media.currentTime, Be.currentTime),
            e && "timeupdate" === e.type && Be.media.seeking || Ee(e)
        }
        function Ne(e) {
            O.number(e) || (e = 0);
            var t = fe()
              , n = w(e, t);
            Be.progress && Be.progress.played && (Be.progress.played.value = n),
            Be.buttons && Be.buttons.seek && (Be.buttons.seek.value = n)
        }
        function Pe(e) {
            var t = fe();
            if (E.tooltips.seek && Be.progress.container && 0 !== t) {
                var n = Be.progress.container.getBoundingClientRect()
                  , r = 0
                  , a = E.classes.tooltip + "--visible";
                if (e)
                    r = 100 / n.width * (e.pageX - n.left);
                else {
                    if (!f(Be.progress.tooltip, a))
                        return;
                    r = Be.progress.tooltip.style.left.replace("%", "")
                }
                r < 0 ? r = 0 : r > 100 && (r = 100),
                Fe(t / 100 * r, Be.progress.tooltip),
                Be.progress.tooltip.style.left = r + "%",
                e && s(["mouseenter", "mouseleave"], e.type) && m(Be.progress.tooltip, a, "mouseenter" === e.type)
            }
        }
        function Me(t) {
            if (E.hideControls && "audio" !== Be.type) {
                var n = 0
                  , r = !1
                  , a = t
                  , o = f(Be.container, E.classes.loading);
                if (O.boolean(t) || (t && t.type ? (r = "enterfullscreen" === t.type,
                a = s(["mousemove", "touchstart", "mouseenter", "focus"], t.type),
                s(["mousemove", "touchmove"], t.type) && (n = 2e3),
                "focus" === t.type && (n = 3e3)) : a = f(Be.container, E.classes.hideControls)),
                e.clearTimeout(Xe.hover),
                a || Be.media.paused || o) {
                    if (m(Be.container, E.classes.hideControls, !1),
                    Be.media.paused || o)
                        return;
                    Be.browser.isTouch && (n = 3e3)
                }
                a && Be.media.paused || (Xe.hover = e.setTimeout(function() {
                    (!Be.controls.pressed && !Be.controls.hover || r) && m(Be.container, E.classes.hideControls, !0)
                }, n))
            }
        }
        function Oe(e) {
            if (!O.undefined(e))
                return void Le(e);
            var t;
            switch (Be.type) {
            case "youtube":
                t = Be.embed.getVideoUrl();
                break;
            case "vimeo":
                Be.embed.getVideoUrl.then(function(e) {
                    t = e
                });
                break;
            case "soundcloud":
                Be.embed.getCurrentSound(function(e) {
                    t = e.permalink_url
                });
                break;
            default:
                t = Be.media.currentSrc
            }
            return t || ""
        }
        function Le(e) {
            function n() {
                if (Be.embed = null,
                l(Be.media),
                "video" === Be.type && Be.videoContainer && l(Be.videoContainer),
                Be.container && Be.container.removeAttribute("class"),
                "type"in e && (Be.type = e.type,
                "video" === Be.type)) {
                    var n = e.sources[0];
                    "type"in n && s(E.types.embed, n.type) && (Be.type = n.type)
                }
                switch (Be.supported = F(Be.type),
                Be.type) {
                case "video":
                    Be.media = t.createElement("video");
                    break;
                case "audio":
                    Be.media = t.createElement("audio");
                    break;
                case "youtube":
                case "vimeo":
                case "soundcloud":
                    Be.media = t.createElement("div"),
                    Be.embedId = e.sources[0].src
                }
                u(Be.container, Be.media),
                O.boolean(e.autoplay) && (E.autoplay = e.autoplay),
                s(E.types.html5, Be.type) && (E.crossorigin && Be.media.setAttribute("crossorigin", ""),
                E.autoplay && Be.media.setAttribute("autoplay", ""),
                "poster"in e && Be.media.setAttribute("poster", e.poster),
                E.loop && Be.media.setAttribute("loop", "")),
                m(Be.container, E.classes.fullscreen.active, Be.isFullscreen),
                m(Be.container, E.classes.captions.active, Be.captionsEnabled),
                K(),
                s(E.types.html5, Be.type) && J("source", e.sources),
                ne(),
                s(E.types.html5, Be.type) && ("tracks"in e && J("track", e.tracks),
                Be.media.load()),
                (s(E.types.html5, Be.type) || s(E.types.embed, Be.type) && !Be.supported.full) && (We(),
                Ye()),
                E.title = e.title,
                Z()
            }
            return O.object(e) && "sources"in e && e.sources.length ? (m(Be.container, E.classes.ready, !1),
            ue(),
            Ne(),
            Ce(),
            qe(),
            void De(n, !1)) : void ze("Invalid source format")
        }
        function je(e) {
            "video" === Be.type && Be.media.setAttribute("poster", e)
        }
        function Ve() {
            function n() {
                var e = ce()
                  , t = Be.buttons[e ? "play" : "pause"]
                  , n = Be.buttons[e ? "pause" : "play"];
                if (n = n && n.length > 1 ? n[n.length - 1] : n[0]) {
                    var r = f(t, E.classes.tabFocus);
                    setTimeout(function() {
                        n.focus(),
                        r && (m(t, E.classes.tabFocus, !1),
                        m(n, E.classes.tabFocus, !0))
                    }, 100)
                }
            }
            function r() {
                var e = t.activeElement;
                return e = e && e !== t.body ? t.querySelector(":focus") : null
            }
            function a(e) {
                return e.keyCode ? e.keyCode : e.which
            }
            function o(e) {
                for (var t in Be.buttons) {
                    var n = Be.buttons[t];
                    if (O.nodeList(n))
                        for (var r = 0; r < n.length; r++)
                            m(n[r], E.classes.tabFocus, n[r] === e);
                    else
                        m(n, E.classes.tabFocus, n === e)
                }
            }
            function i(e) {
                function t() {
                    var e = Be.media.duration;
                    O.number(e) && me(e / 10 * (n - 48))
                }
                var n = a(e)
                  , r = "keydown" === e.type
                  , o = r && n === u;
                if (O.number(n))
                    if (r) {
                        var i = [48, 49, 50, 51, 52, 53, 54, 56, 57, 32, 75, 38, 40, 77, 39, 37, 70, 67];
                        switch (s(i, n) && (e.preventDefault(),
                        e.stopPropagation()),
                        n) {
                        case 48:
                        case 49:
                        case 50:
                        case 51:
                        case 52:
                        case 53:
                        case 54:
                        case 55:
                        case 56:
                        case 57:
                            o || t();
                            break;
                        case 32:
                        case 75:
                            o || ce();
                            break;
                        case 38:
                            we();
                            break;
                        case 40:
                            xe();
                            break;
                        case 77:
                            o || he();
                            break;
                        case 39:
                            pe();
                            break;
                        case 37:
                            de();
                            break;
                        case 70:
                            ge();
                            break;
                        case 67:
                            o || Se()
                        }
                        !N.supportsFullScreen && Be.isFullscreen && 27 === n && ge(),
                        u = n
                    } else
                        u = null
            }
            var l = Be.browser.isIE ? "change" : "input";
            if (E.keyboardShorcuts.focused) {
                var u = null;
                E.keyboardShorcuts.global && g(e, "keydown keyup", function(e) {
                    var t = a(e)
                      , n = r()
                      , o = [48, 49, 50, 51, 52, 53, 54, 56, 57, 75, 77, 70, 67]
                      , l = I().length;
                    1 !== l || !s(o, t) || O.htmlElement(n) && y(n, E.selectors.editable) || i(e)
                }),
                g(Be.container, "keydown keyup", i)
            }
            g(e, "keyup", function(e) {
                var t = a(e)
                  , n = r();
                9 === t && o(n)
            }),
            g(t.body, "click", function() {
                m(B("." + E.classes.tabFocus), E.classes.tabFocus, !1)
            });
            for (var c in Be.buttons) {
                var d = Be.buttons[c];
                g(d, "blur", function() {
                    m(d, "tab-focus", !1);
                })
            }
            b(Be.buttons.play, "click", E.listeners.play, n),
            b(Be.buttons.pause, "click", E.listeners.pause, n),
            b(Be.buttons.restart, "click", E.listeners.restart, me),
            b(Be.buttons.rewind, "click", E.listeners.rewind, de),
            b(Be.buttons.forward, "click", E.listeners.forward, pe),
            b(Be.buttons.seek, l, E.listeners.seek, me),
            b(Be.volume.input, l, E.listeners.volume, function() {
                ke(Be.volume.input.value)
            }),
            b(Be.buttons.mute, "click", E.listeners.mute, he),
            b(Be.buttons.fullscreen, "click", E.listeners.fullscreen, ge),
            N.supportsFullScreen && g(t, N.fullScreenEventName, ge),
            b(Be.buttons.captions, "click", E.listeners.captions, Se),
            g(Be.progress.container, "mouseenter mouseleave mousemove", Pe),
            E.hideControls && (g(Be.container, "mouseenter mouseleave mousemove touchstart touchend touchcancel touchmove enterfullscreen", Me),
            g(Be.controls, "mouseenter mouseleave", function(e) {
                Be.controls.hover = "mouseenter" === e.type
            }),
            g(Be.controls, "mousedown mouseup touchstart touchend touchcancel", function(e) {
                Be.controls.pressed = s(["mousedown", "touchstart"], e.type)
            }),
            g(Be.controls, "focus blur", Me, !0)),
            g(Be.volume.input, "wheel", function(e) {
                e.preventDefault();
                var t = e.webkitDirectionInvertedFromDevice
                  , n = E.volumeStep / 5;
                (e.deltaY < 0 || e.deltaX > 0) && (t ? xe(n) : we(n)),
                (e.deltaY > 0 || e.deltaX < 0) && (t ? we(n) : xe(n))
            })
        }
        function Re() {
            if (g(Be.media, "timeupdate seeking", Ie),
            g(Be.media, "timeupdate", W),
            g(Be.media, "durationchange loadedmetadata", Ae),
            g(Be.media, "ended", function() {
                "video" === Be.type && E.showPosterOnEnd && ("video" === Be.type && H(),
                me(),
                Be.media.load())
            }),
            g(Be.media, "progress playing", Ee),
            g(Be.media, "volumechange", Te),
            g(Be.media, "play pause ended", ye),
            g(Be.media, "waiting canplay seeked", _e),
            E.clickToPlay && "audio" !== Be.type) {
                var e = B("." + E.classes.videoWrapper);
                if (!e)
                    return;
                e.style.cursor = "pointer",
                g(e, "click", function() {
                    E.hideControls && Be.browser.isTouch && !Be.media.paused || (Be.media.paused ? le() : Be.media.ended ? (me(),
                    le()) : ue())
                })
            }
            E.disableContextMenu && g(Be.media, "contextmenu", function(e) {
                e.preventDefault()
            }),
            g(Be.media, E.events.concat(["keyup", "keydown"]).join(" "), function(e) {
                A(Be.container, e.type, !0)
            })
        }
        function qe() {
            if (s(E.types.html5, Be.type)) {
                for (var e = Be.media.querySelectorAll("source"), t = 0; t < e.length; t++)
                    l(e[t]);
                Be.media.setAttribute("src", E.blankUrl),
                Be.media.load(),
                Je("Cancelled network requests")
            }
        }
        function De(n, r) {
            function a() {
                clearTimeout(Xe.cleanUp),
                O.boolean(r) || (r = !0),
                O.function(n) && n.call($e),
                r && (Be.init = !1,
                Be.container.parentNode.replaceChild($e, Be.container),
                t.body.style.overflow = "",
                A($e, "destroyed", !0))
            }
            if (!Be.init)
                return null;
            switch (Be.type) {
            case "youtube":
                e.clearInterval(Xe.buffering),
                e.clearInterval(Xe.playing),
                Be.embed.destroy(),
                a();
                break;
            case "vimeo":
                Be.embed.unload().then(a),
                Xe.cleanUp = e.setTimeout(a, 200);
                break;
            case "video":
            case "audio":
                Q(!0),
                a()
            }
        }
        function He() {
            if (Be.init)
                return null;
            if (N = _(),
            Be.browser = n(),
            O.htmlElement(Be.media)) {
                ee();
                var e = v.tagName.toLowerCase();
                "div" === e ? (Be.type = v.getAttribute("data-type"),
                Be.embedId = v.getAttribute("data-video-id"),
                v.removeAttribute("data-type"),
                v.removeAttribute("data-video-id")) : (Be.type = e,
                E.crossorigin = null !== v.getAttribute("crossorigin"),
                E.autoplay = E.autoplay || null !== v.getAttribute("autoplay"),
                E.loop = E.loop || null !== v.getAttribute("loop")),
                Be.supported = F(Be.type),
                Be.supported.basic && (Be.container = i(v, t.createElement("div")),
                /*Be.container.setAttribute("tabindex",-999999),*/
                K(),
                Je("" + Be.browser.name + " " + Be.browser.version),
                ne(),
                (s(E.types.html5, Be.type) || s(E.types.embed, Be.type) && !Be.supported.full) && (We(),
                Ye(),
                Z()),
                Be.init = !0)
            }
        }
        function We() {
            if (!Be.supported.full)
                return ze("Basic support only", Be.type),
                l(B(E.selectors.controls.wrapper)),
                l(B(E.selectors.buttons.play)),
                void Q(!0);
            var e = !U(E.selectors.controls.wrapper).length;
            e && z(),
            G() && (e && Ve(),
            Re(),
            Q(),
            q(),
            D(),
            ke(),
            Te(),
            Ie(),
            ye())
        }
        function Ye() {
            e.setTimeout(function() {
                A(Be.media, "ready")
            }, 0),
            m(Be.media, M.classes.setup, !0),
            m(Be.container, E.classes.ready, !0),
            Be.media.plyr = Ue,
            E.autoplay && le()
        }
        var Ue, Be = this, Xe = {};
        Be.media = v;
        var $e = v.cloneNode(!0)
          , Je = function() {
            j("log", arguments)
        }
          , ze = function() {
            j("warn", arguments)
        };
        return Je("Config", E),
        Ue = {
            getOriginal: function() {
                return $e
            },
            getContainer: function() {
                return Be.container
            },
            getEmbed: function() {
                return Be.embed
            },
            getMedia: function() {
                return Be.media
            },
            getType: function() {
                return Be.type
            },
            getDuration: fe,
            getCurrentTime: function() {
                return Be.media.currentTime
            },
            getVolume: function() {
                return Be.media.volume
            },
            isMuted: function() {
                return Be.media.muted
            },
            isReady: function() {
                return f(Be.container, E.classes.ready)
            },
            isLoading: function() {
                return f(Be.container, E.classes.loading)
            },
            isPaused: function() {
                return Be.media.paused
            },
            on: function(e, t) {
                return g(Be.container, e, t),
                this
            },
            play: le,
            pause: ue,
            stop: function() {
                ue(),
                me()
            },
            restart: me,
            rewind: de,
            forward: pe,
            seek: me,
            source: Oe,
            poster: je,
            setVolume: ke,
            togglePlay: ce,
            toggleMute: he,
            toggleCaptions: Se,
            toggleFullscreen: ge,
            toggleControls: Me,
            isFullscreen: function() {
                return Be.isFullscreen || !1
            },
            support: function(e) {
                return r(Be, e)
            },
            destroy: De
        },
        He(),
        Be.init ? Ue : null
    }
    function C(e, n) {
        var r = new XMLHttpRequest;
        if (!O.string(n) || !O.htmlElement(t.querySelector("#" + n))) {
            var a = t.createElement("div");
            a.setAttribute("hidden", ""),
            O.string(n) && a.setAttribute("id", n),
            t.body.insertBefore(a, t.body.childNodes[0]),
            "withCredentials"in r && (r.open("GET", e, !0),
            r.onload = function() {
                a.innerHTML = r.responseText
            }
            ,
            r.send())
        }
    }
    function F(e) {
        var r = n()
          , a = r.isIE && r.version <= 9
          , s = r.isIos
          , o = r.isIphone
          , i = !!t.createElement("audio").canPlayType
          , l = !!t.createElement("video").canPlayType
          , u = !1
          , c = !1;
        switch (e) {
        case "video":
            u = l,
            c = u && !a && !o;
            break;
        case "audio":
            u = i,
            c = u && !a;
            break;
        case "vimeo":
            u = !0,
            c = !a && !s;
            break;
        case "youtube":
            u = !0,
            c = !a && !s,
            s && !o && r.version >= 10 && (c = !0);
            break;
        case "soundcloud":
            u = !0,
            c = !a && !o;
            break;
        default:
            u = i && l,
            c = u && !a
        }
        return {
            basic: u,
            full: c
        }
    }
    function A(e, n) {
        function r(e, t) {
            f(t, M.classes.hook) || a.push({
                target: e,
                media: t
            })
        }
        var a = []
          , s = []
          , o = [M.selectors.html5, M.selectors.embed].join(",");
        if (O.string(e) ? e = t.querySelectorAll(e) : O.htmlElement(e) ? e = [e] : O.nodeList(e) || O.array(e) || O.string(e) || (O.undefined(n) && O.object(e) && (n = e),
        e = t.querySelectorAll(o)),
        O.nodeList(e) && (e = Array.prototype.slice.call(e)),
        !F().basic || !e.length)
            return !1;
        for (var i = 0; i < e.length; i++) {
            var l = e[i]
              , u = l.querySelectorAll(o);
            if (u.length)
                for (var c = 0; c < u.length; c++)
                    r(l, u[c]);
            else
                y(l, o) && r(l, l)
        }
        return a.forEach(function(e) {
            var t = e.target
              , r = e.media
              , a = !1;
            r === t && (a = !0);
            var o = {};
            try {
                o = JSON.parse(t.getAttribute("data-plyr"))
            } catch (e) {}
            var i = x({}, M, n, o);
            if (!i.enabled)
                return null;
            var l = new E(r,i);
            if (O.object(l)) {
                if (i.debug) {
                    var u = i.events.concat(["setup", "statechange", "enterfullscreen", "exitfullscreen", "captionsenabled", "captionsdisabled"]);
                    g(l.getContainer(), u.join(" "), function(e) {
                        console.log([i.logPrefix, "event:", e.type].join(" "), e.detail.plyr)
                    })
                }
                h(l.getContainer(), "setup", !0, {
                    plyr: l
                }),
                s.push(l)
            }
        }),
        s
    }
    function I(e) {
        if (O.string(e) ? e = t.querySelector(e) : O.undefined(e) && (e = t.body),
        O.htmlElement(e)) {
            var n = e.querySelectorAll("." + M.classes.setup)
              , r = [];
            return Array.prototype.slice.call(n).forEach(function(e) {
                O.object(e.plyr) && r.push(e.plyr)
            }),
            r
        }
        return []
    }
    var N, P = {
        x: 0,
        y: 0
    }, M = {
        enabled: !0,
        debug: !1,
        autoplay: !1,
        loop: !1,
        seekTime: 10,
        volume: 10,
        volumeMin: 0,
        volumeMax: 10,
        volumeStep: 1,
        duration: null,
        displayDuration: !0,
        loadSprite: !0,
        iconPrefix: "plyr",
        iconUrl: "https://cdn.plyr.io/2.0.11/plyr.svg",
        blankUrl: "https://cdn.selz.com/plyr/blank.mp4",
        clickToPlay: !0,
        hideControls: !0,
        showPosterOnEnd: !1,
        disableContextMenu: !0,
        keyboardShorcuts: {
            focused: !0,
            global: !1
        },
        tooltips: {
            controls: !1,
            seek: !0
        },
        selectors: {
            html5: "video, audio",
            embed: "[data-type]",
            editable: "input, textarea, select, [contenteditable]",
            container: ".plyr",
            controls: {
                container: null,
                wrapper: ".plyr__controls"
            },
            labels: "[data-plyr]",
            buttons: {
                seek: '[data-plyr="seek"]',
                play: '[data-plyr="play"]',
                pause: '[data-plyr="pause"]',
                restart: '[data-plyr="restart"]',
                rewind: '[data-plyr="rewind"]',
                forward: '[data-plyr="fast-forward"]',
                mute: '[data-plyr="mute"]',
                captions: '[data-plyr="captions"]',
                fullscreen: '[data-plyr="fullscreen"]'
            },
            volume: {
                input: '[data-plyr="volume"]',
                display: ".plyr__volume--display"
            },
            progress: {
                container: ".plyr__progress",
                buffer: ".plyr__progress--buffer",
                played: ".plyr__progress--played"
            },
            captions: ".plyr__captions",
            currentTime: ".plyr__time--current",
            duration: ".plyr__time--duration"
        },
        classes: {
            setup: "plyr--setup",
            ready: "plyr--ready",
            videoWrapper: "plyr__video-wrapper",
            embedWrapper: "plyr__video-embed",
            type: "plyr--{0}",
            stopped: "plyr--stopped",
            playing: "plyr--playing",
            muted: "plyr--muted",
            loading: "plyr--loading",
            hover: "plyr--hover",
            tooltip: "plyr__tooltip",
            hidden: "plyr__sr-only",
            hideControls: "plyr--hide-controls",
            isIos: "plyr--is-ios",
            isTouch: "plyr--is-touch",
            captions: {
                enabled: "plyr--captions-enabled",
                active: "plyr--captions-active"
            },
            fullscreen: {
                enabled: "plyr--fullscreen-enabled",
                active: "plyr--fullscreen-active"
            },
            tabFocus: "tab-focus"
        },
        captions: {
            defaultActive: !1
        },
        fullscreen: {
            enabled: !0,
            fallback: !0,
            allowAudio: !1
        },
        storage: {
            enabled: !0,
            key: "plyr"
        },
        controls: ["play-large", "play", "progress", "current-time", "mute", "volume", "captions", "fullscreen"],
        i18n: {
            restart: "",
            rewind: "",
            play: "",
            pause: "",
            forward: "",
            played: "",
            buffered: "",
            currentTime: "",
            duration: "",
            volume: "",
            toggleMute: "",
            toggleCaptions: "",
            toggleFullscreen: "",
            frameTitle: "Player for {title}"
        },
        types: {
            embed: ["youtube", "vimeo", "soundcloud"],
            html5: ["video", "audio"]
        },
        urls: {
            vimeo: {
                api: "https://player.vimeo.com/api/player.js"
            },
            youtube: {
                api: "https://www.youtube.com/iframe_api"
            },
            soundcloud: {
                api: "https://w.soundcloud.com/player/api.js"
            }
        },
        listeners: {
            seek: null,
            play: null,
            pause: null,
            restart: null,
            rewind: null,
            forward: null,
            mute: null,
            volume: null,
            captions: null,
            fullscreen: null
        },
        events: ["ready", "ended", "progress", "stalled", "playing", "waiting", "canplay", "canplaythrough", "loadstart", "loadeddata", "loadedmetadata", "timeupdate", "volumechange", "play", "pause", "error", "seeking", "seeked", "emptied"],
        logPrefix: "[Plyr]"
    }, O = {
        object: function(e) {
            return null !== e && "object" == typeof e
        },
        array: function(e) {
            return null !== e && "object" == typeof e && e.constructor === Array
        },
        number: function(e) {
            return null !== e && ("number" == typeof e && !isNaN(e - 0) || "object" == typeof e && e.constructor === Number)
        },
        string: function(e) {
            return null !== e && ("string" == typeof e || "object" == typeof e && e.constructor === String)
        },
        boolean: function(e) {
            return null !== e && "boolean" == typeof e
        },
        nodeList: function(e) {
            return null !== e && e instanceof NodeList
        },
        htmlElement: function(e) {
            return null !== e && e instanceof HTMLElement
        },
        function: function(e) {
            return null !== e && "function" == typeof e
        },
        undefined: function(e) {
            return null !== e && "undefined" == typeof e
        }
    }, L = {
        supported: function() {
            if (!("localStorage"in e))
                return !1;
            try {
                e.localStorage.setItem("___test", "OK");
                var t = e.localStorage.getItem("___test");
                return e.localStorage.removeItem("___test"),
                "OK" === t
            } catch (e) {
                return !1
            }
            return !1
        }()
    };
    return {
        setup: A,
        supported: F,
        loadSprite: C,
        get: I
    }
}),
function() {
    function e(e, t) {
        t = t || {
            bubbles: !1,
            cancelable: !1,
            detail: void 0
        };
        var n = document.createEvent("CustomEvent");
        return n.initCustomEvent(e, t.bubbles, t.cancelable, t.detail),
        n
    }
    "function" != typeof window.CustomEvent && (e.prototype = window.Event.prototype,
    window.CustomEvent = e)
}();
