import React from 'react';
import './Mystyle.css';
import img1 from '../image/11.png';
import img2 from '../image/22.png';
function FirstApp(props) {

    //이 위치에 변수 만들 수 있음
    const styleImg1={
        width:'500px',
        border: '5px solid salmon',
        marginTop:'20px'
    }

    return (
        <div>
            <h2 className='line2'>FirstApp Component</h2>
            <div style={{fontSize:'25px',marginLeft:'250px',backgroundColor:'lavender'}}>
            안녕 오늘은 목요일이야
            빨리 금요일 되었으면 좋겠다
            </div>
            {/* { src의 이미지는 import } */}
            <img src={img1} style={styleImg1}/>
            <img src={img2} style={{width:'400px', border:'3px dotted skyblue', marginLeft:'50px'}}/>

            {/* {public image는 직접 호출 가능} */}
            <h3>public image</h3>
            <img src='../image2/55.png' style={{width:'400px', height:'400px',border:'4px groove lightgreen'}}/>
        </div>
    );
}

export default FirstApp;