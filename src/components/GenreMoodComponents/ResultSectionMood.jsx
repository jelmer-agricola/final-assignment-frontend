import React from 'react';
import ResultCard from "../Watchlist/ResultCard";

const ResultsSectionMood = ({data}) => {
    return (
        <section className="outer-content-container">
            <div className="inner-content-container">
                {data.results && (
                    <div>
                        <ul>
                            {data.results.slice(0, 10).map((mediaTitle) => (
                                <li key={mediaTitle.id}>
                                    <p className="title">
                                        {mediaTitle.title || mediaTitle.name}
                                    </p>
                                    <ResultCard mediaTitle={mediaTitle}/>
                                </li>
                            ))}
                        </ul>
                    </div>
                )}
            </div>
        </section>
    );
};

export default ResultsSectionMood;


