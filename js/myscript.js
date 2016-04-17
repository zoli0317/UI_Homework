$(document).ready(function(){
    $('#secondHotel').hide();
    $('#thirdHotel').hide();

	$('.destination').on('click', function () {
		$(this).children('.arrow').toggleClass('arrowClose');
		$(this).children('.arrow').toggleClass('arrowOpen');
		$(this).siblings('.hotel').slideToggle("slow");
	});
});