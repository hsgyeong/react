import React, { useState } from 'react';

function OneApp(props) {

    const[number,setNumber]=useState(0);

    const numIncre=()=>{
     
        if(number>9)          //코드를 읽는 순서가 좌>우 가 먼저, 그 다음 상>하로 읽기 때문에 setNumber를 if문 위에 올려 놓으면 실행이 먼저 되고, 숫자가 증가함
        {alert('최대값은 10입니다')   //그렇기 때문에 setNumber를 return 아래에 내려야 실행이 나중에 됨
        return;}
        setNumber(number+1);
    }

    const numDecre=()=>{
        if(number<1)
        {alert('최소값은 0입니다')
        return;}
        setNumber(number-1);
    }

    return (
        <div className='alert alert-info'>
            <h3>OneApp입니다</h3>
            <div className='number'>
            {number}
            </div>

            <button type='button' className='btn btn-info' onClick={numIncre}>증가</button>
            <button type='button' className='btn btn-danger'
            style={{marginLeft:'10px'}} onClick={numDecre}>감소</button>
        </div>
    );
}

export default OneApp;
