$(document).ready(function () {
  $('.menu-btn').on('click', function (e) {
    e.preventDefault;
    $("body").toggleClass('menu-opened');
  });
});



