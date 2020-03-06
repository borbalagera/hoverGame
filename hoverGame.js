var clicks =0;

function counterUp(){
    clicks++;
    document.getElementById("counter").innerHTML = clicks;
}

function reset(){
clicks=0;
clicks--;
document.getElementById("counter").innerHTML = clicks;
}

function caught(){
    alert("omg you did it");
    clicks=0;
    clicks--;
}
var w = window.innerWidth-100;
var h = window.innerHeight-100;

$(function(){
    $("button").on({
        mouseenter:function(){
            $(this).css({
                left:(Math.random()*w)+"px",
                top:(Math.random()*h)+"px",
            });
        }
    });
});
