import React from 'react';
import Alert from '@mui/material/Alert';
import BalanceIcon from '@mui/icons-material/Balance';
import { NoBackpackSharp } from '@mui/icons-material';

function FourApp(props) {

    //배열변수선언
    const names=['영환','성경','호석','민규','성신','형준'];
    
    //반복문을 변수에 저장후 출력해도 된다
    const nameList=names.map((name)=>(<li>{name}</li>))

    const colors=['yellow','green','blue','pink','purple']

    const colorList=colors.map((color)=>(<div className='box' style={{width:'200px', height:'200px', backgroundColor:color, float:'left', marginLeft:'80px'}}/>))

    //색상을 5개 배열로 주고 결과물을 div로 출력하기 (box로 className주고 할 것)
    return(
        <div>
            <h3 className='alert alert-info'>FourApp입니다</h3>
            <Alert severity='error'>배열연습<BalanceIcon/></Alert>
            <div>
                <h3>map연습</h3>
                <ol>
                    {
                 names.map((name,index)=>(<b style={{marginLeft:'10px', fontSize:'20px'}}>{index}:{name}</b>))
                    }
                </ol>

                <ul>{nameList}</ul>
                <hr/>
                <Alert severity='success'>과제_배열색상 가로로 출력하기</Alert>
                <ol>
                    {
                   colors.map((color,index)=>(<div style={{backgroundColor:color, width:'100px', height:'70px'}}>{index}:{color}</div>))
                    }
                </ol>
                <br/><br/><br/><br/>
                <ul>{colorList}</ul>
            </div>
        </div>
    );
}

export default FourApp;