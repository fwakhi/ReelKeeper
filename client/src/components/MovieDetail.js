import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchSingleMovie, fetchSingleMovieCredits, fetchRecommendations, imgUrl } from '../api/tmdb'
import { useNavigate } from 'react-router-dom';
import languageNames from "../utils/languageNames";
import { Tabs, Tab } from 'react-bootstrap';


const MovieDetail = (props) => {

    const { movie_id } = useParams()
    const [movieId, setMovieId] = useState('0');
    const [movie, setMovie] = useState({});
    const [rec, setRecs] = useState([]);
    const navigate = useNavigate();

    const getRecs = async () => {
        const recs = await fetchRecommendations(movieId);
        if (recs.data) {
            // console.log(recs?.data.results.filter((_, i) => i < 5));
            setRecs(recs.data.results.filter((_, i) => i < 5));
        }
    }

    const getMovie = async () => {
        const response = await fetchSingleMovie(movieId);

        if (response.data) {
            console.log("movie", response.data)
            response.data.genres = response.data.genres.map(genre => genre.name);
            return response.data;
        }
    }


    const getCast = async (movie) => {
        const responseCredits = await fetchSingleMovieCredits(movieId);
        if (responseCredits.data) {
            const director = responseCredits.data.crew.filter(crew => crew.job === "Director");
            movie.crew = responseCredits.data.crew.filter((_, i) => i < 15);
            movie.cast = responseCredits.data.cast.filter((_, i) => i < 15);
            movie.director = director;
        }
    }

    const displayMovie = async () => {
        const peli = await getMovie();
        await getCast(peli);
        setMovie(peli);
        await getRecs();

    }

    const handleClick = (clickedMovieId) => {
        console.log(clickedMovieId);
        navigate(`/movie/${clickedMovieId}`, { replace: true });
        setMovieId(clickedMovieId);
        // window.location.reload(true);
        displayMovie();
    }

    useEffect(() => {
        setMovieId(movie_id);
        displayMovie();
    }, [movieId])

    return (
        <div className="container margin-top">
            <div className="row">
                <div className="col-4 posterContainer">
                    <img src={imgUrl + movie.poster_path} alt="poster"></img>
                </div>
                <div className="col-8">
                    {/* Title & year  */}
                    <h1>{movie.title}<span className="releaseYear ml-4">{movie?.release_date?.split('-')[0]}</span></h1>

                    <div className="row">
                        {/* Director  */}
                        <p className="ml-4"><b>Directed by</b> {movie.director?.map(dir => (<span className="directorTag">{dir.name} </span>))} </p>

                        {/* BUTTONS  */}
                        <div className="ml-auto mb-2">
                            <button className="btn btn-dark m-1"><i className="fa-regular fa-heart" style={{ color: "#8a8a8a;" }}></i></button>
                            <button className="btn btn-dark m-1"><i className="fa-solid fa-eye" style={{ color: "#8a8a8a;" }}></i></button>
                            <button className="btn btn-dark m-1"><i class="fa-regular fa-clock" style={{ color: "#8a8a8a;" }}></i></button>
                        </div>
                    </div>

                    {/* Overview  */}
                    <p className="text-justify ml-2">{movie.overview}</p>

                    {/* language  */}
                    <p><b>Original language:</b> <span>{languageNames[movie.original_language]}</span></p>
                    <p><b>Genres:</b>
                        {/* GENRES */}
                        {movie.genres?.map(genre => (<span className="genreTag">{genre}</span>))}
                    </p>

                    {/* CAST & CREW  */}
                    <p className="mt-4">
                        <a className="castTag" data-toggle="collapse" href="#collapse1" role="button" aria-expanded="false" aria-controls="collapse1">
                            Cast
                        </a>
                        <a className="crewTag" data-toggle="collapse" href="#collapse2" role="button" aria-expanded="false" aria-controls="collapse2">
                            Crew
                        </a>

                    </p>
                    <div className="collapse mb-5" id="collapse1">
                        <div className="card card-body">
                            {movie.cast?.map(act => (<span><b>{act.name}</b> - {act.character} </span>))}
                        </div>
                    </div>
                    <div className="collapse mb-5" id="collapse2">
                        <div className="card card-body">
                            {movie.crew?.map(cr => (<span><b>{cr.name}</b> - {cr.job} </span>))}
                        </div>
                    </div>

                    <Tabs
                        defaultActiveKey="profile"
                        id="uncontrolled-tab-example"

                    >
                        <Tab eventKey="home" title="Cast" className="castTag">
                            <div className="card card-body">
                                {movie.cast?.map(act => (<span><b>{act.name}</b> - {act.character} </span>))}
                            </div>
                        </Tab>

                        <Tab eventKey="profile" title="Crew" className="crewTag">
                            <div className="card card-body">
                                {movie.crew?.map(cr => (<span><b>{cr.name}</b> - {cr.job} </span>))}
                            </div>
                        </Tab>

                    </Tabs>

                    {/* RECOMMENDATIONS  */}
                    <p className="mt-5">If you liked this title, you'll probable like...</p>

                    <div className="row mb-5">
                        {rec?.map(r =>
                            <div className='image-container d-flex justify-content-start col-2'>
                                <img onClick={() => handleClick(r.id)} src={imgUrl + r.poster_path} alt="poster"></img>
                            </div>
                        )}
                    </div>







                </div>
            </div>

        </div>
    )


}


export default MovieDetail;