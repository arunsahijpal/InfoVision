$(document).ready(function(){
  $('.hamburger').click(function(){
    $('.navbar').toggle();
  });

  $(window).resize(function(){
    var x = $(window).width();
    if(x > 992){
      $('.navbar').css('display','flex');
    }
    else{
      $('.navbar').css('display','none');
    }
  })
});