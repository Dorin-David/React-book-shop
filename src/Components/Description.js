import React from 'react';
import '../Styles/description.css';

function Description(props){
    

    return (
        <div className='description-wrapper'>
        <div className = 'description-window'>
            <i className="fas fa-window-close"  onClick={props.onClick} id='description-close-btn' title='close description'></i>
            <img id='description-img' src={props.displayObject.img} alt={props.displayObject.title}></img>
            <p id='title-description'>{props.displayObject.title}</p>
            <p id='author'>{props.displayObject.author}</p>
            <p>{props.displayObject.description}</p>
        </div>
        </div>
    )


}

export default Description