import React, { useState } from 'react';
import img1 from '../image/11.png'
import img2 from '../image/22.jpg'
import img3 from '../image/33.jpg'
import img4 from '../image/44.jpg'
import img5 from '../image/55.jpg'

function ThreeApp(props) {

    const[hp1,setHp1]=useState('02');
    const[hp2,setHp2]=useState('1111');
    const[hp3,setHp3]=useState('2222');
    const[photo,setPhoto]=useState(1);
    
    const changeHp1=(e)=>{
        setHp1(e.target.value)
    }

    const changeHp2=(e)=>{
        setHp2(e.target.value)
    }

    const changeHp3=(e)=>{
        setHp3(e.target.value)
    }

    const changePhoto=(e)=>{
        setPhoto(Number(e.target.value))

    }

    return (
        <div>
            <h3  className='alert alert-info'>ThreeApp입니다_문제1</h3>
            <div  className='d-inline-flex' style={{height:'40px'}}>
                <select style={{width:'100px'}}onKeyUp={changeHp1}>
                <option value='02' defaultChecked>02</option>
                <option value='010'>010</option>
                <option value='011'>011</option>
                <option value='016'>016</option>
                <option value='018'>018</option>
                </select>
                &nbsp;<b>-</b>&nbsp;
                <input type='text' maxLength='4' className='form-contrl' style={{width:'100px'}}
                defaultValue={hp2} onKeyUp={changeHp2}/>  
                &nbsp; <b>-</b>&nbsp;
                <input type='text' maxLength='4' className='form-contrl' style={{width:'100px'}}
                defaultValue={hp3} onKeyUp={changeHp3}/>
                <br/><br/>
                <b style={{marginLeft:'50px'}}>이미지선택</b>&nbsp;&nbsp;&nbsp;
                <select className='form-control' onChange={changePhoto} style={{width:'100px'}}>
                    <option value='1'>이미지1</option>
                    <option value='2'>이미지2</option>
                    <option value='3'>이미지3</option>
                    <option value='4'>이미지4</option>
                    <option value='5'>이미지5</option>
                </select>
            </div>
            <br/><br/>
            <h1>{hp1}&nbsp;-&nbsp;{hp2}&nbsp;-&nbsp;{hp3}</h1>
            <img src={photo===1?img1:photo===2?img2:photo===3?img3:photo===4?img4:img5} style={{width:'400px'}}/>
        </div>
        
    );
}

export default ThreeApp;