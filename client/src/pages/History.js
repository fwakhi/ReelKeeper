import React, {  } from "react";
import '../style/Home.css';
import { useNavigate } from 'react-router-dom';
import useInfo from '../hooks/useInfo'
import MovieGrid from '../components/MovieGrid';
import NoMovies from "../components/NoMovies";
import BackButton from "../components/BackButton";


const History = () => {
    const { userInfo } = useInfo();
    const navigate = useNavigate();
    const handleClick = () => navigate(`/profile`)

    return (

        <div className="container">
            <div className="row margin-top">
                <BackButton />
                <div className="col-10">
                    <h2>Hi @{userInfo?.username}, these are your watched movies:</h2>
                </div>
                <div className="col-12 ml-5">
                    <div>
                        {userInfo?.histories?.length > 0 ? <MovieGrid movies={userInfo?.histories} /> : <NoMovies />}
                    </div>
                </div>
            </div>
        </div>
    )
}
export default History;
