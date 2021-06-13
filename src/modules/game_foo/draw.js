import bgrnd from '../../pictures/bg/bg_var1.png';
import grnd from '../../pictures/elements/ground.png';

import run from './run';
import move from './move';
import swat from './swat';
import defeat from './defeat';
import win from './win';

let bg = new Image();
bg.src = bgrnd;
let ground = new Image();
ground.src = grnd;

let mainCounter = 0;


export default function draw({c, ctx, game}){
    let animation = requestAnimationFrame(draw.bind(null, {c, ctx, mainCounter, game}));
    ctx.clearRect(0, 0, c.width, c.height);
    ctx.drawImage(bg, 0, -150);  
    ctx.drawImage(ground, 0, c.height - ground.height);
   
    mainCounter++;
        run(move(c, ctx, game, mainCounter), c, ctx, game);
        swat(true, ctx, game);
    
    if(game.player.x - game.player.width < game.cop.x){ 
        cancelAnimationFrame(animation);
        defeat({c, ctx, game});

    } else if(game.metro.x && game.metro.x <= 1250){
        cancelAnimationFrame(animation);
        win({c, ctx, game});
    }

}