
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

$(function () {
  $(".part02 .cards").slick({
    speed: 90000,
    autoplay: true,
    autoplaySpeed: 0,
    cssEase: "linear",
    slidesToShow: 5,
    slidesToScroll: 5,
    arrows: false,
  });
});

// part03
$(function () {
  const accordionContent = document.querySelectorAll(".accordion__content");

  accordionContent.forEach((item, index) => {
    let accordionQuestion = item.querySelector(".accordion__question");

    accordionQuestion.addEventListener("click", function () {
      item.classList.toggle("open");

      let accordionAnswer = item.querySelector(".accordion__answer");
      if (item.classList.contains("open")) {
        accordionAnswer.style.height = `${accordionAnswer.scrollHeight}px`;

        item.querySelector("i").classList.replace("fa-plus", "fa-minus");
      } else {
        accordionAnswer.style.height = "0px";
        item.querySelector("i").classList.replace("fa-minus", "fa-plus");
      }

      removeOpen(index);
    });
  });

  function removeOpen(index1) {
    accordionContent.forEach((item2, index2) => {
      if (index1 != index2) {
        item2.classList.remove("open");

        let des = item2.querySelector(".accordion__answer");
        des.style.height = "0px";
        item2.querySelector("i").classList.replace("fa-minus", "fa-plus");
      }
    });
  }
});
