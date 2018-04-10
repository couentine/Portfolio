$(document).ready(function(){
  $(window).scroll(function(){
  	var scroll = $(window).scrollTop();
	  if (scroll > 300) {
	    $(".top-right").css("background" , "#c19b6c");
	  }

	  else{
		  $(".top-right").css("background" , "none");
	  }
  })
});

$("body").fadeIn("slow");
