import { green } from '@mui/material/colors';
import React from 'react';

function SixSubApp2({flower,price,lineColor}) {  //변수로 받아오면 출력할때 바로 변수로 출력 가능
    return (
        <div>
            <h3 className='alert alert-danger'>SiApp의 두번째 자식입니다</h3>
            <h3 className='line' style={{borderColor:lineColor}}>{flower} 1묶음의 가격은 {price}입니다</h3>
        </div>
    );
}

export default SixSubApp2;