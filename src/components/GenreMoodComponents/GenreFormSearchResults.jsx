import React from 'react';
import ResultCard from "../Watchlist/ResultCard";

function GenreFormSearchResults({ isLoading, error, results }) {
    return (
        <div>
            {isLoading ? <p>Loading...</p> : null}
            {error ? <p>{error}</p> : null}
            {results.length > 0 ? (
                <ul>
                    {results.map((mediaTitle) => (
                        <li key={mediaTitle.id}>
                            <p className="title">{mediaTitle.title || mediaTitle.name}</p>
                            <ResultCard mediaTitle={mediaTitle}></ResultCard>
                        </li>
                    ))}
                </ul>
            ) : null}
        </div>
    );
};

export default GenreFormSearchResults;