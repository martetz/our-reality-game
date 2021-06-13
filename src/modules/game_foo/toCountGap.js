export default function toCountGap(){
    let rand = Math.floor(Math.random()*10);
    
    if(rand < 3){
         return 600-450;
    } 
    
    if(rand >= 3 && rand <6){
        return 600+165;
    }

    if(rand >=6) {
        return 600;
    }
}