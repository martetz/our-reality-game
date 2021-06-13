import cr_cop from '../../pictures/person/cop/cryingcop.svg';
import cr_cop2 from '../../pictures/person/cop/cryingcop2.svg';

let counter2 = 0;
let cop;

let cryingcop1 = new Image();
cryingcop1.src = cr_cop;
let cryingcop2 = new Image();
cryingcop2.src = cr_cop2;


export default function swat(arg, ctx, game){    
    if(arg){
        counter2++; 
            if(counter2 >= 0 && counter2 < 7){
                cop = game.cop.shots[0];
                ctx.drawImage(cop, game.cop.x, game.cop.y, game.cop.width, game.cop.height);
            } 

            if(counter2 >= 7 && counter2 < 14) {
                cop = game.cop.shots[1];
                ctx.drawImage(cop, game.cop.x, game.cop.y, game.cop.width, game.cop.height);
            }   

            if(counter2 >= 14){
                cop = game.cop.shots[2];
                ctx.drawImage(cop, game.cop.x, game.cop.y, game.cop.width, game.cop.height);
                counter2 = 0;
            }

        } else {
            ctx.drawImage(cryingcop1, game.cop.x, game.cop.y, game.cop.width, game.cop.height);
            ctx.drawImage(cryingcop2, game.cop.x, game.cop.y, game.cop.width, game.cop.height);
        }    
    }