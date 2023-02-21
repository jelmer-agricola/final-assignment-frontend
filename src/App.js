import React, {useContext} from "react";
import {Route, Routes} from "react-router-dom";
import './App.css';
import Login from "./pages/Login/Login";
import SignUp from "./pages/SignUp/SignUp";
import Home from "./pages/Home/Home"
import Header from "./components/Header/Header";
import useFetch from "./hooks/useFetch";

import Footer from "./components/Footer/Footer";
import Watchlist from "./pages/Watchlist/Watchlist";
import Favorites from "./pages/Favorites/Favorites";
import GenrePage from "./pages/GenrePage/GenrePage";
import Happy from "./pages/GenrePage/Happy"
import InLove from "./pages/GenrePage/InLove";
import Angry from "./pages/GenrePage/Angry";
import Curious from "./pages/GenrePage/Curious";
import GenreFormPage from "./pages/GenrePage/GenreFormPage";

import Sad from "./pages/GenrePage/Sad";


function App() {


//     succesvol post request
// const { data, catchError, isLoading} = useFetch("https://frontend-educational-backend.herokuapp.com/api/auth/signup", 'POST', {}, {
//     username: "testtedsafst2",
//     email: "henkiepenasdfkie2fdf@novi.nl",
//     password: "123asdf456",
//     role: ["user"],
// });

    // console.log(data, isLoading, catchError);


    return (
        <>
            <Header/>
            {/*<SearchBar/>*/}

            {/*<button onClick={data}>api data</button>*/}
            {/*<button onClick={fetchData}>api data</button>*/}
            {/*{isLoading && <p>Loading...</p>}*/}
            {/*{catchError && <p>{catchError}</p>}*/}

            <main>
                <Routes>

                    <Route path="/" element={<Home/>}/>
                    {/*dynamische routing voor verschillende dingen .5*/}
                    <Route path="/watchlist" element={<Watchlist/>}/>
                    <Route path="/favorites" element={<Favorites/>}/>

                    <Route path="/happy" element={<Happy/>}/>
                    <Route path="/love" element={<InLove/>}/>
                    <Route path="/angry" element={<Angry/>}/>
                    <Route path="/curious" element={<Curious/>}/>
                    <Route path="/sad" element={<Sad/>}/>
                    <Route path="genre-form" element={<GenreFormPage/>}/>

                    <Route path="/movie/:id"/>
                    <Route path="genre" element={<GenrePage/>}/>

                    {/*<Route exact path="/login" element=<Login toggleAuthenticated={toggleAuth}/>}/>*/}
                    <Route path="/login" element={<Login/>}/>
                    <Route path="/signup" element={<SignUp/>}/>

                </Routes>
            </main>
            <Footer/>
        </>
    );
}

export default App;
