import React, { useState } from 'react';

function ThreeApp(props) {

    const [boards, setBoards]=useState([

        {
            no:1,
            writer: '김도리',
            subject:'도리야 산책가자',
            photo:'1'

        },
        {
            no:2,
            writer: '초롱이',
            subject:'초롱이 귀여워',
            photo:'2'

        },
        {
            no:3,
            writer: '춘식이',
            subject:'도도한 춘식',
            photo:'3'

        },
        {
            no:4,
            writer: '김치킨',
            subject:'치킨먹고싶다',
            photo:'4'

        }
    ])

    return (

        <div>
             <h3 className='Alert Alert-info'>ThreeApp입니다_객체배열 컴포넌트 배열 안에 출력</h3><br/>

             <table className='table table-bordered' style={{width:'600px'}}>
                <caption align='top'><b>배열 객체 출력</b></caption>
                <thead>
                    <tr>
                        <th width='60'>번호</th>
                        <th width='100'>사진</th>
                        <th width='260'>제목</th>
                        <th width='100'>작성자</th>
                        
                    </tr>
                </thead>

                <tbody>
                    {
                        boards.map((row,index)=>(<tr>
                            <td>{row.no}</td>
                            <td><img src={`../image2/${row.photo}.png`} style={{width:'80px'}}/></td>
                            <td>{row.subject}</td>
                            <td>{row.writer}</td>
                            </tr>))
                    }
                </tbody>
            
            </table>
        </div>
    );
}

export default ThreeApp;
