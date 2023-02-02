import React, {useState, useEffect} from "react";
import axios from "axios";
import "./Searchbar.css";
//gegevens moeten op andere plek terugkomen

function Searchbar() {
    const[query, setQuery] = useState( '');
    const[searchResults, setSearchResults] = useState([]);
    const [error, setError] = useState(null);
    const [isLoading, setLoading] = useState(false);

    useEffect(() => {
        if (!query) {
            return;
        }
        search();
    }, [query]);


    async function search(){
        try{
            const response = await axios.get(
                'https://api.themoviedb.org/3/search/multi',
                {
                    params: {
                        api_key: process.env.REACT_APP_API_KEY,
                        query
                    }
                }
            );
            setSearchResults(response.data.results);

        }catch (e) {
            console.error(e);
            setError(true);
        }
        setLoading(false);
    }
    const handleSubmit = event => {
        event.preventDefault();
        search();
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>
                    Search:
                    <input
                        type="text"
                        value={query}
                        onChange={event => setQuery(event.target.value)}
                    />
                </label>
            </form>
            {error && <p>An error occurred!</p>}
            {isLoading ? (
                <p>Loading...</p>
            ) : (
                <div>
                    {searchResults.slice(0, 10).map(result => (
                        <div key={result.id}>
                            <img src={`https://image.tmdb.org/t/p/w500${result.poster_path}`}
                                 alt={result.title || result.name}/>
                            <p>{result.title || result.name}</p>
                            <p>{result.release_date ? result.release_date.substring(0, 4) : '-'}</p>
                            {/*<p>{result.release_date}</p>*/}
                            {/*{result.media_type === 'movie' && <p>Directed by {result.director}</p>}*/}

                        </div>
                    ))}
                </div>
            )}
        {/*Deze resultaten ergens anders laten terugkomen.    */}

        </div>
    );
}
export default Searchbar;