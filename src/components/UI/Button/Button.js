import React from 'react';
import './Button.css';

const button = props => (
    <button 
    className={['default-btn', props.btnClass].join(' ')}
    onClick={props.click}
    disabled={props.disabled}
    >{props.children}</button>
)

export default button

