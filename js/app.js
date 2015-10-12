window.onload = function(){

  var idCharacter;

  //Object
  var guessWho = {
    round                 :   0,
    characters            :   list.characters,
    computerCharacters    :   list.characters,
    computerNames         :   list.charactersNames,
    computerQuestions     :   list.computerQuestions,
    computerFeatures      :   "",
    computeradjective     :   "",
    questions             :   list.options,
    turn                  :   true,
    overlay               :   $("#overlay"),
    board                 :   $("#board"),
    playerChoose          :   "",
    startButton           :   $("#start"),
    askButton             :   $("#ask"),
    randomNumber          :   function(value){return Math.floor(Math.random()*value)},
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
               " <li data='" + guessWho.characters[i].id + "'' style='background: url(pictures/" 
                 + guessWho.characters[i].name + 
               ".png); background-size: 120%;background-position: 50% 46%;' id='" 
               + guessWho.characters[i].name + "'class='character_list'>"+ "</li>")
           }

    $("li").on("click", function(){
      var choice = this.id; 
      guessWho.playerChoose = this.id; 
      var arrayNumber = this.getAttribute("data");
      guessWho.selectedCharacter = guessWho.characters[arrayNumber]
      var array = $("li");
      $(".character_list").fadeOut("slow");
          setTimeout(function(){
                $("#" + choice).fadeIn("slow");
                $("#start-title").html("You have choosen " + choice +"!");
                $("#start").fadeIn("slow");
            }, 500);
      })
  })();

  //
  guessWho.computersTurn = function(){

  }


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

    //selects a random character
    var randomNumber = Math.floor(Math.random()*24);
    idCharacter = randomNumber
    console.log(this.characters[idCharacter]["name"]); //TO SEE DURING TEST WHOM THE PERSON IS

    //prints the board
    for(var i=0;i<this.characters.length;i++){
       this.board.append(
        " <li style='background: url(pictures/"+ this.characters[i].name 
        + ".png); background-size: 120%;background-position: 50% 46%;' id='" 
        + this.characters[i].name + "'class='character'>"  + "</li>")
    } $(".character").on("click", function(){
      if(this.id ===guessWho.characters[idCharacter]["name"][0]){
        alert("Winner!");
      }else{
        guessWho.numberOfGuesses++;
        alert("Not the right person!");
      };
    });
  };

  //makes radio buttons clickable
  $("input:radio").on("click", function(){
    var object = guessWho.questions[0][this.value]  
    $(".hide").remove();
    for(var i=0;i<object.length;i++){
          var constructor = '<input type="radio" class="hide" id="'+ object[i] +'" name="adjective" value="'+ 
          object[i] +'" > <label class="hide" for="'+ object[i] + '">'+ object[i] +'</label>'
          $("#adjective").append(constructor)     
    }    
   });

 
  //Checker 
  guessWho.featuresCheck = function(value, choice){
    guessWho.dropDowns(value, choice);
  };

  //Hide pictures
  guessWho.hidePictures = function(id){
    $('#' + id).css("background","#ffce21");          
    $('#' + id).css("color", "#ffce21").delay(1000).hide();
  }

 //Makes the right characters disapear 
  guessWho.dropDowns = function(value, choice){
    var checker = this.characters[idCharacter][value];
    var answerRightorWrong = checker.indexOf(choice)  
    if(answerRightorWrong>=0){  //answer is YES
        console.log("the character has this fueater and adjective")
        for(var i=0;i<guessWho.characters.length;i++){
          for(var j=0;j<guessWho.characters[i][value].length;j++){
            var choiceChecker = guessWho.characters[i][value].indexOf(choice)
            if(choiceChecker<0){
                  var id = this.characters[i]["name"]
                  guessWho.hidePictures(id)
            }
          }
        }
      } else {
        console.log("the character NOT have this fueater and adjective")
        for(var i=0;i<guessWho.characters.length;i++){
          for(var j=0;j<guessWho.characters[i][value].length;j++){
            var choiceChecker = guessWho.characters[i][value].indexOf(choice)
            if(choiceChecker>=0){
                  var id = this.characters[i]["name"]
                  guessWho.hidePictures(id)
            }
          }
        }
      }  guessWho.round++; 
      var counter = 0;
      var one = " ";
      var two = " ";
        //computer asks a question
         if(guessWho.round %2 !== 0){

          for(var i=0;i<guessWho.computerNames['namelist'].length;i++){
            console.log(guessWho.computerNames['namelist'][i])
             var categorie = this.computerQuestions[guessWho.round]; 
             var maxNumber = categorie.length
             var questionNumber = this.randomNumber(maxNumber); 
             var nextRandom = this.randomNumber((this.computerQuestions[guessWho.round][questionNumber].length) -1 ) + 1; 
             var partOne = this.computerQuestions[guessWho.round][questionNumber][0]
             var partTwo = this.computerQuestions[guessWho.round][questionNumber][nextRandom]
             var check;

             // $('#answer-overlay img').attr("src",guessWho.characters[idCharacter].picture[0])
             $('#answer-pic').css("background-image", "url(" + guessWho.characters[idCharacter].picture[0] + ")"); 
             $('#answer-overlay').fadeIn();
             $('#question-input').text(partOne + " " + partTwo)

             $(".confirm").on("click", function(){
              check = this.value;
              $('#answer-overlay').fadeOut()
             })

             if(check){ 
              for(var i=0;i<guessWho.characters.length;i++){
                for(var j=0;j<guessWho.characters[i][value].length;j++){
                  var choiceChecker = guessWho.characters[i][value].indexOf(choice)
                    if(choiceChecker>=0){
                      var id = this.characters[i]["id"][0]
                      console.log(id)
                      guessWho.computerNames["namelist"][id] = null;
                      console.log(guessWho.computerNames["namelist"])
                      
              }
            }
          }
              }else{
                  for(var i=0;i<guessWho.characters.length;i++){
                    for(var j=0;j<guessWho.characters[i][value].length;j++){
                      var choiceChecker = guessWho.characters[i][value].indexOf(choice)
                        if(choiceChecker<0){
                          var id = this.characters[i]["id"][0]
                          console.log(id)
                          guessWho.computerNames["namelist"][id] = null;
                          console.log(guessWho.computerNames["namelist"])
                          
                  }
                }
              }
            }
           guessWho.round++
         }
       }
    }
  guessWho.printBoard()
};






