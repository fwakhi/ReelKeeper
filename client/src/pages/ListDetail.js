import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import LoadingSpinner from '../components/Loading';
import MovieGrid from "../components/MovieGrid";
import { Container } from "react-bootstrap";
import BackButton from "../components/BackButton";
import useInfo from "../hooks/useInfo";


const ListDetail = () => {
    let { list_id } = useParams()
    const { userInfo } = useInfo()

    const [movies, setMovies] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        displayList();
    }, [list_id, userInfo.id])

    const displayList = async () => {
        const list = userInfo?.lists?.find(list => list.id == list_id);
        setMovies(list["movielists"]);
        setIsLoading(false);
    }

    return (
        <>
            {isLoading
                ? <LoadingSpinner />
                : <Container>
                    <div className="row margin-top">
                        <BackButton />
                        <div className="col-10">
                            <h2>Hi @{userInfo?.username}, this is your list:</h2>
                        </div>
                    </div>
                    <MovieGrid movies={movies} />
                </Container>
            }
        </>
    )
}
export default ListDetail;
