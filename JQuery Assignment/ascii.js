"use sctrict";

$(document).ready(function () {

   var animationSelect = $('#animation-select');
    var textField= $('#animationDisplay');
    var fontSizeSelect =$('#size');
    var animation = $('#animation');
    var startButton =$('#play');
    var stopButton = $('#stopButton');
    var Speed = $('#speed');
    
   stopButton.prop("disabled", true);
   animation.change(function (event) { 
      stopAnimation();
      setAnimationType();
    });

   startButton.click(function (event) { 
      event.preventDefault();
      stopButton.prop("disabled", false);
      if ($Speed.prop("checked")){
          animateSlow(50);
      } else {
          animateSlow(250);
      }
    });
   fontSizeSelect.change(function (event) { 
      //e.preventDefault();
      setSize();
    });
   stopButton.click(function (event) { 
      event.preventDefault();
      stopAnimation();
      $stopButton.prop("disabled", true);
   });
   Speed.change(function (event) { 
      event.preventDefault();
      stopAnimation();
      $stopButton.prop("disabled", false);
      if ($(this).prop("checked")) {
          animateSlow(50);
      } else {
          animateSlow(250);
      }
    }); 

    var intervalID = 0;
    function stopAnimation() {
    clearInterval(intervalID);
    setAnimationType();
    }
    function setText(x, i=0) {
    textField.text(x[i % x.length]);
    }
    function animateSlow(x = 250){
  let frames = $textField.text();
  frames = frames.split("=====\n");
  i = 0;
  intervalID = setInterval(() => {
      setText(frames, i++);
  }, x);    
     }
    function setSize(){
    let fontSize = $("#size option:selected").val();
    textField.css("fontSize", fontSize);
   }
    function setAnimationType () {
    let textArea = textField;
    let animationType = $('#animation option:selected').text();
     textArea.text(ANIMATIONS[animationType]);
    }

  });

    

  // $animationSelect.on('change', function() {
  //   var selectedAnimation = $animationSelect.val();
  //   $animationInput.val(selectedAnimation);
  // });
  

  // $fontSizeSelect.on('change', function() {
  //   var selectedFontSize = $fontSizeSelect.val();
  //   $animation.css('font-size', selectedFontSize + 'px');
  // });

  // $stopButton.prop("disabled", true);

  // $startButton.click(function(){
    
  //   $stopButton.prop("disabled", false);

  //   if($('#speed').prop("checked")){
  //      animateSlow(50);
  //   }else{
  //       animateSlow(250);
  //   }

    




  

