var tl = new TimelineMax({ paused: true });

tl.to(".menu-container", 0.4, {
    right: "0%"
});

tl.staggerFrom(".link", 0.4, { opacity: 0 }, 0.1, "-=0.2");

tl.reverse();

$(document).on("click", ".open-menu", function () {
    tl.reversed(!tl.reversed());
});

$(document).on("click", ".close-menu", function () {
    tl.reversed(!tl.reversed());
});




















