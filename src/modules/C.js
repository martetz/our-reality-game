import React from 'react';
import helloScreen from './HelloScreen';
import Nav from './Nav';

class C extends React.Component{ 
    constructor(props){
        super(props);
    }  
    
    componentDidMount(){ 
        helloScreen();
    }

    render(){
        return (
            <canvas className='c'></canvas>
        )
    }
}

export default C;