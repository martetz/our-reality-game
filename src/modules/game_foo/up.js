import gravity from './gravity';

export default function up(game){

    if(game.player.y >= 420 && game.player.y <= 617){
        game.player.y -= 15;
        requestAnimationFrame(up.bind(null, game));
    }
       

    else if (game.player.y < 420){     
        game.player.y = game.player.y;
        cancelAnimationFrame(up);
        gravity(game);
        return;
    }
    return;
}