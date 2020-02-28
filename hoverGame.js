function caught(){
    alert("omg you did it");
}
var w = window.innerWidth-100;
var h = window.innerHeight-100;
$(function(){
    $("button").on({
        mouseover:function(){
            $(this).css({
                left:(Math.random()*w)+"px",
                top:(Math.random()*h)+"px",
            });
        }
    });
});