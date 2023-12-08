import React, { useState } from 'react';
import img2 from '../image/11.png';

function FourthApp(props) {

    const [name,setName]=useState('김도리');
    const [age,setAge]=useState(2);

    return (
        <div>
            <h3 className='alert alert-info'>FourthApp입니다.
           <img src={img2} className='img-thumbnail' style={{width:'300px', marginLeft:'20px'}}/></h3>
           <b style={{fontSize:'30px'}}>이름:{name} <span style={{marginLeft:'20px'}}>나이:{age}세</span></b>
           <br/><br/>
           <button type='button' className='btn btn-info'
           onClick={()=>{
            setName("홍성경");
            setAge(26);
           }}>값변경</button>
           <button type='button' className='btn btn-success'
           style={{marginLeft:'20px'}}
           onClick={()=>{
            setName('');
            setAge(0);
           }}>초기화</button>
        </div>
    );
}

export default FourthApp;