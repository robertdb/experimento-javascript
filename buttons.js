var image = "document.getElementById('pokemonImage')";
var showBack = document.getElementById("showBack");
var showFront = document.getElementById("showFront");

showBack.setAttribute("onClick",
        image + ".src = 'charmander-back.png'");
showFront.setAttribute("onClick",
        image + ".src = 'charmander-front.png'");
