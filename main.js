$(document).ready(function() {
   $("#reach").click (function(){
        $("#form").fadeIn();
    });
    $("#close").click (function(){
        $("#form").fadeOut();
    });


    $(document).keyup(function(e) {
        if (e.keyCode == 27) {
            console.log('in');
            $('#form').hide();
        }
    });
});
