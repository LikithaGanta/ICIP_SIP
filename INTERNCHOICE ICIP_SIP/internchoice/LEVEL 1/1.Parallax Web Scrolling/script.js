window.addEventListener('scroll', function() {
    var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    var parallaxContainer = document.querySelector('.parallax-container');
  
    // Apply 3D parallax effect to the background layer
    parallaxContainer.style.transform = 'translate3d(0, ' + (scrollTop * 0.5) + 'px, 0)';
  });
  