import React, { useState } from 'react';

function WriteForm({onSave}) {

    const [name, setName]=useState('');
    const [blood, setBlood]=useState('');
    const [photo, setPhoto]=useState('');

    //버튼이벤트
    const addDataEvent = ()=>{
        //부모컴포넌트에서 만든 onSave를 호출
        onSave({name,photo,blood});

    }

    return (
        <div>
            <div>
            <b>이름: </b>
            <input type='text' style={{width:'120px'}}
            onChange={(e)=>{
                setName(e.target.value);
            }}/>

            <b style={{marginLeft:'20px'}}>혈액형: </b>
            <select onChange={(e)=>{
                setBlood(e.target.value);
            }}>
                <option>A</option>
                <option>B</option>
                <option>AB</option>
                <option>O</option>
            </select>

            <b style={{marginLeft:'10px'}}>이미지</b>
            <select onChange={(e)=>{
                setPhoto(e.target.value);
            }}>
                {  //1~4까지 map으로 돌리기 1~4
                [...new Array(4)].map((a,idx)=>(<option>{`${idx+1}`}</option>))
                }   
            </select>
                &nbsp;&nbsp;
            <button type='button' className='btn btn-info'
            style={{marginLeft:'10px'}} onClick={addDataEvent}>추가</button>
            </div>
        </div>
    );
}

export default WriteForm;