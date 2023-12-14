import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import RouterMain from './RouterMain';

function Root(props) {
    return (
        //root를 지정한 다음 그 root를 routerMain에 지정해준 것         
    <BrowserRouter>
    <RouterMain/>
    </BrowserRouter>
    );
}

export default Root;