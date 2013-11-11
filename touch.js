$(document).ready(function(){
	var indicator = $("<div class='touch-indicator'></div>");

	$(".touch-area").on("touchstart mousedown", function(){
		$(this).addClass("touching");
	}).on("touchend mouseup mouseout", function(){
		$(this).removeClass("touching");
	});

	$("body").on("touchstart mousedown", function(e){
		indicator.appendTo(document.body).css({
			"top": e.pageY-8+"px",
			"left": e.pageX-8+"px"
		});
	}).on('mousemove', function(e){
		indicator.css({
			"top": e.pageY-8+"px",
			"left": e.pageX-8+"px"
		});
	}).on('touchend mouseup', function(){
		indicator.remove();
	});
});