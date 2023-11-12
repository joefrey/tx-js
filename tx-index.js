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
        } else if (sectionID === "stats") {
          statsAnimate();
        } else if (sectionID === "solutions") {
          solutionsAnimate();
        } else if (sectionID === "clients") {
          const clientsInner = document.querySelector(".tx2-clients-inner");

          gsap.to(
            clientsInner,
            1,
            {
              y: 0,
              opacity: 1,
              ease: "power4.inOut",
              force3D: true,
            },
            "-=6"
          );
          clientsAnimate();
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
          // const can = document.querySelector(".can > img");
          console.log("Animation completed spaceship.");

          const randomX = random(10, 20);
          const randomY = random(20, 30);
          const randomDelay = random(0, 1);
          const randomTime = random(3, 5);
          const randomTime2 = random(5, 10);
          const randomAngle = random(8, 12);

          TweenLite.set(pillSpaceship, {
            // x: randomX(-1),
            // y: randomX(1),
            // rotation: randomAngle(-1),
          });

          moveX(pillSpaceship, 1);
          moveY(pillSpaceship, -1);
          rotate(pillSpaceship, 1);

          function rotate(target, direction) {
            TweenLite.to(target, randomTime2(), {
              rotation: randomAngle(direction),
              // delay: randomDelay(),
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
        repeatDelay: 50,
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
        repeatDelay: 20,
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

  function leadershipAnimate() {
    const tl = gsap.timeline();
    const leadershipItems = document.querySelectorAll(".tx2-leadership__item");

    tl.to(leadershipItems, 1.8, {
      ease: "power4.out",
      y: 0,
      delay: 0.5,
      opacity: 1,
      stagger: {
        amount: 0.3,
      },
    });
  }

  function statsAnimate() {
    const tl = gsap.timeline();
    const statsItems = document.querySelectorAll(".tx2-stats__item");
    tl.to(statsItems, 1.8, {
      ease: "power4.out",
      x: 0,
      scale: 1,
      delay: 0.5,
      opacity: 1,
      stagger: {
        amount: 0.3,
      },
    });
    const parallaxTL = gsap.timeline({
      scrollTrigger: {
        trigger: "#stats",
        scrub: true,
        pin: false,
        start: "top 80%",
        end: "+=200%",
        markers: false,
      },
    });

    parallaxTL.from(
      ".tx2-stats-items__trial-listings",
      {
        y: 300,
        duration: 100,
        delay: 10,
        ease: "power4.out",
      },
      "+=4"
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

    gsap.set(".tx2-clients-inner", {
      y: 100,
      opacity: 0,
    });

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
})();
