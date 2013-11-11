$(document).ready(function(){
	var indicator = $("<div class='touch-indicator'></div>");
	var indicatorInstance;

	$(".touch-area").on("touchstart", function(){
		$(this).addClass("touching");
	}).on("touchend", function(){
		$(this).removeClass("touching");
	});

	$("body").on("touchstart", function(e){
		e.preventDefault();
		var touch = e.originalEvent.touches[0] || e.originalEvent.changedTouches[0];
		indicatorInstance = indicator.appendTo(document.body).css({
			"top": touch.pageY-8+"px",
			"left": touch.pageX-8+"px"
		});

	}).on('touchmove', function(e){
		e.preventDefault();
		var touch = e.originalEvent.touches[0] || e.originalEvent.changedTouches[0];
		indicatorInstance.css({
			"top": touch.pageY-8+"px",
			"left": touch.pageX-8+"px"
		});
	}).on('touchend', function(e){
		e.preventDefault();
		indicatorInstance.remove();
	});
});