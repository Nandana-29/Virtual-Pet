var database;
var dog,sadDog,happyDog;
var milk1;
var stock, feed, addFood, foodS;


function preload(){
  sadDog=loadImage("Images/Dog.png");
  happyDog=loadImage("Images/happy dog.png");
}

function setup() {
  database = firebase.database();
  createCanvas(1000,400);

  milk1 = new Food();

  stock=database.ref('Food');
  stock.on("value", readStock);
  
  feed=createButton("Feed the dog");
  feed.position(550,95);
  feed.mousePressed(feedDog);

  addFood=createButton("Add Food");
  addFood.position(750,95);
  addFood.mousePressed(AddFood);

  dog=createSprite(800,200,150,150);
  dog.addImage(sadDog);
  dog.scale=0.15;

}

function draw() {
  background(46,139,87);

  milk1.display();
  drawSprites();
}

function readStock(data){
  foodS=data.val();
  milk1.UpdateFood(foodS);
}

function AddFood(){
  foodS = foodS + 1;
  database.ref('/').update({
    Food:foodS
  })
}

function feedDog(){
  foodS = foodS - 1;
  database.ref('/').update({
    Food:foodS
  })
}
