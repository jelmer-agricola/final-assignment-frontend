import React, {useState, } from "react";
import {Link, useNavigate} from "react-router-dom";
import axios from "axios";
import Button from '../../components/Button/Button';
import '../../App.css'
import './AuthPages.css'
import {useForm} from 'react-hook-form';

function SignUp() {
    const {handleSubmit, formState: {errors}, register} = useForm();
    const navigate = useNavigate();
    const [error, toggleError] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const onSubmit = async (data) => {
        toggleError(false);
        setIsLoading(true);

        try {
            const result = await axios.post(
                "https://frontend-educational-backend.herokuapp.com/api/auth/signup",
                {
                    email: data.email,
                    password: data.password,
                    username: data.username,
                    role: ["user"],
                }
            );
            // console.log(result);
            navigate(`/login`);

        } catch (e) {
            console.error(e);
            toggleError(true);
        }
        setIsLoading(false);
    };


    return (
        <section className="outer-content-container">
            <section className="inner-content-container">
                <h1>Register</h1>
                <p className="login-header">Enter your details below to register. </p>

                <form className="login-form" onSubmit={handleSubmit(onSubmit)}>
                    <label className="login-form-label" htmlFor="email-field">
                        Email:</label>
                    <input
                        className="login-form-input"
                        type="text"
                        // id="email-field"
                        name="email"
                        placeholder="Email"
                        {...register("email", {
                            required: {
                                value: true,
                                message: "Email is required",
                            },
                            validate: (value) => value.includes('@') || 'Email should contain an @',
                        })}
                    />
                    {errors.email && <p className= "login-error-message">{errors.email.message}</p>}


                    <label htmlFor="username-field"> Username:</label>
                    <input
                        className="login-form-input"
                        type="text"
                        id="username-field"
                        placeholder="Username"
                        {...register('username', {
                            minLength: {
                                value: 8,
                                message: 'Your username should contain at least 8 characters',
                            },
                            required: {
                                value: true,
                                message: 'Username is required'
                            }
                        })}
                    />
                    {errors.username && <p className="login-error-message">{errors.username.message}</p>}


                    <label htmlFor="password-field"> Password:</label>
                    <input
                        className="login-form-input"
                        type="password"
                        id="password-field"
                        name="password"
                        placeholder="•••••••••••••••"
                        {...register('password', {
                            minLength: {
                                value: 8,
                                message: 'Your password should contain at least 8 characters',
                            },
                            required: {
                                value: true,
                                message: 'Password is required'
                            }
                        })}
                    />
                    {errors.password && <p className="login-error-message">{errors.password.message}</p>}


                    <Button
                        className="submit-btns"
                        children="Register"
                        type="submit"
                    />


                </form>
                <p className="login-header">Do you already have an account? You can <Link to="/login">Click here </Link>to
                    sign in</p>
            </section>
        </section>
    );

}


export default SignUp;