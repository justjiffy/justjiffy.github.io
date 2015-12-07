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

    // FADE TRANSITION
   $(".animsition").animsition({
      inClass: 'fade-in',
      outClass: 'fade-out',
      inDuration: 1500,
      outDuration: 800,
      linkElement: '.animsition-link',
      // e.g. linkElement: 'a:not([target="_blank"]):not([href^=#])'
      loading: true,
      loadingParentElement: 'body', //animsition wrapper element
      loadingClass: 'animsition-loading',
      loadingInner: '', // e.g '<img src="loading.svg" />'
      timeout: false,
      timeoutCountdown: 5000,
      onLoadEvent: true,
      browser: [ 'animation-duration', '-webkit-animation-duration'],
      // "browser" option allows you to disable the "animsition" in case the css property in the array is not supported by your browser.
      // The default setting is to disable the "animsition" in a browser that does not support "animation-duration".
      overlay : false,
      overlayClass : 'animsition-overlay-slide',
      overlayParentElement : 'body',
      transition: function(url){ window.location.href = url; }
    }); // end fade transition
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