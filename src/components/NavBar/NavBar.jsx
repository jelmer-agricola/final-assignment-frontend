import React, {useContext} from "react";
import {AuthContext} from '../../context/AuthContext';
import {useNavigate, Link} from 'react-router-dom';
import './NavBar.css';
import Button from "../Button/Button";

function NavBar() {
    const {isAuth, logout, user} = useContext(AuthContext);
    const navigate = useNavigate();


    return (
        <nav>
            <Link to="/">
                <h3>
                    Home
                </h3>
            </Link>

            {isAuth ?
                <>

                    <span>{user.username}</span>

                    <ul>
                        <li>
                            <Link to="/watchlist"><h3> Watchlist</h3></Link></li>
                        <li>
                            <Link to="/"><h3>Add</h3></Link>
                        </li>
                        <li>
                            <Link to="/favorites"><h3>Favorites</h3></Link>
                        </li>
                        <li>
                            <Button
                                children="uitloggen"
                                type="button"
                                onClick={logout}
                            />
                        </li>
                    </ul>


                </>
                :
                <div>
                    <Button
                        children="Log in"
                        type="button"
                        onClick={() => navigate('/login')}
                    />

                    <Button
                        children="Registreren"
                        type="button"
                        onClick={() => navigate('/signup')}
                    />

                </div>
            }
        </nav>
    );
}

export default NavBar;