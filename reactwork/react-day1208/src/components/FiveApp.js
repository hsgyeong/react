import React from 'react';
import Alert from '@mui/material/Alert'
import img1 from '../image/11.png';
import img2 from '../image/22.jpg';
import img3 from '../image/33.jpg';
import img4 from '../image/44.jpg';
import img5 from '../image/55.jpg';

function FiveApp(props) {

    //이미지를 배열변수에 넣기(src)
    const imgArr=[img1,img2,img3,img4,img5];

     //이미지를 배열변수에 넣기(public)
     const imgArr2=['2','3','4','5'];   //소따옴표 쓰는 이유? 변수가 아니기 때문. 직접적으로 호출

    return (
        <div>
            <h3 className='alert alert-info'>FiveApp입니다</h3>
            <Alert severity="success">배열연습_#5</Alert><br/><br/>
                      <h4>src의 이미지를 배열로 넣어 반복하기</h4><br/>
            {
                imgArr.map((myimg)=>(<img src={myimg} style={{width:'100px'}}/>))
            }
            <br/><br/>
            <h4>public의 이미지를 배열로 넣어 반복하기</h4>  
            {
                //예전방식
                // imgArr2.map((photo)=>(<img src={`../image2/a`+photo+`.jpg`} className='photo'/>))

                //리터럴방식
                imgArr2.map((photo)=>(<img src={`../image2/a${photo}.jpg`} className='photo'/>))    
            }

        </div>
    );
}

export default FiveApp;