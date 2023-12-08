import React, { useRef, useState } from 'react';

function FifthApp(props) {

    const [name, setName]=useState('');
    const [java, setJava]=useState('');
    const [react, setReact]=useState('');
    const [total, setTotal]=useState('');
    const [average, setAverage]=useState('');
    const javaInput = useRef(null);
    const reactInput = useRef(null);

    const enterEvent=(e, nextInput, deleteInput)=>{
        if(e.key==='Enter'){
           // e.target.value='';
           
            e.preventDefault();
            if(nextInput){
                nextInput.current.focus();
            }else{
                document.getElementById('resultbtn').focus();
            }

            if(deleteInput){
                deleteInput('');
            }
        }
    }

    return ( //input박스에 입력하면 바로 결과물이 옆에 나오게. 버튼클릭시 결과확인(총점,평균. 입력값 초기화)
        <div>
            <h2 className='alert alert-danger'>FifthApp입니다.</h2>
            <div className='inp'>
            이름:  <input type='text'style={{width:'100px'}}
            defaultValue={name}
            onChange={(e)=>{
                setName(e.target.value);}}/>
            <span style={{marginLeft:'10px'}} >{name}</span><br/><br/>
            java점수:   <input ref={javaInput} type='text'style={{width:'100px'}}
              defaultValue={java}
              onChange={(e)=>{
                  setJava(e.target.value);}}/>
            <span style={{marginLeft:'10px'}}>{java}</span><br/><br/>
            react점수:   <input ref={reactInput} type='text'style={{width:'100px'}}
              defaultValue={react}
              onChange={(e)=>{
                  setReact(e.target.value);}}/>
            <span style={{marginLeft:'10px'}}>{react}</span><br/><br/>
            <button id='resultbtn' type='button' className='btn btn-outline-info'
            onClick={()=>{
                setTotal(Number(java)+Number(react));  //숫자로 변환시 parseInt 가능, Number 가능
               // setAverage(total/2); 
                setAverage((parseInt(java)+Number(react))/2);
            }}>
            결과보기
            </button>

            </div>
            <div className='result'>
                이름: {name} <br/><br/>
                java점수: {java} <br/><br/>
                react점수: {react} <br/><br/>
                합계:{total}<br/><br/>
                평균:{average}
                
            </div>
        </div>
    );
}