import React from 'react';
import c from './footer.module.scss';
import {Link} from "react-router-dom";
import {IoLogoApple} from "@react-icons/all-files/io/IoLogoApple";
import {AiOutlineCopyrightCircle} from "@react-icons/all-files/ai/AiOutlineCopyrightCircle";

const Footer = () => {

    return (
        <div className={c.container}>
            <div className={c.footercon}>
                <div className={c.logo}>
                    <IoLogoApple/>
                    <h1 className={c.h1}>Apple Store</h1>
                </div>
                <div className={c.links}>
                    <ul>
                        <li>
                            <Link to='/'>
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link to='/products'>
                                Products
                            </Link>
                        </li>
                        <li>
                            <Link to='/aboutUs'>
                                About Us
                            </Link>
                        </li>
                    </ul>
                </div>
                <div className={c.links}>
                    <ul>
                        <li>
                            <Link to='/myProfile'>
                              My profile
                            </Link>
                        </li>
                        <li>
                            <Link to='/basket'>
                                Basket
                            </Link>
                        </li>
                        <li>
                            <Link to='/favourite'>
                                Favourites
                            </Link>
                        </li>
                    </ul>
                </div>

            </div>

            <div className={c.des}>
                 <AiOutlineCopyrightCircle/>
                 <h2>Designed by cryxxen frontend intern Iliyaz</h2>
            </div>
        </div>
    );
};

export default Footer;
