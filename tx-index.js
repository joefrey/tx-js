$(document).ready(function () {
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

  // gsap.set(document.querySelectorAll(".tx2-solutions__item_hover_gradient"), {
  //   y: "100%",
  //   borderRadius: 0,
  //   scale: 0,
  // });

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
        } else if (sectionID === "stats") {
          statsAnimate();
          bubblesAnimate();
        } else if (sectionID === "solutions") {
          solutionsAnimate();
        } else if (sectionID === "clients") {
          clientsAnimate();
        } else if (sectionID === "testimonial") {
          testimonialAnimate();
        } else if (sectionID === "leadership") {
          leadershipAnimate();
        }
      },
    });
  });

  function heroAnimate() {
    const heroCurve = document.querySelector(".tx2-curves-left");
    const pillSpaceship = document.querySelector(
      ".tx2-hero_object_pill_spacehip"
    );

    const smallPlanet = document.querySelector(
      ".tx2-hero_object__small_planet"
    );

    const bigPlanet = document.querySelector(".tx2-hero_object__big_planet");
    const twoPlanets = document.querySelector(".tx2-hero_object__two-planets");

    const tabletPlanet = document.querySelector(".tx2-hero_object__tablet");
    const cometBlue = document.querySelector(".tx2-hero_object-comet-blue");
    const cometWhite = document.querySelector(".tx2-hero_object-comet-white");

    gsap.set(heroCurve, { with: "20%" });

    gsap
      .timeline({
        scrollTrigger: {
          trigger: heroCurve,
          start: "top 90%",
          end: "+=160%",
          scrub: true,
          once: false,
          markers: false,
        },
      })
      .to(
        heroCurve,
        {
          duration: 1000,
          delay: 0.9,
          ease: "power4.inOut",
          width: "50%",
        },
        "+=4"
      );

    gsap.to(
      pillSpaceship,
      2,
      {
        xPercent: -45,
        yPercent: 45,
        ease: "power4.inOut",
        force3D: true,
        onComplete: () => {
          pillSpaceshipFloating(pillSpaceship);
        },
      },
      "-=.5"
    );

    gsap.fromTo(
      tabletPlanet,
      3,
      {
        yPercent: 200,
        opacity: 0,
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
      smallPlanet,
      4,
      {
        yPercent: 200,
        opacity: 0,
      },
      {
        ease: "power4.inOut",
        opacity: 1,
        yPercent: 0,
        force3D: true,
      },
      "-=1.5"
    );

    gsap.fromTo(
      bigPlanet,
      2,
      {
        yPercent: -30,
        xPercent: 30,
        opacity: 0,
      },
      {
        ease: "power4.inOut",
        yPercent: 0,
        xPercent: 0,
        opacity: 1,
        force3D: true,
      },
      "-=.2"
    );

    gsap.fromTo(
      twoPlanets,
      4,
      {
        yPercent: -30,
        xPercent: 30,
        opacity: 0,
      },
      {
        ease: "power4.inOut",
        yPercent: 0,
        xPercent: 0,
        opacity: 1,
        force3D: true,
      },
      "-=.2"
    );

    gsap.fromTo(
      cometBlue,
      1.9,
      {
        xPercent: -100,
        yPercent: -100,
        opacity: 1,
      },
      {
        xPercent: 300,
        yPercent: 300,
        ease: "power4.inOut",
        opacity: 0,
        repeat: -1,
        repeatDelay: 600,
        force3D: true,
      },
      "-=.5"
    );

    gsap.fromTo(
      cometWhite,
      1.9,
      {
        xPercent: -100,
        yPercent: -100,
        opacity: 1,
      },
      {
        xPercent: 1000,
        yPercent: 1000,
        ease: "power4.inOut",
        opacity: 0,
        repeat: -1,
        delay: 5,
        repeatDelay: 600, // 10 mins
        force3D: true,
      },
      "+=10"
    );
  }

  function solutionsAnimate() {
    const solutionTL = gsap.timeline();
    const solutionsItems = document.querySelectorAll(
      ".tx2-solutions__item_wrap"
    );

    const path1 = document.querySelector("#svg-lines-solutions .path1");
    const path2 = document.querySelector("#svg-lines-solutions .path2");
    const path3 = document.querySelector("#svg-lines-solutions .path3");
    const svgLinesTL = gsap
      .timeline({
        scrollTrigger: {
          trigger: path1,
          start: "top 90%",
          end: "+=170%",
          scrub: true,
          once: false,
          pin: false,
          markers: false,
        },
      })
      .to(
        path1,
        1000,
        {
          strokeDashoffset: 0,
          delay: 1,
          strokeDasharray: path1.getTotalLength(),
          ease: "power4.inOut",
        },
        "start"
      )
      .to(
        path2,
        1000,
        {
          strokeDashoffset: 0,
          delay: 1,
          strokeDasharray: path2.getTotalLength(),
          ease: "power4.inOut",
        },
        "start"
      )
      .to(
        path3,
        1000,
        {
          strokeDashoffset: 0,
          delay: 1,
          strokeDasharray: path3.getTotalLength(),
          ease: "power4.inOut",
        },
        "start"
      );

    solutionTL.to(solutionsItems, 1.8, {
      ease: "power4.out",
      y: 0,
      delay: 0.5,
      opacity: 1,
      stagger: {
        amount: 0.3,
      },
    });
  }

  function clientsAnimate() {
    const tl = gsap.timeline();
    const clientsItems = document.querySelectorAll(".tx2-clients__item");

    tl.to(clientsItems, 1.8, {
      ease: "power4.out",
      y: 0,
      delay: 1,
      opacity: 1,
      stagger: {
        amount: 0.5,
      },
    });
  }

  function testimonialAnimate() {
    const testimonialLogo = document.querySelector(
      ".tx2-featured_testimonial__img_wrap"
    );

    gsap.to(testimonialLogo, 1.8, {
      y: 0,
      delay: 1.5,
      opacity: 1,
      ease: "power4.out",
    });
  }

  function leadershipAnimate() {
    const tl = gsap.timeline();
    const leadershipItems = document.querySelectorAll(".tx2-leadership__item");
    const p1 = document.querySelector(".about__desc");
    const p2 = document.querySelector(".about__desc_2");

    tl.to(leadershipItems, 1.8, {
      ease: "power4.out",
      y: 0,
      delay: 1,
      opacity: 1,
      stagger: {
        amount: 0.5,
      },
    });

    showAnimate(p1);
    showAnimate(p2);
  }

  function statsAnimate() {
    const tl = gsap.timeline();
    const description = document.querySelector(".tx2-stats__heading_p");

    gsap.to(
      description,
      1.8,
      {
        ease: "power4.out",
        y: 0,
        delay: 1,
        opacity: 1,
      },
      "stats_start"
    );
  }

  function bubblesAnimate() {
    // 'tx2-stats__bubbles'
    const statsItems = document.querySelectorAll(".tx2-stats-bubble__item");

    ScrollTrigger.create({
      trigger: ".tx2-stats__bubbles",
      start: "top 80%",
      end: "bottom 20%",
      markers: false,
      once: true,
      onEnter: function () {
        for (i = 0; i < statsItems.length; i++) {
          gsap.to(
            statsItems[i],
            randomNumber(2, 3),
            {
              scale: 1,
              opacity: 1,
              delay: randomNumber(0.5, 0.9),
              transformOrigin: "50% 50%",
              ease: "elastic.out(1,0.3)",
            },
            "stats_start"
          );
        }
      },
    });

    function randomNumber(min, max) {
      return Math.random() * (max - min) + min;
    }
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
    gsap.set(".tx2-stats__item", {
      x: -120,
      scale: 0.5,
      opacity: 0,
    });

    gsap.set(".tx2-solutions__item_wrap", {
      y: 100,
      opacity: 0,
      position: "relative",
    });

    gsap.set(".tx2-clients__item", {
      y: 100,
      opacity: 0,
      position: "relative",
    });

    gsap.set(".tx2-leadership__item", {
      y: 100,
      opacity: 0,
      position: "relative",
    });

    // gsap.set(".tx2-clients-inner", {
    //   y: 100,
    //   opacity: 0,
    // });

    gsap.set(".tx2-hero_object_pill_spacehip", {
      xPercent: 220,
      yPercent: -200,
    });

    const path1 = document.querySelector("#svg-lines-solutions .path1");
    const path2 = document.querySelector("#svg-lines-solutions .path2");
    const path3 = document.querySelector("#svg-lines-solutions .path3");
    gsap.set(path1, {
      strokeDashoffset: path1.getTotalLength(),
      strokeDasharray: path1.getTotalLength(),
    });
    gsap.set(path2, {
      strokeDashoffset: path2.getTotalLength(),
      strokeDasharray: path2.getTotalLength(),
    });
    gsap.set(path3, {
      strokeDashoffset: path3.getTotalLength(),
      strokeDasharray: path3.getTotalLength(),
    });

    const statsItems = document.querySelectorAll(".tx2-stats-bubble__item");
    gsap.set(statsItems, {
      opacity: 0,
      scale: 0,
    });

    const testimonialLogo = document.querySelector(
      ".tx2-featured_testimonial__img_wrap"
    );
    gsap.set(testimonialLogo, {
      opacity: 0,
      y: 50,
    });

    const description = document.querySelector(".tx2-stats__heading_p");
    gsap.set(description, {
      opacity: 0,
      y: 100,
    });
  }

  function solutionsItemsHover() {
    const solutionLinks = [
      ...document.querySelectorAll(".tx2-solutions__item"),
    ];

    solutionLinks.forEach((solutionLink, i) => {
      gsap.set(
        solutionLink.querySelector(".tx2-solutions__item_hover_gradient"),
        {
          y: "100%",
          borderRadius: 0,
          scale: 1,
        }
      );
      gsap.set(solutionLink.querySelector(".tx2-solutions__item-image"), {
        y: 0,
        ease: "power4.inOut",
      });

      const solutionTL = gsap
        .timeline({
          paused: true,
        })
        .to(solutionLink.querySelector(".tx2-solutions__item_hover_gradient"), {
          duration: 0.8,
          scale: 1.5,
          borderRadius: "100%",
          y: 0,
          ease: "power4.inOut",
        });

      const solutionWordsTL = gsap
        .timeline({
          paused: true,
        })
        .to(
          solutionLink.querySelector(".tx2-solutions__item-heading"),
          {
            duration: 0.5,
            ease: "power4.out",
            color: "#fff",
          },
          "+=0.2"
        );

      const solutionImageTL = gsap
        .timeline({
          paused: true,
        })
        .to(
          solutionLink.querySelectorAll(".tx2-solutions__item-image"),
          {
            duration: 0.5,
            y: -20,
            scale: 1.09,
            ease: "power4.inOut",
          },
          "-=0.4"
        );

      solutionLink.addEventListener("mouseenter", (elem) => {
        gsap.to(
          solutionLink,
          {
            duration: 1.5,
            y: -10,
            ease: "power4.in",
          },
          "-=2"
        );

        solutionTL.play();
        solutionWordsTL.play();
        solutionImageTL.play();
      });

      solutionLink.addEventListener("mouseleave", (elem) => {
        gsap.to(
          solutionLink,
          {
            duration: 1.5,
            y: 0,
            ease: "power4.out",
          },
          "-=2"
        );

        solutionTL.reverse();
        solutionWordsTL.reverse();
        solutionImageTL.reverse();
      });
    });
  }
  solutionsItemsHover();

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
});
