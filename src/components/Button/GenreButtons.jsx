import Button from "./Button";
import React from "react";
import {useNavigate} from "react-router-dom";


const GenreButtons = () => {
    const navigate = useNavigate();

    return (
<>
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
        </>
    );
};

export default GenreButtons;
