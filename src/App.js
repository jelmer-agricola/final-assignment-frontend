import React, {useContext} from "react";
import {Route, Routes} from "react-router-dom";
import logo from './logo.svg';
import './App.css';
import Login from "./pages/Login/Login";
import SignUp from "./pages/SignUp/SignUp";
import Home from "./pages/Home/Home";
import axios from 'axios';

function App() {


    async function fetchData(e) {
        e.preventDefault();

        try {
            const result = await axios.get(`https://frontend-educational-backend.herokuapp.com/api/test/all`)
            console.log(result);

        } catch (e) {
            console.error(e);
        }
    }


    return (
        <>
            <button onClick={fetchData}>api data</button>

            <h1>home</h1>
            {/*<Login></Login>*/}
            <SignUp></SignUp>
            <div>
                <Routes>

                    <Route path="/" element={<Home/>} />
                    {/*dynamische routing voor verschillende dingen .5*/}
                    <Route path="/movie/:id"/>
                    {/*<Route exact path="/login" element=<Login toggleAuthenticated={toggleAuth}/>}/>*/}
                    <Route path="/login" element={ <Login />} />
                    <Route path="/signup" element={<SignUp />}/>

                </Routes>
            </div>


        </>
        // <>

        // </>
    );
}

export default App;
