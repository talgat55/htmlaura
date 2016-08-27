
// Revolution Slider Init 

(function($){
    "use strict";
    
    $(document).ready(function(){
      
        
        $(".fullscreen-revolution").revolution({
            delay: 15000,
            startwidth: 1170,
            startheight: 500,
            hideThumbs: 10,
            fullWidth: "off",
			spinner: "off",
            fullScreen: "on",
            fullScreenOffsetContainer: "",
            navigationStyle: "preview4",
        });
        
        
    });
})(jQuery);
