$(document).ready(function(){
    $("#secondHotels").hide();
    $("#thirdHotels").hide();

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