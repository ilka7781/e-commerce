import React from 'react';
import {useSelector} from "react-redux";
import c from "./pages.module.scss";
import WatchesCards from "../cards/watchesCards";

const WatchPage = () => {

    const productsCards = useSelector(state => state.getUser.products);
    const watchCards = productsCards.filter(item => item.category === 3);

    const watchCardsComp = watchCards?.map(p => (
        <WatchesCards key={p.id} p={p}/>
    ));

    return (
        <div className={c.container}>
            <div className={c.cardscon}>
                {
                    watchCardsComp
                }
            </div>
        </div>
    );
};

export default WatchPage;