var $items = $('.carousel-items img');

var switchItems = function (outgoing, incoming) {
	$items.eq(incoming).attr('data-state', 'incoming').fadeIn(250, function () {
		$items.eq(outgoing).attr('data-state', '').hide();
		$items.eq(incoming).attr('data-state', 'current');
	});
};

$items.filter(':not([data-state="current"])').hide();

$('.next').on('click', function () {
	var current = $items.filter('[data-state="current"]').index();
	var next = current + 1;

	if (next >= $items.length) {
		next = 0;
	}  /* This will make the carousel restart to 0 after getting to img 4 */

	switchItems(current, next);
});

$('.previous').on('click', function () {
	var current = $items.filter('[data-state="current"]').index();
	var next = current - 1;


	switchItems(current, next);
});
