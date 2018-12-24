
(function ($) {

// nav fixed 
$("document").ready(function(){
	 $(window).scroll(function(){
	  if($(window).scrollTop()>200){
		$('#header').addClass('fixed-top');  
	  }
	  else{
		$('#header').removeClass('fixed-top');  
	  }
	});
	});



// parallax image
$('document').ready(function(){
$(window).scroll(function(e) {
  parallax();
})


function parallax() {
  var scroll = $(window).scrollTop();
  var screenHeight = $(window).height();

  $('.parallax').each(function() {
    var offset = $(this).offset().top;
    var distanceFromBottom = offset - scroll - screenHeight
    
    if (offset > screenHeight && offset) {
      $(this).css('background-position', 'center ' + (( distanceFromBottom  ) * 0.2) +'px');
    } else {
      $(this).css('background-position', 'center ' + (( -scroll ) * 0.2) + 'px');
    }
  })
}
	});




/* nav scrolling */
/*$(document).ready(function() {

  $('.nav-link').on('click', function (e) {
    e.preventDefault(); 
    var id = $(e.currentTarget).attr('href'); 
    var $dest = $(id); 
    $('html,body').animate({
      scrollTop: ($dest.offset().top)
    }, 1000);
  });

});*/


})(jQuery)





