$(function() {
  $("#how-it-cost-js").on("click", function() {
    $(".main-content, #overlay, .main-test-block, .footer").slideToggle();
    var headerHeight = $(".header").height();
    $(".content__elem").css({
      "margin-top": headerHeight
    });
  });

  $("#callback-btn-js").on("click", function() {
    $("#call-back-form-js").slideToggle();
  });

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
    var sl = $(this).closest(".slider");
    $(sl)
      .find(".nav-elem")
      .removeClass("active");
    $(this).addClass("active");
    var obj = $(this).attr("rel");
    sliderJS(obj, sl);
    return false;
  });


  $(".nav-text-alem__prev").on("click", function() {
    var obj = $(".nav-elem.active").attr("rel");
    obj--;
    if (obj === 0) {
      $(this).removeClass('active');
    } else {
      $(this).addClass('active');
    }
    prevSlide(obj);
    return false;
  });
  $(".nav-text-alem__next").on("click", function() {
    var obj = $(".nav-elem.active").attr("rel");
    obj++;
    if (obj === 0) {
      $(".nav-text-alem__prev").removeClass('active');
    } else {
      $(".nav-text-alem__prev").addClass('active');
    }
    if (obj === 5) {
      $('.main-test-block__nav-dots').fadeOut();
      $('.main-test-block__nav-text').fadeOut();
    }
    nextSlide(obj);
    return false;
  });

});

function prevSlide(obj) {
  $(".nav-elem[rel='"+ obj +"']").click();
}

function nextSlide(obj) {
  $(".nav-elem[rel='"+ obj +"']").click();
}

function sliderJS(obj, sl) {
  var bl = $(sl).find(".content__elem.slider" + obj);
  var step = $(bl).height();
  $(".content__elem").fadeOut();
  $(bl).fadeIn();
  $(bl).animate({ top: "-" + step * obj }, 500);
}

