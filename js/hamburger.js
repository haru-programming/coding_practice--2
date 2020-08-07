$(function () {
  //hamburgerをクリックしたらnav2を表示
  $(".nav__toggle").click(function () {
    $(this).toggleClass("active");

    if ($(this).hasClass("active")) {
      $(".nav2").addClass("active");
    } else {
      $(".nav2").removeClass("active");
    }
  });

  //各メニューをクリックしたらドロワーを閉じる
  $(".nav2__item").click(function () {
    $(".nav2").removeClass("active");
    $(".nav__toggle").removeClass("active");
  });
});
