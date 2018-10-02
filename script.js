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
