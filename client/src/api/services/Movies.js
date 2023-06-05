import { fetchSingleMovie, latestMovies, popularMovies, upcomingMovies, fetchCollection } from "../tmdb";

export const filterMovies = (data) => {
    return data.filter(movie => {
        return movie.poster_path &&
            movie.adult == false &&
            movie.id != 617932 &&
            movie.id != 732966 &&
            movie.id != 747355 &&
            !movie.overview.toLowerCase().includes("sex") &&
            !movie.overview.toLowerCase().includes("sexual") &&
            !movie.overview.toLowerCase().includes("erotic") &&
            !movie.overview.toLowerCase().includes("porn") &&
            !movie.title.toLowerCase().includes("porn") &&
            !movie.title.toLowerCase().includes("porno") &&
            !movie.title.toLowerCase().includes("erotic") &&
            !movie.title.toLowerCase().includes("sexy");
    });
}

export const fetchMovie = async (id) => {
    const response = await fetchSingleMovie(id);
    if (response.data) {
        const movie = response.data
        movie.genres = movie.genres.map(genre => genre.name);
        if (movie.recommendations.results.length > 0) {
            movie.recommendations = filterMovies(movie.recommendations.results).filter((_, i) => i < 5);
        } else {
            movie.recommendations = [
                { id: 545611, poster_path: "/w3LxiVYdWWRvEVdn5RYq6jIqkb1.jpg" },
                { id: 234200, poster_path: "/Kc3vbqO0X4VRnjACGNoWLNQvHo.jpg" },
                { id: 150540, poster_path: "/2H1TmgdfNtsKlU9jKdeNyYL5y8T.jpg" },
                { id: 1548, poster_path: "/uwKqnUPE4dSM0kKuMW0vXpURh2T.jpg" },
                { id: 369557, poster_path: "/sUWpVlrvzU2SJbnVZqIeKulPKwk.jpg" }
            ]
        }
        const director = movie.credits.crew.filter(crew => crew.job == "Director");
        movie.credits.crew = movie.credits.crew.filter((_, i) => i < 15);
        movie.credits.cast = movie.credits.cast.filter((_, i) => i < 15);
        movie.director = director;
        return movie
    }
}

export const fetchMovies = async (ids) => {
    const fetchedMovies = []
    ids.forEach(async movieId => {
        const response = await fetchSingleMovie(movieId.id);
        if (response.data) {
            fetchedMovies.push(response.data)
        }
    });
    return fetchedMovies;
}

export const fetchCollections = async (ids) => {
    const data = ids.map(id => new Promise((res, rej) => res(fetchCollection(id))));
    const output = await Promise.all(data);
    const collections = output.map(res => res.data)
    collections.map(col => col.parts.sort(function (filmA, filmB) {
        const a = filmA.release_date.split('/').reverse().join('');
        const b = filmB.release_date.split('/').reverse().join('');
        return a > b ? 1 : a < b ? -1 : 0;
    }));
    return collections;
}

export const getPopularMovies = async () => {
    const response = await popularMovies();
    return response.data.results.filter((_, i) => i < 10)
}

export const getUpcomingMovies = async () => {
    const response = await upcomingMovies();
    return response.data.results.filter((_, i) => i < 10)
}

export const getLatestMovies = async () => {
    const response = await latestMovies();
    return response.data.results.reverse().filter((_, i) => i < 10);
}
