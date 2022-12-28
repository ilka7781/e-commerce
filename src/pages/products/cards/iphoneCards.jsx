import React from 'react';
import c from './iphoneCards.module.scss';
import {useNavigate} from "react-router-dom";
import {useDispatch} from "react-redux";
import {selectedAction} from "../../../api/reducers";

const IphoneCards = ({p}) => {
    const navigate=useNavigate();
    const dispatch= useDispatch();

    const goToMore=()=>{
        dispatch(selectedAction({p}));
        navigate(`/details`);
    };

    return (
        <div className={c.card}>
            <img src={p.img} alt="iphone"/>
            <p className={c.name}>{p.name}</p>
            <p className={c.price}>{p.price}$</p>
            <button onClick={goToMore}>More</button>
        </div>
    );
};

export default IphoneCards;