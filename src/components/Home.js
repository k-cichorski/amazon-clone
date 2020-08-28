import React from 'react';
import '../style/Home.css';

import Product from './Product';
import ItemNotification from "./ItemNotification";
import products from '../products.json';
import {useStateValue} from "../store/StateProvider";
import {useMediaQuery} from "react-responsive";

export default function Home() {
    const [{addedItem}] = useStateValue();
    const isTabletOrMobile = useMediaQuery({ query: '(max-width: 570px)' })

    const getProducts = (products) => {
        let productArray = [];
        products.forEach(({id, title, price, rating, image}) => {
            productArray.push(<Product key={id}
                     id={id}
                     title={title}
                     price={price}
                     rating={rating}
                     image={image}/>)
        });
        return productArray
    }

    let productArray = getProducts(products);

    return (
        <div className="home">
            <img className="banner-image" src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/gateway/placement/launch/TheMeg/THMEG_2020_GWBleedingHero_FT_COVIDUPDATE__XSite_3000X1200_PV_en-GB._CB406968868_.jpg"
                 alt="" />
            {isTabletOrMobile?
                (
                    <>
                        <div className="product-row">
                            {productArray.slice(0,2)}
                        </div>
                        <div className="product-row">
                            {productArray.slice(2,4)}
                        </div>
                        <div className="product-row">
                            {productArray.slice(4,6)}
                        </div>
                        <div className="product-row">
                            {productArray.slice(6)}
                        </div>
                    </>
                )
            :
                (
                    <>
                        <div className="product-row">
                            {productArray.slice(0,3)}
                        </div>
                        <div className="product-row">
                            {productArray.slice(3,6)}
                        </div>
                        <div className="product-row">
                            {productArray.slice(6)}
                        </div>
                    </>
                )
            }

            {addedItem && <ItemNotification itemName={addedItem} itemAction={'added to Basket!'}/> }
        </div>
    )
};
