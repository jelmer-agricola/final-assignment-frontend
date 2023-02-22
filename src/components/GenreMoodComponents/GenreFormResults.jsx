import React from 'react';
import ResultCard from "../Watchlist/ResultCard";

const GenreFormResults = (results) => {
    return (
        // {results.length > 0 ? (
                <ul>
                    {results.map((mediaTitle) => (
                        <li key={mediaTitle.id}>
                            <p className="title">
                                {mediaTitle.title || mediaTitle.name}
                            </p>
                            <ResultCard mediaTitle={mediaTitle}></ResultCard>
                        </li>
                    ))}
                </ul>
            // ) : null}
    );
}

export default GenreFormResults;