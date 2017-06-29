$(function(){
	var carouselList = $("#carousel ul.photo");
	var carouselMenu = $("ul.carousel-pagination");

	carouselList.find("li").each(function() {
		carouselMenu.append("<li></li>");
	});

	
	var dot = $(".carousel-pagination li");
	dot.first().addClass("active");

	dot.click(function() {
		/*console.log("1");*/
		target = $(this).index();
		/*console.log(target);*/
		moveSlide(target);
	});

	function moveSlide(target) {
		carouselList.stop().animate({"left": -600 * target});
		dot.removeClass("active").eq(target).addClass("active");
	}

	var carousel = $(".carousel-container");
	carousel.find(".carousel-control-prev").click(function() {
		/*console.log("test");*/
		target = dot.siblings(".active").index();
		target == 0 ? target = dot.length - 1 : target -= 1;
		moveSlide(target);
	});

	carousel.find(".carousel-control-next").click(function() {
		/*console.log("test");*/
		target = dot.siblings(".active").index();
		target == dot.length - 1 ? target = 0 : target += 1;
		moveSlide(target);
	});

	setInterval(carouselMove, 3000);
	function carouselMove() {
		carouselList.animate({'marginLeft':-600}, 500, moveFirstSlide);
	}

	function moveFirstSlide(target) {
		var firstItem = carouselList.find("li:first");
		var lastItem = carouselList.find("li:last");
		lastItem.after(firstItem);
		carouselList.css({marginLeft:0});
		target = dot.siblings(".active").index();
		target == dot.length - 1 ? target = 0 : target += 1;
		dot.removeClass("active").eq(target).addClass("active");
	}
	
})