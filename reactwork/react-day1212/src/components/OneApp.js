import React, { useEffect, useState } from 'react';

function OneApp(props) {

    const [name,setName] = useState('김수정');
    const [addr,setAddr] = useState('수원시');

    //useEffect: 값 입력시 계속해서 렌더링되며 호출될 수도 있고, 생성자처럼 딱 한 번 호출될 수도 있음
    
    /*useEffect(()=>{
        console.log("state변수가 값 변경시마다 호출");
    });*/

    /*useEffect(()=>{
        console.log("처음랜더링시 한번만 호출...생성자처럼..");
    },[]);*/

    useEffect(()=>{
        console.log("이름변경시에만 호출..");
    },[name]);


    return (
        <div>
            <h3 className='alert alert-danger'>OneApp입니다</h3>
            <h3>이름: <input type='text' className='form-control' style={{width:'200px'}} defaultValue={name}
            onChange={(e)=>{
                setName(e.target.value);
            }}/></h3>
            <h3>주소: <input type='text' className='form-control' style={{width:'200px'}} defaultValue={addr}
            onChange={(e)=>{
                setAddr(e.target.value);
            }}/></h3>
            <hr/>
            <h2>이름: {name}</h2>
            <h2>주소: {addr}</h2>
        </div>
    );
}

export default OneApp;