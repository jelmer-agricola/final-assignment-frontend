import GenreMoodButton from "./GenreMoodButton";
import React from "react";


const GenreMoodButtons = () => {
    return (
        <section className="outer-content-container">
            <div className="inner-content-container genre-page">
                <GenreMoodButton
                    secondaryGenre={12}
                    tertiaryGenre={14}
                    quaternaryGenre={10749}
                    children="😊 Happy 😊"
                />
                <GenreMoodButton
                    primaryGenre={35}
                    secondaryGenre={10751}
                    tertiaryGenre={10402}
                    children="🥰 In love 🥰"
                />
                <GenreMoodButton
                    primaryGenre={28}
                    secondaryGenre={12}
                    tertiaryGenre={35}
                    quaternaryGenre={10751}
                    children="😡 Angry 😡"
                />
                <GenreMoodButton
                    primaryGenre={99}
                    children="🤔 Curious  🤔"
                />
                <GenreMoodButton
                    secondaryGenre={35}
                    tertiaryGenre={18}
                    quaternaryGenre={10751}
                    children=" 😢 Sad 😢 "
                />
            </div>
        </section>

    );
};

export default GenreMoodButtons;

