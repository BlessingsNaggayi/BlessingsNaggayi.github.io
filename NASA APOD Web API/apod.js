$(document).ready(
   
    function () {

    $('#loader').hide();
    $(document).ajaxStart(function() { $("#loader").show(); })
               .ajaxStop(function() { $("#loader").hide(); });    

    $("#view_button").click(getPicture);

    });
                                               
    function getPicture () {

    $.ajax({

    url: "https://api.nasa.gov/planetary/apod",
    type: "GET",
    data: { api_key: "DEMO_KEY",
    date: $("#date").val() },
    dataType: "json",
    "success": showPicture,
    "error": noPicture
    });

    };


    function showPicture(data) {
    $(".titleAPOD").text(data.title).css("font-size", 24);
    $("#pic").attr("src", data.url);

    };
    
    function noPicture(error) {
    $(".titleAPOD").text("");
    alert(error.responseText);

    };