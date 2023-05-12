
$(document).ready(() => {


    $("div.boundary").mouseover(function () {

        const originalColor = $(this).css("background-color");

        $(this).css("background-color", "red");

        $(this).data("new-color", $(this).css("background-color"));



    });

    $("#end").mouseenter(function () {

        const newColor = $("div.boundary").data("new-color");

        if (($("div.boundary").css("background-color")) !== newColor) {

            $("#status").before('<h3 id="winAlert" ><strong>You Win!:]</strong></h3><br>');

        }

    });



    $("#start").click(
        function () {

            $("div.boundary").css("background-color", originalColor);

        });
});