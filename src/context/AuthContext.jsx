import React, {createContext, useEffect, useState} from 'react';
import {useNavigate} from 'react-router-dom';
// import jwtDecode from "jwt-decode";
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
            void fetchUserData(token);
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
        void fetchUserData(jwt, '/profile');
    }

    function logout(jwt) {
        // setIsAuth(false);
        console.log('Gebruiker is uitgelogd');
        // navigate('/');
        localStorage.removeItem('token');
        // localStorage.clear(); Dit haalt local storage leeg na uitloggen
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
        login: login,
        logout: logout,
    };
    return (
        <AuthContext.Provider value={contextData}>
            {isAuth.status === 'done' ? children : <p>Loading...</p>}
        </AuthContext.Provider>
    );
}


export default AuthContextProvider;