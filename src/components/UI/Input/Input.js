import React from 'react';
import  './Input.css';

const input = props => {
    let inputElement = null;
    const inputClasses = ["InputElement"];
    if(props.invalid && props.shouldValidate && props.triggered){
      inputClasses.push("InvalidInput")
    }
    switch (props.elementType) {
        case ('input'):
            inputElement = <input
                className={inputClasses.join(' ')}
                {...props.elementConfig} value={props.value} onChange={props.handleChange} />;
            break;
        case ('textarea'):
            inputElement = <textarea
                className={inputClasses.join(' ')}
                {...props.elementConfig} value={props.value} onChange={props.handleChange} />;
            break;
        case ('select'):
            inputElement = (<select
                className={inputClasses.join(' ')}
                value={props.value} 
                onChange={props.handleChange}
                >
                {props.elementConfig.options.map(option => (
                    <option
                        value={option.value}
                        key={option.value}
                    >
                        {option.displayValue}
                    </option>
                ))}
            </select>)
            break;
        default:
            inputElement = <input
                className={inputClasses.join(' ')}
                {...props.elementConfig} value={props.value} onChange={props.handleChange} />;
            break;
    }

    //fix below, input should be within label
    return (<div className='Input'>
        <label className='Label'>
            {inputElement}
        </label>
        
    </div>)
}

export default input