import React from "react";
import useInfo from '../hooks/useInfo';
import useAuth from "../hooks/useAuth";

const MovieCount = () => {

    const { userInfo } = useInfo();
    const totalFavs = userInfo?.favorites?.length;
    const totalWatchlist = userInfo?.watchlists?.length;
    const totalHistory = userInfo?.histories?.length;
    const thisYearFilms = userInfo?.histories?.filter(film => (film.createdAt.split('-')[0] == "2023")).length;


    return (
        <div className="col-12 row">
            <div className="col-md-3 mt-auto">
                <h2>Hi, @{userInfo?.username}</h2>
            </div>

            <div className="row col-md-9 ml-auto movieCount">
                <div className="col-2 text-center border-dark border-right"><h4>{totalHistory}</h4>FILMS</div>
                <div className="col-2 text-center border-dark border-right"><h4>{totalFavs}</h4>FAVS</div>
                <div className="col-2 text-center border-dark border-right"><h4>{thisYearFilms}</h4>2023</div>
                <div className="col-2 text-center border-dark border-right"><h4>{totalWatchlist}</h4>WATCHLIST</div>
                <div className="col-2 text-center"><h4>{userInfo?.lists?.length}</h4>LISTS</div>
            </div>
        </div>
    )
}
export default MovieCount;