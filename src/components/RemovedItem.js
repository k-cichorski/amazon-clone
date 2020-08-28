import React, {useEffect} from 'react';
import {useStateValue} from "../store/StateProvider";
import {RESET_REMOVED_ITEM} from "../store/reducer";
import '../style/RemovedItem.css';


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
            type: RESET_REMOVED_ITEM
        }
        dispatch(action)
    }

    return (
        <div className="removed-item">
            <div className="removed-item-info">
                <p><strong>{itemName}</strong> removed from Basket!</p>
            </div>
        </div>
    );
}

export default RemovedItem;
