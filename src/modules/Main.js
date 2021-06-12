import React from 'react';
import Loader from './Loader';
import C from './C';
import Nav from './Nav';



export default class Main extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            visibility: 0,
        }
        this.navStartHandler = this.navStartHandler.bind(this);
    }

    navStartHandler(){
        this.setState({
            visibility: 1,
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
                <C nav={this.navStartHandler}/>
                <Nav visibility={this.state.visibility}/>
            </div>)
    }
}