import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import LoadingSpinner from '../components/Loading';
import MovieGrid from "../components/MovieGrid";
import { Container, Button } from "react-bootstrap";
import BackButton from "../components/BackButton";
import useInfo from "../hooks/useInfo";
import { removeList } from "../api/services/List";
import { refreshUser } from "../api/axios";


const ListDetail = () => {
    const { list_id } = useParams()
    const { userInfo, setUserInfo } = useInfo()

    const [movies, setMovies] = useState([]);
    const [listName, setListName] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const navigate = useNavigate();

    useEffect(() => {
        displayList();
    }, [list_id, userInfo?.id])

    const displayList = async () => {
        const list = userInfo?.lists?.find(list => list.id == list_id);
        setListName(list?.title)
        if (list?.hasOwnProperty('movielists')) {
            setMovies(list["movielists"]);
        }
        setIsLoading(false);
    }

    const deleteList = async () => {
        if (await removeList(list_id, userInfo?.id)) {
            console.log("Removed")
            setUserInfo(await refreshUser(userInfo?.id));
            navigate(`/profile`, { replace: true });
        } else {
            console.log("Error")
        }
    }

    return (
        <>
            {isLoading
                ? <LoadingSpinner />
                : <Container className="mb-5">
                    <div className="row margin-top mb-5">
                        <BackButton />
                        <div className="col-10">
                            <h2>Hi @{userInfo?.username}, this is your <b>{listName}</b> list:</h2>
                        </div>
                        <Button onClick={deleteList} variant="danger"><i className="fa-solid fa-trash"></i></Button>
                    </div>
                    <MovieGrid movies={movies} />
                </Container>
            }
        </>
    )
}
export default ListDetail;
