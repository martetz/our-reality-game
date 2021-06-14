import React from 'react';

export default class LastScreen extends React.Component{
    render(){
        return <div className='navigation' style={{opacity : this.props.opacity}}>Поздравляю, вы в автозаке!</div>
    }
}