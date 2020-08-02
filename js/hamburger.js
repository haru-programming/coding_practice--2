$(function () {
  $(".nav__toggle").click(function () {
    $(this).toggleClass("active");

    if ($(this).hasClass("active")) {
      $(".nav2").addClass("active");
    } else {
      $(".nav2").removeClass("active");
    }
  });
});
