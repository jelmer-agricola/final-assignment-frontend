import React, {useContext} from "react";
import {Navigate, Route, Routes} from "react-router-dom";
import './App.css';
import {AuthContext} from "./context/AuthContext";

import Login from "./pages/AuthPages/Login";
import SignUp from "./pages/AuthPages/SignUp";
import AddPage from "./pages/AddPage/AddPage"
import Header from "./components/Header/Header";
import Home from "./pages/Home/Home"
import Footer from "./components/Footer/Footer";
import Watchlist from "./pages/Lists/Watchlist";
import Favorites from "./pages/Lists/Favorites";
import MoodPage from "./pages/MoodPages/MoodPage";
import Happy from "./pages/MoodPages/Happy"
import InLove from "./pages/MoodPages/InLove";
import Angry from "./pages/MoodPages/Angry";
import Curious from "./pages/MoodPages/Curious";
import GenreFormPage from "./pages/MoodPages/GenreFormPage";

import Sad from "./pages/MoodPages/Sad";


function App() {
    const {isAuth} = useContext(AuthContext);

    return (
        <>
            <Header/>
            <main>
                <Routes>
                    <Route exact path="/" element={<Home/>}/>
                    <Route path="/login" element={<Login/>}/>
                    <Route path="/signup" element={<SignUp/>}/>
                    {/*If not authorized rerouted to the homepage*/}
                    <Route path="/favorites" element={isAuth ? <Favorites/> : <Navigate to="/"/>}/>
                    <Route path="/watchlist" element={isAuth ? <Watchlist/> : <Navigate to="/"/>}/>
                    <Route path="/add" element={isAuth ? <AddPage/> : <Navigate to="/"/>}/>
                    <Route path="/happy" element={isAuth ? <Happy/> : <Navigate to="/"/>}/>
                    <Route path="/love" element={isAuth ? <InLove/> : <Navigate to="/"/>}/>
                    <Route path="/angry" element={isAuth ? <Angry/> : <Navigate to="/"/>}/>
                    <Route path="/curious" element={isAuth ? <Curious/> : <Navigate to="/"/>}/>
                    <Route path="/sad" element={isAuth ? <Sad/> : <Navigate to="/"/>}/>
                    <Route path="/genre-form" element={isAuth ? <GenreFormPage/> : <Navigate to="/"/>}/>
                    <Route path="/moods" element={isAuth ? <MoodPage/> : <Navigate to="/"/>}/>
                </Routes>

            </main>
            <Footer/>
        </>
    );
}

export default App;
