import React, {useState} from 'react';
import {useSelector} from "react-redux";
import IphoneCards from "./cards/iphoneCards";
import c from './products.module.scss';
import MacbookCards from "./cards/macbookCards";
import WatchesCards from "./cards/watchesCards";
import AllProductCards from "./cards/allProductCards";

const Products = () => {
    const productsCards = useSelector(state => state.getUser.products);
    const iphoneCards = productsCards.filter(item => item.category === 1);
    const macbookCards = productsCards.filter(item => item.category === 2);
    const watchCards = productsCards.filter(item => item.category === 3);
    const [iphone, setIphone] = useState(false);
    const [macbook, setMacbook] = useState(false);
    const [watch, setWatch] = useState(false);

    const iphoneCardsComp = iphoneCards?.map(p => (
        <IphoneCards key={p.id} p={p}/>
    ));
    const macbookCardsComp = macbookCards?.map(p => (
        <MacbookCards key={p.id} p={p}/>
    ));
    const watchCardsComp = watchCards?.map(p => (
        <WatchesCards key={p.id} p={p}/>
    ));


    return (
            <div className={c.container}>
                <div className={c.filter}>
                    <button onClick={() => {
                        setIphone(true);
                        setWatch(false);
                        setMacbook(false);
                    }}>Iphones
                    </button>
                    <button onClick={() => {
                        setIphone(false);
                        setWatch(false);
                        setMacbook(true);
                    }}>MacBooks
                    </button>
                    <button onClick={() => {
                        setIphone(false);
                        setWatch(true);
                        setMacbook(false);
                    }}>Apple Watches
                    </button>
                </div>
                <div className={c.cardscon}>

                    {
                        iphone ? (
                            iphoneCardsComp
                        ) : macbook ? (
                            macbookCardsComp
                        ) : watch ? (
                            watchCardsComp
                        ) : (
                            productsCards?.map(p => (
                                <AllProductCards p={p}/>
                            ))
                        )
                    }

                </div>
            </div>
    );
};

export default Products;