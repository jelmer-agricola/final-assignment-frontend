import React, {useContext} from "react";
import {AuthContext} from '../../context/AuthContext';
import {useNavigate, Link} from 'react-router-dom';
import './Header.css';
import '../../App.css'
import Button from "../Button/Button";

function Header() {
    const {isAuth, logout, user} = useContext(AuthContext);
    const navigate = useNavigate();


    return (
        <header className="outer-content-container">
            <nav className="inner-content-container">
                <div className="navbar-items">
                    <Link to="/" className="nav-links">
                        <h3 >
                            Home
                        </h3>
                    </Link>

                    {isAuth ?
                        <>

                            <span className="username">{user.username}</span>

                            <ul className="nav-list">

                                <li className="nav-links">
                                    <Link to="/watchlist"><h3> Watchlist</h3></Link></li>

                                <li className="nav-links">
                                    <Link to="/favorites"><h3>Favorites</h3></Link>
                                </li>
                                <li className="nav-links">
                                    <Button
                                        children="ADD +"
                                        onClick={() => navigate('/')}
                                        className="login-btn"
                                    />

                                </li>
                                <li className="nav-links">
                                    <Button
                                        children="uitloggen"
                                        onClick={logout}
                                        className="login-btn"
                                    />
                                </li>

                            </ul>


                        </>
                        :
                        <div className="login-btns">
                            <Button
                                children="Log in"
                                onClick={() => navigate('/login')}
                                className="login-btn"

                            />

                            <Button
                                children="Registreren"
                                onClick={() => navigate('/signup')}
                                className="login-btn"
                            />

                        </div>
                    }
                </div>
            </nav>
        </header>
    );
}

export default Header;