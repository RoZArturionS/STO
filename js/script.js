$(document).ready(function() {
 $('.header_burger').click(function(event) {
 	 $('.header_burger,.header_menu').toggleClass('active');
 	 $('body').toggleClass('lock');
 })
});

$(document).ready(function() {
   $('.block_title').click(function(event){
   	if($('.prays').hasClass('one')){
   		$('.block_title').not($(this)).removeClass('active');
   		$('.block_text').not($(this).next()).slideUp(300);
   	}
   	$(this).toggleClass('active').next().slideToggle(300);
   })
});

 $(document).ready(function(){
    $("#menu").on("click","a", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 1500);
    });
});





