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
        } else if (sectionID === "features") {
          featureAnimate();
        } else if (sectionID === "success") {
          successAnimate();
        } else if (sectionID === "testimonials") {
          testimonialsAnimate();
        } else if (sectionID === "clients") {
          clientsAnimate();
        } else if (sectionID === "demo") {
          demoAnimate();
        } else if (sectionID === "whatsnew") {
          whatsnewAnimate();
        }
      },
    });
  });

  function heroAnimate() {
    const combustion_1 = document.querySelector(".tx2-1st_rocket_combustion");
    const combustion_2 = document.querySelector(".tx2-2nd_rocket_combustion");
    const combustion_3 = document.querySelector(".tx2-3rd_rocket_combustion");
    const planet = document.querySelector(".tx2-connect__planet");

    const rocket_launch = document.querySelector(
      ".tx2-rocket__launch_combustion"
    );
    const logo = document.querySelector(".tx2-connect__logo");

    gsap.to(
      planet,
      1.8,
      {
        xPercent: 0,
        yPercent: 0,
        opacity: 1,
        ease: "power4.inOut",
        force3D: true,
      },
      "+=3"
    );

    gsap.fromTo(
      logo,
      3,
      {
        yPercent: 50,
        opacity: 0,
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
      "-=3"
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
      "-=2"
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
      "-=1"
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
        onComplete: () => {
          pillSpaceshipFloating(rocket_launch);
          gsap
            .timeline({
              scrollTrigger: {
                trigger: combustion_1,
                start: "top 50%",
                end: "+=160%",
                scrub: true,
                once: false,
                markers: false,
              },
            })
            .fromTo(
              combustion_1,
              {
                yPercent: 0,
              },
              {
                duration: 4000,
                delay: 0.9,
                ease: "power4.inOut",
                yPercent: -10,
              },
              "+=4"
            );
          gsap
            .timeline({
              scrollTrigger: {
                trigger: combustion_2,
                start: "top 50%",
                end: "+=160%",
                scrub: true,
                once: false,
                markers: false,
              },
            })
            .fromTo(
              combustion_2,
              {
                yPercent: 0,
              },
              {
                duration: 5000,
                delay: 2,
                ease: "power4.inOut",
                yPercent: 5,
              },
              "+=4"
            );
          gsap
            .timeline({
              scrollTrigger: {
                trigger: combustion_3,
                start: "top 50%",
                end: "+=160%",
                scrub: true,
                once: false,
                markers: false,
              },
            })
            .fromTo(
              combustion_3,
              {
                yPercent: 0,
              },
              {
                duration: 3000,
                delay: 3,
                ease: "power4.inOut",
                yPercent: 5,
              },
              "+=6"
            );
        },
      },
      "-=1"
    );
  }

  function featureAnimate() {
    const p = document.querySelector(".tx2-connect-features__desc_p");
    const featureItems = document.querySelectorAll(
      ".tx2-connect__features_item"
    );
    showAnimate(p);
    showStaggerAnimate(featureItems);

    const path = document.querySelectorAll("#svg-lines-features .path");

    const svgLinesTL = gsap.timeline({
      scrollTrigger: {
        trigger: path,
        start: "top 90%",
        end: "+=170%",
        scrub: true,
        once: false,
        pin: false,
        markers: false,
      },
    });

    path.forEach((el) => {
      svgLinesTL.to(el, 1000, {
        strokeDashoffset: 0,
        delay: 1,
        strokeDasharray: el.getTotalLength(),
        ease: "power4.inOut",
      });
    });
  }

  function successAnimate() {
    const successItems = document.querySelectorAll(
      ".tx2-connect__success_item"
    );
    gsap.fromTo(
      successItems,
      1.8,
      {
        y: 100,
        opacity: 0,
      },
      {
        ease: "power4.out",
        y: 0,
        delay: 1,
        opacity: 1,
        stagger: {
          amount: 0.5,
        },
      }
    );
    gsap.utils.toArray(".number_counter_item").forEach(function (el) {
      var target = { val: 0 };
      gsap.to(target, {
        val: el.getAttribute("data-number"),
        duration: 3,
        onUpdate: function () {
          el.innerText = numberWithCommas(target.val.toFixed(0));
        },
      });
    });

    function numberWithCommas(x) {
      return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }
  }
  function testimonialsAnimate() {
    const testimonial = document.querySelector(".swipertestimonial");

    gsap.fromTo(
      testimonial,
      1.8,
      {
        y: 100,
        opacity: 0,
      },
      {
        ease: "power4.out",
        y: 0,
        delay: 1,
        opacity: 1,
      }
    );
  }
  function clientsAnimate() {
    const clientItems = document.querySelectorAll(".tx2-connect__clients_item");
    gsap.fromTo(
      clientItems,
      1.8,
      {
        y: 100,
        opacity: 0,
      },
      {
        ease: "power4.out",
        y: 0,
        delay: 1,
        opacity: 1,
        stagger: {
          amount: 0.5,
        },
      }
    );
  }
  function demoAnimate() {
    const p = document.querySelector(".tx2-connect__demo_heading_desc");
    const form = document.querySelector(".tx2-contact");
    showAnimate(p);
    showAnimate(form);
  }

  function whatsnewAnimate() {
    const newsItems = document.querySelectorAll(".tx2-blog_item");
    showStaggerAnimate(newsItems);
  }

  function showAnimate(el, str) {
    gsap.fromTo(
      el,
      1.8,
      {
        y: 100,
        opacity: 0,
      },
      {
        ease: "power4.out",
        y: 0,
        delay: 1,
        opacity: 1,
      },
      str
    );
  }
  function showStaggerAnimate(els, staggerAmount = 0.5) {
    gsap.fromTo(
      els,
      1.8,
      {
        y: 100,
        opacity: 0,
      },
      {
        ease: "power4.out",
        y: 0,
        delay: 1,
        opacity: 1,
        stagger: {
          amount: staggerAmount,
        },
      }
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
    gsap.set(".tx2-connect__planet", {
      opacity: 0,
      xPercent: 15,
      yPercent: -15,
    });

    const path = document.querySelectorAll("#svg-lines-features .path");
    gsap.set(path, {
      strokeDashoffset: path.getTotalLength(),
      strokeDasharray: path.getTotalLength(),
    });
  }

  swiperConnectTestimonial();

  function swiperConnectTestimonial() {
    var swiper = new Swiper(".swipertestimonial", {
      loop: true,
      slidesPerView: 1,
      spaceBetween: 0,
      speed: 700,
      autoHeight: true,
      navigation: {
        nextEl: ".custom-swiper-button-next",
        prevEl: ".custom-swiper-button-prev",
        disabledClass: "custom-swiper-button-disabled",
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

  var pillSpaceshipFloating = function (el) {
    const randomX = random(10, 20);
    const randomY = random(20, 30);
    const randomDelay = random(0, 1);
    const randomTime = random(3, 5);
    const randomTime2 = random(5, 10);
    const randomAngle = random(8, 12);

    // moveX(el, 0.3);
    moveY(el, -0.3);
    // rotate(el, 0.0);

    function rotate(target, direction) {
      TweenLite.to(target, randomTime2(), {
        rotation: randomAngle(direction),
        ease: Sine.easeInOut,
        onComplete: rotate,
        onCompleteParams: [target, direction * -1],
      });
    }

    function moveX(target, direction) {
      TweenLite.to(target, randomTime(), {
        x: randomX(direction),
        ease: Sine.easeInOut,
        onComplete: moveX,
        onCompleteParams: [target, direction * -1],
      });
    }

    function moveY(target, direction) {
      TweenLite.to(target, randomTime(), {
        y: randomY(direction),
        ease: Sine.easeInOut,
        onComplete: moveY,
        onCompleteParams: [target, direction * -1],
      });
    }

    function random(min, max) {
      const delta = max - min;
      return (direction = 1) => (min + delta * Math.random()) * direction;
    }
  };
})();
