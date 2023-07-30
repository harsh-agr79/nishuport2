gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

if (ScrollTrigger.isTouch !== 1) {
  ScrollSmoother.create({
    wrapper: ".wrapper",
    content: ".content",
    smooth: 1.5,
    effects: true,
  });

  gsap.fromTo(
    ".hero-section",
    { opacity: 1 },
    {
      opacity: 0,
      scrollTrigger: {
        trigger: ".hero-section",
        start: "center",
        end: "820",
        scrub: 1,
      },
    }
  );

  let itemsL = gsap.utils.toArray(".gallery__left .gallery__item");

  itemsL.forEach((item) => {
    gsap.fromTo(
      item,
      { opacity: 0, x: -50 },
      {
        opacity: 1,
        x: 0,
        scrollTrigger: {
          trigger: item,
          start: "-850",
          end: "-100",
          scrub: 1,
        },
      }
    );
  });

  let itemsR = gsap.utils.toArray(".gallery__right .gallery__item");

  itemsR.forEach((item) => {
    gsap.fromTo(
      item,
      { opacity: 0, x: 50 },
      {
        opacity: 1,
        x: 0,
        scrollTrigger: {
          trigger: item,
          start: "-750",
          end: "top",
          scrub: 1,
        },
      }
    );
  });

  let itemSI = gsap.utils.toArray(".service-item");
  var a = 0;
  itemSI.forEach((item) => {
    a = a + 1;
    if (a % 2 == 0) {
      gsap.fromTo(
        item,
        { opacity: 0, x: -30 },
        {
          opacity: 1,
          x: 0,
          scrollTrigger: {
            trigger: item,
            start: "-750",
            end: "top",
            scrub: 1,
          },
        }
      );
    } else {
      gsap.fromTo(
        item,
        { opacity: 0, x: 30 },
        {
          opacity: 1,
          x: 0,
          scrollTrigger: {
            trigger: item,
            start: "-750",
            end: "top",
            scrub: 1,
          },
        }
      );
    }
  });

  let app = gsap.utils.toArray(".app");

  app.forEach((item) => {
    gsap.fromTo(
      item,
      { height: "0", opacity: 0, },
      { height: "auto", opacity: 1,  scrollTrigger: {  trigger: item, start: "-900", end: "top",  scrub: 1  }}
    );
  });
  let sections = gsap.utils.toArray(".about");
    gsap.to(sections, {
      xPercent: -101 * (sections.length - 1),
      ease: "none",
      scrollTrigger: {
        trigger: ".about-section",
        pin: true,
        scrub: 1,
        snap: 1 / (sections.length - 1),
  		// start: "-30%",
        end: () => "+=" + document.querySelector(".about-section").offsetWidth,
      },
    });
}
