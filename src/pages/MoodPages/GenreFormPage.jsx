import React from 'react';
import GenreButtons from "../../components/GenreButton.jsx/GenreButtons";
import GenreForm from "../../components/GenreForm/GenreForm";
// import GenreFormResults from "../../components/GenreForm/GenreFormResults";

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