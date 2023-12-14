import React from 'react';
import {NavLink, NevLink} from 'react-router-dom';

function Menu(props) {
    return (
        <div>
            <ul className='menu'>
                <li>
                 <NavLink to='/'>Home</NavLink>           
                </li>
                <li>
                 <NavLink to='/about'>About</NavLink>           
                </li>
                <li>
                <NavLink to='/about/도리'>About_DR</NavLink>
                </li>
                <li>
                <NavLink to='/pet/1/2'>아이들</NavLink>
                </li>
            </ul>
        </div>
    );
}

export default Menu;