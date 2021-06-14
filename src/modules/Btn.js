import React from 'react';

export default class Btn extends React.Component{
    componentDidMount(){
        window.addEventListener('keydown', (e)=>{
            if(e.key === 'Enter'){
             let btn = document.querySelector('.btn');
             if(!btn) return;
             btn.style.boxShadow = '0px 0px 10px 5px red';
             setTimeout(()=>{
                this.props.onClick();
                btn.remove();
             }, 300);
            };
         })
    }

    render(){
        return <button onClick={this.props.onClick} className="btn">Играть!</button>
    }
}