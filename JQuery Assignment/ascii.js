"use sctrict";



$(document).ready(function () {

    var animationSelect = $('#animation-select');
    var animationInput= $('animationDisplay');
    var fontSizeSelect =$('#size');
    var animation = $('animation');
    var startButton =$('#play');
    var stopButton = $('stopButton');
    var frames=[];
    var currentFrame = 0;
    var animationInterval;

  $animationSelect.on('change', function() {
    var selectedAnimation = $animationSelect.val();
    $animationInput.val(selectedAnimation);
  });
  

  $fontSizeSelect.on('change', function() {
    var selectedFontSize = $fontSizeSelect.val();
    $animation.css('font-size', selectedFontSize + 'px');
  });

  $stopButton.prop("disabled", true);

  $startButton.click(function(){
    
    $stopButton.prop("disabled", false);

    if($('#speed').prop("checked")){
       animateSlow(50);
    }else{
        animateSlow(250);
    }

    



  }
  )


});