export default function gravity(game){
    if(game.player.y < 617){
        requestAnimationFrame(gravity.bind(null, game));
        game.player.y += 15;
    } else {
        game.player.y = game.player.y;
        cancelAnimationFrame(gravity);
        return;
    }
}
