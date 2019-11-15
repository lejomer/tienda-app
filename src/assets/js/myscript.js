$(window).scroll(function() {
    if ($("#menu").offset().top < 56) {
        $("#menu").addClass("bg-primary");
        $("#menu").removeClass("bg-info");
    } else {
        $("#menu").removeClass("bg-primary");
        $("#menu").addClass("bg-info");
    }
  });

  