$(function() {
	
	$(".hamburger").click(function(){
		$(this).toggleClass("is-active");

		$(".menu-list").slideToggle();
	});

	$(".filter.gray").click(function(){
		var $filter = $(this);
		var $i = $filter.find("span i");

		if($i.hasClass("fa-chevron-up")) {
			$i.removeClass("fa-chevron-up");
			$i.addClass("fa-chevron-down");				
		} else {
			$i.removeClass("fa-chevron-down");
			$i.addClass("fa-chevron-up");								
		}
		$filter.next().slideToggle();

	});


});
