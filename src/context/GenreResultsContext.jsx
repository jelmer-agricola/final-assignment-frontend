import React, {createContext, useState} from 'react';
import axios from "axios";
import GenreSelect from '../components/GenreForm/GenreSelect';

const GenreResultsContext = createContext([]);

export function ResultsProvider({children}) {
    const [genre, setGenre] = useState('');
    const [results, setResults] = useState([]);
    const [isLoading, setIsLoading] = useState('');
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

    const value = {genre, results, handleSearch, handleGenreChange};

    return (
        <GenreResultsContext.Provider value={value}>
            <GenreSelect />
            {children}
        </GenreResultsContext.Provider>
    );
}

export default GenreResultsContext;
