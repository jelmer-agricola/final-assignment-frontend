import React from 'react';

export { limitCharacters };
function limitCharacters(str) {
    if (str.length > 200) {
        return str.slice(0, 200) + '...';
    } else {
        return str;
    }
}
const movieOverview = 'This is a movie overview that is longer than 400 characters...';
const limitedOverview = limitCharacters(movieOverview);
console.log(limitedOverview);
