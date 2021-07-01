document.addEventListener('DOMContentLoaded', () => {
    
    $(document).on('click', '.js-modal-login-trigger', function() {
        $('.js-modal-login').toggleClass('js-active');
        $('body').removeClass('hidden')
        if($('.js-modal-login').hasClass('js-active')) {
            $('body').addClass('hidden')
        }
    });
    
    $('.js-example-basic-single').select2({
        minimumResultsForSearch: -1,
        dropdownParent: $('.js-modal-reg')
    });
    $('.js-example-basic-single').on('select2:select', function (e) {
        var data = e.params.data;
        console.log(data);
        if(data.id === 'tel') {
            $('.js-tel').attr('style', 'display: block')
            $('.js-email').attr('style', 'display: none')
        } else if (data.id === 'email') {
            $('.js-tel').attr('style', 'display: none')
            $('.js-email').attr('style', 'display: block')
        }
    });
    $('.js-example-basic-valute').select2({
        minimumResultsForSearch: -1,
        dropdownParent: $('.js-modal-reg')
    });

    $('.js-example-basic-num').select2({
        minimumResultsForSearch: -1,
        dropdownParent: $('.js-modal-reg')
    });

    $('.js-example-basic-providers').select2({
        minimumResultsForSearch: -1,
        width: '100%'
    });

    $('.js-example-basic-games').select2({
        minimumResultsForSearch: -1,
        width: '100%'
    });

    const swiper = new Swiper('.jsBanner', {
        loop: true,
        // If we need pagination
        pagination: {
            el: '.swiper-pagination',
        },
        // Navigation arrows
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });

    const swiper2 = new Swiper('.jsPopularGamesSlide', {
        loop: true,
        // If we need pagination,
        slidesPerView: 5,
        spaceBetween: 35,
        breakpoints: {
            // when window width is >= 320px
            320: {
                slidesPerView: 1,
                spaceBetween: 0
            },
            // when window width is >= 480px
            480: {
                slidesPerView: 2,
                spaceBetween: 20
            },
            // when window width is >= 640px
            640: {
                slidesPerView: 3,
                spaceBetween: 30
            },
            1000: {
                slidesPerView: 4,
                spaceBetween: 30
            },
            1200: {
                slidesPerView: 5,
                spaceBetween: 30
            }
        },
        pagination: {
            el: '.swiper-pagination',
        },
        // Navigation arrows
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });

    $(document).on('click', '.js-modal-reg-trigger', function() {
        $('.js-modal-reg').toggleClass('js-active');
        $('body').removeClass('hidden')
        if($('.js-modal-reg').hasClass('js-active')) {
            $('body').addClass('hidden')
        }
    });

    $(document).on('click', '.js-mobile-modal-trigger', function() {
        $('.js-mobile-modal').toggleClass('js-active');
        $('body').removeClass('hidden')
        if($('.js-mobile-modal').hasClass('js-active')) {
            $('body').addClass('hidden')
        }
    });

    $('#confCheckbox').on('change', () => {
        $('.js-reg-btn').toggleClass('disabled');
    });
});

