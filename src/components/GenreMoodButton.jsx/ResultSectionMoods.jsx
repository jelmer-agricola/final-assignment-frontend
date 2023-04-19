import React from 'react';
import SearchResultCard from "../SearchResultCard/SearchResultCard";
import '../../pages/MoodPages/MoodPages.css'

const ResultsSectionMood = ({data}) => {

    return (
        <section className="outer-content-container">
            <section className="inner-content-container mood-page-results">

                {data.results && (
                    <div className="mood-page-result">
                        <ul>
                            {data.results.slice(0, 10).map((mediaTitle) => (
                                <li key={mediaTitle.id}>
                                    <p className="media-title">
                                        {mediaTitle.title || mediaTitle.name}
                                    </p>
                                    <SearchResultCard mediaTitle={mediaTitle}/>
                                </li>
                            ))}
                        </ul>
                    </div>
                )}
            </section>
        </section>
    );
};

export default ResultsSectionMood;


