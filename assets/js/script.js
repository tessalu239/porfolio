//Window scroll
$(window).on("scroll", function () {
  const scrollTop = $(window).scrollTop();
  if (scrollTop >= 100) {
    $("body").addClass("fixed-header");
  } else {
    $("body").removeClass("fixed-header");
  }
});

//Document Ready
$(document).ready(function () {
  //Type animation
  new Typed("#type-it", {
    strings: ["Front-end Developer", "Freelancer"],
    typeSpeed: 150,
    loop: true,
  });
});
