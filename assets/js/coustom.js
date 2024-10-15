$(document).ready(function(){
  $('.slider-container').slick({
      autoplay: true,
      autoplaySpeed: 1000,
      arrows: true,
      slidesToShow: 4,
      dots: true,
      prevArrow: '<button type="button" class="slick-prev"><i class="fa-solid fa-chevron-left"></i></button>',
      nextArrow: '<button type="button" class="slick-next"><i class="fa-solid fa-chevron-right"></i></button>'
  });
});


// $(function() {
//   $('.slider-container').slick({
//       autoplay: true,
//       autoplaySpeed: 2000,
//       arrows: true,
//       slidesToShow: 2,
//       dots: true,
//       prevArrow: '<button type="button" class="slick-prev"><i class="fa-solid fa-chevron-left"></i></button>',
//       nextArrow: '<button type="button" class="slick-next"><i class="fa-solid fa-chevron-right"></i></button>'
//   });
// });
