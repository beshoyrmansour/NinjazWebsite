$(document).ready(function() {
  $(".owl-carousel").owlCarousel({
    center: true,
    items: 1,
    loop: true,
    margin: 4,
    dots:true,
    responsive: {
      600: {
        items: 4
      }
    }
  });
});
