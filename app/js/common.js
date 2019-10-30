$(function() {
  $("#how-it-cost-js").on("click", function() {
    $(".main-content, #overlay, .main-test-block, .footer").slideToggle();
    var headerHeight = $(".header").height();
    $(".content__elem").css({
      "margin-top": headerHeight
    });

    $(".nav-elem").each(function(index, item) {
      $(item).addClass("nav-index" + index);
      $(item).on("click", function() {
        $(".nav-elem").removeClass("active");
        $(item).addClass("active");
        var itemID = $(item).attr("id");
        if ($(item).hasClass("active") && itemID == "first") {
          $(".content__elem")
            .fadeOut()
            .removeClass("active");
          $(".content__elem.first")
            .fadeIn()
            .addClass("active");
        } else if ($(item).hasClass("active") && itemID == "second") {
          $(".content__elem")
            .fadeOut()
            .removeClass("active");
          $(".content__elem.second")
            .fadeIn()
            .addClass("active");
        } else if ($(item).hasClass("active") && itemID == "third") {
          $(".content__elem")
            .fadeOut()
            .removeClass("active");
          $(".content__elem.third")
            .fadeIn()
            .addClass("active");
        } else if ($(item).hasClass("active") && itemID == "fourth") {
          $(".content__elem")
            .fadeOut()
            .removeClass("active");
          $(".content__elem.fourth")
            .fadeIn()
            .addClass("active");
        } else if ($(item).hasClass("active") && itemID == "fifth") {
          $(".content__elem")
            .fadeOut()
            .removeClass("active");
          $(".content__elem.fifth")
            .fadeIn()
            .addClass("active");
		} else if ($(item).hasClass("active") && itemID == "sixth") {
			$(".content__elem")
			  .fadeOut()
			  .removeClass("active");
			$(".content__elem.sixth")
			  .fadeIn()
			  .addClass("active");
			$(".main-test-block__nav-dots").fadeOut();
			$(".main-test-block__nav-text").fadeOut();
		  }
      });
    });

    // var mySwiper = new Swiper ('.swiper-container', {
    // 	// Optional parameters
    // 	direction: 'vertical',
    // 	loop: false,

    // 	// If we need pagination
    // 	pagination: {
    // 	  el: '.swiper-pagination',
    // 	  type: 'bullets',
    // 	},

    // 	// Navigation arrows
    // 	navigation: {
    // 	  nextEl: '.swiper-button-next',
    // 	  prevEl: '.swiper-button-prev',
    // 	},
    //   })
  });

	$("#callback-btn-js").on('click', function(){
		$('#call-back-form-js').slideToggle();
	});
});

//   var i = 0;

//   $(".nav-text-alem__prev").on("click", function() {
//     console.log(i);
//     if (i <= 0) {
//       return prevSlide((i = 0));
//     } else {
//       return prevSlide(i--);
//     }
//   });
//   $(".nav-text-alem__next").on("click", function() {
// 	i + 1;
//     console.log(i);
//     if (i >= 4) {
//       return nextSlide((i = 4));
//     } else {
//       return prevSlide(i++);
//     }
//   });

//   $(".nav-elem").each(function(index, item) {
//     $(item).addClass("nav-index" + index);
//     $(item).on("click", function() {
//       $(".nav-elem").removeClass("active");
//       $(item).addClass("active");
//       var itemID = $(item).attr("id");
//       if ($(item).hasClass("active") && itemID == "first") {
//         $(".content__elem")
//           .fadeOut()
//           .removeClass("active");
//         $(".content__elem.first")
//           .fadeIn()
//           .addClass("active");
//       } else if ($(item).hasClass("active") && itemID == "second") {
//         $(".content__elem")
//           .fadeOut()
//           .removeClass("active");
//         $(".content__elem.second")
//           .fadeIn()
//           .addClass("active");
//       } else if ($(item).hasClass("active") && itemID == "third") {
//         $(".content__elem")
//           .fadeOut()
//           .removeClass("active");
//         $(".content__elem.third")
//           .fadeIn()
//           .addClass("active");
//       } else if ($(item).hasClass("active") && itemID == "fourth") {
//         $(".content__elem")
//           .fadeOut()
//           .removeClass("active");
//         $(".content__elem.fourth")
//           .fadeIn()
//           .addClass("active");
//       } else if ($(item).hasClass("active") && itemID == "fifth") {
//         $(".content__elem")
//           .fadeOut()
//           .removeClass("active");
//         $(".content__elem.fifth")
//           .fadeIn()
//           .addClass("active");
//       }
//     });
//   });
//   console.log(i);

// function nextSlide(i) {
//   $(".nav-index" + i).click();
// }

// function prevSlide(i) {
//   $(".nav-index" + i).click();
// }
