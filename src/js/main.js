$(function () {
  // contact form animations
  $('.mainPage__btn').click(function () {
    $('#contactForm').fadeToggle();
  });
  $(document).mouseup(function (e) {
    let container = $("#contactForm");

    if (!container.is(e.target) // if the target of the click isn't the container...
      && container.has(e.target).length === 0) // ... nor a descendant of the container
    {
      container.fadeOut(1000);
    }
  });
});

AOS.init({
  offset: 200,
  easing: 'ease-in-out',
  delay: 100
});


function quantitySlidersAndWidth() {

  if (window.innerWidth > 600) {
    return 3;
  } else {
    return 1;
  }
}


$(document).ready(function () {
  $('.portfolio__slider').slick({
    autoplay: true,
    autoplaySpeed: 2000,
    infinite: true,
    slidesToShow: quantitySlidersAndWidth(),
    slidesToScroll: 3
  });
});
