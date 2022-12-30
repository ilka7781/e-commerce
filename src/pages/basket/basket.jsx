import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {
    addToBasketProductsAction, addToBasketProductsIdAction,
    addToFavoriteProductsAction,
    getRegisterAction,
    isFetchingAction
} from "../../api/reducers";
import c from './basket.module.scss';
import {useNavigate} from "react-router-dom";
import axios from "axios";

const Basket = () => {
    const dispatch = useDispatch();
    const accessToken = localStorage.getItem('accessToken');
    const products = useSelector(state => state.getUser.products);
    const productsId = useSelector(state => state.getUser.basketProductsId.products);
    const basketProducts = useSelector(state => state.getUser.basketProducts[0]);
    const basketOwner =useSelector(state => state.getUser.user.basket_owner);
    const lastItemBasket = basketOwner[basketOwner.length-1].products_data[0].id;

    const navigate = useNavigate();
    const productsArray = Object.entries(products);


    const goToReg = () => {
        navigate('/reg');
    }
    useEffect(() => {
        if (accessToken) {
            dispatch(isFetchingAction(true));
            axios.get('https://cryxxen.pythonanywhere.com/users/get_user/',{
                    headers: {
                        'Authorization': `Bearer ${accessToken}`
                    }
                }
            ).then(res =>
                dispatch(getRegisterAction(res.data))
            )
            const filteredProducts = productsArray.filter(([key, value]) => value.id === lastItemBasket);
            dispatch(addToBasketProductsAction(filteredProducts));
            dispatch(isFetchingAction(false))
        }
    },[lastItemBasket])

    return (
        <div className={c.container}>
            <h1 className={c.h1}>Basket</h1>

            <div className={c.basketcon}>
                {
                    basketProducts ? (
                        basketProducts?.map((b) => {
                            return (
                                <div key={b.id} className={c.basketcards}>
                                    <img className={c.imgb} src={b.img} alt={b.name}/>
                                    <div className={c.secondcon}>
                                        <p className={c.name}>{b.name}</p>
                                        <ul className={c.des}>
                                            <li> {b.factory}</li>
                                            <li>{b.material}</li>
                                            <li>{b.GPU}</li>
                                            <li>{b.memory}</li>
                                            <li className={c.price}>{b.price} $</li>
                                        </ul>
                                    </div>
                                    <p className={c.cost}>Cost: <span
                                        className={c.pricecost}>{basketProducts[1].price} $</span></p>
                                </div>
                            )
                        })
                    ) : accessToken ? (
                        <div className={c.no}>
                            No products in the basket (
                        </div>
                    ) : (
                        <div className={c.btns}>
                            <button className={c.reg} onClick={goToReg}>Go to registration</button>
                        </div>
                    )

                }


            </div>
        </div>
    );
};

export default Basket;