import React, {useState} from "react";
import {Link, useNavigate} from "react-router-dom";
import axios from "axios";
import Button from '../../components/Button/Button';
import '../../App.css'
import '../Login/Login.css'
import ValidateForm from "../../components/FormValidation/ValidateForm";

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

    //finally???

    return(
        <section className="outer-content-container">
            <div className="inner-content-container">
            <h1>Register</h1>
            <p className="login-header">Enter your details below to register. </p>

            <form className="login-form" onSubmit={handleSubmit}>
                {/*<ValidateForm*/}
                {/*    onSubmit={handleSubmit}*/}
                {/*    rules={{*/}
                {/*        username: { min: 6, message: "Username must be at least 6 characters long." },*/}
                {/*        password: { min: 6, message: "Password must be at least 6 characters long." },*/}
                {/*        email: { contains: "@", message: "Email must contain '@' symbol." },*/}
                {/*    }}*/}
                {/*>*/}


                <label className="login-form-label" htmlFor="email-field">
                    Email:</label><br/>
                <input
                    className="login-form-input"
                    type="text"
                    id="email-field"
                    name="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                /><br/>

                <label htmlFor="username-field"> Username:</label><br/>
                <input
                    className="login-form-input"
                    type="text"
                    id="username-field"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                /><br/>

                <label htmlFor="password-field"> Password:</label><br/>
                <input
                    className="login-form-input"
                    type="password"
                    id="password-field"
                    name="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                /><br/>
                <Button
                    className="submit-btns"
                    children="Register"
                    type="submit"
                />


            </form>
                <p className="login-header">Do you already have an account? You can <Link to="/login">Click here </Link>to sign in</p>

            </div>
        </section>
    );

}


export default SignUp;