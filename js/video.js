var $dialog = $('#video');
var $placeholder = $('#video-placeholder');

dialogPolyfill.registerDialog($dialog.get(0)); // This will make it work in other browsers

$('#btn-open').on('click', function () {
	$placeholder.html('<iframe src="http://player.vimeo.com/video/81207970?autoplay=1" width="800" height="450" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>');

	// in <iframe> remove http: when in normal browser

	/* console.log('Clicked!');   -> To verify if code works */

	/*
		.get() returns the native Javascript element for us to access.
		When using jQuery we don't have access to the original HTML
			elements directly, we are using jQuery to manipulate them.
		Example:
		$dialog.show() - Will call jQuery's 'show()' function
		$dialog.get(0) - Will call Javascript's native 'show()' funtion
	*/
	$dialog.get(0).showModal();
	// show() -> allows multiple dialogs
	// showModal() -> single dialog, with no user interaction behind
});

$('#btn-close').on('click', function () {
		$dialog.get(0).close();
		$placeholder.html('');
	});
