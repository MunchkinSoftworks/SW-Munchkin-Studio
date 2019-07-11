/*========================================================
                        SERVICES
========================================================*/
$(function () {
    //animate on scroll
    new WOW().init();
});
/*========================================================
                        WORK
========================================================*/
$(document).ready(function () {
    $("#work").magnificPopup({
        delegate: 'a', // child items selector, by clicking on it popup will open
        type: 'image',
        gallery: {
            enabled: true
        }
    });
});
/*========================================================
                        TEAM
========================================================*/
$(document).ready(function () {
    $("#TeamMembers").owlCarousel({
        items: 3,
        autoplay: true,
        smartSpeed: 500,
        loop: true,
        autoplayHoverPause: true,
        responsive : {
            0:{
                items: 1  
            },
            480: {
                items: 2
            },
            768: {
                items: 3
            }
        }
    });
});
/*========================================================
                        TESTIMONIALS
========================================================*/
$(document).ready(function () {
    $("#CustomerTestimonials").owlCarousel({
        items: 1,
        autoplay: true,
        loop: true,
        autoplayHoverPause: true,
        dots: true,
        dotsSpeed: 50
    });
});
/*========================================================
                        STATS
========================================================*/
$(function ($) {
    $('.counter').counterUp({
        delay: 10,
        time: 2000
    });
});
/*========================================================
                        CLIENTS
========================================================*/
$(function () {
    $("#ClientsWrapper").owlCarousel({
        items: 6,
        autoplay: true,
        smartSpeed: 900,
        loop: true,
        autoplayHoverPause: true,
        responsive : {
            0:{
                items: 1  
            },
            480: {
                items: 3
            },
            768: {
                items: 4
            },
            992: {
                items: 6    
            }
        }
    });
});
/*========================================================
                        NAVIGATION
========================================================*/
$(function () {
    $(window).scroll(function () {
        if ($(this).scrollTop() < 50) {
            // hide nav bar
            $("nav").removeClass("VescoTopNav");
            $("#BackToTop").fadeOut();
        } else {
            //show nav bar
            $("nav").addClass("VescoTopNav");
            $("#BackToTop").fadeIn();
        }
    });
});

//smoothscroll
$(function () {
    $("a.SmoothScroll").click(function (event) {
        // prevents opning hte hyperlink
        event.preventDefault();
        //get/return section id such as #about
        var section = $(this).attr("href");
        //animate to html and body elements
        $('html, body').animate({
            scrollTop: $(section).offset().top - 71
        }, 1250, "easeInOutExpo");
    });
});
//close mobile method on click
$(function () {
    $(".navbar-collapse ul li a").on("click touch", function(){
        $(".navbar-toggle").click();
    });
});