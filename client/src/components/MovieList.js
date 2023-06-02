import React from 'react';
import PosterMovie from './PosterMovie';


const MovieList = (props) => {
    return (
        <>
            {React.Children.toArray(props.movies.map((movie) =>
                <PosterMovie movie={movie} />
            ))}
        </>
    )
}
export default MovieList;
