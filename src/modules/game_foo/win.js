import grnd from '../../pictures/elements/ground.png';
import bgrnd from '../../pictures/bg/bg_var1.png';
import metro_img from '../../pictures/elements/metro.svg';

import run from './run';
import swat from './swat';
import reload from './reload';

let ground = new Image();
ground.src = grnd;
let bg = new Image();
bg.src = bgrnd;

let metro = new Image();
metro.src = metro_img;



export default function win({c, ctx, game}){
    let winAnimation = requestAnimationFrame(win.bind(null, {c, ctx, game}));
    ctx.clearRect(0, 0, c.width, c.height);
    ctx.drawImage(bg, 0, -150);
    ctx.drawImage(ground, 0, c.height - ground.height);
    ctx.drawImage(metro, game.metro.x, game.metro.y, 400, 500);
    run(true, c, ctx, game);
    game.player.x += 5;
    swat(false, ctx, game);
    ctx.fillStyle = "#000";
    ctx.strokeStyle = "#000";
    ctx.font = "50pt Pangolin";
    ctx.fillText('Забрало запотело', game.cop.x, game.cop.y - 50);
    if(game.player.x > c.width){
        cancelAnimationFrame(winAnimation);
        reload();
    }
}