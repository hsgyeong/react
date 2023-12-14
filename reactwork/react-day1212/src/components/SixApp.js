import React, { useState } from 'react';
import SixSubApp from './SixSubApp';
import SixSubApp2 from './SixSubApp2';
import SixSubApp3 from './SixSubApp3';

function SixApp(props) {

    const [number,setNumber]=useState(10);

    //증가
    const numberIncre=()=>{
        setNumber(number+1);
    }

    //감소
    const numberDecre=()=>{
        setNumber(number-1);
    }

    return (

        //자식은 부모에 있는 값을 읽기만 가능함. 데이터를 읽어와서 출력하는 것이 자식의 역할
        <div>
             <h3 className='Alert Alert-info'>SixApp입니다_부모자식간 컴포넌트통신</h3>
             <SixSubApp name='진평' age='23'/>
             <SixSubApp name='희찬' age='25'/>
             <SixSubApp name='형준' age='24'/>
            {/* props라는 변수로 name, age전달 */}
             {/* 부모만 App.js가 받고, 자식은 부모가 받음 */}
             <br/><br/>
             <SixSubApp2 flower="수국" price="25000" linecolor="purple" />
             <SixSubApp2 flower="해바라기" price="35000" linecolor="yellow" />
             <SixSubApp2 flower="무궁화" price="30000"linecolor="pink" />
             <br/><br/>
             <div className='number' onChange={(e)=>setNumber.number}>{number}</div>
             <SixSubApp3 incre={numberIncre} decre={numberDecre}/>
        </div>
    );
}

export default SixApp;