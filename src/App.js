import logo from './logo.svg';
import './App.css';
import { Icon } from '@iconify/react';
import { useState } from 'react';

function App() {
  const [value, setValue] = useState(0)
  const [hover, setHover] = useState(undefined)
  return (
    <div className="App">
      <h1>Star Rating</h1>
        <div  style={{display:"flex", justifyContent:"center", alignItems:"center", height:"100vh"}} >     
                {new Array(5).fill(0).map((e,i)=>
                  <Icon 
                      icon="typcn:star" 
                      key={i}
                      width="30"
                      onMouseEnter={()=>{setHover(i+1)}}
                      onMouseLeave={()=>{setHover(undefined)}}
                      onClick={()=>{setValue(i+1)}}
                      color={((value || hover)===i+1)? "orange" : ((value || hover)<i+1)? "grey" : "red"}      
                      />
                      )}
        </div>
    </div>
  );
}

export default App;
