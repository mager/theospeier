$(document).ready(function() {
   $("#reach").click(function(){
        $("#form").fadeIn();
        $("#main").fadeOut();
        $("#close").fadeIn();
    });
    $("#close").click(function(){
        console.log('back');
        $("#form").fadeOut();
        $("#main").fadeIn();
        $("#close").fadeOut();
    });


    $(document).keyup(function(e) {
        if (e.keyCode == 27) {
            $("#form").fadeOut();
            $("#main").fadeIn();
            console.log('in');
        }
    });
});
