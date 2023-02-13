import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import axios from "axios";
import ResultCard from "../../components/Watchlist/ResultCard";
import './Home.css'
import '../../components/Watchlist/Watchlist.css'

function Home() {
    const [query, setQuery] = useState('');
    const [results, setResults] = useState([]);

    const onChange = async (e) => {
        e.preventDefault();

        setQuery(e.target.value);

        //  met use fetch.  niet mogelijk, omdat de de gebruiker input invoerd.
        try {
            const res = await axios.get(
                `https://api.themoviedb.org/3/search/multi?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=1&include_adult=false&query=${e.target.value}`
            );
            setResults(res.data.results);
            console.log(results);
            setResults(res.data.results.slice(0, 10));

        } catch (error) {

            setResults([]);
        }
    };

    return (
        <main>

            <h2 className="inner-content-container">Don't know what to watch and too lazy to use the searchbar click
                here.. </h2>

            <section className="outer-content-container">
                <div className="inner-content-container">
                    <div >
                        <div className="add-content">
                            <div className="input-wrapper">
                                <input type="text "
                                       placeholder="Search for a Movie or Serie"
                                       value={query}
                                       onChange={onChange}
                                />
                            </div>
                            {results.length > 0 && (
                                <ul className="results">
                                    {results.map((mediaTitle) => (
                                        <li key={mediaTitle.id}><p
                                            className="title">{mediaTitle.title || mediaTitle.name}</p>
                                            <ResultCard mediaTitle={mediaTitle}></ResultCard>
                                        </li>

                                    ))}

                                </ul>
                            )}
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default Home;