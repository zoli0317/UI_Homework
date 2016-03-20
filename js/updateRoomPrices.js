$(document).ready(function(){
	var nightCounter_1_1 = 0, nightCounter_1_2 = 0, nightCounter_1_3 = 0, nightCounter_1_4 = 0,  nightCounter_1_5 = 0;
	var nightCounter_2_1 = 0, nightCounter_2_2 = 0, nightCounter_2_3 = 0, nightCounter_2_4 = 0,  nightCounter_2_5 = 0;
	var nightCounter_3_1 = 0, nightCounter_3_2 = 0, nightCounter_3_3 = 0, nightCounter_3_4 = 0,  nightCounter_3_5 = 0;
	var hotelPrice_1_1 = 0, hotelPrice_1_2 = 0, hotelPrice_1_3 = 0, hotelPrice_1_4 = 0, hotelPrice_1_5 = 0;
	var hotelPrice_2_1 = 0, hotelPrice_2_2 = 0, hotelPrice_2_3 = 0, hotelPrice_2_4 = 0, hotelPrice_2_5 = 0;
	var hotelPrice_3_1 = 0, hotelPrice_3_2 = 0, hotelPrice_3_3 = 0, hotelPrice_3_4 = 0, hotelPrice_3_5 = 0;
	var totalPrices = 0;
	
	$(".resultRow_1_1").hide();
	$(".resultRow_1_2").hide();
	$(".resultRow_1_3").hide();
	$(".resultRow_1_4").hide();
	$(".resultRow_1_5").hide();
	$(".resultRow_2_1").hide();
	$(".resultRow_2_2").hide();
	$(".resultRow_2_3").hide();
	$(".resultRow_2_4").hide();
	$(".resultRow_2_5").hide();
	$(".resultRow_3_1").hide();
	$(".resultRow_3_2").hide();
	$(".resultRow_3_3").hide();
	$(".resultRow_3_4").hide();
	$(".resultRow_3_5").hide();
	
	//1. room update 
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
	
	
	//2. room update 
	$("#increaseRoomNumber_1_2").click(function(){
		nightCounter_1_2 ++;
		updateReservedHotelDetails2();
		countTotalPrice();
    });
	
	$("#decreaseRoomNumber_1_2").click(function(){
		if (nightCounter_1_2 > 0) {
			nightCounter_1_2 --;
			updateReservedHotelDetails2();
			countTotalPrice();
		}
		if (nightCounter_1_2 == 0) {
			$("#reservedHotelName_1_2").hide();
			$("#reservedHotelNights_1_2").hide();
			$("#reservedHotelPrice_1_2").hide();
			$(".resultRow_1_2").hide();
		}
    });
	
	function updateReservedHotelDetails2(){
		$(".resultRow_1_2").show();
	    $("#pieceOfNights_1_2").html($("<b></b>").text(nightCounter_1_2));
		hotelPrice_1_2 = nightCounter_1_2 * $("#hotelPrice_1_2").text();
		$("#reservedHotelName_1_2").show().html($("<b></b>").text($("#hotelName_1_2").text()));
		$("#reservedHotelNights_1_2").show().text($("#pieceOfNights_1_2").text() + " night(s)");
		$("#reservedHotelPrice_1_2").show().html("&pound;" + hotelPrice_1_2);
	}
	
	
	//3. room update 
	$("#increaseRoomNumber_1_3").click(function(){
		nightCounter_1_3 ++;
		updateReservedHotelDetails3();
		countTotalPrice();
    });
	
	$("#decreaseRoomNumber_1_3").click(function(){
		if (nightCounter_1_3 > 0) {
			nightCounter_1_3 --;
			updateReservedHotelDetails3();
			countTotalPrice();
		}
		if (nightCounter_1_3 == 0) {
			$("#reservedHotelName_1_3").hide();
			$("#reservedHotelNights_1_3").hide();
			$("#reservedHotelPrice_1_3").hide();
			$(".resultRow_1_3").hide();
		}
    });
	
	function updateReservedHotelDetails3(){
		$(".resultRow_1_3").show();
	    $("#pieceOfNights_1_3").html($("<b></b>").text(nightCounter_1_3));
		hotelPrice_1_3 = nightCounter_1_3 * $("#hotelPrice_1_3").text();
		$("#reservedHotelName_1_3").show().html($("<b></b>").text($("#hotelName_1_3").text()));
		$("#reservedHotelNights_1_3").show().text($("#pieceOfNights_1_3").text() + " night(s)");
		$("#reservedHotelPrice_1_3").show().html("&pound;" + hotelPrice_1_3);
	}
	
	
	//4. room update 		
	$("#increaseRoomNumber_1_4").click(function(){
		nightCounter_1_4 ++;
		updateReservedHotelDetails4();
		countTotalPrice();
    });
	
	$("#decreaseRoomNumber_1_4").click(function(){
		if (nightCounter_1_4 > 0) {
			nightCounter_1_4 --;
			updateReservedHotelDetails4();
			countTotalPrice();
		}
		if (nightCounter_1_4 == 0) {
			$("#reservedHotelName_1_4").hide();
			$("#reservedHotelNights_1_4").hide();
			$("#reservedHotelPrice_1_4").hide();
			$(".resultRow_1_4").hide();
		}
    });
	
	function updateReservedHotelDetails4(){
		$(".resultRow_1_4").show();
	    $("#pieceOfNights_1_4").html($("<b></b>").text(nightCounter_1_4));
		hotelPrice_1_4 = nightCounter_1_4 * $("#hotelPrice_1_4").text();
		$("#reservedHotelName_1_4").show().html($("<b></b>").text($("#hotelName_1_4").text()));
		$("#reservedHotelNights_1_4").show().text($("#pieceOfNights_1_4").text() + " night(s)");
		$("#reservedHotelPrice_1_4").show().html("&pound;" + hotelPrice_1_4);
	}
	
		
	//5. room update 		
	$("#increaseRoomNumber_1_5").click(function(){
		nightCounter_1_5 ++;
		updateReservedHotelDetails5();
		countTotalPrice();
    });
	
	$("#decreaseRoomNumber_1_5").click(function(){
		if (nightCounter_1_5 > 0) {
			nightCounter_1_5 --;
			updateReservedHotelDetails5();
			countTotalPrice();
		}
		if (nightCounter_1_5 == 0) {
			$("#reservedHotelName_1_5").hide();
			$("#reservedHotelNights_1_5").hide();
			$("#reservedHotelPrice_1_5").hide();
			$(".resultRow_1_5").hide();
		}
    });
	
	function updateReservedHotelDetails5(){
		$(".resultRow_1_5").show();
	    $("#pieceOfNights_1_5").html($("<b></b>").text(nightCounter_1_5));
		hotelPrice_1_5 = nightCounter_1_5 * $("#hotelPrice_1_5").text();
		$("#reservedHotelName_1_5").show().html($("<b></b>").text($("#hotelName_1_5").text()));
		$("#reservedHotelNights_1_5").show().text($("#pieceOfNights_1_5").text() + " night(s)");
		$("#reservedHotelPrice_1_5").show().html("&pound;" + hotelPrice_1_5);
	}
	
		
	//6. room update 		
	$("#increaseRoomNumber_2_1").click(function(){
		nightCounter_2_1 ++;
		updateReservedHotelDetails_2_1();
		countTotalPrice();
    });
	
	$("#decreaseRoomNumber_2_1").click(function(){
		if (nightCounter_2_1 > 0) {
			nightCounter_2_1 --;
			updateReservedHotelDetails_2_1();
			countTotalPrice();
		}
		if (nightCounter_2_1 == 0) {
			$("#reservedHotelName_2_1").hide();
			$("#reservedHotelNights_2_1").hide();
			$("#reservedHotelPrice_2_1").hide();
			$(".resultRow_2_1").hide();
		}
    });
	
	function updateReservedHotelDetails_2_1(){
		$(".resultRow_2_1").show();
	    $("#pieceOfNights_2_1").html($("<b></b>").text(nightCounter_2_1));
		hotelPrice_2_1 = nightCounter_2_1 * $("#hotelPrice_2_1").text();
		$("#reservedHotelName_2_1").show().html($("<b></b>").text($("#hotelName_2_1").text()));
		$("#reservedHotelNights_2_1").show().text($("#pieceOfNights_2_1").text() + " night(s)");
		$("#reservedHotelPrice_2_1").show().html("&pound;" + hotelPrice_2_1);
	}	
	
		
	//7. room update 		
	$("#increaseRoomNumber_2_2").click(function(){
		nightCounter_2_2 ++;
		updateReservedHotelDetails_2_2();
		countTotalPrice();
    });
	
	$("#decreaseRoomNumber_2_2").click(function(){
		if (nightCounter_2_2 > 0) {
			nightCounter_2_2 --;
			updateReservedHotelDetails_2_2();
			countTotalPrice();
		}
		if (nightCounter_2_2 == 0) {
			$("#reservedHotelName_2_2").hide();
			$("#reservedHotelNights_2_2").hide();
			$("#reservedHotelPrice_2_2").hide();
			$(".resultRow_2_2").hide();
		}
    });
	
	function updateReservedHotelDetails_2_2(){
		$(".resultRow_2_2").show();
	    $("#pieceOfNights_2_2").html($("<b></b>").text(nightCounter_2_2));
		hotelPrice_2_2 = nightCounter_2_2 * $("#hotelPrice_2_2").text();
		$("#reservedHotelName_2_2").show().html($("<b></b>").text($("#hotelName_2_2").text()));
		$("#reservedHotelNights_2_2").show().text($("#pieceOfNights_2_2").text() + " night(s)");
		$("#reservedHotelPrice_2_2").show().html("&pound;" + hotelPrice_2_2);
	}	

	//8. room update 		
	$("#increaseRoomNumber_2_3").click(function(){
		nightCounter_2_3 ++;
		updateReservedHotelDetails_2_3();
		countTotalPrice();
    });
	
	$("#decreaseRoomNumber_2_3").click(function(){
		if (nightCounter_2_3 > 0) {
			nightCounter_2_3 --;
			updateReservedHotelDetails_2_3();
			countTotalPrice();
		}
		if (nightCounter_2_3 == 0) {
			$("#reservedHotelName_2_3").hide();
			$("#reservedHotelNights_2_3").hide();
			$("#reservedHotelPrice_2_3").hide();
			$(".resultRow_2_3").hide();
		}
    });
	
	function updateReservedHotelDetails_2_3(){
		$(".resultRow_2_3").show();
	    $("#pieceOfNights_2_3").html($("<b></b>").text(nightCounter_2_3));
		hotelPrice_2_3 = nightCounter_2_3 * $("#hotelPrice_2_3").text();
		$("#reservedHotelName_2_3").show().html($("<b></b>").text($("#hotelName_2_3").text()));
		$("#reservedHotelNights_2_3").show().text($("#pieceOfNights_2_3").text() + " night(s)");
		$("#reservedHotelPrice_2_3").show().html("&pound;" + hotelPrice_2_3);
	}	

	//9. room update 		
	$("#increaseRoomNumber_2_4").click(function(){
		nightCounter_2_4 ++;
		updateReservedHotelDetails_2_4();
		countTotalPrice();
    });
	
	$("#decreaseRoomNumber_2_4").click(function(){
		if (nightCounter_2_4 > 0) {
			nightCounter_2_4 --;
			updateReservedHotelDetails_2_4();
			countTotalPrice();
		}
		if (nightCounter_2_4 == 0) {
			$("#reservedHotelName_2_4").hide();
			$("#reservedHotelNights_2_4").hide();
			$("#reservedHotelPrice_2_4").hide();
			$(".resultRow_2_4").hide();
		}
    });
	
	function updateReservedHotelDetails_2_4(){
		$(".resultRow_2_4").show();
	    $("#pieceOfNights_2_4").html($("<b></b>").text(nightCounter_2_4));
		hotelPrice_2_4 = nightCounter_2_4 * $("#hotelPrice_2_4").text();
		$("#reservedHotelName_2_4").show().html($("<b></b>").text($("#hotelName_2_4").text()));
		$("#reservedHotelNights_2_4").show().text($("#pieceOfNights_2_4").text() + " night(s)");
		$("#reservedHotelPrice_2_4").show().html("&pound;" + hotelPrice_2_4);
	}		
	
	
	//10. room update 		
	$("#increaseRoomNumber_2_5").click(function(){
		nightCounter_2_5 ++;
		updateReservedHotelDetails_2_5();
		countTotalPrice();
    });
	
	$("#decreaseRoomNumber_2_5").click(function(){
		if (nightCounter_2_5 > 0) {
			nightCounter_2_5 --;
			updateReservedHotelDetails_2_5();
			countTotalPrice();
		}
		if (nightCounter_2_5 == 0) {
			$("#reservedHotelName_2_5").hide();
			$("#reservedHotelNights_2_5").hide();
			$("#reservedHotelPrice_2_5").hide();
			$(".resultRow_2_5").hide();
		}
    });
	
	function updateReservedHotelDetails_2_5(){
		$(".resultRow_2_5").show();
	    $("#pieceOfNights_2_5").html($("<b></b>").text(nightCounter_2_5));
		hotelPrice_2_5 = nightCounter_2_5 * $("#hotelPrice_2_5").text();
		$("#reservedHotelName_2_5").show().html($("<b></b>").text($("#hotelName_2_5").text()));
		$("#reservedHotelNights_2_5").show().text($("#pieceOfNights_2_5").text() + " night(s)");
		$("#reservedHotelPrice_2_5").show().html("&pound;" + hotelPrice_2_5);
	}
	
	//11. room update 		
	$("#increaseRoomNumber_3_1").click(function(){
		nightCounter_3_1 ++;
		updateReservedHotelDetails_3_1();
		countTotalPrice();
    });
	
	$("#decreaseRoomNumber_3_1").click(function(){
		if (nightCounter_3_1 > 0) {
			nightCounter_3_1 --;
			updateReservedHotelDetails_3_1();
			countTotalPrice();
		}
		if (nightCounter_3_1 == 0) {
			$("#reservedHotelName_3_1").hide();
			$("#reservedHotelNights_3_1").hide();
			$("#reservedHotelPrice_3_1").hide();
			$(".resultRow_3_1").hide();
		}
    });
	
	function updateReservedHotelDetails_3_1(){
		$(".resultRow_3_1").show();
	    $("#pieceOfNights_3_1").html($("<b></b>").text(nightCounter_3_1));
		hotelPrice_3_1 = nightCounter_3_1 * $("#hotelPrice_3_1").text();
		$("#reservedHotelName_3_1").show().html($("<b></b>").text($("#hotelName_3_1").text()));
		$("#reservedHotelNights_3_1").show().text($("#pieceOfNights_3_1").text() + " night(s)");
		$("#reservedHotelPrice_3_1").show().html("&pound;" + hotelPrice_3_1);
	}	
	
		
	//12. room update 		
	$("#increaseRoomNumber_3_2").click(function(){
		nightCounter_3_2 ++;
		updateReservedHotelDetails_3_2();
		countTotalPrice();
    });
	
	$("#decreaseRoomNumber_3_2").click(function(){
		if (nightCounter_3_2 > 0) {
			nightCounter_3_2 --;
			updateReservedHotelDetails_3_2();
			countTotalPrice();
		}
		if (nightCounter_3_2 == 0) {
			$("#reservedHotelName_3_2").hide();
			$("#reservedHotelNights_3_2").hide();
			$("#reservedHotelPrice_3_2").hide();
			$(".resultRow_3_2").hide();
		}
    });
	
	function updateReservedHotelDetails_3_2(){
		$(".resultRow_3_2").show();
	    $("#pieceOfNights_3_2").html($("<b></b>").text(nightCounter_3_2));
		hotelPrice_3_2 = nightCounter_3_2 * $("#hotelPrice_3_2").text();
		$("#reservedHotelName_3_2").show().html($("<b></b>").text($("#hotelName_3_2").text()));
		$("#reservedHotelNights_3_2").show().text($("#pieceOfNights_3_2").text() + " night(s)");
		$("#reservedHotelPrice_3_2").show().html("&pound;" + hotelPrice_3_2);
	}	

	//13. room update 		
	$("#increaseRoomNumber_3_3").click(function(){
		nightCounter_3_3 ++;
		updateReservedHotelDetails_3_3();
		countTotalPrice();
    });
	
	$("#decreaseRoomNumber_3_3").click(function(){
		if (nightCounter_3_3 > 0) {
			nightCounter_3_3 --;
			updateReservedHotelDetails_3_3();
			countTotalPrice();
		}
		if (nightCounter_3_3 == 0) {
			$("#reservedHotelName_3_3").hide();
			$("#reservedHotelNights_3_3").hide();
			$("#reservedHotelPrice_3_3").hide();
			$(".resultRow_3_3").hide();
		}
    });
	
	function updateReservedHotelDetails_3_3(){
		$(".resultRow_3_3").show();
	    $("#pieceOfNights_3_3").html($("<b></b>").text(nightCounter_3_3));
		hotelPrice_3_3 = nightCounter_3_3 * $("#hotelPrice_3_3").text();
		$("#reservedHotelName_3_3").show().html($("<b></b>").text($("#hotelName_3_3").text()));
		$("#reservedHotelNights_3_3").show().text($("#pieceOfNights_3_3").text() + " night(s)");
		$("#reservedHotelPrice_3_3").show().html("&pound;" + hotelPrice_3_3);
	}	

	//14. room update 		
	$("#increaseRoomNumber_3_4").click(function(){
		nightCounter_3_4 ++;
		updateReservedHotelDetails_3_4();
		countTotalPrice();
    });
	
	$("#decreaseRoomNumber_3_4").click(function(){
		if (nightCounter_3_4 > 0) {
			nightCounter_3_4 --;
			updateReservedHotelDetails_3_4();
			countTotalPrice();
		}
		if (nightCounter_3_4 == 0) {
			$("#reservedHotelName_3_4").hide();
			$("#reservedHotelNights_3_4").hide();
			$("#reservedHotelPrice_3_4").hide();
			$(".resultRow_3_4").hide();
		}
    });
	
	function updateReservedHotelDetails_3_4(){
		$(".resultRow_3_4").show();
	    $("#pieceOfNights_3_4").html($("<b></b>").text(nightCounter_3_4));
		hotelPrice_3_4 = nightCounter_3_4 * $("#hotelPrice_3_4").text();
		$("#reservedHotelName_3_4").show().html($("<b></b>").text($("#hotelName_3_4").text()));
		$("#reservedHotelNights_3_4").show().text($("#pieceOfNights_3_4").text() + " night(s)");
		$("#reservedHotelPrice_3_4").show().html("&pound;" + hotelPrice_3_4);
	}		
	
	
	//15. room update 		
	$("#increaseRoomNumber_3_5").click(function(){
		nightCounter_3_5 ++;
		updateReservedHotelDetails_3_5();
		countTotalPrice();
    });
	
	$("#decreaseRoomNumber_3_5").click(function(){
		if (nightCounter_3_5 > 0) {
			nightCounter_3_5 --;
			updateReservedHotelDetails_3_5();
			countTotalPrice();
		}
		if (nightCounter_3_5 == 0) {
			$("#reservedHotelName_3_5").hide();
			$("#reservedHotelNights_3_5").hide();
			$("#reservedHotelPrice_3_5").hide();
			$(".resultRow_3_5").hide();
		}
    });
	
	function updateReservedHotelDetails_3_5(){
		$(".resultRow_3_5").show();
	    $("#pieceOfNights_3_5").html($("<b></b>").text(nightCounter_3_5));
		hotelPrice_3_5 = nightCounter_3_5 * $("#hotelPrice_3_5").text();
		$("#reservedHotelName_3_5").show().html($("<b></b>").text($("#hotelName_3_5").text()));
		$("#reservedHotelNights_3_5").show().text($("#pieceOfNights_3_5").text() + " night(s)");
		$("#reservedHotelPrice_3_5").show().html("&pound;" + hotelPrice_3_5);
	}
	
	function countTotalPrice(){
		totalPrices = hotelPrice_1_1 + hotelPrice_1_2 + hotelPrice_1_3 + hotelPrice_1_4 + hotelPrice_1_5
					+ hotelPrice_2_1 + hotelPrice_2_2 + hotelPrice_2_3 + hotelPrice_2_4 + hotelPrice_2_5
					+ hotelPrice_3_1 + hotelPrice_3_2 + hotelPrice_3_3 + hotelPrice_3_4 + hotelPrice_3_5;
		$("#totalPrice").show().html("&pound;" + totalPrices);	
	}
});