const swiper1 = new Swiper('.idc-swiper-1', {
    // Default parameters
    loop: false,
    direction: "horizontal",
    slidesPerView: 1,
    spaceBetween: 25,
    watchSlidesVisibility: true,
    watchSlidesProgress: true,
    touchReleaseOnEdges: true,
    allowTouchMove: true,
    /*    grabCursor: true, */
    watchOverflow: true,
    grabCursor: true,

    pagination: {
        el: ".idc-swiper-1 .idc-swiper-pagination",
        type: "bullets",
        clickable: true,
    },
    navigation: {
        nextEl: ".idc-swiper-1 .idc-swiper-button-next",
        prevEl: ".idc-swiper-1 .idc-swiper-button-prev",
    },
});

const swiper2 = new Swiper('.idc-swiper-2', {
    // Default parameters
    loop: false,
    direction: "horizontal",
    slidesPerView: 1,
    spaceBetween: 25,
    watchSlidesVisibility: true,
    watchSlidesProgress: true,
    touchReleaseOnEdges: true,
    allowTouchMove: true,
    /*    grabCursor: true, */
    watchOverflow: true,
    grabCursor: true,
    autoHeight: true,
    pagination: {
        el: ".idc-swiper-2 .idc-swiper-pagination",
        type: "bullets",
        clickable: true,
    },
    navigation: {
        nextEl: ".idc-swiper-2 .idc-swiper-button-next",
        prevEl: ".idc-swiper-2 .idc-swiper-button-prev",
    },
});

const swiperAbout = new Swiper('.idc-swiper-3', {
    // Default parameters
    loop: false,
    direction: "horizontal",
    slidesPerView: 1,
    spaceBetween: 25,
    watchSlidesVisibility: true,
    watchSlidesProgress: true,
    touchReleaseOnEdges: true,
    allowTouchMove: true,
    /*    grabCursor: true, */
    watchOverflow: true,
    grabCursor: true,

    pagination: {
        el: ".idc-swiper-3 .idc-swiper-pagination",
        type: "fraction",
        clickable: true,
    },
    navigation: {
        nextEl: ".idc-swiper-3 .idc-swiper-button-next",
        prevEl: ".idc-swiper-3 .idc-swiper-button-prev",
    },
});
const swiperProgs = new Swiper('.idc-swiper-4', {
    // Default parameters
    loop: false,
    direction: "horizontal",
    slidesPerView: 1,
    spaceBetween: 25,
    watchSlidesVisibility: true,
    watchSlidesProgress: true,
    touchReleaseOnEdges: true,
    allowTouchMove: true,
    /*    grabCursor: true, */
    watchOverflow: true,
    grabCursor: true,

    pagination: {
        el: ".idc-swiper-4 .idc-swiper-pagination",
        type: "fraction",
        clickable: true,
    },
    navigation: {
        nextEl: ".idc-swiper-4 .idc-swiper-button-next",
        prevEl: ".idc-swiper-4 .idc-swiper-button-prev",
    },
});