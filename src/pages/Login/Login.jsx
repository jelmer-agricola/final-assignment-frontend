import React, {useContext, useState} from 'react';
import { Link } from 'react-router-dom';
import {AuthContext} from "../../context/AuthContext";
import axios from 'axios';

function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, toggleError] = useState(false);
    const { login } = useContext(AuthContext);

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
        } catch(e) {
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
        <>
            <h1>Inloggen</h1>
            <p>Dit is Login Pagina</p>
            <form onSubmit={handleSubmit}>
                <label htmlFor="email-field">Username:</label><br/>
                <input
                    type="text"
                    id="email-field"
                    name="username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}/> <br/>
                <label htmlFor="password-field">
                    Wachtwoord: </label><br />
                <input
                    type="password"
                    id="password-field"
                    name="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                /><br/>
                <button type="submit" className="registreren"> Inloggen </button>

            </form>
            <p>Heb je nog geen account? <Link to="/signup">Registreer</Link> je dan eerst.</p>
        </>
    );

}
export default Login;