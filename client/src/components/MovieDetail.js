import React, { useEffect } from "react";
import { useParams } from "react-router-dom";

const MovieDetail = (props) => {

    const { movie_id } = useParams()

    useEffect(() => {
        return () => {
            // TODO - fetchSingleMovie(movie_id)
            console.log(movie_id)
        }
    }, [])


    return (
        <div className="col margin-top">
            {movie_id}
        </div>
    )
}
export default MovieDetail;