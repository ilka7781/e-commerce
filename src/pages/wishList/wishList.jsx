import React, {useEffect} from 'react';
import c from "../basket/basket.module.scss";
import {useDispatch, useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";
import {addToFavoriteProductsAction, getRegisterAction, isFetchingAction} from "../../api/reducers";
import axios from "axios";

const WishList = () => {

    const accessToken = localStorage.getItem('accessToken');
    const products = useSelector(state => state.getUser.products);
    const productsId = useSelector(state => state.getUser.favorite.product);
    const favoriteProducts = useSelector(state => state.getUser.favoriteProducts[0]);
    const navigate = useNavigate();
    const productsArray = Object.entries(products);
    const userFavoriteId = useSelector(state => state.getUser.user.user_favorite[0].product);
    const dispatch = useDispatch();


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
            const filterFavorite = productsArray.filter(([key, value]) => value.id === userFavoriteId);
            dispatch(addToFavoriteProductsAction(filterFavorite));
            dispatch(isFetchingAction(false))
        }
    }, [userFavoriteId])

   if(userFavoriteId) return (
        <div className={c.container}>
            <h1 className={c.h1}>Wish List</h1>

            <div className={c.basketcon}>
                {
                    favoriteProducts ? (
                        favoriteProducts?.map((b) => {
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
                                </div>
                            )
                        })
                    ) : accessToken ? (
                        <div className={c.no}>
                            No products in the favorites (
                        </div>
                    ) : (
                        <div className={c.btns}>
                            <button onClick={goToReg}>Go to registration</button>
                        </div>
                    )

                }


            </div>
        </div>
    );
   return (
       <div className={c.container}>
           <h1>No products</h1>
       </div>
   )
};

export default WishList;