import React from 'react';
import { useNavigate } from 'react-router-dom';

function Home(props) {

    const navi = useNavigate();

    return (
        <div>
           <button type='button' className='btn btn-info'
           onClick={()=>{
            navi("/about");
           }}>About</button>&nbsp;&nbsp;&nbsp;
           <button type='button' className='btn btn-danger'
           onClick={()=>{
            navi("/about/감자");
           }}>About</button>&nbsp;&nbsp;&nbsp;
           <button type='button' className='btn btn-success'
           onClick={()=>{
            navi("/pet/1/2");
           }}>About</button>&nbsp;&nbsp;&nbsp;
           <button type='button' className='btn btn-warning'
            onClick={()=>{
                navi("/pet/3/4");
               }}>About</button>
        </div>
    );
}

export default Home;