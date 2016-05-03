$(document).ready(function() {
   $("#reach") .click (function(){
        $("#form").fadeIn();
    });
   $("#playing") .click (function(){
        $(".feature").hide();
        $("#signature").hide();
        $("#playPage").fadeIn();
    });
   $("#follow") .click (function(){
        $(".feature").hide();
        $("#signature").hide();
        $("#playPage").fadeIn();
        $("#followPage").fadeIn();
    });
    $(".close") .click (function(){
        $(".page").hide();
        $("#signature").fadeIn();
        $(".feature").fadeIn();
    });
    $("#service") .click (function(){
        $(".feature").hide();
        $("#signature").hide();
        $("#servicesPage").fadeIn();
        $("#followPage").fadeIn();
    });

    $(document).keyup(function(e) {
        if (e.keyCode == 27) {
            console.log('hello');
        }
    });

});
