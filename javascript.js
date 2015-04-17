$(document).ready(function(){
	var ventana;
	ventana = $(window).height();
	$('#myCarousel').css('height', ventana);
	$('.carousel-inner .item img').css({height: ventana, width: '100%'});
});
