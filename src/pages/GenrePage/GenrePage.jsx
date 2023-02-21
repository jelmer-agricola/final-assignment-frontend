import React from 'react';
import GenreMoodButtons from "../../components/GenreMoodComponents/GenreMoodButtons";
import GenreForm from "../../components/GenreMoodComponents/GenreForm";
import './GenrePage.css'
import GenreButtons from "../../components/Button/GenreButtons";

const GenrePage = () => {

    return (
        <main>
            <GenreMoodButtons/>
            <GenreButtons/>
        </main>
    );
};

export default GenrePage;