$("#button1").on("click", function(){
    $(".hideMe").slideToggle();
});

$('#button2').on("click", function(){
    $(".cssChange").css("background-color" , "red");
});

$('#button3').on("click", function(){
    $(".appendMe").append("I got appended. Nice!");
});
