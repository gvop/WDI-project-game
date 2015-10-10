window.onload = function(){
  // $("#question-box").hide();  
  // $("#start").hide();

  //Object
  var guessWho = {
    characters            :   list.characters,
    startMessage          :   $("#game-start"),
    board                 :   $("#board"),
    playerChoose          :   "",
    selectedCharacter     :   {},
    askButton             :   {},
    askQuestion           :   function(){
                              this.features   =   $("input:radio[name='features']:checked").val();
                              this.adjective  =   $("input:radio[name='adjective']:checked").val();

                              guessWho.featuresCheck(this.features, this.adjective);
        }
  };

  

  // guessWho.setup = function(){
  //   for(var i=0;i<this.characters.length;i++){
  //      this.board.append("<li id='" + this.characters[i].name + "' class='character'>" + this.characters[i].name + "</li>");
  //   } 

  //   $("li").on("click", function(){
  //     var choice = this.id; 
  //     console.log(choice);
  //     var array = $("li");
  //     $("li").fadeOut("slow");

  //     setTimeout(function(){
  //         setTimeout(function(){
  //               $("#" + choice).fadeIn("slow");
  //               $("#start-title").html("You have choosen " + choice +"!");
  //           }, 500);

  //       },500)
  //     })
  // }


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











