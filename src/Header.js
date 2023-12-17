import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import { Link } from "react-router-dom";
import { useStateValue } from "./StateProvider";
import "./Header.css";

function Header() {
    const [{ basket }, dispatch] = useStateValue();
    return (
        <div className="header">
            <Link to="/">
                <img
                    className="header__logo"
                    src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
                    alt="Amazon logo"
                />
            </Link>
            <div className="header__search">
                <input className="header__searchInput" type="text" />

                <SearchIcon className="header__searchIcon" />
            </div>
            <div className="header__nav">
                <div className="heder__option">
                    <span className="header__optionLineOn">Hello Guest</span>
                    <span className="header_optionLineTwo">Sign In</span>
                </div>

                <div className="heder__option">
                    <span className="header__optionLineOn">Returns</span>
                    <span className="header__optionLineTwo">& Orders</span>
                </div>
                <div className="heder__option">
                    <span className="header__optionLineOn">Your</span>
                    <span className="header__optionLineTwo">Prime</span>
                </div>
                <Link to="/checkout">
                    <div className="header__optionBasket">
                        <ShoppingBasketIcon />
                        <span className="header__optionLineTwo">
                            {basket.length}
                        </span>
                    </div>
                </Link>
            </div>
        </div>
    );
}

export default Header;
