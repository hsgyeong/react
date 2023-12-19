import React from 'react';
import mainimg1 from '../image/1.png'
import mainimg2 from '../image/2.png'
import mainimg3 from '../image/3.png'
import mainimg4 from '../image/4.png'

function Main(props) {
    return (
        <div>
            <img src={mainimg1} className='main' width='300' height='300'/>
            <img src={mainimg2} className='main' width='300' height='300'/>
            <br/><br/>
            <img src={mainimg3} className='main' width='300' height='300'/>
            <img src={mainimg4} className='main' width='300' height='300'/>

        </div>
    );
}

export default Main;