import React, { useState } from 'react';
import GenreMoodButton from "../../components/GenreMoodComponents/GenreMoodButton";
import GenreForm from "../../components/GenreMoodComponents/GenreForm";
import './GenrePage.css'
import {useNavigate} from "react-router-dom";
import Button from "../../components/Button/Button";

const GenrePage = () => {
    // const [results, setResults] = useState([]);
    // const handleResults = (newResults) => {
    //     setResults(newResults);
    // };

    const navigate = useNavigate();


    return (
        <main>
            <section className="outer-content-container">
                {/*<div className="inner-content-container genre-page">*/}
                {/*    <GenreMoodButton*/}
                {/*        secondaryGenre={12}*/}
                {/*        tertiaryGenre={14}*/}
                {/*        quaternaryGenre={10749}*/}
                {/*        children="😊 Happy 😊"*/}

                {/*    />*/}

                {/*    <GenreMoodButton*/}
                {/*        primaryGenre={35}*/}
                {/*        secondaryGenre={10751}*/}
                {/*        tertiaryGenre={10402}*/}
                {/*        children="🥰 In love 🥰"*/}

                {/*    />*/}
                {/*    <GenreMoodButton*/}
                {/*        primaryGenre={28}*/}
                {/*        secondaryGenre={12}*/}
                {/*        tertiaryGenre={35}*/}
                {/*        quaternaryGenre={10751}*/}
                {/*        children="😡 Angry 😡"*/}
                {/*    />*/}

                {/*    <GenreMoodButton*/}
                {/*        primaryGenre={99}*/}
                {/*        children="🤔 Curious  🤔"*/}
                {/*    />*/}

                {/*    <GenreMoodButton*/}
                {/*        secondaryGenre={35}*/}
                {/*        tertiaryGenre={18}*/}
                {/*        quaternaryGenre={10751}*/}
                {/*        children=" 😢 Sad 😢 "*/}

                {/*    />*/}
                {/*</div>*/}

                <Button
                    children="😊 Happy 😊 r"
                    onClick={() => navigate('/happy')}
                    className="genre-btn"
                />
                <Button
                    children="🥰 In love 🥰 r"
                    onClick={() => navigate('/love')}
                    className="genre-btn"

                />
                <Button
                    children="😡 Angry 😡 r"
                    onClick={() => navigate('/angry')}
                    className="genre-btn"

                />
                <Button
                    children="🤔 Curious  🤔 r"
                    onClick={() => navigate('/curious')}
                    className="genre-btn"

                />
                <Button
                    children="😢 Sad 😢 r"
                    onClick={() => navigate('/sad')}
                    className="genre-btn"

                />


            </section>



                <section className="outer-content-container">
                    <GenreForm/>
                </section>


        </main>
    );
};

export default GenrePage;