import React from 'react';
import HelloScreen from './HelloScreen';

class C extends React.Component{ 
    constructor(props){
        super(props);
        this.helloScreenOverFoo = this.helloScreenOverFoo.bind(this);
        // this.gameOverScreen = this.gameOverScreen.bind(this);
    }

    helloScreenOverFoo(){
       this.props.nav();
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