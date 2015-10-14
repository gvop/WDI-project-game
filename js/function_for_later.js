//General functions 1-7
//Player functions 8-10
//Computer functions 11-15


window.onload = function(){

  var idCharacter;
  var idPlayerCharacter;

  var guessWho = {
    round                 :   0,
    characters            :   list.characters,
    idCharacter           :   "", 
    playerChoose          :   "",

    computerCharacters    :   list.computerCharacters,
    computerNames         :   list.charactersNames,
    computerQuestions     :   list.computerQuestions,
    computerFeatures      :   "",
    computerAdjective     :   "",

    answerOverlay         :   $('#answer-overlay'),
    answerInput           :   $('#question-input'),
    answerPicture         :   $('#answer-pic'),

    questions             :   list.options,

    overlay               :   $("#overlay"),
    board                 :   $("#board"),
    startButton           :   $("#start"),
    askButton             :   $("#ask"),

    answerBoxPrint        :   function(text){   
                                  this.answerOverlay.slideDown();  
                                  this.answerInput.text(" ");
                                  this.answerInput.append(text)},
    randomNumber          :   function(value){return Math.floor(Math.random()*value)},
    askQuestion           :   function(){
                              $('#instructions').slideUp();
                              this.features   =   $("input:radio[name='features']:checked").val();
                              this.adjective  =   $("input:radio[name='adjective']:checked").val();
                              guessWho.featuresCheck(this.features, this.adjective);
        }
  };

  //***** General

  //1.Function to let player choose computer character
  guessWho.setup = (function(){
    for(var i=0;i<guessWho.characters.length;i++){
       $("#overlay .container").append(
               " <li data='" + guessWho.characters[i].id + "'' style='background: url(pictures/" 
                 + guessWho.characters[i].name + 
               ".png); background-size: 120%;background-position: 50% 46%;' id='" 
               + guessWho.characters[i].name + "'class='character_list' number='"+ guessWho.characters[i].id +"'>"+ "</li>")
           }

    $("li").on("click", function(){
      $(".character_list").fadeOut();
      guessWho.playerChoose   = this.id; 
      idPlayerCharacter       = this.getAttribute("number");
      guessWho.selectedCharacter = guessWho.characters[this.getAttribute("data")]
          setTimeout(function(){
                $("#" + guessWho.playerChoose).show();
                $("#start").fadeIn("slow");
            }, 500);
      })
  })();

  //2.After click on start button
  guessWho.startButton.on("click", function(){
      guessWho.overlay.fadeOut(500).remove();
      $("body").hide().delay(100).fadeIn(500);
  });

  //3.Winner check function
  guessWho.winnerChecker = function(){
    if(this.id ===guessWho.characters[idCharacter]["name"][0]){
      $('.confirm_winnar').hide()
      guessWho.winnerCheckerPrint("Yes, that's correct!");
      setTimeout(function(){
        location.reload();
      }, 3000);
    }else{
      $('.confirm_winnar').hide()
      guessWho.winnerCheckerPrint("Nope, that's not the right one!<br> Keep going!");
      setTimeout(function(){
        guessWho.answerOverlay.slideUp()
        guessWho.round++
      }, 3000);
    }
  };

  //4.Winner Check printer function
  guessWho.winnerCheckerPrint = function(text){
    guessWho.answerPicture.hide();
    $(".confirm").hide();
    $(".title").hide();
    guessWho.answerBoxPrint(text);
  }

  //5.Get the board show
  guessWho.printBoard = function(){
    this.idCharacter  = this.randomNumber(24)
    idCharacter       = this.idCharacter

    console.log(this.idCharacter);

    for(var i=0;i<this.characters.length;i++){
       this.board.append(
        " <li style='background: url(pictures/"+ this.characters[i].name 
        + ".png); background-size: 120%;background-position: 50% 46%;' id='" 
        + this.characters[i].name + "'class='character' number='"+ this.characters[i].id + "'></li>")
    } $(".character").on("click", guessWho.winnerChecker); //Enable winner checker
  };

  //6.makes radio buttons clickable
  $("input:radio").on("click", function(){
    var object = guessWho.questions[0][this.value]  
    $(".hide").remove();
    for(var i=0;i<object.length;i++){
          var constructor = '<input type="radio" class="hide" id="'+ object[i] +'" name="adjective" value="'+ 
          object[i] +'" > <label class="hide" for="'+ object[i] + '">'+ object[i] +'</label>'
          $("#adjective").append(constructor)     
    }    
   });


  //7.Hide pictures
  guessWho.hidePictures = function(id){
    $('#' + id).css("background","#ffce21");          
    $('#' + id).css("color", "#ffce21").delay(1000).hide();
  }

  //***** Player asks Questions

  //8.Call function on "ask question"
  guessWho.askButton.on("click", guessWho.askQuestion)

  //9.Checker 
  guessWho.featuresCheck = function(value, choice){
    guessWho.dropDowns(value, choice);
  };

  //10.Select characters that are right/wrong 
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
         } guessWho.round++
         $('html, body').animate({ scrollTop: 0 }, 'slow'); 
         setTimeout(function(){
           guessWho.computersTurn() 
         }, 1500);
     }


  //***** COMPUTERS TURN

 //11.Computer question maker
  guessWho.questionMaker = function(){
    var questions = this.computerQuestions[guessWho.round];
    var question  = questions[this.randomNumber(questions.length)];
    var ajectiveGuess = question.adjectives[this.randomNumber(question.adjectives.length)];
 
    this.computerFeatures   = question.feature
    this.computerAdjective  = ajectiveGuess 

    return "<h3 class='computer-guess'>Feature: " + this.computerFeatures + "</h3><h3 class='computer-guess'>Adjective: " + this.computerAdjective + "</h3>";
  }

  //12.Computer turn
   guessWho.computersTurn = function(){
     if (guessWho.computerNames.length < 3 || guessWho.round > 5){
       console.log(guessWho.round);
       guessWho.computerGuess();
     } else {
       guessWho.computerAskGenerator();
     }
   }

  //13.Computer Guess Function
  guessWho.computerGuess = function(){
    var name   = this.computerNames[this.randomNumber(this.computerNames.length)]
    this.answerBoxPrint("I do a guess, is it: <br><h2>" + name + "?</h2>");
    this.answerPicture.css("background-image","url("+guessWho.characters[idPlayerCharacter].picture[0]+")");
    $(".confirm").hide()
    $('.confirm_winnar').show();
    $('.confirm_winnar').on("click", function(){
      if(this.value === "true"){
        setTimeout(function(){
          location.reload();
        }, 1000);
      }else{
        guessWho.filterResults(false)
        guessWho.answerOverlay.slideUp()
      }
    });
  }

  //14.Computer Question Generator
  guessWho.computerAskGenerator = function(){
    var text = guessWho.questionMaker();
    this.answerBoxPrint(text);
    this.answerPicture.css("background-image","url("+guessWho.characters[idPlayerCharacter].picture[0]+")");
    
    $('.confirm').on("click", function(){
      if (this.value === "true"){
        guessWho.filterResults(true);
        guessWho.answerOverlay.slideUp()
      } else {
        guessWho.filterResults(false)
        guessWho.answerOverlay.slideUp()
      }
    });
  }

  //15.Computer Compair results withs names Array
  guessWho.filterResults = function(yes){
    var clone = JSON.parse(JSON.stringify(guessWho.computerNames));

    guessWho.computerNames.forEach(function(name, index, array){
      if (guessWho.computerCharacters[name][guessWho.computerFeatures].indexOf(guessWho.computerAdjective) === -1) {
        clone.splice(clone.indexOf(name), 1);
      }
    });

    if(yes){
      guessWho.computerNames = clone;
    }else{
      guessWho.computerNames = guessWho.computerNames.filter(function(item) {
        return clone.indexOf(item) === -1;
      });
    }
    return guessWho.computerNames;
  };
  guessWho.printBoard()
};







