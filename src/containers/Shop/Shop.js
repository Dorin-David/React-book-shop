import { useState } from 'react';
import NavBar from '../../components/NavBar/NavBar';
import { Main } from '../../components/Main/Main';
import Cart from '../../components/Cart/Cart';
import Description from '../../components/Description/Description';
import { catalog } from '../../utilities/catalog';
import { displayRandomMessage } from '../../utilities/utilities';


const Shop = props => {

    const [cart, setCart] = useState([]);
    const [cartView, setCartView] = useState({ toggleCart: false, cartFullPage: false });
    const [showMessage, setShowMessage] = useState(false);
    const [productsDisplay, setProductDisplay] = useState('normal');
    const [description, setDescription] = useState({ showDescription: false, currentDisplayObject: '' });
    const [currentDisplayedItems, setCurrentDisplayedItems] = useState(catalog)

    const addToCart = element => {
        setCart(cart => [...cart, element])

        if (showMessage === true) return
        setShowMessage(message => !message)
        setTimeout(() => setShowMessage(message => !message), 1500);
    }

    const adjustQuantity = (key, target) => {
        if (key === 'add') {
            return setCart(cart => [...cart, target])
        }
        if (key === 'remove') {
            let shallowCopy = Array.from(cart).filter((element, index, arr) => index !== arr.lastIndexOf(target))
            return setCart(cart => shallowCopy)
        }
        if (key === 'delete') {
            return setCart(cart => cart.filter(el => el !== target))
        }
    }

    const toggleCart = () => {
        setCartView(state => ({
            toggleCart: !state.toggleCart,
            cartFullPage: false
        }))
    }

    const fullViewCart = () => {
        setCartView(state => ({
            ...state,
            cartFullPage: !state.cartFullPage
        }))
    }

    const showDescription = target => {
        setDescription(state => ({
            showDescription: true,
            currentDisplayObject: target
        }))
    }

    const closeDescription = () => {
        setDescription(state => ({
            ...state,
            showDescription: false
        }))
    }

    const handleProductsDisplay = size => {
        setProductDisplay(size)
    }

    const searchItem = e => {
        let value = e.target.value;
        let regex = new RegExp(`${value}`, 'i');
        if (value === '') {
            return setCurrentDisplayedItems(catalog)
        }
        setCurrentDisplayedItems(state => currentDisplayedItems.filter(element => regex.test(element.title) || regex.test(element.author)))
    }


    return (
        <div className='wrapper'>
            <NavBar clickCart={toggleCart} handleSearch={searchItem} {...props} />
            <Main
                catalog={currentDisplayedItems}
                click={addToCart}
                display={productsDisplay}
                displayProducts={handleProductsDisplay}
                showDescription={showDescription} />
            {cartView.toggleCart ? <Cart
                clickToggle={toggleCart}
                showDescription={showDescription}
                cart={cart}
                adjustQuantity={adjustQuantity}
                fullPage={cartView.cartFullPage}
                fullView={fullViewCart}
                {...props}
            /> : null}
            {showMessage ? displayRandomMessage() : null}
            {description.showDescription ? <Description displayObject={description.currentDisplayObject} onClick={closeDescription} /> : null}
        </div>
    )
}


export default Shop;
