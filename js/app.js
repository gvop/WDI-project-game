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
       $("#overlay .container").append("<li id='" + guessWho.characters[i].name + "' class='character_list'>" + guessWho.characters[i].name + "</li>")};
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
      guessWho.overlay.fadeOut("slow").remove();
      $("#players_choice").html(guessWho.playerChoose)
  })


  //Get the board show
  guessWho.printBoard = function(){

    console.log(this)

    var selected = this.characters[Math.floor(Math.random()*24)]
    this.selectedCharacter = selected

    console.log(this.selectedCharacter["name"][0]); //TO SEE DURING TEST WHOM THE PERSON IS

    for(var i=0;i<this.characters.length;i++){
       this.board.append("<li id='" + this.characters[i].name + "' class='character'>" + this.characters[i].name + "</li>");
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
    var number = this.characters["id"]
    console.log(number)
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


// $("#bg").fadeOut(function() {
//    $("#bg").css({background : url('images/bg1.jpg') });
//    $("#bg").fadeIn(300);








