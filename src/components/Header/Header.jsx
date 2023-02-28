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
                        <h5>
                            Home
                        </h5>
                    </Link>

                    {isAuth ?
                        <>
                            <span className="username">{user.username}</span>
                            <ul className="nav-list">
                                <li className="nav-links">
                                    <Link to="/watchlist">
                                        <h5> Watchlist</h5>
                                    </Link>
                                </li>
                                <li className="nav-links">
                                    <Link to="/favorites">
                                        <h5>Favorites</h5>
                                    </Link>
                                </li>

                                <li className="nav-links">
                                    <Button
                                        children="ADD +"
                                        onClick={() => navigate('/add')}
                                        className="login-btn"
                                    />
                                </li>

                                <li className="nav-links">
                                    <Button
                                        children="Sign out"
                                        onClick={logout}
                                        className="login-btn"
                                    />
                                </li>
                            </ul>
                        </>
                        :
                        <div className="login-btns">
                            <Button
                                children="Sign in"
                                onClick={() => navigate('/login')}
                                className="login-btn"
                            />
                            <Button
                                children="Register"
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