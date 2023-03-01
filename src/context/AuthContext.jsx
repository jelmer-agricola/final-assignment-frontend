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
//     Token ophalen uit LocalStorage
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
        // dependecies lege array meegeven
    }, []);

    function login(jwt) {
        console.log('gebruiker is ingelogd!')
        localStorage.setItem('token', jwt);
        void fetchUserData(jwt, '/add');
    }

    function logout(jwt) {
        console.log('Gebruiker is uitgelogd');
        // Hieronder haalt token uit localstorage
        localStorage.removeItem('token');
        // localStorage.clear();
        // Dit haalt local storage leeg na uitloggen is er dus geen watchlist e.d. meer over
        // localStorage.token(); token tot niks
        //

        toggleIsAuth({
            isAuth: false,
            user: null,
            status: 'done',
        });
        console.log('Gebruiker is uitgelogd!');
        navigate('/');
    }

//  Omdat deze fetchdata functie zowel in de login wordt gebruikt als voor de mounting cyclus wordt gebruikt is die hieronder pas gedeclareerd
    async function fetchUserData(token, redirectUrl) {
        try {
            const result = await axios.get(`https://frontend-educational-backend.herokuapp.com/api/user`, {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`,
                },
            });
            console.log(result);
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