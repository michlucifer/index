$(document).ready(function() {
	$('#toweb').click(function(){
		$('html,body').animate({scrollTop:$('#web').offset().top},800);
	});
	$('#tojava').click(function(){
		$('html,body').animate({scrollTop:$('#java').offset().top},800);
	});
	$('#tocplus').click(function(){
		$('html,body').animate({scrollTop:$('#cplus').offset().top},800);
	});
	$('#toc').click(function(){
		$('html,body').animate({scrollTop:$('#c').offset().top},800);
	});
})