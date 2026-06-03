const API_KEY = "c28a6e0be0b5965fcb187ab335f18b1c";
const movieGrid = document.getElementById("movieGrid");

async function getPopularMovies() {
    const url = `https://api.themoviedb.org/3/movie/popular?api_key=$c28a6e0be0b5965fcb187ab335f18b1c&language=id-ID&page=1`;

    const response = await fetch(url);
    const data = await response.json();

    displayMovies(data.results);
}


function displayMovies(movies) {
    movieGrid.innerHTML = "";

    movies.forEach(movie => {
        movieGrid.innerHTML += `
            <div class="movie-card">
                <img src="https://image.tmdb.org/t/p/w500${movie.poster_path}" alt="${movie.title}">
                <div style="padding:15px;">
                    <h3>${movie.title}</h3>
                    <p>${movie.release_date ? movie.release_date.substring(0,4) : "-"}</p>
                    <p>⭐ ${movie.vote_average.toFixed(1)}/10</p>
                </div>
            </div>
        `;
    });
}

getPopularMovies();
