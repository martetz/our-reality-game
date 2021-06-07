import React from 'react';
import Martetz from './modules/Martetz';
import Main from './modules/Main';
import Mobile from './modules/Mobile';



class App extends React.Component{
 
  checkBrowser(){
    if(Martetz.checkBrowserReact()){
      return <Mobile />
    } else {
      return <Main />
    }
  }  
  
  render(){
    return (this.checkBrowser());
  }
}


export default App;
