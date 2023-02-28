import React, {useState, useEffect} from 'react';
import axios from 'axios';
import ResultCard from '../WatchlistComponents/ResultCard';
import GenreSelect from './GenreSelect'
import '../WatchlistComponents/WatchlistComponents.css';
import './GenreForm.css'

// useEffect toevoegen!!

// context allen de select als component maken
// result in context en vervolgens import maken van die context



function GenreForm() {
    const [genre, setGenre] = useState('');
    const [results, setResults] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');

    useEffect(() => {

    const handleSearch = async (selectedGenre) => {
        setIsLoading(true);
        try {
            const result = await axios.get(
                'https://api.themoviedb.org/3/discover/movie',
                {
                    params: {
                        api_key: process.env.REACT_APP_API_KEY,
                        with_genres: genre,
                        // : komt resultaat van de context
                        sort_by: 'vote_average.desc',
                        'vote_count.gte': 1000,
                        page: 1,
                    },
                }
            );
            // in context resultaat van de select
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
        if (genre !== '') {
            handleSearch();
        }
    }, [genre]);

    const handleGenreChange = (event) => {
        setGenre(event.target.value);
        setResults([]);
    };
    console.log(results);

    return (
        <section className="outer-content-container">
            <div className="inner-content-container">
                <form>
                    <label>
                        {/*Select your Genre here: */}
                        <GenreSelect value={genre} onGenreChange={handleGenreChange}/>
                    </label>

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

            </div>

        </section>


    );
}

export default GenreForm;