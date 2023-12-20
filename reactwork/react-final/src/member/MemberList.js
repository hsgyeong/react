import axios from 'axios';
import React, { useEffect, useState } from 'react';


function MemberList(props) {

  
    //백엔드에서 받아올 리스트 데이터 변수
    const [memberList, setMemberList] = useState([]);

    //데이터 가져오는 함수
    const getList =()=>{

    let url="http://localhost:9000/member/list";
    axios.get(url)
    .then(res=>{
        //스프링으로부터 받아온 list를 memberList에 넣기
        setMemberList(res.data);
        console.log("len: "+res.data.length);
    })

}

    const onDelete=(num)=>{
        const url="http://localhost:9000/member/delete?num="+num;

        axios.delete(url)
        .then(res=>{
            alert("삭제성공");
            getList();
        })
    }

    useEffect(()=>{
        getList();
    },[]);

   
    return (
      <div style={{marginLeft:'100px'}}>
        <table className='table table-bordered' style={{width:'800px'}}>
            <caption aline='top'><b>전체회원명단</b></caption>
            <thead>
                <tr className='table-info'>
                    <th width='60'>번호</th>
                    <th width='120'>회원명</th>
                    <th width='150'>아이디</th>
                    <th width='180'>핸드폰</th>
                    <th width='200'>이메일</th>
                </tr>
            </thead>
            {
                memberList.map((row,idx)=>(
                    <tbody>
                        <tr>
                            <td>{idx+1}</td>
                            <td>{row.name}</td>
                            <td>{row.id}</td>
                            <td>{row.hp}</td>
                            <td>{row.email}</td>
                            <td>
                                <button type='button' className='btn btn-danger'
                                onClick={()=>onDelete(row.num)}>삭제</button>
                            </td>
                        </tr>
                    </tbody>
                ))
            }
        </table>

      </div>
    );
}

export default MemberList;