import React from 'react';
import GenreButtons from "../../components/GenreButton.jsx/GenreButtons";
import GenreForm from "../../components/GenreMoodComponents/GenreForm";
import GenreFormResults from "../../components/GenreMoodComponents/GenreFormResults";

const GenreFormPage = () => {
    return (
        <main>
            <GenreButtons/>
            <GenreForm/>
            {/*<GenreFormResults/>*/}

        </main>

    );
};

export default GenreFormPage;