import React, {useState, useEffect} from 'react';
import axios from 'axios';
import ResultCard from '../WatchlistComponents/ResultCard';
import '../WatchlistComponents/WatchlistComponents.css';
import './GenreForm.css'
import {useNavigate} from "react-router-dom";
import GenreSelect from "./GenreSelect";
import Button from "../Button/Button";



function GenreForm() {
    const navigate = useNavigate();
    const [genre, setGenre] = useState('');
    const [results, setResults] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');

    const handleSearch = async (selectedGenre) => {
        setIsLoading(true);
        try {
            const result = await axios.get(
                'https://api.themoviedb.org/3/discover/movie',
                {
                    params: {
                        api_key: process.env.REACT_APP_API_KEY,
                        with_genres: selectedGenre,
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

    useEffect(() => {
        if (genre !== '') {
            handleSearch(genre);
        }
    }, [genre]);

    const handleGenreChange = (event) => {
        setGenre(event.target.value);
        setResults([]);
        if (event.target.value !== '') {
            handleSearch(event.target.value);
        }
    };

    return (
            <section className="outer-content-container">
                <div className="inner-content-container genre-form">

                        <form onSubmit={(event) => event.preventDefault()}>
                            <label className="genre-form__form">
                                <GenreSelect value={genre} onGenreChange={handleGenreChange} />
                                <Button
                                    children="😊 Happy 😊"
                                    onClick={() => navigate('/happy')}
                                    className="genre-btn happy"
                                />
                                <Button
                                    children="🥰 In love 🥰"
                                    onClick={() => navigate('/angry')}
                                    className="genre-btn angry"
                                />
                                <Button
                                    children="😡 Angry 😡"
                                    onClick={() => navigate('/angry')}
                                    className="genre-btn angry"
                                />
                                <Button
                                    children="🤔 Curious  🤔"
                                    onClick={() => navigate('/curious')}
                                    className="genre-btn curious"
                                />
                                <Button
                                    children="😢 Sad 😢"
                                    onClick={() => navigate('/sad')}
                                    className="genre-btn sad"
                                />
                            </label>

                        </form>



                    <div className="genre-form__results-container">

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

                </div>
            </section>
    );
}

export default GenreForm;
