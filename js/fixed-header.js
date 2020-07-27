$(function () {
  //fvを超えたらスクロールでheaderに色を付ける
  var mainPos = $(".header").height();

  $(window).scroll(function () {
    if ($(window).scrollTop() > mainPos) {
      $(".header__top").addClass("transform");
    } else {
      $(".header__top").removeClass("transform");
    }
  });
});
