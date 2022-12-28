import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import c from './myProfile.module.scss';
import {useNavigate} from "react-router-dom";
import axios from "axios";
import {getRegisterAction, isFetchingAction, resetAction} from "../../api/reducers";
import Loader from "../../loader/loader";

const MyProfile = () => {
    const user = useSelector(state => state.getUser.user);
    const accessToken = localStorage.getItem('accessToken');
    const refreshToken = localStorage.getItem('refreshToken');
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const isFetching = useSelector(state => state.getUser.isFetching);

    const signOut = () => {
        axios.post('https://cryxxen.pythonanywhere.com/token/refresh/', {
            refresh: refreshToken
        }).then((res) => {
            dispatch(resetAction(res.data));
            localStorage.clear();
        });
    }
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
                dispatch(getRegisterAction(res.data)),
            )
            dispatch(isFetchingAction(false))
        }
        }, [user])

     return (
         <div className={c.container}>
             {
                 isFetching ? (
                     <Loader/>
                 ) : accessToken ? (
                     <div className={c.userDiv}>
                         <img src="https://i.ytimg.com/vi/9P0EKllGBQg/maxresdefault.jpg" alt="ava"/>
                         <h1>{user.username}</h1>
                         <span>{user.about}</span>

                         <p>{user.email}</p>
                         <button className={c.sign} onClick={signOut}>Sign Out</button>
                     </div>
                 ) : (
                         <div className={c.btns}>
                             <button className={c.reg} onClick={goToReg}>Go to registration</button>
                         </div>
                 )
             }
         </div>


    );
};

export default MyProfile;