import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';
import axios from 'axios';
import Button from '../../components/Button/Button';
import './Login.css';
import { useForm } from 'react-hook-form';

function Login() {
    const {handleSubmit, formState: {errors}, register} = useForm();
    const { login } = useContext(AuthContext);

    const onSubmit = async (data) => {
        try {
            const result = await axios.post(`https://frontend-educational-backend.herokuapp.com/api/auth/signin`, {
                username: data.username,
                password: data.password,
            });
            // log het  resultaat  in de console

            console.log(result.data);
            // pass the JWT token in de login function van de context zonder accessToken werkt

            login(result.data.accessToken);
        } catch (e) {
            console.error(e);
        }
    };

// FINALLY TOEVOEGEN


//     console.log({
//     email: email,
//     wachtwoord: password,
// });
// login();

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
                            message: 'Username should be at least 8 characters long',
                        },
                        required: {
                            value: true,
                            message: 'Username is required'
                        }
                    })}
                />
                {errors.username && <p>{errors.username.message}</p>}
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
                            message: 'password should be at least 8 characters long',
                        },
                        required: {
                            value: true,
                            message: 'password is required'
                        }
                    })}
                />
                {errors.password && <p>{errors.password.message}</p>}
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