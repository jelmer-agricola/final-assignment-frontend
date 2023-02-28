import React from 'react';
import GenreMoodButtons from "../../components/GenreMoodButton.jsx/GenreMoodButtons";
import GenreForm from "../../components/GenreForm/GenreForm";
// import GenreFormResults from "../../components/GenreForm/GenreFormResults";

const GenreFormPage = () => {
    return (
        <>
            <GenreMoodButtons/>
            <GenreForm/>
            {/*<GenreFormResults/>*/}

        </>

    );
};

export default GenreFormPage;