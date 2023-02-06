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
import Footer from "./components/Footer/Footer";
import Watchlist from "./components/Watchlist/Watchlist";
import AddPage from "./components/Watchlist/AddPage";
import "./lib/font-awesome/css/all.min.css";


function App() {



    // succesvol post request
// const { data, catchError, isLoading} = useFetch("https://frontend-educational-backend.herokuapp.com/api/auth/signup", 'POST', {}, {
//     username: "testtedsafst2",
//     email: "henkiepenasdfkie2fdf@novi.nl",
//     password: "123asdf456",
//     role: ["user"],
// });

    // console.log(data, isLoading, catchError);


    return (
        <>
        <NavBar/>
{/*<SearchBar/>*/}

            {/*<button onClick={data}>api data</button>*/}
            {/*<button onClick={fetchData}>api data</button>*/}
            {/*{isLoading && <p>Loading...</p>}*/}
            {/*{catchError && <p>{catchError}</p>}*/}

            <div>
                <Routes>

                    <Route path="/" element={<Home/>} />
                    {/*dynamische routing voor verschillende dingen .5*/}
                    <Route path="/watchlist" element={<Watchlist/>} />
                    <Route path="/add" element={<AddPage/>} />

                    <Route path="/movie/:id"/>
                    <Route path="/"/>
                    {/*<Route exact path="/login" element=<Login toggleAuthenticated={toggleAuth}/>}/>*/}
                    <Route path="/login" element={ <Login />} />
                    <Route path="/signup" element={<SignUp />}/>

                </Routes>
            </div>
<Footer/>
        </>
    );
}

export default App;
