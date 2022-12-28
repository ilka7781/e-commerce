import React from 'react';
import c from './iphoneCards.module.scss';
import {selectedAction} from "../../../api/reducers";
import {useDispatch} from "react-redux";
import {useNavigate} from "react-router-dom";

const AllProductCards = ({p}) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const goToMore=()=>{
        dispatch(selectedAction({p}));
        navigate(`/details`);
    };
    return (
        <div>
            <div className={c.card}>
                <img src={p.img} alt="iphone"/>
                <p className={c.name}>{p.name}</p>
                <p className={c.price}>{p.price}$</p>
                <button onClick={goToMore}>More</button>
            </div>
        </div>
    );
};

export default AllProductCards;