import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';

function Pet(props) {

    const {pet1,pet2} =useParams();
    const navi = useNavigate();

    return (
        <div>
            <h3>아이들</h3>
            <button type='button' className='btn btn-info'
            onClick={()=>{
                navi(-1);
            }}>이전페이지</button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    {/* parameter값(이미지) 두 개 보낼때 ../ 두 번 사용 */}
            <img src={`../../image/${pet1}.png`} className='img-thumbnail'
            style={{width:'200px',height:'200px'}}/>
            <img src={`../../image/${pet2}.png`} className='img-thumbnail'
            style={{width:'200px',height:'200px'}}/>
        </div>
    );
}

export default Pet;