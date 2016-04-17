$(document).ready(function(){
    $('#secondHotel').hide();
    $('#thirdHotel').hide();

	$('.destination').on('click', function() {
        var imageSrc = ($(this).find('img').attr('src') === 'assets/arrow-2.png') ? 'assets/arrow-3.png' : 'assets/arrow-2.png';
        $(this).find('img').attr('src', imageSrc);
		$(this).siblings('.hotel').slideToggle("slow");
    });
});