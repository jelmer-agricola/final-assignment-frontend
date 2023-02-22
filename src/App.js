import React, {useContext} from "react";
import {Route, Routes} from "react-router-dom";
import './App.css';
import Login from "./pages/Login/Login";
import SignUp from "./pages/SignUp/SignUp";
import AddPage from "./pages/AddPage/AddPage"
import Header from "./components/Header/Header";
import Home from "./pages/Home/Home"
import Footer from "./components/Footer/Footer";
import Watchlist from "./pages/Watchlist/Watchlist";
import Favorites from "./pages/Favorites/Favorites";
import MoodPage from "./pages/MoodPages/MoodPage";
import Happy from "./pages/MoodPages/Happy"
import InLove from "./pages/MoodPages/InLove";
import Angry from "./pages/MoodPages/Angry";
import Curious from "./pages/MoodPages/Curious";
import GenreFormPage from "./pages/MoodPages/GenreFormPage";

import Sad from "./pages/MoodPages/Sad";


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

            {/*<button onClick={data}>api data</button>*/}
            {/*<button onClick={fetchData}>api data</button>*/}
            {/*{isLoading && <p>Loading...</p>}*/}
            {/*{catchError && <p>{catchError}</p>}*/}

            <main>
                <Routes>

                    <Route path="/add" element={<AddPage/>}/>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/watchlist" element={<Watchlist/>}/>
                    <Route path="/favorites" element={<Favorites/>}/>

                    <Route path="/happy" element={<Happy/>}/>
                    <Route path="/love" element={<InLove/>}/>
                    <Route path="/angry" element={<Angry/>}/>
                    <Route path="/curious" element={<Curious/>}/>
                    <Route path="/sad" element={<Sad/>}/>
                    <Route path="genre-form" element={<GenreFormPage/>}/>

                    <Route path="moods" element={<MoodPage/>}/>

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
