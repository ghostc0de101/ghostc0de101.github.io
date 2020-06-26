//////////////////////////////////////////////////////  //
//    EVENTS ON DOCUMENT READY                          //
//////////////////////////////////////////////////////  //

$(document).ready(function () {
    "use strict";

    //// SCROLL SPY TRIGGER
 	$('body').scrollspy({
        target: '.navbar-collapse',
        offset: 195
    });


   // Show Color Option Div When Click On The Gear
    $(".gear-check").click(function () {
        $(".color-option").fadeToggle();
    });
    // Change Theme Color On Click
    var colorLi = $(".color-option li");
    colorLi.click(function () {
        $("link[href*='color']").attr("href", $(this).attr("data-value"));
    });
    

    //// PRELOADER TRIGGER
    $(window).on("load", function() {
        $("#loading").fadeOut(300);
    });

    //// SMOTH SCROLL
    $.scrollIt({
        topOffset: -80
    });

	//// COLLAPSED MENU CLOSE ON CLICK
    $(document).on('click', '.navbar-collapse.in', function (e) {
        if ($(e.target).is('a')) {
            $(this).collapse('hide');
        }
    });

    //// PARTICLES TRIGGER
    particlesJS("particles-overl", {
      "particles": {
        "number": {
          "value": 60,
          "density": {
            "enable": true,
            "value_area": 800
          }
        },
        "color": {
          "value": "#FFF"
        },
        "shape": {
          "type": "circle",
          "stroke": {
            "width": 0,
            "color": "#FFF"
          },
          "polygon": {
            "nb_sides": 5
          },
          "image": {
            "src": "img/github.svg",
            "width": 100,
            "height": 100
          }
        },
        "opacity": {
          "value": 0.5,
          "random": false,
          "anim": {
            "enable": false,
            "speed": 1,
            "opacity_min": 0.1,
            "sync": false
          }
        },
        "size": {
          "value": 3,
          "random": true,
          "anim": {
            "enable": false,
            "speed": 40,
            "size_min": 0.1,
            "sync": false
          }
        },
        "line_linked": {
          "enable": true,
          "distance": 150,
          "color": "#FFF",
          "opacity": 0.4,
          "width": 1
        },
        "move": {
          "enable": true,
          "speed": 6,
          "direction": "none",
          "random": false,
          "straight": false,
          "out_mode": "out",
          "bounce": false,
          "attract": {
            "enable": false,
            "rotateX": 600,
            "rotateY": 1200
          }
        }
      },
      "interactivity": {
        "detect_on": "canvas",
        "events": {
          "onhover": {
            "enable": true,
            "mode": "grab"
          },
          "onclick": {
            "enable": true,
            "mode": "push"
          },
          "resize": true
        },
        "modes": {
          "grab": {
            "distance": 140,
            "line_linked": {
              "opacity": 1
            }
          },
          "bubble": {
            "distance": 400,
            "size": 40,
            "duration": 2,
            "opacity": 8,
            "speed": 3
          },
          "repulse": {
            "distance": 200,
            "duration": 0.4
          },
          "push": {
            "particles_nb": 4
          },
          "remove": {
            "particles_nb": 2
          }
        }
      },
      "retina_detect": true
    });
    
    //// FIXED NAVBAR
    $(window).scroll(function() {
        if ($(window).scrollTop() > 50) {
            $('.navbar').addClass('fixed');
        } else {
            $('.navbar').removeClass('fixed');
        }
    });

    //// ISOTOPE TRIGGER
    var $grid = $('.work-content').isotope({
      itemSelector: '.work-item',
      stagger: 30
    });
    $('.filter-work').on( 'click', '.button', function() {
      var filterValue = $(this).attr('data-filter');
      $grid.isotope({ filter: filterValue });
    });
    // change is-checked class on buttons
    $('.button-group').each( function( i, buttonGroup ) {
      var $buttonGroup = $( buttonGroup );
      $buttonGroup.on( 'click', 'a', function() {
        $buttonGroup.find('.is-checked').removeClass('is-checked');
        $( this ).addClass('is-checked');
      });
    });

    //// MASONRY
    $('.work-content').isotope({
      itemSelector: '.work-caption img',
      masonry: {
        columnWidth: 0
      }
    });

    //// MAGNIFIC POPUP TRIGGER
    $('.modal-image').magnificPopup({
      type:'inline',
      midClick: true
    });

   	//// COUNT TO TRIGGER
    var eventFired = false,
    objectPositionTop = $('.facts').offset().top;
    $(window).on('scroll', function () {
        var currentPosition = $(document).scrollTop() + 400;
        if (currentPosition >= objectPositionTop && eventFired === false) {
            eventFired = true;
            $(".count").countTo({
                speed: 5000,
                refreshInterval: 80
            });
        }
    });
    
    // OWL CAROUSEL TRIGGER
    $('.owl-carousel').owlCarousel({
        items: 1,
        margin: 0,
        dots: true
     });

    //// PARSLEY TRIGGER
    $('.cont-fo').parsley();

});