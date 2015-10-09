window.onload = function(){

  //Object
  var guessWho = {
    characters            :   list.characters,
    board                 :   $("#board"),
    selectedCharacter     :   {},
    askQuestion           :   function(){
                              this.features   =   $("input:radio[name='features']:checked").val();
                              this.adjective  =   $("input:radio[name='adjective']:checked").val();

                              guessWho.featuresCheck(this.features, this.adjective);
        }
  };

  $("#ask").on("click", guessWho.askQuestion)

  //Get the board show
  guessWho.printBoard = function(){

    var selected = this.characters[Math.floor(Math.random()*24)]
    this.selectedCharacter = selected 

    console.log(this.selectedCharacter)
    console.log(this.selectedCharacter.name)

    for(var i=0;i<this.characters.length;i++){
       this.board.append("<li id='" + this.characters[i].name + "' class='character'>" + this.characters[i].name + "</li>");
    };
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










