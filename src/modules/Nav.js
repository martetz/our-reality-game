import React from 'react';
import Btn from './Btn';
import Game from './Game';


class Nav extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            display: 'flex',
        }
        this.clickHandler = this.clickHandler.bind(this);
    }

    clickHandler(){
        this.setState({
            display: 'none',
        })
        Game();
    }

    render(){
        return (
        <div className='navigation' style={{opacity: this.props.visibility, display: this.state.display}}>
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


export default Nav;