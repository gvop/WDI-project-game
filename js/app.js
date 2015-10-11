window.onload = function(){

  //Object
  var guessWho = {
    characters            :   list.characters,
    overlay               :   $("#overlay"),
    board                 :   $("#board"),
    playerChoose          :   "",
    selectedCharacter     :   {},
    startButton           :   $("#start"),
    askButton             :   $("#ask"),
    askQuestion           :   function(){
                              this.features   =   $("input:radio[name='features']:checked").val();
                              this.adjective  =   $("input:radio[name='adjective']:checked").val();

                              guessWho.featuresCheck(this.features, this.adjective);
        }
  };

  //Function to let player choose computer character
  guessWho.setup = (function(){
    for(var i=0;i<guessWho.characters.length;i++){
       $("#overlay .container").append(
               " <li style='background: url(pictures/" 
                 + 
               guessWho.characters[i].name 
               + 
               ".png); background-size: cover;background-position: 50% 46%;' id='" 
               + 
               guessWho.characters[i].name 
               + 
               "'class='character_list'>" 
               + 
               "</li>")
           }

    $("li").on("click", function(){
      var choice = this.id; 
      guessWho.playerChoose = this.id;  
      console.log(guessWho.playerChoose);
      var array = $("li");

      $(".character_list").fadeOut("slow");

          setTimeout(function(){
                $("#" + choice).fadeIn("slow");
                $("#start-title").html("You have choosen " + choice +"!");
                $("#start").fadeIn("slow");
            }, 500);

      })
  })();


  //Call function on "ask question"
  guessWho.askButton.on("click", guessWho.askQuestion)
  guessWho.startButton.on("click", function(){
      guessWho.overlay.fadeOut(1000).remove();
      $("body").hide().delay(200).fadeIn(2000);
      var name = guessWho.playerChoose;
      $("#players_choice").html("<li id='" + name + "' class='character_list side_pic'>" + name + "</li>")   //Get picture in the corner up
  })


  //Get the board show
  guessWho.printBoard = function(){

    var selected = this.characters[Math.floor(Math.random()*24)]
    this.selectedCharacter = selected

    console.log(this.selectedCharacter["name"][0]); //TO SEE DURING TEST WHOM THE PERSON IS

    for(var i=0;i<this.characters.length;i++){
       this.board.append(
        " <li style='background: url(pictures/" 
          + 
        this.characters[i].name 
        + 
        ".png); background-size: cover;background-position: 50% 46%;' id='" 
        + 
        this.characters[i].name 
        + 
        "'class='character'>" 
        + 
        "</li>")
    }

      $(".character").on("click", function(){
      if(this.id ===guessWho.selectedCharacter["name"][0]){
        console.log("Winner!");
      }else{
        guessWho.numberOfGuesses++;
        console.log("Not the right person!");
      };
    });
  };


  //Checker 
  guessWho.featuresCheck = function(value, choice){
    guessWho.dropDowns(value, choice);
  };


 //Makes the right characters disapear 
  guessWho.dropDowns = function(value, choice){
    var input = choice
    $.each(this.selectedCharacter[value], function(key, value){
      if( input === value){
        $("#answer-overlay h2").html("Yes")
        $("#answer-overlay").fadeIn(500).delay(1000).fadeOut(500);
        // $('#info-display').html("Yes!")
      } else {
        $("#answer-overlay h2").html("No!")
        $("#answer-overlay").fadeIn(500).delay(1000).fadeOut(500);
      }
    })

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






