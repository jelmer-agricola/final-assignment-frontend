import React, {useState} from "react";
import {Link, useNavigate} from "react-router-dom";
import axios from "axios";
import Button from '../../components/Button/Button';
import '../../App.css'
import '../Login/Login.css'
import {useForm} from 'react-hook-form';

function SignUp() {
    const {handleSubmit, formState: {errors}, register} = useForm();
    const navigate = useNavigate();

    // add state for functionality
    const [error, toggleError] = useState(false);
    const [loading, toggleLoading] = useState(false);

    const onSubmit = async (data) => {
        toggleError(false);
        toggleLoading(true);

        console.log(data.email, data.password, data.username);


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
            console.log(result);
            navigate(`/login`);

        } catch (e) {
            console.error(e);
            toggleError(true);
        }
        toggleLoading(false);
    }

    // FINALLY TOEVOEGEN
    return (
        <section className="outer-content-container">
            <div className="inner-content-container">
                <h1>Register</h1>
                <p className="login-header">Enter your details below to register. </p>

                <form className="login-form" onSubmit={handleSubmit(onSubmit)}>
                    <label className="login-form-label" htmlFor="email-field">
                        Email:</label><br/>
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
                            validate: (value) => value.includes('@') || 'Email should contain @',
                        })}
                    />
                    {errors.email && <p>{errors.email.message}</p>}
                          <br/>

                    <label htmlFor="username-field"> Username:</label><br/>
                    <input
                        className="login-form-input"
                        type="text"
                        id="username-field"
                        placeholder="Username"
                        {...register('username', {
                            minLength: {
                                value: 8,
                                message: 'Username should be at least 8 characters long',
                            },
                            required: {
                                value: true,
                                message: 'Username is required'
                            }
                        })}
                    />
                    {errors.username && <p>{errors.username.message}</p>}
                    <br/>

                    <label htmlFor="password-field"> Password:</label><br/>
                    <input
                        className="login-form-input"
                        type="password"
                        id="password-field"
                        name="password"
                        placeholder="•••••••••••••••"
                        {...register('password', {
                            minLength: {
                                value: 8,
                                message: 'password should be at least 8 characters long',
                            },
                            required: {
                                value: true,
                                message: 'password is required'
                            }
                        })}
                    />
                    {errors.password && <p>{errors.password.message}</p>}
                    <br/>


                    <Button
                        className="submit-btns"
                        children="Register"
                        type="submit"
                    />


                </form>
                <p className="login-header">Do you already have an account? You can <Link to="/login">Click here </Link>to
                    sign in</p>

            </div>
        </section>
    );

}


export default SignUp;