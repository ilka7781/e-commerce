import React, {useEffect} from 'react';
import c from './moreCards.module.scss';
import {useDispatch, useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";
import axios from "axios";
import {
    addToBasketAction,
    addToBasketProductsIdAction,
    addToFavoriteAction,
    addToFavoriteProductsIdAction, getRegisterAction, isFetchingAction
} from "../../../api/reducers";

const MoreCards = () => {
    const s = useSelector(state => state.getUser.selected.p);
    const basket = useSelector(state => state.getUser.basket.id);
    const favorite = useSelector(state => state.getUser.favorite.id);
    const navigate = useNavigate();
    const goToProducts = () => navigate('/products');
    const dispatch = useDispatch();
    const accessToken = localStorage.getItem('accessToken');
    const user = useSelector(state => state.getUser.user);

    const addToBasket = async () => {
        if (!basket) {
            await axios.post(`https://cryxxen.pythonanywhere.com/baskets/`, {
                products: [
                    JSON.stringify(s.id),
                ],
                is_active: true
            }, {
                headers: {
                    'Authorization': `Bearer ${accessToken}`
                }
            }).then((res) => {
                     axios.patch(`https://cryxxen.pythonanywhere.com/baskets/${res.data.id}/`, {
                        products: [JSON.stringify(s.id)],
                        is_active: true
                    }, {
                        headers: {
                            'Authorization': `Bearer ${accessToken}`
                        }
                    }).then(res =>
                        dispatch(addToBasketAction(res.data))
                    ).catch(error =>
                        console.log(error)
                    )
            })
        } else {
            await axios.patch(`https://cryxxen.pythonanywhere.com/baskets/${basket}/`, {
                products: [JSON.stringify(s.id)],
                is_active: true
            }, {
                headers: {
                    'Authorization': `Bearer ${accessToken}`
                }
            }).then(res =>
                dispatch(addToBasketAction(res.data))
            ).catch(error =>
                console.log(error)
            );
            await axios.get(`https://cryxxen.pythonanywhere.com/baskets/${basket}/`, {
                headers: {
                    'Authorization': `Bearer ${accessToken}`
                }
            })
                .then((res) => {
                        dispatch(addToBasketProductsIdAction(res.data));
                    }
                ).catch(error =>
                console.log(error)
            );
        }
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
                dispatch(getRegisterAction(res.data)),
            )
            dispatch(isFetchingAction(false))
        }
    }, [user])
    const addToFavorite = async () => {
        if (!favorite) {
            await axios.post(`https://cryxxen.pythonanywhere.com/favorites/`, {
                product: s.id,

            }, {
                headers: {
                    'Authorization': `Bearer ${accessToken}`
                }
            }).then(res =>
                dispatch(addToFavoriteAction(res.data))
            ).catch(error =>
                console.log(error)
            );
        } else {
            await axios.patch(`https://cryxxen.pythonanywhere.com/favorites/${favorite}/`, {
                product: s.id,
            }, {
                headers: {
                    'Authorization': `Bearer ${accessToken}`
                }
            }).then(res =>
                dispatch(addToFavoriteAction(res.data))
            ).catch(error =>
                console.log(error)
            );
            await axios.get(`https://cryxxen.pythonanywhere.com/favorites/${favorite}/`, {
                headers: {
                    'Authorization': `Bearer ${accessToken}`
                }
            })
                .then((res) => {
                        dispatch(addToFavoriteProductsIdAction(res.data));
                    }
                ).catch(error =>
                console.log(error)
            );
        }
    }


    return (
        <div className={c.container}>
            {
                s ? (

                    <div className={c.morecon}>
                        <div className={c.moreImg}>
                            <img src={s.img} alt={s.name}/>
                            <p className={c.price}>{s.price} $</p>
                        </div>
                        <div className={c.moreInfo}>
                            <h1 className={c.name}>{s.name}</h1>
                            <ul className={c.info}>
                                <li>Factory : {s.factory}</li>
                                <li>Color : {s.color}</li>
                                <li>GPU : {s.GPU}</li>
                                <li>Date of establish : {s.date}</li>
                                <li>Memory : {s.memory} </li>
                                <li>Guaranty : {s.guaranty} </li>
                                <li>Camera : {s.camera} </li>
                                <li>Bluetooth : {s.bluetooth} </li>
                                <li>Diagonal : {s.diagonal} </li>
                                <li>Screen : {s.screen}</li>
                                <li>Material : {s.material}</li>
                            </ul>
                            <button className={c.btnMore} onClick={goToProducts}>Get Back</button>
                            <button className={c.btnMore} onClick={addToBasket}>Add to basket (Double Click Me)</button>
                            <button className={c.btnMore} onClick={addToFavorite}>Add to favourite (Double Click Me)</button>
                        </div>

                    </div>


                ) : (
                    <div className={c.noselected}>
                        <h1>No selected product</h1>
                        <button className={c.btnMore} onClick={goToProducts}>Get Back</button>
                    </div>
                )
            }
        </div>
    );
};

export default MoreCards;