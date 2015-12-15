$('.photostrip').owlCarousel({
    //rtl:true,
    loop:true,
    margin:0,

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

$('.feats').owlCarousel({
    //rtl:true,
    //loop:true,
    margin:0,
    autoplay:false,
    autoplayTimeout:5000,
    autoplayHoverPause:true,
    smartSpeed: 500,
    animateOut: 'fadeOut',
    animateIn: 'fadeIn',

    //nav:false,
    //autoWidth:true,
    responsive:{
      0:{
          items:1
      }
    },
    URLhashListener:true,
    startPosition: 'URLHash'
});


var $grid = $('.lookbookgrid').isotope({
  itemSelector: '.grid-item',
  percentPosition: true,
  masonry: {
    columnWidth: '.grid-sizer',
    gutter: 0
  }
});


$grid.imagesLoaded().progress( function() {
  $grid.isotope('layout');
});




  // $('.lookbookgrid').isotope({
  //   itemSelector: '.grid-item',
  //   percentPosition: true,
  //   masonry: {
  //     columnWidth: '.grid-sizer',
  //     gutter: 0
  //   }
  // });

// $('.photostrip img').each( function(){
//     $(this).parents('.item').css('width', $(this).attr('data-ratio')*400 );
// });

$('document').ready(function(){

  console.log('It is main.js Hello world!');




});