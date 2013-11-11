$(document).ready(function(){
	var indicator = $("<div class='touch-indicator'></div>");
	var touch;

	$(".touch-area").on("touchstart ", function(){
		$(this).addClass("touching");
	}).on("touchend", function(){
		$(this).removeClass("touching");
	});

	$("body").on("touchstart", function(e){
		touch = e.touches[0];
		indicator.appendTo(document.body).css({
			"top": touch.pageY-8+"px",
			"left": touch.pageX-8+"px"
		});
	}).on('mousemove', function(e){
		touch = e.touches[0];
		indicator.css({
			"top": touch.pageY-8+"px",
			"left": touch.pageX-8+"px"
		});
	}).on('touchend', function(){
		indicator.remove();
	});
});