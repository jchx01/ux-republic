(function($){
  //click event on button to expand the menu
  $('#main-menu-toggle').on('click',function(e){
    e.preventDefault();
    $('body').toggleClass('menu-expanded');
  });
  
  /*Click event on main menu links - if it is an internal link (anchor), we trigger the goToLink goToAnchor
   *we add the elements array, the back to top button which has the same behaviour (smooth scroll)
   */ 
  var links = $('#ux-l-main-menu').find('a').add($('#ux-back-to-top'));
  $(links).on('click',function(e){
    $('body').removeClass('menu-expanded');
    if(isInternalAnchor(this)) e.preventDefault(); goToAnchor(this.hash);
  });
  
  // Click event on content area to close the menu when it's expanded
  $(document).delegate('.menu-expanded #ux-l-main-content','click',function(){
    $('body').toggleClass('menu-expanded');
  });
     
  function isInternalAnchor(link){
   var anchor = link.ash;
   return (anchor!=='' && link.href.indexOf('http')==-1);
  }
   
  //Smooth scroll to hash
  function goToAnchor(hash){
     $('html, body').stop().animate({
     'scrollTop': $(hash).offset().top
   }, 1000, 'swing', function () {});
  }
  
  //Set the axis to show the back to top button appears
  var offset = $('.ux-tagline').offset().top;
  
  //Scroll event - makes the scroll to top button appears
   $(window).on('scroll', function() {
      if ($(window).scrollTop() > offset) {
         $('#ux-back-to-top').removeClass('hide');
      }
      else{
       $('#ux-back-to-top').addClass('hide');
      }
   });
   
})(jQuery);