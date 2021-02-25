import React from 'react';

const descriptionCard = props => (
            <div className='card-description' >
                <h1>{props.title}</h1>
                <h2>{props.author}</h2>
            </div>
)

export default descriptionCard