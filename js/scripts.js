$(document).ready(function(){

    $('.owl-carousel').owlCarousel({
        loop:true,
        margin:0,
        nav:true,
        navText: [ '', ' ' ],

        responsive:{
            0:{
                items:1
            },
            400:{
                items:2
            },

            1000:{
                items:5
            }
        }
    });
});