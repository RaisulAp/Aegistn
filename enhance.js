/* ============================================================================
   PT AEGIS TEKNOLOGI NUSANTARA — enhancement layer
   --------------------------------------------------------------------------
   Progressive enhancement that sits alongside app.js without modifying it.

   Contents
     1.  Scroll reveal
     2.  Portfolio carousel
     3.  Service figure

   Design rule followed throughout: every interactive element already exists in
   the markup and works without this file except the carousel, which degrades to
   showing its first slide. Nothing here is required for the page to be read or
   navigated.
   ========================================================================== */

(function () {
    "use strict";

    var prefersReduced = false;
    try {
        prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    } catch (e) { /* older engines: assume motion is fine */ }

    /* ═════════════════════════════════════════════════════════════════════════
       1. SCROLL REVEAL
       Adds .is-visible once an element has entered the viewport. Elements that
       are already on screen at load are shown without animation, so the first
       paint is never empty.
       ═══════════════════════════════════════════════════════════════════════ */

    function initReveal() {
        var nodes = document.querySelectorAll(".reveal");
        if (!nodes.length) return;

        if (prefersReduced || !("IntersectionObserver" in window)) {
            nodes.forEach(function (el) { el.classList.add("is-visible"); });
            return;
        }

        var observer = new IntersectionObserver(function (entries) {
            entries.forEach(function (entry) {
                if (!entry.isIntersecting) return;
                entry.target.classList.add("is-visible");
                observer.unobserve(entry.target);
            });
        }, { threshold: 0.12, rootMargin: "0px 0px -8% 0px" });

        nodes.forEach(function (el) {
            /* Anything above the fold is revealed immediately, without delay,
               so a visitor never waits to read the hero. */
            var box = el.getBoundingClientRect();
            if (box.top < (window.innerHeight || 0) * 0.92) {
                el.classList.add("is-visible");
            } else {
                observer.observe(el);
            }
        });
    }

    /* ═════════════════════════════════════════════════════════════════════════
       2. PORTFOLIO CAROUSEL
       ═══════════════════════════════════════════════════════════════════════ */

    function initCarousel() {
        var root = document.getElementById("work-carousel");
        if (!root) return;

        var slides = root.querySelectorAll(".work__slide");
        var dots = root.querySelectorAll("[data-work-dot]");
        var thumbs = root.querySelectorAll("[data-work-thumb]");
        var prevBtn = root.querySelector("[data-work-prev]");
        var nextBtn = root.querySelector("[data-work-next]");
        var toggleBtn = root.querySelector("[data-work-toggle]");
        var progressEl = root.querySelector("[data-work-progress]");
        var viewport = root.querySelector(".work__viewport");
        if (!slides.length) return;

        var AUTOPLAY_MS = 6500;
        var index = 0;
        var timer = null;
        var playing = !prefersReduced;
        var paused = false;              /* transient: hover / focus / hidden tab */
        var visible = true;              /* in-viewport */

        function pad(n) { return (n < 9 ? "0" : "") + (n + 1); }

        function apply() {
            slides.forEach(function (slide, i) {
                var on = i === index;
                slide.classList.toggle("is-active", on);
                /* Keep off-screen slides out of the a11y tree and tab order. */
                slide.setAttribute("aria-hidden", on ? "false" : "true");
            });
            dots.forEach(function (dot, i) {
                var on = i === index;
                dot.classList.toggle("is-active", on);
                dot.setAttribute("aria-selected", on ? "true" : "false");
            });
            thumbs.forEach(function (thumb, i) {
                thumb.classList.toggle("is-active", i === index);
            });
            if (progressEl) {
                progressEl.textContent = pad(index) + " / " + pad(slides.length - 1);
            }
        }

        function goTo(next, userInitiated) {
            var count = slides.length;
            index = ((next % count) + count) % count;
            apply();
            if (userInitiated) restart();
        }

        function next() { goTo(index + 1, false); }
        function prev() { goTo(index - 1, false); }

        function tick() {
            if (!playing || paused || !visible) return;
            next();
        }

        function restart() {
            if (timer) window.clearInterval(timer);
            timer = null;
            if (playing) timer = window.setInterval(tick, AUTOPLAY_MS);
        }

        function setPlaying(on) {
            playing = on;
            if (toggleBtn) {
                toggleBtn.setAttribute("aria-pressed", on ? "false" : "true");
                toggleBtn.setAttribute("aria-label", on ? "Jeda putar otomatis" : "Putar otomatis");
                var pause = toggleBtn.querySelector(".work-icon-pause");
                var play = toggleBtn.querySelector(".work-icon-play");
                if (pause) pause.style.display = on ? "" : "none";
                if (play) play.style.display = on ? "none" : "";
            }
            restart();
        }

        /* ---- Controls ---- */
        if (prevBtn) prevBtn.addEventListener("click", function () { goTo(index - 1, true); });
        if (nextBtn) nextBtn.addEventListener("click", function () { goTo(index + 1, true); });
        if (toggleBtn) toggleBtn.addEventListener("click", function () { setPlaying(!playing); });

        dots.forEach(function (dot) {
            dot.addEventListener("click", function () {
                goTo(parseInt(dot.getAttribute("data-work-dot"), 10) || 0, true);
            });
        });

        thumbs.forEach(function (thumb) {
            thumb.addEventListener("click", function () {
                goTo(parseInt(thumb.getAttribute("data-work-thumb"), 10) || 0, true);
            });
        });

        /* ---- Keyboard: arrow keys move between slides when focus is inside ---- */
        root.addEventListener("keydown", function (e) {
            if (e.key === "ArrowLeft") { e.preventDefault(); goTo(index - 1, true); }
            else if (e.key === "ArrowRight") { e.preventDefault(); goTo(index + 1, true); }
        });

        /* ---- Pause while the visitor is reading or interacting ---- */
        if (viewport) {
            viewport.addEventListener("mouseenter", function () { paused = true; });
            viewport.addEventListener("mouseleave", function () { paused = false; });
            viewport.addEventListener("focusin", function () { paused = true; });
            viewport.addEventListener("focusout", function () { paused = false; });

            /* ---- Touch swipe ---- */
            var startX = 0, startY = 0, tracking = false;

            viewport.addEventListener("touchstart", function (e) {
                if (e.touches.length !== 1) return;
                startX = e.touches[0].clientX;
                startY = e.touches[0].clientY;
                tracking = true;
                paused = true;
            }, { passive: true });

            viewport.addEventListener("touchend", function (e) {
                if (!tracking) return;
                tracking = false;
                paused = false;
                var touch = e.changedTouches[0];
                var dx = touch.clientX - startX;
                var dy = touch.clientY - startY;
                /* Horizontal intent only, with a real threshold. */
                if (Math.abs(dx) > 45 && Math.abs(dx) > Math.abs(dy) * 1.4) {
                    if (dx < 0) goTo(index + 1, true); else goTo(index - 1, true);
                }
            }, { passive: true });

            viewport.addEventListener("touchcancel", function () {
                tracking = false;
                paused = false;
            }, { passive: true });

            /* ---- Stop autoplay while the carousel is off screen ---- */
            if ("IntersectionObserver" in window) {
                var io = new IntersectionObserver(function (entries) {
                    entries.forEach(function (entry) { visible = entry.isIntersecting; });
                }, { threshold: 0.15 });
                io.observe(viewport);
            }
        }

        /* ---- Stop autoplay while the browser tab is hidden ---- */
        document.addEventListener("visibilitychange", function () {
            paused = document.hidden;
        });

        apply();
        setPlaying(playing);
    }

    /* ═════════════════════════════════════════════════════════════════════════
       3. SERVICE FIGURE
       app.js rewrites the service panel text and marks the active tab with
       aria-selected. We mirror that onto the panel's photograph, so switching
       service also changes the image, with a real caption per service.
       ═══════════════════════════════════════════════════════════════════════ */

    var SERVICE_CAPTIONS = [
        "Rekayasa keandalan",
        "Marine MRO",
        "Digital MRO",
        "Condition monitoring",
        "Managed reliability"
    ];

    function initServiceFigure() {
        var tablist = document.getElementById("services-tablist");
        var figure = document.getElementById("services-figure");
        if (!tablist || !figure) return;

        var images = figure.querySelectorAll("[data-service-img]");
        var capEl = document.getElementById("services-figure-cap");
        var codeEl = document.getElementById("services-figure-code");
        var current = -1;

        function show(i) {
            if (i === current || !images.length) return;
            current = i;
            images.forEach(function (img) {
                var on = parseInt(img.getAttribute("data-service-img"), 10) === i;
                if (on) {
                    /* Decoding before paint avoids a flash of the previous image. */
                    img.classList.add("is-shown");
                } else {
                    img.classList.remove("is-shown");
                }
            });
            if (capEl && SERVICE_CAPTIONS[i]) capEl.textContent = SERVICE_CAPTIONS[i];
            if (codeEl) codeEl.textContent = "4." + (i + 1);
        }

        function syncFromTabs() {
            var tabs = tablist.querySelectorAll("button[role='tab']");
            tabs.forEach(function (tab, i) {
                if (tab.getAttribute("aria-selected") === "true") show(i);
            });
        }

        tablist.addEventListener("click", function () {
            /* app.js writes aria-selected inside a 50 ms timeout; match that. */
            window.setTimeout(syncFromTabs, 70);
        });

        tablist.addEventListener("keydown", function (e) {
            if (e.key === "ArrowRight" || e.key === "ArrowLeft" ||
                e.key === "Home" || e.key === "End") {
                window.setTimeout(syncFromTabs, 70);
            }
        });

        show(0);
    }

    /* ═════════════════════════════════════════════════════════════════════════
       BOOT
       ═══════════════════════════════════════════════════════════════════════ */

    function boot() {
        initReveal();
        initCarousel();
        initServiceFigure();
    }

    if (document.readyState === "loading") {
        document.addEventListener("DOMContentLoaded", boot);
    } else {
        boot();
    }
})();
