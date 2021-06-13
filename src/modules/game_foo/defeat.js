import grnd from '../../pictures/elements/ground.png';
import flo from '../../pictures/elements/bed.svg';
import bgrnd from '../../pictures/bg/bg_var1.png';
import pl_fl from '../../pictures/person/plfall3.svg';


let ground = new Image();
ground.src = grnd;
let flowers = new Image();
flowers.src = flo;
let bg = new Image();
bg.src = bgrnd;
let playerfall = new Image();
playerfall.src = pl_fl;


let angrycop;
let counter3 = 0;
let lastCounter = 0;


export default function defeat({c, ctx, game}){
    let lastAnimation = requestAnimationFrame(defeat.bind(null, {c, ctx, game}));
    
    ctx.clearRect(0, 0, c.width, c.height);
    ctx.drawImage(bg, 0, -150);
    ctx.drawImage(ground, 0, c.height - ground.height);

    ctx.drawImage(flowers, game.flowers.beds[game.flowers.beds.length-1].x, c.height - ground.height - 90, 90, 90);

    if(game.flowers.beds[game.flowers.beds.length-2]){
        ctx.drawImage(flowers, game.flowers.beds[game.flowers.beds.length-2].x, c.height - ground.height - 90, 90, 90);
    }
    
    if(game.flowers.beds[game.flowers.beds.length-3]){
        ctx.drawImage(flowers, game.flowers.beds[game.flowers.beds.length-3].x, c.height - ground.height - 90, 90, 90);
    }

    ctx.drawImage(playerfall, game.player.x, c.height - ground.height - 90, 190, 110);
    for(let i = 0; i<game.angrycop.shots.length; i++){
        counter3++; 
        if(counter3 >= 0 && counter3 < 12){
            angrycop = game.angrycop.shots[1];
            ctx.drawImage(angrycop, game.cop.x+40, game.cop.y, 255, 210);
         
        } 
        if(counter3 >= 12 && counter3 < 24) {
            angrycop = game.angrycop.shots[0];
            ctx.drawImage(angrycop, game.cop.x+40, game.cop.y, 255, 210);
        }
    
        if(counter3 >= 24){
            counter3 = 0;
        }    
    }  

    lastCounter++;
    if(lastCounter > 100){
        cancelAnimationFrame(lastAnimation);
    }
    console.log('Последний экран - вы в автозаке');
    // lastScreen(false);
}