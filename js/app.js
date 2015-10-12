window.onload = function(){

  var idCharacter;
  var idPlayerCharacter;

  var guessWho = {
    round                 :   0,
    characters            :   list.characters,
    idCharacter           :   "", 
    playerChoose          :   "",

    computerCharacters    :   list.characters,
    computerNames         :   list.charactersNames,
    computerQuestions     :   list.computerQuestions,
    computerFeatures      :   "",
    computeradjective     :   "",

    answerOverlay         :   $('#answer-overlay'),
    answerInput           :   $('#question-input'),
    answerPicture         :   $('#answer-pic'),

    questions             :   list.options,
    turn                  :   true,

    overlay               :   $("#overlay"),
    board                 :   $("#board"),
    startButton           :   $("#start"),
    askButton             :   $("#ask"),

    answerBoxPrint        :   function(text){    
                                  this.answerOverlay.fadeIn();  
                                  this.answerInput.text(" ");
                                  this.answerInput.append(text)},
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
               + guessWho.characters[i].name + "'class='character_list' number='"+ guessWho.characters[i].id +"'>"+ "</li>")
           }

    $("li").on("click", function(){
      guessWho.playerChoose   = this.id; 
      idPlayerCharacter       = this.getAttribute("number");

      guessWho.selectedCharacter = guessWho.characters[this.getAttribute("data")]
      $(".character_list").fadeOut("slow");
          setTimeout(function(){
                $("#" + guessWho.playerChoose).fadeIn("slow");
                $("#start").fadeIn("slow");
            }, 500);
      })
  })();


  //Call function on "ask question"
  guessWho.askButton.on("click", guessWho.askQuestion)

  //After click on start button
  guessWho.startButton.on("click", function(){
      guessWho.overlay.fadeOut(1000).remove();
      $("body").hide().delay(200).fadeIn(2000);
  })


  //Winner check function
  guessWho.winnerChecker = function(){
    if(this.id ===guessWho.characters[idCharacter]["name"][0]){
      guessWho.answerPicture.css("background-image", "url(" + guessWho.characters[idCharacter].picture[0] + ")");
      guessWho.answerBoxPrint("Yes, that's correct!")
    }else{
      guessWho.answerBoxPrint("Nope, that's not the right one!")
    }
  };


  //Get the board show
  guessWho.printBoard = function(){
    this.idCharacter  = this.randomNumber(24)
    idCharacter       = this.idCharacter
    console.log(this.characters[this.idCharacter]["name"]); 
    //prints the board
    for(var i=0;i<this.characters.length;i++){
       this.board.append(
        " <li style='background: url(pictures/"+ this.characters[i].name 
        + ".png); background-size: 120%;background-position: 50% 46%;' id='" 
        + this.characters[i].name + "'class='character' number='"+ this.characters[i].id + "'></li>")
    } $(".character").on("click", guessWho.winnerChecker); //Enable winner checker
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

  //Let pictures fade out
  guessWho.noShowPictures = function(value, choice){

  }

 //Select characters that are right/wrong 
  guessWho.dropDowns = function(value, choice){
    var checker = this.characters[idCharacter][value];
    if(checker.indexOf(choice) > -1){ 
        for(var i=0;i<guessWho.characters.length;i++){
          for(var j=0;j<guessWho.characters[i][value].length;j++){
            if(guessWho.characters[i][value].indexOf(choice) === -1){
                  guessWho.hidePictures(this.characters[i]["name"])
            }
           }
          }
    }else{
        for(var i=0;i<guessWho.characters.length;i++){
          for(var j=0;j<guessWho.characters[i][value].length;j++){
            if(guessWho.characters[i][value].indexOf(choice) > -1){
                  guessWho.hidePictures(this.characters[i]["name"])
            }
           }
          }
    }  
  }

      // var counter = 0;
      // var one = " ";
      // var two = " ";
      //   //computer asks a question
      //    if(guessWho.round %2 !== 0){

      //     for(var i=0;i<guessWho.computerNames['namelist'].length;i++){
      //       console.log(guessWho.computerNames['namelist'][i])
      //        var categorie = this.computerQuestions[guessWho.round]; 
      //        var maxNumber = categorie.length
      //        var questionNumber = this.randomNumber(maxNumber); 
      //        var nextRandom = this.randomNumber((this.computerQuestions[guessWho.round][questionNumber].length) -1 ) + 1; 
      //        var partOne = this.computerQuestions[guessWho.round][questionNumber][0]
      //        var partTwo = this.computerQuestions[guessWho.round][questionNumber][nextRandom]
      //        var check;

      //        guessWho.answerPicture.css("background-image", "url(" + guessWho.characters[idPlayerCharacter].picture[0] + ")");
      //        // var blur = 'blur(5px)';
      //       function bluring(blur){
      //          $('#board').css('filter',blur).css('webkitFilter',blur)
      //            .css('mozFilter',blur).css('oFilter',blur).css('msFilter',blur);
      //          $('#question-box').css('filter',blur).css('webkitFilter',blur)
      //            .css('mozFilter',blur).css('oFilter',blur).css('msFilter',blur);
      //          }

      //         bluring('blur(5px)')

      //        guessWho.answerOverlay.fadeIn();
      //        guessWho.answerInput.text(" ");
      //        guessWho.answerInput.append("<span>Does your character has:</span><br><br>"+ "<span>Features: </span>" + partOne + "<br><span> Adjective: </span> " + partTwo)

      //        $(".confirm").on("click", function(){
      //         check = this.value;
      //         bluring('blur(0px)')
      //         guessWho.answerOverlay.fadeOut()

      //        })

      //        if(check){ 
      //         for(var i=0;i<guessWho.characters.length;i++){
      //           for(var j=0;j<guessWho.characters[i][value].length;j++){
      //             var choiceChecker = guessWho.characters[i][value].indexOf(choice)
      //               if(choiceChecker>=0){
      //                 var id = this.characters[i]["id"][0]
      //                 console.log(id)
      //                 guessWho.computerNames["namelist"][id] = null;
      //                 console.log(guessWho.computerNames["namelist"])
                      
      //         }
      //       }
      //     }
      //         }else{
      //             for(var i=0;i<guessWho.characters.length;i++){
      //               for(var j=0;j<guessWho.characters[i][value].length;j++){
      //                 var choiceChecker = guessWho.characters[i][value].indexOf(choice)
      //                   if(choiceChecker<0){
      //                     var id = this.characters[i]["id"][0]
      //                     console.log(id)
      //                     guessWho.computerNames["namelist"][id] = null;
      //                     console.log(guessWho.computerNames["namelist"])
                          
      //             }
      //           }
      //         }
      //       }
    //        guessWho.round++
    //      }
    //    }
    // }
  guessWho.printBoard()
};






