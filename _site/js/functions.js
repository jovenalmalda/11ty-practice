
$(function () {
  $(".sp-menu").click(function () {
    $(this).toggleClass("active");
    $(".main-nav").toggleClass("active");
  });
});

$(function () {
  $(".main-nav__link").click(function () {
    $(".sp-menu").toggleClass("active");
    $(".main-nav").removeClass("active");

    if ($(".main-nav__link").not("active")) {
      $(".sp-menu").toggleClass("active");
    }
  });
});

$(function () {
  $(window).scroll(function () {
    if (window.scrollY >= 70) {
      $("header").addClass("active");
    } else {
      $("header").removeClass("active");
    }
  });
});


$(function () {
  $(".for-top").hide();

  $(window).on("load scroll", function () {
    if ($(this).scrollTop() > 100) {
      $(".for-top").fadeIn("fast");
    } else {
      $(".for-top").fadeOut("fast");
    }

    function window_check() {
      var w = $(window).width();
      var x = 768;
      var z = w >= x ? true : false;
      return z;
    }
  });
});

$(function () {
  var userAgent = window.navigator.userAgent.toLowerCase();
  $(window).ready(function () {
    if (userAgent.indexOf("firefox") != -1) {
      window.scrollBy(0, 2);
    }
  });
});