import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import LoadingSpinner from '../components/Loading';
import MovieGrid from "../components/MovieGrid";
import NoMovies from "../components/NoMovies";
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
    const [watchedStats, setWatchedStats] = useState();
    const [isLoading, setIsLoading] = useState(true);

    const navigate = useNavigate();

    useEffect(() => {
        displayList();
        getStats();
    }, [list_id, userInfo?.id])

    useEffect(() => {
        getStats();
    }, [movies, userInfo?.histories])

    const getStats = () => {
        const size = movies?.length;
        const listMovies = movies?.map(obj => obj.id);
        const historyMovies = userInfo?.histories?.map(obj => obj.id);
        const commonIds = listMovies?.filter(id => historyMovies?.includes(id));
        const watchedMoviesInList = commonIds?.length;
        const percentage = Math.round((watchedMoviesInList / size) * 100);
        const stats = <h4>Watched {watchedMoviesInList} out of {size} ({isNaN(percentage) ? '0' : percentage}%)</h4>;
        setWatchedStats(stats);
    }

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
            setUserInfo(await refreshUser(userInfo?.id));
            navigate(`/profile`, { replace: true });
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
                    {
                        movies?.length > 0 ?
                            <div>
                                {watchedStats}
                                <MovieGrid movies={movies} />
                            </div> : <NoMovies />
                    }
                </Container>
            }
        </>
    )
}
export default ListDetail;
