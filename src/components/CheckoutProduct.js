import React from 'react';
import {REMOVE_FROM_BASKET} from "../store/reducer";
import {useStateValue} from "../store/StateProvider";
import '../style/CheckoutProduct.css';

function CheckoutProduct({id, title, image, price, rating}) {
    const [, dispatch] = useStateValue();

    const removeFromBasket = () => {
        const action = {
            type: REMOVE_FROM_BASKET,
            id,
            title
        }
        dispatch(action)
    }

    return (
        <div className="checkout-product">
            <img src={image}
                 alt={title + " image"}
                 className="checkout-product-image"/>
            <div className="checkout-product-info">
                <p className="checkout-product-title">{title}</p>
                <p>
                    $<strong>{price.toFixed(2)}</strong>
                </p>
                <div className="product-rating">
                    {Array(rating)
                        .fill()
                        .map((_) => (
                                <span role="img" aria-label="star">⭐</span>
                            )
                        )}
                </div>
                <button onClick={removeFromBasket}
                        className="remove-from-basket">Remove from basket</button>
            </div>
        </div>
    )
}

export default CheckoutProduct;
