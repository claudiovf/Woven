
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

    $('.icon-wrap').on('click', function(event) {
        if (!$('.top-burger').hasClass('top-burger-active')) {
            $('.top-burger').addClass('top-burger-active');
        }else{
            $('.top-burger').removeClass('top-burger-active');
        }
    })
    $('.icon-wrap').on('click', function(event) {
        if (!$('.mid-burger').hasClass('mid-burger-active')) {
            $('.mid-burger').addClass('mid-burger-active');
        }else{
            $('.mid-burger').removeClass('mid-burger-active');
        }
    })
    $('.icon-wrap').on('click', function(event) {
        if (!$('.bottom-burger').hasClass('bottom-burger-active')) {
            $('.bottom-burger').addClass('bottom-burger-active');
        }else{
            $('.bottom-burger').removeClass('bottom-burger-active');
        }
    })
 


    $('.icon-search').on('click', function(event) {
        if (!$('.top-line').hasClass('top-line-active')) {
            $('.top-line').addClass('top-line-active');
            $('.search').css("background-image", "none");
            $('.search').css("background-color", "rgba(255, 255, 255, 0.955)");
        }else{
            $('.top-line').removeClass('top-line-active');
            $('.search').css("background-image", "url(images/magnifier.png)");
            $('.search').css("background-color", "none");
        }
    })
    $('.icon-search').on('click', function(event) {
        if (!$('.bottom-line').hasClass('bottom-line-active')) {
            $('.bottom-line').addClass('bottom-line-active');
        }else{
            $('.bottom-line').removeClass('bottom-line-active');
        }
    })

  const mainMenu = document.getElementById('main-menu');
  let overlay = document.getElementById('overlay');
  let menuOverlay = document.getElementById('menuOverlay');
  let searchNav = document.getElementById('search');
  let searchOverlay = document.getElementById('search-overlay');


  function toggleMenu() {
      if(searchOverlay.classList.contains('active-search')) {
          searchOverlay.classList.remove('active-search');
          overlay.classList.remove('active2');
          overlay.classList.toggle('active');
          menuOverlay.classList.toggle('active-menu');
      }else{
    overlay.classList.toggle('active');
    menuOverlay.classList.toggle('active-menu');
    console.log('hello');
  }}

  function toggleSearch() {
      if(menuOverlay.classList.contains('active-menu')) {
          menuOverlay.classList.remove('active-menu');
          overlay.classList.remove('active');
          overlay.classList.toggle('active2');
          searchOverlay.classList.toggle('active-search');
      }else{
      overlay.classList.toggle('active2');
      searchOverlay.classList.toggle('active-search');
      }
  }

  mainMenu.addEventListener('click', toggleMenu);
  searchNav.addEventListener('click', toggleSearch);
  
$('.shop').on('mouseenter', function(event) {
    if (
        !$('.menu').hasClass('active') && 
        !$('.menu-overlay').hasClass('active-menu') &&
        !$('.search-overlay').hasClass('active-search')) {
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