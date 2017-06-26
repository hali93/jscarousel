$(function(){
	var carouselList = $("#carousel ul");
	
	/*setInterval(changeSlide, 3000);*/
	function changeSlide() {
		carouselList.animate({'marginLeft':-600}, 500, moveFirstSlide);
	}
	function moveFirstSlide() {
		var firstItem = carouselList.find("li:first");
		var lastItem = carouselList.find("li:last");
		lastItem.after(firstItem);
		carouselList.css({marginLeft:0});
	}
	
    $(".carousel-control-next").click(changeSlide);
    $(".carousel-control-prev").click(changeSlideBack);
    
    function changeSlideBack() {
    	carouselList.animate({'marginRight':-600}, 500, moveLastSlide);
    }
    function moveLastSlide() {
    	var firstItem = carouselList.find("li:first");
		var lastItem = carouselList.find("li:last");
    	firstItem.after(lastItem);
    	carouselList.css({marginRight:0});
    }

    var activeSlide = $()
});
