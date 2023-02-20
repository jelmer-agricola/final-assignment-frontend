import React from 'react';
import GenreMoodButton from "../../components/GenreMoodComponents/GenreMoodButton";
import GenreForm from "../../components/GenreMoodComponents/GenreForm";
const GenrePage = () => {
    return (
        <>
            <div>
                <h1>My Component</h1>
                <GenreMoodButton
                    secondaryGenre={12}
                    tertiaryGenre={14}
                    quaternaryGenre={10749}
                    children ="Happy"
                />
                <GenreMoodButton
                    primaryGenre={35}
                    secondaryGenre={10751}
                    tertiaryGenre={10402}
                    children ="Scared"

                />
                <GenreMoodButton
                    primaryGenre={28}
                    secondaryGenre={12}
                    tertiaryGenre={35}
                    quaternaryGenre={10751}
                    children ="Angry"

                />
                <GenreMoodButton
                    primaryGenre={99}
                    children ="Curious"

                />
                <GenreMoodButton
                    secondaryGenre={35}
                    tertiaryGenre={18}
                    quaternaryGenre={10751}
                    children ="Sad"

                />
                {/* Add more GenreMoodButtons with different props as needed */}
            </div>
        <GenreForm/>

        </>
    );
};

export default GenrePage;