document.addEventListener("DOMContentLoaded", function() {
// 
// // zmiana tekstu w header
//
// var prev;
//
//   $('#porn').hover(function(){
//   prev = $(this).text();
//       $(this).text("porno");
//   },
//   function(){
//       $(this).text(prev)
//   });

// menu opuszczane

var menu = $('.column_left').find("#menu");
var nav = $('.column_left').find("nav");
var toggle = $('.column_left').find("#toggle");

toggle.on('click',function(){
  menu.slideToggle(function () {
    menu.css("visibility", "visible");
  });

});

// animacja x

  toggle.on('mouseover',function() {
    toggle.find(".bar1").addClass("change_bar1");
    toggle.find(".bar2").addClass("change_bar2");
    toggle.find(".bar3").addClass("change_bar3");
    })

  toggle.on('mouseout',function() {
    toggle.find(".bar1").removeClass("change_bar1");
    toggle.find(".bar2").removeClass("change_bar2");
    toggle.find(".bar3").removeClass("change_bar3");
    });



    // ===== Scroll to Top ====
    $(window).scroll(function() {
        if ($(this).scrollTop() >= 50) {        // If page is scrolled more than 50px
            $('.return-to-top').fadeIn(200);    // Fade in the arrow
        } else {
            $('.return-to-top').fadeOut(200);   // Else fade out the arrow
        }
    });
    $('.return-to-top').click(function() {      // When arrow is clicked
        $('body,html').animate({
            scrollTop : 0                       // Scroll to top of body
        }, 500);
    });


// galeria


// var ulSlider = $(".slider");
// var images =['./img/46.jpg','./img/45.jpg','./img/44.jpg','./img/43.jpg','./img/42.jpg','./img/41.jpg','./img/40.jpg','./img/39.jpg','./img/38.jpg','./img/37.jpg','./img/36.jpg','./img/35.jpg','./img/34.jpg','./img/33.jpg','./img/32.jpg','./img/31.jpg','./img/30.jpg','./img/29.jpg','./img/28.jpg','./img/27.jpg',
// './img/26.jpg','./img/25.jpg','./img/24.jpg','./img/23.jpg','./img/22.jpg','./img/21.jpg','./img/20.jpg','./img/19.jpg','./img/18.jpg','./img/17.jpg','./img/16.jpg','./img/15.jpg','./img/14.jpg','./img/13.jpg','./img/12.jpg','./img/11.jpg','./img/10.jpg','./img/09.jpg','./img/08.jpg','./img/07.jpg','./img/06.jpg','./img/05.jpg','./img/04.jpg','./img/03.jpg','./img/02.jpg','./img/01.jpg'];
//
// $.each(images, function(){
//     $('<li><img src="' + this + '" /></li>').appendTo(ulSlider);
// });


// lightbox

// var liSlider = $(".slider").find("li");
// var lightbox = $("#lightbox");
// var closeButton = $("#close");
// var nextButton = $("#next");
// var prevButton = $("#prev");
// var section = $("section");
// console.log(section);
//
// liSlider.on("click", function(event){
//   var imgUrl = $(event.target).attr('src')
//   console.log(imgUrl);
//   // lightbox.toggle(function(){
//     lightbox.css("visibility", "visible");
//     lightbox.css("background-image","url("+imgUrl+")");
//     lightbox.css({'background-size': '100% 100%'});
//     section.addClass('opacity');
//
//
//     // });
//     closeButton.on("click", function() {
//       lightbox.css("visibility", "hidden");
//       section.removeClass('opacity');
//
//     })
//
// });

// fadej zamiast slajdera
// wyżulone linijki kodu od Grażyny
// mucios gracias

// var counter = 0;
// var image = $("#lightbox");
//
// image.css("background-image","url("+images[counter]+")");
//
// setInterval(function(){
//   counter++
// image.fadeOut(200, function(){
//   image.css("background-image","url("+images[counter]+")");
//   image.fadeIn(800);
// });
// if(counter==images.length){
//   counter = 0;
// }
// },4000)



$('.drag').draggable();


});
