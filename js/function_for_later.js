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

// guessWho.featuresCheck = function(value, choice){
//   for(var i=0;i<this.charachter.length;i++){
//     for(var j=0;j<this.charachter[i][value].length;j++){
//       if(this.charachter[i][value][j] === choice){
//         var name = this.charachter[i]["name"];
//         document.getElementById(name).style.display = 'none';
//       };
//     };
//   };
// };

// guessWho.featuresCheck("gender", "man");


