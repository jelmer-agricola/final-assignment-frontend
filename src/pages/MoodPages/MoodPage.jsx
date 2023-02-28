import React from 'react';
import './MoodPages.css'
import GenreMoodButtons from "../../components/GenreMoodButton.jsx/GenreMoodButtons";

const MoodPage = () => {

    return (
        <>
            <GenreMoodButtons/>
            <h2>Select one of these moods and start your journey to solving your emotions through movies.</h2>
        </>
    );
};

export default MoodPage;