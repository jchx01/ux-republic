(function($) {
 $.fn.isOnScreen = function(topdelay,downdelay){
    topdelay = topdelay || 100;
    downdelay = downdelay || 100;
    var TopView = $(window).scrollTop();
    var BotView = TopView + $(window).height();
    var TopElement = this.offset().top + topdelay;
    var BotElement = TopElement + this.height();
    var onS = false;
    if( BotView > TopElement && TopView + downdelay < BotElement){
      onS = true
    }
    return onS;
  };
})(jQuery);
