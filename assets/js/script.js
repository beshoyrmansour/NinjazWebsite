$(document).ready(function() {
  $(".section-our-partiners-carousel").owlCarousel({
    // center: true,
    items: 2,
    loop: true,
    margin: 4,
    dots: true,
    responsive: {
      600: {
        items: 4,
      },
    },
  });
  $('.order-updates-list').scrollTop($('.order-updates-list')[0].scrollHeight);
  // $("#mainTabs a").on("click", function(e) {
  //   e.preventDefault();
  //   $(this).tab("show");
  // });

});
