import React, { useContext } from 'react';
import GenreResultsContext from '../../context/GenreResultsContext';

function GenreSelect() {
        const { genre, handleGenreChange } = useContext(GenreResultsContext);

        return (
            <select value={genre} onChange={handleGenreChange}>
                    <option value="">All</option>
                    <option value="28">Action</option>
                    <option value="12">Adventure</option>
                    <option value="16">Animation</option>
                    <option value="35">Comedy</option>
                    <option value="80">Crime</option>
                    <option value="99">Documentary</option>
                    <option value="18">Drama</option>
                    <option value="10751">Family</option>
                    <option value="14">Fantasy</option>
                    <option value="36">History</option>
                    <option value="27">Horror</option>
                    <option value="10402">Music</option>
                    <option value="9648">Mystery</option>
                    <option value="10749">Romance</option>
                    <option value="878">Science Fiction</option>
                    <option value="53">Thriller</option>
                    <option value="10752">War</option>
                    <option value="37">Western</option>
            </select>
        );
}

export default GenreSelect;

