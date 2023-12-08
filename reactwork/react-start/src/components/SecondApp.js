import React from 'react';
import img1 from '../image/11.png'

function SecondApp(props) {

    const imgStyle={
        border:'5px inset pink',
        borderRadius: '100px',
        width: '250px;'
    }

    let helloEle=<h2 className='alert alert-info'>Hello!</h2>;

    return (
        <div>
            <h2 className='alert alert-success'>SecondApp입니다.</h2> 
            <img src={img1} style={imgStyle}/>
            {helloEle}
            {helloEle}
       </div>
    );
}

export default SecondApp;