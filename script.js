//*Menu Cart Starts
$(function () {
    $('.menu_container').mixItUp({
        selectors: {
            target: '.one',
            filter: '.filter',
        },
        animation: {
            enable: false,
            effects: 'fade',
            duration: 600,
            easing: 'ease',
            perspectiveDistance: '0',
            perspectiveOrigin: '0 0',
            queue: false,
            queueLimit: 1,
            animateChangeLayout: false,
            animateResizeContainer: false,
            animateResizeTargets: false,
            staggerSequence: false,
            reverseOut: false
        },
        // callbacks: {
        //     onMixLoad: false,
        //     onMixStart: false,
        //     onMixBusy: false,
        //     onMixEnd: false,
        //     onMixFail: false
        // },
        // controls: {
        //     enable: true,
        //     live: false,
        //     toggleFilterButtons: false,
        //     toggleLogic: 'or',
        //     activeClass: 'active'
        // },
        load: {
            filter: '.starters'
        }
    });
    $('.filter').on('click', function () {
        var filterValue = $(this).attr('data-filter');
        $('.menu_container').mixItUp('filter', filterValue);
    });
});
//*Navbar Section Starts
$('.first_loop').owlCarousel({
    loop: true,
    margin: 10,
    nav: false,
    animateOut: 'fadeOut',
    animateIn: 'fadeIn',
    smartSpeed: 450,
    autoplay: true,
    autoplayTimeout: 2000,
    autoplayHoverPause: true,
    dots:false,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 1
        },
        1000: {
            items: 1
        }
    }
})
//!For Responsive Starts
$('.second_loop').owlCarousel({
    loop: true,
    margin: 10,
    nav: false,
    animateOut: 'fadeOut',
    animateIn: 'fadeIn',
    smartSpeed: 450,
    autoplay: true,
    autoplayTimeout: 2000,
    autoplayHoverPause: true,
    dots: false,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 1
        },
        1000: {
            items: 1
        }
    }
})
//!For Responsive Ends
//*Navbar Section Ends



