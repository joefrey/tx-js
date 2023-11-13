(function () {
  swiperConnectTestimonial();

  var swiperConnectTestimonial = function () {
    console.log("connect testimonial");
    const swiper = new Swiper(".swiperTestimonial", {
      // Optional parameters
      //direction: 'vertical',
      loop: true,

      // If we need pagination
      pagination: {
        el: ".swiper-pagination",
      },

      // Navigation arrows
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });
  };
})();
