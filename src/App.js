import React, {useContext} from "react";
import axios from 'axios';

import {Route, Routes} from "react-router-dom";
import './App.css';
import Login from "./pages/Login/Login";
import SignUp from "./pages/SignUp/SignUp";
import Home from "./pages/Home/Home";
import NavBar from "./components/NavBar/NavBar";
import SearchBar from "./components/SearchBar/SearchBar";
import useFetch from "./hooks/useFetch";

function App() {

    const { data } = useFetch(`https://frontend-educational-backend.herokuapp.com/api/test/all`)
    console.log(data)
    // async function fetchData(e) {
    //     e.preventDefault();
    //
    //     try {
    //         const result = await axios.get(`https://frontend-educational-backend.herokuapp.com/api/test/all`)
    //         console.log(result);
    //
    //     } catch (e) {
    //         console.error(e);
    //     }
    // }


    return (
        <>
<NavBar/>
<SearchBar/>

            {/*<button onClick={data}>api data</button>*/}
            {/*<button onClick={fetchData}>api data</button>*/}


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
