
var $features = $('.features img');


// Features Section
$('.features-section').waypoint(function () {
	$features.eq(0).addClass('js-features-delay-1');
	$features.eq(2).addClass('js-features-delay-3');
	$features.eq(3).addClass('js-features-delay-2');
	$features.addClass('js-features-animate');
}, { offset: '60%'});
