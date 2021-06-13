import cop_1 from '../pictures/person/cop/cop1_2.svg';
import cop_2 from '../pictures/person/cop/cop2_2.svg';
import cop_3 from '../pictures/person/cop/cop3_3.svg';
import pl_1 from '../pictures/person/kadr1_4.svg';
import pl_2 from '../pictures/person/kadr2_4.svg';
import pl_3 from '../pictures/person/kadr3_4.svg';

import a_cop1 from '../pictures/person/cop/newangry1.svg';
import a_cop2 from '../pictures/person/cop/newangry2.svg';

import draw from './game_foo/draw';
import up from './game_foo/up';


export default function Game(){
  
    let cop1 = new Image();
    cop1.src = cop_1;
    let cop2 = new Image();
    cop2.src = cop_2;
    let cop3 = new Image();
    cop3.src = cop_3;
    
    let player1 = new Image();
    player1.src = pl_1;
    let player2 = new Image();
    player2.src = pl_2;
    let player3 = new Image();
    player3.src = pl_3;
    
    let angrycop1 = new Image();
    angrycop1.src = a_cop1;
    let angrycop2 = new Image();
    angrycop2.src = a_cop2;

   
    let isFallen = false;
     
    const c = document.querySelector('.c');
    const ctx = c.getContext('2d');
    c.width = 1600;
    c.height = 1067;

    let game = {
        player : {
            shots: [player1, player2, player3],
            width: 130,
            height: 190,
            x: 800,
            y: 617
        },
    
        cop: {
            shots: [cop3, cop2, cop1],
            width: 150,
            height: 210,
            x: 400,
             y: 617
        }, 
    
        flowers: {
            beds: [],
            x: c.width,
            y: 717,
        },
    
        angrycop: {
            shots: [angrycop1, angrycop2]
        },
    
        metro: {
            x: c.width,
            y: 404,
        }
    }
    
    game.flowers.beds[0] = {
        x: game.flowers.x,
        y: game.flowers.y
    }

    draw({c, ctx, game});

    window.addEventListener('keydown', (e)=>{
        if(!isFallen){
            if(game.player.y < 617) return;
            if(e.code !== 'ArrowUp') return;
            up(game);
        }  
    });

}