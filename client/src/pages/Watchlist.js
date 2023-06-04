import React, { } from "react";
import '../style/Home.css';
import useInfo from '../hooks/useInfo'
import MovieGrid from '../components/MovieGrid';
import NoMovies from "../components/NoMovies";
import BackButton from "../components/BackButton";


const Watchlist = () => {
    const { userInfo } = useInfo();

    return (

        <div className="container">
            <div className="row margin-top">
                <BackButton />
                <div className="col-10">
                    <h2>Hi, @{userInfo?.username}, this is your Watchlist:</h2>
                </div>
                <div className="col-12 ml-5">
                    <div>
                        {userInfo?.watchlists?.length > 0 ? <MovieGrid movies={userInfo?.watchlists} /> : <NoMovies />}
                    </div>

                </div>
            </div>
        </div>
    )
}
export default Watchlist;
