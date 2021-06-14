import React from 'react';
import Loader from './Loader';
import C from './C';
import Nav from './Nav';
import LastScreen from './LastScreen';



export default class Main extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            opacityNav: 0,
            opacityLastScreen: 0,
        }
        this.navStartHandler = this.navStartHandler.bind(this);
        this.lastScreenHandler = this.lastScreenHandler.bind(this);
    }

    navStartHandler(){
        this.setState({
            opacityNav: 1,
        })
    }

    lastScreenHandler(){
        this.setState({
            opacityLastScreen: 1,
        })
    }

    render(){
        let body = document.querySelector('body');
        body.style.backgroundColor = 'tomato';
        body.style.letterSpacing = '0.2em';
        body.style.overflowY = 'hidden';
        body.style.fontFemily = 'Pangolin';

        return (
            <div className='main'>
                <Loader />
                <C nav={this.navStartHandler} />
                <Nav opacity={this.state.opacityNav} gameover={this.lastScreenHandler}/>
                <LastScreen opacity={this.state.opacityLastScreen}/>
            </div>)
    }
}