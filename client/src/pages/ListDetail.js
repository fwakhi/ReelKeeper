import React, { useEffect, useState } from "react";
import useAuth from "../hooks/useAuth";
import { useParams } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import LoadingSpinner from '../components/Loading';
import MovieGrid from "../components/MovieGrid";
import { getMovieList } from "../api/services/MovieList";
import BackButton from "../components/BackButton";


const ListDetail = () => {
    const { auth } = useAuth();
    const name = auth.user.username;
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
            <div className="container">
                <div className="row margin-top">
                    <BackButton />
                    <div className="col-10">
                        <h2>Hi @{name}, this is your list:</h2>
                    </div>
                </div>
            </div>

            {isLoading
                ? <LoadingSpinner />
                : <MovieGrid movies={movies} />
            }
        </>
    )
}
export default ListDetail;
