$(function(){
  $(window).scroll(function() {
    var eyecatchHeitgh = $('#eyecatch').height();
    var section = $(this).scrollTop();
    // var about = $('#about').offset().top;

    // console.log(eyecatchHeitgh);
    // console.log(section);


    if(section >= eyecatchHeitgh){
      $('header').addClass('active');
    }else {
      $('header').removeClass('active');
    }
  })


  $('.hamburger').click(function(){
    $('.gnav').toggleClass('active');
  })
  $('.nav-wrap li').click(function(){
    $('.gnav').removeClass('active');
  })
});