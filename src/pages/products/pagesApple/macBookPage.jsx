import React from 'react';
import {useSelector} from "react-redux";
import c from "./pages.module.scss";
import MacbookCards from "../cards/macbookCards";

const MacBookPage = () => {
    const productsCards = useSelector(state => state.getUser.products);
    const macbookCards = productsCards.filter(item => item.category === 2);

    const macbookCardsComp = macbookCards?.map(p => (
        <MacbookCards key={p.id} p={p}/>
    ));
    return (
        <div className={c.container}>
            <div className={c.cardscon}>
                {
                    macbookCardsComp
                }
            </div>
        </div>
    );
}
export default MacBookPage;