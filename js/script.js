// https://gorigoricode.com/change-scroll-color/

$(function(){
  $(window).scroll(function() {
    var windowHeight = $(window).height();
    var section = $(this).scrollTop();
  
    // console.log($(this).scrollTop());
    console.log(section);
    // console.log(windowHeight);
  
    if(section + 96 >= windowHeight){
      $('header').addClass('sticky');
    }else {
      $('header').removeClass('sticky');
    }
  })
  
  $('.hamburger').click(function(){
    $('.gnav').toggleClass('active');
  })
  $('.nav-wrap li').click(function(){
    $('.gnav').removeClass('active');
  })
});
