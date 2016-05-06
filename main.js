$(document).ready(function() {
   $("#reach").click(function(){
        $("#form").fadeIn();
        $("#main").css('display', 'none');
        $("#close").fadeIn();
    });
    $("#close").click(function(){
        console.log('back');
        $("#form").fadeOut();
        $("#main").css('display', 'block');
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
