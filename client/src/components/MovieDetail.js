import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { imgUrl } from '../api/tmdb'
import { useNavigate } from 'react-router-dom';
import languageNames from "../utils/languageNames";
import Buttons from "./Buttons";
import { fetchMovie } from '../api/services/Movies';
import LoadingSpinner from '../components/Loading';


const MovieDetail = () => {

    let { movie_id } = useParams()
    const [movie, setMovie] = useState({});
    const [isLoading, setIsLoading] = useState(true);

    const navigate = useNavigate();

    useEffect(() => {
        displayMovie();
    }, [movie_id])

    const displayMovie = async () => {
        setMovie(await fetchMovie(movie_id));
        console.log("movie", movie)
        setIsLoading(false);
    }

    const handleClick = (clickedMovieId) => {
        setIsLoading(true);
        navigate(`/movie/${clickedMovieId}`, { replace: true });
        movie_id = clickedMovieId
        // window.location.reload(true);
    }

    return (
        <>
            {isLoading
                ? <LoadingSpinner />
                : <div className="container margin-top">
                    <div className="row movieContainer">
                        <div className="col-4 posterContainer">
                            <img src={imgUrl + movie.poster_path} alt="poster"></img>
                        </div>
                        <div className="col-8 detailsContainer">
                            {/* Title & year  */}
                            <h1>{movie.title}<span className="releaseYear ml-4">{movie?.release_date?.split('-')[0]}</span></h1>

                            <div className="row">
                                {/* Director  */}
                                <p className="ml-4"><b>Directed by</b> {React.Children.toArray(movie.director?.map(dir => (<span className="directorTag">{dir.name} </span>)))} </p>

                                <div className="ml-auto mb-2">
                                    <Buttons movie={movie} />
                                </div>
                            </div>

                            {/* Overview  */}
                            <p className="text-justify ml-2">{movie.overview}</p>

                            {/* language  */}
                            <p><b>Original language:</b> <span>{languageNames[movie.original_language]}</span></p>
                            <p><b>Genres:</b>
                                {/* GENRES */}
                                {React.Children.toArray(movie.genres?.map(genre => (<span className="genreTag">{genre}</span>)))}
                            </p>

                            {/* CAST & CREW  */}
                            <p className="mt-4">
                                <a className="castTag" data-toggle="collapse" href="#collapse1" role="button" aria-expanded="false" aria-controls="collapse1">
                                    Cast
                                </a>
                                <a className="crewTag" data-toggle="collapse" href="#collapse2" role="button" aria-expanded="false" aria-controls="collapse2">
                                    Crew
                                </a>
                                {movie?.trailer ? <a href={movie?.trailer} className='btn-pass' target="_blank">Trailer</a> : ""}
                            </p>

                            <div className="collapse mb-5" id="collapse1">
                                <div className="card card-body">
                                    {React.Children.toArray(movie.credits?.cast.map(act => (<span><b>{act.name}</b> - {act.character} </span>)))}
                                </div>
                            </div>
                            <div className="collapse mb-5" id="collapse2">
                                <div className="card card-body">
                                    {React.Children.toArray(movie.credits?.crew.map(cr => (<span><b>{cr.name}</b> - {cr.job} </span>)))}
                                </div>
                            </div>

                            {/* RECOMMENDATIONS  */}
                            <p className="mt-5">If you liked this title, you'll probably like...</p>

                            <div className="row mb-5">
                                {React.Children.toArray(movie.recommendations?.map(r =>
                                    <div className='image-container-small d-flex justify-content-start col-2'>
                                        <img onClick={() => handleClick(r.id)} src={imgUrl + r.poster_path} alt="poster"></img>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            }
        </>
    )
}
export default MovieDetail;
