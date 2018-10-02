var name ="Krystyna Szurmańska";
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
  // only work with buttons
  if (!matchesSelector(event.target, 'button')) {
    return;
  }
  var filterValue = event.target.getAttribute('data-filter');
  // use matching filter function
  iso.arrange({ filter: filterValue });

});

/*
var showMore = document.querySelector('.showMore');
showMore.addEventListener( 'click', function( event ) {
  var items = '<div class="grid-item">YAY</div>';
  elem.append(items);
  elem.isotope( 'appended', items );

});*/

var gridButtons = document.querySelectorAll(".grid-button");
console.log(gridButtons);

for (var i = 0; i < gridButtons.length; i++) {
  console.log(gridButtons[i].outerText);
  gridButtons[i].addEventListener("click", function (event) {
    //  var activeButton = document.activeElement.id;
    //  console.log(activeButton);
    changeActiveButton(document.activeElement.id);
    var showMoreButton = document.getElementById('show-more-button');
    showMoreButton.style.display = "inline";
  });
};