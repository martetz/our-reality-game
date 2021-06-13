import flo from '../../pictures/elements/bed.svg';
import metroimg from '../../pictures/elements/metro.svg';
import grnd from '../../pictures/elements/ground.png';

import fallDown from './fallDown';
import toCountGap from './toCountGap';


let ground = new Image();
ground.src = grnd;

let metro = new Image();
metro.src = metroimg;

let flowers = new Image();
flowers.src = flo;

export default function move(c, ctx, game, mainCounter){
    for(let i = 0; i<game.flowers.beds.length; i++){

        if(mainCounter > 3150){
            ctx.drawImage(metro, game.metro.x, game.metro.y, 400, 500);
            game.metro.x -= 0.4;
            if(game.metro.x === c.width-400){
                game.metro.x +=0.4;
            }
        } else {
            ctx.drawImage(flowers, game.flowers.beds[i].x, game.flowers.beds[i].y, 90, 90);
            game.flowers.beds[i].x -= 15;
        
            if(game.player.x + 130 >= game.flowers.beds[i].x 
                && game.player.y + 190 > game.flowers.beds[i].y
                && game.player.x - 70 < game.flowers.beds[i].x){              
                return fallDown(i, c, ctx, game);           
            }
        }       

             
        if(game.flowers.beds[i].x === 1045){ 
                if(mainCounter > 3000){
                    game.flowers.beds.push({});
                } else {
                    game.flowers.beds.push({
                        x: c.width + toCountGap(),
                        y: c.height - ground.height - 90
                    })
                }    
        }      
    } return true;
}


