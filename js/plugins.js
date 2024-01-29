$(document).ready(function(){
   
    //Nice Scroll
    $("html").niceScroll();
   
    $('.carousel').delay().carousel({
      interval:6000
   });
    
    //Show Color Option Div When Click On The Gear
    $(".gear-check").click(function()
      {
         $(".color-option").fadeToggle();
      });
    
    //Change Theme Color On Click
    var colorLi=$(".color-option ul li");
    
    colorLi
    .eq(0).css("backgroundColor","#E41B17").end()
    .eq(1).css("backgroundColor","#E426D5").end()
    .eq(2).css("backgroundColor","#009AFF").end()
    .eq(3).css("backgroundColor","#FFD500");
    
    colorLi.click(function()
      {
         $("link[href*='theme']").attr("href", $(this).attr("data-value") );
      });
    
    //Scroll Top Buttom
    
    //Cashing The Scroll Top Element
    var scrollButton = $("#scroll-top");
    $(window).scroll(function()
      {
         if( $(this).scrollTop() >= 700 )
         {
            scrollButton.fadeIn(1000);
         }
         else
         {
            scrollButton.fadeOut(1000);
         }
      });
      //Click On Button To Scroll Top
      scrollButton.click(function()
      {
         $("html,body").animate({scrollTop : 0},600);
      });
});

//Loading Screen
$(window).on('load',function()
{
   //Loading Elements
   $(".loading-overlay .spinner").fadeOut(3000,
      function()
      {
         $("body").css("overflow","auto");
         
         $(this).parent().fadeOut(1000,
         function()
         {
            $(this).remove();  
         });
      });
});














