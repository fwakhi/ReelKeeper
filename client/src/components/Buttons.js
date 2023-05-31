import React from "react";
import AddFavourites from "./AddFavourites";
import HistoryButton from "./HistoryButton";
import WatchlistButton from "./WatchlistButton";
import ListButton from "./ListButton";


const Buttons = (props) => {
    return (
        <div className="container mt-3">
            <div className="row justify-content-center">
            <AddFavourites movie={props.movie} />
            <WatchlistButton movie={props.movie} />
            <HistoryButton movie={props.movie} />
            <ListButton movie={props.movie} />
            </div>
        </div>
    )
}
export default Buttons;
