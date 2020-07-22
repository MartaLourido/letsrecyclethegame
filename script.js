let canvas = document.getElementById('game')


let ctx = canvas.getContext('2d')


let bgImgSplash = new Image();
bgImgSplash.onload = function(){
    ctx.drawImage(bgImgSplash, 0, 0);
    //game.load.image('start', 'button.png');
};
bgImgSplash.src = "portada.png"



// openGame (){

// }