'use strict';

console.log('Hello world!');

    $('.photostrip').owlCarousel({
        //rtl:true,
        loop:true,
        margin:24,
        //nav:false,
        autoWidth:true,
        responsive:{
            0:{
                items:3
            },
            768: {
                items:4
            },
            1200: {
                items:6
            },
            1600: {
                items:8
            }
        }
    });



// $('.photostrip img').each( function(){
//     $(this).parents('.item').css('width', $(this).attr('data-ratio')*400 );
// });

$('document').ready(function(){

    console.log('It is main.js Hello world!');


});
//# sourceMappingURL=index.js.map
