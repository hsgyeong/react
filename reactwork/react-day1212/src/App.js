import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import FiveApp from './components/FiveApp';
import SixApp from './components/SixApp';
import OneApp from './components/OneApp';
import TwoApp from './components/TwoApp';
import ThreeApp from './components/ThreeApp';
import FourApp from './components/FourApp';
import SevenApp from './components/SevenApp';

function App() {

  const [idx,setIdx] = useState(1);

  const selectComp = (e) =>{

    setIdx(Number(e.target.value));
  }

  return (
    <div className="App">
      <div style={{fontSize:'20px'}}>
      <label>
        <input type='radio' name='Comp'
        defaultValue='1' onClick={selectComp}/>OneApp
      </label> &nbsp;
      <label>
        <input type='radio' name='Comp'
         defaultValue='2'onClick={selectComp}/>TwoApp
      </label> &nbsp;
      <label>
        <input type='radio' name='Comp'
         defaultValue='3' onClick={selectComp}/>ThreeApp
      </label> &nbsp;
      <label>
        <input type='radio' name='Comp'  defaultChecked
         defaultValue='4' onClick={selectComp}/>FourApp
      </label> &nbsp;
      <label>
        <input type='radio' name='Comp'
         defaultValue='5' onClick={selectComp}/>FiveApp
      </label> &nbsp;
      <label>
        <input type='radio' name='Comp'
         defaultValue='6' onClick={selectComp}/>SixApp
      </label> &nbsp;
      <label>
        <input type='radio' name='Comp'
         defaultValue='7' onClick={selectComp}/>SevenApp
      </label> &nbsp;
      <label>
        <input type='radio' name='Comp'
         defaultValue='8' onClick={selectComp}/>EightApp
      </label> &nbsp;
      </div>

      <hr/>
      {idx===1?<OneApp/>:idx===2?<TwoApp/>:idx===3?<ThreeApp/>:idx===4?<FourApp/>:idx===5?<FiveApp/>:idx===6?<SixApp/>:<SevenApp/>}
    </div>
  );
}

export default App;
