$(document).ready(function() {
   $("#reach").click(function(){
        $("#form").fadeIn();
        $("#main").css('display', 'none');
        $("body").css('background-image', 'none');
        $("#close").fadeIn();
    });
    $("#close").click(function(){
        console.log('back');
        $("#form").fadeOut();
        $("#main").css('display', 'block');
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
