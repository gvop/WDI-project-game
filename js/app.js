window.onload = function(){

  guessWho = {};


  guessWho.charachter = [{
    'id'          :   [00],
    'name'        :   ["alex"],
    'gender'      :   ["man"],
    'picture'     :   ["images/bill.png"],
    'head'        :   ["round"],
    'nose'        :   ["small"],
    'hair'        :   ["orange","bold"],
    'expresion'   :   ["smile","grin"],
    'cheeks'      :   ["thick","red"]  
  },
  {
    'id'          :   [01],
    'name'        :   ["alfred"],
    'gender'      :   ["man"],
    'picture'     :   ["images/anita.png"],
    'head'        :   ["pear shaped"],
    'nose'        :   ["small"],
    'hair'        :   ["orange","bold"],
    'expresion'   :   ["grin"],
    'cheeks'      :   ["thick","red"]  
  },
  {
    'id'          :   [02],
    'name'        :   ["anita"],
    'gender'      :   ["woman"],
    'picture'     :   ["images/anita.png"],
    'head'        :   ["pear shaped"],
    'nose'        :   ["small"],
    'hair'        :   ["orange","bold"],
    'expresion'   :   ["grin"],
    'cheeks'      :   ["thick","red"]  
  },{
    'id'          :   [03],
    'name'        :   ["anne"],
    'gender'      :   ["woman"],
    'picture'     :   ["images/bill.png"],
    'head'        :   ["round"],
    'nose'        :   ["small"],
    'hair'        :   ["orange","bold"],
    'expresion'   :   ["smile","grin"],
    'cheeks'      :   ["thick","red"]  
  }]

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


}




