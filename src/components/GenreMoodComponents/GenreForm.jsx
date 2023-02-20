import React, { useState } from 'react';
import axios from 'axios';
import ResultCard from '../Watchlist/ResultCard';
import '../Watchlist/Watchlist.css';

function GenreForm() {
    const [genre, setGenre] = useState('');
    const [results, setResults] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');

    const handleSearch = async () => {
        setIsLoading(true);
        try {
            const result = await axios.get(
                'https://api.themoviedb.org/3/discover/movie',
                {
                    params: {
                        api_key: process.env.REACT_APP_API_KEY,
                        with_genres: genre,
                        sort_by: 'vote_average.desc',
                        'vote_count.gte': 1000,
                        page: 1,
                    },
                }
            );
            setResults(result.data.results.slice(0, 10));
            setError('');
        } catch (err) {
            console.error(err);
            setResults([]);
            setError('Failed to fetch movie data');
        } finally {
            setIsLoading(false);
        }
    };



    const handleGenreChange = (event) => {
        setGenre(event.target.value);
        setResults([]);
    };
    console.log(results);

    return (
        <div className="view-height">
            <div className="outer-content-container">
                <section className="inner-content-container">
                    <form
                        onSubmit={(event) => {
                            event.preventDefault();
                            handleSearch();
                        }}
                    >
                        <label>
                            Genre:
                            <select value={genre} onChange={handleGenreChange}>
                                <option value="">All</option>
                                <option value="28">Action</option>
                                <option value="12">Adventure</option>
                                <option value="16">Animation</option>
                                <option value="35">Comedy</option>
                                <option value="80">Crime</option>
                                <option value="99">Documentary</option>
                                <option value="18">Drama</option>
                                <option value="10751">Family</option>
                                <option value="14">Fantasy</option>
                                <option value="36">History</option>
                                <option value="27">Horror</option>
                                <option value="10402">Music</option>
                                <option value="9648">Mystery</option>
                                <option value="10749">Romance</option>
                                <option value="878">Science Fiction</option>
                                <option value="53">Thriller</option>
                                <option value="10752">War</option>
                                <option value="37">Western</option>
                            </select>
                        </label>
                        <button type="submit">Search</button>
                        {/*<button onClick={handleCurious}>Curious</button>*/}


                    </form>
                    {isLoading ? <p>Loading...</p> : null}
                    {error ? <p>{error}</p> : null}
                    {results.length > 0 ? (
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
                    ) : null}

                </section>
            </div>

        </div>
    );
}

export default GenreForm;
