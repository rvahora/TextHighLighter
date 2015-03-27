/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


// Plugin definition.
$.fn.hilight = function( options ) {
 
    // Iterate and reformat each matched element.
    return this.each(function() {
        // This is the easiest way to have default options.
        var settings = $.extend({
            // These are the defaults.
            color: "red",
            backgroundColor: "white"
        }, options );
        
        var elem = $( this );
        var markup = elem.html();
 
        markup = $.fn.hilight.format( markup, settings );
 
        elem.html( markup );
 
    });
 
};
 
// Define our format function.
$.fn.hilight.format = function( txt, settings ) {
    return $("<strong>" + txt + "</strong>").css({'color':settings.color,'background':settings.backgroundColor});
};