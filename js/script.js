$('.lightswitch').on('click', function() {
  $(this).addClass('hide').removeClass('show');
  $('.lightswitchoff').addClass('show').removeClass('hide');
  $('.justjiffy').addClass('hide').removeClass('show');
  $('.justjiffyoff').addClass('show').removeClass('hide');
  $('.nav').toggle();
  $('.navoff').toggle();
  $('body').addClass('black');
 });

$('.lightswitchoff').on('click', function() {
   console.log('clicked');
  $(this).removeClass('show').addClass('hide');
  $('.lightswitch').removeClass('hide').addClass('show');
  $('.justjiffyoff').removeClass('show').addClass('hide');
  $('.justjiffy').removeClass('hide').addClass('show');
  $('.nav').toggle();
  $('.navoff').toggle();
  $('body').removeClass('black');
 });

$(document).ready(resize);
$(window).resize(resize);
$(window).on("orientationchange", resize);

function resize() {
  $.each($('.set-height'), function() {
    $(this).height($(window).height());
  });
}