import React from 'react';
import reload from './game_foo/reload';


export default class LastScreen extends React.Component{
    
    componentDidUpdate(){
        if(this.props.opacity === 1){
            reload();
        } else return;
        // console.log(this.props.opacity)

    }

    render(){
        return <div className='lastscreen' style={{opacity : this.props.opacity}}>
                <h3>Поздравляю, вы в автозаке!</h3>
            </div>
    }
}