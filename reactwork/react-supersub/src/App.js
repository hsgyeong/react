import logo from './logo.svg';
import './App.css';
import OneApp from './components/OneApp';
import TwoApp from './components/TwoApp';
import { useState } from 'react';

function App() {

  const [idx,setIdx]=useState(1);
  const selectComponent=(e)=>{
    setIdx(Number(e.target.value));

  }

  return (
    <div className="App">
      <div style={{fontSize:'20px'}}>
      <label>
        <input type='radio' name='compo' defaultValue='1'  
        onClick={selectComponent}/>OneApp
      </label>&nbsp;&nbsp;
      <label>
        <input type='radio' name='compo' defaultValue='2'  defaultChecked
        onClick={selectComponent}/>TwoApp
      </label>&nbsp;
      </div>
      <hr/>
      {idx===1?<OneApp/>:<TwoApp/>}
    </div>
  );
}

export default App;
