document.querySelector('.icono2').addEventListener('mouseenter', function() {
  this.classList.add('fadeInOut2');
});

document.querySelector('.icono2').addEventListener('mouseleave', function() {
  this.classList.remove('fadeInOut2');
});

$(document).ready(function(){
    $('#slider').fadeIn('slow').delay(200);
    $("#sticker").sticky({topSpacing:0});
  
    // SMOOTH SCROLL MENU
    $("a").on('click', function(event) {
      if (this.hash !== "") {  
        event.preventDefault();
  
        var hash = this.hash;
  
        $('html, body').animate({
          scrollTop: $(hash).offset().top
        }, 1000, function(){
          window.location.hash = hash;
        });
      }
    });
  
    // FIXED MENU COLORS
    $(window).trigger('scroll');
    $(window).bind('scroll', function () {
      var pixels = 50; // pixeles abajo
      if ($(window).scrollTop() > pixels) {
        $('.nav').addClass('fixed');
        $('.menu a').css({"color":"#354757"});
        $('.logo').css({"color":"#354757"});
      } else {
        $('.nav').removeClass('fixed');
        $('.menu a').css({"color":"#BABCBD"});
        $('.logo').css({"color":"#BABCBD"});
      }
    }); 
});
