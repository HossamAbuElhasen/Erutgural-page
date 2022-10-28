$(document).ready(function(){

    $(".gear-check").click(function()
    {

        $(".color-option").fadeToggle();

    });



  $(window).load(function(){

    $(".load,.load .ani").fadeOut(4,function(){
$("body").css("overflow","auto");
$(this).remove();

    });
  })

});