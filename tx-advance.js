(function () {
  var isMobile = false; //initiate as false
  // device detection
  if (
    /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(
      navigator.userAgent
    ) ||
    /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(
      navigator.userAgent.substr(0, 4)
    )
  ) {
    isMobile = true;
  }

  swiperConnectTestimonial();

  function swiperConnectTestimonial() {
    var swiper = new Swiper(".swiper", {
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
      },
    });
  }

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
          featuresAnimate();
        } else if (sectionID === "our-success") {
          successAnimate();
        } else if (sectionID === "whyadvance") {
          whyAdvanceAnimate();
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
    const astronaut = document.querySelector(".tx2-astronaut__with_cell");
    const logo = document.querySelector(".tx2-connect__logo");
    const cta_wrap = document.querySelector(".tx2-cta-btn-wrap");

    gsap.to(
      astronaut,
      1.8,
      {
        xPercent: 0,
        yPercent: 0,
        opacity: 1,
        ease: "power4.inOut",
        force3D: true,
        onComplete: () => {
          pillSpaceshipFloating(astronaut);
        },
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
      cta_wrap,
      1.8,
      {
        y: 20,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        ease: "power4.inOut",
      }
    );
  }

  function featuresAnimate() {
    const featuresItems = document.querySelectorAll(
      ".tx2-advance__features_item"
    );

    gsap.to(featuresItems, 1.8, {
      ease: "power4.out",
      y: 0,
      delay: 1,
      opacity: 1,
      stagger: {
        amount: 0.5,
      },
    });
  }

  function successAnimate() {
    const successItems = document.querySelectorAll(
      ".tx2-connect__success_item"
    );
    const map = document.querySelector(".tx2-connect__success_map");

    gsap.fromTo(
      map,
      1.8,
      {
        opacity: 0,
        y: 100,
        scale: 0.5,
      },
      {
        ease: "power4.out",
        y: 0,
        scale: 1,
        delay: 1,
        opacity: 1,
        stagger: {
          amount: 0.5,
        },
      },
      "-=2"
    );

    gsap.to(successItems, 1.8, {
      ease: "power4.out",
      y: 0,
      delay: 1,
      opacity: 1,
      stagger: {
        amount: 0.5,
      },
    });
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

  function whyAdvanceAnimate() {
    const solutionsText = document.querySelector("#solutions_text");
    const abiltyText = document.querySelector("#ability");
    const customDev = document.querySelector("#custom_development");
    const vendors = document.querySelector("#vendors");
    const advanceLogo = document.querySelector("#trialx_advance_logo");

    const actualLine = document.querySelector("#diagram_actual_line path");

    const circleStart = document.querySelector("#circle_start");

    const circleEnd = document.querySelector("#circle_end");

    // const actualLine = document.querySelector("#diagram_actual_line path");

    // const aboveLines = document.querySelector("#diagram_subtle_lines_above");
    // const belowLines = document.querySelector("#diagram_subtle_lines_below");

    // const subtleLinesBelowItems = document.querySelectorAll(
    //   "#diagram_subtle_lines_below path"
    // );
    // const subtleLinesAboveItems = document.querySelectorAll(
    //   "#diagram_subtle_lines_above path"
    // );

    const diagramTL = gsap.timeline();

    // subtleLinesBelowItems.forEach((el) => {
    //   diagramTL.to(
    //     el,
    //     1.9,
    //     {
    //       strokeDashoffset: 0,
    //       delay: 1,
    //       strokeDasharray: el.getTotalLength(),
    //       ease: "power4.inOut",
    //     },
    //     "start"
    //   );
    // });

    // subtleLinesAboveItems.forEach((el) => {
    //   diagramTL.to(
    //     el,
    //     1.9,
    //     {
    //       strokeDashoffset: 0,
    //       delay: 1,
    //       strokeDasharray: el.getTotalLength(),
    //       ease: "power4.inOut",
    //     },
    //     "start"
    //   );
    // });

    // diagramTL.to(
    //   aboveLines,
    //   1.8,
    //   {
    //     opacity: 0.05,
    //     ease: "power4.inOut",
    //   },
    //   "start2"
    // );
    // diagramTL.to(
    //   belowLines,
    //   1.8,
    //   {
    //     opacity: 0.05,
    //     ease: "power4.inOut",
    //   },
    //   "start2"
    // );

    diagramTL.to(circleStart, {
      scale: 1.0,
      opacity: 1,
      duration: 1.5,
      force3D: true,
      ease: "elastic.out(1,0.3)",
    });

    diagramTL.fromTo(
      solutionsText,
      {
        opacity: 0,
        x: 50,
      },
      {
        x: 0,
        opacity: 1,
        ease: "power4.inOut",
        duration: 1.8,
      },
      "-=2"
    );

    diagramTL.to(
      actualLine,
      2,
      {
        strokeDashoffset: 0,
        strokeDasharray: actualLine.getTotalLength(),
        ease: "power4.inOut",
      },
      "-=1"
    );
    diagramTL
      .to(
        circleEnd,
        {
          scale: 1.0,
          opacity: 1,
          duration: 1.5,
          force3D: true,
          ease: "elastic.out(1,0.3)",
        },
        "-=.5"
      )
      .to(
        abiltyText,
        1.8,
        {
          y: 0,
          opacity: 1,
          ease: "power4.inOut",
        },
        "-=2"
      )
      .to(
        vendors,
        1.8,
        {
          x: 0,
          opacity: 1,
          ease: "power4.inOut",
        },
        "diagram-start"
      )
      .to(
        customDev,
        1.8,
        {
          y: 0,
          opacity: 1,
          ease: "power4.inOut",
        },
        "diagram-start"
      )
      .to(
        advanceLogo,
        1.8,
        {
          y: 0,
          opacity: 1,
          ease: "power4.inOut",
        },
        "diagram-start"
      );
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
    gsap.set(".tx2-astronaut__with_cell", {
      opacity: 0,
      xPercent: 15,
      yPercent: 15,
    });

    gsap.set(".tx2-advance__features_item, .tx2-connect__success_item", {
      y: 100,
      opacity: 0,
    });

    const actualLine = document.querySelector("#diagram_actual_line path");
    gsap.set(actualLine, {
      strokeDashoffset: actualLine.getTotalLength(),
      strokeDasharray: actualLine.getTotalLength(),
    });

    const abovePaths = document.querySelectorAll(
      "#diagram_subtle_lines_above path"
    );

    abovePaths.forEach((el) => {
      gsap.set(el, {
        strokeDashoffset: el.getTotalLength(),
        strokeDasharray: el.getTotalLength(),
      });
    });

    const belowPaths = document.querySelectorAll(
      "#diagram_subtle_lines_below path"
    );

    belowPaths.forEach((el) => {
      gsap.set(el, {
        strokeDashoffset: el.getTotalLength(),
        strokeDasharray: el.getTotalLength(),
      });
    });

    const circleStart = document.querySelector("#circle_start");

    const circleEnd = document.querySelector("#circle_end");
    gsap.set(circleStart, {
      scale: 0,
      opacity: 0,
      transformOrigin: "50% 50%",
    });
    gsap.set(circleEnd, {
      scale: 0,
      opacity: 0,
      transformOrigin: "50% 50%",
    });

    const abilityText = document.querySelector("#ability");
    gsap.set(abilityText, {
      opacity: 0,
      y: -20,
    });

    const solutionsText = document.querySelector("#solutions_text");
    gsap.set(solutionsText, {
      opacity: 0,
      x: 50,
    });

    const customDev = document.querySelector("#custom_development");
    gsap.set(customDev, {
      opacity: 0,
      y: 50,
    });

    const vendors = document.querySelector("#vendors");
    gsap.set(vendors, {
      opacity: 0,
      x: -50,
    });

    const advanceLogo = document.querySelector("#trialx_advance_logo");
    gsap.set(advanceLogo, {
      opacity: 0,
      y: 50,
    });
  }

  var pillSpaceshipFloating = function (el) {
    const randomX = random(10, 20);
    const randomY = random(20, 30);
    const randomDelay = random(0, 1);
    const randomTime = random(3, 5);
    const randomTime2 = random(5, 10);
    const randomAngle = random(8, 12);

    moveX(el, 0.5);
    moveY(el, -0.5);
    rotate(el, 0.3);

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
