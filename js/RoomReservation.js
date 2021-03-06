$(document).ready(function(){

var summaryData = [];
updateSummary();
	
$('.increaseRoomNumber').on('click', function () {
	var currentNumberOfNights = Number($(this).parent().siblings('.pieceOfNights').html());
	var newNumberOfNights = currentNumberOfNights + 1;
	$(this).parent().siblings('.pieceOfNights').html(newNumberOfNights);
	var hotelName = $(this).parent().siblings('.hotelName').html();
	var price = Number($(this).parent().siblings('.hotelPrice').find('span').html());
	$(this).parents('.tableRow').addClass('selectedHotel');
	
	//Create a hotel
	var hotel = {
		name: hotelName,
		price: price,
		numberOfNights: newNumberOfNights
	};
	//Check the hotel is in the summary list
	var hotelAlreadyInList = false;
	summaryData.forEach(function (elem) {
		if (elem.name === hotel.name){
			hotelAlreadyInList = true;
		}
	});
	//If the hotel is in the summary module list than the numberOfNights will be only updated. Else: It will be added into the list.
	if (hotelAlreadyInList) {
		summaryData.forEach(function (elem) {
			if (elem.name === hotel.name) {
				elem.numberOfNights = hotel.numberOfNights;
			}
		});
	} else {
		summaryData.push(hotel);
	}
	
	updateSummary();
});

$('.decreaseRoomNumber').on('click', function() {
	var currentNumberOfNights = Number($(this).parent().siblings('.pieceOfNights').html());
	if (currentNumberOfNights === 0) return;
	var newNumberOfNights = currentNumberOfNights - 1;
	$(this).parent().siblings('.pieceOfNights').html(newNumberOfNights);
	var hotelName = $(this).parent().siblings('.hotelName').html();
	var price = (-1) * Number($(this).parent().siblings('.hotelPrice').find('span').html());
	
	var hotel = {
		name: hotelName,
		price: price,
		numberOfNights: newNumberOfNights
	};
	
	var hotelIndex;
	// Look for the hotel in the list
	summaryData.forEach(function (elem, index) {
		if (elem.name === hotel.name){
			hotelIndex = index;
		}
	});
	// Update number of nights or remove the hotel if number of nights is 0
	if (hotel.numberOfNights > 0) {
		summaryData.forEach(function (elem) {
			if (elem.name === hotel.name) {
				elem.numberOfNights = hotel.numberOfNights;
			}
		});
	} else {
		summaryData.splice(hotelIndex, 1);
		$(this).parents('.tableRow').removeClass('selectedHotel');
	}
	
	updateSummary();
});

function updateSummary(){
	// Hiding the table if there are not hotels in the list
	var summaryTable = $('#summaryModuleSection');
	if (summaryData.length === 0){ 
		summaryTable.hide();
		return;
	} else {
		summaryTable.show();
	}

	var totalPrice = 0;
	var summaryTableBody = $('#summaryModuleTable');
	summaryTableBody.empty();
	summaryData.forEach(function (hotel) {
		// Create hotel rows
		var hotelPrice = hotel.numberOfNights * hotel.price;
		var tr = $(
		'<tr>' + 
			'<td class="reservedHotelName">' + hotel.name + '</td>' +
			'<td>' + '&#32' + '</td>' +
		'</tr>' +
		'<tr>' + 
			'<td class="reservedHotelNights">' + hotel.numberOfNights + ' night(s)' + '</td>' +
			'<td class="reservedHotelPrice"><span>&pound;</span>' + hotelPrice + '</td>' +
		'</tr>'
		);
		summaryTableBody.append(tr);
		
		// Add price to total price
		totalPrice += hotelPrice;
	});
	
	$('#totalPrice').html('<span>&pound;</span>' + totalPrice);
}

    $('#secondHotel').hide();
    $('#thirdHotel').hide();

	$('.destination').on('click', function() {
        var imageSrc = ($(this).find('img').attr('src') === 'assets/arrow-2.png') ? 'assets/arrow-3.png' : 'assets/arrow-2.png';
        $(this).find('img').attr('src', imageSrc);
		$(this).siblings('.hotel').slideToggle("slow");
    });
	
});
