import React from 'react';
import HelloScreen from './HelloScreen';


class C extends React.Component{ 
    constructor(props){
        super(props);
        this.helloScreenOverFoo = this.helloScreenOverFoo.bind(this);
    }

    helloScreenOverFoo(){
       this.props.nav();
       //Должна зарабоатать основная функция игры
    }

    componentDidMount(){ 
        HelloScreen(this.helloScreenOverFoo);
    }

    render(){
        return (
            <canvas className='c'></canvas>
        )
    }
}

export default C;