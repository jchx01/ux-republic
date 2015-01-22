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