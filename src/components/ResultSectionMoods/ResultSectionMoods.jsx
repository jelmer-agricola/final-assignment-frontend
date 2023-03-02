import React from 'react';
import ResultCard from "../WatchlistComponents/ResultCard";
import '../../pages/MoodPages/MoodPages.css'



const ResultsSectionMood = ({data}) => {

    return (
        <section className="outer-content-container">
            <div className="inner-content-container mood-page-results">

                {data.results && (
                    <div className="mood-page-result">
                        <ul>
                            {data.results.slice(0, 10).map((mediaTitle) => (
                                <li key={mediaTitle.id}>
                                    <p className="media-title">
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


