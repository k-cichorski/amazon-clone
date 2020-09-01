import React from 'react';
import '../style/Header.css';
import {Link} from "react-router-dom";
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import {useStateValue} from "../store/StateProvider";
import {auth} from '../firebase';
import useMediaQuery from "react-responsive";

function Header() {
    const [{basket, user}] = useStateValue();
    const isTabletOrMobile = useMediaQuery({ query: '(max-width: 570px)' })

    const logout = () => {
        if (user) {
            auth.signOut()
                .catch(e => {
                    alert(e);
                });
        }
    }

    return (
        <nav className="header">
            <Link to="/">
                <img className="header-logo"
                     src="https://www.pngimg.com/uploads/amazon/amazon_PNG11.png"
                     alt=""
                />
            </Link>

            <div className="header-search">
                <input type="text" className="header-searchInput"/>
                <SearchIcon className="header-searchIcon" />
            </div>

            <div className="header-nav">
                <Link to={user?"":"/login"} className="header-link">
                    <div onClick={logout} className="header-option">
                        <span className="header-optionLineOne">Hello,{isTabletOrMobile && <br></br>} {user? user.email:"user"}</span>
                        <span className="header-optionLineTwo">{user?"Log out":"Sign In"}</span>
                    </div>
                </Link>

                <Link to="/" className="header-link">
                    <div className="header-option">
                        <span className="header-optionLineOne">Returns</span>
                        <span className="header-optionLineTwo">& Orders</span>
                    </div>
                </Link>

                <Link to="/" className="header-link">
                    <div className="header-option">
                        <span className="header-optionLineOne">Your</span>
                        <span className="header-optionLineTwo">Prime</span>
                    </div>
                </Link>

                <Link to="/checkout" className="header-link">
                    <div className="header-optionBasket">
                        <ShoppingBasketIcon />
                        <span className="header-optionLineTwo basket-count">{basket.length}</span>
                    </div>
                </Link>

            </div>
        </nav>
    )
}

export default Header;
