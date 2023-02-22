import Button from "../Button/Button";
import './GenreButton.css'
import React from "react";

import {useNavigate} from "react-router-dom";

const GenreButtons = () => {
    const navigate = useNavigate();

    return (
        <section className="outer-content-container ">
            <div className="inner-content-container genre-btns">
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
                <Button
                    children="Genres"
                    onClick={() => navigate('/genre-form')}
                    className="genre-btn"
                />
            </div>
        </section>
    );
};

export default GenreButtons;
