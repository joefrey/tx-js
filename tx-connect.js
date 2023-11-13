(function () {
  var lineSplitting = document.querySelectorAll(".gsap-line");
  var resSplitting = Splitting({ target: lineSplitting, by: "chars" });

  gsap.registerPlugin(ScrollTrigger);

  resetElements();

  gsap.utils.toArray(".tx2-gsap-section").forEach(function (elem) {
    ScrollTrigger.create({
      trigger: elem,
      start: "top 80%",
      end: "bottom 20%",
      markers: false,
      once: true,
      onEnter: function () {
        let sectionID = elem.id;
        titleAnimate(elem.querySelectorAll(".gsap-line span > span"));

        // if (sectionID === "hero") {
        //   heroAnimate();
        // } else if (sectionID === "stats") {
        //   statsAnimate();
        // } else if (sectionID === "solutions") {
        //   solutionsAnimate();
        // } else if (sectionID === "clients") {
        //   const clientsInner = document.querySelector(".tx2-clients-inner");

        //   gsap.to(
        //     clientsInner,
        //     1,
        //     {
        //       y: 0,
        //       opacity: 1,
        //       ease: "power4.inOut",
        //       force3D: true,
        //     },
        //     "-=6"
        //   );
        //   clientsAnimate();
        // } else if (sectionID === "leadership") {
        //   leadershipAnimate();
        // }
      },
    });
  });

  swiperConnectTestimonial();

  function titleAnimate(chars) {
    const tl = gsap.timeline();
    tl.to(chars, 1.8, {
      y: 0,
      ease: "power4.out",
      delay: 0.5,
      skewY: 0,
      stagger: {
        amount: 0.3,
      },
    });
  }

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
