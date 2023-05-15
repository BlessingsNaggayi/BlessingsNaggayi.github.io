
'use strict';

var win = true;

$(document).ready(function () {
    $("#maze .boundary").mouseover(changeRedColor);
    $("#start").click(resetAll);
    $("#maze").mouseleave(changeRedColor);
    $("#end").mouseover(endTheGame);


});

function changeRedColor() {
    if (!win) {
        $("#maze .boundary").addClass("youlose");
        $("#status").text("You Lose!");
        win = true;
    }
}
function resetAll() {
    win = false;
    $("#maze .boundary").removeClass("youlose");
    $("#status").text("Move through maze...");
}

function endTheGame() {
    if (!win) {
        win = true;
        $("#status").text("You Win! :]");
    }
}














































































// $(document).ready(() => {


//     $("div.boundary").mouseover(function () {

//         const originalColor = $(this).css("background-color");

//         $(this).css("background-color", "red");

//         $(this).data("new-color", $(this).css("background-color"));



//     });

//     $("#end").mouseenter(function () {

//         const newColor = $("div.boundary").data("new-color");

//         if (($("div.boundary").css("background-color")) !== newColor) {

//             $("#status").before('<h3 id="winAlert" ><strong>You Win!:]</strong></h3><br>');

//         }

//     });



//     $("#start").click(
//         function () {

//             $("div.boundary").css("background-color", originalColor);

//         });
// });