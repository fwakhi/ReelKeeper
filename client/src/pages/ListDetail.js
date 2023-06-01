import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { imgUrl } from '../api/tmdb'
import { useNavigate } from 'react-router-dom';
import languageNames from "../utils/languageNames";
import { fetchMovie } from '../api/services/Movies';
import LoadingSpinner from '../components/Loading';
import MovieGrid from "../components/MovieGrid";
import { getMovieList } from "../api/services/MovieList";


const ListDetail = () => {

    let { list_id } = useParams()

    const [movies, setMovies] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const navigate = useNavigate();

    useEffect(() => {
        displayList();
    }, [list_id])

    const displayList = async () => {
        setMovies(await getMovieList(list_id));
        setIsLoading(false);
    }

    // const handleClick = (clickedMovieId) => {
    //     setIsLoading(true);
    //     navigate(`/movie/${clickedMovieId}`, { replace: true });
    //     list_id = clickedMovieId
    //     // window.location.reload(true);
    // }

    return (
        <>
            {isLoading
                ? <LoadingSpinner />
                : <MovieGrid movies={movies}/>
            }
        </>
    )
}
export default ListDetail;
