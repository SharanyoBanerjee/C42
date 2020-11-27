function setup() {
  createCanvas(800,400);
  var name = "class is good"
  console.log(name.length);
  console.log(name.toUpperCase())
  console.log(name.toLowerCase())
  console.log(name.slice(0,5))

  abv = ["wlc","thx","gdmr","lol","XD","idk","noice"]
  console.log(abv.length);

  for (var i = 0; i < abv.length;i = i+1  ){
    console.log(abv[i])
  }
  
  //JSON structure , for in loop
  stateObj = [
    {
      state: "Westbengal",
      food:  "ChingriMalaikari"
    },
    {
      state:"Maharashtra",
      food: "vada Pav"
    },
    {
      state:"Karnataka",
      food:"lemonRice"
    }
  ]

 for(var i in stateObj){
   console.log(stateObj[i].state +" "+stateObj[i].food)
   
 }

}

function draw() {
  background(255,255,255);  
  drawSprites();
}