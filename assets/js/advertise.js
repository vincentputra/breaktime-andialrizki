$("#view-rules").css('background', 'transparent');
$("#view-step").click(function(){
	if($("#view-step").html() == 'VIEW STEP'){
		$("#step-content").show('fade');
		$("#view-step").html('HIDE STEP');
	} else {
		$("#step-content").hide('fade');
		$("#view-step").html('VIEW STEP');
		window.scrollTo(500, 760);
	}
	
});

$("#view-rules").click(function(){
	if($("#view-rules").html() == 'VIEW RULES'){
		$("#rules-content").show('fade');
		$("#view-rules").html('HIDE RULES');
	} else {
		$("#rules-content").hide('fade');
		$("#view-rules").html('VIEW RULES');
		window.scrollTo(500, 960);
	}
	
})