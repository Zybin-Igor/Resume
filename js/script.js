"use sctrict";
//console.log("Open Resume");
const numberOfFilms = prompt('how many films have you watched?', ' ');
let PesonalMovieOB = {
    count:numberOfFilms,
    movies: {},
    actors: {},
    genres: {},
    privat: false
};
const a = prompt('Last watched movie?', ''),
      b = prompt('How do you rate?', ''),
      c = prompt('Last watched movie?', ''),
      d = prompt('How do you rate?', '');
PesonalMovieOB.movies[a] = b;

