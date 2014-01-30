$(document).ready(function(){

    //When mouse rolls over
    $("#menu").mouseover(function(){
        $(this).stop().animate({opacity:'.9',height:'50px'},{queue:false, duration:600, easing: 'jswing'})
    });

    //When mouse is removed
    $("#menu").mouseout(function(){
        $(this).stop().animate({opacity:'0',height:'40px'},{queue:false, duration:600, easing: 'jswing'})
    });

});