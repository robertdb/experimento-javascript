function attack() {

	var image = document.getElementById('pokemonImageUp');

	image.setAttribute("src", 'images/attack.gif');

	var audio = new Audio('sounds/004 - charmander.wav');
	
	audio.play();

}

function showFront() {

	var image = document.getElementById('pokemonImageUp');

	image.setAttribute("src", 'images/charmander.gif');

}

