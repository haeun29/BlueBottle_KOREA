var swiper = new Swiper("#pcBanner", {
    direction: "vertical",
    slidesPerView: 1,
    spaceBetween: 30,
    mousewheel: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });

  var swiper = new Swiper("#mBanner", {
      spaceBetween: 30,
      centeredSlides: true,
      autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    }
  });





AOS.init();


$(function(){

	$(".m-toggle-btn").click(function(){
		$("header nav").toggleClass("on");
	});


 

}); // $

