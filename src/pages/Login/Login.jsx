import React from 'react';
import './Login.css';
// import {Link} from "react-router-dom";
import {useNavigate} from "react-router-dom";



function Login({toggleAuthenticated}) {
    const navigate = useNavigate();


    function signIn() {
        toggleAuthenticated(true);
        navigate("/");

    }

    return(
        <>
            <main className="page-container">
                <h1>Login pagina</h1>
                <p>Druk op de knop om je in te loggen!</p>
                <button type="button" onClick={signIn}>Inloggen</button>

            </main>
        </>
    );

}

export default Login;