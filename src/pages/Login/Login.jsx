import React, {useContext, useState} from 'react';
import {Link} from 'react-router-dom';
import {AuthContext} from "../../context/AuthContext";
import axios from 'axios';
import Button from '../../components/Button/Button';
import './Login.css'


function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, toggleError] = useState(false);
    const {login} = useContext(AuthContext);

    async function handleSubmit(e) {
        e.preventDefault();
        toggleError(false);

        console.log(password, username)

        try {
            const result = await axios.post(`https://frontend-educational-backend.herokuapp.com/api/auth/signin`,
                {
                    username: username,
                    password: password,
                });
            // log het  resultaat  in de console

            console.log(result.data);
            // pass the JWT token in de login function van de context zonder accessToken werkt
            login(result.data.accessToken);
        } catch (e) {
            console.error(e);
            toggleError(true);
        }


    }

//     console.log({
//     email: email,
//     wachtwoord: password,
// });
// login();


    return (
            <section className="outer-content-container">
                <div className="inner-content-container">
                    <h1>Sign in</h1>
                    <p className="login-header">Fill in your username and password below to sign in.</p>
                    <form className="login-form" onSubmit={handleSubmit}>
                        <label className="login-form-label" htmlFor="email-field">Username:</label>
                        <br/>
                        <input
                            className="login-form-input"
                            type="text"
                            id="username-field"
                            name="username"
                            placeholder="Username"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}/>
                        <br/>
                        <label htmlFor="password-field">
                            Password: </label>
                        <br/>
                        <input
                            className="login-form-input"
                            type="password"
                            id="password-field"
                            name="password"
                            placeholder="•••••••••••••••"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        /><br/>

                        <Button
                            type="submit"
                            className="submit-btns"
                            children="Sign in"
                        />

                    </form>
                    <p className="login-header">Don't have an account yet? <Link to="/signup">Click here</Link> to create an account.</p>
                </div>
            </section>
    );

}

export default Login;