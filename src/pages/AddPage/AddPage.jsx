import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import axios from "axios";
import ResultCard from "../../components/Watchlist/ResultCard";
import './AddPage.css'


// loading etc hier toevoegen
//USE EFFECT TOEVOEGEN


function AddPage() {
    const [query, setQuery] = useState('');
    const [results, setResults] = useState([]);

    const onChange = async (e) => {
        e.preventDefault();

        setQuery(e.target.value);


        const searchTimeout = setTimeout(async () => {

            //  met use fetch.  niet mogelijk, omdat de de gebruiker input invoerd.
            try {
                const result = await axios.get(
                    `https://api.themoviedb.org/3/search/multi?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=1&include_adult=false&query=${e.target.value}`
                );
// poging om oop person te zoeken te excluden hieronder

//             const result = await axios.get(
//                 `https://api.themoviedb.org/3/search/multi?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=1&include_adult=false&query=${e.target.value}&media_type=movie,tv
// `
//             );


                // setResults(res.data.results);

                setResults(result.data.results.slice(0, 10));
            } catch (error) {

                setResults([]);
            }
            clearTimeout(searchTimeout);

        }, 1000);
        console.log(results);

    };


    return (
        <main>


            <section className="outer-content-container">
                <div className="inner-content-container">
                    <h2> Don't know what to watch and too lazy to use the searchbar <Link to="/moods">click here</Link>
                    </h2>


                    <div>
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
}

export default AddPage;