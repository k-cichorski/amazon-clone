import React from 'react';
import '../style/Subtotal.css';
import {useStateValue} from "../store/StateProvider";
import {getBasketValue} from '../store/reducer';

function Subtotal () {
    const [{basket}] = useStateValue();

    return <div className="subtotal">
        <p>Subtotal ({basket?.length} {basket?.length === 1? "item":"items"}): <strong>${getBasketValue(basket)}</strong></p>
        <small className="subtotal-gift">
            <input type="checkbox"/><p>This order contains a gift</p>
        </small>
        <button>Proceed to Checkout</button>
    </div>;
}

export default Subtotal;
