import React from 'react';
import ResultCard from "../../components/Watchlist/ResultCard";

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
                                    <ResultCard mediaTitle={mediaTitle}></ResultCard>
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


