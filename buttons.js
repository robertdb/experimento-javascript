var image = "document.getElementById('pokemonImage')";
var showBack = document.getElementById("showBack");
var showFront = document.getElementById("showFront");
var vacilar = document.getElementById("vacilar");

showBack.setAttribute("onClick",
        image + ".src = 'charmander-back.png'");
showFront.setAttribute("onClick",
        image + ".src = 'charmander-front.png'");
vacilar.setAttribute("onClick", "myFunction()");

function myFunction() {
   document.getElementById("demo").innerHTML = "te la aplique gato.";
}
