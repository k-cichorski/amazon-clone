import React, {useEffect} from 'react';
import {useStateValue} from "../store/StateProvider";
import {RESET_ITEM} from "../store/reducer";
import '../style/ItemNotification.css';


function ItemNotification({itemName, itemAction}) {
    const [, dispatch] = useStateValue();

    useEffect(() => {
        const timer = setTimeout(() => resetItem(), 3000);
        return () => {
            clearTimeout(timer);
        }
    });

    const resetItem = () => {
        const action = {
            type: RESET_ITEM
        }
        dispatch(action);
    }

    return (
        <div className="removed-item">
            <div className="removed-item-info">
                <p><strong>{itemName}</strong> {itemAction}</p>
            </div>
        </div>
    );
}

export default ItemNotification;
