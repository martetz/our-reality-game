import React from 'react';
import Btn from './Btn';
import Game from './Game';


export default class Nav extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            visibility: 'visible',
        }
        this.clickHandler = this.clickHandler.bind(this);
        this.gameOverScreen = this.gameOverScreen.bind(this);

    }

 

    gameOverScreen(){
        this.props.gameover();
    }

    clickHandler(){
        this.setState({
            visibility: 'hidden',
        })
        Game(this.gameOverScreen);
    }



    render(){
        return (
        <div className='navigation' style={{visibility: this.state.visibility, opacity: this.props.opacity}}>
        <div className="navigation__wrap">
            <div id="inst-1" className='instruction'>
                <div className="instruction__but"></div>
                <div className="instruction__but"> &uarr; </div>
                <div className="instruction__but"></div>
                <div className="instruction__but">&larr;</div>
                <div className="instruction__but">&darr;</div>
                <div className="instruction__but">&rarr;</div>
                <div className="instruction__text">Прыгать</div>
            </div>
    
            <div id="inst-2" className='instruction'>
                <div className="instruction__but"></div>
                <div className="instruction__but"> &uarr; </div>
                <div className="instruction__but"></div>
                <div className="instruction__but">&larr;</div>
                <div className="instruction__but">&darr;</div>
                <div className="instruction__but">&rarr;</div>
                <div className="instruction__text">Подняться</div>
            </div>
        </div>       
        <Btn onClick={this.clickHandler} />
    </div>)
    }
}