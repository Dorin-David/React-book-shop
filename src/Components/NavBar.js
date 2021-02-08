import React from 'react';
import '../Styles/nav_bar.css';

const NavBar = (props) => {
   return (
       <div className='nav-container'>
           <a href="#">{props.firstLink}</a>
           <a href="#">{props.secondLink}</a>
           <div id='search'>
               <input type='text' placeholder='search book/author' onChange={props.handleSearch} value={props.value}/>
               <button type="submit"><i class="fas fa-search" onClick={props.handleSearch} title='search'></i></button></div>
               <i class="fas fa-shopping-cart" id='cart' onClick={props.onClick} title='open cart'></i>
       </div>
        
   )

}

export default NavBar