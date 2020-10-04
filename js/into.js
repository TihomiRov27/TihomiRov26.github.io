
/*slaider
====================*/

 var slideIndex = 1;
 showSlides(slideIndex);

 function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
    if (n > slides.length) {
       slideIndex = 1
 }
    if (n < 1) {
       slideIndex = slides.length
}
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active","");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}

/*scroll
====================*/

let $page = $('html, body');
$('a[href*="#"]').click(function() {
    $page.animate({
        scrollTop: $($.attr(this, 'href')).offset().top
    }, 800);
    return false;
});

/*up
====================*/

$(document).ready(function() {
	$(function () {
		$("#back-top").hide();

		$(window).scroll(function () {
		    if ($(this).scrollTop() > 250) {
		        $("#back-top").fadeIn();
		    } else {
		        $("#back-top").fadeOut();
		    }
		});

		$("#back-top a").click(function () {
		    $("body,html").animate( {
		        scrollTop:0
		}, 800);
		return false;
		}); 
	});
});

/*burger
====================*/

$(document).ready(function() {
	$('.burger').click(function(event) {
		$('.burger, .head').toggleClass('active');
		$('body').toggleClass('lock');
	});

// click
// ==================

	$('.click').click(function(event) {
		$('.click, .head').toggleClass('active');
		$('body').toggleClass('lock');
	});	

});

// all header__list click
// ===================

	// $('.header__list').click(function(event) {
 //        $('.burger, .head').removeClass('active');
 //        $('body').removeClass('lock');
 //    });

/*close
====================*/

$(document).ready(function() {
	$('.close').click(function(event) {
		$('.close, .head').toggleClass('active');
		$('body').toggleClass('lock');
	});	
});





