import React, {useContext} from "react";
import {AuthContext} from '../../context/AuthContext';
import { useNavigate, Link } from 'react-router-dom';
import './NavBar.css';
import Searchbar from "../Searchbar/Searchbar";

function NavBar() {
    const {isAuth, logout, user } = useContext(AuthContext);
    const navigate = useNavigate();

return (
    <nav>
        <Link to="/">
            <h3>
                Home
            </h3>
        </Link>
        <Searchbar/>

        {isAuth ?
            <>
                <span>{user.email}
                </span>
                <button
                    type="button"
                    onClick={logout}
                >
                    Log uit
                </button>
            </>
            :
            <div>
                <button
                    type="button"
                    onClick={() => navigate('/login')}
                >
                    Log in
                </button>
                <button
                    type="button"
                    onClick={() => navigate('/signup')}
                >
                    Registreren
                </button>
            </div>
        }
    </nav>
);
}

export default NavBar;