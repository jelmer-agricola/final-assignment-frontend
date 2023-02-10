// hier heb ik geen custom hook gebruikt. Omdat deze datafetch getriggerd wordt door een submit event en niet op pageload.

import React, {useState} from "react";
import axios from "axios";
import "./SearchBar.css";

//gegevens moeten op andere plek terugkomen

function Searchbar() {
    const[query, setQuery] = useState( '');
    const[searchResults, setSearchResults] = useState([]);
    const [error, setError] = useState(null);
    const [isLoading, setLoading] = useState(false);


    // hier heb ik geen custom hook useFetch gebruikt. Omdat deze custom Hook geen data returnd en dit in de handle sumbit wel nodig is.
    const handleSubmit = async (event) => {
        event.preventDefault();
         try{
            const response = await axios.get(
                'https://api.themoviedb.org/3/search/multi',
                {
                    params: {
                        api_key: process.env.REACT_APP_API_KEY,
                        query,
                    }
                }
            );
            console.log(response.data);
            setSearchResults(response.data.results.slice(0, 10));

        }catch (e) {
            console.error(e);
            setError(true);
        }
        setLoading(false);
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
                <button type="submit">Zoek</button>
            </form>
            {error && <p>An error occurred!</p>}
            {isLoading ? (
                <p>Loading...</p>
            ) : (
                <div>
                    {searchResults.map(result => (
                        <article key={result.id}>
                            <img src={`https://image.tmdb.org/t/p/w500${result.poster_path}`}
                                 alt={result.title || result.name}/>
                            <p>{result.title || result.name}</p>
                            <p>{result.release_date ? result.release_date.substring(0, 4) : '-'}</p>
                            {/*<p>{result.release_date}</p>*/}
                            {/*{result.media_type === 'movie' && <p>Directed by {result.director}</p>}*/}

                        </article>
                    ))}
                </div>
            )}
        {/*Deze resultaten ergens anders laten terugkomen.    */}

        </div>
    );
}
export default Searchbar;