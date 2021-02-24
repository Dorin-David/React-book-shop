import React from 'react';
import './Description.css';
import {FaWindowClose} from 'react-icons/fa';

function Description(props) {
    return (
        <div className='description-wrapper'>
            <div className='description-window'>
                <FaWindowClose onClick={props.onClick} id='description-close-btn' title='close description' />
                <img id='description-img' src={props.displayObject.img} alt={props.displayObject.title}></img>
                <p id='title-description'>{props.displayObject.title}</p>
                <p id='author'>{props.displayObject.author}</p>
                <p>{props.displayObject.description}</p>
            </div>
        </div>
    )


}

export default Description