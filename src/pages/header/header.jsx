import React, {useCallback, useState} from 'react';
import c from './header.module.scss';
import {Link, NavLink, useNavigate} from "react-router-dom";
import {IoLogoApple} from "@react-icons/all-files/io/IoLogoApple";
import {AiOutlineShoppingCart} from "@react-icons/all-files/ai/AiOutlineShoppingCart";
import {CgProfile} from "@react-icons/all-files/cg/CgProfile";
import {ImSearch} from "@react-icons/all-files/im/ImSearch";
import {MdOutlineFavoriteBorder} from "react-icons/md";
import {useDispatch, useSelector} from "react-redux";
import {findProductAction, selectedAction} from "../../api/reducers";
import {GiHamburgerMenu} from "@react-icons/all-files/gi/GiHamburgerMenu";
import {initializedState} from "react-slick/lib/utils/innerSliderUtils";

const Header = () => {
    const [open,setOpen] = useState(false);
    const [focused, setFocused] = React.useState(false);
    const onFocus = () => setFocused(true);
    const onBlur = () => setFocused(false);
    const dispatch = useDispatch();
    const foundProducts = useSelector(state => state.getUser.foundProducts);
    const products = useSelector(state => state.getUser.products);

    const navigate = useNavigate();

    const debounce = (func) => {
        let timer;
        return function (...args) {
            const context = this;
            if (timer) clearTimeout(timer);
            timer = setTimeout(() => {
                timer = null;
                func.apply(context, args);
            }, 300);
        }
    }
    const debounceBlur = (func) => {
        let timer;
        return function (...args) {
            const context = this;
            if (timer) clearTimeout(timer);
            timer = setTimeout(() => {
                timer = null;
                func.apply(context, args);
            }, 400);
        }
    }
    const handleChange = (event) => {
        const searchQuery = event.target.value;
        if (searchQuery.length > 1) {
            const foundProducts = products.filter((products) => products.name.toLowerCase().includes(searchQuery.toLowerCase()));
            if (foundProducts.length > 0) {
                dispatch(findProductAction(foundProducts));
                console.log(foundProducts);
            }
        }
    }
    const optimizedVersion = useCallback(debounce(handleChange), []);
    const optimizedBlur = useCallback(debounceBlur(onBlur), []);
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
                            <AiOutlineShoppingCart/>
                        </NavLink>
                        <NavLink to='/wishList' className={activeLink}>
                            <MdOutlineFavoriteBorder/>
                        </NavLink>
                        <NavLink to='/myProfile' className={activeLink}>
                            <CgProfile/>
                        </NavLink>
                        <div className={c.header_search}>

                            <input onBlur={optimizedBlur} onFocus={onFocus}
                                   onChange={optimizedVersion}
                                   type="text" placeholder='Search product'/>
                            <ImSearch/>
                            {
                                (foundProducts && foundProducts?.length !== 0) ? (
                                    <div className={`${c.dropdown} ${focused ? `${c.active}` : `${c.inactive}`}`}>
                                        <ul>
                                            {foundProducts?.map(p => (
                                                    <li onClick={() => {
                                                        dispatch(selectedAction({p}));
                                                        navigate('/details');
                                                    }} key={p.id} className={c.logins}>
                                                        <Link onClick={() => {
                                                            dispatch(selectedAction({p}));
                                                            navigate('/details');
                                                        }} to='/details'>{p.name}</Link>
                                                    </li>
                                                )
                                            )}
                                        </ul>
                                    </div>
                                ) : (
                                    console.log('.')
                                )
                            }


                        </div>

                    </div>
                    <div className={c.burger}>
                    <GiHamburgerMenu onClick={()=>{
                        if (open === false){
                            setOpen(true)
                        } else {
                            setOpen(false)
                        }
                    } }/>
                    </div>
                    <div className={`${c.header_links_burger} ${open ? `${c.active_burger}` : `${c.inactive_burger}`}`}>
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
                            <div className={c.icons}>
                                <AiOutlineShoppingCart/> <span>Basket</span>
                            </div>

                        </NavLink>
                        <NavLink to='/wishList' className={activeLink}>
                            <div className={c.icons}>
                                <MdOutlineFavoriteBorder/>  <span>Wish List</span>
                            </div>

                        </NavLink>
                        <NavLink to='/myProfile' className={activeLink}>
                            <div className={c.icons}>
                                <CgProfile/>  <span>My Profile</span>
                            </div>
                        </NavLink>
                        <div className={c.header_search_burger}>

                            <input onBlur={optimizedBlur} onFocus={onFocus}
                                   onChange={optimizedVersion}
                                   type="text" placeholder='Search product'/>
                            <ImSearch/>
                            {
                                (foundProducts && foundProducts?.length !== 0) ? (
                                    <div className={`${c.dropdown_burger} ${focused ? `${c.active}` : `${c.inactive}`}`}>
                                        <ul>
                                            {foundProducts?.map(p => (
                                                    <li onClick={() => {
                                                        dispatch(selectedAction({p}));
                                                        navigate('/details');
                                                    }} key={p.id} className={c.logins}>
                                                        <Link onClick={() => {
                                                            dispatch(selectedAction({p}));
                                                            navigate('/details');
                                                        }} to='/details'>{p.name}</Link>
                                                    </li>
                                                )
                                            )}
                                        </ul>
                                    </div>
                                ) : (
                                    console.log('.')
                                )
                            }


                        </div>
                </div>
            </div>
            </div>
        </div>
    );
};

export default Header;