import React from 'react'

//This function provides the random message shown when the user adds something to the cart
function displayRandomMessage(){
    let messages = ['Wow!', 'Great choice!', 'Devour it!', ':)', 'Good one!', 'Share it!', "Love it!"];
    let randomMessage = messages[Math.floor(Math.random() * messages.length)];
    let displayAddedMessage = <div className="alert">{randomMessage}</div>;
       return displayAddedMessage
}

//This function iterates over an array of objects / object and returns an array of the desired keys (could be multiple)

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



//  if(elegiblesForDiscount.includes(element.title)){
//     price = Math.round(price - ((price / 100) * currentDiscount));
//     price = <p key={price}><span className='discountedPrice' key={element.year / price}>{element.price}</span> {price}$ 
//     <i className="fas fa-plus-square" id='add-btn-main' title='add to cart' onClick={this.props.onClick.bind(this, element.title)}/></p>;
//     }  
//     {typeof price == 'object' ? price : <p key={price}>{price}$ <i className="fas fa-plus-square" id='add-btn-main' title='add to cart' 
//     onClick={this.props.onClick.bind(this, element.title)}/></p>}
 
    function getDiscount(list, target, currentDiscount){
       let copy  = target;
       if(list.includes(copy)){
           copy = Math.round(copy - ((copy / 100) * currentDiscount));  
       }
       return copy
 }

export {displayRandomMessage, getProperties, getRandomElements}