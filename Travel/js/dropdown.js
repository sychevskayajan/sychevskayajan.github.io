$(document).ready(function(){
	$(".dropdown_menu").mouseenter(function(){
		$(".drop_nav").slideToggle({
			animationSpeed: "5000"
		}); 
		});// hide, show, toggle, slideUp, slideDown, slideToggle, fadeIn, fadeOut, fadeToggle
	$(".dropdown_menu").mouseleave(function(){
		$(".drop_nav").slideToggle({
			animationSpeed: "5000"
		});
		});
});
$(document).ready(function(){
	$(".guide_menu").mouseenter(function(){
		$("that").hide();
		$(".big1").show();
		});// hide, show, toggle, slideUp, slideDown, slideToggle, fadeIn, fadeOut, fadeToggle
	$(".guide_menu").mouseleave(function(){
		$(".big1").hide();
		$("that").show();
		});
	$(".serv_menu").mouseenter(function(){
		$("that").hide();
		$(".big1, .big2").show();
		$(".big1").addClass("opacity");
		});// hide, show, toggle, slideUp, slideDown, slideToggle, fadeIn, fadeOut, fadeToggle
	$(".serv_menu").mouseleave(function(){
		$(".big1, .big2").hide();
		$("that").show();
		$(".big1").removeClass("opacity");
		});
	$(".about_menu").mouseenter(function(){
		$("that").hide();
		$(".big1, .big2, .big3").show();
		$(".big1, .big2").addClass("opacity");
		});// hide, show, toggle, slideUp, slideDown, slideToggle, fadeIn, fadeOut, fadeToggle
	$(".about_menu").mouseleave(function(){
		$(".big1, .big2, .big3").hide();
		$("that").show();
		$(".big1, .big2").removeClass("opacity");
		});
	$(".tour_menu").mouseenter(function(){
		$("that").hide();
		$(".big1, .big2, .big3, .big4").show();
		$(".big1, .big2, .big3").addClass("opacity");
		});// hide, show, toggle, slideUp, slideDown, slideToggle, fadeIn, fadeOut, fadeToggle
	$(".tour_menu").mouseleave(function(){
		$(".big1, .big2, .big3, .big4").hide();
		$("that").show();
		$(".big1, .big2, .big3").removeClass("opacity");
		});
	$(".howto_menu").mouseenter(function(){
		$("that").hide();
		$(".big1, .big2, .big3, .big4, .big5").show();
		$(".big1, .big2, .big3, .big4").addClass("opacity");
		});// hide, show, toggle, slideUp, slideDown, slideToggle, fadeIn, fadeOut, fadeToggle
	$(".howto_menu").mouseleave(function(){
		$(".big1, .big2, .big3, .big4, .big5").hide();
		$("that").show();
		$(".big1, .big2, .big3, .big4").removeClass("opacity");
		});
	$(".cont_menu").mouseenter(function(){
		$("that").hide();
		$(".big1, .big2, .big3, .big4, .big5, .big6").show();
		$(".big1, .big2, .big3, .big4, .big5").addClass("opacity");
		});// hide, show, toggle, slideUp, slideDown, slideToggle, fadeIn, fadeOut, fadeToggle
	$(".cont_menu").mouseleave(function(){
		$(".big1, .big2, .big3, .big4, .big5, .big6").hide();
		$("that").show();
		$(".big1, .big2, .big3, .big4, .big5").removeClass("opacity");
		});
});
$(document).ready(function(){
	$(".header_slider, .text_slider").mouseenter(function(){
		$(".slider_link").show(); 
		});// hide, show, toggle, slideUp, slideDown, slideToggle, fadeIn, fadeOut, fadeToggle
	$(".header_slider, .text_slider").mouseleave(function(){
		$(".slider_link").hide();
		});
});
	