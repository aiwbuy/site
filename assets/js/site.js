document.addEventListener("DOMContentLoaded", function () {

  // PINTEREST GRID
  // ****

  var gridEl = document.querySelector('#grid');

  if (gridEl !== null) {
    imagesLoaded(document.querySelector('#grid'), function(instance) {
      new Masonry('.grid', {
        itemSelector: '.grid-item',
      });
    });
  }

  // MOBILE MENU
  // ****

  var toggleElement = document.querySelector('.nav-toggle');
  var toggleMenu = document.querySelector('.nav-menu');
  var activeClassName = 'is-active';

  toggleElement.addEventListener('click', function (e) {
    e.preventDefault();

    if (toggleElement.classList.contains('is-active')) {
      toggleElement.classList.remove(activeClassName);
      toggleMenu.classList.remove(activeClassName);

    } else {
      toggleElement.classList.add(activeClassName);
      toggleMenu.classList.add(activeClassName);
    }
  });

  // SITE SEARCH
  // ****

  var searchButtons = document.querySelectorAll('.nav-item-search');
  var modalCloseButton = document.querySelector('.modal button.delete');
  var modal = document.querySelector('.modal')

  searchButtons.forEach(function (instance) {
    instance.addEventListener('click', function (e) {
      e.preventDefault();
      modal.classList.add('is-active');
    })
  })

  modalCloseButton.addEventListener('click', function (e) {
    e.preventDefault();
    modal.classList.remove('is-active');
  });

  // REACTIVE SEARCH
  // ****

  var searchIndex = lunr(function () {
    this.ref('url');
    this.field('title');
    this.field('image');
    this.field('content');

    var self = this;

    window.searchItemsArray.forEach(function (doc) {
      self.add(doc);
    })
  })

  new Vue({
    el: '#search-view',
    data: function () {
      return {
        query: '',
        results: window.searchItemsArray
      }
    },
    methods: {
      search: function (e) {
        e.preventDefault();
        var lunrResults = searchIndex.search('*' + this.query + '*');
        var results = []
        lunrResults.forEach(function (result) {
          var findItem = window.searchItemsObject[result.ref];
          results.push(findItem);
        })
        this.results = results;
      }
    }
  })

});
