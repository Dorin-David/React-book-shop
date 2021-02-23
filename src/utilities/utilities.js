import React from 'react'

//This function provides the random message shown when the user adds something to the cart
function displayRandomMessage(){
    let messages = ['Wow!', 'Great choice!', 'Devour it!', ':)', 'Good one!', 'Share it!', "Love it!"];
    let randomMessage = messages[Math.floor(Math.random() * messages.length)];
    let displayAddedMessage = <div className="alert">{randomMessage}</div>;
       return displayAddedMessage
}

//This function iterates over an array of objects / object and returns an array of the desired keys 
function getProperties(targetObject, ...targetProps){
    let props = [];
        targetObject.forEach(item => {
            for(let key in item){
                if(targetProps.includes(key)){
                    props.push(item[key])
                }}})
      return props
}

//This function returns a random array of n unique elements (default set to three)
function getRandomElements(array, n = 3){
    let randomArray = []
    while(n){
        let index = Math.floor(Math.random() * array.length);
        randomArray.includes(array[index]) ? n++ : randomArray.push(array[index])
        n--
    }
    return randomArray
 }

 //This function check if an element is elegible for discount and, if so, apllies the discount
function getDiscount(list, target, price, currDiscount, event){
    let copy  = price;
    let button = <i className="fas fa-plus-square" id='add-btn-main' title='add to cart' onClick={event}/>;
    if(list.includes(target)){   
        copy = <p><span className='discountedPrice'>{price}</span>{Math.round(price - ((price / 100) * currDiscount))}${button}</p>;  
    }
    return typeof copy === 'object' ? copy : <p>{copy}${button}</p>
}

export {displayRandomMessage, getProperties, getRandomElements, getDiscount}