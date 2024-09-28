// script.js

const movies = [
    {
        title: "Inception",
        year: "2010",
        description: "A thief who steals corporate secrets through dream-sharing technology is given the inverse task of planting an idea into the mind of a CEO.",
        image: "https://via.placeholder.com/200x300?text=Inception"
    },
    {
        title: "Interstellar",
        year: "2014",
        description: "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
        image: "https://via.placeholder.com/200x300?text=Interstellar"
    },
    {
        title: "The Matrix",
        year: "1999",
        description: "A computer hacker learns from mysterious rebels about the true nature of his reality and his role in the war against its controllers.",
        image: "https://via.placeholder.com/200x300?text=The+Matrix"
    }
];

function displayMovies(filter = "") {
    const movieList = document.getElementById('movie-list');
    movieList.innerHTML = ""; // Clear the list before adding

    const filteredMovies = movies.filter(movie => 
        movie.title.toLowerCase().includes(filter.toLowerCase())
    );

    filteredMovies.forEach(movie => {
        const movieItem = document.createElement('div');
        movieItem.className = 'movie';
        movieItem.innerHTML = `
            <img src="${movie.image}" alt="${movie.title}">
            <h2>${movie.title}</h2>
            <p>${movie.year}</
