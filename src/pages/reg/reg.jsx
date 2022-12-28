import React, {useState} from 'react';
import c from './reg.module.scss';
import {useForm} from "react-hook-form";
import {useDispatch} from "react-redux";
import axios from "axios";
import {getRegisterAction} from "../../api/reducers";


const Reg = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [about, setAbout] = useState('');
    const [success,setSuccess] = useState(false);
    const [error, setError] = useState(false);
    const dispatch = useDispatch();


    const {register, handleSubmit, formState: {errors}} = useForm({
        mode: "onBlur",
        defaultValues: {
            username: '',
            email: '',
            password: '',
            about: ''
        }
    });

    const onSubmit = (data) => {
        console.log(data);
    };
    const createUser =  (e) => {
        e.preventDefault();
        if (username !== '' && email !== '' && password !== '' && about !== '') {
            axios.post('https://cryxxen.pythonanywhere.com/users/user/', {
                username,
                email,
                about,
                password
            }).then(response => {
                console.log(response.data);
                dispatch(getRegisterAction(response.data))
            })
                .catch(error => {
                    console.log(error);
                });
            axios.post('https://cryxxen.pythonanywhere.com/token/',{
                username,
                password
            }).then(response => {
               localStorage.setItem('accessToken', response.data.access);
               localStorage.setItem('refreshToken', response.data.refresh);
            }).catch(error => {
                console.log(error);
            })
            setSuccess(true);
        } else {
            setError(true);
            setSuccess(false)
        }
        setUsername('');
        setEmail('');
        setPassword('');
        setAbout('');

    }
    return (
        <div className={c.reg}>
            <form onSubmit={handleSubmit(onSubmit)} className={c.form}>
                <h1>Registration</h1>
                {
                    success ? (
                        <div className={c.success}>
                            <h1>You are registrated!</h1>
                        </div>
                    ) : error ? (
                        <div className={c.error}>
                            <h1>Fill the form!</h1>
                        </div>
                    ) : (
                        console.log('other errors')
                    )
                }
                {/*username*/}
                <p className={c.form_label}>
                    Username
                </p>

                <input {...register("username", {
                    required: 'Please fill username',
                    pattern: /^[A-Za-z]+$/i
                })} type="text" placeholder='Username'
                       onChange={e => setUsername(e.target.value)} value={username}/>
                {errors?.username && <span className={c.errors}>{errors?.username.message}</span>}

                {/*Email*/}
                <p className={c.form_label}>
                    Email
                </p>
                <input {...register("email", {
                    required: 'Fill email',
                    pattern: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3})|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
                })}
                       type="email" placeholder='example@example.com' onChange={e => setEmail(e.target.value)}
                       value={email}
                />
                {errors?.email && <span className={c.errors}>{errors?.email.message}</span>}


                {/*Password*/}
                <p className={c.form_label}>
                    Password
                </p>
                <input {...register("password", {required: 'Fill password', minLength: 8})} type="password"
                       placeholder='Password'
                       onChange={e => setPassword(e.target.value)} value={password}
                />
                {errors?.password && <span className={c.errors}>{errors?.password.message}</span>}

                {/*About yourself*/}
                <p className={c.form_label}>
                    About yourself
                </p>
                <input {...register("about", {required: 'Fill the about info', minLength: 3, maxLength: 15})}
                       type="text" placeholder='About' onChange={e => setAbout(e.target.value)} value={about}/>
                {errors?.about && <span className={c.errors}>{errors?.about.message}</span>}

                <button type='submit' className={c.form_submit} onClick={createUser}>Submit</button>
            </form>

        </div>
    );
};

export default Reg;