// let canvas = document.getElementById('game');
// let ctx = canvas.getContext('2d');

// let bgImg = new Image();
// bgImg.src = "background.png";

// let binImg = new Image();
// binImg.src = 'bin.png';

// let wineImg = new Image();
// wineImg.src = 'wine.png';

let canvas = document.getElementById('myCanvas');
this.canvasContainer = document.querySelector(".myCanvas");
let ctx = canvas.getContext('2d');


this.bgImg = new Image();
this.bg.src = "background.png";

this.wine = new Image();
this.wine.src = "wine.png";

let bin = new Image();
bin.src = "bin.png";

const wineWidth = wine.width;

let winePositionX = 30;
let winePositionY = 0;
var movIntervalY = 2;

let score = 0;
const countTo = 10;
let intervalId = null;

const canvasHeight = canvas.height;
const canvasWidth = canvas.width;

const imgHeight = bin.height;
const imgWidth = bin.width;

let binPositionY = canvasHeight - 160;
let binPositionX = (canvasWidth - imgWidth) / 2;


const movePositionX = 30;

function handleKeydownEvent(event) {
    if (event.key == 'ArrowLeft' || event.keyCode == 37) {
        ctx.clearRect(0, 0, canvasWidth, canvasHeight);
        ctx.drawImage(bg, 0, 0);

        if (binPositionX > 0) {
            binPositionX = binPositionX - movePositionX;
        }
        ctx.drawImage(bin, binPositionX, binPositionXY);
    }

    if (event.key == 'ArrowRight' || event.keyCode == 39) {
        ctx.clearRect(0, 0, canvasWidth, canvasHeight);
        ctx.drawImage(bg, 0, 0);
        if (binPositionX + imgWidth < canvasWidth) {
            binPositionX = binPositionX + movePositionX;
        }
        ctx.drawImage(bin, fishnetPositionX, binPositionY);
    }

    //everytime I press a keyboard execute function handleKeydownEvent
    document.addEventListener('keydown', handleKeydownEvent)
}




function ImagesTouching(x1, y1, img1, x2, y2, img2) {
    // This function detects whether two images are touching
    if (x1 >= x2 + img2.width || x1 + img1.width <= x2) return false; // too far to the side
    if (y1 >= y2 + img2.height || y1 + img1.height <= y2)  return false; // too far above/below
    return true; // otherwise, overlap   
}

function ImagesTouchingX(x1, img1, x2, img2) {
    if (x1 >= x2 + img2.width || x1 + img1.width <= x2) return false; // too far to the side
    return true; // otherwise, overlap   
}



function moveWine() {
    ctx.clearRect(0, 0, canvasWidth, canvasHeight);
    ctx.drawImage(bgImg, 0, 0);
    ctx.drawImage(bin, fishnetPositionX, binPositionY);

    if (garb1PositionY < canvasHeight) {
        ctx.drawImage(wine, winePositionX, winePositionY);
        winePositionY += movIntervalY;
    }

    // ---- COLISION  --- Appliying function "ImagesTouching" (x1, y1, img1, x2, y2, img2) ...
    if (ImagesTouching(fishnetPositionX, binPositionY, bin, garb1PositionX, garb1PositionY, wine)) {

        ctx.clearRect(0, 0, canvasWidth, canvasHeight);
        ctx.drawImage(bg, 0, 0);
        ctx.drawImage(dolphPic, fishnetPositionX, (binPositionY - imgHeight) - 20);
    }
   

    // Garbage folling randomly 
    if (winePositionY > canvasHeight) {
        if (ImagesTouchingX(fishnetPositionX, bin, garb1PositionX, wine)) {
            score++;
            soundDolphin();
            if (score == 4){
              clearInterval(intervalId);
              location.href = "winScreen.html";
            }
        } 
        else {
            //if Loose remove canvas - Players lost the game
           
            document.getElementById("myCanvas").remove();
            clearInterval(intervalId);
        
            location.href = "index.html";
           
        }
        winePositionY = 0;
        winePositionX = Math.random() * (canvasWidth - wineWidth);
    }

    ctx.drawImage (bgImg, 0, 0)
    ctx.drawImage (wine, 0, 0)
    ctx.font = "30px Arial";
    ctx.fillText("Catched : " + score, 20, 40);
    ctx.fillText("/4 ", 190, 40);

}

function start() {
    intervalId = setInterval(moveWine, 10);
}
start()

// let cartonMilkImg = new Image();
// cartonMilkImg.src = 'cartonMilk.png';

// let pizzaImg = new Image();
// pizzaImg.src = 'pizza.png';

// let coffeImg = new Image();
// coffeImg.src = 'coffe.png';

// let plasticImg = new Image();
// plasticImg.src = 'plastic.png';

// let binX = 50;
// let bY = 2;
// let score = 0;
// let bX = 20;
// let intervalID = 0;


// function clearCanvas() {
//     ctx.clearRect(0, 0);
    
// }

// function draw (){
//     ctx.drawImage(bgImg, 0, 0);
//     ctx.drawImage(bin, binX, 0);
// }


// intervalID = setInterval(() => {
//     requestAnimationFrame(clearCanvas)
// }, 1000)






// function binMovement(){
//     if (isRightArrow && binImgX < canvas.width - binImgWidth){
//        binImgX = paddleX + 5
//     }
//     else if (isLefttArrow && paddleX > 0){
//         paddleX = binX - 5
//     }
// }


// //Tengo que crear un loop con clear interval y demas, despues para que se mueva la papelera tengo que crear keyword.

// this.wineImg = wine;

// generateWineDrop () {
//     this.wineImg.push({
//         x: Math.floor(Math.random() * 480),
//         y: 0 
//     });
// }

// $(document).on('mousemove', function (e) {
//     binImg.css('left', e.pageX);
// });


// bgImg.addEventListener('load', () => {
//     ctx.drawImage(bgImg, 0, 0)
// })

// //que se mueva la basura para los lados


// // var left, right;
// // left = mie ? 1 : 0;
// // right = 2;

// // document.body.addEventListener('mousedown', function (e){
// //     if(e.button === left){
// //         binX.isLeftClick = true;
// //     }
// //     else if(e.button === right){
// //         binY.isRightClick = true;
// //     }
// // }, false);

// // document.body.addEventListener('mouseup', function (e){
// //     if(e.button === left){
// //         binY.isLeftClick = false;
// //     }
// //     else if(e.button === right){
// //         binX.isRightClick = false;
// //     }
// // }, false);

//  //drawfunction 

//  document.addEventListener('keydown', function(event){
//     if (event.key === 'ArrowRight'){
//         isRightArrow = true;
//         isLefttArrow = false
//     } 
//     else if (event.key === 'ArrowLeft'){
//         isLefttArrow= true; 
//         isRightArrow = false;
//     } 
// })

// document.addEventListener('keyup', function(event){
//     isRightArrow = false;
//     isLefttArrow = false;
// })

// var x = canvas.width/2;
// var y = canvas.height-30;



// function binMovement(){
//     if (isRightArrow && binImgX < canvas.width - binImgWidth){
//         binImgX = binImgX + 5
//     }
//     else if (isLefttArrow && binImgX > 0){
//         binImgX = binImgX - 5
//     }
// }

// function gameLoop (){


// }

// function draw (){
//     // ctx.beginPath();
//     // ctx.arc(x, y, 10, 0, Math.PI*2);
//     ctx.drawImage(bgImg, 0,0);
    // ctx.drawImage(binImg, 350, 490);
    // ctx.drawImage(wineImg, 0, 20);
    // ctx.drawImage(cartonMilkImg, 140, 190);
    // ctx.drawImage(pizzaImg, 160, 140);
    // ctx.drawImage(coffeImg, 80, 120);
    // ctx.drawImage(plasticImg, 100, 50);
    // bY = bY + 10;
//     // ctx.closePath();
// }



// intervalID = setInterval (() => {
//     requestAnimationFrame(draw)
// }, 1000)




// // 1. create a loop:
// // with set interval o animationframe and then 1. clear canvas
// //2. update canvas
// //3.draw canvas
// // openGame (){

// // }

// //addEventListener load


// // //function printScore(){
// //     ctx.font = '18px Verdana'
// //     ctx.fillText('Score: '+score, 20, 20)
// // }