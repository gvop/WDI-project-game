window.onload = function(){

  var guessWho = {
    characters      :   list.characters,
    board           :   $("#board"),
    askQuestion     :   function(){
          var features  = $("input:radio[name='features']:checked").val();
          var adjective = $("input:radio[name='adjective']:checked").val();
          guessWho.featuresCheck(features,adjective);
        }
  };

  $("#ask").on("click", guessWho.askQuestion)

  guessWho.printBoard = function(){
    for(var i=0;i<this.characters.length;i++){
       this.board.append("<li class='character'>" + this.characters[i].name + "</li>");
    };
  };

  guessWho.printBoard();

  guessWho.featuresCheck = function(value, choice){
    for(var i=0;i<this.characters.length;i++){
      for(var j=0;j<this.characters[i][value].length;j++){
        if(this.characters[i][value][j] === choice ){
          console.log("Check!");
        };
      };
    };
  };
};









