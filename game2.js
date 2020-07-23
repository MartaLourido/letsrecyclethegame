//let canvas = document.getElementById('myCanvas');
//let canvas;
//let ctx = canvas.getContext('2d');
//let ctx;

let bgImg = new Image();
bgImg.src = 'background5.png';

let wine = new Image();
wine.src = 'wine.png';

let bin = new Image();
bin.src = 'bin6.png';

let gameOver = new Image();
gameOver.src = 'gameOver.png'


let wineX = 100; // x position
let wineY = 100; // y position
let wineRadius = 20; // radius

let wineXincrement = 5;
let wineYincrement = 5;

let binX = 390;
let binY = 490;
let binWidth = 100;
let binHeight = 20;
let isRightArrow = false;
let isLefttArrow = false;

let score = 0;
let overPoints = 0;
let intervalId = 0;
let probabilityOfwine = 1 / 51;

var noOfwine = 50;
var fallingwine = [];
var wineWidth = 15;
var wineHeight = 15;
var totalwines = 10;
var wines = [];

var dead = 0;
var water = 500;//variable que define la linea de donde empieza el mar
var scoretoWin = 10; //botellas que necesitas para ganar
var scoretoDead = 10;//si estas botellas caen al mar pierdes
//var mySound; //tratando de crear un sonido

var mySound;



document.addEventListener('keydown', function(event){
    if (event.key === 'ArrowRight'){
        binX = binX + 50;
        console.log(binX)
    } 
    else if (event.key === 'ArrowLeft'){
        binX = binX - 50;
    } 
})

document.addEventListener('keyup', function(event){
    isRightArrow = false;
    isLefttArrow = false;
})

function sound(src) {
    this.sound = document.createElement("audio");
    this.sound.src = src;
    this.sound.setAttribute("preload", "auto");
    this.sound.setAttribute("controls", "none");
    this.sound.style.display = "none";
    document.body.appendChild(this.sound);
    this.play = function(){
      this.sound.play();
    }
    this.stop = function(){
      this.sound.pause();
    }
  }




function draw() {
    // CLEAR THE CANVAS
    ctx.clearRect(0, 0, canvas.width, canvas.height); //para limpiar el canvas
    // UPDATE THE CANVAS ELEMENTS
    
    addwine();
        
    moveWine();
   
    
    // DRAW THE CANVAS ELEMENTS
    ctx.drawImage (bgImg, 0, 0);
  
    //crear array, insertar elementos y crear forEach
    ctx.drawImage (bin, binX, binY);//arriba declaro estas variables globales y aqui las tengo que llamar
    // checkCollision();
    refreshScore();
    refreshDead();
    wineCollision();
   
    mySound.play();//play the background sound
    for (var i = 0; i < wines.length; i++) {
        ctx.drawImage (wine, wines[i].x, wines[i].y);
    }
   

   console.log("draw")
   
  
}

// colocar el interval en una function
function startLoop() {
    intervalId = setInterval (() => {
        requestAnimationFrame(draw)
    }, 25)
    
}


// hacer target del boton
const bigButton = document.querySelector('.big-button');

bigButton.addEventListener("click", startGame)

function startGame() {
    
    showSplash(false);
    mySound = new sound("backgroundsound.wav");
    gameOverSound = new sound("gameover.wav");   
    winSound = new sound("winsound.mp3");   
    
    startLoop()
    

}

function showSplash(visible){
    // hacer target del splash-screen
    const splashScreen = document.querySelector('.splash-screen-btn');
    // remover splashscreen actual usando .remove()
    if(visible)
        splashScreen.style.display = "block";
    else
        splashScreen.style.display = "none";
}

function changeButtonStartText (text){
    const startButton = document.getElementById('btn-start');
    console.log(startButton);
    startButton.innerHTML = text;

}

 
function gOver(){
let canvas = document.getElementById('game');

let ctx = canvas.getContext('2d');

let goImg = new Image();
goImg.onload = function(){
    ctx.drawImage(goImg, 0, 0, 760, 760);
    // game.load.image('start', 'button.png');
};
goImg.src = "gameover.png";


// mySound.pause();
gameOverSound.play();//trying to get a gameover sound
refreshScore();
refreshDead();

wines=[];
score=0;
dead=0;
}


function youWin(){
    let canvas = document.getElementById('game')


    let ctx = canvas.getContext('2d')
    let bgImg = new Image();
    bgImg.onload = function(){
    ctx.drawImage(bgImg, 0, 0, 760, 760);
    // game.load.image('start', 'button.png');
};
bgImg.src = "winner.png"

winSound.play();
wines=[];
score=0;
dead=0;

}

function binMovement(){
    if (isRightArrow && binX < canvas.width - binWidth){
        binX = binX + 5
    }
    else if (isLefttArrow && binX > 0){
        binX = binX - 5
    }
}


function addwine() {
    let ranthomPossibility = Math.floor(Math.random() * 20) //1 de 20 posibilidades de que se cree un nuevo vino en un lugar aleatorio
    let ranthomPlace = Math.floor(Math.random() * canvas.width)
    if(ranthomPossibility === 1){
        var wine = {
            x: ranthomPlace,
            y: 10
        }
        
        // resetwine(wine);
        wines.push(wine);
    }  
   
}

// move the wine to a random position near the top-of-canvas
// assign the wine a random speed
function resetwine(wine) {
    wine.x = Math.random() * (canvas.width - wineWidth);
    wine.y = 15 + Math.floor(Math.random() * 30) + 1;  
    wine.speed = 0.9 + Math.random() * 0.5;
   
}   

function moveWine(){
    wines.forEach(function(wine){
        wine.y++ //si quiero que se mueva mas rapido le pongo que sea +10 o un numero
    })
}

function refreshScore() {
    
    scoreSpan = score;
    ctx.fillStyle = "black";
    ctx.font = "20px Verdana";
    ctx.fillText('Score: ' + score, 10, 30); // display the score
    
}

function refreshDead() {
   
    deadSpan = dead;
    ctx.fillStyle = "black";
    ctx.font = "20px Verdana";
    ctx.fillText('Dead: ' + dead,650, 30); 
    
}


    
function wineCollision(){ 
    // console.log("paso por aqui 1");
    var winesToRemove=[];
    
    wines.forEach(function(wine){
        // console.log("paso por aqui 2");
        //verificamos si supera la altura del bin
        
        //console.log(wine.y);
        // console.log(wine.x);
        // console.log(binX);
        if((wine.y >= binY)&&(wine.x >= binX && wine.x <= binX+100)){
            console.log("paso entre medio del bin");
            score++;
            winesToRemove.push(wine);
            if (score == scoretoWin){//declarado arriba scoretoWin
                clearInterval(intervalId);
                // location.href = "winner.html";
                showSplash(true);
                changeButtonStartText ("New Game");
                youWin();//hacer lo mismo que en la funcion go si quiero que cambie
                return;
              }
         }
    
        else if(wine.y == water){
                dead ++;
                console.log ('me muero');
                if (dead == scoretoDead) {
                clearInterval(intervalId);
                // location.href = "gameover.html";
                showSplash(true);
                changeButtonStartText ("Try Again");
                gOver();
                
                }
            
            

               
          
        }

        

    });
    winesToRemove.forEach(function(w){
        removeFromArray(wines,w);
    });
    
}

function removeFromArray(array, value) {
    var idx = array.indexOf(value);
    if (idx !== -1) {
        array.splice(idx, 1);
    }
    return array;
}



