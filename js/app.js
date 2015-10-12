window.onload = function(){

  //Object
  var guessWho = {
    characters            :   list.characters,
    computerCharacters    :   list.characters,
    computerQuestions     :   list.computerRounds,
    questions             :   list.options,
    turn                  :   true,
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
               " <li data='" + guessWho.characters[i].id + "'' style='background: url(pictures/" 
                 + 
               guessWho.characters[i].name 
               + 
               ".png); background-size: 120%;background-position: 50% 46%;' id='" 
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


  //Call function on "ask question"
  guessWho.askButton.on("click", guessWho.askQuestion)

  guessWho.startButton.on("click", function(){
      guessWho.overlay.fadeOut(1000).remove();
      $("body").hide().delay(200).fadeIn(2000);
      var name = guessWho.playerChoose;
      $("#players_choice").html("<li id='" + name + "' class='character_list side_pic'>" + name + "</li>")   //Get picture in the corner up
  })

  //MATH RANDOM

  guessWho.MathRandom = function(value){
    return Math.floor(Math.random()*value);
  }

  //Get the board show
  guessWho.printBoard = function(){
    var randomNumber = Math.floor(Math.random()*24);
    console.log(randomNumber)                     //RANDOM NUMBER
    var selected = this.characters[randomNumber]
    this.selectedCharacter = selected


    console.log(this.selectedCharacter["name"][0]); //TO SEE DURING TEST WHOM THE PERSON IS

    for(var i=0;i<this.characters.length;i++){
       this.board.append(
        " <li style='background: url(pictures/" 
          + 
        this.characters[i].name 
        + 
        ".png); background-size: 120%;background-position: 50% 46%;' id='" 
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

  $("input:radio").on("click", function(){
    var object = guessWho.questions[0][this.value]  
    // console.log(object)
    $(".hide").remove();
    for(var i=0;i<object.length;i++){

          var constructor = '<input type="radio" class="hide" id="'+ object[i] +'" name="adjective" value="'+ 
          object[i] +'" > <label class="hide" for="'+ object[i] + '">'+ object[i] +'</label>'

          $("#adjective").append(constructor)     
    }    
   });

  //Question selecter builder computer
  guessWho.questionBuilder = function(features){
    var computerQuestions = 1;
    var number = this.MathRandom(guessWho.computerQuestions[0][computerQuestions].length);
    var araylength = guessWho.computerQuestions[0][computerQuestions][number]
    console.log()
    var secondNumber = this.MathRandom(araylength.length -1 ) + 1;
    console.log(araylength[0])
    console.log(araylength[secondNumber])

    $('#question-input').text("Features: " + araylength[0] +" Adjective: "+ araylength[secondNumber]);

    $('.confirm').on("click", function(){
      var confirm = this.value;
      if(confirm){
        console.log(yes);
      } else {
        console.log(no);
      }
    });
    // var question = confirm("Features: " + araylength[0] +" Adjective: "+ araylength[secondNumber])
    // if(question){
    //   alert("Yes")
    // } else {
    //   alert("No")
    // }


  }


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
    var checker = this.selectedCharacter[value] 
    var answerRightorWrong = checker.indexOf(choice)  
    if(answerRightorWrong !== -1){
      for(var i=0;i<this.characters.length;i++){
        if(this.characters[i][value].indexOf(choice) === -1){
            var id = this.characters[i]["name"]
            guessWho.hidePictures(id)
          }
        }
      }else{
        for(var i=0;i<this.characters.length;i++){
           if(this.characters[i][value].indexOf(choice) !== -1){
            var id = this.characters[i]["name"]
            guessWho.hidePictures(id)
       }
      }
     }
     this.turn = false;
     if(!this.turn){
      setTimeout(function(){
        console.log(guessWho.selectedCharacter)
        $('#answer-overlay img').attr("src",guessWho.selectedCharacter.picture[0])
        // $('#answer-overlay h2').
        guessWho.questionBuilder() //function for computer question

        $('#answer-overlay').fadeIn();
      }, 1000);
     }
    };
    guessWho.printBoard()
};






