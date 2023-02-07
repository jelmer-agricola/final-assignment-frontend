import React, {useState} from 'react';
import axios from "axios";
import ResultCard from "./ResultCard";
import './Watchlist.css';


const AddPage = () => {
    const [query, setQuery] = useState('');
    const [results, setResults] = useState([]);

    const onChange = async (e) => {
        e.preventDefault();

        setQuery(e.target.value);

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
        <>
<h2>Don't know what to watch and too lazy to use the searchbar click here.. </h2>
        <div className="add-page">
            <div className="container">
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
                        {results.map((mediaTitle) =>(
                            <li key={mediaTitle.id}>{mediaTitle.title || mediaTitle.name}
                            <ResultCard mediaTitle={mediaTitle}></ResultCard>
                            </li>

                        ))}

                    </ul>
                )}
                </div>
            </div>
        </div>
        </>
    );
};

export default AddPage;