import bgrnd from '../pictures/bg/bg_var1.png';
import grnd from '../pictures/elements/ground2.png';
import cp from '../pictures/person/cop/cop_1screen.svg';
import pckt from '../pictures/person/picket1.svg';
import pckt2 from '../pictures/person/picket_eye1.svg';

let bg = new Image();
bg.src = bgrnd;
let ground = new Image();
ground.src = grnd;
let cop = new Image();
cop.src = cp;
let picket = new Image();
picket.src = pckt;
let picket2 = new Image();
picket2.src = pckt2;

let counter = 0;
let i = 0;


export default function helloScreen(){
    const c = document.querySelector('.c');
    const ctx = c.getContext('2d');
    c.width = 1600;
    c.height = 1067;

    let text = `<Ваша акция`;
    let text2 = `не согласована!>`;
    let textArr = text.split('');
    let text2Arr = text2.split('');
    let x = 120;
    let y = 180;
    let x2 = 140;
    let y2 = 300;

    let textAnimation = requestAnimationFrame(helloScreen);

    ctx.clearRect(0, 0, c.height, c.width);
    ctx.drawImage(bg, -1400, -1900, 3000, 3000);
    ctx.drawImage(ground, 0, c.height - ground.height);
    ctx.drawImage(picket, 900, 150, 400, 700);
    ctx.drawImage(cop, 20, 400, 500, 900);
    ctx.font = `70px Pangolin`;
    ctx.strokeStyle = `white`;
    ctx.lineWidth = 4;
    counter++;
  

    if(i >= 3){
        cancelAnimationFrame(textAnimation);
        console.log('Включаем навигацию');
    }

    if(counter > 40){
        textArr.forEach((lit)=>{
            ctx.strokeText(lit, x, y);
            ctx.fillText(lit, x, y);
            x += 50;
        })
    } 
    
    if(counter > 60){
        text2Arr.forEach((lit)=>{
            ctx.strokeText(lit, x2, y2);
            ctx.fillText(lit, x2, y2);
            x2 += 50;
            ctx.drawImage(picket, 900, 150, 400, 700);
            picket = picket2;                   
        })
    }

    if(counter > 100){      
        counter = 0;
        i += 1;
    }

}