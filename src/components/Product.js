import React from 'react';
import '../style/Product.css';
import {useStateValue} from "../store/StateProvider";
import {ADD_TO_BASKET} from '../store/reducer';

export default function Product({id, title, price, rating, image}) {

    const [, dispatch] = useStateValue();

    const addToBasket = () => {
        const action = {
            type: ADD_TO_BASKET,
            item: {
                id,
                title,
                price,
                rating,
                image
            }
        }
        dispatch(action)
    }

    return (
        <div className="product">
            <div className="product-info">
                <p><strong>{title}</strong></p>
                <p className="product-price">
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
            </div>
            <img src={image} className="product-image" alt="" />
            <button onClick={addToBasket}>Add to basket</button>
        </div>
    )
}