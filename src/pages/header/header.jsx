import React from 'react';
import c from './header.module.scss';
import {NavLink} from "react-router-dom";
import {IoLogoApple} from "@react-icons/all-files/io/IoLogoApple";
import {AiOutlineShoppingCart} from "@react-icons/all-files/ai/AiOutlineShoppingCart";
import {CgProfile} from "@react-icons/all-files/cg/CgProfile";
import {ImSearch} from "@react-icons/all-files/im/ImSearch";
import {MdOutlineFavoriteBorder} from "react-icons/md";

const Header = () => {
    const activeLink = ({isActive}) => isActive ? c.active : c.header_links_a;
    return (
        <div className={c.header}>
            <div className={c.container}>
                <div className={c.header_dflex}>
                    <div className={c.header_logo}>
                        <IoLogoApple/>
                        <p>Apple Store</p>
                    </div>
                    <div className={c.header_links}>
                        <NavLink to='/' className={activeLink}>
                            Home
                        </NavLink>
                        <NavLink to='/products' className={activeLink}>
                            Products
                        </NavLink>
                        <NavLink to='/aboutUs' className={activeLink}>
                            About Us
                        </NavLink>
                        <NavLink to='/basket' className={activeLink}>
                            <AiOutlineShoppingCart />
                        </NavLink>
                        <NavLink to='/wishList' className={activeLink}>
                            <MdOutlineFavoriteBorder/>
                        </NavLink>
                        <NavLink to='/myProfile' className={activeLink}>
                            <CgProfile/>
                        </NavLink>
                        <div className={c.header_search}>
                            <input type="text" placeholder='Search'/>
                            <ImSearch/>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;