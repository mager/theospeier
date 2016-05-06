$(document).ready(function() {
   $("#reach").click(function(){
        $("#form").fadeIn();
        $("#reach").fadeOut()
        $("body").css('background-image', 'none');
        $("#close").fadeIn();
    });
    $("#close").click(function(){
        $("#form").fadeOut();
        $("#reach").fadeIn();
        $("body").css('background-image', 'url(\'img/cover.jpg\')');
        $("#close").fadeOut();
    });


    $(document).keyup(function(e) {
        if (e.keyCode == 27) {
            $("#form").fadeOut();
            $("#main").fadeIn();
        }
    });
});
