import React from "react";
import AddFavourites from "./AddFavourites";
import HistoryButton from "./HistoryButton";
import WatchlistButton from "./WatchlistButton";


const Buttons = (props) => {
    return (
        <div className='justify-content-end'>
            <AddFavourites movie={props.movie} />
            <WatchlistButton movie={props.movie} />
            <HistoryButton movie={props.movie} />
        </div>
    )
}
export default Buttons;
