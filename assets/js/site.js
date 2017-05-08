document.addEventListener("DOMContentLoaded", function () {

  imagesLoaded(document.querySelector('#grid'), function(instance) {
    new Masonry('.grid', {
      itemSelector: '.grid-item',
    });
  });

});