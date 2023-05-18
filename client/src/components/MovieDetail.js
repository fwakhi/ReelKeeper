import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchSingleMovie, fetchSingleMovieCredits, fetchRecommendations, imgUrl } from '../api/tmdb'

const MovieDetail = (props) => {

    const { movie_id } = useParams()
    const [movie, setMovie] = useState({});
    



    const languageNames = {
        "en": "English",
        "zh": "Chinese",
        "hi": "Hindi",
        "es": "Spanish",
        "ar": "Arabic",
        "bn": "Bengali",
        "pt": "Portuguese",
        "ru": "Russian",
        "ja": "Japanese",
        "pa": "Punjabi",
        "de": "German",
        "jv": "Javanese",
        "ms": "Malay",
        "da": "Danish",
        "fr": "French",
        "fi": "Finnish",
        "vi": "Vietnamese",
        "ko": "Korean",
        "it": "Italian",
        "ta": "Tamil",
        "sv": "Swedish",
        "eu": "Basque",
        "ca": "Catalan",
        "el": "Greek",
        "he": "Hebrew",
        "is": "Icelandic",
        "gl": "Galician"
    }


    const getMovie = async () => {
        const response = await fetchSingleMovie(movie_id);

        if (response.data) {
            response.data.genres = response.data.genres.map(genre => genre.name);
            return response.data;

        }

    }


    const getCast = async (movie) => {
        const responseCredits = await fetchSingleMovieCredits(movie_id);
        const rec = await fetchRecommendations(movie_id);
        console.log(rec);

        if (responseCredits.data) {
            const director = responseCredits.data.crew.filter(crew => crew.job === "Director");
            movie.crew = responseCredits.data.crew.filter((_, i) => i < 15);
            movie.cast = responseCredits.data.cast.filter((_, i) => i < 15);
            movie.director = director;

        }

    }




    useEffect(() => {
        const nombreRandom = async () => {
            const peli = await getMovie();
            await getCast(peli);
            setMovie(peli);
        }
        nombreRandom();
    }, [])




    const genres = movie?.genres?.map(genre => genre.name);

    return (
        <div className="container margin-top">
            <div className="row">
                <div className="col-4 posterContainer">
                    <img src={imgUrl + movie.poster_path}></img>
                </div>
                <div className="col-8">
                    {/* Title & year  */}
                    <h1>{movie.title}<span className="releaseYear ml-4">{movie?.release_date?.split('-')[0]}</span></h1>

                    {/* Director  */}
                    <p><b>Directed by</b> {movie.director?.map(dir => (<span className="directorTag">{dir.name} </span>))} </p>

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

                    <p className="mt-5">If you liked this title, you'll probable like...</p>


                   


                    
                    
                </div>
            </div>

        </div>
    )


}


export default MovieDetail;