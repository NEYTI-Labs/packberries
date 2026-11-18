import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';

new Swiper('.article-cards', {
    loop: true,
    slidesPerView: 1.4,
    spaceBetween: 15,
    grabCursor: true,
    pagination: {
        el: '.article-pagination',
        type: 'bullets',
        clickable: true,
    },
    breakpoints: {
        450: { slidesPerView: 2.2, spaceBetween: 15 },
        768: { slidesPerView: 3, spaceBetween: 15 },
        992: { slidesPerView: 4, spaceBetween: 15 },
    },
});

new Swiper('.article-bottom__blog', {
    loop: true,
    slidesPerView: 1.3,
    spaceBetween: 15,
    grabCursor: true,
    pagination: {
        el: '.article-pagination',
        type: 'bullets',
        clickable: true,
    },
    breakpoints: {
        577: { slidesPerView: 2.2, spaceBetween: 15 },
        768: { slidesPerView: 3, spaceBetween: 15 },
        992: { slidesPerView: 4, spaceBetween: 15 },
    },
});