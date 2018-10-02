(function () {
  var name = "Krystyna Szurmańska";
  var txt = 'Javascript';
  var speed = 80;
  var i = 0;

  function typeName() {
    if (i < name.length) {
      document.getElementById("name").innerHTML += name.charAt(i);
      i++;
      setTimeout(typeName, speed);
    }
  }
  typeName();

  var z = 0;
  function typeLanguage() {
    if (z < txt.length) {
      document.getElementById("javascript").innerHTML += txt.charAt(z);
      z++;
      setTimeout(typeLanguage, speed);
    }
  }
  setTimeout(typeLanguage, 3000);


  function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  }

  var grid = document.querySelector('.grid');
  var iso = new Isotope(grid, {
    itemSelector: '.grid-item',
    layoutMode: 'fitRows',
    masonry: {
      isFitWidth: true
    }
  });

  var filtersElem = document.querySelector('.filters-button-group');
  filtersElem.addEventListener('click', function (event) {
    if (!matchesSelector(event.target, 'button')) {
      return;
    }
    var filterValue = event.target.getAttribute('data-filter');
    iso.arrange({ filter: filterValue });
  });
})();