$(document).ready(function () {
  $("#loader").hide();
  $(document)
    .ajaxStart(function () {
      $("#loader").show();
    })
    .ajaxStop(function () {
      $("#loader").hide();
    });

  $("#view_button").click(getPicture);
});

function getPicture() {
  let api_key = "DEMO_KEY";
  let date = $("#date").val();
  const url =
    "https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&date=" + date;

  fetch(url)
    .then(function (response) {
      if (response.ok) {
        return response.json();
      } else {
        throw new Error("Error:" + response.status);
      }
    })

    .then(showPicture)

    .catch(noPicture);
}

function showPicture(data) {
  $(".titleAPOD").text(data.title).css("font-size", 24);
  $("#pic").attr("src", data.url);
}

function noPicture(error) {
  $(".titleAPOD").text("");
  alert(error.responseText);
}
