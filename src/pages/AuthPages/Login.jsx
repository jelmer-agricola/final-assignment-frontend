import React, {useContext, useState} from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';
import axios from 'axios';
import Button from '../../components/Button/Button';
import './AuthPages.css';

function Login() {
    const {handleSubmit, formState: {errors}, register} = useForm();
    const { login } = useContext(AuthContext);
    const [errorMessageCredentials, setErrorMessageCredentials] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    const onSubmit = async (data) => {
        try {
            const result = await axios.post(`https://frontend-educational-backend.herokuapp.com/api/auth/signin`, {
                username: data.username,
                password: data.password,
            });
            login(result.data.accessToken);
        } catch (e) {
            console.error(e);
            setErrorMessageCredentials(e.response?.data?.message || "Either your password or username is incorrect.");
        }
        setIsLoading(false);
    };



return(
    <section className="outer-content-container">
        <div className="inner-content-container">
            <h1>Sign in</h1>
            <p className="login-header">Fill in your username and password below to sign in.</p>
            <form className="login-form" onSubmit={handleSubmit(onSubmit)}>
                <label className="login-form-label" htmlFor="username-field">
                    Username:
                </label>
                <br />
                <input
                    className="login-form-input"
                    type="text"
                    id="username-field"
                    name="username"
                    placeholder="Username"
                    {...register('username', {
                        minLength: {
                            value: 8,
                            message: 'Your username should contain at least 8 characeters',
                        },
                        required: {
                            value: true,
                            message: 'Username is required'
                        }
                    })}
                />
                {errors.username && <p className="login-error-message">{errors.username.message}</p>}
                {errorMessageCredentials && <p className="login-error-message">{errorMessageCredentials}</p>}
                <br />

                <label htmlFor="password-field">Password: </label>

                <br />
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
                {errorMessageCredentials && <p className="login-error-message">{errorMessageCredentials}</p>}

                <br />

                <Button type="submit" className="submit-btns">
                    Sign in
                </Button>
            </form>
            <p className="login-header">
                Don't have an account yet? <Link to="/signup">Click here</Link> to create an account.
            </p>
        </div>
    </section>
);
}

export default Login;