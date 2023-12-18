import React from 'react';
import infoimg from '../image/2.png'

function Info(props) {
    return (
        <div>
            <img src={infoimg} style={{width:'250px'}}/>
            <br/><br/>
            <div>쌍용교육센터</div>
            <div>02-123-3245</div>
        </div>
    );
}

export default Info;