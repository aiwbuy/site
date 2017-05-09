document.addEventListener("DOMContentLoaded", function () {

  var gridEl = document.querySelector('#grid');

  if (gridEl !== null) {
    imagesLoaded(document.querySelector('#grid'), function(instance) {
      new Masonry('.grid', {
        itemSelector: '.grid-item',
      });
    });
  }

  var toggleElement = document.querySelector('.nav-toggle');
  var toggleMenu = document.querySelector('.nav-menu');
  var activeClassName = 'is-active';

  toggleElement.addEventListener('click', function (e) {
    if (toggleElement.classList.contains('is-active')) {
      toggleElement.classList.remove(activeClassName);
      toggleMenu.classList.remove(activeClassName);
    } else {
      toggleElement.classList.add(activeClassName);
      toggleMenu.classList.add(activeClassName);
    }
  });

});
