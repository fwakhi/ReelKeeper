import React, { useEffect, useState } from 'react';

import { fetchCollection } from '../api/tmdb'

//COMPONENTES
import MovieList from '../components/MovieList';
import MovieListHeading from '../components/MovieListHeading';
import AddFavourites from '../components/AddFavourites';
import useAuth from '../hooks/useAuth';
import { saveFavorite } from '../api/services/Favorites';


const ViewMovies = () => {

    const { auth: { user: { id: userId } } } = useAuth()

    const ids = [10, 8936, 119, 1241, 33514, 2602, 123800, 264]
    const [collections, setCollections] = useState([]);

    useEffect(() => {
        const myPromise = new Promise((resolve, reject) => {
            const newArray = [];
            ids.forEach(async i => {
                await fetchCollection(i)
                    .then(response => {
                        const movies = response.data.parts.sort(function (filmA, filmB) {
                            const a = filmA.release_date.split('/').reverse().join('');
                            const b = filmB.release_date.split('/').reverse().join('');
                            return a > b ? 1 : a < b ? -1 : 0;
                        })
                        response.data.parts = movies
                        newArray.push(response.data)
                        resolve(newArray);
                    }).catch(error => {
                        reject(error);
                    });
            });
        });
        const getCollections = async () => {
            myPromise.then(response => setCollections(response))
                .catch(error => console.error(error))
        }
        getCollections();
    }, []);

    const addFavouriteMovie = async (movie) => userId && await saveFavorite(movie, userId)

    const movieCollections =
        React.Children.toArray(
            collections.map(col =>
            (<>
                <div className='row d-flec align-items-center  mt-5'>
                    <MovieListHeading heading={col.name} />
                </div>
                <div className='row'>
                    <MovieList movies={col?.parts} handleFavouritesClick={addFavouriteMovie}
                        favouriteComponent={AddFavourites} />
                </div>
            </>)
            ))

    return (
        <div className="container-fluid movie-app">
            {/* COLLECTIONS MOVIES  */}
            {movieCollections}
        </div>
    );
}
export default ViewMovies;
