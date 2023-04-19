import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
import SearchResultCard from '../../components/SearchResultCard/SearchResultCard';
import './AddPage.css';

function AddPage() {
    const [query, setQuery] = useState('');
    const [results, setResults] = useState([]);
    const [errorMessage, setErrorMessage] = useState('');
    const [isLoading, setIsLoading] = useState(false);


    useEffect(() => {
        const searchTimeout = setTimeout(async () => {
            setIsLoading(true);
            try {
                const result = await axios.get('https://api.themoviedb.org/3/search/multi', {
                    params: {
                        api_key: process.env.REACT_APP_API_KEY,
                        language: 'en-US',
                        page: 1,
                        include_adult: false,
                        query: query,
                    },
                });

                setResults(result.data.results.slice(0, 10));
                setErrorMessage('');
            } catch (error) {
                setResults([]);
                setErrorMessage('No results found, try typing in a Movie Title or the name of one of your favorite series.');
            } finally {
                setIsLoading(false);
            }
        }, 500);
        return () => clearTimeout(searchTimeout);
    }, [query]);

    const onChange = (e) => {
        setQuery(e.target.value);
    };


    return (
        <section className="outer-content-container">
            <section className="inner-content-container">
                <h2>
                    Don't know what to watch and too tired to use the searchbar
                    <Link to="/moods"> click here</Link> and we will give you suggestions
                    based on your mood.
                </h2>

                <section>
                    <div className="add-content">
                        <div className="input-wrapper">
                            <input
                                type="text"
                                placeholder="Search for a Movie or Serie"
                                value={query}
                                onChange={onChange}
                            />
                        </div>
                        {results.length === 0 && query !== '' && (
                            <p className="error-message">{errorMessage || 'No results found, try typing in a Movie Title or the name of one of your favorite series.'}</p>
                        )}
                        <ul className="results">
                            {results.map((mediaTitle) => (
                                <li key={mediaTitle.id}>
                                    <p className="media-title">
                                        {mediaTitle.title || mediaTitle.name}
                                    </p>
                                    <SearchResultCard mediaTitle={mediaTitle}></SearchResultCard>
                                </li>
                            ))}
                        </ul>

                    </div>
                </section>
            </section>
        </section>
    );
}

export default AddPage;