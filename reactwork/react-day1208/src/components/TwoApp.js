import React, { useState } from 'react';

function TwoApp(props) {

    const[photo,setPhoto]=useState('../image/22.jpg');
    const changePhoto=(e)=>{
        setPhoto(e.target.value)
    }

    return (
        <div className='alert alert-info'>
            <h3>TwoApp입니다</h3>
            <div>
            <b>이미지 선택:</b>&nbsp;&nbsp;&nbsp;
            <label>
                <input type='radio' name='photo' value='../image/11.png' 
                onClick={changePhoto}/>이미지1
            </label>
            &nbsp;&nbsp;&nbsp;
            <label>
                <input type='radio' name='photo' defaultChecked value='../image/22.jpg'
                  onClick={changePhoto}/>이미지2
            </label>
            &nbsp;&nbsp;&nbsp;
            <label>
                <input type='radio' name='photo' value='../image/33.jpg'
                  onClick={changePhoto}/>이미지3
            </label>
            &nbsp;&nbsp;&nbsp;
            <label>
                <input type='radio' name='photo' value='../image/44.jpg'
                  onClick={changePhoto}/>이미지4
            </label>
            &nbsp;&nbsp;&nbsp;
            <label>
                <input type='radio' name='photo' value='../image/55.jpg'
                  onClick={changePhoto}/>이미지5
            </label>
            &nbsp;&nbsp;&nbsp;
            </div>
            <br/>
           <img src={photo} style={{width:'400px'}}/> 
        </div>
    );
}

export default TwoApp;