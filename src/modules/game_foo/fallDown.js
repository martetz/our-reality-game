import grnd from '../../pictures/elements/ground.png';
import flo from '../../pictures/elements/bed.svg';

let ground = new Image();
ground.src = grnd;

let flowers = new Image();
flowers.src = flo;

let keyup = true;


export default function fallDown(i, c, ctx, game){
    game.cop.x += 2;
    game.flowers.beds[i].x += 15;

    if(i > 0){
        game.flowers.beds[i-1].x += 15;
    }
                
    if(game.flowers.beds[i+1]){
        ctx.drawImage(flowers, game.flowers.beds[i+1].x, c.height - ground.height - 90, 90, 90);
    }
    game.player.y = c.height - ground.height - 90; 

    window.addEventListener('keydown', (e)=>{        
        if(e.code === 'ArrowRight' && game.player.x - game.player.width < game.flowers.beds[i].x
        && game.player.x - game.player.width > game.cop.x && keyup){
            game.flowers.beds[i].x = 720;
            keyup = false;
            window.addEventListener('keyup', (e)=>{
                if(e.code === 'ArrowRight'){
                    keyup = true;
                }
            })
        }
    })
    return false;
}