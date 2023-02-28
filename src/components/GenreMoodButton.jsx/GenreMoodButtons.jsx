import React from "react";
import {useNavigate} from "react-router-dom";
import Button from "../Button/Button";
import './GenreMoodButton.css'
import GenreMoodHeader from "./GenreMoodHeader";

const GenreMoodButtons = () => {
    const navigate = useNavigate();

    return (
        <>
            <GenreMoodHeader/>

            <section className="outer-content-container ">
                <div className="inner-content-container genre-btns">
                    <Button
                        children="😊 Happy 😊"
                        onClick={() => navigate('/happy')}
                        className="genre-btn happy"
                    />
                    <Button
                        children="🥰 In love 🥰"
                        onClick={() => navigate('/love')}
                        className="genre-btn in-love"
                    />
                    <Button
                        children="😡 Angry 😡"
                        onClick={() => navigate('/angry')}
                        className="genre-btn angry"
                    />
                    <Button
                        children="🤔 Curious  🤔"
                        onClick={() => navigate('/curious')}
                        className="genre-btn curious"
                    />
                    <Button
                        children="😢 Sad 😢"
                        onClick={() => navigate('/sad')}
                        className="genre-btn sad"
                    />
                    {/*<Button*/}
                    {/*    children="Genres"*/}
                    {/*    onClick={() => navigate('/genre-form')}*/}
                    {/*    className="genre-btn"*/}
                    {/*/>*/}

                </div>
            </section>

        </>
    );
};

export default GenreMoodButtons;
