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
    computerAdjective     :   "",

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

  // //Let pictures fade out
  // guessWho.noShowPictures = function(value, choice){

  // }

 //Computer question maker****************************************
  guessWho.questionMaker = function(){
    console.log("It is round: " + guessWho.round)
    var arrayLength   = this.computerQuestions[guessWho.round].length
    var questionGroup = this.computerQuestions[guessWho.round][this.randomNumber(arrayLength)]
    var features      = questionGroup[0] 

    var numberForAdjective  = (this.randomNumber(arrayLength -1) + 1);
    var adjective           = questionGroup[numberForAdjective]
    console.log(features)
    console.log(adjective)
    this.computerFeatures   = features
    this.computerAdjective  = adjective 
    var text = features + " " + adjective
    return text
  }

 //Computer turn
  guessWho.computersTurn = function(){
    if(guessWho.computerNames < 3){
      alert("I do a guess")
    }else{
      var text = guessWho.questionMaker()
      this.answerBoxPrint(text)
      this.answerPicture.css("background-image","url("+guessWho.characters[idPlayerCharacter].picture[0]+")");
      $('.confirm').on("click", function(){
        if(this.value === "true"){
          console.log(this.value)
          guessWho.computerYes()
          guessWho.answerOverlay.fadeOut()
        }else{
          guessWho.computerNo()
          guessWho.answerOverlay.fadeOut()
        }
      }); 
    } 
  }

  guessWho.computerYes = function(){
    console.log("Everybody how is NO goes away")
    for(var i=0;i<guessWho.characters.length;i++){
      var featureArray = guessWho.characters[i][guessWho.computerFeatures];
      var index = featureArray.indexOf(guessWho.computerAdjective)
        if(index === -1){
          var name = guessWho.characters[i]['name'][0];
          console.log(name);
          var indexNames = guessWho.computerNames["namelist"].indexOf(name)
          console.log(indexNames)
          guessWho.computerNames["namelist"].splice(indexNames, 1)
      }
    } console.log(guessWho.computerNames);
  };


  guessWho.computerNo = function(){
    console.log("Everybody how is not the adjective away")
     for(var i=0;i<guessWho.characters.length;i++){
        var featureArray = guessWho.characters[i][guessWho.computerFeatures];
        var index = featureArray.indexOf(guessWho.computerAdjective)
          if(index > -1){
            console.log(guessWho.computerAdjective)
            var name = guessWho.characters[i]['name'][0];
            console.log(name);
            var indexNames = guessWho.computerNames["namelist"].indexOf(name)
            console.log(indexNames)
            guessWho.computerNames["namelist"].splice(indexNames, 1)

        }
      } console.log(guessWho.computerNames)
   };



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
      } guessWho.round++
        guessWho.computersTurn() 
    }
  guessWho.printBoard()
};






