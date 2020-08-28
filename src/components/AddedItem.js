import React, {useEffect} from 'react';
import {useStateValue} from "../store/StateProvider";
import {RESET_ADDED_ITEM} from "../store/reducer";
import '../style/AddedItem.css';


function RemovedItem({itemName}) {
    const [, dispatch] = useStateValue();

    useEffect(() => {
        const timer = setTimeout(() => resetItem(), 3000);
        return () => {
            clearTimeout(timer);
        }
    });

    const resetItem = () => {
        const action = {
            type: RESET_ADDED_ITEM
        }
        dispatch(action)
    }

    return (
        <div className="added-item">
            <div className="added-item-info">
                <p><strong>{itemName}</strong> added to Basket!</p>
            </div>
        </div>
    );
}

export default RemovedItem;
