

const btn = document.getElementById("btn");
//btn.addEventListener("click",showAlert);

function showAlert(){

    alert("Hello, World!");
   
}

let textbox = document.getElementById("textArea");

// btn.addEventListener("click",editTextArea);

// function editTextArea(){

//     textbox.style.fontSize = "24pt";

// }


const checkbox = document.getElementById("checking");

checkbox.addEventListener("change",editTextAreaAgain);

function editTextAreaAgain(){

//   alert("checkbox checked");

  if(checkbox.checked){
  
    textbox.style.fontWeight ="bold";

    document.body.style.backgroundImage= "url('http://www.cs.washington.edu/education/courses/190m/CurrentQtr/labs/6/hundred-dollar-bill.jpg')";
    
     
  }else{

    textbox.style.fontWeight ="normal";
    textbox.style.color ="green";
    textbox.style.textDecoration="underline";

  }

}

let size = parseInt(getComputedStyle(textbox).fontSize);

btn.addEventListener("click",editTextArea);

function editTextArea(){
    size+=2;
    textbox.style.fontSize = size + "pt";
    
}

let intervalId;

btn.addEventListener("mousedown",function(){

    intervalId = setInterval(editTextArea, 500);

});

btn.addEventListener("mouseout",function(){
  clearInterval(intervalId);
});


const button = document.getElementById("Mkvch");

button.addEventListener("click",function(){

    const words =textbox.value.split(" ");

    const MalkovitchWords = [];

    for(let i=0;i<words.length;i++){

        const word = words[i];

        if(word.length >=5){

            MalkovitchWords.push("Malkovich");

        }else{
            MalkovitchWords.push(word);
        }

    }

    return MalkovitchWords;

});

    const mybutton = document.getElementById("igAt");

    mybutton.addEventListener("click",function(){

        const words = textbox.value.split(" ");

        const pigLatinWords = [];

        let tester = /^[aeiou]/i;

        for(let i =0;i<words.length;i++){

            const word = words[i];

            if(tester.test(word)){

                pigLatinWords.push(word + "ay");
            }else{ 

                const consonantIndex = word.search(/^[bcdfghjklmnpqrstvwxyz]/i);
             
                const pigLatinWord = word.slice(consonantIndex) + word.slice(0,consonantIndex) + "ay";
              
                pigLatinWords.push(pigLatinWord);

            }

            
   
        }

        return(pigLatinWords);

    });


    //Using filter

    // button.addEventListener("click", function() {
    //     const words = input.value.split(" ");
      
    //     const malkovitchWords = words.filter(function(word) {
    //       if (word.length >= 5) {
    //         return "Malkovich";
    //       } else {
    //         return word;
    //       }
    //     });
      
    //     const malkovitchText = malkovitchWords.join(" ");
    //     input.value = malkovitchText;
    //   });
      
      
      
      
      
    
    
    
    
    





      




























