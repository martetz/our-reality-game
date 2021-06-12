import React from 'react';

class Nav extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return <div className='navigation' style={{display: this.props.visibility}}>Navigation</div>
    }
}


export default Nav;