import React, { useState } from 'react';

/* function SixSubApp3({incre, decre}) {   //직접적인 변수를 줘서 받아오기

     return (
         <div>
             <h3>세번째 자식</h3>
             <button type='button' onClick={incre}>증가</button> &nbsp;&nbsp;
             <button type='button' onClick={decre}>감소</button>
         </div>
     );
 } */

/* function SixSubApp3(props) {

    return (
        <div>
            <h3>세번째 자식</h3>
            <button type='button' className='btn btn-success' onClick={props.incre}>증가</button> &nbsp;&nbsp;
            <button type='button' className='btn btn-success' onClick={props.decre}>감소</button>
        </div>
    );
    }*/

    function SixSubApp3(props) {

        return (
            <div>
                <h3>세번째 자식</h3>
                <button type='button' className='btn btn-success' onClick={()=>{props.incre();}}>증가</button> &nbsp;&nbsp;
                <button type='button' className='btn btn-success' onClick={()=>{props.decre();}}>감소</button>
            </div>
        );
        }
export default SixSubApp3;
