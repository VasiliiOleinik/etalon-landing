$(function() {
  $('.header').css({"margin-bottom":"30px"});
  // Открытие теста
  $("#how-it-cost-js").on("click", function() {
    $(".main-content, #overlay, .main-test-block, .footer").slideToggle();
    $(".main-test-block").toggleClass("active");
    if ($(".main-test-block").hasClass("active")) {
      $("#pageWrapper").css({
        "max-height": "850px",
        "min-height": "830px",
        height: "100%"
      });
      $('.header').css({"margin-bottom":"0px"});
    } else {
      $("#pageWrapper").css({
        "max-height": "initial",
        "min-height": "450px",
        height: "auto"
      });
      $('.header').css({"margin-bottom":"30px"});
    }
    var headerHeight = $(".header").height();
    $(".content__elem").css({
      "margin-top": headerHeight
    });
    $(".content__elem").each(function(index, item) {
      $(item).css({ top: index * 900 });
    });
  });

  if( screen.width < 991 ) {
    $(".main-test-block__nav-text").css({"bottom": $("footer").height() + 20 + "px"});
  }

  var sliderContent = $(".main-test-block__content").children().length;
  $(".main-test-block__content").css({ height: sliderContent * 900 });

  // Модалка обратного вызова
  $("#callback-btn-js").on("click", function() {
    $("#call-back-form-js").fadeIn();
  });

  // Валидация
  $("#main-form").validate({
    errorClass: "invalid",
    validClass: "success",
    rules: {
      phone: {
        minlength: 10,
        required: true
      }
    },
    messages: {
      phone: {
        required: "Поле обязательно для заполнения",
        minlength: "Минимальная длина номера 10 цифр"
      }
    }
  });
  $("#form-callback").validate({
    errorClass: "invalid",
    validClass: "success",
    rules: {
      phone: {
        minlength: 10,
        required: true
      }
    },
    messages: {
      phone: {
        required: "Поле обязательно для заполнения",
        minlength: "Минимальная длина номера 10 цифр"
      }
    }
  });

  $(".callback-form__input, .final-form__input").mask("+7 (999) 999-99-99");

  $(document).mouseup(function(e) {
    var div = $("#call-back-form-js");
    if (!div.is(e.target) && div.has(e.target).length === 0) {
      div.fadeOut();
    }
  });

  // Слайдер тестов
  $(".slider").each(function() {
    var obj = $(this);
    $(obj)
      .find(".content__elem")
      .each(function() {
        $(obj)
          .find(".main-test-block__nav-dots")
          .append("<div class='nav-elem' rel='" + $(this).index() + "'></div>");
        $(this).addClass("slider" + $(this).index());
      });
    $(obj)
      .find(".nav-elem")
      .first()
      .addClass("active");
  });

  $(document).on("click", ".slider .nav-elem", function() {
    var currSlide = $(".nav-elem.active").attr("rel");
    var sl = $(this).closest(".slider");
    $(sl)
      .find(".nav-elem")
      .removeClass("active");
    $(this).addClass("active");
    var obj = $(this).attr("rel");
    var slideDirection;
    if (obj === 5) {
      $(".main-test-block__nav-dots").fadeOut();
      $(".main-test-block__nav-text").fadeOut();
    }

    if (currSlide > obj) {
      slideDirection = "top";
    } else if (currSlide < obj) {
      slideDirection = "bottom";
    }
    sliderJS(obj, sl, slideDirection);
    return false;
  });

  $(".nav-text-alem__prev").on("click", function() {
    var obj = $(".nav-elem.active").attr("rel");
    obj--;
    if (obj === 0) {
      $(this).removeClass("active");
    } else {
      $(this).addClass("active");
    }
    prevSlide(obj);
    return false;
  });
  $(".nav-text-alem__next").on("click", function() {
    var obj = $(".nav-elem.active").attr("rel");
    obj++;
    if (obj === 0) {
      $(".nav-text-alem__prev").removeClass("active");
    } else {
      $(".nav-text-alem__prev").addClass("active");
    }
    if (obj === 5) {
      $(".main-test-block__nav-dots").fadeOut();
      $(".main-test-block__nav-text").fadeOut();
    }
    nextSlide(obj);
    return false;
  });

  $.fancybox.open({
    src: "#modal-js",
    type: "inline"
});

  
});

function prevSlide(obj) {
  $(".nav-elem[rel='" + obj + "']").click();
}

function nextSlide(obj) {
  $(".nav-elem[rel='" + obj + "']").click();
}

function sliderJS(obj, sl, slideDirection) {
  var bl = $(sl).find(".content__elem.slider" + obj);
  var length = $(sl).find(".content__elem").length;
  var step = $(bl).height();

  var slide = (step * obj) / length;
  $(".main-test-block__content").animate({ top: "-" + slide }, 400);
  $(".content__elem").css({ opacity: 0, transition: ".3s" });
  $(bl).css({ opacity: 1, transition: ".3s" });
}
