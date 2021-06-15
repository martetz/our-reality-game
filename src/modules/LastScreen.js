import React from 'react';

export default class LastScreen extends React.Component{
    render(){
        return <div className='lastscreen' style={{opacity : this.props.opacity}}>
                <h3>Поздравляю, вы в автозаке!</h3>
            </div>
    }
}