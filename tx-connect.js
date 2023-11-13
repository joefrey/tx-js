(function () {
  swiperConnectTestimonial();

  function swiperConnectTestimonial() {
    var swiper = new Swiper(".swiperTestimonial", {
      slidesPerView: 1,
      spaceBetween: 0,
      speed: 700,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
        // renderBullet: function (index, className) {
        //   return (
        //     '<span class="' + className + '">' + (index + 1) + "</span>"
        //   );
        // },
      },
    });
  }
})();
