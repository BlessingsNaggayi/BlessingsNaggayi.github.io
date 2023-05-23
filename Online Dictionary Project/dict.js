$(document).ready(() => {
  $("#loaderImg").hide();
  $(document).ajaxStart(() => {
    $("#loaderImg").show();
  });
  $(document).ajaxStop(() => {
    $("#loaderImg").hide();
  });
  $("#lookupButton").click(lookUpWord);

  function lookUpWord() {
    const word = String($("#word").val()).trim();

    if (word == "") return;

    $.ajax("http://localhost:3000", {
      type: "GET",
      dataType: "json",
      data: { keyword: word },
    })
      .done(display)
      .fail(noWordFound);
  }
  function display(data) {
    const textbox = $("#definitions");
    textbox.empty();
    if (data.length === 0) {
      alert("No search result found!!");
    } else {
      let list = `<ol id="result"></ol>`;
      $("#definitions").append(list);
      data.forEach(function (element) {
        $("#result").append(
          `<li>(${element.wordtype}) : ${element.definition}</li>`
        );
      });
    }
  }

  function noWordFound(error) {
    console.log(error);
    // alert('Error occured');
  }
});
