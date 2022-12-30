import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import c from './home.module.scss';
import {Link, useNavigate} from "react-router-dom";
import {BsShop} from "react-icons/bs";
import {MdCategory, MdSupportAgent} from "react-icons/md";
import {IoIosPeople} from "@react-icons/all-files/io/IoIosPeople";
import {FaShippingFast} from "@react-icons/all-files/fa/FaShippingFast";
import {RiNumbersFill} from "@react-icons/all-files/ri/RiNumbersFill";
import {getRegisterAction, isFetchingAction, selectedAction} from "../../api/reducers";
import axios from "axios";


const Home = () => {
    const basketProducts = useSelector(state => state.getUser.products);
    const iphones = basketProducts.filter(item => item.category === 1);
    const macbooks = basketProducts.filter(item => item.category === 2);
    const watches = basketProducts.filter(item => item.category === 3);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const user = useSelector(state => state.getUser.user);
    const accessToken = localStorage.getItem('accessToken');


    const latestIphone = iphones[9];
    const latestMac = macbooks[7];
    const latestWatches = watches[5];

    const goToMore=(p)=>{
        dispatch(selectedAction({p}));
        navigate(`/details`);
    };
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

    return (
        <div className={c.container}>
            <div className={c.promoPar}>
                <div>
                    <h1 className={c.ph1}>EVENT</h1>
                </div>

                <div className={c.promo}>
                    <img src='https://damion.club/uploads/posts/2022-03/1647688097_43-damion-club-p-void-spirit-kartinki-52.jpg' alt="dota2"/>
                    <div className={c.promodes}>
                        <p className={c.promoh1}>
                            GET 5 APPLE MACBOOKS !
                        </p>
                        <p className={c.promodesP}>
                            Join our tournament event !
                        </p>
                        <p className={c.promodesP}>
                            You can call your friends to play in our tournament, you just have to
                        </p>
                        <ul>
                            <li>1. Buy one Apple Watch for one team</li>
                            <li>2. You need to be not under knight rang in Dota 2</li>
                            <li>3. Join until 1 of January</li>
                        </ul>
                        <p className={c.promodesP}>
                            And after all just enjoy the game with your friends till you win the tournament!
                        </p>
                    </div>
                </div>
            </div>


            <div>
                <p className={c.topsalesP}>
                    CATEGORIES
                </p>
                <div className={c.categories}>
                    <div className={c.catcards}>
                        <Link to='/products/iphone'>
                            <p>Iphones</p>
                            <img src="https://pro100-online.ru/image/cache/catalog/goods/66368/66368_photos_0-700x500.jpeg" alt="iphone"/>
                        </Link>
                    </div>
                    <div className={c.catcards}>
                        <Link to='/products/macbook'>
                            <p>MacBooks</p>
                            <img src="https://9to5mac.com/wp-content/uploads/sites/6/2016/04/rosegoldmacbook.jpg?resize=655" alt="MacBooks"/>
                        </Link>

                    </div>
                    <div className={c.catcards}>
                        <Link to='/products/watch'>
                            <p>Apple Watches</p>
                            <img src="https://hips.hearstapps.com/amv-prod-elletw.s3.amazonaws.com/new-dossier/apple-watch-3-splash-800x618.jpg" alt="Watches"/>
                        </Link>
                    </div>
                </div>
            </div>


            <div className={c.differents}>
                <p className={c.topsalesP}>
                    OUR DIFFERENTS
                </p>
                <div className={c.info}>

                    <div className={c.infoCards}>
                        <BsShop/>
                        <p>
                            Security of your buying process
                        </p>
                    </div>
                    <div className={c.infoCards}>
                        <MdSupportAgent/>
                        <p>
                            24/7 Tech support
                        </p>
                    </div>
                    <div className={c.infoCards}>
                        <IoIosPeople/>
                        <p>
                            Over 1,000 people trust us
                        </p>
                    </div>
                    <div className={c.infoCards}>
                        <MdCategory/>
                        <p>
                            A big choose of technique
                        </p>
                    </div>
                    <div className={c.infoCards}>
                        <FaShippingFast/>
                        <p>
                            We will deliver your shop in 20 hours
                        </p>
                    </div>
                    <div className={c.infoCards}>
                        <RiNumbersFill/>
                        <p>
                            We are NUMBER ONE
                        </p>
                    </div>
                </div>
            </div>


            <div className={c.topik}>
                <p className={c.topsalesP}>
                    TOP SALES
                </p>
                <div className={c.topsales}>
                    <div className={c.topSalesI}>
                        <p className={c.topname}>{latestIphone.name}</p>
                        <img src={latestIphone.img} alt="img"/>
                        <p className={c.price}>{latestIphone.price} $</p>
                        <button onClick={()=> goToMore(latestIphone)} className={c.btnMore}>More</button>
                    </div>
                    <div className={c.topSalesI}>
                        <p className={c.topname}>{latestMac.name}</p>
                        <img src={latestMac.img} alt="img"/>
                        <p className={c.price}>{latestMac.price} $</p>
                        <button onClick={()=> goToMore(latestMac)} className={c.btnMore}>More</button>
                    </div>
                    <div className={c.topSalesI}>
                        <p className={c.topname}>{latestWatches.name}</p>
                        <img src={latestWatches.img} alt="img"/>
                        <p className={c.price}>{latestWatches.price} $</p>
                        <button onClick={()=> goToMore(latestWatches)} className={c.btnMore}>More</button>
                    </div>
                </div>
            </div>



        </div>
    );
};

export default Home;