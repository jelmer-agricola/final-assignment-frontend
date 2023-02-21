import React from 'react';
import GenreButtons from "../../components/Button/GenreButtons";
import GenreForm from "../../components/GenreMoodComponents/GenreForm";

const GenreFormPage = () => {
    return (
        <main>
            <GenreButtons/>
            <GenreForm/>
        </main>

    );
};

export default GenreFormPage;