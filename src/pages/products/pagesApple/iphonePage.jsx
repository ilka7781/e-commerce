import React from 'react';
import c from "./pages.module.scss";
import {useSelector} from "react-redux";
import IphoneCards from "../cards/iphoneCards";

const IphonePage = () => {
    const productsCards = useSelector(state => state.getUser.products);
    const iphoneCards = productsCards.filter(item => item.category === 1);

    const iphoneCardsComp = iphoneCards?.map(p => (
        <IphoneCards key={p.id} p={p}/>
    ));
    return (
        <div className={c.container}>
            <div className={c.cardscon}>
                {
                    iphoneCardsComp
                }
            </div>
        </div>
    );
};

export default IphonePage;