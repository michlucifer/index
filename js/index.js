
$(document).ready(function() {
	$('#goto-course').click(function(){
		$('html,body').animate({scrollTop:$('#degree').offset().top},800);
	});
})