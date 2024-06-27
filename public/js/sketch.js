let width = 0;
let height = 0;
let backgroundImage;

class Tile{
  constructor(lane){
    this.lane = lane;
    this.tileWidth = width/4 - 10;
    this.tileHeight = height/4;
    this.x = 5 + this.lane*width/4;
    this.y = -1*this.tileHeight;
    this.speed = 6;
  }

  show(){
    push();
      translate(this.x,this.y);
      rectMode(CENTER);
      rect(this.tileWidth/2,this.tileHeight/2,this.tileWidth,this.tileHeight);
    pop();
  }

  move(){
    this.y += this.speed;
  }

  isVisible(){
    return this.y > -this.tileHeight;
  }
}

tiles = [];

function preload(){
  backgroundImage = loadImage('assets/img/one-piece-4k-anime-roronoa-zoro-yffx8ycknve7dacz.jpg')
}

function setup(){
  createCanvas(windowWidth,windowHeight*0.85);
  width = windowWidth;
  height = windowHeight*0.85;

  tiles.push(new Tile(0));
  tiles.push(new Tile(2));
}

function draw(){
  frameRate(60);
  /*background('rgba(112, 0, 41, 0.749)');*/
  background(backgroundImage);
  stroke(255);
  line(width/4,0,width/4,height);
  line(2*width/4,0,2*width/4,height);
  line(3*width/4,0,3*width/4,height);
  line(0,4*height/5,width,4*height/5);
  tiles[0].show();
  if(tiles[0].y <= height || tiles[1].y <= height){
    tiles[0].move();
    tiles[1].move();
    console.log(`tile y = ${tiles[0].y}, isVisible${tiles[0].isVisible()}`)
  }
  
  
}