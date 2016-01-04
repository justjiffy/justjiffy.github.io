$(document).ready(function(){
  $('.lightswitch').on('click', function() {
    console.log('clicked');
    $(this).addClass('hide').removeClass('show');
    $('.lightswitchoff').addClass('show').removeClass('hide');
    $('.justjiffy').addClass('hide').removeClass('show');
    $('.justjiffyoff').addClass('show').removeClass('hide');
    $('.nav').addClass('hide').removeClass('show');
    $('.navoff').addClass('show').removeClass('hide');
    $('body').addClass('black');
   });

  $('.lightswitchoff').on('click', function() {
     console.log('clicked');
    $(this).removeClass('show').addClass('hide');
    $('.lightswitch').removeClass('hide').addClass('show');
    $('.justjiffyoff').removeClass('show').addClass('hide');
    $('.justjiffy').removeClass('hide').addClass('show');
    $('.navoff').removeClass('show').addClass('hide');
    $('.nav').removeClass('hide').addClass('show');
    $('body').removeClass('black');
   });
});