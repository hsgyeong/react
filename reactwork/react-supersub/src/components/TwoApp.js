import React, { useState } from 'react';
import Alert from '@mui/material/Alert';
import ElectricBikeSharpIcon from '@mui/icons-material/ElectricBikeSharp';
import BorderColorIcon from '@mui/icons-material/BorderColor';
import Face2SharpIcon from '@mui/icons-material/Face2Sharp';
import TwoSubApp from './TwoSubApp';
import TwoSubApp2 from './TwoSubApp2';

function TwoApp(props) {

    const [color,setColor]=useState('skyblue');
    const [message,setMessage]=useState('오늘은 수요일');
    const [photo,setPhoto]=useState('1');

    //app2
    const [likeColor,setLikeColor]=useState(['pink','blue','green']);

    //3개의 이벤트를 만들어 전달
    const changeMessage =(msg)=>{
        setMessage(msg);
    }

    const changeColor =(color)=>{
        setColor(color)
    }

    const changePhoto =(photo)=>{
        setPhoto(photo)
    }

    //sub2_색상추가
    const addColorEvent=(co)=>{
        setLikeColor(likeColor.concat(co))
    }

    // 동그란 색상 더블클릭시 삭제
    const deleteColor =(idx)=>{
       setLikeColor(likeColor.filter((item,i)=>(i!==idx)));
    }

    return (
        <div>
            <alert severity="success">TwoApp입니다.<ElectricBikeSharpIcon/><Face2SharpIcon/></alert>
            <br/>
            <h1 style={{color:color}}><b>{message}</b></h1>
            <img src={`../image/${photo}.png`} style={{width:'300px'}}/>
            <br/>
            {
                 likeColor.map((co, idx) => (<div className='box' style={{ backgroundColor: co }} key={idx}
                 onDoubleClick={()=>{
                    deleteColor(idx);
                 }}>{idx}</div>))
            }


            <br/>
            <TwoSubApp onMessage={changeMessage} onColor={changeColor} onPhoto={changePhoto}/>
            <br/>
            <TwoSubApp2 onAddColor={addColorEvent} onDeleteColor={deleteColor}/>
        </div>
    );
}

export default TwoApp;