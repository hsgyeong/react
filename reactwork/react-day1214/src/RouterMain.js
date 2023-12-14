import React from 'react';
import Menu from './components/Menu';
import { Route, Routes } from 'react-router-dom';
import { About, Home, Pet } from './pages';   //index를 만들어서 가독성이 좋게 함
import mainimg from './image2/1.png';


function RouterMain(props) {
    return (
        <div>
            {/* 모든페이지에서 공통으로 포함되는 컴포넌트나 이미지 */}
            <h1 className='alert alert-info'>React Router 공부하기</h1>
            <Menu/>
            <img src={mainimg} className='main_photo'/>
            <hr className='line'/>

            <div className='main_comp'>
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/about' element={<About/>}/>
                <Route path='/about/:name' element={<About/>}/>
                                {/*name을 parameter로 넘기겠다는 것 */}
                <Route path='/login/*' element={
                    <div>
                        <h1>아직 로그인 기능 구현 전 입니다</h1>
                        <img src='../image/1.png'/>
                        <h3>오늘 점심 이거 어때?</h3>
                    </div>

                }/>

                {/* 그 이외 mapping이면 */}
                <Route path='*' element={
                    <h1>잘못된 주소입니다.</h1>
                }/>

                <Route path='/pet/:pet1/:pet2' element={<Pet/>}/>
            </Routes>
            </div>
        </div>
    );
}

export default RouterMain;