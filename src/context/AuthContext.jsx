import React, {createContext, useEffect, useState} from 'react';
import {useNavigate} from 'react-router-dom';
import jwtDecode from "jwt-decode";
import axios from "axios";

export const AuthContext = createContext({});

function AuthContextProvider({children}) {
    const [isAuth, toggleIsAuth] = useState({
        isAuth: false,
        user: null,
        status: 'pending',
    })
    const navigate = useNavigate();
    // Mounting
    useEffect(() => {
//     Retrieve token from LocalStorage
        const token = localStorage.getItem('token');

        if (token) {
            const decodedToken = jwtDecode(token);
            const currentTime = Date.now() / 1000;
            if (decodedToken.exp < currentTime) {
                // Token has expired
                logout();
        } else {
                //token is valid
                void fetchUserData(token);
            }
        } else {
            toggleIsAuth({
                isAuth: false,
                user: null,
                status: 'done',
            });
        }
    }, []);

    function login(jwt) {
        localStorage.setItem('token', jwt);
        void fetchUserData(jwt, '/add');
    }

    function logout(jwt) {
        localStorage.removeItem('token');


        toggleIsAuth({
            isAuth: false,
            user: null,
            status: 'done',
        });
        navigate('/');
    }

    // Because this fetchdata function is used both in the login and for the mounting cycle, it is only declared below.    async function fetchUserData(token, redirectUrl) {
    async function fetchUserData(token, redirectUrl) {

        try {
            const result = await axios.get(`https://frontend-educational-backend.herokuapp.com/api/user`, {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`,
                },
            });
            // console.log(result);
            toggleIsAuth({
                ...isAuth,
                isAuth: true,
                user: {
                    username: result.data.username,
                    email: result.data.email,
                    id: result.data.id,
                },
                status: 'done',
            });
            if (redirectUrl) {
                navigate(redirectUrl);
            }
        } catch (e) {
            console.error(e);

            toggleIsAuth({
                isAuth: false,
                user: null,
                status: 'done',

            });
        }
    }

    const contextData = {
        isAuth: isAuth.isAuth,
        user: isAuth.user,
        login,
        logout,
    };
    return (
        <AuthContext.Provider value={contextData}>
            {isAuth.status === 'done' ? children : <p>Loading...</p>}
        </AuthContext.Provider>
    );
}


export default AuthContextProvider;