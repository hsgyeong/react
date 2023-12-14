import React from 'react';

function TwoSubApp(props) {
    return (
        <div style={{marginLeft:'100px'}}>
            <br/><br/><br/>
            <b>메세지</b>
            <input type='text' className='form-control'
            style={{width:'400px', margin:'auto'}}
            onChange={(e)=>{
                props.onMessage(e.target.value);
            }}/> 
            <br/>
            <b>글자색 변경</b>&nbsp;&nbsp;&nbsp;
            <input type='color' defaultValue='green' className='form-control'
            style={{width:'400px', margin:'auto'}} 
            onChange={(e)=>{
                props.onColor(e.target.value);
            }}/>
            <br/>
             <b>이미지변경</b>
             <select className='form-control'  style={{width:'400px', margin:'auto'}} onChange={(e)=>{
                props.onPhoto(e.target.value);
             }}>
            { 
            [...new Array(4)].map((a,idx)=>(<option>{`${idx+1}`}</option>))
            
            }
             </select>
        </div>
    );
}

export default TwoSubApp;