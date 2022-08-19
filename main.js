var swiper = new Swiper(".mySwiper", {
    direction: "vertical",
    slidesPerView: 1,
    spaceBetween: 30,
    mousewheel: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });

  var swiper = new Swiper(".mySwiper2", {
    slidesPerView: 3,
    spaceBetween: 30,
    freeMode: true,

  });


AOS.init();


// window.onload = function() {
//   var bannerLeft=0;
//   var first=1;
//   var last;
//   var imgCnt=0;
//   var $img = $(".banner_wraper img");
//   var $first;
//   var $last;

//   $img.each(function(){  
//       $(this).css("left",bannerLeft);
//       bannerLeft += $(this).width()+30;
//       $(this).attr("id", "banner"+(++imgCnt));  
//   });

  
//   if( imgCnt > 0){            

//       last = imgCnt;
//       setInterval(function() {
//           $img.each(function(){
//               $(this).css("left", $(this).position().left-1); 
//           });
//           $first = $("#banner"+first);
//           $last = $("#banner"+last);
//           if($first.position().left < -800) {  
//               $first.css("left", $last.position().left + $last.width()+30 );
//               first++;
//               last++;
//               if(last > imgCnt) { last=1; }   
//               if(first > imgCnt) { first=1; }
//           }
//       },10);   
// }
// };