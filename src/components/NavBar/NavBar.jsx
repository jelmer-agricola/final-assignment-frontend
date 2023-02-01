import React, {useContext} from "react";
import {AuthContext} from '../../context/AuthContext';
import { useNavigate, Link } from 'react-router-dom';
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
                <Button
                    children="uitloggen"
                    type="button"
                    onClick={logout}
                />

            </>
            :
            <div>
                <Button
                    children="Log in"
                    type="button"
                    onClick={() => navigate('/login')}
                />

                <Button
                    children= "Registreren"
                    type="button"
                    onClick={() => navigate('/signup')}
                />

            </div>
        }
    </nav>
);
}

export default NavBar;