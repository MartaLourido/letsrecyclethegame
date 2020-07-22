let canvas = document.getElementById('game')


let ctx = canvas.getContext('2d')


let bgImg = new Image();
bgImg.onload = function(){
    ctx.drawImage(bgImg, 0, 0, 760, 760);
    // game.load.image('start', 'button.png');
};
bgImg.src = "gameover.png"



// openGame (){

// }