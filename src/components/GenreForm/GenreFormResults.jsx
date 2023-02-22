// import React from 'react';
// import ResultCard from "../Watchlist/ResultCard";
//
// function GenreFormResults({ isLoading, error, results }) {
//     return (
//         <div>
//             {isLoading ? <p>Loading...</p> : null}
//             {error ? <p>{error}</p> : null}
//             {results.length > 0 ? (
//                 <ul>
//                     {results.map((mediaTitle) => (
//                         <li key={mediaTitle.id}>
//                             <p className="title">{mediaTitle.title || mediaTitle.name}</p>
//                             <ResultCard mediaTitle={mediaTitle}></ResultCard>
//                         </li>
//                     ))}
//                 </ul>
//             ) : null}
//         </div>
//     );
// }
//
// export default GenreFormResults;
// import React, { useContext } from 'react';
// import GenreResultsContext from './GenreResultsContext';
//
// function GenreResults() {
//     const { genre, results, handleSearch } = useContext(GenreResultsContext);
//
//     return (
//         <div>
//             <h2>Results for {genre}:</h2>
//             <button onChange={handleSearch}>Search</button>
//             {results.map((result) => (
//                 <div key={result.id}>{result.title}</div>
//             ))}
//         </div>
//     );
// }
//
// export default GenreResults;