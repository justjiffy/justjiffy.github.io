// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require turbolinks
//= require_tree .

$(function(){
    $("h3#welcome").typed({
        strings: ["You've landed at Juli's Online Portfolio", "This site was created by Juli Emmel, <br> with help from Rails, jQuery, Bootstrap and typed.js", "Welcome and Enjoy!"],
        typeSpeed: 10,
        showCursor: false,
        backDelay: 2000,
        contentType: 'html'
    });

// SCROLL ANIMATION
  
  $('#who-nav').on('click', function() {
    $('html, body').animate({scrollTop: $('#who').offset().top}, 1500);
  });
  $('#what-nav').on('click', function() {
    $('html, body').animate({scrollTop: $('#what').offset().top}, 1500);
  });
  $('#where-nav').on('click', function() {
    $('html, body').animate({scrollTop: $('#where').offset().top}, 1500);
  });
// scroll animation - end

});

