var swiper = new Swiper(".mySwiper", {
    loop: true,
    centeredSlides: true,
    autoplay: {
        delay: 1500,
        disabledonINteraction: false,
    },
    breakpoints: {
        0: {
            slidesPerView: 1,
        },
    },
  });