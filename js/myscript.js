$(document).ready(function(){
	var nightCounter = 0;
	var hotelPrice = 0;
	var totalPrices = 0;

	$(".resultRow").hide();
		
    $("#increaseRoomNumber").click(function(){
		nightCounter ++;
		updateReservedHotelDetails();
		countTotalPrice();
    });
	
	$("#decreaseRoomNumber").click(function(){
		if (nightCounter > 0) {
			nightCounter --;
			updateReservedHotelDetails();
			countTotalPrice();
		}
		if (nightCounter == 0) {
			$("#reservedHotelName").hide();
			$("#reservedHotelNights").hide();
			$("#reservedHotelPrice").hide();
			$(".resultRow").hide();
		}
    });
	
	function updateReservedHotelDetails(){
		$(".resultRow").show();
	    $("#pieceOfNights").html($("<b></b>").text(nightCounter));
		hotelPrice = nightCounter * $("#hotelPrice").text();
		$("#reservedHotelName").show().text($("#hotelName").text());
		$("#reservedHotelNights").show().text($("#pieceOfNights").text() + " night(s)");
		$("#reservedHotelPrice").show().html("&pound;" + hotelPrice);
	}

	function countTotalPrice(){
		totalPrices = hotelPrice;
		$("#totalPrice").show().html("&pound;" + totalPrices);	
	}

});