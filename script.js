$(document).ready(function () {
    setTimeout(function () {
        $('body').addClass('loadded');
    }, 1000);

    if (window.localStorage.getItem('dark') === '1') {
        $('html').addClass('dark');
    }

    $('.darkToggle').on('click', function () {
        $('html').toggleClass('dark');
        if ($('html.dark').length) {
            window.localStorage.setItem('dark', '1');
        } else {
            window.localStorage.setItem('dark', '0');
        }
    });

    $('.sel').click(function () {
        $('.sel').removeClass('active');
        $(this).addClass('active');

        var offsetMain = $('.nav-item').offset().top;
        var offsetChild = $(this).offset().top;
        $('.nav-item .bg-ani').css('top', offsetChild - offsetMain + 'px');

        var page = $(this).attr('page');
        if (page == '') {
            return;
        }

        $('.ct').removeClass('active');
        $('.ct#' + page).addClass('active');
    });

    $('.nav .openThis, .nav .closeThis').click(function () {
        $('.nav').toggleClass('opened');
    });

    $('.restart').click(function () {
        $('.mainBody').removeClass('loadded');
        setTimeout(function () {
            $('.mainBody').addClass('loadded');
        }, 2000);
    })

});