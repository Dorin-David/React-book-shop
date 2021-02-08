import React from 'react';
import NavBar from './Components/NavBar';
import Main from './Components/Main';
import Cart from './Components/Cart';
import Description from './Components/Description';
import {catalog} from './catalog';
import {displayRandomMessage} from './utilities'

class App extends React.Component {
    constructor(props){
      super(props)
      this.state = {
        cart: [],
        toggleCart: false,
        showMessage: false,
        showDescription: false,
        currentDisplayObject: '',
        currentSearch: '',
        currentItems: catalog
        
      }
      this.addToCart = this.addToCart.bind(this);
      this.toggleCart = this.toggleCart.bind(this);
      this.adjustQuantity = this.adjustQuantity.bind(this);
      this.showDescription = this.showDescription.bind(this);
      this.closeDescription = this.closeDescription.bind(this);
      this.searchItem = this.searchItem.bind(this);
    }

    addToCart(element){
      this.setState(state => ({
        cart: [...state.cart, element],
      }))
      if(this.state.showMessage === true) return
      this.setState(state => ({
        // cart: [...state.cart, element],
        showMessage: !state.showMessage
      }))
       setTimeout(() => this.setState(state => ({ 
        showMessage: !state.showMessage
      })), 1500);
    }

    toggleCart(){
      this.setState(state => ({
        toggleCart: !state.toggleCart
      }))
    }

    adjustQuantity(key, target){
       if(key === 'add'){
        return this.setState(state => ({
           cart: [...state.cart, target]
         }));
       }
       if(key === 'remove'){
         let shallowCopy = Array.from(this.state.cart).filter((element, index, arr) => index !== arr.lastIndexOf(target) )
          return this.setState(state => ({
            cart: shallowCopy
          }))
       }

       if(key === 'delete'){
      return  this.setState(state => ({
          cart: [...state.cart.filter(el => el !== target)]
        }))
       }
    }

    showDescription(target){
        this.setState(state => ({
          showDescription: true,
          currentDisplayObject: target
        }))
    }
    closeDescription(){
      this.setState(() => ({showDescription: false}))
    }
    searchItem(e){
       let value = e.target.value;
       let regex = new RegExp(`${value}`, 'i')
       if(value === ''){return this.setState(state => ({currentItems: catalog}))}
       this.setState(state => ({
         currentItems: [...state.currentItems.filter(element => regex.test(element.title) || regex.test(element.author))]
       }))
      }

    render(){
       //create function to display random message
      //  let messages = ['Wow!', 'Great choice!', 'Devour it!', ':)', 'Good one!', 'Share it!', "Love it!"];
      //  let randomMessage = messages[Math.floor(Math.random() * messages.length)];
      //  let displayAddedMessage = <div className="alert">{randomMessage}</div>;
      return (
        <div className='wrapper'>
      <NavBar firstLink='Home' secondLink='About' onClick={this.toggleCart} handleSearch={this.searchItem} /> 
      <Main catalog={this.state.currentItems} onClick={this.addToCart} showDescription={this.showDescription}/>
      {this.state.toggleCart ? <Cart cart={this.state.cart} catalog={catalog} onClick={this.toggleCart} btnClick={this.adjustQuantity} showDescription={this.showDescription}/> : null}
      {this.state.showMessage ? displayRandomMessage() : null}
      {this.state.showDescription ? <Description displayObject={this.state.currentDisplayObject} onClick={this.closeDescription} /> : null}
    </div>
      )
    }
}




export default App;
