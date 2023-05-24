import React from 'react';
import { imgUrl } from '../api/tmdb'
import { useNavigate } from 'react-router-dom';
import Buttons from './Buttons';
import AddFavourites from '../components/AddFavourites';
import WatchlistButton from './WatchlistButton';
import HistoryButton from './HistoryButton';

const MovieList = (props) => {

    const navigate = useNavigate();

    const handleClick = (clickedMovieId) => {
        navigate(`/movie/${clickedMovieId}`)
    }

    if (props.hideButtons) {
        return (
            <>
                {props.movies.map((movie, userId) =>
                    <div key={movie.id} className='image-container d-flex justify-content-start m-3'>
                        <img onClick={() => handleClick(movie.id)} src={imgUrl + movie.poster_path} alt="poster" className='mb-1'></img>
                    </div>
                )}
            </>
        )
    }

    return (
        <>
            {props.movies.map((movie) =>
                <div key={movie.id} className='image-container d-flex justify-content-start m-3'>
                    <img onClick={() => handleClick(movie.id)} src={imgUrl + movie.poster_path} alt="poster" className='mb-1'></img>
                    <div className='justify-content-end'>
                        <AddFavourites
                            movie={movie}
                            onFavouritesAdded={props.onFavouritesAdded}
                            onFavouritesRemoved={props.onFavouritesRemoved}
                            favourites={props.favourites}
                        />
                        <WatchlistButton
                        movie={movie}
                        />
                        <HistoryButton
                        movie={movie}
                        />
                    </div>
                </div>
            )}
        </>
    )
}
export default MovieList;
