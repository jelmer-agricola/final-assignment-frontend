// import PropTypes from 'prop-types'; is used in the component to define the expected data types of the props that are passed into the component. By using PropTypes, it allows for better error checking and debugging in the development process.
//     It is recommended to include PropTypes in components to ensure that the correct data is passed in, which can help prevent bugs and make debugging easier.
//     Technically, you can leave out PropTypes and your code will still work, but it's generally considered a best practice to use them for larger or more complex projects.
// import PropTypes from 'prop-types';
import React, {useState} from 'react';
import axios from 'axios';
import ResultCard from "../Watchlist/ResultCard";

const GenreMoodButton = ({children, primaryGenre, secondaryGenre, tertiaryGenre, quaternaryGenre, quinaryGenre }) => {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');
    const [results, setResults] = useState([]);


    const handleButtonClick = async () => {
        setIsLoading(true);
        try {
            const result = await axios.get(
                'https://api.themoviedb.org/3/discover/movie',
                {
                    params: {
                        api_key: process.env.REACT_APP_API_KEY,
                        with_genres: `${primaryGenre},${secondaryGenre},${tertiaryGenre},${quaternaryGenre},${quinaryGenre}`,
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

    return (
        <div>
                <button
                    // onRedirect ={handleButtonClick()}
                    onClick={handleButtonClick}
                    className="genre-btn"
                >
                    {children}</button>

            {isLoading && <div>Loading...</div>}
            {error && <div>{error}</div>}
            {results.length > 0 && (
                <div>
                    <h2>Results:</h2>
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
                </div>


            )}


        </div>

    );
};

// GenreMoodButton.propTypes = {
//     primaryGenre: PropTypes.number.isRequired,
//     secondaryGenre: PropTypes.number,
//     tertiaryGenre: PropTypes.number,
//     quaternaryGenre: PropTypes.number,
//     quinaryGenre: PropTypes.number,
// };

export default GenreMoodButton;
