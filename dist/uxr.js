// Avoid `console` errors in browsers that lack a console.
(function() {
    var method;
    var noop = function () {};
    var methods = [
        'assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error',
        'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log',
        'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd',
        'timeStamp', 'trace', 'warn'
    ];
    var length = methods.length;
    var console = (window.console = window.console || {});

    
    while (length--) {
        method = methods[length];

        // Only stub undefined methods.
        if (!console[method]) {
            console[method] = noop;
        }
    }
})();


(function($){
  $('#calendar').datepicker({
        inline: true,
        firstDay: 1,
        showOtherMonths: true,
        dayNamesMin: ['S', 'M', 'T', 'W', 'T', 'F', 'S']
  });
})(jQuery);
(function($){
var appeared = false;
$(document).ready(function() {
  $('.ux-data-item').hide();   
    $(window).on('scroll',function(){
      if($('#ux-data').isOnScreen()){
        if(!appeared){
          setDataAnimation();
          appeared= true;
        }
      }
    });
  });

  function setDataAnimation(){
    $('.ux-data-item').fadeIn(600);   
    $('.data-doughnuts').each(function(){
      if($(this).attr('id')){
        $(this).attr({'data-dimension':'130', 'data-fontsize':'30'});
        var id = '#' + $(this).attr('id'); 
         $(id).circliful();
      }
    });
  }

})(jQuery);
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