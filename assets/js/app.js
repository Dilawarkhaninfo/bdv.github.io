$(document).ready(function(){

    // emplement slider
$('#casestudy').owlCarousel({
    loop:true,
    margin:30,
    items:1,
    dots:false,
    nav:true,
    smartSpeed:3500,
    autoplay:true,
    autoplayTimeout:4000,
    responsive:{
        0:{
          items: 1,
        },
        576:{
          items: 1,
        },
        768: {
          items: 1,
      },
      1000:{
        items:1,
      }
    }
  })

  $( ".owl-prev").html('<i class="fa fa-chevron-left"></i>');
  $( ".owl-next").html('<i class="fa fa-chevron-right"></i>');


  $('#casestudy2').owlCarousel({
    loop:true,
    margin:30,
    items:1,
    dots:false,
    nav:true,
    smartSpeed:3500,
    autoplay:true,
    autoplayTimeout:5000,
    responsive:{
        0:{
          items: 2,
        },
        576:{
          items: 2,
        },
        768: {
          items: 3,
      },
      1000:{
        items:4,
      }
    }
  })
  $( ".owl-next").html('<i class="fa fa-chevron-right"></i>');


  $('#casestudy3').owlCarousel({
    loop:true,
    margin:30,
    items:1,
    dots:true,
    nav:true,
    smartSpeed:3500,
    autoplay:true,
    autoplayTimeout:4000,
    responsive:{
        0:{
          items: 2,
        },
        576:{
          items: 2,
        },
        768: {
          items: 3,
      },
      1000:{
        items:4,
      }
    }
  })

  $( ".owl-prev").html('<i class="fa fa-chevron-left"></i>');
  $( ".owl-next").html('<i class="fa fa-chevron-right"></i>');

});