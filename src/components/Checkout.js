import React from 'react';
import {useMediaQuery} from 'react-responsive';
import {useStateValue} from "../store/StateProvider";
import '../style/Checkout.css';
import CheckoutProduct from './CheckoutProduct';
import Subtotal from './Subtotal';
import ItemNotification from "./ItemNotification";

function Checkout() {
    const [{basket, itemNotification}] = useStateValue();
    const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' })

    return (
        <div className="checkout">
            <div className="checkout-left">
                <div className="checkout-ad-container">
                    <img src="https://images-eu.ssl-images-amazon.com/images/G/02/amazonservices/seller_success_stories/2020/07_Tony-Harris/tony-harris-2x-v3._CB408309405_.jpg"
                         alt="advert" className="checkout-ad"/>
                </div>

                {(isTabletOrMobile && basket.length > 0) &&
                    (
                        <div className="checkout-right">
                            <Subtotal />
                        </div>
                    )
                }

                <div className="checkout-summary">
                    {basket?.length === 0? <h1>Your Shopping Basket is empty</h1>:(
                        <div>
                            {basket.map((item, index) => (
                                <CheckoutProduct
                                    key={index}
                                    id={item.id}
                                    title={item.title}
                                    image={item.image}
                                    price={item.price}
                                    rating={item.rating}/>
                            ))}
                        </div>
                    )}
                </div>
            </div>
            {(!isTabletOrMobile && basket.length > 0) &&
                (
                    <div className="checkout-right">
                        <Subtotal />
                    </div>
                )
            }
            {itemNotification && (<ItemNotification itemName={itemNotification} itemAction={'removed from Basket!'}/>)}
        </div>
    )
}

export default Checkout;
