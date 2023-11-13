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

        if (sectionID === "hero") {
          heroAnimate();
        }

        //else if(sectionID === "stats") {
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

  function heroAnimate() {
    const combustion_1 = document.querySelector(".tx2-1st_rocket_combustion");
    const combustion_2 = document.querySelector(".tx2-2nd_rocket_combustion");
    const combustion_3 = document.querySelector(".tx2-3rd_rocket_combustion");
    const rocket_launch = docment.querySelector(
      ".tx2-rocket__launch_combustion"
    );
    const logo = document.querySelector(".tx2-connect__logo");

    gsap.fromTo(
      logo,
      1.5,
      {
        yPercent: 30,
        opacity: 1,
      },
      {
        ease: "power4.inOut",
        opacity: 1,
        yPercent: 0,
        force3D: true,
      },
      "-=2"
    );

    gsap.fromTo(
      combustion_1,
      3,
      {
        yPercent: 200,
        opacity: 1,
      },
      {
        ease: "power4.inOut",
        opacity: 1,
        yPercent: 0,
        force3D: true,
      },
      "-=2"
    );
    gsap.fromTo(
      combustion_2,
      3,
      {
        yPercent: 100,
        opacity: 1,
      },
      {
        ease: "power4.inOut",
        opacity: 1,
        yPercent: 0,
        force3D: true,
      },
      "-=1"
    );
    gsap.fromTo(
      combustion_3,
      3,
      {
        yPercent: 100,
        opacity: 1,
      },
      {
        ease: "power4.inOut",
        opacity: 1,
        yPercent: 0,
        force3D: true,
      },
      "-=0"
    );

    gsap.fromTo(
      rocket_launch,
      3,
      {
        yPercent: 200,
        opacity: 1,
      },
      {
        ease: "power4.inOut",
        opacity: 1,
        yPercent: 0,
        force3D: true,
      },
      "-=0"
    );
  }

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

  function resetElements() {
    gsap.set(".gsap-line span > span", {
      y: 80,
      skewY: 10,
    });
  }

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
