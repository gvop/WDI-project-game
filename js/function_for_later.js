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

