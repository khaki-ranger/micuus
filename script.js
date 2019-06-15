'use strict';

$(function(){
  $('a[href^="#"]').click(function() {
    var speed = 800;
    var href= $(this).attr("href");
    var target = $(href == "#" || href == "" ? 'html' : href);
    var position = target.offset().top;
    $('body, html').animate({scrollTop:position}, speed, 'jswing');
    return false;
  });
  $('.asumi .asumi-navigation nav ul li').hover(function() {
    $('.parent', this).next().stop().slideToggle('fast');
  });
});
