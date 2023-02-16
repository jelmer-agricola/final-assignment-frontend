import React, {useState} from "react";
import {Link, useNavigate} from "react-router-dom";
import axios from "axios";
import Button from '../../components/Button/Button';
import '../../App.css'

function SignUp() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const navigate = useNavigate();

//     voor functionaliteit state toevoegen
    const [error, toggleError] = useState(false);
    const [loading, toggleLoading] = useState(false);

    async function handleSubmit(e){
        e.preventDefault();
        toggleError(false);
        toggleLoading(true);

        console.log(email, password, username)

        try {
            const result = await axios.post("https://frontend-educational-backend.herokuapp.com/api/auth/signup",
                {
                    email: email,
                    password: password,
                    username: username,
                    role: ["user"],
                });
            console.log(result);
            navigate(`/login`)

        }catch (e) {
            console.error(e);
            toggleError(true);
        }
        toggleLoading(false);
    }

    return(
        <main>
        <section className="outer-content-container">
            <div className="inner-content-container">
            <h1>Registreren</h1>
            <p>Vul hieronder je gegevens in om je te registeren. Heb je al een account? Je kunt je <Link to="/login">hier</Link> inloggen.</p>

            <form onSubmit={handleSubmit}>
                <label htmlFor="email-field">
                    Email adres:</label><br/>
                <input
                    type="text"
                    id="email-field"
                    name="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                /><br/>

                <label htmlFor="username-field"> Gebruikersnaam:</label><br/>
                <input
                    type="text"
                    id="username-field"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                /><br/>

                <label htmlFor="password-field"> Wachtwoord:</label><br/>
                <input
                    type="password"
                    id="password-field"
                    name="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                /><br/>
                <Button
                    children="Registreren"
                    type="submit"
                />
            </form>
            </div>
        </section>
        </main>
    );

}


export default SignUp;