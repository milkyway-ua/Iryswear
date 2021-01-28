// import Swiper, { Navigation, Pagination } from 'swiper';
// Swiper.use([Navigation, Pagination]);

function ibg(){
    $.each($('.ibg'), function(index, val) {
        if($(this).find('img').length>0){
            $(this).css('background-image','url("'+$(this).find('img').attr('src')+'")');
        }
    });
}
ibg();

//SLICK SLIDER
$(document).ready(function () {

    $('.slick-banner').slick({
        dots: true,
        speed: 300,
        adaptiveHeight: true,
    });
});
    
// BURGER
$(document).on('click', '.bottom-head__burger', function () {
    $(this).toggleClass('active');
    $('.nav-menu').toggleClass('active');
    $('body').toggleClass('lock');
})



new Swiper('.sellers__slider-b', {
    // Optional parameters
    slidesPerView: 4,
    SlideToClickedSlide: true,
    spaceBetween: 30,
    slidesPerGroup: 4,

    breakpoints: {
        320: {
            slidesPerView: 2,
            slidesPerGroup: 2,
        },

        576: {
            slidesPerView: 3,
            slidesPerGroup: 3,
        },

        775: {
            slidesPerView: 4,
            slidesPerGroup: 4,
        },

        // 992: {
        //     slidesPerView: 4,
        //     slidesPerGroup: 4,
        // },

    },
    



    // Navigation arrows
    navigation: {
        prevEl:'.slider-swiper__arrow-prev',
        nextEl: '.slider-swiper__arrow-next',
    },

})


new Swiper('.slider-swiper-s', {
    // Optional parameters
    slidesPerView: 1,
    nested: true,
    SlideToClickedSlide: true,
    loop: true,

    
    navigation: {
        prevEl:'.slider-swiper-s__arrow-prev',
        nextEl: '.slider-swiper-s__arrow-next',
    },

    
})


