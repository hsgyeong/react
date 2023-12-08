import React, { useState } from 'react';
import img1 from '../image/11.png';

function ThirdApp(props) {

    //상태관리를 위한 변수 설정
    const [message,setMessage]=useState('Happy Day');  //!useState가 가장 중요함!

    //enter 이벤트 함수
    const enterEvent=(e)=>{
        if(e.key==='Enter'){    //또는 e.key===13
            setMessage('');
            e.target.value='';
        }
    }

    return (
        <div>
            <h3 className='alert alert-info'>ThirdApp입니다.</h3>
            <h3 style={{color:'orange'}}>{message}</h3>
            <h4>메세지를 입력해주세요</h4>
            <input type='text' style={{width:'400px', fontSize:'2em'}}
            defaultValue={message}
            onChange={(e)=>{
            console.log(e.target.value);
            setMessage(e.target.value);
            {/* 중괄호({})는 변수 불러오는 곳 소괄호()는 function */}
        }}
        
        onKeyUp={enterEvent}
        />
        </div>
    );
}

export default ThirdApp;