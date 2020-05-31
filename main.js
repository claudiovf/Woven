
// fading effect on 
// landing image on scroll

$(window).scroll(function() {
    var scrollTop = $(this).scrollTop();
  
    $('.start-spacer').css({
      opacity: function() {
        var elementHeight = $(this).height(),
          opacity = ((1 - (elementHeight - scrollTop) / elementHeight) * 1) - 0.1;
  
        return opacity;
      }
    });
  });

  const mainMenu = document.getElementById('main-menu');
  let overlay = document.getElementById('overlay');
  let menuOverlay = document.getElementById('menuOverlay');


  function toggleMenu() {
    overlay.classList.toggle('active');
    menuOverlay.classList.toggle('active-menu');
    console.log('hello');
  }

  mainMenu.addEventListener('click', toggleMenu);

  
$('.shop').on('mouseenter', function(event) {
    if (!$('.menu').hasClass('active') && !$('.menu-overlay').hasClass('active-menu')) {
        $('.overlay').addClass('active')
        $('.shop-overlay').addClass('active-shop');
    }
});

$('.shop').on('mouseleave', function(event) {
    if (!$('.menu').hasClass('active') && !$('.menu-overlay').hasClass('active-menu')) {
        $('.overlay').removeClass('active')
        $('.shop-overlay').removeClass('active-shop');
        /*$('#site-overlay').removeClass('active');*/
    }
});

$('.shop-overlay').on('mouseenter', function(event) {
    if (!$('.menu').hasClass('active') && !$('.menu-overlay').hasClass('active-active')) {
        $('.overlay').addClass('active')
        $('.shop-overlay').addClass('active-shop');
        // $('#site-overlay').addClass('active');
    }
});

$('.shop-overlay').on('mouseleave', function(event) {
    if (!$('.menu').hasClass('active') && !$('.menu-overlay').hasClass('active-menu')) {
        $('.overlay').removeClass('active')
        $('.shop-overlay').removeClass('active-shop');
        // $('#site-overlay').removeClass('active');
    }
});