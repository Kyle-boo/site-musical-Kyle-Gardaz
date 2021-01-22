// touche A detection

	$(document).ready(function(){

var glyph = 'a';

$('body').on('keypress',function ( event ) {
console.log("keypress fonction");
	var myChar = String.fromCharCode(event.which);

	if ( myChar == glyph ) {
		colorChange();
	} else {
		// console.log("raté");
		// On pourrait produire un son d'erreur.
	}

});

function colorChange() {

	// coloriser la lettre courante
	$("h1").css({
		"color": "red"
	});
}
	});
