import React, { useState } from 'react';
import Alert from '@mui/material/Alert';
import RowItemApp from './RowItemApp';
import WriteForm from './WriteForm';

function OneApp(props) {

    const [board,setBoard]=useState([

        {
            name:'김도리',
            photo:'1',
            blood:'O',
            today:new Date()

        },

        {
            name:'이초롱',
            photo:'2',
            blood:'A',
            today:new Date()

        },

        {
            name:'서춘식',
            photo:'3',
            blood:'AB',
            today:new Date()

        },

        {
            name:'김꼬꼬',
            photo:'4',
            blood:'B',
            today:new Date()

        }
    ]);

    //데이터 추가 함수 이벤트
    //board를 바꾸면 렌더링이 되면서 추가된다
    const datasave =(data)=>{
        setBoard(board.concat({
            /*
            name:data.name,
            photo:data.photo,
            blood:data.blood,
            */

            ...data,
            today:new Date()
        }))
    }

    //삭제 이벤트       
                    //보내는 값
    const dataDelete=(idx)=>{
                            //보내는 값이 아닌 것들만 다시 취합. 재랜더링
        setBoard(board.filter((item,i)=>(i!==idx)));
                            
    }


    return(
        <div style={{marginLeft:'100px'}}>
             <Alert severity="info">OneApp_테이블 만들기(부모 자식간의 통신)</Alert>

             <WriteForm onSave={datasave}/>

            <table className='table table-bordered' style={{width:'500px'}}>
            <caption align='top'><b>Board배열 출력</b></caption>
            <thead>
                <tr className='table-success'>
                <th width='100'>이름</th>
                <th width='120'>사진</th>
                <th width='80'>혈액형</th>
                <th width='160'>날짜</th>
                <th width='70'>삭제</th>
                </tr>
            </thead>

            <tbody>
                {
                    // 데이터 개수만큼 호출됨.. 출력은 아직 안 됨.. 출력은 Row Item        //만든 dataDelete를 onDelete로 보내는 것
                    board.map((row,index)=>(<RowItemApp row={row} idx={index} onDelete={dataDelete}/>))

                }
            </tbody>
            </table>
        </div>
    );
}

export default OneApp;