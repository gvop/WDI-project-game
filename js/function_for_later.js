guessWho.featuresCheck = function(value, choice){
  for(var i=0;i<this.charachter.length;i++){
    for(var j=0;j<this.charachter[i][value].length;j++){
      if(this.charachter[i][value][j] === choice){
        var name = this.charachter[i]["name"];
        document.getElementById(name).style.display = 'none';
      };
    };
  };
};


guessWho.featuresCheck("gender", "man");





window.onload = function(){

  var guessWho = {};

  guessWho.printBoard = function(){
    for(var i=0;i<window.characters.length;i++){
      console.log(window.characters[i].name)
    }
  }

  guessWho.printBoard();

}
  //Checker 
  guessWho.featuresCheck = function(value, choice){
    guessWho.dropDowns(value, choice);
  };

  guessWho.dropDowns = function(value, choice){
    for(var i=0;i<this.characters.length;i++){
      for(var j=0;j<this.characters[i][value].length;j++){
        if(this.characters[i][value][j] !== this.selectedCharacter[value][j]){
          var id = this.characters[i]["name"]
          $('#' + id).hide();
          }
        };
      }
    };
  guessWho.printBoard();
};

guessWho.setup = function(){
  for(var i=0;i<guessWho.characters.length;i++){
     guessWho.board.append("<li id='" + guessWho.characters[i].name + "' class='character'>" + guessWho.characters[i].name + "</li>");
  } 

  $("li").on("click", function(){
    var choice = this.id; 
    console.log(choice);
    var array = $("li");
    $("li").fadeOut("slow");
        setTimeout(function(){
              $("#" + choice).fadeIn("slow");
              $("#start-title").html("You have choosen " + choice +"!");
          }, 500);
    })
}


    var counter = 0;
    for(var i=0;i<this.characters.length;i++){
      for(var j=0;j<this.characters[i][value].length;j++){
        if(this.characters[i][value][j] !== this.selectedCharacter[value][j]){
          var id = this.characters[i]["name"]
          counter++;
          console.log(counter);
          $('#' + id).css("background","#ffce21");          
          $('#' + id).css("color", "#ffce21");
          }
        };
      }
    };
    guessWho.printBoard();
};


$.each(this.selectedCharacter[value], function(key, value){
  if( input === value){
    console.log("write")
    // $("#answer-overlay h2").html("Yes")
    // $("#answer-overlay").fadeIn(500).delay(1000).fadeOut(500);
    // $('#info-display').html("Yes!")
  } else {
    console.log("wrong")
    // $("#answer-overlay h2").html("No!")
    // $("#answer-overlay").fadeIn(500).delay(1000).fadeOut(500);
  }
})

// if(this.characters[i][value][j] === this.selectedCharacter[value][j]){
  var id = this.characters[i]["name"]
  console.log(value);
  console.log(id);
  $('#' + id).css("background","#ffce21");          
  $('#' + id).css("color", "#ffce21");
  $('#' + id).hide();
  // }ß

  var namesLeft;
  for(var i=0;i<guessWho.computerNames["namelist"].length;i++){
    if(guessWho.computerNames["namelist"] !== null){
      namesLeft++
    }
  } if(namesLeft === 1){
    alert("I'm going to guess")
  }else{
  
    var number = this.MathRandom(guessWho.computerQuestions[0][computerQuestions].length);
    var araylength = guessWho.computerQuestions[0][computerQuestions][number]

    console.log("the number of the array " + computerQuestions);

    console.log(guessWho.computerQuestions[0][computerQuestions][number])

    var secondNumber = this.MathRandom(araylength.length -1 ) + 1;

    console.log(araylength[0])
    console.log(araylength[secondNumber])

    $('#question-input').text("Features: " + araylength[0] +" Adjective: "+ araylength[secondNumber]);

    $('.confirm').on("click", function(){
      var confirm = this.value;
      if(confirm === -1){
        for(var i=0;i<guessWho.computerCharacters.length;i++){
          if(guessWho.computerCharacters[i][araylength[0]].indexOf(araylength[secondNumber]) === -1){
            console.log(guessWho.computerCharacters[i].name[0])
            var value   = guessWho.computerCharacters[i].name[0]
            var search  = guessWho.computerNames["namelist"]
            var index   = search.indexOf(value);
            guessWho.computerNames["namelist"][index] = null;
            console.log(guessWho.computerNames["namelist"]);
            console.log(computerQuestions)
            $("#answer-overlay").fadeOut()

            }
          }
        }else{
          for(var i=0;i<guessWho.computerCharacters.length;i++){
             if(guessWho.computerCharacters[i][araylength[0]].indexOf(araylength[secondNumber]) !== -1){
              console.log(guessWho.computerCharacters[i].name[0])
              var value   = guessWho.computerCharacters[i].name[0]
              var search  = guessWho.computerNames["namelist"]
              var index   = search.indexOf(value);
              guessWho.computerNames["namelist"][index] = null;
              console.log(guessWho.computerNames["namelist"])
              console.log(computerQuestions)
              $("#answer-overlay").fadeOut()

         }
      }
    }
  });


list.computerRounds = [{
  1            :   [      ["gender","man", "woman"],
                          ["ears","small","normal", "big"], 
                          ["chin","dimple", "pointy", "round"]],
  2            :   [      ['nose',"small","normal", "big"]
                          ['eyes',"brown","blue","bushy", "neat eyebrows", "normal eyebrows"]],
  3            :   [      ["head","black","blonde","white","ginger","short", "long", "bold"]
                          ["mouth","black","blonde","white","ginger","short", "long", "bold"]],
  4            :   [],
  5            :   [],
  6            :   [],
  'rest'       :   [],
  'used'       :   []
}]

// for(var i=0;i<this.characters.length;i++){
  
//   if(this.characters[i][value].indexOf(choice) !== -1){
//       var id = this.characters[i]["name"]
//       guessWho.hidePictures(id)
//     }
//   }

// for(var i=0;i<this.characters.length;i++){
//    if(this.characters[i][value].indexOf(choice) === -1){
//     var id = this.characters[i]["name"]
//     guessWho.hidePictures(id)

