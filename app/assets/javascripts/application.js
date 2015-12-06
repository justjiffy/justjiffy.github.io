//= require jquery
//= require jquery_ujs
//= require turbolinks
//= require_tree .

//DOCUMENT.READY
$(function(){
    $('#welcome').typed({
        strings: ["Welcome :)", "You've landed at Juli's Online Portfolio"],
        typeSpeed: 30,
        backDelay: 500,
        contentType: 'html',
    });

    $('.reset').click(function(e) {
        e.preventDefault();
        scrollTo('#home');
        newTyped();
      });

    // SCROLL ANIMATION

      function scrollTo(location) {
        $('html, body').animate({scrollTop: $(location).offset().top}, 500, function() { console.log("Finished animating");});
      }

      $('#who-nav').on('click', function(e) {
        e.preventDefault();
        scrollTo('#who');
      });
      
      $('#what-nav').on('click', function(e) {
        e.preventDefault();
        scrollTo('#what');
      });

      $('#where-nav').on('click', function(e) {
        e.preventDefault();
        scrollTo('#where');
      });
    // scroll animation - end
}); // document.ready - end

function newTyped() {
  $('#welcome').hide();
  $('.typed-cursor').hide();
  $('#rewelcome').typed({
      strings: ['Back for more fun typing animations???', 'Check out typed.js to create your own.', 'More tricks coming soon... &lt;3&#47;  JULI'],
      typeSpeed: 30,
      backDelay: 500,
      contentType: 'html',
  });
 }