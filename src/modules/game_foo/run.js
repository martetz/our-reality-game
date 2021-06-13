import pl_fl from '../../pictures/person/plfall3.svg';
import grnd from '../../pictures/elements/ground.png';
let playerfall = new Image();
playerfall.src = pl_fl;

let ground = new Image();
ground.src = grnd;

let counter = 0;
let player;


export default function run(arg, c, ctx, game){
    if(arg){        
        counter++; 
        if(counter >= 0 && counter < 8){
            player = game.player.shots[0];
            ctx.drawImage(player, game.player.x, game.player.y, game.player.width, game.player.height);
        } 
        
        if (counter >= 8 && counter < 16){
            player = game.player.shots[1];
            ctx.drawImage(player, game.player.x, game.player.y, game.player.width, game.player.height);
        } 
        
        if(counter >= 16){
            player = game.player.shots[2];
            ctx.drawImage(player, game.player.x, game.player.y, game.player.width, game.player.height);
            counter = 0;
        }
    } else {
        ctx.drawImage(playerfall, game.player.x, game.player.y, 190, 110);
         game.player.x = 800;  
        game.player.y = c.height - ground.height - 190;    
    }

}