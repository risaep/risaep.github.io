document.addEventListener('DOMContentLoaded', function () {
    new Splide('#categoryCarousel', {
        type: 'loop',
        perPage: 1,
        autoplay: true,
        interval: 3000,
    }).mount();
});