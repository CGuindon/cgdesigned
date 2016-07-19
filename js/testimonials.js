
// Makes the text generate with the click of a button
var $placeholder = $('.placeholder');

$('.btn-load').on('click', function () {
	$placeholder.load('loaded-in.html');
});

// Makes a random vegetable appear with each refresh
var rand = Math.round( Math.random() * 2);  // #2 because there are 2 files (0, 1 & 2)
var file = 'veg-' + rand + '.html';
$('.rand-veg').load(file);

// Automatically load the dinos.json file as soon as the page loads
var dinoData = $.ajax('dinos.json', {
	// Tell jQuery we are loading a JSON file and to parse it properly
	dataType: 'json'
});

// Because AJAX takes time to download things of the internet
// .done() will be triggered only after jQuery has finished downloading
dinoData.done(function (data) {
	var dino = Math.round( Math.random() * (data.length - 1) ); // data.length will count automatically

	$('.dino-name').html(data[dino].name);
	$('.dino-period').html(data[dino].period);
	$('.dino-diet').html(data[dino].diet);
});
