list = {};                  //Object with characters in there

list.options =[{
  'gender'      :   ["man", "woman"],
  'head'        :   ["square", "long", "oval", "round"],
  'nose'        :   ["small", "medium", "large", "extra large"],
  'ears'        :   ["small","normal", "big"],
  'eyes'        :   ["brown","blue","bushy", "neat eyebrows", "normal eyebrows"],
  'cheeks'      :   ["rosy"],
  'chin'        :   ["dimple", "pointy", "round"],
  'mouth'       :   ["wide", "small", "small", "big lips"], 
  'hair'        :   ["black","blonde","white","ginger","short", "long", "bold"],
  'expresion'   :   ["neutral","happy","grumpy","pout"],
  'facial hair' :   ["moustache", "beard"],
  'accessories' :   ["hat","earring","glasses","bows"]  
}]

list.computerRounds = [{
  1            :   [["gender","man", "woman"],
                          ["ears","small","normal", "big"], 
                          ["chin","dimple", "pointy", "round"]],
  2            :   [],
  3            :   [],
  4            :   [],
  5            :   [],
  6            :   [],
  'rest'       :   [],
  'used'       :   []
}]

list.characters = [{
  'id'          :   [00],
  'name'        :   ["alex"],
  'gender'      :   ["man"],
  'picture'     :   ["pictures/alex.png"],
  'head'        :   ["square"],
  'nose'        :   ["small"],
  'ears'        :   ["big"],
  'eyes'        :   ["brown", "neat eyebrows"],
  'cheeks'      :   ["none"],
  'chin'        :   ["dimple"],
  'mouth'       :   ["wide", "big lips"], 
  'hair'        :   ["black","short"],
  'expresion'   :   ["neutral"],
  'facial hair' :   ["moustache"],
  'accessories' :   ["none"]  
},
{
  'id'          :   [01],
  'name'        :   ["alfred"],
  'gender'      :   ["man"],
  'picture'     :   ["pictures/alfred.png"],
  'head'        :   ["long"],
  'nose'        :   ["medium"],
  'ears'        :   ["big"],
  'eyes'        :   ["bleu", "neat eyebrows"],
  'cheeks'      :   ["none"],
  'chin'        :   ["pointy"],
  'mouth'       :   ["narrow", "small lips"], 
  'hair'        :   ["ginger","long"],
  'expresion'   :   ["grumpy", "pout"],
  'facial hair' :   ["moustache"],
  'accessories' :   ["none"]  
},
{
  'id'          :   [02],
  'name'        :   ["anita"],
  'gender'      :   ["woman"],
  'picture'     :   ["pictures/anita.png"],
  'head'        :   ["oval"],
  'nose'        :   ["small"],
  'ears'        :   ["none"],
  'eyes'        :   ["blue", "neat eyebrows"],
  'cheeks'      :   ["rosy"],
  'chin'        :   ["pointy"],
  'mouth'       :   ["narrow", "small lips"], 
  'hair'        :   ["blonde","long"],
  'expresion'   :   ["happy"],
  'facial hair' :   ["none"],
  'accessories' :   ["bows"]  
},{
  'id'          :   [03],
  'name'        :   ["anne"],
  'gender'      :   ["woman"],
  'picture'     :   ["pictures/anne.png"],
  'head'        :   ["round"],
  'nose'        :   ["large"],
  'ears'        :   ["none"],
  'eyes'        :   ["brown", "neat eyebrows"],
  'cheeks'      :   ["none"],
  'chin'        :   ["round"],
  'mouth'       :   ["narrow", "small lips"], 
  'hair'        :   ["black","short"],
  'expresion'   :   ["pout"],
  'facial hair' :   ["none"],
  'accessories' :   ["earring"]  
},
{
  'id'          :   [04],
  'name'        :   ["bernard"],
  'gender'      :   ["man"],
  'picture'     :   ["pictures/bernard.png"],
  'head'        :   ["oval"],
  'nose'        :   ["extra large"],
  'ears'        :   ["big"],
  'eyes'        :   ["brow", "normal eyebrows"],
  'cheeks'      :   ["none"],
  'chin'        :   ["dimple"],
  'mouth'       :   ["narrow", "small lips"], 
  'hair'        :   ["brown","short"],
  'expresion'   :   ["grumpy"],
  'facial hair' :   ["none"],
  'accessories' :   ["hat"]  
},
{
  'id'          :   [05],
  'name'        :   ["bill"],
  'gender'      :   ["man"],
  'picture'     :   ["pictures/bill.png"],
  'head'        :   ["egg shaped"],
  'nose'        :   ["small"],
  'ears'        :   ["normal"],
  'eyes'        :   ["brown", "normal eyebrows"],
  'cheeks'      :   ["rosy"],
  'chin'        :   ["none"],
  'mouth'       :   ["narrow", "small lips"], 
  'hair'        :   ["ginger","bald"],
  'expresion'   :   ["happy"],
  'facial hair' :   ["beard"],
  'accessories' :   ["none"]  
},
{
  'id'          :   [06],
  'name'        :   ["charles"],
  'gender'      :   ["man"],
  'picture'     :   ["pictures/charles.png"],
  'head'        :   ["round"],
  'nose'        :   ["medium"],
  'ears'        :   ["big"],
  'eyes'        :   ["brown", "normal eyebrows"],
  'cheeks'      :   ["none"],
  'chin'        :   ["round"],
  'mouth'       :   ["wide", "big lips"], 
  'hair'        :   ["blonde","short"],
  'expresion'   :   ["happy"],
  'facial hair' :   ["moustache"],
  'accessories' :   ["none"]  
},
{
  'id'          :   [07],
  'name'        :   ["claire"],
  'gender'      :   ["woman"],
  'picture'     :   ["pictures/clair.png"],
  'head'        :   ["oval"],
  'nose'        :   ["small"],
  'ears'        :   ["none"],
  'eyes'        :   ["brown", "neat eyebrows"],
  'cheeks'      :   ["none"],
  'chin'        :   ["round"],
  'mouth'       :   ["narrow", "small lips"], 
  'hair'        :   ["ginger","short"],
  'expresion'   :   ["pout"],
  'facial hair' :   ["none"],
  'accessories' :   ["hat", "glasses"]  
},
{
  'id'          :   [08],
  'name'        :   ["david"],
  'gender'      :   ["man"],
  'picture'     :   ["pictures/david.png"],
  'head'        :   ["long"],
  'nose'        :   ["small"],
  'ears'        :   ["big"],
  'eyes'        :   ["brown", "normal eyebrows"],
  'cheeks'      :   ["none"],
  'chin'        :   ["none"],
  'mouth'       :   ["wide", "small lips"], 
  'hair'        :   ["blonde","short"],
  'expresion'   :   ["happy"],
  'facial hair' :   ["beard"],
  'accessories' :   ["none"]  
},
{
  'id'          :   [09],
  'name'        :   ["eric"],
  'gender'      :   ["man"],
  'picture'     :   ["pictures/eric.png"],
  'head'        :   ["square"],
  'nose'        :   ["small"],
  'ears'        :   ["normal"],
  'eyes'        :   ["brown", "normal eyebrows"],
  'cheeks'      :   ["none"],
  'chin'        :   ["dimple"],
  'mouth'       :   ["wide", "small lips"], 
  'hair'        :   ["blonde","short"],
  'expresion'   :   ["happy"],
  'facial hair' :   ["none"],
  'accessories' :   ["hat"]  
},
{
  'id'          :   [10],
  'name'        :   ["frans"],
  'gender'      :   ["man"],
  'picture'     :   ["pictures/frans.png"],
  'head'        :   ["square"],
  'nose'        :   ["small"],
  'ears'        :   ["big"],
  'eyes'        :   ["brown", "bushy eyebrows"],
  'cheeks'      :   ["none"],
  'chin'        :   ["pointy"],
  'mouth'       :   ["narrow", "small lips"], 
  'hair'        :   ["ginger","short"],
  'expresion'   :   ["pout"],
  'facial hair' :   ["none"],
  'accessories' :   ["none"]  
},
{
  'id'          :   [11],
  'name'        :   ["george"],
  'gender'      :   ["man"],
  'picture'     :   ["pictures/george.png"],
  'head'        :   ["round"],
  'nose'        :   ["medium"],
  'ears'        :   ["normal"],
  'eyes'        :   ["brown", "normal eyebrows"],
  'cheeks'      :   ["none"],
  'chin'        :   ["dimple"],
  'mouth'       :   ["wide", "small lips"], 
  'hair'        :   ["white","short"],
  'expresion'   :   ["said"],
  'facial hair' :   ["none"],
  'accessories' :   ["hat"]  
},
{
  'id'          :   [12],
  'name'        :   ["herman"],
  'gender'      :   ["man"],
  'picture'     :   ["pictures/herman.png"],
  'head'        :   ["oval"],
  'nose'        :   ["extra large"],
  'ears'        :   ["normal"],
  'eyes'        :   ["brown", "bushy eyebrows"],
  'cheeks'      :   ["none"],
  'chin'        :   ["pointy"],
  'mouth'       :   ["narrow", "small lips"], 
  'hair'        :   ["ginger","bold"],
  'expresion'   :   ["neutral"],
  'facial hair' :   ["none"],
  'accessories' :   ["none"]  
},
{
  'id'          :   [13],
  'name'        :   ["joe"],
  'gender'      :   ["man"],
  'picture'     :   ["pictures/joe.png"],
  'head'        :   ["oval"],
  'nose'        :   ["medium"],
  'ears'        :   ["normal"],
  'eyes'        :   ["brown", "bushy eyebrows"],
  'cheeks'      :   ["none"],
  'chin'        :   ["dimple"],
  'mouth'       :   ["narrow", "small lips"], 
  'hair'        :   ["blonde","short"],
  'expresion'   :   ["pout"],
  'facial hair' :   ["none"],
  'accessories' :   ["glasses"]  
},
{
  'id'          :   [14],
  'name'        :   ["maria"],
  'gender'      :   ["woman"],
  'picture'     :   ["pictures/maria.png"],
  'head'        :   ["oval"],
  'nose'        :   ["medium"],
  'ears'        :   ["none"],
  'eyes'        :   ["brown", "neat eyebrows"],
  'cheeks'      :   ["none"],
  'chin'        :   ["round"],
  'mouth'       :   ["wide", "small lips"], 
  'hair'        :   ["brown","long"],
  'expresion'   :   ["pout"],
  'facial hair' :   ["none"],
  'accessories' :   ["hat", "earring"]  
},
{
  'id'          :   [15],
  'name'        :   ["max"],
  'gender'      :   ["man"],
  'picture'     :   ["pictures/max.png"],
  'head'        :   ["round"],
  'nose'        :   ["extra large"],
  'ears'        :   ["normal"],
  'eyes'        :   ["brown", "normal eyebrows"],
  'cheeks'      :   ["none"],
  'chin'        :   ["none"],
  'mouth'       :   ["wide", "big lips"], 
  'hair'        :   ["black","short"],
  'expresion'   :   ["happy"],
  'facial hair' :   ["moustache"],
  'accessories' :   ["none"]  
},
{
  'id'          :   [16],
  'name'        :   ["paul"],
  'gender'      :   ["man"],
  'picture'     :   ["pictures/paul.png"],
  'head'        :   ["oval"],
  'nose'        :   ["small"],
  'ears'        :   ["big"],
  'eyes'        :   ["brown", "normal eyebrows"],
  'cheeks'      :   ["none"],
  'chin'        :   ["dimple"],
  'mouth'       :   ["narrow", "small lips"], 
  'hair'        :   ["white","short"],
  'expresion'   :   ["happy"],
  'facial hair' :   ["none"],
  'accessories' :   ["glasses"]  
},
{ 
  'id'          :   [17],
  'name'        :   ["peter"],
  'gender'      :   ["man"],
  'picture'     :   ["pictures/peter.png"],
  'head'        :   ["square"],
  'nose'        :   ["extra large"],
  'ears'        :   ["normal"],
  'eyes'        :   ["blue", "bushy eyebrows"],
  'cheeks'      :   ["none"],
  'chin'        :   ["pointy"],
  'mouth'       :   ["wide", "big lips"], 
  'hair'        :   ["white","short"],
  'expresion'   :   ["happy"],
  'facial hair' :   ["none"],
  'accessories' :   ["none"]  
},
{
  'id'          :   [18],
  'name'        :   ["philip"],
  'gender'      :   ["man"],
  'picture'     :   ["pictures/philip.png"],
  'head'        :   ["round"],
  'nose'        :   ["medium"],
  'ears'        :   ["normal"],
  'eyes'        :   ["brown", "need eyebrows"],
  'cheeks'      :   ["rosy"],
  'chin'        :   ["none"],
  'mouth'       :   ["wide", "small lips"], 
  'hair'        :   ["black","short"],
  'expresion'   :   ["happy"],
  'facial hair' :   ["beard"],
  'accessories' :   ["none"]  
},{
  'id'          :   [19],
  'name'        :   ["richard"],
  'gender'      :   ["man"],
  'picture'     :   ["pictures/richard.png"],
  'head'        :   ["long"],
  'nose'        :   ["medium"],
  'ears'        :   ["normal"],
  'eyes'        :   ["brown", "normal eyebrows"],
  'cheeks'      :   ["none"],
  'chin'        :   ["none"],
  'mouth'       :   ["narrow", "small lips"], 
  'hair'        :   ["brown","bold"],
  'expresion'   :   ["neutral"],
  'facial hair' :   ["moustache", "beard"],
  'accessories' :   ["none"]  
},
{
  'id'          :   [20],
  'name'        :   ["robert"],
  'gender'      :   ["man"],
  'picture'     :   ["pictures/robert.png"],
  'head'        :   ["oval"],
  'nose'        :   ["extra large"],
  'ears'        :   ["big"],
  'eyes'        :   ["bleu", "normal eyebrows"],
  'cheeks'      :   ["rosy"],
  'chin'        :   ["dimple"],
  'mouth'       :   ["wide", "small lips"], 
  'hair'        :   ["brown","short"],
  'expresion'   :   ["grumpy"],
  'facial hair' :   ["none"],
  'accessories' :   ["none"]   
},
{ 
  'id'          :   [21],
  'name'        :   ["sam"],
  'gender'      :   ["man"],
  'picture'     :   ["pictures/sam.png"],
  'head'        :   ["round"],
  'nose'        :   ["medium"],
  'ears'        :   ["small"],
  'eyes'        :   ["brown", "need eyebrows"],
  'cheeks'      :   ["none"],
  'chin'        :   ["pointy"],
  'mouth'       :   ["small", "small lips"], 
  'hair'        :   ["white","bold"],
  'expresion'   :   ["happy"],
  'facial hair' :   ["none"],
  'accessories' :   ["glasses"]  
},
{
  'id'          :   [22],
  'name'        :   ["susan"],
  'gender'      :   ["woman"],
  'picture'     :   ["pictures/susan.png"],
  'head'        :   ["oval"],
  'nose'        :   ["small"],
  'ears'        :   ["none"],
  'eyes'        :   ["brown", "need eyebrows"],
  'cheeks'      :   ["rosy"],
  'chin'        :   ["round"],
  'mouth'       :   ["wide", "big lips"], 
  'hair'        :   ["white","long"],
  'expresion'   :   ["happy"],
  'facial hair' :   ["none"],
  'accessories' :   ["none"]  
},
{
  'id'          :   [23],
  'name'        :   ["tom"],
  'gender'      :   ["man"],
  'picture'     :   ["pictures/tom.png"],
  'head'        :   ["long"],
  'nose'        :   ["medium"],
  'ears'        :   ["normal"],
  'eyes'        :   ["blue", "normal eyebrows"],
  'cheeks'      :   ["none"],
  'chin'        :   ["round"],
  'mouth'       :   ["narrow", "small lips"], 
  'hair'        :   ["black","bold"],
  'expresion'   :   ["happy"],
  'facial hair' :   ["none"],
  'accessories' :   ["glasses"]  
}];


