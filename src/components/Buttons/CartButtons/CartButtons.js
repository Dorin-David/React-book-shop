import React from 'react';
import { BiWindow } from 'react-icons/bi';
import { FaWindowClose } from 'react-icons/fa';


const cartButtons = props => (
    <div className='btn-wrapper'>
        <BiWindow id='full-btn' onClick={props.clickFull} title='expand cart' />
        <FaWindowClose id='close-btn' onClick={props.clickClose} title='close cart' />
    </div>
)


export default cartButtons