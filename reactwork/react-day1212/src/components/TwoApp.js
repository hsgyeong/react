import React, { useState } from 'react';

function TwoApp(props) {

    //객체처리변수
    const [inputs,setInputs]=useState({
        name:'김수정',
        addr:'서울시 강남구',
        age:20
    });

    //3개의 공통함수
    const changeData=(e)=>{
        console.log("name: "+e.target.name);
        console.log("value: "+e.target.value);

        //name.value값 얻기
        //e.target이 가지고 있는 객체 한 번에 변경하기
        const {name,value}=e.target;     //여기서 name은 input box 안에 있는 name=  <이 name

        //변경
        setInputs({

            ...inputs,        //... > 기존의 멤버값 유지
            [name]:value        // 해당값만 나오고 나머지는 사라짐. 해결은 펼침연산자!
        })

    }

    return (
        <div>
             <h3 className='Alert Alert-info'>TwoApp입니다_state를 객체변수 테스트</h3><br/>

            <h3>이름: <input type='text' name='name' defaultValue={inputs.name}
            onChange={changeData}/></h3><br/>

             <h3>주소: <input type='text' name='addr' defaultValue={inputs.addr}
            onChange={changeData}/></h3><br/>

             <h3>나이: <input type='text' name='age' defaultValue={inputs.age}
              onChange={changeData}/></h3>

            <hr/>
            <h2>이름: {inputs.name}, {inputs['name']}</h2><br/>
            <h2>주소: {inputs.addr}, {inputs['addr']}</h2><br/>
            <h2>나이: {inputs.age}, {inputs['age']}</h2>


        </div>
    );
}

export default TwoApp;