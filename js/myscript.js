$(document).ready(function(){
	var nightCounter_1_1 = 0;
	var hotelPrice_1_1 = 0;
	var totalPrices = 0;

    $("#secondHotels").hide();
    $("#thirdHotels").hide();
	$(".resultRow_1_1").hide();
		
    $("#increaseRoomNumber_1_1").click(function(){
		nightCounter_1_1 ++;
		updateReservedHotelDetails();
		countTotalPrice();
    });
	
	$("#decreaseRoomNumber_1_1").click(function(){
		if (nightCounter_1_1 > 0) {
			nightCounter_1_1 --;
			updateReservedHotelDetails();
			countTotalPrice();
		}
		if (nightCounter_1_1 == 0) {
			$("#reservedHotelName_1_1").hide();
			$("#reservedHotelNights_1_1").hide();
			$("#reservedHotelPrice_1_1").hide();
			$(".resultRow_1_1").hide();
		}
    });
	
	function updateReservedHotelDetails(){
		$(".resultRow_1_1").show();
	    $("#pieceOfNights_1_1").html($("<b></b>").text(nightCounter_1_1));
		hotelPrice_1_1 = nightCounter_1_1 * $("#hotelPrice_1_1").text();
		$("#reservedHotelName_1_1").show().html($("<b></b>").text($("#hotelName_1_1").text()));
		$("#reservedHotelNights_1_1").show().text($("#pieceOfNights_1_1").text() + " night(s)");
		$("#reservedHotelPrice_1_1").show().html("&pound;" + hotelPrice_1_1);
	}

	function countTotalPrice(){
		totalPrices = hotelPrice_1_1;
		$("#totalPrice").show().html("&pound;" + totalPrices);	
	}

	
	    $("#firstDestination").click(function(){
        $("#firstHotels").slideToggle("slow");
		$("#arrowOpen1").attr("src", "assets/arrow-3.png");
    });
	
	$("#secondDestination").click(function(){
        $("#secondHotels").slideToggle("slow");
		$("#arrowOpen2").attr("src", "assets/arrow-2.png");
    });
	
	$("#thirdDestination").click(function(){
        $("#thirdHotels").slideToggle("slow");
		$("#arrowOpen3").attr("src", "assets/arrow-2.png");
    });
	
});